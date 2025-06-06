import { useState, useEffect } from 'react';

import Caret from '../../assets/svgs/caret.svg?react';

interface TimeSelectionProps {
  timePeriod: string;
  setTimePeriod: React.Dispatch<React.SetStateAction<string>>;
  dropDownRef: React.RefObject<HTMLDivElement | null>;
}

const timeOptions: string[] = [
  'This Month',
  'Past 60 Days',
  'Past 90 Days',
  'This Year',
  'Last Year',
]

const TimePeriodButtonUp = ({ timePeriod, setTimePeriod, dropDownRef }: TimeSelectionProps) => {
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(false);

  const handleTimeSelection = (value: string) => () => {
    setTimePeriod(value);
    setButtonIsActive(false);
  };

  const handleTimeButton = () => {
    setButtonIsActive(!buttonIsActive)
  };

  useEffect(() => {
    let clickHandler = (e: MouseEvent) => {
      if (dropDownRef && dropDownRef.current) {
        if (!dropDownRef.current?.contains(e.target as Node)) {
          setButtonIsActive(false);
        }
      }
    }

    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }
  });

  return (
    <div 
      className='relative w-24'
      ref={dropDownRef}
    >
      <button
            className={`flex w-full justify-between items-center whitespace-pre font-medium text-xs 
              cursor-pointer border border-[#969696]/75 p-2 ${
              buttonIsActive? 'rounded-b-lg border-t-0' : 'rounded-lg'
              }
            `}
            onClick={handleTimeButton}
          >
            {timePeriod} 
            <Caret 
              className={`transition-transform duration-300 ease-in-out ${
                buttonIsActive ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {buttonIsActive &&
            <div 
              className='absolute w-24 bg-white border-t border-x rounded-t-lg 
                border-[#969696]/75 z-20 -translate-y-38'
            >
              <ul className=" mx-2 py-2 border-b-1 flex flex-col justify-evenly h-30">
                {timeOptions.map((value, index) => (
                  <li
                    key={index}
                    onClick={handleTimeSelection(value)}
                    className="cursor-pointer text-xs hover:text-primary"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>}
    </div>
  )
}

export default TimePeriodButtonUp
