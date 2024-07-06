import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Principles from "./sections/Principles";
import Mentors from "./sections/Mentors";
import ContactSection from "./sections/ContactSection";

import "./globals.css";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Principles />
      <Mentors />
      <ContactSection />
    </main>
  );
};

export default Home;
