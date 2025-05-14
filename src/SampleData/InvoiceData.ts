import InvoiceRowProps from "../types/InvoiceHistoryType"

const SampleInvoiceData: InvoiceRowProps[] = [
  {
    performerName: 'Leyla Ahmedova',
    date: 'Mar 01 2025',
    paymentMethod: '1520 **** **** 2081',
    amount: 500,
    status: 'PENDING',
    invoiceLink: 'link',
  },
  {
    performerName: 'Faud Ibrahimov',
    date: 'Feb 28 2025',
    paymentMethod: '1520 **** **** 2081',
    amount: 200,
    status: 'PAID',
    invoiceLink: 'link',
  },
  {
    performerName: 'Ali Hasanov',
    date: 'Jan 27 2025',
    paymentMethod: '1520 **** **** 2081',
    amount: 100,
    status: 'PAID',
    invoiceLink: 'link',
  },
  {
    performerName: 'Ali Hasanov',
    date: 'Jan 26 2025',
    paymentMethod: '1520 **** **** 2081',
    amount: 100,
    status: 'FAILED',
    invoiceLink: 'link',
  }
];

export default SampleInvoiceData;