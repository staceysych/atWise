import { createClient, groq } from "next-sanity";
import { Blog } from "./types/Blog";

export const getBlogPosts = async (): Promise<Blog[]> => {
  const client = createClient({
    projectId: "5odeglfy",
    dataset: "production",
    apiVersion: "2021-03-25",
  });

  return client.fetch(
    groq`*[_type == "blog"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": {
            "url": mainImage.asset->url,
            "alt": mainImage.alt,
            },
        excerpt,
        content,
        tags,   
    }`
  );
};
