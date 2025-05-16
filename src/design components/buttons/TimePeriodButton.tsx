import { useState } from 'react';

import Caret from '../../assets/svgs/caret.svg?react';

interface TimeSelectionProps {
  timePeriod: string;
  setTimePeriod: React.Dispatch<React.SetStateAction<string>>;
}

const timeOptions: string[] = [
  'This Month',
  'Past 60 Days',
  'Past 90 Days',
  'This Year',
  'Last Year',
]

const TimePeriodButton = ({ timePeriod, setTimePeriod }: TimeSelectionProps) => {
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(false);

  const handleTimeSelection = (value: string) => (e: React.MouseEvent<HTMLLIElement>) => {
    setTimePeriod(value);
    setButtonIsActive(false);
  };

  const handleTimeButton = () => {
    setButtonIsActive(!buttonIsActive)
  };

  return (
    <div className='relative w-24'>
      <button
            className={`flex w-full justify-between items-center whitespace-pre font-medium text-xs 
              cursor-pointer border border-[#969696]/75 p-2 ${
              buttonIsActive? 'rounded-t-lg border-b-0' : 'rounded-lg'
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
          {buttonIsActive &&
            <div 
              className='absolute w-24 bg-white border-b border-x rounded-b-lg 
                border-[#969696]/75 z-20'
            >
              <ul className=" mx-2 py-2 border-t-1 flex flex-col justify-evenly h-30">
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

export default TimePeriodButton
