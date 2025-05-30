import { useState } from 'react';

import Heart from '../assets/icons/Heart_Default.png';
import Heart2 from '../assets/icons/Heart_State2.png';

const HeartButton = () => {
  const [currentImage, setCurrentImage] = useState(Heart);

  const handleMouseEnter = () => {
    setCurrentImage(Heart2);
  };

  const handleMouseLeave = () => {
    setCurrentImage(Heart);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={currentImage} alt="heart button" />
    </button>
  )
}

export default HeartButton;
