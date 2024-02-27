import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { nom, description, difficulte, temps } = await req.json();
  //to validation
  try {
    const recipe = await db.recipe.create({
      data: { nom: nom, description, temps, difficulte: +difficulte },
    });
    return NextResponse.json(
      { message: "Ingradient added", data: recipe },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { nom, description, difficulte, temps } = await req.json();
  //to validation
  try {
    const recipe = await db.recipe.findMany();
    return NextResponse.json(
      { message: "Ingradient added", data: recipe },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
