import React from 'react';
import { 
  ArrowLeft, ArrowUpRight, Music, MapPin, 
  Sparkles, Calendar, CheckCircle2, Play, Radio 
} from 'lucide-react';
import { ARTISTS_DATA, EVENTS_DATA } from '../data/siteData';

interface ArtistDetailPageProps {
  artistId: string;
  onNavigate: (page: string, params?: any) => void;
}

export const ArtistDetailPage: React.FC<ArtistDetailPageProps> = ({ artistId, onNavigate }) => {
  const artist = ARTISTS_DATA.find((a) => a.id === artistId) || ARTISTS_DATA[0];
  const relatedEvents = EVENTS_DATA.filter((e) => 
    artist.featuredEvents.includes(e.id) || e.artists.includes(artist.name)
  );

  return (
    <div className="pt-20 pb-24 min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => onNavigate('artists')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Artists
        </button>
      </div>

      {/* Large Artist Hero */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={artist.bannerImage || artist.photo} 
            alt={artist.name} 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/75 to-[#060608]/20"></div>
          <div className="absolute inset-0 bg-radial-stage opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-black/70 backdrop-blur-md text-[#e73213] border border-[#e73213]/40 font-bold">
                {artist.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md text-white border border-white/15">
                {artist.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase font-['Syne'] leading-tight">
              {artist.name}
            </h1>

            <p className="text-lg sm:text-2xl text-neutral-300 font-mono">
              {artist.genre}
            </p>

            {artist.monthlyListeners && (
              <div className="text-xs sm:text-sm font-mono text-[#e73213] font-bold">
                ★ {artist.monthlyListeners}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bio & Booking Box */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block">
                ARTIST PROFILE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
                BIOGRAPHY
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed">
                {artist.bio}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                AM PRODUCTION oversees technical rider compliance, high-resolution visual package syncing, and specialized monitoring systems tailored to this artist’s tour requirements.
              </p>
            </div>

            {/* Notable Performances */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight font-['Syne']">
                Notable Headline Shows & Festival Appearances
              </h3>
              <div className="space-y-2">
                {artist.notablePerformances.map((perf, pIdx) => (
                  <div key={pIdx} className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <Music className="w-4 h-4 text-[#e73213] shrink-0" />
                    <span>{perf}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight font-['Syne']">
                Live Performance Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {artist.gallery.map((img, i) => (
                  <div key={i} className="relative h-60 rounded-xl overflow-hidden border border-white/10 group">
                    <img src={img} alt={`${artist.name} live`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Booking CTA Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="glass-panel p-8 rounded-3xl border border-[#e73213]/30 bg-gradient-to-br from-[#180a18] to-[#09090f] shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest font-bold">
                  TALENT BOOKING & ADVANCING
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight font-['Syne']">
                  BOOK {artist.name}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Inquire about tour dates, corporate shows, college headliners, and festival appearances.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e73213]" />
                  <span>Direct booking liaison & contract execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e73213]" />
                  <span>Full tech rider & backline supply</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e73213]" />
                  <span>VIP airport, hotel & green room hospitality</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('plan-event', { artistName: artist.name })}
                  className="w-full py-4 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] hover:opacity-95 shadow-xl shadow-[#e73213]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  BOOK THIS ARTIST
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] font-mono text-neutral-500 text-center">
                * Redirects to our multi-step event enquiry and quote engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events with this Artist */}
      {relatedEvents.length > 0 && (
        <section className="py-16 bg-[#07070b] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-8 font-['Syne']">
              Shows & Festivals Produced for {artist.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedEvents.map((rev) => (
                <div
                  key={rev.id}
                  onClick={() => onNavigate('event-detail', { eventId: rev.id })}
                  className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center justify-between group cursor-pointer hover:border-[#e73213]/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={rev.thumbnail || rev.heroImage} 
                      alt={rev.title} 
                      className="w-16 h-16 rounded-xl object-cover shrink-0" 
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white uppercase group-hover:text-[#e73213] transition-colors">
                        {rev.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">
                        {rev.date} • {rev.location}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
