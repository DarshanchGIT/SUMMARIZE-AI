import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import BlurText from "../ui/blur-text";
import { SummaryCard } from "./summary-card";
import { ArrowRight, ShieldAlert } from "lucide-react";

const summaries = [
  {
    title: "Sous Sol Bar Menu",
    time: "8 minutes ago",
    description:
      "🍽️ Sip, Savor, Repeat: Your Ultimate Drink Guide 🍹 Enjoy our carefully crafted cocktails, beers, wines...",
    status: "Completed",
  },
  {
    title: "Next.js Hot Tips Cheatsheet",
    time: "1 day ago",
    description:
      "🔥 Level Up Your Next.js Skills! 🚀 Master Next.js and build amazing web apps with this comprehensive...",
    status: "Completed",
  },
  {
    title: "Engineering Leadership Template",
    time: "5 days ago",
    description:
      "🌟 Level Up Your Engineering Leadership: Free Template Library 🚀 Access free templates and...",
    status: "Completed",
  },
  {
    title: "Product Leadership Handbook",
    time: "5 days ago",
    description:
      "💎 Level Up Your Product Leadership Game! 🚀 This handbook reveals insider secrets to build top-tier...",
    status: "Completed",
  },
  {
    title: "Sous Sol Bar Menu",
    time: "6 days ago",
    description:
      "🍽️ Sip & Savor: Your Guide to Delicious Drinks! 🍷 Explore a curated menu of classic cocktails, unique...",
    status: "Completed",
  },
];

export const SummaryDiv = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <BlurText text="Your Summaries" className="text-4xl font-semibold mb-4" />
      <p className="text-gray-500 mb-6">
        Transform your PDFs into concise, actionable insights
      </p>
      <Alert className="bg-red-100 border border-red-300 mb-6">
        <AlertDescription className="text-red-600 inline-flex items-center">
          <ShieldAlert size={20} className="mr-2" />
          You've reached the limit of 5 uploads on the Basic plan.
          <a href="#" className="text-red-600 underline">
            Click here to Upgrade Pro
          </a>
          <span>
            <ArrowRight size={16} />
          </span>
          for unlimited uploads.
        </AlertDescription>
      </Alert>
      <ScrollArea>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {summaries.map((summary, index) => (
            <SummaryCard key={index} summary={summary} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
