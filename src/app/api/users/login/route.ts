import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/db";
import bcrypt from "bcrypt";
const secretKey = "votre_clé_secrète";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { message: "missing credentials" },
      { status: 403 }
    );
  }

  try {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (!user || !user.password) {
      throw new Error("User Alredy exist");
    }
    const isValid = await bcrypt.compare(password, user.password);
    const token = jwt.sign({ email: email, userId: user.id }, secretKey);
    if (!isValid) {
      throw new Error("Invalid password");
    }
    return NextResponse.json(
      { message: "Get token", token: token },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message, error },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        { message: "Went wrong", error },
        { status: 500 }
      );
    }
  }
}
