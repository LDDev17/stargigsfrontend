<<<<<<< HEAD

const JoinButton = () => {
  return (
    <button className="bg-secondary hover:bg-gradient-to-r from-[#C6987F] via-[#02021E] 
      to-[#02021E] w-[159px] h-[49px] py-[24px] px-[44px] m-0 text-tertiary"
=======
import { useNavigate } from "react-router-dom";

const JoinButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/role-selection-page');
  };

  return (
    <button className="flex justify-center items-center rounded-md bg-secondary hover:bg-gradient-to-r from-[#C6987F] via-[#02021E] 
      to-[#02021E] w-[159px] h-[49px] py-[24px] px-[44px] m-0 text-tertiary cursor-pointer font-inter"
      onClick={handleClick}
>>>>>>> 7a216819bc5559359aee0bf228a887b2ace267a0
    >
      <p>Join Now</p>
    </button>
  )
}

export default JoinButton;
