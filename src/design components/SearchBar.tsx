import { useState } from 'react';

import MagGlass from '../assets/icons/MagnifyingGlass.png';
import MapPin1 from '../assets/icons/MapPin.png';
import Calendar from '../assets/icons/Calendar_today.png';
import MusicNote from '../assets/icons/Music_note.png';
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
          <div className='flex justify-between w-full bg-white rounded-3xl px-2
                  bg-gradient-to-r from-primary to-light_orange'>
            <div className='flex justify-between'>
              <button className='flex justify-start my-1 mr-2 ml-0 space-x-1 rounded-3xl bg-white pl-2 pr-12'>
                <img src={MapPin1} alt="map pin icon" />
                <div className='flex flex-col'>
                  <p className='text-sm'>WHERE</p>
                  <p className='text-[10px]'>Location</p>
                </div>
              </button>
              <button className='flex justify-start my-1 mr-2 ml-0 mx-0 space-x-1 rounded-3xl bg-white pl-2 pr-12'>
                {/* TODO: insert calender icon */}
                <img src={Calendar} alt="calendar icon" /> 
                <div className='flex flex-col'>
                  <p className='text-sm'>WHEN</p>
                  <p className='text-[10px]'>Select date</p>
                </div>
              </button>
              <button className='flex justify-start my-1 mx-0 space-x-1 rounded-3xl bg-white pl-2 pr-12'>
                {/* TODO: insert star icon? */}
                <img src={MusicNote} alt="music note icon" />
                <div className='flex flex-col'>
                  <p className='text-sm'>WHAT</p>
                  <p className='text-[10px]'>Talent</p>
                </div>
              </button>
              <img src={MagGlass} alt="magnifying glass icon" className='m-4'/>
            </div>
          </div>
          ) : (
            <button className='flex justify-between w-[280px] bg-white rounded-3xl py-2 px-5' type='button'>
              <p className='text-text_secondary'>Search local talent</p>
              <img src={MagGlass} alt="magnifying glass icon" />
            </button>
      )
        }
    </div>
  )
}

export default SearchBar
