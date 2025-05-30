import { useState, useEffect, useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
import Calendar from '../assets/icons/calendar.png';
import "react-datepicker/dist/react-datepicker.css";

const SearchWhen = () => {
  const [date, setDate] = useState<Date | null>(null);
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

  interface CustomInputProps {
    children?: ReactNode;
    className: string;
  }

  type CalendarRef = HTMLInputElement;

  const CustomInput = forwardRef<CalendarRef, CustomInputProps>(
    (props, ref) => (
      <input ref={ref} className={props.className}>
        {props.children}
      </input>
    )
  )

  

  return (
    <div ref={whenRef} className="w-full">
      {isWhenOpen || date != null?
      (
        <DatePicker 
        selected={date} 
        onChange={(date) => setDate(date)} 
        placeholderText="Select date"
        showMonthDropdown
        showYearDropdown
        className="w-24"
        // customInput={<CustomInput className="w-30"/>}
        // ref={whenRef}
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

export default SearchWhen;
