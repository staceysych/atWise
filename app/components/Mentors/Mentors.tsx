"use client";

import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { useLocale } from "@/app/providers";

import { Mentor } from "./components";

const Mentors = () => {
  const { locale } = useLocale();

  const { mentors } = locale;

  return (
    <Box bg={"green.dark2"} id="mentors">
      <Container maxW={"7xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          py={{ base: 20, md: 20 }}
          width="100%"
        >
          <Stack gap={4} alignItems="center" maxW="700px">
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
              color={"white"}
              textAlign={"left"}
            >
              {locale.mentors.title.toUpperCase()}
            </Heading>
            <Text color={"white"}>{locale.mentors.body}</Text>
          </Stack>
          <Flex gap={8} marginTop={8}>
            {mentors.mentors.map((mentor, index) => (
              <Mentor key={index} mentor={mentor} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Mentors;
