import Navbar from "../layout components/Navbar";
import LandingMain from "../layout components/LandingMain";
import LandingTalentMeets from "../layout components/LandingTalentMeets";
import HeroSection from "../layout components/HeroSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-[86px]">
        <HeroSection />
        <LandingMain />
        {/* Featured Section */}
        <div className="flex justify-center my-8">Insert Featured Section Here</div>
        <LandingTalentMeets />
      </div>
      <div className="flex justify-center my-8">Insert Footer Here</div>
    </div>
  )
}

export default LandingPage;
