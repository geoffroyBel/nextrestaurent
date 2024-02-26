"use server";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import paths from "@/app/path";
import { revalidatePath } from "next/cache";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, "Must be lowercase min 3 caracters"),
  description: z.string().min(10),
});
interface ICreateTopic {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}
export async function createTopic(
  formState: ICreateTopic,
  formData: FormData
): Promise<ICreateTopic> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this"],
      },
    };
  }
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: { slug: result.data.name, description: result.data.description },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["error.message probleme "],
        },
      };
    }
  }
  revalidatePath(paths.home());
  redirect(paths.topicShow(topic.slug));
}
