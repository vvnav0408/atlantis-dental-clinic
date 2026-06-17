import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
              A Premium Smile <br className="hidden md:block"/>
              <span className="text-blue-600">Worth Trusting.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Experience world-class dental care in a serene, state-of-the-art environment. Our experts combine advanced technology with a gentle touch to craft your perfect smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-800 hover:-translate-y-0.5 transition-all text-center block">
                Book Appointment
              </a>
              <a href="#services" className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all text-center">
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="/images/2.jpg" 
              alt="Premium Dental Clinic" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-green-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900">Top Rated</p>
                <p className="text-sm text-slate-500">5.0 ★ (200+ Reviews)</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
