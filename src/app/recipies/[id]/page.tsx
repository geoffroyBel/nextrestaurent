import { fetchRecipeById } from "@/db/queries/recipies";
import { Button } from "@nextui-org/react";
import { notFound } from "next/navigation";
import * as actions from "@/actions";
import RecipeEditForm from "@/components/Recepies/recipe-edit-form";
interface IRecipedetail {
  params: { id: string };
}
export default async function RecipeDetail({ params }: IRecipedetail) {
  const { id } = params;
  const recipe = await fetchRecipeById(id);
  if (!recipe) notFound();
  const deleteRecipeAction = actions.deleteRecipe.bind(null, id);
  return (
    <div>
      <div className="flex flex-row gap-3 justify-end">
        <RecipeEditForm recipe={recipe} />
        <form action={deleteRecipeAction}>
          <Button type="submit" color="danger">
            Delete
          </Button>
        </form>
      </div>
      <div>{recipe.nom}</div>
    </div>
  );
}
