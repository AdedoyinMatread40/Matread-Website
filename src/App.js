import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import AboutUsPage from './AboutUs'
import CareersPage from './Careers';
import ContactUsPage from './ContactUs';
import ServicesPage from './Services';
import HomePageBanner from './Components/HomePageBanner';
import ResponsiveDialog from './Components/ResponsiveDialog';
import PositionsAvailable from './Components/PositionsAvailable';
import Section1 from './Section1';
import Footer from './Components/Footer';
import AboutDescription from './Components/AboutDescription';
import JobInfo from './Components/JobInfo';
import JobDescription from './Components/JobDescription';
import JobPosting from './Components/JobPosting';
import NewCareerPage from './Components/NewCareerForm';
import HomeImgBanner from './Components/HomeImageBanner';

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
                <Route path="/position" element={<PositionsAvailable />} />
                <Route path="/section1" element={<Section1 />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/about" element={<AboutDescription />} />
                <Route path="/job-info" element={<JobInfo />} />
                <Route path="/job-desc" element={<JobDescription />} />
                <Route path="/job-post" element={<JobPosting />} />
                <Route path="/new-career-page" element={<NewCareerPage />} />
                <Route path="/home-banner-img" element={<HomeImgBanner />} />
            </Routes>
        </Router>
    );
}

export default App;
