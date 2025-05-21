import { useContext, useState } from "react";

import { ExpandedContext } from "../../Context/ExpandedContext";
import GigsButtons from "../../design components/buttons/GigsButtons";
import PerformerPaymentContent from "./PerformerPaymentContent";

const buttonIds: string[] = [
  'payouts',
  'history',
  'taxes',
];

const buttonLabels: Record<string, string> = {
  payouts: 'PAYOUTS OPTIONS',
  history: 'PAYOUT HISTORY',
  taxes: 'TAXES',
};

const PerformerPayments = () => {
  const [activePaymentTab, setActivePaymentTab] = useState<string>('payouts');

  // context is an object of isExpanded and setIsExpanded that controls the width
  // of the sidebar and the main content of the page
  const context = useContext(ExpandedContext);
  if (!context) throw new Error('PerformerPayments must be used within a DataProvider.');
  // isExpanded is part of the context object and is a boolean that determines
  // if the sidebar and main content are expanded or not
  const { isExpanded } = context;

  const handleActiveTab = (id: string) => {
    setActivePaymentTab(id)
  }

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
      <PerformerPaymentContent activeTab={activePaymentTab} />
    </div>
  )
}

export default PerformerPayments
