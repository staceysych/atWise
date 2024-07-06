"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Divider,
  Text,
} from "@chakra-ui/react";

import { useLocale } from "@/app/providers";
import Step from "@/app/components/Step";
import { scrollToTheElement } from "@/app/utils/scrollToElement";

const HowItWorks = () => {
  const { locale } = useLocale();

  return (
    <Box
      bg={"green.lighter"}
      overflow="hidden"
      position="relative"
      id="howItWorks"
    >
      <Container maxW={"7xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          py={{ base: 20, md: 20 }}
          width="100%"
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
            color={"green.dark"}
            textAlign={"left"}
            marginBottom={8}
          >
            {locale.howItWorks.title.toUpperCase()}
          </Heading>

          <Flex
            maxWidth="60%"
            gap={8}
            align="center"
            flexWrap="wrap"
            alignItems="stretch"
            marginBottom={6}
            position="relative"
          >
            {locale.howItWorks.steps.map((step, index) => (
              <Step key={index} step={step} />
            ))}
            <Box
              borderRadius="50%"
              width={250}
              height={250}
              bg="linear-gradient(160deg, rgba(250,141,98,1) 0%, rgba(255,255,255, 0.2) 100%)"
              position="absolute"
              top={-20}
              zIndex={-1}
              right={-20}
            />
            <Box
              borderRadius="50%"
              width={150}
              height={150}
              bg="linear-gradient(140deg, rgba(250,141,98,1) 0%, rgba(255,255,255, 0.2) 100%)"
              position="absolute"
              top="calc(50% - 50px)"
              zIndex={-1}
              left={-20}
            />
          </Flex>
          <Button
            width="fit-content"
            padding={6}
            colorScheme={"orange"}
            bg={"orange.main"}
            _hover={{ bg: "orange.dark" }}
            marginBottom={4}
            onClick={(e) => scrollToTheElement(e, "contactUs")}
          >
            Mentoring session request
          </Button>
          <Divider maxWidth="60%" />
          <Text fontSize={12} width="70%">
            {locale.howItWorks.disclaimer}
          </Text>
        </Stack>
      </Container>
      <Box
        borderRadius="50%"
        width={350}
        height={350}
        bg="linear-gradient(140deg, rgba(250,141,98,1) 0%, rgba(255,255,255, 0.2) 100%)"
        position="absolute"
        bottom={10}
        zIndex={-1}
        right={-100}
      />
    </Box>
  );
};

export default HowItWorks;
