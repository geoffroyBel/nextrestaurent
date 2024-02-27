import paths from "@/path";
import { log } from "console";
import Link from "next/link";
import RecipeRate from "./recipe-rate";
import RecipeTime from "./recipe-time";

// import { PostWithData } from "@/db/queries/posts";
// import paths from "@/app/path";

// TODO: Get list of posts into this component somehow
interface IRecipeList {
  fetchData: () => Promise<any[]>;
}
export default async function RecipiesList({ fetchData }: IRecipeList) {
  const recipies = await fetchData();
  const renderedPosts = recipies.map((recipe) => {
    return (
      <div key={recipe.id} className="border rounded p-2">
        <Link href={paths.recipeDetail(recipe.id)}>
          <h3 className="text-lg font-bold">{recipe.nom}</h3>
          <div className="flex flex-row gap-8 justify-between">
            <div className="flex flex-row gap-2">
              <p className="text-gray-20 text-xs">etapes: </p>
              <p className="text-gray-20 text-xs fond-bold">
                {recipe.etapes.length}
              </p>
            </div>
            <RecipeRate difficulte={3} />
            <RecipeTime temps={recipe.temps} />
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
