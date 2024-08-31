"use client";
import { Box, Heading, Stack, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import NextLink from "next/link";
import { useLocale } from "@/app/(site)/providers";
import { TBlog } from "@/sanity/types/Blog";

import { getFormattedDate } from "@/app/(site)/utils/common";

import Tags from "@/app/(site)/blog/components/Tags";

interface BlogCardProps {
  blog: TBlog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const { title, image, excerpt, tags, _createdAt } = blog;

  const {
    locale: {
      blog: { continueReading },
    },
  } = useLocale();

  const formattedDate = getFormattedDate(_createdAt);

  return (
    <Stack
      width={"100%"}
      minWidth={240}
      borderRadius={14}
      gap={4}
      color={"green.dark"}
    >
      <Box width={"100%"} height={"200px"}>
        <Image
          src={image.url}
          alt={image.alt}
          width={350}
          height={200}
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
      <Flex>
        <Tags tags={tags} />
      </Flex>
      <NextLink href={`/blog/${blog.slug}`}>
        <Heading
          fontSize={"xl"}
          color="green.dark"
          minHeight="50px"
          _hover={{
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "5px",
          }}
        >
          {title}
        </Heading>
      </NextLink>

      <Text fontSize={14} height={"150px"} textAlign={"justify"}>
        {excerpt}
      </Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={12}>{formattedDate}</Text>
        <Button
          variant={"text"}
          width="fit-content"
          padding={0}
          height={"fit-content"}
          color={"orange.main"}
          _hover={{ color: "orange.dark" }}
        >
          <NextLink href={`/blog/${blog.slug}`}>{continueReading}</NextLink>
        </Button>
      </Flex>
    </Stack>
  );
};

export default BlogCard;
