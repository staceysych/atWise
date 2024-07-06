"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useLocale } from "@/app/providers";

import Mentor from "@/app/components/Mentor";
import { scrollToTheElement } from "@/app/utils/scrollToElement";

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
          <Flex
            gap={14}
            mt={14}
            mb={8}
            flexWrap={"wrap"}
            justifyContent={"center"}
            maxWidth={"900px"}
          >
            {mentors.mentors.map((mentor, index) => (
              <Mentor key={index} mentor={mentor} />
            ))}
          </Flex>
          <Button
            width="fit-content"
            padding={6}
            colorScheme={"orange"}
            bg={"orange.main"}
            _hover={{ bg: "orange.dark" }}
            onClick={(e) => scrollToTheElement(e, "contactUs")}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Mentors;
