"use server";
import { z } from "zod";

import { db } from "@/db";
import { Recipe } from "@prisma/client";
import { redirect } from "next/navigation";
import paths from "@/path";
import { revalidatePath } from "next/cache";

interface IDeleteRecipe {
  errors: {
    _form?: string[];
  };
}
export async function deleteRecipe(id: string): Promise<IDeleteRecipe> {
  // const session = await auth();
  // if (!session || !session.user) {
  //   return {
  //     errors: {
  //       _form: ["You must be signed in to do this"],
  //     },
  //   };
  // }
  // let recipe: Recipe;
  // try {
  //   recipe = await db.recipe.delete({ where: { id: +id } });
  // } catch (error: unknown) {
  //   if (error instanceof Error) {
  //     return {
  //       errors: {
  //         _form: [error.message],
  //       },
  //     };
  //   } else {
  //     return {
  //       errors: {
  //         _form: ["error.message probleme "],
  //       },
  //     };
  //   }
  // }
  // revalidatePath(paths.recipiesShow());
  redirect(paths.recipiesShow());
}
