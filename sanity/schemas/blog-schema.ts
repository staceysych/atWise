import { Rule } from "@sanity/types";

const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().max(70).error("Title should be under 70 characters"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule: Rule) =>
        Rule.required().error("Main Image is required"),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A short summary of the blog post",
      validation: (Rule: Rule) =>
        Rule.required().max(390).error("Title should be under 390 characters"),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required().error("Content is required"),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule: Rule) =>
        Rule.required().max(3).error("You can only add up to 3 tags"),
    },
  ],
};

export default blog;
