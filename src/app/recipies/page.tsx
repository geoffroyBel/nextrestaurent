import RecipeCreateForm from "@/components/Recepies/recipe-create-form";
import RecipiesList from "@/components/Recepies/recipies-list";
import { fetchAllRecipies } from "@/db/queries/recipies";

export default function RecepiesPage() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Toutes nos recettes</h1>
        <RecipiesList fetchData={() => fetchAllRecipies()} />
        {/* <PostList fetchData={() => fetchTopPosts()} /> */}
      </div>
      <div className="border shadow py-3 px-2">
        <RecipeCreateForm />
        {/* <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-bold text-lg">Topics</h3>
        <TopicList /> */}
      </div>
    </div>
  );
}
