/*
  Warnings:

  - A unique constraint covering the columns `[recipeId,ingredientId]` on the table `Etape` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Etape_recipeId_ingredientId_key" ON "Etape"("recipeId", "ingredientId");
