import { PortableTextBlock } from "sanity";

export type TBlog = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  excerpt: string;
  content: PortableTextBlock[];
  tags: string[];
};
