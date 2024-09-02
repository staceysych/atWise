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

import MentorDialog from "@/app/(site)/components/MentorDialog";
import { TMentor } from "@/sanity/types/Mentor";

interface MentorProps {
  mentor: TMentor;
}

const Mentor = ({ mentor }: MentorProps) => {
  const {
    name,
    image: { url, alt },
    position,
  } = mentor;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        height={"340px"}
        width={"250px"}
        gap={0}
        justifyContent={"stretch"}
      >
        <Box
          height={"100%"}
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <Image
            src={url}
            alt={alt}
            priority={true}
            height={216}
            width={200}
            style={{
              maxHeight: "216px",
              objectFit: "contain",
            }}
          />
        </Box>
        <Stack
          shadow="md"
          background={"white"}
          borderRadius={8}
          width={"100%"}
          padding={3}
        >
          <Heading fontWeight={600} fontSize={"xl"} color={"green.dark"}>
            {name}
          </Heading>
          <Text fontSize={14} color={"green.dark"} height={"40px"}>
            {position}
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
            Find out more
          </Button>
        </Stack>
      </Stack>
      {/* <MentorDialog isOpen={isOpen} onClose={onClose} mentor={mentor} /> */}
    </>
  );
};

export default Mentor;
