import { Text, Heading, Stack, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

import { mapStepToIcon } from "./utils/mapStepToIcon";
import { scrollToTheElement } from "@/app/(site)/utils/scrollToElement";

interface StepProps {
  step: {
    id: string;
    title: string;
    body: {
      title: string;
      body: string;
      link?: { title: string; url: string };
    };
    color: string;
    textColor: string;
  };
}

const Step = ({ step }: StepProps) => {
  const { id, title, body, color, textColor } = step;

  return (
    <Stack
      width={"290px"}
      height={"270px"}
      borderRadius={14}
      bg={color}
      padding={6}
      gap={6}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color={textColor}>
          {title}
        </Heading>
        <Image src={mapStepToIcon(id)} alt={title} />
      </Flex>
      <Flex color={textColor} gap={2} alignItems="centre" textAlign="left">
        <Text>{body.body}</Text>
        {body.link && (
          <Button
            display={"flex"}
            alignItems={"flex-start"}
            variant={"text"}
            padding={0}
            onClick={(e) => scrollToTheElement(e, body.link?.url || "")}
            color={"orange.main"}
            transition={"all 0.3s ease-in-out"}
            _hover={{
              color: "orange.dark",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
            lineHeight={"24px"}
          >
            {body.link.title}
          </Button>
        )}
      </Flex>
    </Stack>
  );
};

export default Step;
