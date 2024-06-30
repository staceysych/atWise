import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Principles from "./components/Principles";

import "./globals.css";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Principles />
    </main>
  );
};

export default Home;
