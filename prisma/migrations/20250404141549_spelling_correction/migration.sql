/*
  Warnings:

  - You are about to drop the column `uploadThingkey` on the `PdfSummary` table. All the data in the column will be lost.
  - Added the required column `uploadThingKey` to the `PdfSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PdfSummary" DROP COLUMN "uploadThingkey",
ADD COLUMN     "uploadThingKey" TEXT NOT NULL;
