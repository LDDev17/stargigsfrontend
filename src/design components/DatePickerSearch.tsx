import React, { useState, useRef, useEffect } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import CustomDay from './CustomDay';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { useFormContext, Controller, useWatch } from 'react-hook-form';

import Calendar from '../assets/svgs/calendar.svg?react';
import CustomCalendarHeader from './CustomCalendarHeader';

interface DatePickerProps {
  isWhenActive: boolean;
  setIsWhenActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const DatePickerSearch = ({ isWhenActive, setIsWhenActive }: DatePickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const { control } = useFormContext();

  // watch the "date" field's value
  const selectedDate = useWatch({ control, name: "date" });

  const handleCalendarIconClick = () => {
    setIsCalendarOpen(true);
  };

  const handleWhenActive = () => setIsWhenActive(true);

  const whenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isWhenActive) return;

      const whenClickHandler = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const clickedInsideWhen = whenRef.current?.contains(target);
        const clickedCalendarPopup = document.querySelector('[role="dialog"]')?.contains(target);
        if (!clickedInsideWhen && !clickedCalendarPopup){
          setIsWhenActive(false);
        }
      }
  
      document.addEventListener("mousedown", whenClickHandler)
  
      return() => {
        document.removeEventListener("mousedown", whenClickHandler)
      }
    }, [isWhenActive]);

  const altWhen = (
    <button
      className='flex justify-start items-center my-2 mx-0 space-x-4 pl-2 rounded-3xl bg-white 
      w-full h-full cursor-pointer'
      onClick={() => {
        handleWhenActive();
        setIsCalendarOpen(true);
      }}
    >
      <Calendar />
      <div className='flex flex-col items-start max-w-48'>
        <p>WHEN</p>
        <p className="text-[10px]">Select a date</p>
      </div>
    </button>
  );

  return (
    <div ref={whenRef} className='min-w-30 h-[40px] flex items-center'>
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale='en-GB'>
        {selectedDate || isWhenActive ? (
          <Controller
            name="date"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                label={!field.value ? "When" : undefined}
                value={field.value}
                open={isCalendarOpen}
                onOpen={() => setIsCalendarOpen(true)}
                onClose={() => setIsCalendarOpen(false)}
                onChange={(date) => field.onChange(date)}
                dayOfWeekFormatter={(date) => {
                  const dayString = date.toFormat('ccc');
                  return dayString.slice(0, 2);
                }}
                format='MM/dd/yyyy'
                showDaysOutsideCurrentMonth={true}
                slots={{
                  calendarHeader: CustomCalendarHeader,
                  openPickerIcon: () => null,
                  day: CustomDay
                }}
                sx={{
                  '& .MuiDayCalendar-weekDayLabel': {
                    width: 36,
                    fontSize: '0.75rem',
                  },
                }}
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, 8],
                        },
                      },
                    ],
                    sx: {
                      '& .MuiPaper-root': {
                        left: '25% !important',
                        transform: 'translateX(-25%) !important',
                      },
                    },
                  },
                  textField: {
                    variant: 'standard',
                    sx: {
                      marginTop: '6px',
                      backgroundColor: 'transparent',
                      '& .MuiInputBase-root': {
                        backgroundColor: 'transparent',
                      },
                      '& .MuiInputBase-input': {
                        backgroundColor: 'transparent',
                      },
                    },
                    InputProps: {
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton onClick={handleCalendarIconClick}>
                            <CalendarTodayIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }
                }}      
              />
            )}
          />
        ) : (
          altWhen
        )}
      </LocalizationProvider>
    </div>
  )
}

export default DatePickerSearch
