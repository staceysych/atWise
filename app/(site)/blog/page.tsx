import { Container, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import BlogCard from "@/app/(site)/components/BlogCard";

import { getBlogPosts } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  const blogs = await getBlogPosts();

  console.log({ blogs });

  return (
    <Container maxW={"7xl"} py={{ base: "120px", lg: 40 }} height={"100vh"}>
      Blog page
      <Flex gap={6} justifyContent={"space-between"}>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </Flex>
    </Container>
  );
};

export default BlogPage;
