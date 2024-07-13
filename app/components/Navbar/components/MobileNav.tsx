import { useLocale } from "@/app/providers";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { getNavItems } from "../utils/getNavItems";
import MobileNavItem from "./MobileNavItem";
import ContactButton from "@/app/components/ContactButton";

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
        <ContactButton />
      </Box>
    </Stack>
  );
};

export default MobileNav;
