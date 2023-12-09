import { Routes, Route } from 'react-router-dom';

import { ReportsDetails } from '../pages/ReportDetails';
import { ReportsList } from '../pages/ReportsList';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ReportsList />} />
      <Route path="/detalhes/:id" element={<ReportsDetails />} />
    </Routes>
  );
}
