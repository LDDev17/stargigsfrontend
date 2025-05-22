import Phone from '../assets/svgs/bxs_phone-call.svg?react';
import Envelope from '../assets/svgs/envelope.svg?react';
import MapPin from '../assets/svgs/map_pin.svg?react';
import Twitter from '../assets/svgs/twitter.svg?react';
import Instagram from '../assets/svgs/instagram.svg?react';
import Discord from '../assets/svgs/discord.svg?react';
import { Link } from 'react-router-dom';

export const ContactInfo = () => {
  return (
    <section className="relative p-10 text-white bg-black w-[491px] flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-semibold">Contact Information</h2>
        <p className="text-base text-[#c9c9c9]">Say something to start a live chat!</p>
      </div>
      <div className="mb-24">
        <div className="flex gap-5 items-center mb-8">
          <Phone />
          <p className="font-poppins">+1012 3456 789</p>
        </div>
        <div className="flex gap-5 items-center mb-8">
          <Envelope />
          <p className="font-poppins border-b-2 border-primary">contact@stargigs.com</p>
        </div>
        <div className="flex gap-5 items-center mb-8">
          <MapPin />
          <address className="text-base font-inter">
            5123 Market St. #22B
            <br />
            Charlottesville, California 44635
          </address>
        </div>
      </div>
      <div className="flex gap-5">
        <Link
          to="#"
          className="flex justify-center items-center rounded-full bg-[#1b1b1b] h-[30px] w-[30px]"
        >
          <Twitter />
        </Link>
        <Link
          to="#"
          className="flex justify-center items-center rounded-full bg-white h-[30px] w-[30px]"
        >
          <Instagram />
        </Link>
        <Link
          to="#"
          className="flex justify-center items-center rounded-full bg-[#1b1b1b] h-[30px] w-[30px]"
        >
          <Discord />
        </Link>
      </div>
      <div className='rounded-full bg-[#1a1a1a] absolute -right-20 -bottom-20 h-[269px] w-[269px] overflow-hidden'></div>
      <div className='rounded-full bg-[#484848]/50 absolute right-20 bottom-20 h-[138px] w-[138px]'></div>
    </section>
  );
};
