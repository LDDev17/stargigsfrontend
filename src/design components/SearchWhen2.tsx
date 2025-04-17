import { useState, useEffect, useRef } from "react";
import Calendar from '../assets/icons/calendar.png';
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

const SearchWhen2 = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isWhenOpen, setIsWhenOpen] = useState(false);

  const handleWhenMenu = () => {
    setIsWhenOpen(true);
  };

  let whenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let whenClickHandler = (e: MouseEvent) => {
      if (!whenRef.current?.contains(e.target as Node)){
        setIsWhenOpen(false);
      }
    }

    document.addEventListener("mousedown", whenClickHandler)

    return() => {
      document.removeEventListener("mousedown", whenClickHandler)
    }
  })

  const defaultClassNames = getDefaultClassNames();
  
  // Today's date
  const today = new Date();

  

  return (
    <div ref={whenRef} className="w-full">
      {isWhenOpen || selectedDate != null?
      (
        <DayPicker 
          animate
          mode="single"
          selected={selectedDate} 
          onSelect={setSelectedDate} 
          showOutsideDays
          disabled={[
            { before: today },
            
          ]}
          classNames={{
            root: `${defaultClassNames.root} bg-white rounded-xl shadow-xs-[#000e33] relative top-40 w-9/10`,
            selected: 'text-white bg-primary shadow-(0 3px 2px 0 [#0047ff]) text-shadow-(0 1.5px 1px 0 [#001f70]) rounded-xl',
            day: `group w-1 h-1 bg-[#feefe5] text-[#1f1f1f] font-medium font-sans  shadow-(0 1px 1px 0 [#000e33]) 
              hover:text-primary rounded-xl ${defaultClassNames.day}`,
            today: `outline-2 outline-primary rounded-xl hover:bg-primary hover:text-white`,
            outside: `cursor-none text-[#001754] opacity-15`,
            disabled: `cursor-none text-[#001754] opacity-15`,
            months: `flex w-8`,
            month_grid: `w-8`,
            weeks: `w-8`
          }}
          />
      ) : (
        <button
        className='flex flex-col justify-around items-start my-2 mx-0 space-x-2 rounded-3xl bg-white 
        w-full h-full'
        onClick={handleWhenMenu}
        >
          <p>WHEN</p>
          <p className="text-[10px]">Select a date</p>
        </button>
      )
      
      }
    </div>
  )
}

export default SearchWhen2;
