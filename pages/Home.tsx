
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Heart, Users, ShieldCheck } from 'lucide-react';
import { SERVICES, REVIEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
            alt="Hospital background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 px-4 py-2 rounded-full text-teal-300 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Open – Closes at 5 PM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Compassionate Eye Care for <span className="text-teal-400">All.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
              Rwanda Charity Eye Hospital is dedicated to providing high-quality vision restoration and specialized treatments to transform lives across Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-teal-600/20 flex items-center justify-center gap-2 group">
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                Contact Hospital
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Patient" />
                ))}
              </div>
              <div>
                <div className="flex items-center text-yellow-400 gap-1">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" className="opacity-50" />
                  <span className="text-white font-bold ml-2">4.5</span>
                </div>
                <p className="text-slate-400 text-sm">(37 Google Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-b-4 border-teal-500 group">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eye Treatments</h3>
              <p className="text-slate-600 mb-6">From routine check-ups to complex surgeries, we use modern technology for optimal results.</p>
              <Link to="/services" className="text-teal-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-b-4 border-blue-500 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Experienced Doctors</h3>
              <p className="text-slate-600 mb-6">Our board-certified ophthalmologists have decades of collective clinical and surgical experience.</p>
              <Link to="/doctors" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Meet the Team <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-b-4 border-pink-500 group">
              <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
              <p className="text-slate-600 mb-6">As a charity hospital, we dedicate resources to vision restoration for those in need.</p>
              <Link to="/about" className="text-pink-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Our Mission <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Mini) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-teal-600 font-bold tracking-widest uppercase mb-4">Our Specializations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Care for Every Eye</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide a comprehensive range of ophthalmic services, combining advanced clinical practices with a patient-first approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-3xl">
                <img src={service.image} alt={service.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-slate-300 mb-4 line-clamp-2">{service.description}</p>
                  <Link to={`/services#${service.id}`} className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-white transition-colors">
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3 rounded-full font-bold transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-24 bg-teal-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Restoring Vision, One Patient at a Time</h2>
              <p className="text-xl text-teal-50 mb-12 leading-relaxed opacity-90">
                Our charity programs have helped thousands of Rwandans regain their sight and their livelihoods. We believe vision care is a fundamental human right.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-bold mb-2">15k+</div>
                  <div className="text-teal-100 font-medium opacity-80 uppercase tracking-wider text-sm">Surgeries Performed</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">20+</div>
                  <div className="text-teal-100 font-medium opacity-80 uppercase tracking-wider text-sm">Expert Staff</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">4.5</div>
                  <div className="text-teal-100 font-medium opacity-80 uppercase tracking-wider text-sm">Patient Rating</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-teal-100 font-medium opacity-80 uppercase tracking-wider text-sm">Patient Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop" alt="Doctor treating patient" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                       <Clock className="text-teal-600" />
                    </div>
                    <div>
                       <div className="text-slate-900 font-bold">Quick Check-ups</div>
                       <div className="text-slate-500 text-sm">Average 15 min wait time</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                       <ShieldCheck className="text-blue-600" />
                    </div>
                    <div>
                       <div className="text-slate-900 font-bold">Safety First</div>
                       <div className="text-slate-500 text-sm">Certified clinical protocols</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Mini) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-teal-600 font-bold uppercase tracking-widest mb-4">Patient Stories</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Our Patients Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="flex text-yellow-400 gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 uppercase">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{review.author}</div>
                    <div className="text-slate-400 text-sm">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews" className="text-teal-600 font-bold hover:underline">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Prioritize Your Vision?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule an appointment today and experience professional eye care from Rwanda's leading charity eye hospital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
              Book Your Appointment
            </Link>
            <Link to="/contact" className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
