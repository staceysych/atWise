"use client";

import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Container,
  useMediaQuery,
  useOutsideClick,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import NextLink from "next/link";

import { DesktopNav, MobileNav } from "./components";

import Logo from "@/app/(site)/assets/logo.svg";
import LogoWhite from "@/app/(site)/assets/logo2.svg";

import { useScroll } from "@/app/(site)/hooks/useScroll";
import { useRef } from "react";

export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { isScrolled } = useScroll();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const navRef = useRef(null);

  const enableScrollStyles = isScrolled && !isSmallScreen;

  const scrollStyles = {
    bg: "green.dark",
    color: "white",
  };

  const defaultStyles = {
    bg: "white",
    color: "green.dark",
  };

  useOutsideClick({
    ref: navRef,
    handler: () => onClose(),
  });

  return (
    <Box
      {...(enableScrollStyles ? scrollStyles : defaultStyles)}
      width="100%"
      zIndex={9}
      position="fixed"
      transition="all 0.3s ease-in-out"
      ref={navRef}
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
            <Box width={"150px"} cursor={"pointer"}>
              <NextLink href="/" onClick={onClose}>
                <Image
                  src={enableScrollStyles ? LogoWhite : Logo}
                  alt="AtWise Logo"
                  priority={true}
                />
              </NextLink>
            </Box>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav closeMenu={onClose} />
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navbar;
