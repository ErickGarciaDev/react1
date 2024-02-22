import { Routes, Route } from 'react-router-dom';
import { Account } from './pages/Account';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Account />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
