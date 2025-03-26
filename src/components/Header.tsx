'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm py-4 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-primary">
            Buildoras
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#about" className="font-medium text-dark-gray hover:text-primary transition-colors">About</a></li>
              <li><a href="#websites" className="font-medium text-dark-gray hover:text-primary transition-colors">Websites</a></li>
              <li><a href="#apps" className="font-medium text-dark-gray hover:text-primary transition-colors">Web Apps</a></li>
              <li><a href="#mobile" className="font-medium text-dark-gray hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#ai" className="font-medium text-dark-gray hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#rescue" className="font-medium text-dark-gray hover:text-primary transition-colors">Project Rescue</a></li>
              <li><a href="#support" className="font-medium text-dark-gray hover:text-primary transition-colors">Support</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <a href="#contact" className="cta-primary">Get Started</a>
          </div>
          
          <button 
            className="block md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        />

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="font-bold text-2xl text-primary">
                Buildoras
              </Link>
              <button 
                onClick={closeMenu}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="space-y-4">
              <a href="#about" className="block py-2 text-dark-gray hover:text-primary transition-colors" onClick={closeMenu}>About</a>
              <a href="#websites" className="block py-2 text-dark-gray hover:text-primary transition-colors" onClick={closeMenu}>Websites</a>
              <a href="#apps" className="block py-2 text-dark-gray hover:text-primary transition-colors" onClick={closeMenu}>Web Apps</a>
              <a href="#mobile" className="block py-2 text-dark-gray hover:text-primary transition-colors" onClick={closeMenu}>Mobile Apps</a>
              <a href="#ai" className="block py-2 text-dark-gray hover:text-primary transition-colors" onClick={closeMenu}>AI Solutions</a>
              <a href="#rescue" className="block py-2 text-dark-gray hover:text-primary transition-colors" onClick={closeMenu}>Project Rescue</a>
              <a href="#support" className="block py-2 text-dark-gray hover:text-primary transition-colors" onClick={closeMenu}>Support</a>
            </nav>

            <div className="mt-8">
              <a href="#contact" className="cta-primary w-full text-center block" onClick={closeMenu}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 