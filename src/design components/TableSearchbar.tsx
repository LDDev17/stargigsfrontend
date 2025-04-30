import { useState, useEffect } from "react";
import { ChangeEvent } from "react";

import MagGlass from '../assets/icons/MagnifyingGlass.png';

const TableSearchbar = () => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div className="flex justify-between items-center p-2 border-2 border-primary rounded-xl">
      <input 
        type="text"
        placeholder="Search gig by name, location, or type"
        onChange={handleInputChange}
        value={input}
        className="font-light text-md text-text_secondary"
      />
      <img src={MagGlass} alt="magnifying glass icon" />
    </div>
  )
}

export default TableSearchbar
