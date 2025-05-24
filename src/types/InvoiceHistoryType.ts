interface InvoiceRowProps {
  invoiceId: number;
  performerUsername: string;
  dateAttempted: string;
  paymentMethod: string;
  amountPaid: number;
  status: 'PAID' | 'PENDING' | 'FAILED';
};

export default InvoiceRowProps;