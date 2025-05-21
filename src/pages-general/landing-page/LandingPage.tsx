import Navbar from "../general-components/Navbar";
import LandingMain from "./LandingMain";
import LandingTalentMeets from "./LandingTalentMeets";
import HeroSection from "./HeroSection";
import Carousel from "../../Carousel/Carousel"; // Import the Carousel component
import Footer2 from '../general-components/Footer2';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-[86px]">
        <HeroSection />
        <LandingMain />
        {/* Featured Section */}
        <div className='bg-[#cdd2d5]/30 p-8'>
          <Carousel />
        </div>
        <LandingTalentMeets />
      </div>
      <Footer2 />
    </div>
  );
};

export default LandingPage;
