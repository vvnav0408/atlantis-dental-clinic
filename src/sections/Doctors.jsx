import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Award, ShieldPlus } from 'lucide-react';

const doctors = [
  { 
    name: 'Dr. John Doe', 
    qualification: 'BDS, MDS - Orthodontics', 
    specialty: 'Chief Orthodontist', 
    description: 'Expert in advanced orthodontic treatments and clear aligner therapies, dedicated to creating perfect smiles.',
    icon: ShieldPlus
  },
  { 
    name: 'Dr. Jane Smith', 
    qualification: 'BDS, MDS - Periodontics', 
    specialty: 'Implantologist', 
    description: 'Specializes in pain-free dental implants and comprehensive gum care with over a decade of clinical experience.',
    icon: Stethoscope
  },
  { 
    name: 'Dr. Robert Davis', 
    qualification: 'BDS, MDS - Pedodontics', 
    specialty: 'Pediatric Dentist', 
    description: 'Focused on providing gentle, stress-free comprehensive dental care for children in a friendly environment.',
    icon: Award
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Meet The Team</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Our Dental Specialists</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col p-6"
              >
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h4>
                    <p className="text-blue-600 font-medium text-sm">{doc.specialty}</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    {doc.qualification}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {doc.description}
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
