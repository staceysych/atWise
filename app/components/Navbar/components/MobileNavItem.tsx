import { Box, Text } from "@chakra-ui/react";
import { INavBarItem } from "../types";
import { scrollToTheElement } from "@/app/utils/scrollToElement";

const MobileNavItem = ({ label, id }: INavBarItem) => {
  return (
    <Box
      py={4}
      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
        scrollToTheElement(e, id)
      }
      justifyContent="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text fontWeight={600} color={"green.dark"}>
        {label}
      </Text>
    </Box>
  );
};

export default MobileNavItem;
