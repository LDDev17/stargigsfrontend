import { useEffect, useState } from "react"
import InvoiceType from "../types/InvoiceType"
import SampleInvoiceData from "../SampleData/InvoiceData";
import { useParams } from "react-router-dom";

const ClientInvoice = () => {
  // pulling invoiceId from URL
  const { invoiceId } = useParams<{ invoiceId: string }>();
  const [invoiceData, setInvoiceData] = useState<InvoiceType>();

  useEffect(() => {
    if (invoiceId) {
      // Fetch invoice data using invoiceId
      // Then, set data to invoiceData
    }
    // How we are doing it for now to get sample data
    if (invoiceId) {
      const foundInvoice = SampleInvoiceData.find(
        (invoice) => invoice.invoiceId === Number(invoiceId)
      );
      setInvoiceData(foundInvoice);
    }
  }, [invoiceId])


  return (
    <div className="flex flex-col space-y-4 p-4 font-inter text-xl text-[#333333]">
      <h5 className="font-bold text-2xl text-[#111927]">Invoice</h5>
      <p className="font-medium text-md">#{invoiceData?.invoiceId}</p>
      <div className="flex justify-between w-full">
        {/* Left Side */}
        <div className="flex">
          {/* First Column */}
          <div className="flex flex-col space-y-2">
            <p>Invoice Date</p>
            <p>Due Date</p>
          </div>
          {/* Second Column */}
          <div className="flex flex-col space-y-2">
            <p>{invoiceData?.invoiceDate}</p>
            <p>{invoiceData?.dueDate}</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex justify-between w-1/3">
          {/* Third Column */}
          <div className="flex flex-col space-y-2">
            <p>Client</p>
            <p>Performer Username</p>
          </div>
          {/* Fourth Column */}
          <div className="flex flex-col space-y-2 font-bold text-right">
            <p>{invoiceData?.clientName}</p>
            <p>{invoiceData?.performerUsername}</p>
          </div>
        </div>
      </div>
      
      {/* Billed To seciton */}
      <section>
        <p className="font-bold text-xl">Billed To</p>
        <div>
          <p className="font-bold">{invoiceData?.clientName}</p>
          <p className="font-bold">{invoiceData?.clientEmail}</p>
          <p>{invoiceData?.streetAddress}</p>
          <p>{invoiceData?.city}, {invoiceData?.state} {invoiceData?.zip}</p>
        </div>
      </section>

      {/* Table */}
      <table className="font-bold">
        <thead>
          <tr>
            <th>Event</th>
            <th>Event Date</th>
            <th>Amount Due</th>
            <th>Amount Paid</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

export default ClientInvoice
