import { Button } from "@chakra-ui/react";
import { useLocale } from "@/app/providers";
import NextLink from "next/link";
import { BASE_URL } from "@/app/utils/defaults";

const ContactButton = () => {
  const {
    locale: {
      contactButton: { link, title },
    },
  } = useLocale();
  return (
    <Button
      width="fit-content"
      padding={4}
      colorScheme={"orange"}
      bg={"orange.main"}
      _hover={{ bg: "orange.dark" }}
    >
      <NextLink href={`${BASE_URL}#${link}`}>{title}</NextLink>
    </Button>
  );
};

export default ContactButton;
