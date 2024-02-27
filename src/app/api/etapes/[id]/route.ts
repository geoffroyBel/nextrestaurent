import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
type IIngredient = { params: { id: string } };
export async function DELETE(req: NextRequest, { params }: IIngredient) {
  const { id } = params;
  //to validation
  try {
    await db.etape.delete({ where: { id: +id } });
    return NextResponse.json(
      { message: "Etape deleted", data: {} },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: IIngredient) {
  const { id } = params;
  const { ingredientId, recipeId, quantite, instructions } = await req.json();
  console.log(instructions);

  //to validation
  try {
    const etape = await db.etape.update({
      where: { id: +id },
      data: {
        ingredientId: ingredientId,
        recipeId: recipeId,
        quantite: quantite,
        instructions: instructions,
      },
    });
    return NextResponse.json(
      { message: "Etape updated", data: etape },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
