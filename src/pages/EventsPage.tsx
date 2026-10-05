import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, ArrowUpRight, Filter, Users } from 'lucide-react';
import { EVENTS_DATA } from '../data/siteData';

interface EventsPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const categories = ['ALL', 'CONCERTS', 'MUSIC FESTIVALS', 'COLLEGE EVENTS', 'CORPORATE', 'OTHER'];
  const statusFilters = ['ALL', 'Upcoming', 'Past'];

  const filteredEvents = EVENTS_DATA.filter((ev) => {
    const matchesCat = selectedCategory === 'ALL' || ev.category === selectedCategory;
    const matchesStat = selectedStatus === 'ALL' || ev.status === selectedStatus;
    return matchesCat && matchesStat;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-3">
          PORTFOLIO ARCHIVE
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-['Syne']">
          OUR EVENTS
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto mt-4">
          From intimate live shows to massive festival experiences.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-neutral-500 mr-2 hidden sm:inline flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#e73213] text-white font-bold shadow-md shadow-[#e73213]/30'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-4">
            <span className="text-xs font-mono uppercase text-neutral-500 mr-1">
              Timeline:
            </span>
            {statusFilters.map((stat) => (
              <button
                key={stat}
                onClick={() => setSelectedStatus(stat)}
                className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedStatus === stat
                    ? 'bg-white text-black font-bold'
                    : 'bg-white/5 text-neutral-400 hover:text-white'
                }`}
              >
                {stat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              onClick={() => onNavigate('event-detail', { eventId: ev.id })}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#e73213]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ev.heroImage}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/15">
                      {ev.category}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider font-bold ${
                      ev.status === 'Upcoming' ? 'bg-[#e73213] text-white' : 'bg-white/20 text-neutral-200'
                    }`}>
                      {ev.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-[#e73213]">
                      <Calendar className="w-3.5 h-3.5" /> {ev.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {ev.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#e73213] transition-colors leading-snug">
                    {ev.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                    {ev.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {ev.artists.map((artist) => (
                      <span key={artist} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10">
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">
                  Capacity: <strong className="text-white">{ev.stats.audience}</strong>
                </span>
                <span className="text-[#e73213] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Detail <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-20 text-center glass-panel rounded-2xl border border-white/10">
            <p className="text-neutral-400 text-base">No events found matching this filter criteria.</p>
            <button
              onClick={() => { setSelectedCategory('ALL'); setSelectedStatus('ALL'); }}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Production Enquiries Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#120a17] via-[#09090e] to-[#0a1219] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              HOSTING A CONCERT OR FESTIVAL?
            </h3>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              From site surveying and sound propagation maps to turnkey stage builds, let our master producers consult on your next big event.
            </p>
          </div>
          <button
            onClick={() => onNavigate('plan-event')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] shrink-0 hover:opacity-95 shadow-xl shadow-[#e73213]/25 cursor-pointer"
          >
            PLAN YOUR EVENT
          </button>
        </div>
      </section>
    </div>
  );
};
