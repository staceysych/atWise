import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import Mentor from "@/app/(site)/components/Mentor";
import { getMentors } from "@/sanity/sanity-utils";

const Mentors = async () => {
  const mentorsData = await getMentors();

  return (
    <Box bg={"green.dark2"} id="mentors">
      <Container maxW={"7xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          py={{ base: 20, md: 20 }}
          width="100%"
        >
          <Stack gap={4} alignItems="center" maxW="700px">
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
              color={"white"}
              textAlign={"left"}
            >
              Our mentors
            </Heading>
            <Text color={"white"}>
              Meet our mentors! Our mentors are industry leaders, seasoned legal
              practitioners, and professionals who are passionate about sharing
              their knowledge and helping you succeed.
            </Text>
          </Stack>
          <Flex
            gap={14}
            mt={14}
            mb={8}
            flexWrap={"wrap"}
            justifyContent={"center"}
            maxWidth={"900px"}
          >
            {mentorsData.map((mentor, index) => (
              <Mentor key={index} mentor={mentor} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Mentors;
