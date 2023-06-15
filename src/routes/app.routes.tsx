import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { Portfolio } from '../pages/Portfolio';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
