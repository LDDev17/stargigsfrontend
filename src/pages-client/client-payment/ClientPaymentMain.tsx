import { useState, useContext, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom";

import { ExpandedContext } from "../../Context/ExpandedContext";
import ClientPaymentButton from "../../design-components/buttons/ClientPaymentButton";

const paymentButtonLabels: Record<string, string> = {
  details: 'Payment',
  history: 'History',
};

const ClientPaymentMain = () => {
  // Setting state for the 'payment' and 'history' tabs
  const [activePaymentTab, setActivePaymentTab] = useState<string>('details');
  const context = useContext(ExpandedContext);
  const location = useLocation();

  if (!context) throw new Error('ClientPaymentMain must be used within a DataProvider.');

  const { isExpanded } = context;

  // Determine tab from URL path
  const getTabFromPath = () => {
    if (location.pathname.includes('history')) return 'history';
    return 'details';
  };

  useEffect(() => {
    setActivePaymentTab(getTabFromPath());
  }, [location.pathname]);

  return (
    <div className={`bg-white rounded-xl mt-24 mb-4 flex flex-col flex-grow 
      space-y-4 p-4 min-h-screen
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
