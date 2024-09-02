import { createClient, groq, type QueryParams } from "next-sanity";
import { TBlog } from "./types/Blog";
import config from "./config/client-config";
import { TMentor } from "./types/Mentor";

export const sanityFetch = async <QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> => {
  const client = createClient(config);

  return client.fetch<QueryResponse>(query, qParams, {
    next: { tags },
  });
};

export const getBlogPosts = async (): Promise<TBlog[]> => {
  const blogs = groq`*[_type == "blog"] | order(_createdAt desc) {
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
    }`;

  return sanityFetch({
    query: blogs,
    tags: ["blog"],
  });
};

export const getBlogArticle = async (slug: string): Promise<TBlog> => {
  const blog = groq`*[_type == "blog" && slug.current == $slug][0]{
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
    }`;

  return sanityFetch({
    query: blog,
    tags: ["blog"],
    qParams: { slug },
  });
};

export const getMentors = async (): Promise<TMentor[]> => {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "mentors"] {
        _id,
        name,
        "image": {
            "url": image.asset->url,
            "alt": image.alt,
            },
        position,
        expertise,
        experience,
        education,   
    }`
  );
};
