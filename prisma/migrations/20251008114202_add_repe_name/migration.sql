/*
  Warnings:

  - You are about to drop the column `BackendRepoLink` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "BackendRepoLink",
ADD COLUMN     "backendRepoLink" TEXT;
