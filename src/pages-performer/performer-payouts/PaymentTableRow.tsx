import PaymentProps from "../../types/PaymentsType"

import Message from '../../assets/svgs/message.svg?react';

interface PaymentRowProps {
  props: PaymentProps;
};

const PaymentTableRow = ({ props }: PaymentRowProps) => {
  const money = new Intl.NumberFormat().format(props.amount);

  return (
    <tr className="text-text_secondary font-normal">
      <td>
        <div className={`${props.status.toLowerCase() === 'received' ? 
          'text-[#007aff] bg-[#9acaff]' : 'text-primary bg-[#ffeedf]'} 
          p-2 rounded-lg mr-2 max-w-24 text-center`}
        >
          {props.status}
        </div>
      </td>
      <td>${money}</td>
      <td>{props.event}</td>
      <td>{props.eventManager}</td>
      <td>{props.dateTime}</td>
      <td>{props.gigType}</td>
      <td>
        <button className="bg-white cursor-pointer p-4 text-[#007aff]">
          <Message />
        </button>
      </td>
    </tr>
  )
}

export default PaymentTableRow
