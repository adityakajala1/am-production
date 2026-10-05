import React from 'react';
import { 
  Calendar, MapPin, Users, Clock, Shield, ArrowLeft, 
  ArrowUpRight, Play, CheckCircle2, Sparkles, Image as ImageIcon 
} from 'lucide-react';
import { EVENTS_DATA } from '../data/siteData';

interface EventDetailPageProps {
  eventId: string;
  onNavigate: (page: string, params?: any) => void;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({ eventId, onNavigate }) => {
  const event = EVENTS_DATA.find((e) => e.id === eventId) || EVENTS_DATA[0];

  return (
    <div className="pt-20 pb-24 min-h-screen">
      {/* Back Button Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => onNavigate('events')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Events
        </button>
      </div>

      {/* =========================================================================
          HERO: Large full-screen event image, Event Name, Date, Location, Category
         ========================================================================= */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={event.heroImage} 
            alt={event.title} 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/70 to-[#060608]/20"></div>
          <div className="absolute inset-0 bg-radial-stage opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-black/70 backdrop-blur-md text-[#e73213] border border-[#e73213]/40 font-bold">
                {event.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md text-white border border-white/15">
                STATUS: {event.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase font-['Syne'] leading-tight">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-mono text-neutral-300 pt-2">
              <span className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-[#e73213]" /> {event.date}
              </span>
              <span className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#e73213]" /> {event.venue}, {event.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EVENT HIGHLIGHTS / STATS STRIP
         ========================================================================= */}
      <section className="border-y border-white/10 bg-[#0a0a0f] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-white/5 last:border-0">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">AUDIENCE</span>
              <span className="text-xl sm:text-3xl font-extrabold text-white font-mono mt-1 block">{event.stats.audience}</span>
            </div>
            <div className="border-r border-white/5 last:border-0">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">DURATION</span>
              <span className="text-xl sm:text-3xl font-extrabold text-white font-mono mt-1 block">{event.stats.duration}</span>
            </div>
            <div className="border-r border-white/5 last:border-0">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">ARTISTS ON STAGE</span>
              <span className="text-xl sm:text-3xl font-extrabold text-white font-mono mt-1 block">{event.stats.artistsCount}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">PRODUCTION CREW</span>
              <span className="text-xl sm:text-3xl font-extrabold text-[#e73213] font-mono mt-1 block">{event.stats.crewSize}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT THE EVENT & PERFORMING ARTISTS
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* About Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block">
              PRODUCTION BRIEF
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              ABOUT THE EVENT
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              {event.fullDescription}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every detail—from acoustic predictive raytracing and transient delay towers to emergency medical command protocols—was engineered in-house by AM PRODUCTION to ensure an electrifying yet safe live music environment.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#e73213] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-white font-mono">Structural Engineering</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">High-wind velocity certified mainstage trusses and canopy load ratings.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#e73213] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-white font-mono">Audio Purity</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Uniform SPL coverage with zero deadzones and sub-bass beam steering.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performing Artists Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block">
              TALENT ON STAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              FEATURED ARTISTS
            </h2>
            
            <div className="space-y-3">
              {event.artists.map((artistName) => (
                <div 
                  key={artistName}
                  className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between hover:border-[#e73213]/40 transition-colors cursor-pointer group"
                  onClick={() => onNavigate('artists')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center font-bold text-white text-xs font-mono">
                      {artistName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase group-hover:text-[#e73213] transition-colors">
                        {artistName}
                      </h4>
                      <span className="text-[11px] text-neutral-400 font-mono">Headliner / Live Performer</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>

            {/* Quick Quote box */}
            <div className="glass-panel p-6 rounded-2xl border border-[#e73213]/30 bg-gradient-to-br from-[#1a0a14] to-[#09090f] mt-8">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">
                Want a Stage of this Scale?
              </h4>
              <p className="text-neutral-400 text-xs mb-4">
                Bring our concert sound arrays, staging rigs, and master crew to your upcoming tour or festival.
              </p>
              <button
                onClick={() => onNavigate('plan-event')}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] cursor-pointer shadow-lg shadow-[#e73213]/20"
              >
                REQUEST PRODUCTION ESTIMATE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GALLERY & VISUAL HIGHLIGHTS
         ========================================================================= */}
      <section className="py-20 bg-[#07070b] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-1">
              PHOTO ARCHIVES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              EVENT GALLERY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {event.gallery.map((imgUrl, i) => (
              <div 
                key={i} 
                className="relative h-72 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
              >
                <img 
                  src={imgUrl} 
                  alt={`${event.title} shot ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VIDEO / AFTERMOVIE EMBED
         ========================================================================= */}
      {event.videoUrl && (
        <section className="py-20 bg-[#09090e] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center max-w-xl mx-auto">
              <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-1">
                CINEMATIC REEL
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
                LIVE AFTERMOVIE & EVENT FOOTAGE
              </h2>
              <p className="text-neutral-400 text-sm mt-2">
                Witness the live energy, crowd reaction, and stage production in high-definition motion.
              </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-black aspect-video">
              <video
                src={event.videoUrl}
                poster={event.thumbnail || event.heroImage}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          BEHIND THE SCENES / PRODUCTION RIG
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-1">
            CREW & RIGGING ACCESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
            BEHIND THE SCENES & PRODUCTION
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mt-2">
            A glimpse into the engineering that powers the magic: front of house consoles, load-ins, and laser calibration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {event.behindTheScenes.map((btsUrl, idx) => (
            <div key={idx} className="relative h-72 rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src={btsUrl} 
                alt="Behind the scenes production" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-mono text-neutral-300">
                  Engineering Phase {idx + 1}: Live Load-In & Audio Alignment
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SPONSORS & PARTNERS
         ========================================================================= */}
      <section className="py-16 bg-[#08080c] border-y border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-4">
            EVENT BRAND SPONSORS & TECH PARTNERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {event.sponsors.map((sp) => (
              <span key={sp} className="font-mono text-sm sm:text-base font-bold text-neutral-400 uppercase tracking-widest">
                {sp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA: PLAN YOUR EVENT WITH AM PRODUCTION
         ========================================================================= */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-panel p-10 sm:p-16 rounded-3xl border border-white/10 relative overflow-hidden bg-gradient-to-t from-[#140818] via-[#09090e] to-[#07070a]">
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-['Syne']">
              PLAN YOUR EVENT WITH <br />
              <span className="text-[#e73213]">AM PRODUCTION</span>
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
              Ready to create an arena spectacle that commands the spotlight? Let's engineer your stage, sound, and visual environment.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('plan-event')}
                className="px-9 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] shadow-2xl shadow-[#e73213]/40 cursor-pointer hover:opacity-95"
              >
                PLAN YOUR EVENT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
