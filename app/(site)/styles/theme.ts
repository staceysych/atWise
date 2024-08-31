import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    orange: {
      main: "#FA8D62",
      light: "rgba(250, 141, 98, 0.17)",
      lighter: "#FDDCCE",
      dark: "#F76C5E",
    },
    green: {
      dark: "#2B616D",
      dark2: "#2B616DAA",
      darker: "#1A3D44",
      light: "#B2DBD5",
      lighter: "rgba(178, 219, 213, 0.2)",
    },
  },
});

export default theme;
