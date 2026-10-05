import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Share2, Radio, Globe } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface FooterProps {
  onNavigate: (page: string, params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050507] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./am_logo_white.png"
                alt="AM Production Logo"
                className="h-10 w-auto object-contain drop-shadow"
              />
              <div>
                <span className="font-extrabold text-xl tracking-wider text-[#efe6d5] brand-font block leading-tight">
                  AM PRODUCTION
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#9dbeb7] block font-mono">
                  Akash Makana Production
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Creating Experiences. Producing Memories. India’s premier concert, festival and nightlife production house delivering arena-grade audio, kinetic lighting, and monumental stage environments.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-2.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e73213] shrink-0" />
                Chennai, Tamil Nadu (Nungambakkam & Citywide)
              </p>
              <a href="tel:9940435886" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#9dbeb7] shrink-0" />
                +91 99404 35886
              </a>
              <a href="mailto:akashmakana2983@gmail.com" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#9dbeb7] shrink-0" />
                akashmakana2983@gmail.com
              </a>
              <a 
                href="https://www.instagram.com/am_production26/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-[#e73213] hover:text-[#efe6d5] transition-colors group font-mono"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#e73213] group-hover:scale-110 transition-transform" />
                <span className="font-semibold tracking-wide">@am_production26</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[#efe6d5] text-xs font-bold uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button 
                  onClick={() => { onNavigate('events'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  All Events Showcase
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Production Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('artists'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Artist Roster & Booking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Visual & Backstage Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('venue-partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Venue Partners (LOTD, Secret Story, Living Room)
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-[#efe6d5] text-xs font-bold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button 
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  About AM PRODUCTION
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('testimonials'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('plan-event'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#e73213] font-semibold transition-colors cursor-pointer"
                >
                  Request Production Quote
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Direct Contact & Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('privacy-policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('terms-conditions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#efe6d5] transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Enquiry Card */}
          <div className="space-y-4">
            <h4 className="text-[#efe6d5] text-xs font-bold uppercase tracking-wider">
              Direct Enquiry
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ready to engineer your next arena tour, nightclub takeover, or flagship festival?
            </p>
            <button
              onClick={() => {
                onNavigate('plan-event');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#d02c0f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#e73213]/25"
            >
              PLAN YOUR EVENT
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="pt-2 flex items-center gap-2.5">
              <a 
                href="https://www.instagram.com/am_production26/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#e73213] hover:bg-[#e73213]/10 transition-all"
                aria-label="Instagram @am_production26"
                title="Follow AM PRODUCTION on Instagram (@am_production26)"
              >
                <InstagramIcon className="w-4 h-4 text-[#e73213]" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#efe6d5] hover:border-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Radio className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#efe6d5] hover:border-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} AM PRODUCTION. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { onNavigate('privacy-policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button 
              onClick={() => { onNavigate('terms-conditions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button 
              onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
