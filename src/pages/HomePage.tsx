import React from 'react';
import { 
  ArrowUpRight, Calendar, MapPin, ChevronRight, 
  ArrowRight, Star, Music2, Radio, Layers, Volume2, Sparkles
} from 'lucide-react';
import { 
  EVENTS_DATA, ARTISTS_DATA, SERVICES_DATA, 
  COMPANY_STATS, TESTIMONIALS_DATA, CLIENTS_PARTNERS_DATA, GALLERY_DATA 
} from '../data/siteData';

interface HomePageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredEvent = EVENTS_DATA[0]; // Nexus Bass Festival
  const showcaseEvents = EVENTS_DATA.slice(0, 4);
  const featuredArtists = ARTISTS_DATA.slice(0, 4);
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const galleryPreview = GALLERY_DATA.slice(0, 6);
  const clientLogos = CLIENTS_PARTNERS_DATA.slice(0, 8);

  return (
    <div className="relative">
      {/* =========================================================================
          1. HERO SECTION (Cinematic, Ultra-Legible, Real Nightlife Production Video)
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Real Live Event Video Background with Crisp Contrast */}
        <div className="absolute inset-0 z-0">
          <video 
            src="./media/lotd_reel_2.mp4" 
            poster="./media/lotd_reel_2_thumb.jpg"
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-40 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0e]/95 via-[#0a0b0e]/80 to-[#0a0b0e]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#9dbeb7]/20 text-[11px] tracking-widest text-[#9dbeb7] mb-6 uppercase font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e73213]"></span>
            AM PRODUCTION • LIVE & NIGHTLIFE PRODUCTIONS
          </div>

          {/* Headline - Minimal, Refined, High-Impact */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.1] mb-5">
            We Create Experiences <br className="hidden sm:inline" />
            That People <span className="text-[#e73213] font-black">Remember.</span>
          </h1>

          {/* Supporting Text - Concise & Minimal */}
          <p className="text-sm sm:text-base text-neutral-300 font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            Concerts, festivals & nightlife experiences engineered with high-impact sound, lighting and creative direction.
          </p>

          {/* Action CTAs - Clear, Elegant, Distinct */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('plan-event');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#e01648] active:bg-[#c40e3b] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#e73213]/20"
            >
              <span>PLAN YOUR EVENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onNavigate('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>EXPLORE EVENTS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED / UPCOMING EVENT (Editorial-style, Large Format)
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block mb-1">
              FLAGSHIP SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              FEATURED UPCOMING EVENT
            </h2>
          </div>
          <button
            onClick={() => onNavigate('events')}
            className="text-xs uppercase tracking-wider font-semibold text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            All Events <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12 group hover:border-white/20 transition-all duration-300">
          {/* Big Editorial Image */}
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] overflow-hidden">
            <img 
              src={featuredEvent.heroImage} 
              alt={featuredEvent.title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80"></div>
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white uppercase tracking-wider font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {featuredEvent.category} • {featuredEvent.status}
            </div>
          </div>

          {/* Editorial Details */}
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-[#0b0b10]">
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-[#e73213] font-semibold">
                    <Calendar className="w-3.5 h-3.5" /> {featuredEvent.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {featuredEvent.location}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-snug">
                  {featuredEvent.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {featuredEvent.shortDescription}
                </p>
              </div>

              {/* Headline Artists */}
              <div className="border-t border-white/10 pt-4 space-y-2.5">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Headline Artists:
                </div>
                <div className="flex flex-wrap gap-2">
                  {featuredEvent.artists.map((artist) => (
                    <span 
                      key={artist}
                      className="px-2.5 py-1 rounded bg-white/[0.06] border border-white/10 text-xs text-neutral-300 font-medium"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs">
                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider">ATTENDEES</span>
                  <span className="text-white font-bold text-base mt-0.5 block">{featuredEvent.stats.audience}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider">DURATION</span>
                  <span className="text-white font-bold text-base mt-0.5 block">{featuredEvent.stats.duration}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('event-detail', { eventId: featuredEvent.id })}
                className="w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#e01648] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#e73213]/20"
              >
                VIEW EVENT DETAILS
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE DO (Six Service Cards)
         ========================================================================= */}
      <section className="py-20 bg-[#07070a] relative border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block mb-2">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              WHAT WE DO
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2.5">
              Precision event architecture engineered for maximum sound clarity, visual impact, and crowd safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div 
                key={service.id}
                onClick={() => onNavigate('services', { serviceId: service.id })}
                className="glass-panel glass-panel-hover p-7 rounded-xl cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-[#e73213] font-bold tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-white/20 transition-colors">
                      {service.id === 'srv-1' && <Music2 className="w-4 h-4" />}
                      {service.id === 'srv-2' && <Radio className="w-4 h-4" />}
                      {service.id === 'srv-3' && <Calendar className="w-4 h-4" />}
                      {service.id === 'srv-4' && <Layers className="w-4 h-4" />}
                      {service.id === 'srv-5' && <Volume2 className="w-4 h-4" />}
                      {service.id === 'srv-6' && <Sparkles className="w-4 h-4" />}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#e73213] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs uppercase tracking-wider text-neutral-400 group-hover:text-white font-medium">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e73213] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all cursor-pointer"
            >
              View All 10 Production Services
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EVENTS SHOWCASE
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block mb-1">
              PORTFOLIO ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              EVENTS SHOWCASE
            </h2>
          </div>
          <button
            onClick={() => onNavigate('events')}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 transition-all cursor-pointer"
          >
            View All Events & Tours
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {showcaseEvents.map((ev, idx) => (
            <div 
              key={ev.id}
              onClick={() => onNavigate('event-detail', { eventId: ev.id })}
              className={`glass-panel rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-white/20 transition-all duration-300 ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${idx === 0 ? 'h-80 sm:h-96' : 'h-64 sm:h-72'}`}>
                <img 
                  src={ev.heroImage} 
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/40 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded text-[11px] uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/15 font-medium">
                    {ev.category}
                  </span>
                  <span className="px-2.5 py-1 rounded text-[11px] uppercase tracking-wider bg-[#e73213] text-white font-bold">
                    {ev.status}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-3 bg-[#0a0a0e]">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 text-[#e73213] font-semibold">
                    <Calendar className="w-3.5 h-3.5" /> {ev.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {ev.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#e73213] transition-colors">
                  {ev.title}
                </h3>
                <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
                  {ev.shortDescription}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/[0.06] text-xs">
                  <span className="text-neutral-400">
                    Audience: <strong className="text-white">{ev.stats.audience}</strong>
                  </span>
                  <span className="text-[#e73213] font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Event <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. STATISTICS SECTION
         ========================================================================= */}
      <section className="py-16 bg-[#07070a] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {COMPANY_STATS.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-4xl sm:text-6xl font-black text-white brand-font tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#e73213]">
                  {stat.label}
                </div>
                <p className="text-xs text-neutral-400 hidden sm:block max-w-[200px] mx-auto mt-1">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FEATURED ARTISTS
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block mb-1">
              ROSTER & NETWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              FEATURED ARTISTS
            </h2>
          </div>
          <button
            onClick={() => onNavigate('artists')}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 transition-all cursor-pointer"
          >
            VIEW ALL ARTISTS
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtists.map((artist) => (
            <div 
              key={artist.id}
              onClick={() => onNavigate('artist-detail', { artistId: artist.id })}
              className="glass-panel rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img 
                  src={artist.photo} 
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-90"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded text-[10px] uppercase tracking-wider bg-black/80 backdrop-blur-md text-neutral-200 border border-white/15 font-medium">
                    {artist.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#e73213] transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {artist.genre}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#0a0a0e] border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
                <span>{artist.location}</span>
                <span className="text-[#e73213] font-semibold uppercase tracking-wider flex items-center gap-1">
                  Profile <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. WHY AM PRODUCTION
         ========================================================================= */}
      <section className="py-20 bg-[#07070a] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block">
                THE PRODUCTION ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                WHY LEADING PROMOTERS CHOOSE AM PRODUCTION
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                We combine creative stage scenography with rigorous structural and acoustic engineering. Every fixture, decibel parameter, and cue is managed with zero compromise.
              </p>

              <button
                onClick={() => onNavigate('plan-event')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#e01648] transition-all cursor-pointer shadow-md shadow-[#e73213]/20"
              >
                PLAN YOUR EVENT
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {[
                {
                  title: 'End-to-End Production',
                  desc: 'From initial 3D stage CAD rendering to site striking, generator grids, and crowd flow containment.'
                },
                {
                  title: 'Creative Direction',
                  desc: 'Turning raw concepts into monumental visual landscapes with audio-reactive visuals and kinetic lighting.'
                },
                {
                  title: 'Professional Execution & Safety',
                  desc: 'Structural engineer wind-load signoffs, TÜV-certified rigging, and uninterrupted backup power grids.'
                },
                {
                  title: 'Artist & Production Network',
                  desc: 'Direct access to international booking agencies, top tier backline suppliers, and A-list sound engineers.'
                },
                {
                  title: 'Audience Experience',
                  desc: 'We design every millimeter around the attendee: pristine sightlines, tactile bass punch, and zero bottle-necks.'
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-xl border border-white/[0.06] hover:border-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-[#e73213] mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. EVENT EXPERIENCE SECTION
         ========================================================================= */}
      <section className="relative py-24 overflow-hidden flex items-center justify-center text-center">
        {/* Real Experience Atmosphere Video/Photo */}
        <div className="absolute inset-0 z-0">
          <video 
            src="./media/chennai_club_night.mp4" 
            poster="./media/chennai_club_night_thumb.jpg"
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-30 filter contrast-125"
          />
          <div className="absolute inset-0 bg-[#060608]/85"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold">
            EXPERIENCE AMPLIFIED
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            MORE THAN AN EVENT. <br />
            <span className="text-neutral-300">AN EXPERIENCE.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Live music is a shared collective ritual. We construct the physical and sensory platforms where thousands connect and create memories that outlive the final chord.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('gallery')}
              className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 transition-all cursor-pointer"
            >
              EXPLORE OUR PHOTO ARCHIVES
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. GALLERY & REELS PREVIEW
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block mb-1">
              LIVE FROM THE DANCEFLOOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              REELS & CLUB PRODUCTION PREVIEW
            </h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 transition-all cursor-pointer"
          >
            VIEW ALL REELS & HIGHLIGHTS
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryPreview.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => onNavigate('gallery')}
              className={`relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 ${
                index === 0 ? 'md:col-span-2 h-64 sm:h-80' : 'h-64 sm:h-80'
              }`}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5">
                <span className="text-[10px] text-[#e73213] uppercase tracking-wider font-bold">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white uppercase mt-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          10. VENUE PARTNERS (Lord of the Drinks, Secret Story, Living Room, Hard Rock)
         ========================================================================= */}
      <section className="py-16 bg-[#07070a] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block mb-2 font-mono">
            CHENNAI NIGHTLIFE RESIDENCIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-4">
            OUR PREMIER VENUE PARTNERS
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
            Powering sound systems, intelligent lighting, and packed weekend crowds across Chennai’s most celebrated clubs and lounges.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {clientLogos.map((client) => (
              <div 
                key={client.id}
                onClick={() => onNavigate('venue-partners')}
                className="glass-panel p-5 rounded-xl border border-white/[0.06] flex flex-col items-center justify-center text-center hover:border-[#e73213]/40 transition-all cursor-pointer group"
              >
                <span className="text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-[#e73213] transition-colors">
                  {client.logoText}
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider mt-0.5">
                  {client.subtext}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              onNavigate('venue-partners');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#e73213]/40 transition-all cursor-pointer"
          >
            <span>Explore All Venue Residencies</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#e73213]" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          11. TESTIMONIALS
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold block mb-1">
              WORDS FROM THE STAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              TESTIMONIALS
            </h2>
          </div>
          <button
            onClick={() => onNavigate('testimonials')}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 transition-all cursor-pointer"
          >
            VIEW ALL REVIEWS
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="glass-panel p-7 rounded-xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div className="space-y-4">
                <div className="flex text-[#e73213] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e73213]" />
                  ))}
                </div>
                <blockquote className="text-neutral-300 text-sm leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-neutral-400">
                    {item.position} • {item.companyOrEvent}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          12. FINAL CALL TO ACTION
         ========================================================================= */}
      <section className="py-24 bg-[#08080c] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#e73213] font-semibold">
            LET'S WORK TOGETHER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            LET'S CREATE SOMETHING UNFORGETTABLE.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
            Planning a concert, festival or large-scale event? Let's bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                onNavigate('plan-event');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#e01648] transition-all cursor-pointer shadow-lg shadow-[#e73213]/20"
            >
              PLAN YOUR EVENT
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
