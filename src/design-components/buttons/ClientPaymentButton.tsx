import React from 'react';
import { NavLink } from 'react-router-dom';

interface ClientPayButtonProps {
  activePaymentTab: string;
  setActivePaymentTab: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  id: string;
}

const ClientPaymentButton = ({ activePaymentTab, setActivePaymentTab, label, id }: ClientPayButtonProps) => {

  return (
    <div className='font-inter font-medium'>
      <NavLink
        className={`
          ${activePaymentTab === id ? 'text-primary border-b-3 border-priamry pb-4' : 'text-text_secondary'}
          cursor-pointer`
        }
        onClick={() => setActivePaymentTab(id)}
        to={`/clientDashboard/payment/${id}`}
      >
        {label}
      </NavLink>
    </div>
  )
}

export default ClientPaymentButton
