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
  useMediaQuery,
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
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  const enableScrollStyles = isScrolled && !isSmallScreen;

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
      {...(enableScrollStyles ? scrollStyles : defaultStyles)}
      width="100%"
      zIndex={9}
      position="fixed"
      transition="all 0.3s ease-in-out"
    >
      <Container
        maxW={"7xl"}
        boxShadow={{ base: "0 5px 15px rgba(0, 0, 0, .1)", md: "none" }}
      >
        <Flex bg={"inherit"} minH={"60px"} py={{ base: 2 }} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            position={"absolute"}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} color={"green.dark"} />
                ) : (
                  <HamburgerIcon w={5} h={5} color={"green.dark"} />
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
                src={enableScrollStyles ? LogoWhite : Logo}
                alt="AtWise Logo"
                priority={true}
              />
            </Box>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
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
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
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
          onClick={(e) => scrollToTheElement(e, "contactUs")}
        >
          Contact Us
        </Button>
      </Stack>
    </Stack>
  );
};

const MobileNav = () => {
  const { locale } = useLocale();

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      py={4}
      display={{ base: "flex", md: "none" }}
      align={"center"}
      justifyContent={"center"}
    >
      {getNavItems(locale).map((navItem, index) => (
        <MobileNavItem key={`${navItem.label}-${index}`} {...navItem} />
      ))}

      <Box py={4}>
        <Button
          width="fit-content"
          padding={4}
          colorScheme={"orange"}
          bg={"orange.main"}
          _hover={{ bg: "orange.dark" }}
          onClick={(e) => scrollToTheElement(e, "contactUs")}
        >
          Contact Us
        </Button>
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, id }: INavBarItem) => {
  return (
    <Box
      py={4}
      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
        scrollToTheElement(e, id)
      }
      justifyContent="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text fontWeight={600} color={"green.dark"}>
        {label}
      </Text>
    </Box>
  );
};

export default Navbar;
