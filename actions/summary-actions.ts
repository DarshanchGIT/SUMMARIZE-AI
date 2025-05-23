"use server";

import { getUser } from "@/lib/auth";
import prisma from "@/lib/db";
import { SummaryProps } from "@/types/summary-type";
import { revalidatePath } from "next/cache";

type SummariesFetchResponse = {
  success: boolean;
  message: string;
  summaries: SummaryProps[] | [];
};

type SummaryDeleteResponse = { success: boolean; message: string };

type SummaryFetchResponse = {
  success: boolean;
  message: string;
  summary: SummaryProps | null;
};

//LEARNING🏫 -  typeScript expects both success and failure responses to match the return type structure. Since the failure response was missing summaries, it was causing type mismatches.

export async function getSummaries(): Promise<SummariesFetchResponse> {
  const authCheck = await getUser();
  if (!authCheck.success) {
    return { success: false, message: "User not authenticated", summaries: [] };
  }

  try {
    const summaries = await prisma.pdfSummary.findMany({
      where: { userId: authCheck.userId as string },
      select: {
        id: true,
        summaryText: true,
        userId: true,
        title: true,
        status: true,
        createdAt: true,
        originalFileUrl: true,
        uploadThingKey: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      message: "Summaries fetched successfully",
      summaries,
    };
  } catch (error) {
    console.error("Error fetching summaries:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error fetching summaries",
      summaries: [],
    };
  }
}

export async function getSummaryById(
  summaryId: string
): Promise<SummaryFetchResponse> {
  const authCheck = await getUser();
  if (!authCheck.success) {
    return { success: false, message: "User not authenticated", summary: null };
  }

  try {
    const summary = await prisma.pdfSummary.findFirst({
      where: {
        id: summaryId,
        userId: authCheck.userId as string,
      },
      select: {
        id: true,
        summaryText: true,
        userId: true,
        title: true,
        status: true,
        originalFileUrl: true,
        createdAt: true,
        uploadThingKey: true,
      },
    });

    return {
      success: true,
      message: "Summary fetched successfully",
      summary: summary ?? null,
    };
  } catch (error) {
    console.error("Error fetching summary:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error fetching summary",
      summary: null,
    };
  }
}

export async function DeleteSummary(
  summaryId: string
): Promise<SummaryDeleteResponse> {
  const authCheck = await getUser();
  if (!authCheck.success) {
    return { success: false, message: "User not authenticated" };
  }

  if (!summaryId) {
    return { success: false, message: "Summary ID unavailable" };
  }

  try {
    const summary = await prisma.pdfSummary.findUnique({
      where: { id: summaryId },
    });
    if (!summary) {
      return { success: false, message: "Record to delete does not exist." };
    }

    await prisma.pdfSummary.delete({ where: { id: summaryId } });
    revalidatePath("/summaries");

    return {
      success: true,
      message: `Successfully deleted summary with ID ${summaryId}`,
    };
  } catch (error) {
    console.error("Error deleting summary:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error deleting summary",
    };
  }
}
