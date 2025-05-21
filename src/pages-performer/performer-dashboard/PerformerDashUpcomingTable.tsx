import { useState, useEffect } from "react";

import DashUpcomingTableRow from "./DashUpcomingTableRow";
import GigsTableType from "../../types/GigsTableType";
import sampleTableData from "../../SampleData/TableData";
import TableFooter from "../performer-gigs/TableFooter";

import Sort from '../../assets/svgs/sort.svg?react';

const PerformerDashUpcomingTable = () => {
  const [tableData, setTableData] = useState<GigsTableType[]>([]);
  const [displayData, setDisplayData] = useState<GigsTableType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const items_per_page: number = 4;

  // useEffect to set the data for all of the pages
  useEffect(() => {
    // Make API call to get the booking data
    setTableData(sampleTableData);
  }, [])

  // useEffect to set data for the current page
  useEffect(() => {
    const start = (currentPage - 1) * items_per_page;
    const end = currentPage * items_per_page;
    setDisplayData(tableData.slice(start, end));
  }, [currentPage, tableData]);

  return (
    <div className="flex flex-col justify-around bg-[#fbfbfb] p-2">
      <header className="flex justify-between py-4 font-inter">
        <p className="text-sm font-semibold">Upcoming Gigs</p>
        <p className="text-xs font-medium">This Month</p>
      </header>
      <table
        className="text-black-90 text-sm text-left border-separate border-spacing-y-2 
          border-y-1 border-[#e1e2e9] font-lato"
      >
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
