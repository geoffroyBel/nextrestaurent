// import { deleteProduct } from "@/actions";
// import { db } from "@/db";
// import Link from "next/link";
// import { notFound, useParams } from "next/navigation";
// interface IProductDetail {
//   params: { id: string };
// }
// export default async function ProductDetail({
//   params: { id },
// }: IProductDetail) {
//   const product = await db.product.findFirst({
//     where: {
//       id: +id,
//     },
//   });
//   if (!product) return notFound();
//   const deleteProductAction = deleteProduct.bind(null, id);
//   return (
//     <div>
//       <div className="flex my-4 justify-between items-center">
//         <h1 className="text-xl font-bold">{product.title}</h1>
//         <div className="flex gap-4">
//           <Link href={`/products/${id}/edit`} className="p-2 border rounded">
//             Edit
//           </Link>
//           <form action={deleteProductAction}>
//             <button className="p-2 border rounded"> Delete</button>
//           </form>
//         </div>
//       </div>
//       <span className="p-3 border rounded bg-gray-400 border-gray-200">
//         whatever
//       </span>
//     </div>
//   );
// }
