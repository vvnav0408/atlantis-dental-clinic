import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '229+', label: '5-Star Reviews' },
  { value: '8+', label: 'Years of Excellence' },
  { value: '1000+', label: 'Happy Patients' },
];

export default function Stats() {
  return (
    <section className="bg-white border-y border-slate-100 relative z-20 -mt-10 mx-6 md:mx-auto max-w-5xl rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="py-10 px-6 text-center bg-white"
          >
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-blue-600 mb-2">{stat.value}</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
