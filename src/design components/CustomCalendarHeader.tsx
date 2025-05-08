import { MouseEvent, useEffect } from "react";
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

  const months = Info.months("long", { locale: "en-GB" });

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleMonthChange = (event: SelectChangeEvent<number>) => {
    const newMonth = parseInt(event.target.value as string, 10);
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

  useEffect(() => {

  })
  return (
    <Box display='flex' alignItems='center' justifyContent='space-around' mb={1}>
      <IconButton
        onClick={handlePrevMonth}
        disabled={isPrevDisabled || disablePast}
        aria-label="Previous month"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* <Select
        value={currentMonth.month}
        onChange={handleMonthChange}
        size="small"
        variant="standard"
        disableUnderline
      >
        {months.map((monthName, index) => (
          <MenuItem key={monthName} value={index + 1}>
            {monthName}
          </MenuItem>
        ))}
      </Select> */}

<Select  
      value={currentMonth.month}  
      onChange={handleMonthChange}  
      size="small"  
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
              handleMonthChange({ target: { value: String(index + 1) }} as SelectChangeEvent<number>);
            }}
          >
            {monthName}
            
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