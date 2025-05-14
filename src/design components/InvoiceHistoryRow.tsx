import { Link } from "react-router-dom";

import InvoiceRowProps from "../types/InvoiceHistoryType";
import Caret from '../assets/svgs/caret.svg?react';

const InvoiceHistoryRow = ({ performerName, date, paymentMethod, amount, status, invoiceLink}: InvoiceRowProps) => {
  
  return (
    <tr className="border-b-2 border-[#f2f4f7]">
      <td className="font-semibold text-black py-4">{performerName}</td>
      <td className="font-normal py-4">{date}</td>
      <td className="py-4">{paymentMethod}</td>
      <td className="py-4">${amount}</td>
      <td className={`py-4 ${status === 'PENDING' ? ('text-[#0978f2]') : 
            status === 'PAID' ?('text-[#0ead69]') : ('text-[#c10b0e]')}
                    `}
      >
        {status}
      </td>
      <td>
        <Link 
          to={invoiceLink}
          className="underline font-medium text-[#111927] text-sm flex items-center "
        >
          View Invoice<Caret className="rotate-270"/>
        </Link>
      </td>
    </tr>
  )
}

export default InvoiceHistoryRow
