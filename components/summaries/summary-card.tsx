import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SummaryProps } from "@/types/summary-type";
import { Badge } from "../ui/badge";
import { SummaryDelete } from "./summary-deleteBtn";
import { FileText, ChevronRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { formatSummaryTitle } from "@/utils/format-long-summary-title";

export const SummaryCard = ({ summary }: { summary: SummaryProps }) => {
  const formattedTitle = formatSummaryTitle(summary.title || "");
  return (
      <Card className="p-4 transition-transform duration-200 cursor-pointer h-56 border-2 flex flex-col hover:shadow-md">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between w-full overflow-hidden">
            {/* Left Section - Icon & Title with proper truncation */}
            <div className="flex items-center gap-2 overflow-hidden max-w-[calc(100%-80px)]">
              <FileText size={24} className="text-red-400 shrink-0" />
              <CardTitle
                className="truncate text-base font-semibold max-w-[calc(100%-50px)]"
                title={summary.title || ""} // Show full title on hover
              >
                {formattedTitle}
              </CardTitle>
            </div>

            {/* Right Section - View Button with fixed positioning */}
            <Button
              variant="ghost"
              size="sm"
              className="shrink-0 min-w-[60px] text-red-500 hover:text-red-600 hover:bg-transparent hover:underline hover:decoration-red-400 p-0 h-auto cursor-pointer"
              onClick={() => redirect(`/summaries/${summary.id}`)}
            >
              View <ChevronRight size={16} />
            </Button>
          </div>

          {/* Date Section */}
          <p className="text-xs text-gray-500 mt-1">
            {formatDistanceToNow(new Date(summary.createdAt), {
              addSuffix: true,
            })}
          </p>
        </CardHeader>

        {/* Summary Content */}
        <CardContent className="flex flex-col flex-grow p-0">
          <p className="text-gray-600 text-sm mt-2 mb-4 line-clamp-3">
            {summary.summaryText}
          </p>

          {/* Bottom Section - Badge & Delete Button with proper spacing */}
          <div className="flex justify-between items-center mt-auto pb-2">
            <Badge
              variant="outline"
              className="bg-green-100 text-green-600 border-green-200"
            >
              {summary.status}
            </Badge>
            <SummaryDelete summaryId={summary.id} />
          </div>
        </CardContent>
      </Card>
  );
};
