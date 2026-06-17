import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, Activity, Sparkles, Syringe, Heart, Shield, PlusCircle, ArrowRight } from 'lucide-react';

const services = [
  { icon: Activity, name: 'Root Canal Treatment', description: 'Painless and efficient care to save infected teeth.' },
  { icon: Smile, name: 'Pediatric Dentistry', description: 'Gentle care designed for children\'s healthy smiles.' },
  { icon: Shield, name: 'Dental Implants', description: 'Permanent, natural-looking replacement for missing teeth.' },
  { icon: Sparkles, name: 'Teeth Whitening', description: 'Professional whitening for a brighter, radiant smile.' },
  { icon: PlusCircle, name: 'Dentures', description: 'Fixed and removable high-quality dentures.' },
  { icon: Heart, name: 'Braces & Aligners', description: 'Orthodontic solutions including invisible aligners.' },
  { icon: Stethoscope, name: 'Cosmetic Dentistry', description: 'Veneers and treatments for your perfect smile.' },
  { icon: Syringe, name: 'Gum & Laser Treatment', description: 'Advanced laser therapy for healthy gums.' },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Our Premium Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{service.name}</h4>
                  <p className="text-slate-600 mb-8 group-hover:text-blue-100 transition-colors flex-grow">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-white transition-colors mt-auto">
                    Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
