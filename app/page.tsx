import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Principles from "./sections/Principles";
import Mentors from "./sections/Mentors";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

import "./globals.css";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Principles />
      <Mentors />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
