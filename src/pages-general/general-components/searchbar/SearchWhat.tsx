import { useState, useEffect, useRef } from "react"
import { useFormContext, Controller } from "react-hook-form";

import music_note from '../../../assets/icons/Music_note.png';

const TalentsArr = ['Singers', 'Bands', 'DJs', 'Dancers', 'Aerielists', 'Comics', 
  'Clowns/Mimes', 'Jugglers/Stilts', 'Circus Acts', 'Photographers', 'Videographers']

const SearchWhat = () => {
  const [whatOptions, setWhatOptions] = useState(TalentsArr);
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  let whatRef = useRef<HTMLDivElement>(null);

  const { control } = useFormContext();

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
  }, []);

  

  return (
    <div ref={whatRef} className='w-full min-w-28 font-inter'>
      <Controller
        name="talent"
        control={control}
        defaultValue=''
        render={({ field }) => {
          const handleInputChange = (val: string) => {
            field.onChange(val);
            setWhatOptions(
              TalentsArr.filter((opt) => opt.toLowerCase().includes(val.toLowerCase())
              )
            );
            setIsWhatOpen(true);
          };

          return isWhatOpen ? (

        // the input in its dropdown state
        <div className='flex items-center space-x-2 rounded-3xl bg-white px-2 py-1'>
          <img src={music_note} alt="music note icon" />
          {/* dropdown */}
          <div className="relative">
            <input
              value={field.value}
              type="text"
              className='text-sm h-6 max-w-30 -mt-2'
              autoFocus
              onChange={(e) => handleInputChange(e.target.value)}
            />
            {/* dropdown with options */}
            <ul className='absolute top-8 overflow-auto rounded-lg border-1 border-black
                border-opacity-10 bg-white px-4'>
              {whatOptions.map((talent, index) => (
                <li
                  key={index}
                  onClick={() => {
                    field.onChange(talent);
                    setIsWhatOpen(false);
                  }}
                  className='text-sm hover:text-primary active:bg-[#FEEFE5] active:text-primary cursor-pointer'
                >
                  {talent}
                </li>
              ))}
              </ul>
            </div>
          </div>
      ) : field.value ? (
          // what the button looks like after a choice has been made
            <button
              className='flex justify-start items-center my-2 mx-0 space-x-2 rounded-3xl bg-white
                pl-2 cursor-pointer'
              onClick={() => setIsWhatOpen(true)}
            >
              <img src={music_note} alt="music note icon" />
              <div className='flex flex-col max-w-36'>
                <p>{field.value}</p>
              </div>
            </button>
          ) : (
            // what the button looks like before a choice has been made
            <button
              className='flex justify-start items-center my-2 mx-0 space-x-4 rounded-3xl bg-white
                pl-2 w-full cursor-pointer'
              onClick={() => setIsWhatOpen(true)}
            >
              <img src={music_note} alt="music note icon" />
              <div className='flex flex-col items-start'>
                <p className='text-sm'>WHAT</p>
                <p className='text-[10px]'>Talent</p>
              </div>
            </button>
          )
          }}
        />
    </div>
  )
}

export default SearchWhat;
