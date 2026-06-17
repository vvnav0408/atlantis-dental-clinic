import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldPlus, Sparkles, Stethoscope, Syringe, Crown } from 'lucide-react';

const specialties = [
  { 
    title: 'Orthodontics', 
    icon: Activity,
    description: 'Straighten your teeth and correct your bite with advanced clear aligners and modern braces for a perfect, confident smile.'
  },
  { 
    title: 'Dental Implants', 
    icon: Syringe,
    description: 'Permanent, natural-looking tooth replacements that restore full functionality, aesthetics, and structural integrity to your jaw.'
  },
  { 
    title: 'Cosmetic Dentistry', 
    icon: Sparkles,
    description: 'Enhance the visual appeal of your smile with premium porcelain veneers, composite bonding, and professional teeth whitening.'
  },
  { 
    title: 'Pediatric Dentistry', 
    icon: ShieldPlus,
    description: 'Gentle, anxiety-free dental care tailored specifically for children to ensure a lifetime of healthy habits and strong teeth.'
  },
  { 
    title: 'Root Canal Treatment', 
    icon: Stethoscope,
    description: 'Painless endodontic therapy designed to save infected teeth, eliminate severe pain, and prevent the need for extractions.'
  },
  { 
    title: 'General Dentistry', 
    icon: Crown,
    description: 'Comprehensive oral care including routine cleanings, thorough checkups, durable fillings, and preventive maintenance.'
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Our Dental Specialties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col p-8 group"
              >
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 leading-tight">{spec.title}</h4>
                </div>
                
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
