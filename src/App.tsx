import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RoleSelectionPage from './Start/RoleSelectionPage'; // Updated import
import { SignUpPage as PerformerSignUpPage } from './Performers/SignUpPage';
import { SignupPage as PlannerSignUpPage } from './Customers/SignUpPage';
import VerificationPage1 from './Customers/VerificationPage';
import VerificationPage2 from './Customers/VerificationPage2';
import { SuccessMessage } from './pages/SuccessMessage';
import { SuccessMessage1 } from './pages/SuccessMessage1'; // Import SuccessMessage1
import { AboutPage } from './About/AboutPage'; // Import AboutPage
import Reviews from './pages/Reviews'; // Import Reviews
import ContactPage from './Contact/ContactPage'; // Corrected import path for ContactPage
import ClientDashboardPages from './pages/ClientDashboardPages';
import Gigs from './pages/Gigs';
import Layout from './dashboardheader/Layout'; // Import Layout
import { PerformanceSection } from './PerformersView/PerformanceSection'; // Corrected import path
import DashboardPerformersPage from './pages/DashboardPerformersPage'; // Import DashboardPerformersPage
import AddPerformer from './PerformersView/AddPerformer'; // Import AddPerformer

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role-selection-page" element={<RoleSelectionPage />} /> {/* Add RoleSelectionPage route */}
        <Route path="/performer-signup" element={<PerformerSignUpPage />} />
        <Route path="/planner-signup" element={<PlannerSignUpPage />} />
        <Route path="/verification-page1" element={<VerificationPage1 />} />
        <Route path="/verification-page2" element={<VerificationPage2 />} />
        <Route path="/verification-success" element={<SuccessMessage />} />
        <Route path="/successmessage1" element={<SuccessMessage1 />} /> {/* Add SuccessMessage1 route */}
        <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage route */}
        <Route path="/reviews" element={<Reviews />} /> {/* Add Reviews route */}
        <Route path="/contact" element={<ContactPage />} /> {/* Add ContactPage route */}
        <Route path='/dashboard' element={<ClientDashboardPages />} />
        <Route path='/gigs' element={<Gigs />} />
        <Route path="/layout" element={<Layout />} /> {/* Add Layout route */}
        <Route path="/performances" element={<PerformanceSection />} /> {/* Add PerformanceSection route */}
        <Route path="/dashboard-performers" element={<DashboardPerformersPage />} /> {/* Add DashboardPerformersPage route */}
        <Route path="/add-performer" element={<AddPerformer />} /> {/* Add AddPerformer route */}
      </Routes>
    </Router>
  );
};

export default App;
