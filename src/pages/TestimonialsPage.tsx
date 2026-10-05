import React, { useState } from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

interface TestimonialsPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Clients', 'Artists', 'Event Organizers', 'Brand Partners'];

  const filtered = TESTIMONIALS_DATA.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-3">
          INDUSTRY ACCLAIM
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-['Syne']">
          TESTIMONIALS
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto mt-4">
          Unfiltered feedback from festival promoters, arena tour managers, international DJs, and corporate brand leaders.
        </p>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#e73213] to-[#9dbeb7] text-white font-bold shadow-lg shadow-[#e73213]/30'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Testimonials Editorial Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-[#e73213]/40 transition-all space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#e73213] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#e73213]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 bg-white/5 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#e73213]/40" />

                <blockquote className="text-neutral-200 text-base sm:text-lg leading-relaxed italic">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h4 className="text-base font-bold text-white uppercase font-['Syne']">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    {item.position}
                  </p>
                  <p className="text-xs text-[#e73213] font-mono mt-0.5">
                    {item.companyOrEvent}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
            READY TO JOIN OUR ROSTER OF SUCCESSFUL PRODUCTIONS?
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Experience first-class live event planning, acoustic excellence, and flawless stage execution with AM PRODUCTION.
          </p>
          <button
            onClick={() => onNavigate('plan-event')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] cursor-pointer shadow-lg shadow-[#e73213]/25"
          >
            PLAN YOUR EVENT
          </button>
        </div>
      </section>
    </div>
  );
};
