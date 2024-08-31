import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Principles from "./sections/Principles";
import Mentors from "./sections/Mentors";
import ContactSection from "./sections/ContactSection";

import "@/app/globals.css";
import { Divider } from "@chakra-ui/react";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Mentors />
      <Principles />
      <Divider />
      <ContactSection />
    </main>
  );
};

export default Home;
