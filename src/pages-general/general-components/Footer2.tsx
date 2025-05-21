import { Link } from 'react-router-dom';

import BrandLogo from '../../assets/logos/logo_md_orange_whiteText.png';
import ArrowUp from '../../assets/svgs/arrow_up.svg?react';

const Footer2 = () => {
  return (
    <div className='relative w-full'>
      {/* sets the slanted top edge for the container */}
      <div className='h-[400px] w-full bg-text_primary flex flex-col justify-around font-inter
        [clip-path:polygon(0_0,100%_40%,100%_100%,0_100%)] relative'
      >
        <main className='flex justify-around w-full'>
          {/* Left Side */}
          <div className='flex flex-col justify-around max-h-[200px] mt-26 space-y-6'>
            <img src={BrandLogo} alt="Star Gigs logo" className='w-56'/>
            <div className='text-tertiary text-md space-y-2'>
              <p>5123 Market St. #22B</p>
              <p>Charlottesville, California 44635</p>
            </div>
            <div className='text-tertiary text-md space-y-2 flex flex-col'>
              <p className='inline-block w-fit border-b-2 border-primary cursor-pointer'>(123) 456-7890</p>
              <p className='inline-block w-fit border-b-2 border-primary cursor-pointer'>contact@stargigs.com</p>
            </div>
          </div>
          {/* Right Side */}
          <div className='flex space-x-12 mt-48 max-h-24'>
            <div className='flex flex-col text-md text-tertiary/75 space-y-4'>
              <Link to='#'>Home</Link>
              <Link to='/reviews'>Reviews</Link>
            </div>
            <div className='flex flex-col text-md text-tertiary/75 space-y-4'>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact Us</Link>
            </div>
          </div>
        </main>
        <footer>
          <p className='text-tertiary/65 text-md text-center'>© 2025 STAR GIGS. All rights reserved.</p>
        </footer>
      </div>
      <button className='absolute flex justify-center items-center p-4 size-12 rounded-full
        bg-gradient-to-b from-[#f6bd97] to-primary right-8 top-32 z-100 cursor-pointer'
        onClick={() => window.scrollTo({ top:0, behavior: 'smooth' })}
      >
        <ArrowUp />
      </button>
    </div>
  )
}

export default Footer2
