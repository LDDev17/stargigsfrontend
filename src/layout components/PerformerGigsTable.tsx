import { useState, useEffect } from "react";

import BookingTableRow from "../design components/BookingTableRow";
import UpcomingTableRow from "../design components/UpcomingTableRow";
import HistoryTableRow from "../design components/HistoryTableRow";
import TableFooter from "./TableFooter";
import sampleTableData from "../SampleData/TableData";
import GigsTableType from "../types/GigsTableType";
import sampleGigHistoryData from "../SampleData/GigHistoryData";
import TimePeriodButton from "../design components/buttons/TimePeriodButton";

import Sort from '../assets/svgs/sort.svg?react';

interface PerformerGigsTableProps {
  activeTab: string;
}

const PerformerGigsTable = ({ activeTab }: PerformerGigsTableProps) => {
  const [tableData, setTableData] = useState<GigsTableType[]>(sampleTableData);
  const [displayData, setDisplayData] = useState<GigsTableType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [timePeriod, setTimePeriod] = useState<string>('This Month');
  const [tableCaption, setTableCaption] = useState<string>('Gigs Booking Requests');

  const items_per_page: number = 7;

 

  useEffect(() => {
    const start = (currentPage - 1) * items_per_page;
    const end = currentPage * items_per_page;
    setDisplayData(tableData.slice(start, end));
  }, [currentPage, tableData]);

  useEffect(() => {
    if (activeTab === 'booking') {
      setTableCaption('Gigs Booking Requests')
      setTableData(sampleTableData)
    } else if (activeTab === 'upcoming') {
      setTableCaption('Upcoming Gigs')
      setTableData(sampleTableData)
    } else setTableCaption('Gig History')
      setTableData(sampleGigHistoryData)
  }, [activeTab]);

  const thStyling: string = 'font-normal whitespace-pre';

  return (
    <div className="flex flex-col justify-around bg-[#fbfbfb] p-2">
      <header className="flex justify-between py-4">
        <p className="text-sm font-semibold">{tableCaption}</p>
        <TimePeriodButton 
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
        />
      </header>
      <table className="text-sm text-left border-separate border-spacing-y-4 bg-[#fbfbfb] text-text_secondary">
      {activeTab === 'booking' ? 
        (
          <>
            <thead>
              <tr>
                <th className={thStyling}>Event Name</th>
                <th className={thStyling}>Event Manager</th>
                <th className={thStyling}>Location</th>
                <th className={thStyling}>Amount</th>
                <th className={thStyling}>Date & Time  <button><Sort /></button></th>
                <th className={thStyling}>Gig Type  <button><Sort /></button></th>
                <th colSpan={3} className={`${thStyling} text-center`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((Row, index) => (
                <BookingTableRow key={index} props={Row} />
              ))}
            </tbody>
          </>
        ) : activeTab === 'upcoming' ? (
              <>
                <thead>
                  <tr>
                    <th className={thStyling}>Event Name</th>
                    <th className={thStyling}>Event Manager</th>
                    <th className={thStyling}>Location</th>
                    <th className={thStyling}>Date & Time  <button><Sort /></button></th>
                    <th className={thStyling}>Gig Type  <button><Sort /></button></th>
                    <th className={thStyling}>Status  <button><Sort /></button></th>
                    <th className={`${thStyling} text-center`} colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((Row, index) => (
                    <UpcomingTableRow key={index} props={Row} />
                  ))}
                </tbody>
              </>
            ) : (
              <>
                <thead>
                  <tr>
                    <th className={thStyling}>Event Name</th>
                    <th className={thStyling}>Event Manager</th>
                    <th className={thStyling}>Location</th>
                    <th className={thStyling}>Date & Time  <button><Sort /></button></th>
                    <th className={thStyling}>Gig Type  <button><Sort /></button></th>
                    <th className={thStyling}>Status  <button><Sort /></button></th>
                    <th className={`${thStyling} text-center`} colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((Row, index) => (
                    <HistoryTableRow key={index} props={Row} />
                  ))}
                </tbody>
              </>
            )
          }
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

export default PerformerGigsTable
