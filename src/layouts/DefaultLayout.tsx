import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
