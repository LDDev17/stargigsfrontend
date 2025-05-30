// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DateTime } from "luxon";
// import { useState } from "react";

// // Calendar on the performances page for choosing availability and unavailability
// const AvailabilityCalendar = () => {
//   const [availableDates, setAvailableDates] = useState<DateTime[]>([]);
//   const [unavailableDates, setUnavailableDates] = useState<DateTime[]>([]);
//   const [pickingState, setPickingState] = useState<'available' | 'unavailable'>('available');
  
//   // handler for available button
//   const handlePickingFree = () => {
//     setPickingState('available');
//   };

//   // handler for unavailable button
//   const handlePickingBusy = () => {
//     setPickingState('unavailable');
//   }

//   // handler for when users click on dates
//   const handleDateClick = (date: DateTime) => {
//     // is selected date in availableDates?
//     const isFree = availableDates.some(d => d.hasSame(date, 'day'));
//     // is selected date in unavailable dates?
//     const isBusy = unavailableDates.some(d => d.hasSame(date, 'day'));

//     // if choosing availability and the date in availableDates, remove that date
//     if (pickingState === 'available' && isFree) {
//       setAvailableDates(prev => prev.filter(d => !d.hasSame(date, 'day')));
//       // if choosing availability and the date is not in availableDates, add that date
//     } else if (pickingState === 'available' && !isFree && !isBusy) {
//       setAvailableDates(prev => [...prev, date]);
//       // if choosing unavailability and the date is is unavailableDates, remove that date
//     } else if (pickingState === 'unavailable' && isBusy) {
//       setUnavailableDates(prev => prev.filter(d => !d.hasSame(date, 'day')));
//       // if choosing unavailability and the date is not in unavailableDates, add that date
//     } else if (pickingState === 'unavailable' && !isFree && !isBusy) {
//       setUnavailableDates(prev => [...prev, date])
//     }
//   }

//   // TODO: disable click on selected dates that are part of opposite state of pickingState
  
  
//   return (
//     <div>
//       <DatePicker 
        
//       />
//     </div>
//   )
// }

// export default AvailabilityCalendar
