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
import { useEffect, useRef, useState } from "react";
interface IPostCreateForm {}
export default function RecipeCreateForm(props: IPostCreateForm) {
  const ingredientRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const [ingredients, setIngredients] = useState([{}]);
  const [formState, action] = useFormState(actions.createRecipe, {
    errors: {},
  });
  const handleAddIngredient = () => {
    setIngredients([...ingredients, {}]);
  };

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary"> Create post</Button>
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
            />
            <Textarea
              name="description"
              label="Description"
              placeholder="Description"
              labelPlacement="outside"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            <Input
              name="difficulte"
              label="Difficulté"
              placeholder="1 a 5 etoiles"
              labelPlacement="outside"
              isInvalid={!!formState.errors.difficulte}
              errorMessage={formState.errors.difficulte?.join(", ")}
            />
            <Input
              name="temps"
              label="Temps"
              placeholder="estimation temps"
              labelPlacement="outside"
              isInvalid={!!formState.errors.temps}
              errorMessage={formState.errors.temps?.join(", ")}
            />
            <Divider></Divider>
            <fieldset>
              <h3>ajouter ingredients</h3>
              {ingredients.map((_, key) => {
                return (
                  <div key={key}>
                    <Input
                      ref={ingredientRef}
                      name={`ingredient`}
                      label="Ingredient"
                      placeholder="choisir votre ingredient"
                      labelPlacement="outside"
                    />
                    <Input
                      ref={quantityRef}
                      name={"quantity"}
                      label="Quantité"
                      placeholder="choisir votre ingredient"
                      labelPlacement="outside"
                    />
                  </div>
                );
              })}
              <Button
                onClick={() =>
                  setIngredients((prev) => [
                    ...prev,
                    {
                      quantite: quantityRef.current?.value || "",
                      name: ingredientRef.current?.value || "",
                    },
                  ])
                }
              >
                add
              </Button>
            </fieldset>

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
