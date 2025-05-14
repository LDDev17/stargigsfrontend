import GigsTableType from "../types/GigsTableType";

import Message from '../assets/svgs/message.svg?react';
import Check from '../assets/svgs/check.svg?react';
import XMark from '../assets/svgs/x_mark.svg?react';

interface TableRowType{
  props: GigsTableType;
};

const BookingTableRow = ({ props }: TableRowType) => {
  const money = new Intl.NumberFormat().format(props.Amount);

  return (
    <tr className="text-text_secondary font-normal">
      <td>{props.EventName}</td>
      <td>{props.EventManager}</td>
      <td>{props.Location}</td>
      <td>${money}</td>
      <td>{props.DateTime}</td>
      <td>{props.GigType}</td>
      <td className="text-center w-8">
        <div className="px-2">
          <button className="bg-white p-4 cursor-pointer text-[#007aff]">
            <Message />
          </button>
        </div>
      </td>
      <td className="border-[#d8dadc] border-x text-center w-8">
        <div className="px-2">
          <button
            className="bg-white p-4 cursor-pointer"
          >
            <Check />
          </button>
        </div>
      </td>
      <td className="overflow-hidden text-center w-8">
        <div className="px-2">
          <button className="bg-white p-4 cursor-pointer">
            <XMark />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default BookingTableRow;
