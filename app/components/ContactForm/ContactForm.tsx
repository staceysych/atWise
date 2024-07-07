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
  useToast,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";

import { useLocale } from "@/app/providers";
import { useRef } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/app/utils/defaults";

interface IContactFormValues {
  name: string;
  contactInfo: string;
  about: string;
  goal: string;
  preference: string;
}

const ContactForm = () => {
  const { locale } = useLocale();
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IContactFormValues>();

  const sendEmail = () => {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current || "", {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast({
            title: "Request Sent Successfully!",
            description:
              "We've received your request and will get back to you soon.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Stack
      bg="orange.lighter"
      borderRadius="lg"
      width={{ base: "100%", lg: "50%" }}
      padding={8}
      color={"green.dark"}
      alignItems={"center"}
    >
      <Heading fontSize={"xl"}>{locale.contactUs.title}</Heading>
      <Box m={8} color="green.dark" width={"100%"}>
        <form onSubmit={handleSubmit(sendEmail)} ref={form}>
          <VStack spacing={5}>
            <FormControl isInvalid={!!errors.name} id="name">
              <FormLabel>{locale.contactUs.name.label}</FormLabel>
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
                  placeholder={locale.contactUs.name.placeholder}
                  {...register("name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Please enter your full name",
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.contactInfo} id="contactInfo">
              <FormLabel>{locale.contactUs.contactInfo.label}</FormLabel>
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
                  placeholder={locale.contactUs.contactInfo.placeholder}
                  {...register("contactInfo", {
                    required: "This is required",
                  })}
                />
              </InputGroup>
              <FormErrorMessage>{errors.about?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.about} id="about">
              <FormLabel>{locale.contactUs.about.label}</FormLabel>
              <Textarea
                borderColor={!!errors.about ? "error" : "green.dark"}
                _hover={{
                  borderColor: "green.darker",
                }}
                placeholder={locale.contactUs.about.placeholder}
                {...register("about", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>{errors.contactInfo?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.goal} id="goal">
              <FormLabel>{locale.contactUs.goal.label}</FormLabel>
              <Textarea
                borderColor={!!errors.goal ? "error" : "green.dark"}
                _hover={{
                  borderColor: "green.darker",
                }}
                placeholder={locale.contactUs.goal.placeholder}
                {...register("goal", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>{errors.goal?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="preference">
              <FormLabel>{locale.contactUs.preference.label}</FormLabel>
              <InputGroup borderColor={"green.dark"}>
                <Input
                  type="text"
                  size="md"
                  _hover={{
                    borderColor: "green.darker",
                  }}
                  placeholder={locale.contactUs.preference.placeholder}
                  {...register("preference")}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="name" float="right">
              <Button type="submit" bg="green.dark" color="white" _hover={{}}>
                Send a request
              </Button>
            </FormControl>
          </VStack>
        </form>
      </Box>
    </Stack>
  );
};

export default ContactForm;
