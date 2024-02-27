"use client";
import { useFormState } from "react-dom";
import {
  Input,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Divider,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";
import { useEffect, useState } from "react";
import { Recipe } from "@prisma/client";
interface IPostEditForm {
  recipe: Recipe;
}
export default function RecipeEditForm({ recipe }: IPostEditForm) {
  const [ingredients, setIngredients] = useState([{}]);
  const [formState, action] = useFormState(
    actions.editRecipe.bind(null, `${recipe.id}`),
    {
      errors: {},
    }
  );
  const handleAddIngredient = () => {
    setIngredients([...ingredients, {}]);
  };

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Edit</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create Post</h3>
            <Input
              name="nom"
              label="Nom"
              placeholder="enter youy title"
              labelPlacement="outside"
              isInvalid={!!formState.errors.nom}
              errorMessage={formState.errors.nom?.join(", ")}
              defaultValue={recipe.nom}
            />
            <Textarea
              name="description"
              label="Description"
              placeholder="Description"
              labelPlacement="outside"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
              defaultValue={recipe.description}
            />
            <Input
              name="difficulte"
              label="Difficulté"
              placeholder="1 a 5 etoiles"
              labelPlacement="outside"
              isInvalid={!!formState.errors.difficulte}
              errorMessage={formState.errors.difficulte?.join(", ")}
              defaultValue={`${recipe.difficulte}`}
            />
            <Input
              name="temps"
              label="Temps"
              placeholder="estimation temps"
              labelPlacement="outside"
              isInvalid={!!formState.errors.temps}
              errorMessage={formState.errors.temps?.join(", ")}
              defaultValue={`${recipe.temps}`}
            />
            <Divider></Divider>

            {formState.errors._form && (
              <div className="text-white p-2 rounded border-red-500  bg-red-200">
                {formState.errors._form?.join(", ")}
              </div>
            )}
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
