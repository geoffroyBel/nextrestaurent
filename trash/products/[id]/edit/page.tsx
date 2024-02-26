// import ProductForm from "@/trash/ProductForm";
// import { db } from "@/db";
// import { notFound } from "next/navigation";

// interface IProductEditPage {
//   params: { id: string };
// }
// export default async function ProductEditPage(props: IProductEditPage) {
//   const id = +props.params.id;
//   const product = await db.product.findFirst({
//     where: {
//       id,
//     },
//   });
//   if (!product) notFound();
//   return <ProductForm product={product} />;
// }
