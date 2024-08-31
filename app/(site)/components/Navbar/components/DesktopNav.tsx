import { useLocale } from "@/app/(site)/providers";
import { Box, Stack } from "@chakra-ui/react";
import { getNavItems } from "../utils/getNavItems";
import ContactButton from "@/app/(site)/components/ContactButton";
import NextLink from "next/link";

const DesktopNav = () => {
  const { locale } = useLocale();

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      {getNavItems(locale).map((navItem, index) => (
        <Box
          key={`${navItem.label}-${index}`}
          color={"inherit"}
          cursor={"pointer"}
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "inherit",
            textDecorationThickness: "2px",
            textUnderlineOffset: "5px",
          }}
        >
          <NextLink href={navItem.link}>
            {navItem.label?.toUpperCase()}
          </NextLink>
        </Box>
      ))}

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"flex-end"}
        direction={"row"}
        spacing={3}
      >
        <ContactButton />
      </Stack>
    </Stack>
  );
};

export default DesktopNav;
