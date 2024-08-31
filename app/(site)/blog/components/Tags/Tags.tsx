import { Tag } from "@chakra-ui/react";
import React from "react";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return tags.map((tag) => (
    <Tag
      key={tag}
      bg="orange.main"
      borderRadius="full"
      variant="solid"
      size="sm"
      fontSize="xs"
      margin="0 5px"
    >
      {tag}
    </Tag>
  ));
};

export default Tags;
