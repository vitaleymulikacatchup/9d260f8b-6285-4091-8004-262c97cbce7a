import React, { useState } from 'react';
import { Menu, X, ChevronDown, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a href="#web-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Web Development
                  </a>
                  <a href="#mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Mobile Development
                  </a>
                  <a href="#support" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Support and Maintenance
                  </a>
                </div>
              )}
            </div>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-gray-900 font-medium">
              Contacts
            </a>
          </nav>

          {/* Rating and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-800 font-bold text-xs">C</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-500">Based on 6 Clutch reviews</span>
            <button className="btn-primary">
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium">
                Portfolio
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-gray-900 font-medium">
                Contacts
              </a>
              <button className="btn-primary w-full mt-4">
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;