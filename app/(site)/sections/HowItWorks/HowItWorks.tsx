"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Divider,
  Text,
} from "@chakra-ui/react";

import { useLocale } from "@/app/(site)/providers";
import Step from "@/app/(site)/components/Step";

const HowItWorks = () => {
  const {
    locale: {
      howItWorks: { title, steps, disclaimer },
    },
  } = useLocale();

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
            {title.toUpperCase()}
          </Heading>

          <Flex
            gap={8}
            align="center"
            flexWrap="wrap"
            marginBottom={6}
            position="relative"
            maxWidth={"700px"}
            justifyContent={"center"}
          >
            {steps.map((step, index) => (
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
          <Divider maxWidth="60%" />
          <Text fontSize={12} width="70%">
            {disclaimer}
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
