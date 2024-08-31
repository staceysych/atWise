import { useLocale } from "@/app/(site)/providers";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { getNavItems } from "@/app/(site)/components/Navbar/utils/getNavItems";
import MobileNavItem from "./MobileNavItem";
import ContactButton from "@/app/(site)/components/ContactButton";

const MobileNav = ({ closeMenu }: { closeMenu: () => void }) => {
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
        <MobileNavItem
          key={`${navItem.label}-${index}`}
          {...navItem}
          closeMenu={closeMenu}
        />
      ))}

      <Box py={4}>
        <ContactButton closeMenu={closeMenu} />
      </Box>
    </Stack>
  );
};

export default MobileNav;
