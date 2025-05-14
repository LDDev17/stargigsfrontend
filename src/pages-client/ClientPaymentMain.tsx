import { useState, useContext } from "react"
import { Outlet } from "react-router-dom";

import { ExpandedContext } from "../Context/ExpandedContext";
import ClientPaymentButton from "../design components/buttons/ClientPaymentButton";

const paymentButtonLabels: Record<string, string> = {
  details: 'Payment',
  history: 'History',
};

const ClientPaymentMain = () => {
  // Setting state for the 'payment' and 'history' tabs
  const [activePaymentTab, setActivePaymentTab] = useState<string>('payment');
  const context = useContext(ExpandedContext);

  if (!context) throw new Error('ClientPaymentMain must be used within a DataProvider.');

  const { isExpanded } = context;

  return (
    <div className={`bg-white rounded-xl mt-24 mb-4 flex flex-col flex-grow space-y-4 p-4
        ${isExpanded ? 'ml-60' : 'ml-32'}
      `}
    >
      <header className="flex space-x-4 space-y-4 font-inter">
        {Object.entries(paymentButtonLabels).map(([key, label]) => (
          <ClientPaymentButton
            activePaymentTab={activePaymentTab}
            setActivePaymentTab={setActivePaymentTab}
            key={key}
            label={label}
            id={key}
          />
        ))}
      </header>
      <main>
        {/* Routes to CPayPerformerDetails, CPayCompletePay, CPayInvoiceTable, CPayInvoiceSheet */}
        <Outlet />
      </main>


    </div>
  )
}

export default ClientPaymentMain;
