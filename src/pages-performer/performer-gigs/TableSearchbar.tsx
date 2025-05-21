import { useState } from "react";
import { ChangeEvent } from "react";

import MagGlass from '../../assets/icons/MagnifyingGlass.png';

// Search bar used on the performer gigs page to search the table for results
const TableSearchbar = () => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div 
      className="flex justify-between items-center p-2 border-2 border-primary 
        rounded-xl w-80"
    >
      <input 
        type="text"
        name="gigsSearch"
        id="gigsSearch"
        placeholder="Search gig by name, location, or type"
        onChange={handleInputChange}
        value={input}
        className="font-light text-md text-text_secondary w-full"
      />
      <img src={MagGlass} alt="magnifying glass icon" />
    </div>
  )
}

export default TableSearchbar
