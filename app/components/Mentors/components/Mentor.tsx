"use client";

import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

import { mapMentorToIcon } from "@/app/components/Mentors/utils/mapMentorToIcon";

import { useLocale } from "@/app/providers";
import { IMentor } from "../types";
import Dialog from "./Dialog";

interface MentorProps {
  mentor: IMentor;
}

const Mentor = ({ mentor }: MentorProps) => {
  const { locale } = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imgSrc = mapMentorToIcon(mentor.id);

  return (
    <>
      <Stack
        height={"340px"}
        width={"250px"}
        border="16px solid"
        borderColor="white"
        shadow="md"
        borderRadius="8px"
        justifyContent={"flex-end"}
      >
        <Box width={"100%"} height={"110px"} bg={"white"} position={"relative"}>
          <Box position={"absolute"} bottom={"110px"}>
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={mentor.name}
                priority={true}
                width={200}
              />
            )}
          </Box>
          <Stack marginTop={3}>
            <Heading fontWeight={600} fontSize={"xl"} color={"green.dark"}>
              {mentor.name}
            </Heading>
            <Text fontSize={14} color={"green.dark"} height={"40px"}>
              {mentor.position}
            </Text>
            <Button
              variant={"text"}
              height={"fit-content"}
              width={"fit-content"}
              color={"orange.main"}
              padding={0}
              margin={"0 auto"}
              _hover={{ color: "orange.dark" }}
              onClick={onOpen}
              borderBottom={"16px"}
            >
              {locale.mentors.findOutMore}
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Dialog isOpen={isOpen} onClose={onClose} mentor={mentor} />
    </>
  );
};

export default Mentor;
