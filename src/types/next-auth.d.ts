// src/types/next-auth.d.ts

import { User as UserModel } from "@prisma/client";
import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User extends UserModel {
    id: string;
  }
  interface Session {
    user: User;
  }
}
