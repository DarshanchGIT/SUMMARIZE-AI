"use client";

import { UploadHeader } from "../upload/upload-header";
import { SummaryDiv } from "./summary-div";

export const SummariesPage = () => {
  return (
    <div className="scroll-smooth">
      <UploadHeader />
      <SummaryDiv />
    </div>
  );
};
