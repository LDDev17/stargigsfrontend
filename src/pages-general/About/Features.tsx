
import { FeatureCard } from "./FeatureCard";

import Squiggle from '../../assets/icons/Squiggle.png';
import about_empower_icon from '../../assets/icons/about_empower_icon.png';
import about_trusted_icon from '../../assets/icons/about_trusted_icon.png';
import about_bookings_icon from '../../assets/icons/about_bookings_icon.png';

export const Features = () => {
  return (
    <section className="flex flex-col gap-5 items-center px-44 py-20 max-md:px-20 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-5xl font-semibold text-black">Why it works</h2>
        <img src={Squiggle} alt="" />
      </div>
      <div className="flex gap-12 items-start max-md:flex-col max-md:items-center">
        <FeatureCard
          icon={about_bookings_icon}
          title="Personalized bookings"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <FeatureCard
          icon={about_trusted_icon}
          title="Trusted creators"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <FeatureCard
          icon={about_empower_icon}
          title="To empower creators"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
      </div>
    </section>
  );
};
