import crowd from '../assets/photos/crowd_photo.jpg';

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ crowd })`}}
      className='flex bg-cover bg-local h-screen bg-no-repeat'
    >
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col text-center space-y-4'>
          <h2 className='text-tertiary text-4xl font-bold'>
            <span className='text-primary'>Book</span> Local Talent! <br/>
            <span className='text-primary'>Plan</span> your Party Now.
          </h2>
          <p className='text-tertiary'>Find top-rated talent for your events with ease.</p>
          <div className='flex justify-center'>
            <button className='bg-secondary hover:bg-gradient-to-r from-[#C6987F] via-[#02021E]
                to-[#02021E]  h-[49px] py-[24px] px-[44px] m-0 text-tertiary'
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
