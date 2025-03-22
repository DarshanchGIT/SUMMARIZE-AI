import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SummaryProps } from "@/types/summary-type";
import { Badge } from "../ui/badge";
import { SummaryDelete } from "./summary-deleteBtn";

export const SummaryCard = ({ summary }: { summary: SummaryProps }) => {
  return (
    <Card className="shadow-lg p-4 transition-transform duration-200 hover:scale-105 cursor-pointer">
      <CardHeader>
        <CardTitle>{summary.title}</CardTitle>
        <p className="text-sm text-gray-500">{summary.status}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{summary.summaryText}</p>
        <div className="flex justify-between items-center">
          <Badge className="bg-green-600 text-white">{summary.status}</Badge>
          <SummaryDelete />
        </div>
      </CardContent>
    </Card>
  );
};
