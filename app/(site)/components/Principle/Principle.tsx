import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { mapPrincipleToIcon } from "./utils/mapPrincipleToIcon";

interface PrincipleProps {
  principle: { title: string; body: string; id: string };
}

const Principle = (principle: PrincipleProps) => {
  const { title, body, id } = principle.principle;

  return (
    <Stack alignItems="center" flex={1} maxWidth="300px" minWidth="210px">
      <Flex
        justifyContent="center"
        alignItems="center"
        rounded={"full"}
        width={120}
        height={120}
        bg="orange.lighter"
        mb={6}
      >
        <Image src={mapPrincipleToIcon(id)} alt={title} />
      </Flex>
      <Heading
        fontSize={"xl"}
        fontWeight={600}
        color="green.dark"
        height="50px"
      >
        {title}
      </Heading>
      <Text textAlign="justify" color={"green.dark"}>
        {body}
      </Text>
    </Stack>
  );
};

export default Principle;
