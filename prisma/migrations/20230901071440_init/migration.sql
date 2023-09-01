-- CreateTable
CREATE TABLE "Publisher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "publisherId" INTEGER,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_name_key" ON "Publisher"("name");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
