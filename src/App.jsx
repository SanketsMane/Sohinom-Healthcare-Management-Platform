import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactFooter from './components/ContactFooter';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SpecialitiesPage from './pages/SpecialitiesPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/specialities" element={<SpecialitiesPage />} />
            <Route path="/how-we-work" element={<HowWeWorkPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ContactFooter />
        <WhatsAppFloat />
      </div>
    </Router>
  </ErrorBoundary>
  );
}

export default App;
