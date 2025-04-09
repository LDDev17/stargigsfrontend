import { useState, useEffect, useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
import Calendar from '../assets/icons/calendar.png';
import "react-datepicker/dist/react-datepicker.css";

const SearchWhen = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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

  const renderDate = (date: Date) => {
    const isSelected = date.toDateString() === selectedDate?.toDateString();
    const isInCurrentMonth = date.getMonth() === new Date().getMonth();

    return (
      <div
        className={`
          ${isSelected? 'bg-primary text-white' : ''}
          ${isInCurrentMonth ? 'bg-[#FEEFE5]' : 'bg-[#001754] opacity-15'}
        `}
      >
        {date.getDate()}
      </div>
    )
  }

  return (
    <div ref={whenRef} className="w-full">
      {isWhenOpen || selectedDate != null?
      (
        <DatePicker 
          selected={selectedDate} 
          onChange={setSelectedDate} 
          placeholderText="Select date"
          showMonthDropdown
          showYearDropdown
          renderDate={renderDate}
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
