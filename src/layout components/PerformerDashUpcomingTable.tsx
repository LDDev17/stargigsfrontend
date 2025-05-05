import { useState, useEffect } from "react";

import DashUpcomingTableRow from "../design components/DashUpcomingTableRow";
import GigsTableType from "../types/GigsTableType";
import sampleTableData from "../SampleData/TableData";

import Caret from '../assets/svgs/caret.svg?react';
import Sort from '../assets/svgs/sort.svg?react'
import TableFooter from "./TableFooter";



const timePeriodOptions = [
  'This Month',
  'Next Month', 
  'Next 3 Months'
]

const PerformerDashUpcomingTable = () => {
  const [tableData, setTableData] = useState<GigsTableType[]>(sampleTableData);
  const [displayData, setDisplayData] = useState<GigsTableType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [timePeriod, setTimePeriod] = useState<string>('This Month');
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(false);

  const items_per_page: number = 4;

  const handleTimeSelection = (value: string) => (e: React.MouseEvent<HTMLLIElement>) => {
    setTimePeriod(value)
    setButtonIsActive(false)
  }

  const handleTimeButton = () => {
    setButtonIsActive(!buttonIsActive)
  }

  useEffect(() => {
      const start = (currentPage - 1) * items_per_page;
      const end = currentPage * items_per_page;
      setDisplayData(tableData.slice(start, end));
    }, [currentPage, tableData]);

  return (
    <div className="flex flex-col justify-around bg-[#fbfbfb] p-2">
      <header className="flex justify-between py-4">
        <p className="text-sm font-semibold">Upcoming Gigs</p>
        <div className="relative">
          <button
            className="flex items-center whitespace-pre font-semibold text-xs cursor-pointer"
            onClick={handleTimeButton}
          >
            {timePeriod}  <Caret />
          </button>
          {buttonIsActive &&
            <ul className="absolute w-24">
              {timePeriodOptions.map((value, index) => (
                <li
                  key={index}
                  value={value}
                  onClick={handleTimeSelection(value)}
                  className="cursor-pointer text-sm hover:text-primary"
                >
                    {value}
                </li>
              ))}
            </ul>}
        </div>
      </header>
      <table className="text-black-90 text-sm text-left border-separate border-spacing-y-2 border-y-1 border-[#e1e2e9]">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Location</th>
            <th>Date & Time</th>
            <th>Gig Type</th>
            <th>Status <button><Sort /></button></th>
          </tr>
        </thead>
        <tbody className="border-t-1 border-b-1 border-gray-200">
          {displayData.map((Row, index) => (
            <DashUpcomingTableRow key={index} props={Row} />
          ))}
        </tbody>
      </table>
      <footer className="py-4">
          <TableFooter 
            items_per_page={items_per_page}
            tableData={tableData}
            displayData={displayData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
      </footer>
    </div>
  )
}

export default PerformerDashUpcomingTable
