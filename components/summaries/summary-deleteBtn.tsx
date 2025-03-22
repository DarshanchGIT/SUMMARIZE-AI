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

export const SummaryDelete = () => {
  const [open, setOpen] = useState<boolean>(false);
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
            undone
          </DialogDescription>
          <DialogFooter>
            <Button
              className="m-2 cursor-pointer bg-gray-500"
              onClick={() => setOpen(false)}
            >
              <X />
              cancel
            </Button>
            <Button className="m-2 cursor-pointer" variant={"destructive"}>
              <Trash2 />
              Delete
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
