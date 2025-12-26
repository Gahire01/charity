
import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-white py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-1 text-yellow-400 mb-6">
            <Star size={32} fill="currentColor" />
            <Star size={32} fill="currentColor" />
            <Star size={32} fill="currentColor" />
            <Star size={32} fill="currentColor" />
            <Star size={32} fill="currentColor" className="opacity-40" />
            <span className="text-slate-900 text-3xl font-bold ml-4">4.5 / 5.0</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Patient Testimonials</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from the patients whose lives have been changed by our dedicated medical team.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                <MessageSquareQuote size={40} className="text-teal-100 mb-4" />
                <div className="flex text-yellow-400 gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-slate-200"} />
                  ))}
                </div>
                <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{review.author}</div>
                      <div className="text-slate-400 text-xs">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-teal-600 text-xs font-bold bg-teal-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                    <CheckCircle2 size={12} /> Verified Patient
                  </div>
                </div>
              </div>
            ))}
            
            {/* Additional Placeholders for density */}
            {[4, 5, 6, 7].map((i) => (
              <div key={i} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                <MessageSquareQuote size={40} className="text-teal-100 mb-4" />
                <div className="flex text-yellow-400 gap-1 mb-6">
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                </div>
                <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">
                  "The doctors and nurses are incredibly patient and professional. I recommend Rwanda Charity Eye Hospital to anyone needing quality care."
                </p>
                <div className="flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Patient {i}</div>
                      <div className="text-slate-400 text-xs">Recently</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write a review CTA */}
      <section className="py-24 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
           <h2 className="text-4xl font-bold mb-6">Share Your Experience</h2>
           <p className="text-xl text-teal-100 mb-10 opacity-90 leading-relaxed">
             Help others find the care they need by leaving a review of your experience at Rwanda Charity Eye Hospital.
           </p>
           <button className="bg-white text-teal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
              Write a Review
           </button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
