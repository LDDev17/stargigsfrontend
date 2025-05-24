import { useState, useEffect } from 'react';

import purple_concert from '../assets/photos/purple_concert.jpg';
import stage_spotlight from '../assets/photos/stage_spotlight.jpg';
import starGigsLogo from '../assets/logos/logo_md_orange_whiteText.png';

interface LeftProps {
  selectedRole: string;
}
export function LeftSection({ selectedRole }: LeftProps) {
  // state for controlling each background image
  const [spotlightWidth, setSpotlightWidth] = useState<number>(25);
  const [concertWidth, setConcertWidth] = useState<number>(50);

  useEffect(() => {
    if (selectedRole === 'performer') {
      // spotlight takes over
      setSpotlightWidth(100);
      setConcertWidth(0);
    } else if (selectedRole === 'planner') {
      // purple_concert takes over
      setSpotlightWidth(0);
      setConcertWidth(100);
    } else {
      // Reset to 50/50 background images
      setSpotlightWidth(50);
      setConcertWidth(50);
    }
  }, [selectedRole]);

    return (
      <div className='relative min-h-screen w-1/2 font-inter'>
        <section
          className="flex w-full h-full overflow-hidden"
        >
          {/* container for both images */}
          <div className='relative w-full h-full'>
            {/* purple concert image container */}
            <div
              style={{ 
                backgroundImage: `url(${purple_concert})`,
                width: `${concertWidth}%`,
                left: `${100 - concertWidth}%`,
                transition: 'width 0.5s ease-in-out, left 0.5s ease-in-out'
              }}
              className='absolute inset-0 h-full bg-cover bg-center -z-10'
            />

            {/* spotlight image container */}
            <div
              style={{ 
                backgroundImage: `url(${stage_spotlight})`,
                width: `${spotlightWidth}%`,
                transition: 'width 0.5s ease-in-out'
              }}
              className='absolute inset-0 h-full bg-cover bg-center -z-10'
            />
          </div>
          
          
          <img 
            src={starGigsLogo} 
            alt="Star Gigs Logo" 
            className='absolute max-h-12 top-12 left-12'
          />
          
          <header className="absolute bottom-36 left-36 text-4xl font-bold leading-[62px] text-stone-50 ">
            <span>Discover &amp;</span>
            <br />
            <span>Get Discovered!</span>
          </header>
          
          <footer className="absolute bottom-4 left-14 text-lg leading-7 text-stone-50">
            STAR GIGS © 2025 ALL RIGHTS RESERVED
          </footer>
        </section>
      </div>
    );
  }
  