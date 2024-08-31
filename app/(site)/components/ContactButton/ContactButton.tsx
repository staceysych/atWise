import { Button } from "@chakra-ui/react";
import { useLocale } from "@/app/(site)/providers";
import NextLink from "next/link";

const ContactButton = ({ closeMenu }: { closeMenu?: () => void }) => {
  const {
    locale: {
      contactButton: { link, title },
    },
  } = useLocale();

  return (
    <Button width="fit-content" padding={4} colorScheme={"orange"}>
      <NextLink href={link} onClick={closeMenu}>
        {title}
      </NextLink>
    </Button>
  );
};

export default ContactButton;
