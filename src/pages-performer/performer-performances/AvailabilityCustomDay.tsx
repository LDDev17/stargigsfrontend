// import { PickersDay } from "@mui/x-date-pickers/PickersDay";
// import { DateTime } from "luxon";

// setting styles for customDay
// const AvailabilityCustomDay = (
//   props: React.ComponentProps<typeof PickersDay>
// ) => {
//   const { day, outsideCurrentMonth, onDaySelect, selected, ...other } = props;

//   const today = DateTime.now();

//   const isBeforeToday = day < today.startOf('day');
//   const isToday = day.hasSame(today, 'day');
//   const isInCurrentMonth = !outsideCurrentMonth;

//   const isDisabled = isBeforeToday || !isInCurrentMonth;
// }

// export default AvailabilityCustomDay;