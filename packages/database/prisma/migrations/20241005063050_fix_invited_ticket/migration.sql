/*
  Warnings:

  - You are about to drop the column `invited_ticket_id` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "invited_ticket_id",
ADD COLUMN     "invited_ticket" INTEGER NOT NULL DEFAULT 0;
