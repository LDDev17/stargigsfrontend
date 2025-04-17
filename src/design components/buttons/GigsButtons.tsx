import { useState } from "react";



const GigsButtons = () => {
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = `border-2 border-primary h-[50px] hover:bg-[#ffece0]
    ${isActive ? 'text-white bg-primary font-bold' : 'bg-white'}`

  return (
    <div>
      <button className={`${buttonStyle} rounded-l-lg`}
      >
        GIG BOOKING REQUESTS
      </button>
      <button className={buttonStyle}
      >
        UPCOMING GIGS
      </button>
      <button className={`${buttonStyle} rounded-r-lg`}>
        GIG HISTORY
      </button>
    </div>
  )
}

export default GigsButtons;
