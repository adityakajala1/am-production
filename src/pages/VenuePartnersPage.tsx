import React, { useState } from 'react';
import { MapPin, Sparkles, ArrowUpRight, Music2, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EVENTS_DATA } from '../data/siteData';

interface VenuePartnersPageProps {
  onNavigate: (page: string, params?: any) => void;
}

interface VenueItem {
  id: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  image: string;
  capacity: string;
  vibe: string;
  features: string[];
  regularNights: string;
}

export const VenuePartnersPage: React.FC<VenuePartnersPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'CLUBS' | 'LOUNGES'>('ALL');

  const venues: VenueItem[] = [
    {
      id: 'lotd',
      name: 'LORD OF THE DRINKS',
      tagline: 'Flagship Nightlife & Saturday Takeover Partner',
      location: 'Nungambakkam, Chennai',
      description: 'Chennai’s premier high-energy club destination featuring massive footfall, signature Bollywood Takeover nights, VIP table tiers, and arena-grade acoustic setups produced by AM PRODUCTION.',
      image: '/media/lotd_reel_2_thumb.jpg',
      capacity: '1,200+ Guests',
      vibe: 'High-Energy Bollywood, Commercial & Club Anthems',
      features: [
        'Weekly Saturday Bollywood Takeovers produced by AM PRODUCTION',
        'Pioneer CDJ-3000 & DJM-A9 concert DJ consoles',
        'Intelligent DMX moving beam fixtures & laser show choreography',
        'Cryogenic CO2 jet cannons & cold pyrotechnic fountains',
        'Exclusive VIP table zones and concierge management'
      ],
      regularNights: 'Every Saturday Night & Special Holiday Blowouts'
    },
    {
      id: 'secret-story',
      name: 'SECRET STORY CHENNAI',
      tagline: 'High-Energy Bar, Kitchen & Nightlife Destination',
      location: 'Nungambakkam / Central Chennai',
      description: 'An eclectic, premium nightlife venue renowned for opulent interiors, handcrafted cocktail energy, curated music lineups, and high-octane weekend crowd turnouts.',
      image: '/media/lotd_reel_3_thumb.jpg',
      capacity: '800+ Guests',
      vibe: 'Bespoke Club Commercial, Deep Beats & Experiential Party Vibe',
      features: [
        'Curated DJ guest showcases & live artist curation',
        'Balanced multi-zone sound distribution for dancefloor and lounge areas',
        'Atmospheric LED ambient washes & intelligent mood lighting',
        'VIP table bottle services and custom event branding activations'
      ],
      regularNights: 'Weekend Residencies & Spotlight Nights'
    },
    {
      id: 'living-room',
      name: 'LIVING ROOM CHENNAI',
      tagline: 'Premier Lounge, High-End Nightlife & Party Spot',
      location: 'Anna Nagar / Central Chennai',
      description: 'Chennai’s celebrated luxury nightlife spot delivering a vibrant party crowd, state-of-the-art sound systems, and pulse-pounding DJ residencies engineered in partnership with AM PRODUCTION.',
      image: '/media/chennai_club_night_thumb.jpg',
      capacity: '700+ Guests',
      vibe: 'Commercial Hits, Bollywood Remixes & Urban Club Energy',
      features: [
        'Resident & headline DJ advancing and stage management',
        'Precision acoustic bass tuning and crystal-clear vocals',
        'Dynamic LED bar backdrops and intelligent lighting sync',
        'Dedicated VIP sections and red-carpet guest entries'
      ],
      regularNights: 'Fridays, Saturdays & Festive Afterparties'
    },
    {
      id: 'hard-rock-cafe',
      name: 'HARD ROCK CAFE CHENNAI',
      tagline: 'Legendary Live Music Stage & Concert Partner',
      location: 'Nungambakkam, Chennai',
      description: 'The world-famous rock and live entertainment institution hosting electrifying fusion nights, touring bands, retro specials, and commercial club takeovers.',
      image: '/media/lotd_reel_1_thumb.jpg',
      capacity: '850+ Guests',
      vibe: 'Rock Anthems, Retro Bollywood & Live Stage Concerts',
      features: [
        'Full concert live stage rig with multi-track audio balancing',
        'Touring band backline advancing and sound engineering',
        'Concert strobe lighting & haze atmosphere',
        'Custom themed event decor and merchandise integration'
      ],
      regularNights: 'Friday Prime Live Nights & Weekend Rock Fests'
    }
  ];

  const filteredVenues = venues.filter((v) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'CLUBS') return v.capacity.includes('1,200') || v.capacity.includes('800');
    return true;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#9dbeb7]/20 text-[11px] font-mono text-[#9dbeb7] uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e73213]"></span>
          PARTNER NETWORK • CHENNAI & SOUTH INDIA
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
          Venue <span className="text-[#e73213] font-black">Partners</span>
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          AM PRODUCTION collaborates with Chennai's most iconic nightclubs, lounges, and live entertainment stages to deliver unparalleled sound, lighting, and nightlife experiences.
        </p>
      </section>

      {/* Venues Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredVenues.map((venue, idx) => (
          <div
            key={venue.id}
            className="glass-panel rounded-3xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-[#e73213]/40 transition-all duration-300 group"
          >
            {/* Image section */}
            <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/90 via-[#060608]/30 to-transparent"></div>
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white uppercase tracking-wider font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#e73213]" />
                {venue.location}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-[#9dbeb7] uppercase tracking-wider block">Capacity</span>
                <span className="text-base font-bold text-white uppercase">{venue.capacity}</span>
              </div>
            </div>

            {/* Content section */}
            <div className={`lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest font-semibold block mb-1">
                    {venue.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    {venue.name}
                  </h2>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  {venue.description}
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#9dbeb7]">Sound & Crowd Vibe:</div>
                  <div className="text-xs font-medium text-neutral-200">{venue.vibe}</div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Production & Amenities:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {venue.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e73213] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-neutral-400">
                  <span className="text-[#9dbeb7] block">Residency Schedule:</span>
                  <span className="text-white font-medium">{venue.regularNights}</span>
                </div>
                <button
                  onClick={() => {
                    onNavigate('plan-event');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#d02c0f] transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#e73213]/25"
                >
                  Plan Event At Venue
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Partner With Us CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest font-semibold block">
            VENUE COLLABORATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
            Host AM PRODUCTION At Your Venue
          </h3>
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            Own or operate a club, lounge, or live stage in Chennai? Partner with AM PRODUCTION to elevate your weekend footfall with turnkey audio engineering, intelligent lighting, and headline DJ curation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#d02c0f] cursor-pointer shadow-lg shadow-[#e73213]/25"
            >
              Contact Venue Partnerships
            </button>
            <a
              href="tel:9940435886"
              className="px-6 py-3 rounded-lg text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
            >
              Call: +91 99404 35886
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
