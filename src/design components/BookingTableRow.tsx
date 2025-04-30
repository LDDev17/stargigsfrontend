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
      <td className="text-[#007aff] border-r-1 border-[#d8dadc]">
        <button className="bg-white p-4 -mr-4 cursor-pointer">
          <Message />
        </button>
      </td>
      <td>
        <button className="bg-white p-4 -mr-4 ml-2 cursor-pointer">
          <Check />
        </button>
      </td>
      <td className="border-l-1 border-[#d8dadc]">
        <button className="bg-white p-4 ml-2 cursor-pointer">
          <XMark />
        </button>
      </td>
    </tr>
  )
}

export default BookingTableRow;
