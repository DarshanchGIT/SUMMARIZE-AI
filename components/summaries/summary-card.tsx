import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { Trash2, X } from "lucide-react";
import { summaryProps } from "@/types/summary-type";

export const SummaryCard = ({ summary }: { summary: summaryProps }) => {
  return (
    <Card className="shadow-lg p-4 transition-transform duration-200 hover:scale-105 cursor-pointer">
      <CardHeader>
        <CardTitle>{summary.title}</CardTitle>
        <p className="text-sm text-gray-500">{summary.time}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{summary.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-medium">{summary.status}</span>
          <Dialog>
            <DialogTrigger>
              <Trash2 className="w-4 h-4 text-gray-500" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Summary</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this summary? This action
                  cannot be undone
                  <div className="flex justify-between items-center pt-2">
                    <Button className="m-2 cursor-pointer bg-gray-500">
                      cancel
                      <X />
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
  );
};
