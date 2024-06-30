"use client";

import { Text } from "@chakra-ui/react";

export const highlightText = (text: string, color: string) => {
  const parts = text.split("*");

  return parts.map((part, index) => {
    if (index % 2 !== 0) {
      return (
        <Text as="span" color={color} key={index}>
          {part}
        </Text>
      );
    }
    return part;
  });
};
