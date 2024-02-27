"use server";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import { Recipe } from "@prisma/client";
import { redirect } from "next/navigation";
import paths from "@/path";
import { revalidatePath } from "next/cache";
const createTopicSchema = z.object({
  nom: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, "Must be lowercase min 3 caracters"),
  description: z.string().min(10),
  temps: z.string().min(1),
  difficulte: z.string(),
});
interface IEditRecipe {
  errors: {
    nom?: string[];
    description?: string[];
    difficulte?: string[];
    temps?: string[];
    _form?: string[];
  };
}
export async function editRecipe(
  id: string,
  formState: IEditRecipe,
  formData: FormData
): Promise<IEditRecipe> {
  const result = createTopicSchema.safeParse({
    nom: formData.get("nom"),
    description: formData.get("description"),
    temps: formData.get("temps"),
    difficulte: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this"],
      },
    };
  }
  let recipe: Recipe;
  try {
    recipe = await db.recipe.update({
      where: { id: +id },
      data: {
        nom: result.data.nom,
        description: result.data.description,
        temps: `${result.data.temps}`,
        difficulte: 1,
        userId: session.user.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["error.message probleme "],
        },
      };
    }
  }
  revalidatePath(paths.recipeDetail(recipe.id));

  return {
    errors: {},
  };
}
