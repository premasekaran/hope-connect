import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';

import HomePage from './pages/HomePage';
import GivePage from './pages/GivePage';
import SkillsPage from './pages/SkillsPage';
import EmployeePage from './pages/EmployeePage';
import ImpactPage from './pages/ImpactPage';
import DemoPage from './pages/DemoPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}
