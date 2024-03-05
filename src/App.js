import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import AboutUsPage from './AboutUs'
import CareersPage from './Careers';
import ContactUsPage from './ContactUs';
import ServicesPage from './Services';
import HomePageBanner from './Components/HomePageBanner';
import ResponsiveDialog from './Components/ResponsiveDialog';
import CareerForm from './Components/CareerForm';
import PositionsAvailable from './Components/PositionsAvailable';
import Section1 from './Section1';
import Footer from './Components/Footer';
import AboutDescription from './Components/AboutDescription';

function App() {
    
    return(
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/video" element={<HomePageBanner />} />
                <Route path="/dialog" element={<ResponsiveDialog />} />
                <Route path="/career-form" element={<CareerForm />} />
                <Route path="/position" element={<PositionsAvailable />} />
                <Route path="/section1" element={<Section1 />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/about" element={<AboutDescription />} />
            </Routes>
        </Router>
    );
}

export default App;
