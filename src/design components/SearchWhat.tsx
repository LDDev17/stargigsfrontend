import { ChangeEvent, useState } from "react"

import music_note from '../assets/icons/Music_note.png';

const TalentsArr = ['Singers', 'Bands', 'DJs', 'Dancers', 'Aerielists', 'Comics', 
  'Clowns/Mimes', 'Jugglers/Stilts', 'Circus Acts', 'Photographers', 'Videographers']

const SearchWhat = () => {
  const [whatInput, setWhatInput] = useState('Search Local Talent');
  const [whatOptions, setWhatOptions] = useState(TalentsArr);
  const [isWhatOpen, setIsWhatOpen] = useState(false);

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
    <div className='w-full'>
      {isWhatOpen? 
      (
      <div className='flex justify-start mx-0 space-x-1 rounded-3xl bg-white 
            pl-2 '>
        {/* dropdown */}
        <div className='absolute flex flex-col justify-start my-4 mx-0 space-x-1 
          rounded-3xl bg-transparent max-h-96 max-w-36'>
          <input
          value={whatInput}
            type="text"
            name="what"
            id="inputWhat"
            className='text-sm h-8 max-w-28 '
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
        <button 
          className='flex justify-start my-2 mx-0 space-x-2 rounded-3xl bg-white 
            pl-2 w-full'
          onClick={handleWhatMenu}
        >
          <img src={music_note} alt="music note icon" />
          <div className='flex flex-col'>
            <p className='text-sm'>WHAT</p>
            <p className='text-[10px]'>{whatInput}</p>
          </div>
        </button>
      )}
    </div>
  )
}

export default SearchWhat;
