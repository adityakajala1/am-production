import React, { useState } from 'react';
import { ShieldCheck, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CLIENTS_PARTNERS_DATA, EVENTS_DATA } from '../data/siteData';

interface ClientsPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Brands', 'Sponsors', 'Venues', 'Artists', 'Production Partners'];

  const filteredClients = CLIENTS_PARTNERS_DATA.filter((c) => {
    if (selectedCategory === 'ALL') return true;
    return c.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-3">
          ECOSYSTEM OF EXCELLENCE
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-['Syne']">
          CLIENTS & PARTNERS
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto mt-4">
          Trusted by Fortune 500 enterprises, legendary artists, and leading international audio manufacturers.
        </p>
      </section>

      {/* Filter Tabs */}
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

      {/* Logos Wall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredClients.map((partner) => (
            <div
              key={partner.id}
              className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#e73213]/40 transition-all group"
            >
              <span className="text-lg sm:text-xl font-black font-mono tracking-wider text-white group-hover:text-[#e73213] transition-colors">
                {partner.logoText}
              </span>
              <span className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                {partner.subtext}
              </span>
              <span className="text-[10px] font-mono text-[#e73213] bg-[#e73213]/10 px-2 py-0.5 rounded mt-3">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED CASE STUDIES */}
      <section className="py-20 bg-[#07070b] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-2">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              FEATURED PARTNER CASE STUDIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <span className="text-xs font-mono text-[#e73213] uppercase font-bold">CASE STUDY 01</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                Bacardi Live & Nexus Bass Festival
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Engineered custom kinetic brand activation zones, 360-degree LED towers, and high-volume festival bars handling 45,000 attendees over two nights with zero network or power latency.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Attendance: 45,000+</span>
                <button 
                  onClick={() => onNavigate('event-detail', { eventId: 'ev-1' })}
                  className="text-[#e73213] font-bold uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
                >
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <span className="text-xs font-mono text-[#e73213] uppercase font-bold">CASE STUDY 02</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                Lumina Tech Global Beachfront Gala
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Constructed an unprecedented over-water transparent glass stage in Goa with high-wind rated canopy systems, architectural mapping on seaside palms, and high-security protocol for Fortune 500 CXOs.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Delegates: 2,500 CXOs</span>
                <button 
                  onClick={() => onNavigate('event-detail', { eventId: 'ev-4' })}
                  className="text-[#e73213] font-bold uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
                >
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with us CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
            BECOME A PRODUCTION PARTNER OR SPONSOR
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Discover sponsorship integration and stage hardware collaboration opportunities across our upcoming 2025/2026 tour calendar.
          </p>
          <button
            onClick={() => onNavigate('plan-event')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] cursor-pointer shadow-lg shadow-[#e73213]/25"
          >
            CONNECT WITH PARTNERSHIPS DESK
          </button>
        </div>
      </section>
    </div>
  );
};
