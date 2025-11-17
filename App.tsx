import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutUsPage from './pages/AboutUsPage';
import LeenAiPage from './pages/LeenAiPage';
import ResourcesPage from './pages/ResourcesPage';
import JoinUsPage from './pages/JoinUsPage';
import RequestQuotePage from './pages/RequestQuotePage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookieConsent from './components/CookieConsent';
import InteractiveBackground from './components/InteractiveBackground';
import TranslationPage from './pages/services/TranslationPage';
import WebsiteLocalizationPage from './pages/services/WebsiteLocalizationPage';
import AppLocalizationPage from './pages/services/AppLocalizationPage';
import GameLocalizationPage from './pages/services/GameLocalizationPage';
import VoiceoverPage from './pages/services/VoiceoverPage';
import SubtitlingPage from './pages/services/SubtitlingPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <InteractiveBackground />
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/leen-ai" element={<LeenAiPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            {/* Service Detail Pages */}
            <Route path="/services/translation" element={<TranslationPage />} />
            <Route path="/services/website-localization" element={<WebsiteLocalizationPage />} />
            <Route path="/services/app-software-localization" element={<AppLocalizationPage />} />
            <Route path="/services/game-localization" element={<GameLocalizationPage />} />
            <Route path="/services/voiceover" element={<VoiceoverPage />} />
            <Route path="/services/subtitling" element={<SubtitlingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <CookieConsent />
    </div>
  );
};

export default App;