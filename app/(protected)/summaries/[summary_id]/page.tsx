// @ts-nocheck
/* eslint-disable */
import { getSummaryById } from "@/actions/summary-actions";
import { IndividualSummaryComp } from "@/components/summaries/summaryId/summaryId";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface IndividualSummaryPageProps {
  params: {
    summary_id: string;
  };
}

export default async function IndividualSummaryPage({
  params,
}: IndividualSummaryPageProps) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { summary_id } = params;

  // Fetch summary by Id
  const response = await getSummaryById(summary_id);
  if (!response.summary) {
    console.error("No summary for this ID");
    return (
      <div className="text-2xl font-medium text-red-500 text-center flex h-screen justify-center items-center">
        Failed to fetch summary, try again sometime
      </div>
    );
  }

  return <IndividualSummaryComp summary={response.summary} />;
}
