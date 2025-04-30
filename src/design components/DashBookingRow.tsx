import BookingProps from "../types/BookingType"

import GreenCheck from '../assets/svgs/check.svg?react';
import OrangeX from '../assets/svgs/x_mark.svg?react';

interface BookingRowProps {
  props: BookingProps
}

const DashBookingRow = ({ props }: BookingRowProps) => {
  const money = new Intl.NumberFormat().format(props.amount);

  return (
    <>
      <tr>
        <td rowSpan={2}>
          <img 
            src={props.image} 
            alt="profile picture for the client" 
            className="size-8 rounded-full"
          />
        </td>
        <td>{props.first_name} {props.last_name}</td>
        <td className="text-right">${money}</td>
        <td rowSpan={2} className=" border-r-1 border-[#d8dadc]">
          <button className="bg-white p-4 mx-2 cursor-pointer">
            <GreenCheck />
          </button>
        </td>
        <td rowSpan={2}>
          <button className="bg-white p-4 -ml-4 cursor-pointer">
            <OrangeX />
          </button>
        </td>
      </tr>
      <tr>
        <td className="text-gray-500">{props.date}</td>
        <td className="text-right text-gray-500">{props.location}</td>
      </tr>
    </>
  )
}

export default DashBookingRow;
