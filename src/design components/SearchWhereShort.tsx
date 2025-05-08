import { useState, useEffect, useRef, ChangeEvent } from "react";
import { useFormContext, Controller } from "react-hook-form";

import map_pin from '../assets/icons/map_pin_dark.png';

interface WhereProps {
  whereInput: string;
  setWhereInput: React.Dispatch<React.SetStateAction<string>>;
  whereRef: React.RefObject<HTMLDivElement | null>;
  isWhereActive: boolean;
  setIsWhereActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const cityArray: string[] = [
  'Atlanta, GA',
  'Las Vegas, NV',
  'Los Angeles, CA',
  'Miami, FL',
  'New York, NY',
];

const SearchWhereShort = ({ whereInput, setWhereInput, whereRef, isWhereActive, setIsWhereActive }: WhereProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [whereOptions, setWhereOptions] = useState<string[]>(cityArray);

  const { control } = useFormContext();

  useEffect(() => {
    let clickHandler = (e: MouseEvent) => {
      if (!whereRef.current?.contains(e.target as Node)){
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }
  }, [whereRef]);

  const filteredOptions = (city: string) => {
    if (cityArray.includes(city)) {
      const cityIndex: number = cityArray.indexOf(city);
      const newArray: string[] = [...cityArray]
      newArray.splice(cityIndex, 1)
      setWhereOptions(newArray);
    }
  }

  const handleWhereMenu = () => {
    setIsWhereActive(true);
    setIsDropdownOpen(true);
    // setWhereInput('');
  }

  return (
    <div ref={whereRef} className='w-full min-w-[140px] font-inter'>
      {isWhereActive ? (
      <Controller
        name="location"
        control={control}
        defaultValue={whereInput}
        render={({ field }) => (
        <div className='flex items-center space-x-2 rounded-3xl bg-white px-2 py-1'>
          <img src={map_pin} alt="location pin icon from a map" />
          {/* dropdown */}
          <div className='relative'>
            <input
              value={field.value}
              type="text"
              name="where"
              id="inputWhere"
              // placeholder='Location'
              className='text-sm h-8 max-w-24 '
              // autoFocus
              onChange={(e) => {
                field.onChange(e.target.value);
                setWhereInput(e.target.value);
                setIsDropdownOpen(true);
              }}
              onClick={() => setIsDropdownOpen(true)}
            />
            {/* dropdown with options */}
            {isDropdownOpen && (
            <ul className='absolute top-8 overflow-auto rounded-lg border-1 border-black
                border-opacity-10 bg-white px-2 max-w-28'>
              {whereOptions.map((city, index) => (
                <li
                  key={index}
                  value={city}
                  onClick={() => {
                    field.onChange(city);
                    setWhereInput(city);
                    setIsDropdownOpen(false);
                    filteredOptions(city);
                  }}
                  className='text-sm hover:text-primary active:bg-[#FEEFE5] active:text-primary cursor-pointer'
                >
                  {city}
                </li>
              ))}
              </ul>
            )}
          </div>
        </div>
        )}
      />
      ) : whereInput ? (
        <button
          className='flex justify-start items-center my-2 mx-0 space-x-2 rounded-3xl bg-white
            pl-2 pr-8 w-full cursor-pointer'
          onClick={handleWhereMenu}
        >
          <img src={map_pin} alt="map pin icon" />
          <div className='flex flex-col'>
            <p>{whereInput}</p>
          </div>
        </button>
      ) : (
        <button
          className='flex justify-start items-center my-2 mx-0 space-x-4 rounded-3xl bg-white
            pl-2 pr-12 w-full cursor-pointer'
          onClick={handleWhereMenu}
        >
          <img src={map_pin} alt="map pin icon" />
          <div className='flex flex-col items-start'>
            <p className='text-sm'>WHERE</p>
            <p className='text-[10px]'>Location</p>
          </div>
        </button>
      )
    }
  </div>      
  )
}

export default SearchWhereShort;
