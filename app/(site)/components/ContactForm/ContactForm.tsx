"use client";

import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

import { useForm } from "react-hook-form";

import { useLocale } from "@/app/(site)/providers";
import { useRef } from "react";
import { IContactFormValues } from "./types";
import { useSendEmail } from "./hooks";

const ContactForm = () => {
  const { locale } = useLocale();
  const form = useRef<HTMLFormElement>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IContactFormValues>();

  const sendEmail = useSendEmail({ form, reset });

  const {
    contactUs: {
      title,
      name,
      validation,
      contactInfo,
      about,
      goal,
      preference,
      actionButton,
    },
  } = locale;

  return (
    <Stack
      bg="orange.lighter"
      borderRadius="lg"
      width={{ base: "100%", lg: "50%" }}
      padding={8}
      color={"green.dark"}
      alignItems={"center"}
    >
      <Heading fontSize={"xl"}>{title}</Heading>
      <Box m={8} color="green.dark" width={"100%"}>
        <form onSubmit={handleSubmit(sendEmail)} ref={form}>
          <VStack spacing={5}>
            <FormControl isInvalid={!!errors.name} id="name">
              <FormLabel>{name.label}</FormLabel>
              <InputGroup borderColor={!!errors.name ? "error" : "green.dark"}>
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  _hover={{
                    borderColor: "green.darker",
                  }}
                  placeholder={name.placeholder}
                  {...register("name", {
                    required: validation.requiredField,
                    minLength: {
                      value: 4,
                      message: validation.fields.name,
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.contactInfo} id="contactInfo">
              <FormLabel>{contactInfo.label}</FormLabel>
              <InputGroup
                borderColor={!!errors.contactInfo ? "error" : "green.dark"}
              >
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  _hover={{
                    borderColor: "green.darker",
                  }}
                  placeholder={contactInfo.placeholder}
                  {...register("contactInfo", {
                    required: validation.requiredField,
                  })}
                />
              </InputGroup>
              <FormErrorMessage>{errors.about?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.about} id="about">
              <FormLabel>{about.label}</FormLabel>
              <Textarea
                borderColor={!!errors.about ? "error" : "green.dark"}
                _hover={{
                  borderColor: "green.darker",
                }}
                placeholder={about.placeholder}
                {...register("about", {
                  required: validation.requiredField,
                })}
              />
              <FormErrorMessage>{errors.contactInfo?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.goal} id="goal">
              <FormLabel>{goal.label}</FormLabel>
              <Textarea
                borderColor={!!errors.goal ? "error" : "green.dark"}
                _hover={{
                  borderColor: "green.darker",
                }}
                placeholder={goal.placeholder}
                {...register("goal", {
                  required: validation.requiredField,
                })}
              />
              <FormErrorMessage>{errors.goal?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="preference">
              <FormLabel>{preference.label}</FormLabel>
              <InputGroup borderColor={"green.dark"}>
                <Input
                  type="text"
                  size="md"
                  _hover={{
                    borderColor: "green.darker",
                  }}
                  placeholder={preference.placeholder}
                  {...register("preference")}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="name" display={"flex"} justifyContent={"center"}>
              <Button type="submit" bg="green.dark" color="white" _hover={{}}>
                {actionButton}
              </Button>
            </FormControl>
          </VStack>
        </form>
      </Box>
    </Stack>
  );
};

export default ContactForm;
