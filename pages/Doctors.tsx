
import React from 'react';
import { DOCTORS } from '../constants';
import { Mail, Phone, Calendar } from 'lucide-react';

const Doctors: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Medical Team</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated professionals leading the way in restorative eye care and ophthalmology in Rwanda.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {DOCTORS.map((doctor) => (
              <div key={doctor.id} className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-96 overflow-hidden relative">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{doctor.name}</h3>
                  <div className="text-teal-600 font-semibold mb-4 text-sm uppercase tracking-widest">{doctor.specialization}</div>
                  <p className="text-slate-600 leading-relaxed mb-8">{doctor.bio}</p>
                  
                  <div className="flex justify-center gap-4">
                    <button className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                      <Mail size={20} />
                    </button>
                    <button className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                      <Phone size={20} />
                    </button>
                    <button className="px-6 py-3 bg-teal-600 text-white rounded-full font-bold flex items-center gap-2 text-sm hover:bg-teal-700 transition-colors">
                      <Calendar size={18} /> Book Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Committed to Continuous Learning</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Our medical staff participates in international eye health conferences and regular clinical workshops to bring the latest global innovations to Rwanda.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 filter grayscale brightness-200">
            {/* Logo Placeholders for medical associations */}
             <div className="text-2xl font-bold italic">WHO PARTNER</div>
             <div className="text-2xl font-bold italic">ICO CERTIFIED</div>
             <div className="text-2xl font-bold italic">RBC MEMBER</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
