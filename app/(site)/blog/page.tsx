import { Container } from "@chakra-ui/react";
import type { Metadata } from "next";

import { getBlogPosts } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  const blogs = await getBlogPosts();

  console.log({ blogs });

  return (
    <Container maxW={"7xl"} py={{ base: "120px", lg: 40 }}>
      Blog page
      {blogs.map((blog) => (
        <div key={blog._id}>{blog.title}</div>
      ))}
    </Container>
  );
};

export default BlogPage;
