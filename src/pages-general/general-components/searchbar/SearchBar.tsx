import { useState, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import SearchWhereShort from './SearchWhereShort';
import SearchWhat from './SearchWhat';
import DatePickerSearch from './DatePickerSearch';

import MagGlass from '../../../assets/icons/MagnifyingGlass.png';

const SearchBar = () => {
  // state for whether the search bar is collapsed or expanded
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isWhereActive, setIsWhereActive] = useState(false);
  const [isWhenActive, setIsWhenActive] = useState<boolean>(false);
  const [whereInput, setWhereInput] = useState<string>('');

  const handleClick = () => {
    console.log('SEARCHBAR CLICKED: EXPANDING')
    setIsSearchActive(true);
  };

  const methods = useForm();

  const SearchBarSubmit = (data: any) => {
    console.log(data)
  }

  const preventSearchCloseRef = useRef(false);

  let searchRef = useRef<HTMLDivElement>(null);
  const whenRef = useRef<HTMLDivElement>(null);
  const whereRef = useRef<HTMLDivElement>(null);

  function isInMuiPopup(element: Element | null): boolean {
    if (!element) return false;
    return (
      !!element.closest('.MuiPaper-root') ||
      !!element.closest('.MuiPopover-root') ||
      !!element.closest('.MuiMenu-paper') ||
      !!element.closest('.MuiSelect-select') ||
      !!element.closest('[role="dialog"]') ||
      !!element.closest('[id^="mui-"]')
    );
  }

  useEffect(() => {
    console.log('Attaching click listener')

    const handleClickOutside = (e: MouseEvent) => {
      // Skip this handler if we just selected an item
      if (preventSearchCloseRef.current) {
        preventSearchCloseRef.current = false;
        return;
      }

      requestAnimationFrame(() => {
        const target = document.elementFromPoint(e.clientX, e.clientY);

        const insideSearch = searchRef.current?.contains(target as Node);
        const insideWhen = whenRef.current?.contains(target as Node);
        const insideWhere = whereRef.current?.contains(target as Node);

        const inMuiPopup = isInMuiPopup(target);

        // only close the entire search if clicking outside all components
        if (!insideSearch && !insideWhen && !inMuiPopup && !insideWhere) {
          setIsSearchActive(false);
          setIsWhenActive(false);
          setIsWhereActive(false);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside, { capture: true });

    return () => {
      console.log("Removing click listener");
      document.removeEventListener("mousedown", handleClickOutside, { capture: true });
    }
  }, [])

  return (
    <div
      ref={searchRef} className='flex justify-end h-[50px] transition duration-300 ease-in-out'
      onClick={(e) => {
        // Prevent any click events from bubbling up to document
        e.stopPropagation();
        preventSearchCloseRef.current = true;
      }}
    >
      {isSearchActive ?
        (
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(SearchBarSubmit)}
              onClick={(e) => {
                e.stopPropagation();
                preventSearchCloseRef.current = true;
              }}
            >
              <div className='flex justify-between bg-white rounded-3xl px-2
                      bg-gradient-to-r from-primary to-light_orange w-full '>
                <div className='flex justify-between w-full h-[50px]'>
                  <div
                    className='flex justify-start items-center my-1 mr-2 ml-0 space-x-1 rounded-3xl bg-white pl-2 min-w-0'
                    onClick={(e) => {
                      e.stopPropagation();
                      preventSearchCloseRef.current = true;
                    }}
                  >

                    <SearchWhereShort
                      whereInput={whereInput}
                      setWhereInput={setWhereInput}
                      whereRef={whereRef}
                      isWhereActive={isWhereActive}
                      setIsWhereActive={setIsWhereActive}
                    />

                  </div>
                  <div className='flex justify-start items-center my-1 mr-2 ml-0 space-x-2 rounded-3xl bg-white pl-2 pr-2 min-w-32 max-w-48'>
                    <DatePickerSearch
                      isWhenActive={isWhenActive}
                      setIsWhenActive={setIsWhenActive}
                      whenRef={whenRef}
                    />
                  </div>
                  <div className='flex justify-start items-center my-1 ml-0 rounded-3xl bg-white pl-2 pr-4 min-w-18'>
                    <SearchWhat />
                  </div>

                  <button
                    type='submit'
                    className='cursor-pointer'
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <img src={MagGlass} alt="magnifying glass icon" className='m-4' />
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        ) : (
          <button
            className='flex justify-between items-center w-[280px] bg-white rounded-3xl border-2 border-primary py-2 px-5 cursor-pointer'
            type='button'
            onClick={handleClick}
          >
            <p className='text-text_secondary'>Search local talent</p>
            <img src={MagGlass} alt="magnifying glass icon" />
          </button>
        )
      }
    </div>
  )
}

export default SearchBar
