import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Application</h2>
      <Outlet />
    </main>
  );
}
