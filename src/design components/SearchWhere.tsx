import { ChangeEvent, useState, useEffect, useRef } from 'react';
import states from 'states-us';

import stateType from '../types/stateType';

import map_pin from '../assets/icons/map_pin_dark.png';

// removing territories from the array
const onlyStates: stateType[] = states.filter((x) => x.territory === false)

const SearchWhere = () => {
  // state for the where searchbar
  const [whereInput, setWhereInput] = useState('');
  const [whereOptions, setWhereOptions] = useState(onlyStates);
  const [isWhereOpen, setIsWhereOpen] = useState(false);

  let whereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let clickHandler = (e: MouseEvent) => {
      if (!whereRef.current?.contains(e.target as Node)){
        setIsWhereOpen(false);
      }
    }

    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }
  })
  
  // populates dropdown results with options that match the state for the searchbar: whereInput
  const filteredOptions = () => {
    let results = onlyStates.filter(
      (option: stateType) => option.name.toLowerCase().includes(whereInput.toLowerCase())
    )
    setWhereOptions(results);
  };

  // updates state as the user types in the searchbar
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWhereInput(event?.target.value);
    setIsWhereOpen(true);
    filteredOptions();
  };

  // updates state and closes the dropdown when the user clicks an option from the results list
  const handleWhereClick = (option: string) => {
    setWhereInput(option);
    setIsWhereOpen(false);
    handleBlur();
  }

  // provides a timeout to let the user see they selected an option from the results list
  const handleBlur = () => {
    setTimeout(() => {
      setIsWhereOpen(false);
    }, 100);
  }

  const handleWhereMenu = () => {
    setIsWhereOpen(true);
    setWhereInput('');
  }

  // TODO: add {!isWhereOpen && whereInput != null}

  return (
    <div ref={whereRef} className='w-full'>
      {isWhereOpen? 
      (
      <div className='flex justify-start mx-0 space-x-1 rounded-3xl bg-white 
            pl-2 '>
        {/* dropdown */}
        <div className='absolute flex flex-col justify-start top-8 space-x-1 
          rounded-3xl bg-transparent max-h-96 max-w-36'>
          {/* <label 
            className='p-2'
            htmlFor='inputWhere'
          >
            WHERE
          </label> */}
          <input
          value={whereInput}
            type="text"
            name="where"
            id="inputWhere"
            // placeholder='Location'
            className='text-sm h-8 max-w-28 '
            autoFocus={isWhereOpen}
            onChange={handleInputChange}
          />
          {/* dropdown with options */}
          <ul className='relative top-8 overflow-auto rounded-lg border-1 border-black
              border-opacity-10 bg-white px-2'>
            {whereOptions.map((state, index) => (
              <li
                key={index}
                value={state.name}
                onClick={() => handleWhereClick(state.name)}
                className='text-sm hover:text-primary active:bg-[#FEEFE5] active:text-primary cursor-pointer'
              >
                {state.name}
              </li>
            ))}
            </ul>
        </div>
      </div>
      ) : (
        <div>
          {!isWhereOpen && whereInput?
            (
              <button
                className='flex justify-start my-2 mx-0 space-x-2 rounded-3xl bg-white
                  pl-2 w-full cursor-pointer'
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
                  pl-2 w-full cursor-pointer'
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
        
      )}
    </div>
  )
}

export default SearchWhere;
