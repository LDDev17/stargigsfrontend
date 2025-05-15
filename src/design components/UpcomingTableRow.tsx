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
        'text-[#519c66] bg-[#d2ffc2]/57' : 'text-primary bg-[#ffeedf]'} 
         p-2 rounded-lg mr-2 max-w-24 text-center`}>{props.Status}</div>
      </td>
      <td className="text-[#007aff] border-r-1 border-[#d8dadc] text-center w-8">
        <div className="px-2">
          <button className="bg-white p-4 cursor-pointer">
            <Message />
          </button>
        </div>
      </td>
      <td className="text-center w-8">
        <div className="px-2">
          <button className="bg-white p-4 cursor-pointer text-center">
            <XMark />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UpcomingTableRow
