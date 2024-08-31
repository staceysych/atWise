import { Link } from "@chakra-ui/react";

export const extractEmail = ({
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
  const parts = text.split("<email>");

  return parts.map((part, index) => {
    if (index % 2 !== 0) {
      return (
        <Link
          textDecoration={underline ? "underline" : "none"}
          color={color}
          key={index}
          fontWeight={fontWeight}
          href={`mailto:${part}`}
        >
          {part}
        </Link>
      );
    }
    return part;
  });
};
