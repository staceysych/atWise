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

export const HeroSection = () => {
  const { locale } = useLocale();

  const splitText = locale.hero.title.split("/n");

  return (
    <Container maxW={"7xl"} paddingTop={20}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 40, md: 40 }}
        direction={"row"}
        id="mission"
        position="relative"
      >
        <Stack width="50%" gap={8} align="left" position="relative">
          <Box
            borderRadius="50%"
            width={200}
            height={200}
            bg="linear-gradient(140deg, rgba(250,141,98,0.9) 0%, rgba(255,255,255,1) 100%)"
            position="absolute"
            top={-5}
            left={0}
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
            right={-100}
          />
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"green.dark"}
            textAlign={"left"}
            marginLeft={10}
          >
            {splitText.map((text, index) => (
              <Text as={"p"} key={index}>
                {highlightText(text, "orange.main")}
              </Text>
            ))}
          </Heading>
          <Flex maxW={500} marginLeft={10}>
            <Text
              color={"green.dark"}
              textAlign="left"
              fontWeight={500}
              fontSize={20}
            >
              {locale.hero.body}
            </Text>
          </Flex>
          <Button
            width="fit-content"
            padding={6}
            colorScheme={"orange"}
            bg={"orange.main"}
            _hover={{ bg: "orange.dark" }}
            marginLeft={10}
          >
            Contact Us
          </Button>
        </Stack>

        <Box position="absolute" width="650px" right="16px" top="15%" zIndex={-1}>
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
