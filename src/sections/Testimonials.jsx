import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MoreVertical, ExternalLink } from 'lucide-react';
import { fetchGoogleReviews } from '../services/googleReviews';

export default function Testimonials() {
  const [reviewData, setReviewData] = useState({ reviews: [], rating: 5, user_ratings_total: 0 });
  const [status, setStatus] = useState('LOADING');

  useEffect(() => {
    async function getReviews() {
      const data = await fetchGoogleReviews();
      setReviewData({
        reviews: data.reviews || [],
        rating: data.rating || 5,
        user_ratings_total: data.user_ratings_total || 0
      });
      setStatus(data.status);
    }
    getReviews();
  }, []);

  const getAvatarColor = (name) => {
    const colors = ['bg-orange-600', 'bg-purple-600', 'bg-green-600', 'bg-blue-600', 'bg-red-600'];
    const charCode = name.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-[#1a3673] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-green-400 font-bold uppercase tracking-[0.2em] text-sm mb-3">PATIENT REVIEWS</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10">Google Reviews</h2>
          
          {/* Rating Display */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-5xl font-bold text-white leading-none">{reviewData.rating.toFixed(1)}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
            </div>
            <p className="text-blue-200 text-sm flex items-center gap-2">
              Based on {reviewData.user_ratings_total} Google reviews
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-blue-200 text-[10px]">i</span>
            </p>
          </div>

          <a 
            href="https://www.google.com/maps/place/Atlantis+Dental+Clinic/@9.955815,76.2925229,17z/data=!4m8!3m7!1s0x3b0873341f458633:0x4b169a192ef08d36!8m2!3d9.955815!4d76.2925229!9m1!1b1!16s%2Fg%2F11lwm4r2tm?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-slate-800 font-semibold px-8 py-3 rounded-full flex items-center gap-3 hover:bg-slate-50 transition-colors shadow-lg"
          >
            <GoogleLogo />
            <span>Read more reviews on Google</span>
            <ExternalLink size={16} className="text-slate-400" />
          </a>
        </div>

        {/* Reviews Grid / Mobile Carousel */}
        {status === 'LOADING' ? (
          <div className="text-center py-12 text-blue-200">Loading verified Google reviews...</div>
        ) : (
          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar">
            {reviewData.reviews.slice(0, 3).map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 flex flex-col justify-between min-w-[320px] md:min-w-0 snap-center shadow-xl shadow-blue-900/20"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${getAvatarColor(review.author_name)} flex items-center justify-center text-white font-bold text-xl`}>
                        {review.author_name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{review.author_name}</h4>
                        <p className="text-slate-500 text-xs">{review.relative_time_description}</p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating || 5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-6 line-clamp-4">
                    {review.text}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-6 border-t border-slate-100">
                  <GoogleLogo />
                  <span className="text-slate-500 text-xs font-medium">via Google</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
