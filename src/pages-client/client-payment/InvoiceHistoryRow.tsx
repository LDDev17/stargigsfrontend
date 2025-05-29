import { Link } from "react-router-dom";

import InvoiceRowProps from "../../types/InvoiceHistoryType";
import Caret from '../../assets/svgs/caret.svg?react';

const InvoiceHistoryRow = (
  { 
    invoiceId,
    performerUsername, 
    dateAttempted, 
    paymentMethod, 
    amountPaid, 
    status, 
  }: InvoiceRowProps) => {
    

  return (
    <tr className="border-b-2 border-[#f2f4f7]">
      <td className="font-semibold text-black py-4">{performerUsername}</td>
      <td className="font-normal py-4">{dateAttempted}</td>
      <td className="py-4">{paymentMethod}</td>
      <td className="py-4">${amountPaid}</td>
      <td className={`py-4 ${status === 'PENDING' ? ('text-[#0978f2]') : 
            status === 'PAID' ?('text-[#0ead69]') : ('text-[#c10b0e]')}
          font-semibold`}
      >
        {status}
      </td>
      <td>
        <Link 
          to={`/clientDashboard/payment/history/${invoiceId}`}
          className="underline font-medium text-[#111927] text-sm flex items-center "
        >
          View Invoice<Caret className="rotate-270"/>
        </Link>
      </td>
    </tr>
  )
}

export default InvoiceHistoryRow
