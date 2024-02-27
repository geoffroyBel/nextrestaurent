import { fetchRecipeById } from "@/db/queries/recipies";
import { Button, Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";
import * as actions from "@/actions";
import RecipeEditForm from "@/components/Recepies/recipe-edit-form";
import { Etape, Ingrediant } from "@prisma/client";
interface IRecipedetail {
  params: { id: string };
}
export default async function RecipeDetail({ params }: IRecipedetail) {
  const { id } = params;
  const recipe = await fetchRecipeById(id);
  console.log(recipe);
  const ingredients = recipe.etapes.map(
    (el: Etape & { ingredient: Ingrediant }) => ({
      name: el.ingredient.name,
      quantite: el.quantite,
    })
  );
  console.log(ingredients);

  if (!recipe) notFound();
  const deleteRecipeAction = actions.deleteRecipe.bind(null, id);
  return (
    <div>
      <div className="flex flex-row gap-3 justify-center mb-4">
        <RecipeEditForm recipe={recipe} />
        <form action={deleteRecipeAction}>
          <Button type="submit" color="danger">
            Delete
          </Button>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 justyfy-center items-center p-2 border rounded border-gray-500">
          <h1 className="text-bold text-xl">Recette</h1>
          <Divider />
          <div className="flex flex-row gap-2 items-center">
            <p className="text-gray-20 text-lg text-gray-500">
              Nom de recette:
            </p>
            <p className="text-gray-20 text-lg fond-bold">{recipe.nom}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-gray-20 text-lg text-gray-500">Description:</p>
            <p className="text-gray-20 text-lg fond-bold">
              {recipe.description}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-gray-20 text-lg text-gray-500">Temps:</p>
            <p className="text-gray-20 text-lg fond-bold">{recipe.temps}</p>
          </div>
          <p className="text-lg">{recipe.nom}</p>
          <p className="text-lg">{recipe.description}</p>
          <p className="text-lg">{recipe.description}</p>
        </div>

        <div className="flex flex-col gap-2 justyfy-center items-center p-2 border rounded border-gray-500">
          <h1 className="text-bold text-xl">Préparation</h1>
          <Divider />
          {ingredients.map(
            (i: { name: string; quantite: number }, key: number) => {
              return (
                <div key={key} className="flex flex-row gap-2 items-center">
                  <p className="text-gray-20 text-lg text-gray-500">
                    {i.name}:
                  </p>
                  <p className="text-gray-20 text-lg fond-bold">
                    x {i.quantite}
                  </p>
                </div>
              );
            }
          )}
        </div>

        <div className="flex flex-col gap-2 justyfy-center items-center p-2 border rounded border-gray-500">
          <h1 className="text-bold text-xl">Ingredient</h1>
          <Divider />
          {recipe.etapes.map((etape: Etape, key: number) => {
            return (
              <div key={key} className="flex flex-row gap-2 items-center">
                <p className="text-gray-20 text-lg text-gray-500">{key + 1}:</p>
                <p className="text-gray-20 text-lg fond-bold">
                  <i>({ingredients[key].name}) </i>
                  {etape.instructions}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
