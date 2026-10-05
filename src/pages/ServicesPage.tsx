import React from 'react';
import { 
  Music2, Radio, CalendarCheck, Layers, Zap, 
  MonitorPlay, Sparkles, Camera, Coffee, ShieldCheck, 
  ArrowUpRight, Check, CheckCircle2 
} from 'lucide-react';
import { SERVICES_DATA, EVENTS_DATA } from '../data/siteData';

interface ServicesPageProps {
  onNavigate: (page: string, params?: any) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music2': return <Music2 className="w-6 h-6 text-[#e73213]" />;
      case 'Radio': return <Radio className="w-6 h-6 text-[#e73213]" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-[#e73213]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#e73213]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#e73213]" />;
      case 'MonitorPlay': return <MonitorPlay className="w-6 h-6 text-[#e73213]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#e73213]" />;
      case 'Camera': return <Camera className="w-6 h-6 text-[#e73213]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#e73213]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#e73213]" />;
      default: return <Sparkles className="w-6 h-6 text-[#e73213]" />;
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-3">
          FULL-SPECTRUM CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-['Syne']">
          WE PRODUCE EXPERIENCES.
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
          From acoustic engineering and monumental stage builds to high-level artist logistics, explore our comprehensive technical production divisions.
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES_DATA.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={srv.id} 
              id={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                selectedServiceId === srv.id ? 'ring-2 ring-[#e73213] rounded-3xl p-6 bg-white/[0.02]' : ''
              }`}
            >
              {/* Media Visual */}
              <div className={`lg:col-span-6 relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-[460px] border border-white/10 group ${
                isEven ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <img 
                  src={srv.coverImage} 
                  alt={srv.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono text-[#e73213] font-bold">
                  AM PRODUCTION • DIVISION {srv.number}
                </div>
              </div>

              {/* Text Info */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getIcon(srv.icon)}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                      SERVICE {srv.number}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
                    {srv.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-[#e73213] uppercase tracking-wider">
                    {srv.tagline}
                  </p>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {srv.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                    Key Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {srv.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#e73213] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Highlights */}
                <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1 text-xs font-mono text-neutral-400">
                  <span className="text-white font-bold block uppercase tracking-wider">
                    Hardware & Rigging Highlights:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {srv.equipmentHighlights.map((eq, eIdx) => (
                      <span key={eIdx} className="bg-white/5 px-2.5 py-1 rounded text-[11px] text-neutral-300 border border-white/10">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('plan-event')}
                    className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] hover:opacity-95 shadow-lg shadow-[#e73213]/25 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    BOOK THIS SERVICE
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {srv.relatedEvents.length > 0 && (
                    <button
                      onClick={() => onNavigate('event-detail', { eventId: srv.relatedEvents[0] })}
                      className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                    >
                      View Live Case Study
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 text-center space-y-6 bg-gradient-to-t from-[#14081a] via-[#09090e] to-[#060608]">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
            NEED A CUSTOM TURNKEY PRODUCTION PACKAGE?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            We handle everything from initial festival site acoustic design to strike down and cleanup. Request a custom quote today.
          </p>
          <div>
            <button
              onClick={() => onNavigate('plan-event')}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] cursor-pointer shadow-xl shadow-[#e73213]/30"
            >
              PLAN YOUR EVENT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
