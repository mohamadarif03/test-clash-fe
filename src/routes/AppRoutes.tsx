import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import { DashboardMaterials } from '../features/dashboard/components/DashboardMaterials';
import { DashboardUsers } from '../features/dashboard/components/DashboardUsers';
import { DashboardSubtests } from '../features/dashboard/components/DashboardSubtests';
import { DashboardQuestions } from '../features/dashboard/components/DashboardQuestions';
import { DashboardTryouts } from '../features/dashboard/components/DashboardTryouts';
import { DashboardReports } from '../features/dashboard/components/DashboardReports';

import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/materials" element={<DashboardMaterials />} />
                <Route path="/dashboard/users" element={<DashboardUsers />} />
                <Route path="/dashboard/subtests" element={<DashboardSubtests />} />
                <Route path="/dashboard/questions" element={<DashboardQuestions />} />
                <Route path="/dashboard/tryouts" element={<DashboardTryouts />} />
                <Route path="/dashboard/reports" element={<DashboardReports />} />
            </Route>
        </Routes>
    );
};
