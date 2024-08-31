import { Container, Divider, Grid } from "@chakra-ui/react";
import type { Metadata } from "next";
import BlogCard from "@/app/(site)/blog/components/BlogCard";

import { getBlogPosts } from "@/sanity/sanity-utils";

import LatestBlogSection from "@/app/(site)/blog/sections/LatestBlogSection";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  const blogs = await getBlogPosts();

  const [latestBlogPost, ...rest] = blogs;

  const showMoreBlogs = blogs.length > 1;

  return (
    <Container maxW={"7xl"} py={{ base: "120px", lg: 40 }} minH={"100vh"}>
      <LatestBlogSection blog={latestBlogPost} />
      {showMoreBlogs && (
        <>
          <Divider my={12} />
          <Grid
            gap={12}
            gridTemplateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
            rowGap={16}
          >
            {rest.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default BlogPage;
