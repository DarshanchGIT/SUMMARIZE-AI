/*
  Warnings:

  - Added the required column `uploadThingkey` to the `PdfSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PdfSummary" ADD COLUMN     "uploadThingkey" TEXT NOT NULL;
