import { getBlogArticle } from "@/sanity/sanity-utils";
import {
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { getFormattedDate } from "@/app/(site)/utils/common";
import Tags from "@/app/(site)/blog/components/Tags";
import { PortableText } from "@portabletext/react";

interface ArticleProps {
  params: {
    article: string;
  };
}

const Article = async ({ params }: ArticleProps) => {
  const article = await getBlogArticle(params.article);

  const { title, _createdAt, tags, content } = article;

  const formattedDate = getFormattedDate(_createdAt);

  return (
    <Container
      maxW={"7xl"}
      py={{ base: "120px", lg: 40 }}
      minH={"100vh"}
      color={"green.dark"}
    >
      <Stack
        alignItems={"flex-start"}
        css={{
          ul: {
            marginLeft: "20px",
          },
          blockquote: {
            width: "90%",
            margin: "0 auto",
            fontSize: "1.125rem",
            color: "#FA8D62",
          },
          h5: {
            fontSize: "1.25rem",
          },
        }}
      >
        <Flex width={"100%"} justify={"center"}>
          <Heading fontSize={"3xl"} color="green.dark">
            {title}
          </Heading>
        </Flex>

        <Divider my={4} />
        <Flex justifyContent={"flex-start"} width={"100%"} gap={4}>
          <Text>Created: {formattedDate}</Text>
          <Box>
            <Tags tags={tags} />
          </Box>
        </Flex>
        <Divider my={4} />
        <PortableText value={content} />
      </Stack>
    </Container>
  );
};

export default Article;
