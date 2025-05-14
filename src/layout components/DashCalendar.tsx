import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon"
import { DateTime } from "luxon";
import type {} from '@mui/x-date-pickers/themeAugmentation';

function DashCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <div className="bg-[#fbfbfb]">
        <DateCalendar readOnly defaultValue={DateTime.now()} />
      </div>
    </LocalizationProvider>
  )
}

export default DashCalendar
