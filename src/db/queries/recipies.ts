import { Recipe } from "@prisma/client";
import { db } from "..";
import { cache } from "react";
export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export const fetchAllRecipies = cache((): Promise<any[]> => {
  return db.recipe.findMany({
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      etapes: true,
    },
  });
});

export const fetchRecipeById = cache((id: string): Promise<any> => {
  return db.recipe.findFirst({
    where: {
      id: +id,
    },
    include: {
      etapes: {
        include: {
          ingredient: true,
        },
      },
    },
  });
});
