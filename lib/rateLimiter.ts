import { upstashToken, upstashUrl } from "@/utils/env";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: upstashUrl!,
  token: upstashToken!,
});

const LIMIT = 3;
const WINDOW_SECONDS = 70;

export const RateLimit = async (userId: string) => {
  const key = `rate_limit:${userId}`;
  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, WINDOW_SECONDS);
  }

  if (current > LIMIT) {
    return false;
  }

  return true;
};
