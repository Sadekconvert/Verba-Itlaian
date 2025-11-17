
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="bg-verba-navy/90 backdrop-blur-sm text-white rounded-lg shadow-2xl max-w-4xl mx-auto p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/90">
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our{' '}
            <Link to="/cookie-policy" className="font-bold underline hover:text-verba-terracotta transition-colors">
                Cookie Policy
            </Link>
            .
            </p>
            <div className="flex-shrink-0 flex gap-4">
            <button
                onClick={handleDecline}
                className="px-5 py-2 text-sm font-bold bg-transparent border border-white/50 rounded-full hover:bg-white/10 transition-colors"
            >
                Decline
            </button>
            <button
                onClick={handleAccept}
                className="px-5 py-2 text-sm font-bold bg-verba-green-dark text-white rounded-full hover:bg-opacity-90 transition-colors"
            >
                Accept
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default CookieConsent;
