"use client";

import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";

import { DesktopNav, MobileNav } from "./components";

import { scrollToTheElement } from "@/app/utils/scrollToElement";
import Logo from "@/app/assets/logo.svg";
import LogoWhite from "@/app/assets/logo2.svg";

import { useScroll } from "@/app/hooks/useScroll";

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
            <Box
              width={"150px"}
              onClick={(e) => scrollToTheElement(e, "about")}
              cursor={"pointer"}
            >
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

export default Navbar;
