import { getSummaries } from "@/actions/summary-actions";
import { SummariesPage } from "@/components/summaries/summary-dashboard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const { summaries, success } = await getSummaries();

  if (!success) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="p-6 rounded-lg bg-red-100 text-red-700 border border-red-300 shadow-md">
          <h2 className="text-lg font-semibold">Oops! Something went wrong.</h2>
          <p className="mt-2">
            We couldn't load the summaries. Please try again later.
          </p>
        </div>
      </div>
    );
  }
  return <SummariesPage />;
}
