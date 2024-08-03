import { Box, Text } from "@chakra-ui/react";
import { INavBarItem } from "@/app/components/Navbar/types";
import NextLink from "next/link";

const MobileNavItem = ({ label, link }: INavBarItem) => {
  return (
    <Box
      py={4}
      justifyContent="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
    >
      <NextLink href={`/${link}`}>
        <Text fontWeight={600} color={"green.dark"}>
          {label}
        </Text>
      </NextLink>
    </Box>
  );
};

export default MobileNavItem;
