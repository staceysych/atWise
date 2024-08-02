import { Button } from "@chakra-ui/react";
import { useLocale } from "@/app/providers";
import NextLink from "next/link";

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
      <NextLink href={`#${link}`}>{title}</NextLink>
    </Button>
  );
};

export default ContactButton;
