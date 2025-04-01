import { getSummaryById } from "@/actions/summary-actions";
import { IndividualSummaryComp } from "@/components/summaries/summaryId/summaryId";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type IndividualSummaryPage = {
  params: { summary_id: string };
};

// Learning🏫 - basic template to get the params out of slug so simple
export default async function IndividualSummaryPage({
  params,
}: IndividualSummaryPage) {
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
  // console.log("Summary as string: ", response.summary);
  return <IndividualSummaryComp summary={response.summary} />;
}
