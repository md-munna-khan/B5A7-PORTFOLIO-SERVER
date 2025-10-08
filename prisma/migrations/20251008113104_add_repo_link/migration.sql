/*
  Warnings:

  - You are about to drop the column `projectLink` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "projectLink",
ADD COLUMN     "BackendRepoLink" TEXT,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "frontendRepoLink" TEXT;
