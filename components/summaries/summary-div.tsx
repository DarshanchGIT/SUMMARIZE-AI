import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import BlurText from "../ui/blur-text";
import { SummaryCard } from "./summary-card";
import { ArrowRight, ArrowUpRight, Plus, ShieldAlert } from "lucide-react";
import { useSummary } from "@/context/summary-context";
import { Button } from "../ui/button";
import Link from "next/link";

export const SummaryDiv = () => {
  const { summaries } = useSummary();
  // console.log(summaries);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <BlurText
            text="Your Summaries"
            className="text-5xl font-bold mb-2 sm:mb-4"
          />
          <p className="text-gray-500 text-sm sm:text-base">
            Transform your PDFs into concise, actionable insights
          </p>
        </div>
        <Link href="/upload">
          <Button className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white w-56 sm:w-52 py-4 text-base sm:text-md shadow-[0px_4px_15px_rgba(220,38,38,0.4)] hover:shadow-red-500/60 hover:scale-105 transition-all cursor-pointer">
            <Plus size={22} />
            New summary
          </Button>
        </Link>
      </div>

      {/* Upgrade Alert */}
      {summaries.length > 4 ? (
        <Alert className="bg-red-100 border border-red-300 mt-6 mb-6">
          <AlertDescription className="text-red-600 inline-flex items-center">
            <ShieldAlert size={20} className="mr-2" />
            You’ve reached the upload limit of 5 files on the Basic plan.
            <a href="#" className="text-red-600 underline mx-1">
              Upgrade to Pro
            </a>
            <ArrowRight size={16} className="mx-1" />
            for unlimited uploads. (Feature in development...)
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="bg-green-100 border border-green-300 mt-6 mb-6">
          <AlertDescription className="text-green-600 inline-flex items-center">
            <ShieldAlert size={20} className="mr-2" />
            You have {5 - summaries.length} free uploads remaining.
            <a href="#" className="text-green-700 underline mx-1">
              Upgrade to Pro
            </a>
            <ArrowRight size={16} />
            for unlimited uploads. (Feature in development...)
          </AlertDescription>
        </Alert>
      )}

      {/* Summary List */}
      <ScrollArea className="min-h-[200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {summaries.length > 0 ? (
            summaries.map((summary, index) => (
              <SummaryCard key={index} summary={summary} />
            ))
          ) : (
            <div className="text-gray-500 text-center col-span-full py-18 border rounded-lg flex items-center text-md justify-center gap-2">
              No summaries available yet.
              <Link
                href="/upload"
                className="underline flex justify-content items-center"
              >
                {" "}
                Click here to create one
                <ArrowUpRight className="mx-auto underline" />
              </Link>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
