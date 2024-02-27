// src/types/strapi.ts

export type StrapiResponse<DataType> = {
  data: DataType;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: 1;
    };
  };
};

export type StrapiData<Entity> = {
  data: StrapiEntity<Entity>;
};
export type StrapiMultiData<Entity> = {
  data: Array<StrapiEntity<Entity>>;
};
export type StrapiEntity<Entity> = {
  id: number;
  attributes: Entity;
};

export type Posts = {
  title: string;
  content: StrapiRichtext;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: StrapiData<User>;
  comments: StrapiMultiData<Comment>;
};

export type User = {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};
export type Comment = {
  comment: string;
};

type StrapiRichtext = Array<{
  type: string;
  children: Array<{ text: string }>;
}>;
