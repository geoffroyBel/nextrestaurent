// "use client";
// import { editProduct } from "@/actions";
// import React, { useRef, MouseEventHandler, useState } from "react";

// interface IProductForm {
//   product: {
//     title: string;
//     description: string;
//   };
// }

// export default function ProductForm({ product }: IProductForm) {
//   const [title, setTitle] = useState("");
//   const descriptionRef = useRef<HTMLTextAreaElement>(null);
//   const editProductAction = editProduct.bind(null, product.id, title);
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const description = descriptionRef.current?.value;

//     if (title && description) {
//       // Faire quelque chose avec les valeurs récupérées
//       editProductAction();
//     }
//   };

//   return (
//     <form action={editProductAction}>
//       <div className="flex gap-1">
//         <label htmlFor="title">Titre</label>
//         <input
//           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//             setTitle(event.target.value);
//           }}
//           className="p-2 border rounded"
//           name="title"
//           id="title"
//           defaultValue={product.title}
//         />
//       </div>
//       <div className="flex gap-1">
//         <label htmlFor="description">Description</label>
//         <textarea
//           ref={descriptionRef}
//           className="p-2 border rounded"
//           name="description"
//           id="description"
//           defaultValue={product.description}
//         />
//       </div>
//       <button type="submit">Enregistrer</button>
//     </form>
//   );
// }
