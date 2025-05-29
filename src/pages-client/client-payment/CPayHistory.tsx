import { useState, useEffect, useRef } from "react";

import InvoiceHistoryRow from "./InvoiceHistoryRow";
import InvoiceRowProps from "../../types/InvoiceHistoryType";
import SampleInvoiceData from "../../SampleData/InvoiceData";
import TimePeriodButtonUp from "../../design-components/buttons/TimePeriodButtonUp";


const CPayHistory = () => {
  const [invoiceTableData, setInvoiceTableData] = useState<InvoiceRowProps[]>([]);
  const [timePeriod, setTimePeriod] = useState<string>('This Month');


  let dropDownRef = useRef<null>(null);

  useEffect(() => {
    // make API call to get invoice data onMount and when timePeriod changes
    setInvoiceTableData(SampleInvoiceData);
  }, [timePeriod])

  return (
    <div className="font-inter">
      <header className="flex justify-between">
        <p className="font-bold text-md text-[#111927] py-4">Invoice History</p>
        <TimePeriodButtonUp
          dropDownRef={dropDownRef}
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
            {invoiceTableData.map((invoice) => (
              <InvoiceHistoryRow
                key={invoice.invoiceId}
                invoiceId={invoice.invoiceId}
                dateAttempted={invoice.dateAttempted}
                performerUsername={invoice.performerUsername}
                paymentMethod={invoice.paymentMethod}
                amountPaid={invoice.amountPaid}
                status={invoice.status}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default CPayHistory;
