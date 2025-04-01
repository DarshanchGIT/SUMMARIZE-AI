"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SummaryProps } from "@/types/summary-type";
import { summaryUtility } from "@/utils/format-summary-content";
import Link from "next/link";

export const IndividualSummaryComp = ({
  summary,
}: {
  summary: SummaryProps;
}) => {
  const { title, summaryText, createdAt } = summary;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % summaryText.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + summaryText.length) % summaryText.length
    );
  };

  // Convert summaryText into an array of objects
  const summaryUt = summaryUtility(summaryText);

  const summaryContent = summaryUt.parseSummaryText();
  const summaryWordCount = summaryUt.summaryWordCount();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-semibold flex items-center gap-1">
            <Sparkles color="red" /> AI Summary
          </div>
          <Badge className="bg-gray-200 text-black text-center p-2 rounded-full px-4">
            <Calendar color="red" /> {new Date(createdAt).toLocaleDateString()}
          </Badge>
          <Badge className="bg-gray-200 text-black text-center p-2 rounded-full px-4">
            <Clock color="red" /> 3 min read
          </Badge>
        </div>
        <Link href="/summaries">
          <Button
            variant="outline"
            className="bg-red-100 rounded-full cursor-pointer"
          >
            <ChevronLeft color="red" /> Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center gap-2">
        {summaryContent.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-full rounded-full transition-all ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Summary Card (Fixed Height) */}
      <Card className="shadow-lg rounded-2xl p-6 relative bg-white min-h-scren flex flex-col">
        <CardHeader className="flex flex-col items-start">
          {/* Title (Left-Aligned) */}
          <div className="w-full text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              {title}
            </div>
          </div>

          {/* File Source & Word Count */}
          <div className="flex items-center gap-4 mt-2">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <FileText color="gray" size={18} /> Source:
              <span className="mr-1">{title}.pdf</span>
            </div>
            <div className="text-gray-500 border-2 p-1 rounded-full px-3 border-red-200">
              <span className="text-black font-semibold mr-1">
                {summaryWordCount}
              </span>{" "}
              words
            </div>
          </div>
        </CardHeader>

        {/* Content (Scrollable if needed) */}
        <CardContent className="flex-grow overflow-hidden">
          <Card className="shadow-md rounded-xl p-4 h-[300px] overflow-y-auto">
            <CardHeader>
              <div className="text-2xl font-bold">
                {summaryContent[currentIndex].title}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 max-h-[250px] overflow-y-auto">
              {summaryContent[currentIndex].description.map((desc, index) => (
                <div
                  key={index}
                  className="bg-gray-200 font-normal italic p-3 rounded-xl text-black"
                >
                  {desc}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}

          <div className="flex justify-between items-center pb-0 pt-4">
            <button
              onClick={prevSlide}
              className="bg-red-500 p-3 rounded-full shadow-md disabled:opacity-50 cursor-pointer"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-red-500 p-3 rounded-full shadow-md disabled:opacity-50 cursor-pointer"
              disabled={currentIndex === summaryContent.length - 1}
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
