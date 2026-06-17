import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Appointment requested successfully!');
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-20 lg:mb-24">
          <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Contact Us</h2>
        </div>

        {/* Reduced Gap Container */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">

          {/* Appointment Form Card */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 lg:p-16">
            <div className="text-center md:text-left mb-10">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3">Request an Appointment</h3>
              <p className="text-slate-600">We will get back to you within 24 hours to confirm your visit.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <input
                    {...register('name', { required: true })}
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1">Name is required</span>}
                </div>
                <div>
                  <input
                    {...register('phone', { required: true })}
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                  {errors.phone && <span className="text-red-500 text-sm mt-1">Phone is required</span>}
                </div>
              </div>
              <div>
                <select
                  {...register('service')}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-600"
                >
                  <option value="">Select Service</option>
                  <option value="General">General Consultation</option>
                  <option value="Cosmetic">Cosmetic Dentistry</option>
                  <option value="Orthodontics">Braces & Aligners</option>
                  <option value="Implants">Dental Implants</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors text-lg mt-4">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center md:text-left relative z-10">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 relative z-10">
              <div className="flex gap-5">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 h-fit"><MapPin size={28} /></div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-2 text-lg">Visit Us</h5>
                  <p className="text-slate-600 leading-relaxed">Atlantis Dental Clinic,<br />Kizhavana Road,<br />Atlantis,Ravipuram Jn,Kochi, Kerala, India<br /></p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-green-50 p-4 rounded-2xl text-green-600 h-fit"><Clock size={28} /></div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-2 text-lg">Open Hours</h5>
                  <p className="text-slate-600 leading-relaxed">Mon-Sat: 9:00 AM - 6:00 PM<br />Sun: Closed</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 h-fit"><Phone size={28} /></div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-2 text-lg">Call Us</h5>
                  <p className="text-slate-600 leading-relaxed">08848832050</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-green-50 p-4 rounded-2xl text-green-600 h-fit"><Mail size={28} /></div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-2 text-lg">Email Us</h5>
                  <p className="text-slate-600 leading-relaxed">[Update Email Address]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] border-4 border-white">
            <iframe
              src="https://maps.google.com/maps?q=Atlantis+Dental+Clinic,+Kizhavana+Road,+Panampilly+Nagar,+Kochi,+Kerala,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
