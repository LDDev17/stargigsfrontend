import { useEffect, useState } from 'react';

import sampleBookingData from '../SampleData/BookingData';
import BookingProps from '../types/BookingType';
import DashBookingRow from '../design components/DashBookingRow';

import Caret from '../assets/svgs/caret.svg?react';

const DashBookingTable = () => {
  const [bookingData, setBookingData] = useState<BookingProps[]>(sampleBookingData);
  const [displayData, setDisplayData] = useState<BookingProps[]>([]);

  useEffect(() => {
    setDisplayData(bookingData.slice(0,3))
  }, [bookingData])

  return (
    <div className='bg-[#fbfbfb] p-4'>
      <h5 className='font-medium text-sm pl-8 pb-2'>Gig Booking Requests</h5>
      <table className='border-separate border-spacing-y-2 border-spacing-x-8'>
        <tbody>
          {displayData.map((Row, index) => (
            <DashBookingRow key={index} props={Row} />
          ))}
        </tbody>
      </table>
      <button 
        className='cursor-pointer text-gray-500 pt-4 pl-8 font-medium flex items-center whitespace-pre'
      >
        VIEW ALL REQUESTS  <Caret className='rotate-270'/>
      </button>
    </div>
  )
}

export default DashBookingTable
