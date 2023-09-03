/*
  Warnings:

  - You are about to drop the column `publisherId` on the `Game` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_publisherId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "publisherId",
ADD COLUMN     "publisher_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
