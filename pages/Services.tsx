
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShieldCheck, Microscope, HeartPulse, ClipboardCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return <Eye size={32} />;
      case 'ShieldCheck': return <ShieldCheck size={32} />;
      case 'Microscope': return <Microscope size={32} />;
      case 'HeartPulse': return <HeartPulse size={32} />;
      case 'ClipboardCheck': return <ClipboardCheck size={32} />;
      default: return <Eye size={32} />;
    }
  };

  return (
    <div className="bg-slate-50">
      <section className="bg-teal-600 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services & Treatments</h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
            Advanced diagnostic and surgical eye care solutions designed for precision and optimal patient recovery.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, index) => (
              <div 
                id={service.id} 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 scroll-mt-24 transition-all hover:shadow-2xl ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description} 
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our team utilizes cutting-edge ophthalmic tools to ensure the highest standard of care. Whether you are coming in for a routine check-up or complex surgery, we focus on your comfort and long-term ocular health.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-teal-600/20 active:scale-95">
                      Book Appointment
                    </Link>
                    <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3.5 rounded-full font-bold transition-all">
                      View Pricing
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs or Extra Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-500">Everything you need to know about our treatments.</p>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-xl font-bold mb-3 text-slate-900">How long does cataract surgery take?</h4>
              <p className="text-slate-600 leading-relaxed">Most cataract procedures are outpatient and typically take between 15 to 30 minutes. Recovery is usually quick, with vision improving significantly within a few days.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Do you offer free eye exams?</h4>
              <p className="text-slate-600 leading-relaxed">We conduct regular community outreach programs where basic eye screenings are provided free of charge. For clinical diagnostic exams at the hospital, we offer sliding scale fees based on patient circumstances.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
