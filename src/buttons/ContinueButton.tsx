import React from 'react';

interface ContinueButtonProps {
  onClick: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-primary hover:bg-gradient-to-r from-light_orange to-primary 
        text-tertiary hover:text-text_primary py-1 px-[34px] w-[115px] h-[49px]"
      onClick={onClick}
    >
      <p>Continue</p>
    </button>
  );
};

export default ContinueButton;
