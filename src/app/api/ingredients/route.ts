import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  //to validation
  try {
    const ingredient = await db.ingrediant.create({ data: { name } });
    return NextResponse.json(
      { message: "Ingradient added", data: ingredient },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const ingredients = await db.ingrediant.findMany();
    console.log(ingredients);

    return NextResponse.json(
      { message: "List of ingredients", data: ingredients },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
