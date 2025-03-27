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

const summaries = [
  {
    title: "Next.js Hot Tips Cheatsheet",
    source: "nextjs-hot-tips-cheatsheet.pdf",
    words: 198,
    date: "15-11-2003",
    content: [
      "Master Next.js and build amazing web apps with this comprehensive course.",
      "Perfect for developers of all levels.",
      "Master Next.js and build amazing web apps with this comprehensive course.",
      "Perfect for developers of all levels.",
      "Master Next.js and build amazing web apps with this comprehensive course.",
      "Perfect for developers of all levels.",
    ],
  },
];

export const IndividualSummaryComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSummary = summaries[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % summaries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + summaries.length) % summaries.length);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-semibold flex item-center text-center gap-1">
            <Sparkles color="red" />
            AI Summary
          </div>
          <Badge className="bg-gray-200 text-black text-center p-2 rounded-full px-4">
            <Calendar color="red" />
            {currentSummary.date}
          </Badge>
          <Badge className="bg-gray-200 text-black text-center p-2 rounded-full px-4">
            <Clock color="red" />1 min read
          </Badge>
        </div>
        <Button
          variant="outline"
          className="bg-red-100 rounded-full text-center cursor-pointer"
        >
          <ChevronLeft color="red" />
          Back to Dashboard
        </Button>
      </div>

      {/* Summary Card */}
      <Card className="shadow-lg rounded-2xl p-6 relative bg-white">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            {currentSummary.title}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500 flex text-center gap-2">
              <FileText color="gray" size={18} />
              Source:
              <span className="mr-1">{currentSummary.source}</span>
            </div>
            <div className="text-gray-500 border-2 p-1 rounded-full px-3 border-red-200">
              <span className="text-black font-semibold mr-1">
                {currentSummary.words}
              </span>
              words
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4 space-y-2">
            {currentSummary.content.map((point, idx) => (
              <p key={idx} className="text-gray-800">
                {point}
              </p>
            ))}
          </div>
        </CardContent>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full shadow-md"
        >
          <ChevronRight className="text-white" />
        </button>
      </Card>
    </div>
  );
};
