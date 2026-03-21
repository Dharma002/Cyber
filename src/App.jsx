import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages import
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage'; 
import DepartmentPage from './pages/DepartmentPage'; 
import CoursesPage from './pages/CoursesPage';   
import EventsPage from './pages/EventsPage';
import MembersPage from './pages/MembersPage';
import InternshipPage from './pages/InternshipPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';

// Components & Layout import
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop'; // Scroll reset component

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    /* mode="wait" ensures old page fades out before new one slides in */
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Core Sections */}
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/courses" element={<CoursesPage />} />

        {/* Events & Community */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/members" element={<MembersPage />} />
        
        {/* Specialized Pages */}
        <Route path="/internship" element={<InternshipPage />} />
        
        {/* Auth System */}
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      {/* 1. ScrollToTop ko Router ke andar sabse upar rakha hai */}
      <ScrollToTop /> 
      
      {/* 2. Layout (Navbar/Footer) wrap kar raha hai AnimatedRoutes ko */}
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;