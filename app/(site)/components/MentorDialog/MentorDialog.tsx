import {
  Box,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IMentor } from "../Mentor/types";
import Image from "next/image";
import { mapMentorToIcon } from "../Mentor/utils/mapMentorToIcon";

import { useLocale } from "@/app/(site)/providers";
import { highlightText } from "@/app/(site)/utils/highlightText";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: IMentor;
}

const MentorDialog = ({ isOpen, onClose, mentor }: DialogProps) => {
  const imgSrc = mapMentorToIcon(mentor.id);
  const { locale } = useLocale();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent minWidth={{ base: "none", lg: "800px" }}>
        <ModalCloseButton />
        <ModalBody padding={{ base: 6, lg: 8 }}>
          <Stack>
            <Flex width={"100%"} gap={8}>
              <Stack width={"100%"} gap={2} color={"green.dark"}>
                <Heading
                  fontWeight={600}
                  fontSize={"3xl"}
                  textAlign={"left"}
                  marginBottom={2}
                >
                  {mentor.name}
                </Heading>
                <Divider />
                <Heading fontSize={"xl"}>
                  {locale.mentors.fieldOfExpertise}
                </Heading>
                <Text>{mentor.expertise}</Text>
                <Divider />
                <Heading fontSize={"xl"}>{locale.mentors.experience}</Heading>
                <Stack>
                  {mentor.experience?.map((exp, index) => (
                    <Text key={index}>
                      {highlightText({
                        text: exp,
                        color: "orange.main",
                        fontWeight: 600,
                      })}
                    </Text>
                  ))}
                </Stack>
                <Divider display={{ base: "block", lg: "none" }} />
                <Box display={{ base: "block", lg: "none" }}>
                  <Heading fontSize={"xl"} marginBottom={2}>
                    {locale.mentors.education}
                  </Heading>
                  <Text>{mentor.education}</Text>
                </Box>
              </Stack>
              <Box
                width={"200px"}
                color={"green.dark"}
                display={{ base: "none", lg: "block" }}
              >
                {imgSrc && (
                  <Image src={imgSrc} alt={mentor.name} priority={true} />
                )}
                <Heading fontSize={"14px"} my={3}>
                  {locale.mentors.education}
                </Heading>
                <Text fontSize={"12px"}>{mentor.education}</Text>
              </Box>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MentorDialog;
