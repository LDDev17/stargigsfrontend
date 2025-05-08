import { useNavigate } from 'react-router-dom';

import crowd from '../assets/photos/crowd_photo.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/role-selection-page');

  return (
    <div
      style={{ backgroundImage: `url(${ crowd })`}}
      className='flex bg-cover bg-local h-screen bg-no-repeat font-inter'
    >
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col text-center space-y-4'>
          <h2 className='text-tertiary text-4xl font-bold'>
            <span className='text-primary'>Book</span> Local Talent! <br/>
            <span className='text-primary'>Plan</span> your Party Now.
          </h2>
          <p className='text-tertiary'>Find top-rated talent for your events with ease.</p>
          <div className='flex justify-center'>
            <button 
              className='flex justify-center items-center rounded-md bg-secondary hover:bg-gradient-to-r from-[#C6987F] via-[#02021E]
              to-[#02021E]  h-[49px] py-[24px] px-[44px] m-0 text-tertiary cursor-pointer'
              // navigate to role-selection-page to begin Sign Up
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default HeroSection;
