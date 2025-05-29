import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages-general/landing-page/LandingPage';
import RoleSelectionPage from './Start/RoleSelectionPage'; // Updated import
import { SignUpPage as PerformerSignUpPage } from './PerformersSignUp/SignUpPage';

import { AboutPage } from './pages-general/About/AboutPage'; // Import AboutPage
import Reviews from './pages-general/reviews-page/Reviews'; // Import Reviews
import ContactPage from './pages-general/Contact/ContactPage'; // Corrected import path for ContactPage
import PerformerDashboardPages from './pages-performer/performer-dashboard/PerformerDashboardPages';
import PerformerMainDashboard from './pages-performer/performer-dashboard/PerformerMainDashboard';
import PerformerGigs from './pages-performer/performer-gigs/PerformerGigs';
import PerformerPayments from './pages-performer/performer-payouts/PerformerPayments';
import ClientRoutes from './config/ClientRoutes';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json'
import PerformerPerformance from './pages-performer/performer-performances/PerformerPerformance';

Amplify.configure(outputs);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role-selection-page" element={<RoleSelectionPage />} /> {/* Add RoleSelectionPage route */}
        <Route path="/performer-signup" element={<PerformerSignUpPage />} />

        <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage route */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Add ContactPage route */}
        <Route path='/performerDashboard' element={<PerformerDashboardPages />}>
          <Route path='main' element={<PerformerMainDashboard />} />
          <Route path='gigs' element={<PerformerGigs />} />
          <Route path='payouts' element={<PerformerPayments />} />
          <Route path='performances' element={<PerformerPerformance />} />
        </Route>
        {ClientRoutes()}
      </Routes>
    </Router>
  );
};

export default App;
