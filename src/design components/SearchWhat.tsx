import { ChangeEvent, useState, useEffect, useRef } from "react"
import { useFormContext, Controller } from "react-hook-form";

import music_note from '../assets/icons/Music_note.png';

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
    <div ref={whatRef} className='w-full min-w-28'>
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

      

        // <div className='flex justify-start items-center mx-0 space-x-1 rounded-3xl bg-white 
        //       pl-2 '>
        //   {/* dropdown */}
        //   <div className='absolute flex flex-col justify-center items-start top-8 space-x-1 
        //     rounded-3xl bg-transparent max-h-96 max-w-36'>
          <div className="relative">
            <input
              value={field.value}
              type="text"
              className='text-sm h-6 max-w-28 -mt-2'
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
      ) : field.value ? (
            <button
              className='flex justify-start items-center my-2 mx-0 space-x-2 rounded-3xl bg-white
                pl-2 cursor-pointer'
              onClick={() => setIsWhatOpen(true)}
            >
              <img src={music_note} alt="music note icon" />
              <div className='flex flex-col'>
                <p>{field.value}</p>
              </div>
            </button>
          ) : (
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
