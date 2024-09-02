import { createClient, groq } from "next-sanity";
import { TBlog } from "./types/Blog";
import config from "./config/client-config";

export const getBlogPosts = async (): Promise<TBlog[]> => {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "blog"] | order(_createdAt desc) {
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
    }`,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
};

export const getBlogArticle = async (slug: string): Promise<TBlog> => {
  return createClient(config).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
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
    }`,
    { slug },
    {
      next: {
        revalidate: 10,
      },
    }
  );
};
