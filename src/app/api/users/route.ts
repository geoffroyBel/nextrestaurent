import { db } from "@/db";

import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name, password, isAdmin = false } = await req.json();
  const encryptedPassword = await bcrypt.hash(password, 10);
  console.log(isAdmin);

  try {
    const newUser = await db.user.create({
      data: {
        email,
        name,
        password: encryptedPassword,
        isAdmin,
      },
    });
    return NextResponse.json({ data: newUser }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
