import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Invoices</h2>
      <ul>
        {getInvoices().map((invoice) => (
          <li key={invoice.number}>
            <NavLink
              // style={({ isActive }) => ({
              //   color: isActive ? 'red' : '',
              // })}
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to={`${invoice.number}`}
            >
              {invoice.number} - {invoice.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
}
