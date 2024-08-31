import { Box, Text } from "@chakra-ui/react";
import { INavBarItem } from "@/app/(site)/components/Navbar/types";
import NextLink from "next/link";

const MobileNavItem = ({ label, link, closeMenu }: INavBarItem) => {
  return (
    <Box
      py={4}
      justifyContent="space-between"
      alignItems="center"
      width={"100%"}
      textAlign={"center"}
      _hover={{
        textDecoration: "none",
        bg: "green.lighter",
      }}
    >
      <NextLink href={link} onClick={closeMenu}>
        <Text fontWeight={600} color={"green.dark"}>
          {label}
        </Text>
      </NextLink>
    </Box>
  );
};

export default MobileNavItem;
