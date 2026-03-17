import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages import
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import InternshipPage from './pages/InternshipPage';
import RegistrationPage from './pages/RegistrationPage'; // Naya Registration Page

// Components & Layout import
import Layout from './components/Layout'; // Isme Navbar aur Footer pehle se hai

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        {/* Registration Page ka path add kar diya */}
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      {/* Layout component automatic Header/Navbar aur Footer manage karega */}
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;