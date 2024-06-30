"use client";

import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import Image from "next/image";

import { mapStepToIcon } from "@/app/components/HowItWorks/utils/mapStepToIcon";

interface StepProps {
  step: {
    id: string;
    title: string;
    body: {
      title: string;
      body: string;
    };
    color: string;
    textColor: string;
  };
}

const Step = ({ step }: StepProps) => {
  const { id, title, body, color, textColor } = step;

  return (
    <Stack flex="1 1 calc(50% - 16px)" borderRadius={14} bg={color} padding={6}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontSize={"3xl"} color={textColor}>
          {title}
        </Heading>
        <Image src={mapStepToIcon(id)} alt={title} />
      </Flex>
      <Flex
        color={textColor}
        direction="column"
        gap={3}
        alignItems="flex-start"
        textAlign="left"
      >
        <Heading fontSize={"xl"}>{body.title}</Heading>
        <Text>{body.body}</Text>
      </Flex>
    </Stack>
  );
};

export default Step;
