import { auth } from "@clerk/nextjs/server";

export const getUser = async () => {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "User not authenticated",
      userId: null,
    };
  }

  return { success: true, userId };
};
