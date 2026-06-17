import React from 'react';

const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-blue-600">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6 bg-white/5 p-4 rounded-2xl w-max">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-blue-500">
                <path d="M12 20.32l-1.396-2.58C9.263 15.26 8.607 13.91 7.985 13.16 7.362 12.41 6.54 12 5.5 12c-1.93 0-3.5-1.57-3.5-3.5 0-2.48 2.015-4.5 4.5-4.5 1.517 0 2.87.75 3.666 1.905.474.686 1.05 1.095 1.834 1.095.783 0 1.36-.408 1.835-1.095C14.63 4.75 15.984 4 17.5 4 19.985 4 22 6.02 22 8.5c0 1.93-1.57 3.5-3.5 3.5-1.04 0-1.862.41-2.486 1.16-.622.748-1.278 2.096-2.618 4.578L12 20.32z" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-lg text-white tracking-wide">ATLANTIS</span>
                <span className="text-[9px] font-bold text-green-400 tracking-[0.2em]">DENTAL CLINIC</span>
              </div>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Premium dental care tailored for your perfect smile. Experience world-class treatment in our state-of-the-art facility.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <TwitterIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Clinic</a></li>
              <li><a href="#doctors" className="hover:text-blue-400 transition-colors">Our Specialists</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Facility Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Patient Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Root Canal Treatment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pediatric Dentistry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Atlantis Dental Clinic,<br/>Kizhavana Road, Panampilly Nagar,<br/>Kochi, Kerala, India</li>
              <li>[Update Phone Number]</li>
              <li>[Update Email Address]</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Atlantis Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
