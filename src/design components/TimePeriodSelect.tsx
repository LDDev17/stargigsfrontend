
const timeOptions: Record<string, string> = {
  month: 'This Month',
  sixty: 'Past 60 Days',
  ninety: 'Past 90 Days',
  thisYear: 'This Year',
  lastYear: 'Last Year',
};

const TimePeriodSelect = () => {
  return (
    <select 
      name='selectedTimePeriod' 
      className="font-inter border rounded-lg border-[#969696]/75"
    >
      {Object.entries(timeOptions).map(([key, option]) => (
        <option value={key}>{option}</option>
      ))}
    </select>
  )
}

export default TimePeriodSelect
