import { getSummaryById } from "@/actions/summary-actions";
import { IndividualSummaryComp } from "@/components/summaries/summaryId/summaryId";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface IndividualSummaryPageProps {
  params: { summary_id: string };
}

export default async function IndividualSummaryPage({
  params,
}: IndividualSummaryPageProps) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // Ensure params is treated as an object
  if (!params || typeof params !== "object" || !params.summary_id) {
    console.error("Invalid params received.");
    return (
      <div className="text-2xl font-medium text-red-500 text-center flex h-screen justify-center items-center">
        Invalid page parameters.
      </div>
    );
  }

  const { summary_id } = params;
  const response = await getSummaryById(summary_id);

  if (!response.summary) {
    console.error("No summary found for this ID");
    return (
      <div className="text-2xl font-medium text-red-500 text-center flex h-screen justify-center items-center">
        Failed to fetch summary, try again later.
      </div>
    );
  }

  return <IndividualSummaryComp summary={response.summary} />;
}
