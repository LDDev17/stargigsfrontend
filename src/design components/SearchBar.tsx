import { useState, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import SearchWhere from './SearchWhere';
import SearchWhat from './SearchWhat';
import DatePickerSearch from './DatePickerSearch';

import MagGlass from '../assets/icons/MagnifyingGlass.png';

const SearchBar = () => {
  // state for whether the search bar is collapsed or expanded
  const [isActive, setIsActive] = useState(false);
  const [isWhenActive, setIsWhenActive] = useState<boolean>(false);
  const [whereInput, setWhereInput] = useState<string>('');

  const handleClick = () => {
    setIsActive(true);
  }
  
  const methods = useForm();

  const SearchBarSubmit = (data: any) => {
    console.log(data)
  }

  let searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickedInsideSearch = searchRef.current?.contains(target);
      const clickedCalendarPopup = document.querySelector('[role="dialog"]')?.contains(target);
      
      if (!clickedInsideSearch && !clickedCalendarPopup){
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    }
  }, [isActive]);

  return (
    <div ref={searchRef} className='flex justify-end h-[50px] transition duration-300 ease-in-out'>
      {isActive ?
        (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(SearchBarSubmit)}>
              <div className='flex justify-between bg-white rounded-3xl px-2
                      bg-gradient-to-r from-primary to-light_orange w-full '>
                <div className='flex justify-between w-full h-[50px]'>
                  <div className='flex justify-start items-center my-1 mr-2 ml-0 space-x-1 rounded-3xl bg-white pl-2 min-w-0'>
              
                    <SearchWhere
                      whereInput={whereInput}
                      setWhereInput={setWhereInput}
                    />
              
                  </div>
                  <div className='flex justify-start items-center my-1 mr-2 ml-0 space-x-2 rounded-3xl bg-white pl-2 pr-2 min-w-32 max-w-44'>
                    <DatePickerSearch isWhenActive={isWhenActive} setIsWhenActive={setIsWhenActive}/>
                  </div>
                  <div className='flex justify-start items-center my-1 ml-0 rounded-3xl bg-white pl-2 pr-4 min-w-18'>
                    <SearchWhat />
                  </div>
              
                  <button type='submit' className='cursor-pointer'>
                    <img src={MagGlass} alt="magnifying glass icon" className='m-4'/>
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
          ) : (
            <button className='flex justify-between items-center w-[280px] bg-white rounded-3xl border-2 border-primary py-2 px-5 cursor-pointer' type='button' onClick={handleClick}>
              <p className='text-text_secondary'>Search local talent</p>
              <img src={MagGlass} alt="magnifying glass icon" />
            </button>
      )
        }
    </div>
  )
}

export default SearchBar
