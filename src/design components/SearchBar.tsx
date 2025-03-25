import { useState } from 'react';

import MagGlass from '../assets/icons/MagnifyingGlass.png';
import MapPin1 from '../assets/icons/MapPin.png';
// isActive state for conditional rendering
// text will read "Search local talent" when isActive !== true
// text will conatin "where" "when" and "what" fields when isActive === true
// include magnifying glass at the end

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive ?
        (
          <div className='flex justify-between w-full bg-white rounded-3xl py-2 px-5'>
            <div className='flex justify-around'>
              <button className='flex justify-between '>
                <img src={MapPin1} alt="map pin icon" />
                <div className='flex flex-col'>
                  <p className='text-sm'>WHERE</p>
                  <p className='text-[10px]'>Location</p>
                </div>
              </button>
              <button className='flex justify-between '>
                {/* TODO: insert calender icon */}
                <img src={MapPin1} alt="map pin icon" /> 
                <div className='flex flex-col'>
                  <p className='text-sm'>WHEN</p>
                  <p className='text-[10px]'>Select date</p>
                </div>
              </button>
              <button className='flex justify-between '>
                {/* TODO: insert star icon? */}
                <img src={MapPin1} alt="map pin icon" />
                <div className='flex flex-col'>
                  <p className='text-sm'>WHAT</p>
                  <p className='text-[10px]'>Talent</p>
                </div>
              </button>
              <img src={MagGlass} alt="magnifying glass icon" />
            </div>
          </div>
          ) : (
            <div className='flex justify-between w-[280px] bg-white rounded-3xl py-2 px-5'>
              <p className='text-text_secondary'>Search local talent</p>
              <img src={MagGlass} alt="magnifying glass icon" />
            </div>
      )
        }
    </div>
  )
}

export default SearchBar
