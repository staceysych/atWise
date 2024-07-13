import { scrollToTheElement } from "@/app/utils/scrollToElement";
import { Button } from "@chakra-ui/react";
import { useLocale } from "@/app/providers";

const ContactButton = () => {
  const {
    locale: {
      contactButton: { link, title },
    },
  } = useLocale();
  return (
    <Button
      width="fit-content"
      padding={6}
      colorScheme={"orange"}
      bg={"orange.main"}
      _hover={{ bg: "orange.dark" }}
      onClick={(e) => scrollToTheElement(e, link)}
    >
      {title}
    </Button>
  );
};

export default ContactButton;
