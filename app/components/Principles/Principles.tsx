"use client";

import { Container, Flex, Heading, Stack } from "@chakra-ui/react";

import Principle from "./components/Principle";
import { useLocale } from "@/app/providers";

export const Principles = () => {
  const { locale } = useLocale();

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
          {locale.principles.title.toUpperCase()}
        </Heading>
        <Flex
          flexWrap="wrap"
          justifyContent="space-evenly"
          width="100%"
          rowGap={8}
        >
          {locale.principles.items.map((principle, index) => (
            <Principle key={index} principle={principle} />
          ))}
        </Flex>
      </Stack>
    </Container>
  );
};

export default Principles;
