import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Clinic & Equipment', 'Happy Patients', 'Before & After'];

const galleryImages = [
  { id: 1, src: '/images/2.jpg', category: 'Clinic & Equipment' },
  { id: 2, src: '/images/3.jpg', category: 'Clinic & Equipment' },
  { id: 3, src: '/images/7.jpg', category: 'Clinic & Equipment' },
  { id: 4, src: '/images/9.jpg', category: 'Clinic & Equipment' },
  { id: 5, src: '/images/16.jpg', category: 'Happy Patients' },
  { id: 6, src: '/images/17.jpg', category: 'Happy Patients' },
  { id: 7, src: '/images/18.jpg', category: 'Happy Patients' },
  { id: 8, src: '/images/5.jpg', category: 'Before & After' },
  { id: 9, src: '/images/6.jpg', category: 'Before & After' },
  { id: 10, src: '/images/8.jpg', category: 'Before & After' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('Clinic & Equipment');

  const filteredImages = galleryImages.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Our Facility</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Take a Look Inside</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden aspect-square shadow-md"
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
