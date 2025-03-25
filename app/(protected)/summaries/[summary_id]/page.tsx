import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type IndividualSummaryPage = {
  params: {
    summary_id: string;
  };
};
//Learning🏫 - basic template to get the params out of slug so simple
export default async function IndividualSummaryPage({
  params,
}: IndividualSummaryPage) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const { summary_id } = params;
  return <div> Here summary id is: {summary_id}</div>;
}
