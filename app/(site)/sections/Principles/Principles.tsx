"use client";

import { Container, Flex, Heading, Stack } from "@chakra-ui/react";

import Principle from "@/app/(site)/components/Principle";
import { useLocale } from "@/app/(site)/providers";

export const Principles = () => {
  const {
    locale: {
      principles: { title, items },
    },
  } = useLocale();

  return (
    <Container maxW={"7xl"} id="principles">
      <Stack
        textAlign={"center"}
        align={"center"}
        py={{ base: 20, md: 20 }}
        width="100%"
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
          color={"green.dark"}
          textAlign={"left"}
          marginBottom={8}
        >
          {title.toUpperCase()}
        </Heading>
        <Flex flexWrap="wrap" justifyContent={"center"} width={"100%"} gap={8}>
          {items.map((principle, index) => (
            <Principle key={index} principle={principle} />
          ))}
        </Flex>
      </Stack>
    </Container>
  );
};

export default Principles;
