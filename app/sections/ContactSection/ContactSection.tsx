"use client";

import { Container, Heading, Stack } from "@chakra-ui/react";

import { useLocale } from "@/app/providers";
import ContactForm from "@/app/components/ContactForm";

const ContactSection = () => {
  const { locale } = useLocale();

  return (
    <Container maxW={"7xl"} py={{ base: 20, md: 20 }}>
      <Stack>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
          color={"green.dark"}
          textAlign={"left"}
          margin={"0 auto"}
          mb={6}
        >
          {locale.contactUs.heading.toUpperCase()}
        </Heading>
        <ContactForm />
      </Stack>
    </Container>
  );
};

export default ContactSection;
