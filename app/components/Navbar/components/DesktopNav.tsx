import { useLocale } from "@/app/providers";
import { Box, Stack } from "@chakra-ui/react";
import { getNavItems } from "../utils/getNavItems";
import { scrollToTheElement } from "@/app/utils/scrollToElement";
import ContactButton from "@/app/components/ContactButton";

const DesktopNav = () => {
  const { locale } = useLocale();

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
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "inherit",
            textDecorationThickness: "2px",
            textUnderlineOffset: "5px",
          }}
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
        <ContactButton />
      </Stack>
    </Stack>
  );
};

export default DesktopNav;
