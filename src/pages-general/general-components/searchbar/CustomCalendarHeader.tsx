import { MouseEvent } from "react";
import { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import { IconButton, Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DateTime, Info } from "luxon";

const CustomCalendarHeader = (props: PickersCalendarHeaderProps) => {
  const {
    currentMonth,
    onMonthChange,
    minDate,
    disablePast,
  } = props;

  const month = currentMonth as DateTime;

  const months = Info.months("long");

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  // Handlers for changing months
  const handleMonthChange = (event: SelectChangeEvent<number>) => {
    const newMonth = event.target.value as number;
    const updatedDate = currentMonth.set({ month: newMonth });
    console.log('inside month function')
    console.log(onMonthChange(updatedDate))
    onMonthChange(updatedDate);
  }

  const handlePrevMonth = () => {
    onMonthChange(month.minus({ months: 1 }));
  };

  const handleNextMonth = () => {
    onMonthChange(month.plus({ months: 1 }));
  };

  const isPrevDisabled = minDate && month.startOf('month') <= (minDate as DateTime).startOf('month');

  // Handlers for changing years
  const handleYearChange = (event: SelectChangeEvent<number>) => {
    const newYear = event.target.value as number;
    const updatedDate = currentMonth.set({ year: newYear });
    onMonthChange(updatedDate);
  };

  // Generate array of years
  const years = Array.from({ length: 5 }, (_, i) => (
    currentMonth.year + i
  ));

  return (
    <Box display='flex' alignItems='center' justifyContent='space-around' mb={1}>
      <IconButton
        onClick={handlePrevMonth}
        disabled={isPrevDisabled || disablePast}
        aria-label="Previous month"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <Select  
        value={currentMonth.month}  
        onChange={handleMonthChange}  
        // size="small"  
        variant="standard"  
        disableUnderline  
        
        MenuProps={{  
          // High z-index to ensure it's above other elements  
          sx: { zIndex: 9999 },  
          // These handlers prevent the calendar from closing  
          onMouseDown: stopPropagation,  
          onClick: stopPropagation,  
          // Prevent any automatic focusing that might interfere  
          disableAutoFocusItem: true,  
          // Keep it within the DatePicker modal  
          container: document.getElementById('calendar-header-container'),  
          // Ensure the menu is positioned correctly  
          anchorOrigin: {  
            vertical: 'bottom',  
            horizontal: 'left',  
          }  
        }}  
        // Make sure all events are contained within the Select  
        onMouseDown={stopPropagation}  
        onClick={stopPropagation}  
      >  
        {months.map((monthName, index) => (
          <MenuItem key={monthName} value={index + 1}
            onClick={(e) => {
              stopPropagation(e);
              const updatedDate = currentMonth.set({ month: index + 1 });
              onMonthChange(updatedDate);
            }}
          >
            {monthName}
            
          </MenuItem>
        ))}
      </Select>

      {/* Select Year Dropdown */}
      <Select
        value={currentMonth.year}
        onChange={handleYearChange}
        variant="standard"
        disableUnderline
        MenuProps={{
          sx: { zIndex: 9999 },
          onMouseDown: stopPropagation,
          onClick: stopPropagation,
          disableAutoFocusItem: true,
          container: document.getElementById('calendar-header-container'),
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          }
        }}
        onMouseDown={stopPropagation}
        onClick={stopPropagation}
      >
        {years.map((year) => (
          <MenuItem
            key={year}
            value={year}
            onClick={(e) => {
              stopPropagation(e);
              onMonthChange(currentMonth.set({ year }));
            }}
          >
            {year}
          </MenuItem>
        ))}
      </Select>

      <IconButton onClick={handleNextMonth}>
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  )
}

export default CustomCalendarHeader;