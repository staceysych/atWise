"use client";

import { Box, Container, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import Image from "next/image";
import { extractEmail } from "@/app/(site)/utils/extractEmail";

import LogoWhite from "@/app/(site)/assets/logo2.svg";
import { useLocale } from "@/app/(site)/providers";

const Footer = () => {
  const {
    locale: {
      footer: { links, rights, joinAsMentor },
    },
  } = useLocale();

  return (
    <Box bg={"green.dark"} color={"white"}>
      <Container as={Stack} maxW={"7xl"} py={4}>
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
          <Box width={"150px"} cursor={"pointer"}>
            <NextLink href="/">
              <Image src={LogoWhite} alt="AtWise Logo Footer" priority={true} />
            </NextLink>
          </Box>
          <Flex direction={"row"} gap={4} flex={1}>
            {links.map((link, index) => (
              <NextLink key={index} href={link.href}>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "inherit",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "5px",
                  }}
                >
                  {link.title}
                </Text>
              </NextLink>
            ))}
          </Flex>
          <Text display={{ base: "none", md: "block" }}>{rights}</Text>
        </Flex>

        <Box>
          <Divider my={2} />
          <Flex>
            <Text as="span" textAlign={{ base: "center", md: "left" }}>
              <b>{joinAsMentor.title}</b>
              {extractEmail({
                text: joinAsMentor.body,
                color: "orange.main",
                fontWeight: 600,
              })}
            </Text>
          </Flex>
        </Box>
        <Stack
          width="100%"
          align={"center"}
          display={{
            base: "flex",
            md: "none",
          }}
        >
          <Divider my={2} />
          <Text>{rights}</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
