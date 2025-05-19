import { useState, useEffect, useRef } from "react";

import BookingTableRow from "../design components/BookingTableRow";
import UpcomingTableRow from "../design components/UpcomingTableRow";
import HistoryTableRow from "../design components/HistoryTableRow";
import TableFooter from "./TableFooter";
import GigsTableType from "../types/GigsTableType";
import TimePeriodButtonUp from "../design components/buttons/TimePeriodButtonUp";

import Sort from '../assets/svgs/sort.svg?react';

interface PerformerGigsTableProps {
  activeTab: string;
  filteredData?: GigsTableType[];
}

const PerformerGigsTable = ({ activeTab, filteredData }: PerformerGigsTableProps) => {
  const [displayData, setDisplayData] = useState<GigsTableType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [timePeriod, setTimePeriod] = useState<string>('This Month');
  const [tableCaption, setTableCaption] = useState<string>('Gigs Booking Requests');

  const items_per_page: number = 7;

  let dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (filteredData) {
      const start = (currentPage - 1) * items_per_page;
      const end = currentPage * items_per_page;
      setDisplayData(filteredData.slice(start, end));
    };
  }, [currentPage, filteredData]);

  useEffect(() => {
    if (activeTab === 'booking') {
      setTableCaption('Gigs Booking Requests')
    } else if (activeTab === 'upcoming') {
      setTableCaption('Upcoming Gigs')
    } else setTableCaption('Gig History')
  }, [activeTab]);

  const thStyling: string = 'font-normal whitespace-pre pb-2';

  return (
    <div className="flex flex-col justify-around bg-[#fbfbfb] p-2">
      <header className="flex justify-between py-4">
        <p className="text-sm font-semibold">{tableCaption}</p>
        <TimePeriodButtonUp
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
          dropDownRef={dropDownRef}
        />
      </header>
      <table className="text-sm text-left border-separate border-spacing-y-3 bg-[#fbfbfb] text-text_secondary">
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
            tableData={filteredData}
            displayData={displayData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
      </footer>
    </div>
  )
}

export default PerformerGigsTable
