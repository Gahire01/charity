
import React from 'react';
import { Target, Heart, Shield, History, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="Hospital interior" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Mission & Vision</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Restoring sight and transforming lives through compassionate care and surgical excellence in the heart of Runda.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-teal-600 font-bold uppercase tracking-widest mb-4">Overview</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Dedicated to Ocular Excellence Since Our Inception</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Rwanda Charity Eye Hospital was founded with a singular purpose: to make specialized eye care accessible to every citizen, regardless of their financial standing. Based in Runda, we have grown into a center of excellence for ophthalmic surgery and treatment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We combine the latest medical technology with a heart for community service, ensuring that our patients receive world-class outcomes in a warm, compassionate environment.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Compassion</h4>
                    <p className="text-slate-500 text-sm">Treating every patient with dignity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Professionalism</h4>
                    <p className="text-slate-500 text-sm">Meeting international medical standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop" alt="Hospital equipment" className="rounded-3xl shadow-2xl relative z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-600/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Target className="text-teal-600 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Accessibility</h4>
              <p className="text-slate-600">Removing barriers to specialized eye care for underserved populations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Globe className="text-teal-600 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Integrity</h4>
              <p className="text-slate-600">Transparency in all our clinical and charitable operations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <History className="text-teal-600 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Excellence</h4>
              <p className="text-slate-600">Continuously improving our techniques and surgical outcomes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="text-teal-600 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Community</h4>
              <p className="text-slate-600">Building a healthier future for the families of Rwanda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Focus */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-teal-50 rounded-full text-teal-600 mb-8">
              <Heart size={48} fill="currentColor" className="opacity-20" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Charity & Support</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              A significant portion of our operations is funded through generous donations and global partnerships. This allows us to offer free cataract surgeries and vision check-ups to those living in extreme poverty.
            </p>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
               <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Outreach program" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
