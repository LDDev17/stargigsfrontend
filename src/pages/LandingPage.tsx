import React from 'react';
import Navbar from "../layout components/Navbar";
import LandingMain from "../layout components/LandingMain";
import LandingTalentMeets from "../layout components/LandingTalentMeets";
import HeroSection from "../layout components/HeroSection";
import Footer from "../footer/Footer"; // Import the Footer component
import Carousel from "../Carousel/Carousel"; // Import the Carousel component

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-[86px]">
        <HeroSection />
        <LandingMain />
        {/* Featured Section */}
        <Carousel /> {/* Insert the Carousel component here */}
        <LandingTalentMeets />
      </div>
      <Footer /> {/* Insert the Footer component here */}
    </div>
  );
};

export default LandingPage;
