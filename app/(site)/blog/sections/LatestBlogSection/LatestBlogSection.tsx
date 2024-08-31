"use client";

import { useLocale } from "@/app/(site)/providers";
import { TBlog } from "@/sanity/types/Blog";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Tags from "@/app/(site)/blog/components/Tags";

interface LatestBlogSectionProps {
  blog: TBlog;
}

const LatestBlogSection = ({ blog }: LatestBlogSectionProps) => {
  const { image, title, excerpt, tags } = blog;
  const {
    locale: {
      blog: { continueReading },
    },
  } = useLocale();

  return (
    <Flex height={300} gap={10}>
      <Box
        width={"50%"}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          bgGradient={"radial(orange.dark 1px, transparent 1px)"}
          backgroundSize="10px 10px"
          opacity="0.4"
          height="100%"
          width={"100%"}
          pos={"absolute"}
          left={0}
          top={0}
          zIndex={-1}
        />
        <Box width={400} height={250}>
          <Image
            src={image.url}
            alt={image.alt}
            width={350}
            height={200}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
      <Stack flexBasis={"50%"} gap={4}>
        <NextLink href={`/blog/${blog.slug}`}>
          <Heading
            fontSize={"3xl"}
            color="green.dark"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "5px",
            }}
          >
            {title}
          </Heading>
        </NextLink>
        <Flex>
          <Tags tags={tags} />
        </Flex>
        <Text fontSize={14} textAlign={"justify"} color={"green.dark"}>
          {excerpt}
        </Text>
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
      </Stack>
    </Flex>
  );
};

export default LatestBlogSection;
