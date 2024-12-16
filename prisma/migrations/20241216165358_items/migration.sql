-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "itemName" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "amp" REAL NOT NULL,
    "capacitor" INTEGER NOT NULL,
    "hp" TEXT NOT NULL,
    "rpm" TEXT NOT NULL,
    "wireWork" INTEGER NOT NULL,
    "wireStart" INTEGER NOT NULL,
    "sqWork" TEXT NOT NULL,
    "sqStart" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");
