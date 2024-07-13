"use client";

import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";

import LogoWhite from "@/app/assets/logo2.svg";
import { scrollToTheElement } from "@/app/utils/scrollToElement";
import { useLocale } from "@/app/providers";

const Footer = () => {
  const {
    locale: {
      footer: { links, rights },
    },
  } = useLocale();

  return (
    <Box bg={"green.dark"} color={"white"}>
      <Container
        as={Flex}
        maxW={"7xl"}
        py={4}
        justify={"space-between"}
        align={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          align={"center"}
          gap={{
            base: 4,
            md: 8,
          }}
          direction={{
            base: "column",
            md: "row",
          }}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <Box
            width={"150px"}
            onClick={(e) => scrollToTheElement(e, "about")}
            cursor={"pointer"}
          >
            <Image src={LogoWhite} alt="AtWise Logo Footer" priority={true} />
          </Box>
          <Flex direction={"row"} gap={4}>
            {links.map((link, index) => (
              <Box key={index}>{link.title}</Box>
            ))}
          </Flex>
        </Flex>

        <Divider
          display={{
            base: "block",
            md: "none",
          }}
          my={2}
        />
        <Text>{rights}</Text>
      </Container>
    </Box>
  );
};

export default Footer;
