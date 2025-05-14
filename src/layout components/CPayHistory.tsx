import { useState } from "react";

import InvoiceHistoryRow from "../design components/InvoiceHistoryRow";
import InvoiceRowProps from "../types/InvoiceHistoryType";
import SampleInvoiceData from "../SampleData/InvoiceData";
import TimePeriodButton from "../design components/buttons/TimePeriodButton";

const timePeriodOptions = [
  'This Month',
  'Next Month', 
  'Next 3 Months'
];

const CPayHistory = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceRowProps[]>(SampleInvoiceData);
  const [timePeriod, setTimePeriod] = useState<string>('This Month');

  return (
    <div className="font-inter">
      <header className="flex justify-between">
        <p className="font-bold text-md text-[#111927] py-4">Invoice History</p>
        <TimePeriodButton 
          timePeriodOptions={timePeriodOptions}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
        />
      </header>
      <main>
        <table className="border-collapse w-full">
          <thead>
            <tr className="bg-[#f8f9fa] font-semibold text-left">
              <th className="py-4">PERFORMER'S NAME</th>
              <th>DATE</th>
              <th>PAYMENT METHOD</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((invoice, index) => (
              <InvoiceHistoryRow
                key={index}
                performerName={invoice.performerName}
                date={invoice.date}
                paymentMethod={invoice.paymentMethod}
                amount={invoice.amount}
                status={invoice.status}
                invoiceLink={invoice.invoiceLink}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default CPayHistory;
