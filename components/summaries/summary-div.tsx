import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cross, Trash2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import BlurText from "../ui/blur-text";
import { Button } from "../ui/button";

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
      <Alert className="bg-red-100 text-red-700 border border-red-300 mb-6">
        <AlertDescription>
          You've reached the limit of 5 uploads on the Basic plan.{" "}
          <a href="#" className="text-blue-600 underline">
            Click here to Upgrade to Pro
          </a>{" "}
          for unlimited uploads.
        </AlertDescription>
      </Alert>
      <ScrollArea>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {summaries.map((summary, index) => (
            <Card
              key={index}
              className="shadow-lg p-4 transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <CardHeader>
                <CardTitle>{summary.title}</CardTitle>
                <p className="text-sm text-gray-500">{summary.time}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  {summary.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-medium">
                    {summary.status}
                  </span>
                  <Dialog>
                    <DialogTrigger>
                      <Trash2 className="w-4 h-4 text-gray-500" />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Summary</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this summary? This
                          action cannot be undone
                          <div className="flex justify-between items-center pt-2">
                            <Button className="m-2 cursor-pointer bg-gray-500">
                              cancel
                              <X/>
                            </Button>
                            <Button
                              className="m-2 cursor-pointer"
                              variant={"destructive"}
                            >
                              Delete
                              <Trash2 />
                            </Button>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
