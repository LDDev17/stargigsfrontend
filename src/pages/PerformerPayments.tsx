import { useContext, useState } from "react";

import { ExpandedContext } from "../Context/ExpandedContext";
import GigsButtons from "../design components/buttons/GigsButtons";
import PerformerPaymentContent from "../layout components/PerformerPaymentContent";

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

  const handleActiveTab = (id: string) => {
    setActivePaymentTab(id)
  }

  const { isExpanded } = context;
  return (
    <div className={`bg-white rounded-xl h-screen mt-24 mb-4 flex flex-grow flex-col 
      justify-start space-y-4 p-4 font-inter
      ${isExpanded ? 'ml-60' : 'ml-32'}`}
    >
      <header className="flex justify-start space-x-2 items-center">
        <h4 className="font-bold text-2xl">Payments</h4>
        <p>- Your payment activity, all in one place</p>
      </header>
      <GigsButtons 
        activeTab={activePaymentTab} 
        setActiveTab={handleActiveTab}
        buttonIds={buttonIds}
        buttonLabels={buttonLabels}  
      />
      <PerformerPaymentContent activeTab={activePaymentTab}/>
    </div>
  )
}

export default PerformerPayments
