import { ChangeEvent, MouseEventHandler, useState } from "react";

import TableRow from "../design components/TableRow";
import GigsTableType from "../types/GigsTableType";

import Caret from '../assets/svgs/caret.svg?react';
import Sort from '../assets/svgs/sort.svg?react'

const sampleTableData: GigsTableType[] = [
  {
    EventName: 'Sunset Music Festival',
    Location: 'Miami Beach, FL',
    DateTime: 'Apr 15, 2025, 8:30 pm',
    GigType: 'SOLO',
    Status: 'Confirmed'
  },
  {
    EventName: 'Private Wedding Reception',
    Location: 'The Grand Ballroom',
    DateTime: 'Apr 17, 2025, 8:00 pm',
    GigType: 'BAND',
    Status: 'Pending'
  },
  {
    EventName: 'Corporate Gala Night',
    Location: 'Chicago',
    DateTime: 'Apr 19, 2025, 6:30 pm',
    GigType: 'SOLO',
    Status: 'Confirmed'
  },
  {
    EventName: 'Sunset Music Festival 2',
    Location: 'Miami Beach FL',
    DateTime: 'Apr 20, 2025, 7:00 pm',
    GigType: 'BAND',
    Status: 'Confirmed'
  }
];

const timePeriodOptions = [
  'This Month',
  'Next Month', 
  'Next 3 Months'
]

const PerformerDashUpcomingTable = () => {
  const [tableData, setTableData] = useState<GigsTableType[]>(sampleTableData);
  const [timePeriod, setTimePeriod] = useState<string>('This Month');
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(false);

  const handleTimeSelection = (value: string) => (e: React.MouseEvent<HTMLLIElement>) => {
    setTimePeriod(value)
  }

  return (
    <div className="flex flex-col justify-around">
      <header className="flex justify-between">
        <p className="text-sm font-semibold">Upcoming Gigs</p>
        <button className="flex items-center whitespace-pre font-semibold text-xs"
        >
          {timePeriod}  <Caret />
        </button>
        {buttonIsActive && 
          <ul>
            {timePeriodOptions.map((value, index) => (
              <li 
                key={index}
                value={value}
                onClick={handleTimeSelection(value)}
              >
                  {value} 
              </li>
            ))}
          </ul>}
      </header>
      <table className="text-black-90 text-sm text-left border-separate border-spacing-y-2">
        <thead>
          <th>Event Name</th>
          <th>Location</th>
          <th>Date & Time</th>
          <th>Gig Type</th>
          <th>Status <button><Sort /></button></th>
        </thead>
        <tbody className="border-t-1 border-b-1 border-gray-200">
          {tableData.map((Row, index) => (
            <TableRow key={index} props={Row} />
          ))}
        </tbody>
      </table>
      <footer>

      </footer>
    </div>
  )
}

export default PerformerDashUpcomingTable
