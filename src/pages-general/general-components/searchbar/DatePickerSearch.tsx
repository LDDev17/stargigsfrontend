import React, { useState, useEffect } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import CustomDay from './CustomDay';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { useFormContext, Controller, useWatch } from 'react-hook-form';

import Calendar from '../../../assets/svgs/calendar.svg?react';
import CustomCalendarHeader from './CustomCalendarHeader';
import { DateTime } from 'luxon';

interface DatePickerProps {
  isWhenActive: boolean;
  setIsWhenActive: React.Dispatch<React.SetStateAction<boolean>>;
  whenRef: React.RefObject<HTMLDivElement | null>;
}

const DatePickerSearch = ({ isWhenActive, setIsWhenActive, whenRef }: DatePickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);
  const { control } = useFormContext();



  // watches the "date" field's value; used to handle change to field.value
  const watchDate = useWatch({ control, name: "date" });

  // flips the state of the calendar dropdown being open
  const handleCalendarDropdown = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleWhenActive = () => {
    setIsWhenActive(true);
    setIsCalendarOpen(true);
  };

  const formatSelectedDate = (date: DateTime | null) => {
    if (!date) return '';
    return date.toLocaleString({ month: 'numeric', day: 'numeric', year: 'numeric' });
  };

  // Close the calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Check if click was outside whenRef but not in a MUI dialog
      if (
        whenRef.current &&
        !whenRef.current.contains(e.target as Node) &&
        !isInMuiComponent(e.target as Element)
      ) {
        setIsCalendarOpen(false)
        // Only deactivate the component if the user clicks outside the search bar entirely
      }
    }

    // Helper function to detect if click happened inside MUI components
    const isInMuiComponent = (element: Element | null): boolean => {
      if (!element) return false;
      return (
        !!element.closest('.MuiPaper-root') ||
        !!element.closest('.MuiPopover-root') ||
        !!element.closest('.MuiMenu-paper') ||
        !!element.closest('.MuiSelect-select') ||
        !!element.closest('[role="dialog"]') ||
        !!element.closest('[id^="mui-"]')
      );
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [whenRef]);


  return (
    <div id='calendar-header-container' ref={whenRef} className='min-w-40 h-[40px] flex items-center'>
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale='en-US'>
        {watchDate || isWhenActive ? (
          // state when calendar dropdown is open to choose a date
          <Controller
            name="date"
            control={control}
            defaultValue={selectedDate}
            render={({ field }) => (
              <DatePicker
                label={!field.value ? "When" : undefined}
                value={field.value}
                open={isCalendarOpen}
                onOpen={() => setIsCalendarOpen(true)}
                onClose={() => setIsCalendarOpen(false)}
                onChange={(newDate) => {
                  field.onChange(newDate)
                  setSelectedDate(newDate);
                  setIsCalendarOpen(false);
                }}
                dayOfWeekFormatter={(date) => {
                  const dayString = date.toFormat('ccc');
                  return dayString.slice(0, 2);
                }}
                format='MM/dd/yyyy'
                showDaysOutsideCurrentMonth={true}
                slots={{
                  calendarHeader: CustomCalendarHeader,
                  layout: (props) => (
                    <div id="calendar-header-container">
                      {props.children}
                    </div>
                  ),
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
                    container: document.getElementById('calendar-header-container'),
                    onClick: (e) => e.stopPropagation(),
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, 8],
                        },
                      },
                    ],
                    sx: {
                      zindex: 1400,
                      '& .MuiPaper-root': {
                        left: '25% !important',
                        transform: 'translateX(-25%) !important',
                      },
                    },
                  },
                  dialog: {
                    onMouseDown: (e) => e.stopPropagation()
                  },
                  textField: {
                    label: '',
                    variant: 'standard',
                    sx: {
                      marginTop: '6px',
                      backgroundColor: 'transparent',
                      minWidth: '180px',
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
                          <IconButton onClick={handleCalendarDropdown}>
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
        ) : selectedDate ? (
          // state when date has been selected
          <button
            className='flex justify-start items-center my-2 mx-0 space-x-4 pl-2 rounded-3xl bg-white 
            w-full h-full cursor-pointer'
            onClick={() => {
              handleWhenActive();
            }}
          >
            <Calendar />
            <div className='flex flex-col items-start max-w-48'>
              <p>{formatSelectedDate(selectedDate)}</p>
            </div>
          </button>
        ) : (
          // initial state before date has been selected
          <button
            className='flex justify-start items-center my-2 mx-0 space-x-4 pl-2 rounded-3xl bg-white 
            w-full h-full cursor-pointer'
            onClick={() => {
              handleWhenActive();
            }}
          >
            <Calendar />
            <div className='flex flex-col items-start max-w-48'>
              <p>WHEN</p>
              <p className="text-[10px]">Select a date</p>
            </div>
          </button>
        )}
      </LocalizationProvider>
    </div>
  )
}

export default DatePickerSearch
