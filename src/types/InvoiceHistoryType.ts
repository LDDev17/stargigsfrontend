interface InvoiceRowProps {
  performerName: string;
  date: string;
  paymentMethod: string;
  amount: number;
  status: 'PAID' | 'PENDING' | 'FAILED';
  invoiceLink: string;
};

export default InvoiceRowProps;