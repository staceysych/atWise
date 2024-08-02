import { Box, Container } from "@chakra-ui/react";
// import dynamic from "next/dynamic";

// const PrivacyPolicyContent = dynamic(() => import("./privacy-policy.mdx"));

const PrivacyPolicyPage = () => {
  return (
    <Container
      maxW={"7xl"}
      py={{ base: "120px", lg: 40 }}
      color={"green.dark"}
      sx={{
        p: {
          padding: "4px 0",
        },
        h1: {
          fontSize: "2xl",
          fontWeight: "bold",
          color: "green.dark",
        },
        h3: {
          fontSize: "lg",
          fontWeight: "semibold",
          margin: "1rem 0 0.5rem",
        },
        ul: {
          marginLeft: "40px",
        },
        a: {
          fontWeight: 600,
          textDecoration: "underline",
          color: "orange.main",
        },
        ".last-updated": {
          marginBottom: "2rem",
          opacity: 0.7,
        },
      }}
    >
      {/* <PrivacyPolicyContent /> */}
    </Container>
  );
};

export default PrivacyPolicyPage;
