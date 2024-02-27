// import PostList from "@/components/posts/post-list";
// import TopicCreateForm from "@/components/topics/topic-create-form";
// import TopicList from "@/components/topics/topic-list";
// import { fetchTopPosts } from "@/db/queries/posts";
// import { Divider } from "@nextui-org/react";
import img from "@/../public/Food.png";
import Hero from "@/components/Hero";
import { TopRecipiesList } from "@/components/Recepies/top-recepies-list";

export default async function Home() {
  return (
    <>
      <Hero
        imageData={img}
        imgAlt={"Restaurent El Jasmin"}
        title={"Restaurent El Jasmin"}
      />
      <TopRecipiesList />
    </>
    // <div className="grid grid-cols-4 gap-4 p-4">
    //   <div className="col-span-3">
    //     <h1 className="text-xl m-2"> Top Post</h1>
    //     {/* <PostList fetchData={() => fetchTopPosts()} /> */}
    //   </div>
    //   <div className="border shadow py-3 px-2">
    //     {/* <TopicCreateForm />
    //     <Divider className="my-2" />
    //     <h3 className="text-bold text-lg">Topics</h3>
    //     <TopicList /> */}
    //   </div>
    // </div>
  );
}
/*
  const products = await db.product.findMany();
  const renderProducts = products.map((p, key) => (
    <Link
      className="flex  justify-between items-center p-2 border rounded"
      href={`/products/${p.id}`}
      key={key}
    >
      <div>{p.title}</div>
      <div>Voir</div>
    </Link>
  ));
  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h1 className="font-bold text-xl">Products</h1>
        <Link href={"/products/new"} className="border-2 rounded p-2">
          New
        </Link>
        <Button>New</Button>
      </div>
      <div className="flex gap-2 flex-col">{renderProducts}</div>
    </div>
  );
*/
