import { getInvoice } from '../data';
import { useParams } from 'react-router-dom';

export default function Invoice() {
  const { invoiceId } = useParams();
  const invoice =
    invoiceId !== undefined ? getInvoice(parseInt(invoiceId, 10)) : null;

  return (
    <>
      {invoice ? (
        <>
          <h2>Invoice {invoice.name}</h2>
          <p>id: #{invoice.number}</p>
          <p>name: {invoice.name}</p>
          <p>amount: {invoice.amount}</p>
          <p>due date: {invoice.due}</p>
        </>
      ) : (
        <p>Invoice not found</p>
      )}
    </>
  );
}
