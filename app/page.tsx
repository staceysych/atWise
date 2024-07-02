import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Principles from "./components/Principles";
import Mentors from "./components/Mentors";

import "./globals.css";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Principles />
      <Mentors />
    </main>
  );
};

export default Home;
