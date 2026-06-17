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
              <img src="/images/logo.jpg" alt="Atlantis Dental Clinic Logo" className="h-10 w-auto mix-blend-screen shrink-0" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-xl leading-none tracking-tight">Atlantis</span>
                <span className="text-green-400 text-[10px] font-bold tracking-[0.15em] uppercase mt-1 leading-none">Dental Clinic</span>
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
              <li>08848832050</li>
              <li>info@atlantisdental.in</li>
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
