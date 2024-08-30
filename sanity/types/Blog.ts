import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  createdAt: Date;
  title: string;
  slug: string;
  publishDate: Date;
  mainImage: string;
  excerpt: string;
  content: PortableTextBlock[];
};
