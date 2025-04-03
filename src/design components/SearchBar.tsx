import { useState, useEffect, useRef } from 'react';

import SearchWhere from './SearchWhere';
import SearchWhen from './SearchWhen';

import MagGlass from '../assets/icons/MagnifyingGlass.png';
import Calendar from '../assets/icons/Calendar_today.png';
import MusicNote from '../assets/icons/Music_note.png';
// isActive state for conditional rendering
// text will read "Search local talent" when isActive !== true
// text will conatin "where" "when" and "what" fields when isActive === true
// include magnifying glass at the end

const SearchBar = () => {
  // state for whether the search bar is collapsed or expanded
  const [isActive, setIsActive] = useState(false);
  const [whereActive, setWhereActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  }

  const handleSearchClick = () => {
    setWhereActive(true);
  }

  let searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let clickHandler = (e: MouseEvent) => {
      if (!searchRef.current?.contains(e.target as Node)){
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }

  });

  return (
    <div ref={searchRef} className='flex justify-end transition duration-300 ease-in-out w-full'>
      {isActive ?
        (
          <div className='flex justify-between bg-white rounded-3xl px-2
                  bg-gradient-to-r from-primary to-light_orange w-full'>
            <div className='flex justify-between w-full'>
              <div className='flex justify-start my-2 mr-2 ml-0 space-x-1 rounded-3xl bg-white pl-2 w-1/3'>
                
                <SearchWhere />
                
              </div>
              <div className='flex justify-start items-center my-2 mr-2 ml-0 space-x-2 rounded-3xl bg-white pl-2 w-1/3'>
                <img src={Calendar} alt="calendar icon" />
                <SearchWhen />
              </div>
              {/* <div className='flex justify-start my-2 mr-2 ml-0 space-x-1 rounded-3xl bg-white pl-2 pr-12'>
                <img src={Calendar} alt="calendar icon" /> 
                <div className='flex flex-col'>
                  <p className='text-sm'>WHEN</p>
                  <p className='text-[10px]'>Select date</p>
                </div>
              </div> */}
              <div className='flex justify-start my-2 mx-0 space-x-1 rounded-3xl bg-white pl-2 w-1/3'>
                <img src={MusicNote} alt="music note icon" />
                <div className='flex flex-col'>
                  <p className='text-sm'>WHAT</p>
                  <p className='text-[10px]'>Talent</p>
                </div>
              </div>
              
              <button type='submit'>
                <img src={MagGlass} alt="magnifying glass icon" className='m-4'/>
              </button>
            </div>
          </div>
          ) : (
            <button className='flex justify-between w-[280px] bg-white rounded-3xl py-2 px-5' type='button' onClick={handleClick}>
              <p className='text-text_secondary'>Search local talent</p>
              <img src={MagGlass} alt="magnifying glass icon" />
            </button>
      )
        }
    </div>
  )
}

export default SearchBar
