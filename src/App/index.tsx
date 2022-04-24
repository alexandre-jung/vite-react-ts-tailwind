import Counter from '@components/Counter';
import { ReactComponent as ReactLogo } from '@assets/img/react-logo.svg';
import styles from './styles.module.scss';
// import { useEffect, useState } from 'react';
// import Expenses from '@routes/expenses';
// import Home from '@routes/home';
// import Invoice from '@routes/invoice';
// import Invoices from '@routes/invoices';
// import { NavLink, Route, Routes } from 'react-router-dom';

export default function App() {
  // const [data, setData] = useState<{ [key: string]: string }[]>();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/users');
  //       const data = await response.json();
  //       setData(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   setIsLoading(true);
  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <div>...</div>;
  // }

  // return (
  //   <div>{data && data.map((user) => <p key={user.id}>{user.name}</p>)}</div>
  // );

  return (
    <div className={styles.App}>
      <ReactLogo width={512} height={512} className="text-sky-600 rotate m-8" />
      <h1 className={styles.title}>Vite + React template project</h1>
      <Counter />
    </div>
  );

  // <div id="app">
  //   <nav>
  //     <NavLink
  //       style={({ isActive }) => ({
  //         color: isActive ? 'red' : '',
  //       })}
  //       to="/"
  //     >
  //       home
  //     </NavLink>{' '}
  //     <NavLink
  //       style={({ isActive }) => ({
  //         color: isActive ? 'red' : '',
  //       })}
  //       to="expenses"
  //     >
  //       expenses
  //     </NavLink>{' '}
  //     <NavLink
  //       style={({ isActive }) => ({
  //         color: isActive ? 'red' : '',
  //       })}
  //       to="invoices"
  //     >
  //       invoices
  //     </NavLink>
  //   </nav>
  //   <Routes>
  //     <Route path="/" element={<Home />}>
  //       <Route path="expenses" element={<Expenses />} />
  //       <Route path="invoices" element={<Invoices />}>
  //         <Route index element={<p>Select an invoice</p>} />
  //         <Route path=":invoiceId" element={<Invoice />} />
  //       </Route>
  //       <Route path="*" element={<main>There&apos;s nothing here!</main>} />
  //     </Route>
  //   </Routes>
  // </div>
  // );
}
