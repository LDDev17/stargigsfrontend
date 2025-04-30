import { useContext, useState } from "react";

import { ExpandedContext } from "../Context/ExpandedContext";
import GigsButtons from "../design components/buttons/GigsButtons";

const buttonIds: string[] = [
  'history',
  'reports',
  'payouts',
  'taxes',
];

const buttonLabels: Record<string, string> = {
  history: 'PAYMENT HISTORY',
  reports: 'EARNING REPORTS',
  payouts: 'PAYOUTS',
  taxes: 'TAXES',
};

const PerformerPayments = () => {
  const [activePaymentTab, setActivePaymentTab] = useState<string>('history');
  const context = useContext(ExpandedContext);

  if (!context) throw new Error('PerformerPayments must be used within a DataProvider.');

  const { isExpanded } = context;
  return (
    <div className={`absolute right-4 bg-white rounded-xl h-screen mt-24 mb-4 flex flex-col justify-start space-y-4 p-4
      ${isExpanded ? 'w-3/5 md:w-7/10 lg:w-3/4 xl:w-4/5 2xl:w-17/20' : 'w-7/10 sm:w-4/5 md:w-17/20 xl:w-9/10'}`}>
      <header className="flex justify-start space-x-2 items-center">
        <h4 className="font-bold text-2xl">Payments</h4>
        <p>- Your payment activity, all in one place</p>
      </header>
      <GigsButtons 
        activeTab={activePaymentTab} 
        setActiveTab={setActivePaymentTab}
        buttonIds={buttonIds}
        buttonLabels={buttonLabels}  
      />
      {/* insert tables here */}
    </div>
  )
}

export default PerformerPayments
