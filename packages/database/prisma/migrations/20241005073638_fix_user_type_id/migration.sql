/*
  Warnings:

  - You are about to drop the `user_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_user_type_id_fkey";

-- DropTable
DROP TABLE "user_types";
