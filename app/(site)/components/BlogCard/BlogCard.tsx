"use client";
import { Box, Heading, Stack, Text, Tag, Flex, Button } from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import { format } from "date-fns";
import NextLink from "next/link";
import { useLocale } from "@/app/(site)/providers";

interface BlogCardProps {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  excerpt: string;
  tags: string[];
  _createdAt: Date;
}

const BlogCard = ({
  image,
  title,
  excerpt,
  tags,
  _createdAt,
}: BlogCardProps) => {
  const {
    locale: {
      blog: { continueReading },
    },
  } = useLocale();

  const formattedDate = format(new Date(_createdAt), "dd-MM-yyyy");
  return (
    <Stack
      width={"350px"}
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
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
      <Flex>
        {tags.map((tag) => (
          <Tag
            key={tag}
            bg="orange.main"
            borderRadius="full"
            variant="solid"
            size="sm"
            fontSize="xs"
            margin="0 5px"
          >
            {tag}
          </Tag>
        ))}
      </Flex>
      <Heading fontSize={"xl"} color="green.dark" minHeight="50px">
        {title}
      </Heading>
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
          {continueReading}
        </Button>
      </Flex>
    </Stack>
  );
};

export default BlogCard;
