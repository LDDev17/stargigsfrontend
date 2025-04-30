import GigsTableType from "../types/GigsTableType";

import Message from '../assets/svgs/message.svg?react';
import XMark from '../assets/svgs/x_mark.svg?react';

interface UpcomingTableRowProps{
  props: GigsTableType;
};

const UpcomingTableRow = ({ props }: UpcomingTableRowProps) => {
  return (
    <tr className="text-text_secondary font-normal">
      <td>{props.EventName}</td>
      <td>{props.EventManager}</td>
      <td>{props.Location}</td>
      <td>{props.DateTime}</td>
      <td>{props.GigType}</td>
      <td 
      >
        <div className={`${props.Status.toLowerCase() === 'confirmed' ? 
        'text-[#519c66] bg-[#d2ffc2] opacity-57' : 'text-primary bg-[#ffeedf]'} 
         p-2 rounded-lg mr-2 max-w-24`}>{props.Status}</div>
      </td>
      <td className="text-[#007aff] border-r-1 border-[#d8dadc]">
        <button className="bg-white p-4 -mr-4 cursor-pointer">
          <Message />
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

export default UpcomingTableRow
