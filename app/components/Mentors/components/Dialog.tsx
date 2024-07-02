import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IMentor } from "../types";
import Image from "next/image";
import { mapMentorToIcon } from "../utils/mapMentorToIcon";

import { useLocale } from "@/app/providers";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: IMentor;
}

const Dialog = ({ isOpen, onClose, mentor }: DialogProps) => {
  const imgSrc = mapMentorToIcon(mentor.id);
  const { locale } = useLocale();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth={"800px"}>
        <ModalCloseButton />
        <ModalBody>
          <Stack py={4}>
            <Flex width={"100%"} gap={8}>
              <Box width={"200px"}>
                {imgSrc && (
                  <Image src={imgSrc} alt={mentor.name} priority={true} />
                )}
              </Box>

              <Stack width={"100%"} gap={2} color={"green.dark"}>
                <Heading
                  fontWeight={600}
                  fontSize={"4xl"}
                  textAlign={"left"}
                  marginBottom={4}
                >
                  {mentor.name}
                </Heading>

                <Heading fontSize={"xl"}>
                  {locale.mentors.fieldOfExpertise}
                </Heading>
                <Text>{mentor.expertise}</Text>
                <Text>{mentor.experience}</Text>
                <Text>{mentor.education}</Text>
              </Stack>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Dialog;
