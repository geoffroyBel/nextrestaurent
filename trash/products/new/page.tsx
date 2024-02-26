// "use client";
// import { createProduct } from "@/actions";
// import { db } from "@/db";

// import { redirect } from "next/navigation";
// import { useFormState } from "react-dom";
// export default function ProductCreatePage() {
//   const [formState, action] = useFormState(createProduct, { message: "" });
//   return (
//     <form action={action}>
//       <h3 className="font-bold m-3">Creer votre produit</h3>
//       <div className="flex flex-col gap-4">
//         <div className="flex gap-4">
//           <label className="w-12" htmlFor="title">
//             title
//           </label>
//           <input
//             id="title"
//             name="title"
//             className="border rounded p-2 w-full"
//             type="text"
//             value={"tomates"}
//           />
//         </div>
//         <div className="flex gap-4">
//           <label className="w-12" htmlFor="description">
//             description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             className="border rounded p-2 w-full"
//           />
//         </div>
//         <div>{formState.message}</div>
//         <button type="submit" className="rounded p-2 bg-blue-200 mx-2">
//           Ajouter
//         </button>
//       </div>
//     </form>
//   );
// }
