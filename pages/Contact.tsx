
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consultation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: 'Consultation', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Contact Banner */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Reach out to book an appointment or learn more about our charity programs. We are here to help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Our Location</h4>
                    <p className="text-slate-600">Unnamed Road, Runda, Rwanda</p>
                    <p className="text-slate-400 text-sm mt-1 uppercase tracking-tighter">Code: 2XJC+Q4 Runda</p>
                    <button className="mt-4 text-teal-600 font-bold text-sm flex items-center gap-2 hover:underline">
                       <Navigation size={16} /> Get Directions
                    </button>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Phone Number</h4>
                    <p className="text-slate-600 text-xl font-medium">0782 256 252</p>
                    <p className="text-slate-400 text-sm mt-1">Mon - Fri: 8 AM - 5 PM</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Website</h4>
                    <p className="text-slate-600">rceyehospital.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-xl aspect-video relative group">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" alt="Map View" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                   <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                      <MapPin className="text-teal-600" />
                      <div className="text-sm font-bold text-slate-900">Open in Google Maps</div>
                   </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
               {submitted && (
                <div className="absolute inset-0 z-20 bg-teal-600 text-white flex flex-center items-center justify-center p-12 text-center">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Send size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Booking Request Received!</h3>
                    <p className="text-xl opacity-90">We'll contact you shortly to confirm your appointment time.</p>
                  </div>
                </div>
              )}
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="jane@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="078X XXX XXX" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Reason for Visit</label>
                    <select 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Consultation</option>
                      <option>Cataract Surgery</option>
                      <option>Eye Exam</option>
                      <option>Laser Treatment</option>
                      <option>Pediatric Care</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message / Notes</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your symptoms or questions..." 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-teal-600/20 transition-all flex items-center justify-center gap-3">
                  <Send size={20} /> Submit Booking Request
                </button>
                <p className="text-center text-slate-400 text-sm mt-6">
                  We respect your privacy. Your clinical data is always secure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
