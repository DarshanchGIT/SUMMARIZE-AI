"use client";
import { SummaryProps } from "@/types/summary-type";
import { createContext, useContext } from "react";

type SummaryContextType = {
  summaries: SummaryProps[];
};

export const SummaryContext = createContext<SummaryContextType | null>(null);
export function SummaryProvider({
  children,
  summaries,
}: {
  children: React.ReactNode;
  summaries: SummaryProps[];
}) {
  return (
    <SummaryContext.Provider value={{ summaries }}>
      {children}
    </SummaryContext.Provider>
  );
}

export const useSummary = (): SummaryContextType => {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error("useSummary must be used within a SummaryProvider");
  }
  return context;
};
