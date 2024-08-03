import { Button } from "@chakra-ui/react";
import { useLocale } from "@/app/providers";
import NextLink from "next/link";
// import { useRouter } from "next/router";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ContactButton = () => {
  const {
    locale: {
      contactButton: { link, title },
    },
  } = useLocale();

  const pathname = usePathname();
  const router = useRouter();

  console.log({ pathname });
  return (
    <Button
      width="fit-content"
      padding={4}
      colorScheme={"orange"}
      bg={"orange.main"}
      // _hover={{ bg: "orange.dark" }}
      // onClick={() => router.push(`/#${link}`)}
    >
      <NextLink href={`//#${link}`}>{title}</NextLink>
    </Button>
  );
};

export default ContactButton;
