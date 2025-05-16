import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon"
import { DateTime } from "luxon";
import type {} from '@mui/x-date-pickers/themeAugmentation';

// TODO: change colors
// TODO: change header layout

interface DashCalendarProps {
  calendarDate: DateTime<boolean> | null | undefined;
};

function DashCalendar({ calendarDate }: DashCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <div className="bg-[#fbfbfb]">
        <DateCalendar 
          readOnly 
          value={calendarDate}
        />
      </div>
    </LocalizationProvider>
  )
}

export default DashCalendar
