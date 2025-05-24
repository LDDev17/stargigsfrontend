

interface InvoiceType {
  invoiceId: number;
  performerUsername: string;
  dateAttempted: string;
  paymentMethod: string;
  status: 'PAID' | 'PENDING' | 'FAILED';
  invoiceDate: string;
  dueDate: string;
  clientName: string;
  clientEmail: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: number;
  eventName: string;
  eventDate: string;
  amountDue: number;
  amountPaid: number;
}

export default InvoiceType;