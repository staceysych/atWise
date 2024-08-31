import { Container } from "@chakra-ui/react";
import type { Metadata } from "next";

import BlogList from "@/app/(site)/blog/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  return (
    <Container maxW={"7xl"} py={{ base: "120px", lg: 40 }} minH={"100vh"}>
      <BlogList />
    </Container>
  );
};

export default BlogPage;
