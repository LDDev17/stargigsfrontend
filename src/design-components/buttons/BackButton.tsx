
import Arrow from '../../assets/svgs/arrow_up.svg?react';

const BackButton = () => {


  return (
    <button 
      className='group space-x-4 hover:bg-gradient-to-r from-light_orange 
        to-primary hover:bg-clip-text text-[#111928]
        hover:text-transparent cursor-pointer flex'
      onClick={() => window.history.back()}
    >
      <Arrow 
        className='rotate-270 translate-y-1 text-[#111928] group-hover:text-primary'
      />
      <p>Back</p>
    </button>
  )
}

export default BackButton
