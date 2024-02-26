export { createComment } from "./create-comment";
export { createPost } from "./create-post";
export { createTopic } from "./create-topic";
export { signIn } from "./sign-in";
export { signOut } from "./sign-out";
// import { db } from "@/db";
// import { redirect } from "next/navigation";

// export async function createProduct(
//   formState: { message: string },
//   formData: FormData
// ) {
//   "use server";
//   return {
//     message: "title must be longer",
//   };

//   const title = formData.get("title") as string;
//   const description = formData.get("description") as string;

//   const p = await db.product.create({
//     data: {
//       title: title,
//       description: description,
//     },
//   });
//   console.log(p);

//   redirect("/");
//}
// export async function editProduct(id: string, title: string) {
//   await db.product.update({
//     where: {
//       id: +id,
//     },
//     data: {
//       title,
//     },
//   });
//   redirect(`/products/${id}`);
// }

// export async function deleteProduct(id: string) {
//   await db.product.delete({
//     where: {
//       id: +id,
//     },
//   });
//   redirect(`/products`);
// }
