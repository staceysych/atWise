"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";

import { scrollToTheElement } from "@/app/utils/scrollToElement";
import Logo from "@/app/assets/logo.svg";
import LogoWhite from "@/app/assets/logo2.svg";

import { useScroll } from "@/app/hooks/useScroll";
import { useLocale } from "@/app/providers";

import { getNavItems } from "./utils/getNavItems";
import { INavBarItem } from "./types";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isScrolled } = useScroll();

  const scrollStyles = {
    bg: "green.dark",
    color: "white",
  };

  const defaultStyles = {
    bg: "white",
    color: "green.dark",
  };

  return (
    <Box
      {...(isScrolled ? scrollStyles : defaultStyles)}
      width="100%"
      zIndex={9}
      position="fixed"
      transition="all 0.3s ease-in-out"
    >
      <Container maxW={"7xl"}>
        <Flex bg={"inherit"} minH={"60px"} py={{ base: 2 }} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "space-between" }}
            alignItems={"center"}
          >
            <Box width={"150px"}>
              <Image
                src={isScrolled ? LogoWhite : Logo}
                alt="AtWise Logo"
                priority={true}
              />
            </Box>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={3}
          >
            <Button
              width="fit-content"
              padding={4}
              colorScheme={"orange"}
              bg={"orange.main"}
              _hover={{ bg: "orange.dark" }}
            >
              Contact Us
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
};

const DesktopNav = () => {
  const { locale } = useLocale();

  const underlineStyles = {
    textDecoration: "underline",
    textDecorationColor: "inherit",
    textDecorationThickness: "2px",
    textUnderlineOffset: "5px",
  };

  return (
    <Stack direction={"row"} spacing={6}>
      {getNavItems(locale).map((navItem, index) => (
        <Box
          key={`${navItem.label}-${index}`}
          color={"inherit"}
          cursor={"pointer"}
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            scrollToTheElement(e, navItem.id)
          }
          _hover={{ ...underlineStyles }}
        >
          {navItem.label?.toUpperCase()}
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const { locale } = useLocale();
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      py={4}
      display={{ md: "none" }}
    >
      {getNavItems(locale).map((navItem, index) => (
        <MobileNavItem key={`${navItem.label}-${index}`} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label }: INavBarItem) => {
  return (
    <Box
      py={2}
      as="a"
      href={"#"}
      justifyContent="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
        {label}
      </Text>
    </Box>
  );
};

export default Navbar;
