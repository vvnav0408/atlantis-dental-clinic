import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b",
      scrolled ? "bg-white/95 py-4 shadow-sm border-gray-100" : "bg-white/80 py-6 border-transparent"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <a href="#" className="flex items-center">
          <img src="/images/logo.jpg" alt="Atlantis Dental Clinic Logo" className="h-10 md:h-12 w-auto mix-blend-multiply" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#services" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#doctors" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">Doctors</a>
          <a href="#gallery" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">Gallery</a>
          <a href="#contact" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
          <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-green-600/30 hover:bg-green-700 hover:-translate-y-0.5 transition-all text-center">
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 flex flex-col items-center gap-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700 w-full text-center py-2">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700 w-full text-center py-2">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700 w-full text-center py-2">About</a>
          <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700 w-full text-center py-2">Doctors</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700 w-full text-center py-2">Gallery</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700 w-full text-center py-2">Contact</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-green-600 text-white px-6 py-3 mt-2 rounded-full font-semibold w-3/4 shadow-lg shadow-green-600/30 text-center block">
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
