import { Rule } from "@sanity/types";

const blog = {
  name: "mentors",
  title: "Mentors",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Name is required"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule: Rule) => Rule.required().error("Image is required"),
    },
    {
      name: "position",
      title: "Position",
      type: "text",
      description: "A short summary of the mentor's skills",
      validation: (Rule: Rule) =>
        Rule.required().max(45).error("Position should be under 45 characters"),
    },
    {
      name: "expertise",
      title: "expertise",
      type: "text",
      validation: (Rule: Rule) =>
        Rule.required().error("Expertise is required"),
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) =>
        Rule.required().error("Experience is required"),
    },
    {
      name: "education",
      title: "Education",
      type: "text",
      validation: (Rule: Rule) =>
        Rule.required().error("Education is required"),
    },
  ],
};

export default blog;
