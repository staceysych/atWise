import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/app/(site)/utils/defaults";
import { useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { RefObject } from "react";
import { UseFormReset } from "react-hook-form";

import { IContactFormValues } from "../types";
import { useLocale } from "@/app/(site)/providers";

const useSendEmail = ({
  form,
  reset,
}: {
  form: RefObject<HTMLFormElement>;
  reset: UseFormReset<IContactFormValues>;
}) => {
  const toast = useToast();
  const {
    locale: {
      contactUs: {
        successMessage: { title, body },
      },
    },
  } = useLocale();

  const sendEmail = () => {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current || "", {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast({
            title,
            description: body,
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

  return sendEmail;
};

export default useSendEmail;
