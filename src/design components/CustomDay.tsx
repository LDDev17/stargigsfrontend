import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateTime } from "luxon";

const CustomDay = (
  props: React.ComponentProps<typeof PickersDay> & { highlighted?: boolean }
) => {
  const { day, outsideCurrentMonth, onDaySelect, selected, ...other } = props;

  const today = DateTime.now();

  const isBeforeToday = day < today.startOf('day');
  const isToday = day.hasSame(today, 'day');
  const isInCurrentMonth = !outsideCurrentMonth;

  const isDisabled = isBeforeToday || !isInCurrentMonth;

  return (
    <PickersDay 
      {...other}
      day={day}
      outsideCurrentMonth={outsideCurrentMonth}
      onDaySelect={onDaySelect}
      selected={selected}
      disabled={isDisabled}
      sx={{
        backgroundColor: '#feefe5',
        fontFamily: 'inter',
        borderRadius: '6px',
        '&:hover': {
          color: '#f45e00',
          backgroundColor: '#feefe5',
        },
        ...(isDisabled && {
          backgroundColor: 'white',
          color: '#001754',
          opacity: '15',
        }),
        ...(isToday && {
          backgroundColor: '#f45e00 !important',
          color: 'white !important',
          border: 'none !important',
          '&:hover': {
            color: 'black !important',
            backgroundColor: 'white !important',
            border: '1px solid #f45e00 !important',
          }
        }),
        ...(selected && {
          backgroundColor: '#f45e00 !important',
          color: 'white',
          textShadow: '0px 1px 0px #0038d4',
          boxShadow: '0px 3px 2px #0047ff'
        })
      }}
    />

  )
}

export default CustomDay
