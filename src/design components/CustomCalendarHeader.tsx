import { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import { IconButton, Typography, Box, Icon } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DateTime } from "luxon";

const CustomCalendarHeader = (props: PickersCalendarHeaderProps) => {
  const {
    currentMonth,
    onMonthChange,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
  } = props;

  const month = currentMonth as DateTime;

  const handlePrevMonth = () => {
    onMonthChange(month.minus({ months: 1 }));
  };

  const handleNextMonth = () => {
    onMonthChange(month.plus({ months: 1 }));
  };

  const isPrevDisabled = minDate && month.startOf('month') <= (minDate as DateTime).startOf('month');

  return (
    <Box display='flex' alignItems='center' justifyContent='space-around' mb={1}>
      <IconButton 
        onClick={handlePrevMonth} 
        disabled={isPrevDisabled || disablePast}
        aria-label="Previous month"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <Typography variant="subtitle1" sx={{ mx: 2 }}>
        {month.toFormat('MMMM yyyy')}
      </Typography>

      <IconButton onClick={handleNextMonth}>
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  )
}

export default CustomCalendarHeader;