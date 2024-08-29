import { Text } from "@chakra-ui/react";

export const highlightText = ({
  text,
  color,
  fontWeight,
  underline,
}: {
  text: string;
  color: string;
  fontWeight?: number;
  underline?: boolean;
}) => {
  const parts = text.split("*");

  return parts.map((part, index) => {
    if (index % 2 !== 0) {
      return (
        <Text
          textDecoration={underline ? "underline" : "none"}
          as="span"
          color={color}
          key={index}
          fontWeight={fontWeight}
        >
          {part}
        </Text>
      );
    }
    return part;
  });
};
