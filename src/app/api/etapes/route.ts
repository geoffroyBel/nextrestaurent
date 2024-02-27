import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { ingredientId, recipeId, quantite, instructions } = await req.json();

  // recipe: {
  //   connect: { id: recipeId }
  // },
  try {
    const etape = await db.etape.create({
      data: {
        ingredientId: ingredientId,
        recipeId: recipeId,
        quantite: quantite,
        instructions: "innnnnn",
      },
    });
    return NextResponse.json(
      { message: "Step added", data: etape },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const etapes = await db.etape.findMany({
      include: {
        recipe: true,
        ingredient: true,
      },
    });
    return NextResponse.json(
      { message: "List all etape", data: etapes },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
