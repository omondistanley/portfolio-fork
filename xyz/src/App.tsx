import React from "react";
import ReactGA from "react-ga4";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import ExtraExperience from "./components/ExtraExperience/ExtraExperience";
import ProjectsShowcase from "./components/Projects/Projects";
import ArtGallery from "./components/ArtGallery/ArtGallery";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

// Initialize Google analytics
// Uses config file first, then falls back to environment variable
import { portfolioConfig } from "./config/portfolio.config";

const googleAnalyticsKey = portfolioConfig.analytics.googleAnalyticsKey || import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
if (googleAnalyticsKey) {
  ReactGA.initialize(googleAnalyticsKey);
}

// Main portfolio component
const MainPortfolio: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <Hero />
    <div className="content-container">
      <Layout>
        <AboutMe />
        <ExperienceTimeline />
        <ExtraExperience />
      </Layout>
    </div>
    <ProjectsShowcase />
    <ArtGallery />
    <Footer />
  </div>
);

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPortfolio />} />
  </Routes>
);

export default App;
