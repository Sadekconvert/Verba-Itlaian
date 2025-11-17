
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon, VerbaItaliaLogo } from './icons';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <RouterNavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-verba-terracotta' : 'text-verba-beige hover:text-verba-terracotta'
      }`
    }
  >
    {children}
  </RouterNavLink>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-verba-navy-dark/50 backdrop-blur-lg border-b border-verba-beige/10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <VerbaItaliaLogo className="h-8 w-auto text-verba-beige" />
              <div>
                <span className="text-xl font-bold tracking-tight text-verba-beige">VerbaItalia</span>
                <p className="text-xs text-verba-beige/70 -mt-1">A Nordika Group Company</p>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} to={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
             <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-2 px-5 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Request a Quote
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-verba-beige hover:text-verba-terracotta focus:outline-none"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-verba-navy-dark border-t border-verba-beige/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
              >
                <span className="block px-3 py-2 rounded-md text-base">{link.label}</span>
              </NavLink>
            ))}
            <div className="p-4">
                <Link to="/request-quote" onClick={() => setIsOpen(false)} className="w-full text-center block bg-verba-terracotta text-white font-bold py-3 px-5 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                Request a Quote
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;