import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm py-4 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-primary">
            Yusstech
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#websites" className="font-medium text-dark-gray hover:text-primary transition-colors">Websites</a></li>
              <li><a href="#apps" className="font-medium text-dark-gray hover:text-primary transition-colors">Web Apps</a></li>
              <li><a href="#mobile" className="font-medium text-dark-gray hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#ai" className="font-medium text-dark-gray hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#rescue" className="font-medium text-dark-gray hover:text-primary transition-colors">Project Rescue</a></li>
            </ul>
          </nav>
          
          <div>
            <a href="#contact" className="cta-primary">Get Started</a>
          </div>
          
          <button className="block md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 