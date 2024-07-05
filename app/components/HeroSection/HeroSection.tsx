"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

import HeroSectionIcon from "@/app/assets/HeroSectionIcon.svg";

import Image from "next/image";
import { useLocale } from "@/app/providers";
import { highlightText } from "@/app/utils/highlightText";

const HeroSection = () => {
  const { locale } = useLocale();

  const splitText = locale.hero.title.split("/n");

  return (
    <Container maxW={"7xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 40, md: 40 }}
        direction={"row"}
        id="about"
        position="relative"
      >
        <Stack width="50%" gap={8} align="left" position="relative">
          <Box
            borderRadius="50%"
            width={200}
            height={200}
            bg="linear-gradient(140deg, rgba(250,141,98,0.9) 0%, rgba(255,255,255,1) 100%)"
            position="absolute"
            top={-20}
            left={-70}
            zIndex={-1}
          />
          <Box
            borderRadius="50%"
            width={300}
            height={300}
            bg="linear-gradient(-20deg, rgba(250,141,98,1) 0%, rgba(255,255,255, 0.2) 100%)"
            position="absolute"
            bottom={-70}
            zIndex={-1}
            right={-160}
          />
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
            color={"green.dark"}
            textAlign={"left"}
          >
            {splitText.map((text, index) => (
              <Text as={"p"} key={index}>
                {highlightText({ text, color: "orange.main" })}
              </Text>
            ))}
          </Heading>
          <Stack maxW={500}>
            <Text color={"green.dark"} textAlign="left" fontWeight={600}>
              {locale.hero.body[0]}
            </Text>
            <Text color={"green.dark"} textAlign="left">
              {highlightText({
                text: locale.hero.body[1],
                color: "green.dark",
                fontWeight: 600,
                underline: true,
              })}
            </Text>
          </Stack>
          <Button
            width="fit-content"
            padding={6}
            colorScheme={"orange"}
            bg={"orange.main"}
            _hover={{ bg: "orange.dark" }}
          >
            Contact Us
          </Button>
        </Stack>

        <Box
          position="absolute"
          width="650px"
          right="16px"
          top="15%"
          zIndex={-1}
        >
          <Image
            src={HeroSectionIcon}
            alt="Hero icon"
            style={{ borderRadius: "40px" }}
            priority={true}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
