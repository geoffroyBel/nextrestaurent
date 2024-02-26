"use client";
import { useFormState } from "react-dom";
import {
  Input,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";
interface IPostCreateForm {
  slug: string;
}
export default function PostCreateForm({ slug }: IPostCreateForm) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    { errors: {} }
  );
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary"> Create post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              placeholder="enter youy title"
              labelPlacement="outside"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              placeholder="content"
              labelPlacement="outside"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
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
