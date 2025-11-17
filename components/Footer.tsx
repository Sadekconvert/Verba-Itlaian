
import React from 'react';
import { Link } from 'react-router-dom';
import { VerbaItaliaLogo, LinkedinIcon, TwitterIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
  const mainLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Blog', href: '/resources' },
    { label: 'Join Us', href: '/join-us' },
    { label: 'Request a Quote', href: '/request-quote' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ];

  const socialLinks = [
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: TwitterIcon, href: '#', label: 'X (Twitter)' },
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-verba-navy/80 backdrop-blur-md text-white border-t border-verba-beige/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <VerbaItaliaLogo className="h-8 w-auto text-verba-beige" />
               <div>
                <span className="text-xl font-bold tracking-tight text-verba-beige">VerbaItalia</span>
                <p className="text-xs text-verba-beige/70 -mt-1">A Nordika Group Company</p>
              </div>
            </Link>
            <p className="text-sm text-verba-beige/80">
              VerbaItalia is a proud subsidiary of Nordika Group AB, delivering language solutions since 20XX.
            </p>
            <div className="mt-4">
                <p className="text-sm text-verba-beige/80">info@verbaitalia.IT</p>
                <p className="text-sm text-verba-beige/80">+46 (0) XXX XXX XXX</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-verba-beige/70">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {mainLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-base text-verba-beige hover:text-verba-terracotta transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-verba-beige/70">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-base text-verba-beige hover:text-verba-terracotta transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-verba-beige/70">Connect</h3>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-verba-beige hover:text-verba-terracotta transition-colors duration-300">
                  <span className="sr-only">{link.label}</span>
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-verba-beige/20 pt-8 text-center text-sm text-verba-beige/60">
          <p>&copy; 2025 VerbaItalia. All rights reserved.</p>
          <p>A Nordika Group Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;