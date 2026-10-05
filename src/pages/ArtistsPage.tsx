import React, { useState } from 'react';
import { Filter, ArrowUpRight, Music, MapPin, Headphones } from 'lucide-react';
import { ARTISTS_DATA } from '../data/siteData';

interface ArtistsPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const ArtistsPage: React.FC<ArtistsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'DJs', 'Singers', 'Bands', 'Rappers', 'Musicians', 'Performers'];

  const filteredArtists = ARTISTS_DATA.filter((art) => {
    if (selectedCategory === 'ALL') return true;
    return art.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-3">
          PERFORMER ROSTER & PARTNERS
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-['Syne']">
          OUR ARTISTS
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto mt-4">
          Direct representation, global booking connections, and turnkey hospitality for the world’s top stage performers.
        </p>
      </section>

      {/* Category Filter Bar */}
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

      {/* Artists Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              onClick={() => onNavigate('artist-detail', { artistId: artist.id })}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#e73213]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#e73213] border border-white/10 font-bold">
                      {artist.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#e73213] transition-colors font-['Syne']">
                      {artist.name}
                    </h3>
                    <p className="text-xs text-neutral-300 font-mono mt-0.5">
                      {artist.genre}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                    {artist.bio}
                  </p>

                  <div className="text-xs font-mono text-neutral-400 border-t border-white/10 pt-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Origin / Base:</span>
                      <span className="text-white">{artist.location}</span>
                    </div>
                    {artist.monthlyListeners && (
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-500">Reach:</span>
                        <span className="text-[#e73213] font-bold">{artist.monthlyListeners}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-2 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">
                  Performances: {artist.notablePerformances.length}
                </span>
                <span className="text-[#e73213] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Profile <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#170a1a] via-[#0a0a10] to-[#0c131a]">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              SEEKING AN EXCLUSIVE HEADLINER FOR YOUR EVENT?
            </h3>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Our artist talent division coordinates contracts, tech riders, private transit, and VIP stage protocols for global acts.
            </p>
          </div>
          <button
            onClick={() => onNavigate('plan-event')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] shrink-0 hover:opacity-95 shadow-xl shadow-[#e73213]/25 cursor-pointer"
          >
            ENQUIRE ARTIST BOOKING
          </button>
        </div>
      </section>
    </div>
  );
};
