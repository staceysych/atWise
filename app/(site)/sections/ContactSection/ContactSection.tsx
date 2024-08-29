"use client";

import { Container, Heading, Stack } from "@chakra-ui/react";

import { useLocale } from "@/app/(site)/providers";
import ContactForm from "@/app/(site)/components/ContactForm";

const ContactSection = () => {
  const {
    locale: {
      contactUs: { heading },
    },
  } = useLocale();

  return (
    <Container maxW={"7xl"} py={{ base: 20, md: 20 }} id="contactUs">
      <Stack align={"center"}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
          color={"green.dark"}
          textAlign={"left"}
          margin={"0 auto"}
          mb={6}
        >
          {heading.toUpperCase()}
        </Heading>
        <ContactForm />
      </Stack>
    </Container>
  );
};

export default ContactSection;
