import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

import { mapMentorToIcon } from "./utils/mapMentorToIcon";

import { useLocale } from "@/app/(site)/providers";
import { IMentor } from "./types";
import MentorDialog from "@/app/(site)/components/MentorDialog";

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
        gap={0}
        justifyContent={"stretch"}
      >
        <Box
          height={"100%"}
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={mentor.name}
              priority={true}
              width={200}
              style={{
                maxHeight: "216px",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
        <Stack
          shadow="md"
          background={"white"}
          borderRadius={8}
          width={"100%"}
          padding={3}
        >
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
      </Stack>
      <MentorDialog isOpen={isOpen} onClose={onClose} mentor={mentor} />
    </>
  );
};

export default Mentor;
