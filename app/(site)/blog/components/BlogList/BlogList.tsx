"use client";

import { Divider, Grid } from "@chakra-ui/react";
import BlogCard from "@/app/(site)/blog/components/BlogCard";

import LatestBlogSection from "@/app/(site)/blog/sections/LatestBlogSection";

import { getBlogPosts } from "@/sanity/sanity-utils";

const BlogList = async () => {
  const blogs = await getBlogPosts();

  const [latestBlogPost, ...rest] = blogs;

  const showMoreBlogs = blogs.length > 1;

  return (
    <>
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
    </>
  );
};

export default BlogList;
