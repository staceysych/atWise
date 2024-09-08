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
import Image from "next/image";
import { TMentor } from "@/sanity/types/Mentor";

import { useLocale } from "@/app/(site)/providers";

import { PortableText } from "@portabletext/react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: TMentor;
}

const MentorDialog = ({ isOpen, onClose, mentor }: DialogProps) => {
  const {
    name,
    expertise,
    experience,
    education,
    image: { url, alt },
  } = mentor;
  const { locale } = useLocale();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent minWidth={{ base: "none", lg: "800px" }}>
        <ModalCloseButton />
        <ModalBody padding={{ base: 6, lg: 8 }}>
          <Stack>
            <Flex width={"100%"} gap={8}>
              <Stack flex={1} gap={2} color={"green.dark"}>
                <Heading
                  fontWeight={600}
                  fontSize={"3xl"}
                  textAlign={"left"}
                  marginBottom={2}
                >
                  {name}
                </Heading>
                <Divider />
                <Heading fontSize={"xl"}>
                  {locale.mentors.fieldOfExpertise}
                </Heading>
                <Text>{expertise}</Text>
                <Divider />
                <Heading fontSize={"xl"}>{locale.mentors.experience}</Heading>
                <Stack
                  css={{
                    strong: {
                      color: "#FA8D62",
                    },
                  }}
                >
                  <PortableText value={experience} />
                </Stack>
                <Divider display={{ base: "block", lg: "none" }} />
                <Box display={{ base: "block", lg: "none" }}>
                  <Heading fontSize={"xl"} marginBottom={2}>
                    {locale.mentors.education}
                  </Heading>
                  <Text>{education}</Text>
                </Box>
              </Stack>
              <Box
                width={"200px"}
                color={"green.dark"}
                display={{ base: "none", lg: "flex" }}
                flexDir={"column"}
              >
                <Image
                  width={200}
                  height={205}
                  src={url}
                  alt={alt}
                  priority={true}
                  style={{
                    maxHeight: "205px",
                    objectFit: "contain",
                  }}
                />
                <Heading fontSize={"14px"} my={3}>
                  {locale.mentors.education}
                </Heading>
                <Text fontSize={"12px"}>{education}</Text>
              </Box>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MentorDialog;
