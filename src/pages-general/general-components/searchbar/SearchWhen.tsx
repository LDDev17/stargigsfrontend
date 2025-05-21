import { useState, useEffect, useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
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
  }, [MouseEvent]);

  interface CustomInputProps {
    value?: string;
    className: string;
    onClick?(): void;
  }

  type CalendarRef = HTMLInputElement;

  const CustomInput = forwardRef<CalendarRef, CustomInputProps>(
    ({ className, value, onClick }, ref) => (
      <input 
        ref={ref} 
        className={className}
        value={value}
        onClick={onClick}
        readOnly
      />
    )
  )

  const renderDayContents = (day: number, date: Date) => {
    const isSelected = date.toDateString() === selectedDate?.toDateString();
    const isInCurrentMonth = date.getMonth() === new Date().getMonth();

    return (
      <div
        className={`
          ${isSelected? 'bg-primary text-white w-2' : ''}
          ${isInCurrentMonth ? 'bg-[#FEEFE5]' : 'bg-[#001754] opacity-15'}
        `}
      >
        {day}
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
          renderDayContents={renderDayContents}
          customInput={
            <CustomInput
              className="flex flex-col justify-around items-start my-2 mx-0 space-x-2 rounded-3xl bg-white w-full h-full" 
            />
          }
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
