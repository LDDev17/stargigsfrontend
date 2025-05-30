import CreditCard from '../../assets/svgs/credit_card.svg?react';
import Bank from '../../assets/svgs/bank.svg?react';
import PayoutProps from '../../types/PayoutsType';
import EditButton from '../../design-components/buttons/EditButton';

interface PayoutRowType {
  props: PayoutProps;
}

const PayoutsRow = ({ props }: PayoutRowType) => {
  return (
    <div className='flex justify-between w-3/4'>
      <div className="flex space-x-4">
        <div className='flex items-center'>
          {['checking', 'savings'].includes(props.type.toLowerCase()) ? (
            <Bank />
          ) : (
            <CreditCard />
          )}
        </div>
        <div className='flex flex-col justify-between items-start'>
          <div className='flex space-x-2'>
            <p className='text-md'>{props.title}</p>
            {props.default && <p className='text-sm bg-[#d8dadc] rounded-xs p-1'>Default</p>}
          </div>
          <p>{props.company} {props.type} ****{props.cardNum}, {props.first_name} {props.last_name} ({props.countryCode})</p>
        </div>
      </div>
      <div>
        <EditButton />
      </div>
    </div>
  )
}

export default PayoutsRow
