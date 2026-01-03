import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
