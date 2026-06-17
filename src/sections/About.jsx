import React from 'react';
import { motion } from 'framer-motion';
import { Award, Laptop, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">A Higher Standard of Care</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <div className="w-20 h-20 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
              <Award size={40} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Expert Doctors</h4>
            <p className="text-slate-600 leading-relaxed">
              Our team of specialized professionals brings years of expertise to handle complex and routine cases alike with precision and care.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center px-4"
          >
            <div className="w-20 h-20 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
              <Laptop size={40} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Modern Equipment</h4>
            <p className="text-slate-600 leading-relaxed">
              We use state-of-the-art diagnostic and treatment tools ensuring precise, painless procedures and superior clinical outcomes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center px-4"
          >
            <div className="w-20 h-20 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
              <Users size={40} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Patient-First Approach</h4>
            <p className="text-slate-600 leading-relaxed">
              Your comfort is our priority. Enjoy a serene, premium environment designed to make your visits stress-free and relaxing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
