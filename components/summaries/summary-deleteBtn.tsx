"use client";

import { Trash2, X } from "lucide-react";
import {
  DialogDescription,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { DeleteSummary } from "@/actions/summary-actions";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

export const SummaryDelete = ({ summaryId }: { summaryId: string }) => {
  //Learning🏫 receiving primitive props ({props} : {prop : type_of_prop})
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSummaryDeletion = async () => {
    try {
      setLoading(true);
      const summaryDeletionToast = toast.loading("Deleting summary...");
      await DeleteSummary(summaryId);
      //await new Promise((r) => setTimeout(() => r("resolved"), 5000));
      toast.success("Summary deleted successfully");
      toast.dismiss(summaryDeletionToast);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gray-100 p-2 border rounded-md cursor-pointer hover:bg-gray-200 focus:bg-gray-100 focus:ring-0 focus:outline-none">
          <Trash2 className="w-4 h-4 text-red-500 hover:scale-110 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this summary? This action cannot be
            undone.
          </DialogDescription>
          <DialogFooter>
            <Button
              className="m-2 cursor-pointer bg-gray-500"
              onClick={() => setOpen(false)}
            >
              <X />
              Cancel
            </Button>
            <Button
              className="m-2 cursor-pointer min-w-[110px] flex items-center justify-center"
              variant="destructive"
              onClick={handleSummaryDeletion}
            >
              {loading ? (
                <>
                  <Spinner fillColor="fill-white" /> Deleting ...
                </>
              ) : (
                <>
                  <Trash2 /> Delete
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
