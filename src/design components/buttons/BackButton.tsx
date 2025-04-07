import { useState } from 'react';

import Arrow from '../assets/icons/arrow-left.png';
import ArrowHover from '../assets/icons/arrow-left-hover.png';

const BackButton = () => {
  const [currentImage, setCurrentImage] = useState(Arrow);

  const handleMouseEnter = () => {
    setCurrentImage(ArrowHover);
  };

  const handleMouseLeave = () => {
    setCurrentImage(Arrow);
  };

  return (
    <button 
      className='space-x-2 hover:bg-gradient-to-r from-primary via-light_orange to-primary hover:bg-clip-text
        hover:text-transparent'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <img src={currentImage} alt="back button arrow"/>
      </div>
      <p>Back</p>
    </button>
  )
}

export default BackButton
