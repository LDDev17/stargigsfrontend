import { ChangeEvent, useState, useEffect, useRef } from "react"

import music_note from '../assets/icons/Music_note.png';

const TalentsArr = ['Singers', 'Bands', 'DJs', 'Dancers', 'Aerielists', 'Comics', 
  'Clowns/Mimes', 'Jugglers/Stilts', 'Circus Acts', 'Photographers', 'Videographers']

const SearchWhat = () => {
  const [whatInput, setWhatInput] = useState('');
  const [whatOptions, setWhatOptions] = useState(TalentsArr);
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  let whatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let clickHandler = (e: MouseEvent) => {
      if (!whatRef.current?.contains(e.target as Node)){
        setIsWhatOpen(false);
      }
    }

    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }
  })

  const filteredOptions = () => {
    let results = TalentsArr.filter(
      (option: string) => option.toLowerCase().includes(whatInput.toLowerCase())
    )
    setWhatOptions(results);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWhatInput(event?.target.value);
    setIsWhatOpen(true);
    filteredOptions();
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsWhatOpen(false);
    }, 100);
  }

  const handleWhatClick = (option: string) => {
    setWhatInput(option);
    setIsWhatOpen(false);
    handleBlur();
  }

  const handleWhatMenu = () => {
    setIsWhatOpen(true);
    setWhatInput('');
  }

  return (
    <div ref={whatRef} className='w-full'>
      {isWhatOpen? 
      (
      <div className='flex justify-start mx-0 space-x-1 rounded-3xl bg-white 
            pl-2 '>
        {/* dropdown */}
        <div className='absolute flex flex-col justify-start top-8 space-x-1 
          rounded-3xl bg-transparent max-h-96 max-w-36'>
          <input
          value={whatInput}
            type="text"
            name="what"
            id="inputWhat"
            className='text-sm h-6 max-w-28 '
            autoFocus={isWhatOpen}
            onChange={handleInputChange}
          />
          {/* dropdown with options */}
          <ul className='relative top-8 overflow-auto rounded-lg border-1 border-black
              border-opacity-10 bg-white px-2'>
            {whatOptions.map((talent, index) => (
              <li
                key={index}
                value={talent}
                onClick={() => handleWhatClick(talent)}
                className='text-sm hover:text-primary active:bg-[#FEEFE5] active:text-primary cursor-pointer'
              >
                {talent}
              </li>
            ))}
            </ul>
        </div>
      </div>
      ) : (
        <div>
          {!isWhatOpen && whatInput?
          (
            <button
              className='flex justify-start items-center my-2 mx-0 space-x-2 rounded-3xl bg-white
                pl-2 w-full cursor-pointer'
              onClick={handleWhatMenu}
            >
              <img src={music_note} alt="music note icon" />
              <div className='flex flex-col'>
                <p>{whatInput}</p>
              </div>
            </button>
          ) : (
            <button
              className='flex justify-start items-center my-2 mx-0 space-x-4 rounded-3xl bg-white
                pl-2 w-full cursor-pointer'
              onClick={handleWhatMenu}
            >
              <img src={music_note} alt="music note icon" />
              <div className='flex flex-col items-start'>
                <p className='text-sm'>WHAT</p>
                <p className='text-[10px]'>Talent</p>
              </div>
            </button>
          )
          }
        </div>
      )}
    </div>
  )
}

export default SearchWhat;
