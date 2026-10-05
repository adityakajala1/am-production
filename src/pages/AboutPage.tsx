import React from 'react';
import { 
  ArrowUpRight, Shield, Zap, Sparkles, HeartHandshake, 
  Layers, CheckCircle2, Award 
} from 'lucide-react';
import { COMPANY_STATS, COMPANY_TEAM } from '../data/siteData';

interface AboutPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-3">
          ORIGIN & DNA
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-['Syne']">
          ABOUT AM PRODUCTION
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
          Architects of massive sensory live entertainment. We conceive, engineer, and operate the platforms where music makes history.
        </p>
      </section>

      {/* WHO WE ARE & OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              Pioneering Live Show Production Across the Subcontinent
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Founded on the relentless obsession with crystal acoustic clarity and monumental visual scenography, AM PRODUCTION has grown into one of the country’s most trusted full-service concert and music festival production companies.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              From open-air multi-day festivals hosting over 45,000 music lovers to national arena tours for progressive rock and electronic artists, our engineers and show directors live on the frontlines of high-decibel live entertainment.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('plan-event')}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] hover:opacity-95 shadow-lg shadow-[#e73213]/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                PLAN YOUR EVENT WITH US
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 h-80 sm:h-[450px]">
            <img 
              src="/media/lotd_reel_4_thumb.jpg" 
              alt="AM PRODUCTION Stage & Pyro Setup" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest font-bold">ESTABLISHED WITH A MISSION</span>
                <h4 className="text-xl font-bold text-white uppercase mt-1">Creating Experiences. Producing Memories.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH: 5 Steps */}
      <section className="py-20 bg-[#07070b] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-2">
              SYSTEMATIC PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              OUR APPROACH
            </h2>
            <p className="text-neutral-400 text-sm mt-2">
              A military-grade execution blueprint designed for zero downtime and peak adrenaline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Concept', desc: 'Creative moodboards, 3D scenography sketches & sound zoning calculations.' },
              { num: '02', title: 'Planning', desc: 'Permits, structural engineering wind tests, rider checks & logistics.' },
              { num: '03', title: 'Production', desc: 'Truss load-in, generator grids, LED rigging & acoustic soundvision tuning.' },
              { num: '04', title: 'Execution', desc: 'Timecode show calling, grandMA lighting cues, pyro and live broadcast.' },
              { num: '05', title: 'Experience', desc: '45,000 euphoric attendees experiencing an unforgettable live spectacle.' },
            ].map((st) => (
              <div key={st.num} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#e73213]/40 transition-colors">
                <span className="text-xl font-black font-mono text-[#e73213] block mb-2">
                  {st.num}
                </span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-2">
            CORE PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
            OUR VALUES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: 'Creativity', desc: 'Pushing stage architecture into sculptured art forms.' },
            { title: 'Precision', desc: 'Surgical decibel calibration and millimeter truss accuracy.' },
            { title: 'Energy', desc: 'High-octane passion infused into every single cue and drop.' },
            { title: 'Professionalism', desc: 'Integrity in contracts, safety standards, and client trust.' },
            { title: 'Experience', desc: 'Every decision revolves around the human in the audience.' },
          ].map((val, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/5 mx-auto flex items-center justify-center text-[#e73213] font-mono font-bold text-xs">
                ★
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-tight">{val.title}</h4>
              <p className="text-xs text-neutral-400">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="py-20 bg-[#0a0a10] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-2">
              QUANTIFIABLE RECORD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
              OUR NUMBERS
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {COMPANY_STATS.map((stat, i) => (
              <div key={i} className="space-y-1">
                <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 font-['Syne']">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#e73213] font-bold block">
                  {stat.label}
                </span>
                <p className="text-xs text-neutral-400 mt-1">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR LEADERSHIP TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-2">
            EXPERTS BEHIND THE CURTAIN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Syne']">
            OUR LEADERSHIP TEAM
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Decades of combined festival touring, live mixing, and stage engineering leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_TEAM.map((member, mIdx) => (
            <div key={mIdx} className="glass-panel rounded-2xl overflow-hidden border border-white/10 group">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-[#e73213] uppercase block">
                  {member.role}
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
