import paths from "@/path";
import { log } from "console";
import Link from "next/link";

// import { PostWithData } from "@/db/queries/posts";
// import paths from "@/app/path";

// TODO: Get list of posts into this component somehow
interface IRecipeList {
  fetchData: () => Promise<any[]>;
}
export default async function RecipiesList({ fetchData }: IRecipeList) {
  const recipies = await fetchData();
  const renderedPosts = recipies.map((recipe) => {
    console.log(recipe);

    return (
      <div key={recipe.id} className="border rounded p-2">
        <Link href={paths.recipeDetail(recipe.id)}>
          <h3 className="text-lg font-bold">{recipe.nom}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {recipe.user.name}</p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
