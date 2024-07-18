"use client";

import {
  Box,
  Button,
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
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Incognito from "@/app/assets/Incognito.png";

import { useLocale } from "@/app/providers";
import Link from "next/link";

const IncognitoMentor = () => {
  const {
    locale: {
      mentors: {
        incognito: {
          name,
          subtitle,
          dialog: { title, body, contact, email },
        },
        findOutMore,
      },
    },
  } = useLocale();
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
            src={Incognito}
            alt="Become a mentor"
            priority={true}
            width={200}
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
            {subtitle}
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
            {findOutMore}
          </Button>
        </Stack>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent minWidth={{ base: "none", lg: "600px" }}>
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
                    {title}
                  </Heading>
                  <Divider />
                  <Text>{body}</Text>
                  <Flex gap={1} justifyContent={"flex-start"} flexWrap={"wrap"}>
                    <Text whiteSpace={"nowrap"}>{contact}</Text>
                    <Text fontWeight={"600"} color={"orange.main"}>
                      <Link href={`mailto:${email}`}>{email}</Link>
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IncognitoMentor;
