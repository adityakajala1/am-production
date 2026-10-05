import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Events', page: 'events' },
    { label: 'Services', page: 'services' },
    { label: 'Artists', page: 'artists' },
    { label: 'Venue Partners', page: 'venue-partners' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'About', page: 'about' },
    { label: 'Reviews', page: 'testimonials' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0b0e]/95 backdrop-blur-xl border-b border-[#9dbeb7]/15 py-3 shadow-2xl shadow-black/80' 
          : 'bg-[#0a0b0e]/75 backdrop-blur-md border-b border-white/[0.04] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Authentic Akash Makana Production Signature Logo */}
        <button 
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group text-left flex items-center gap-3 cursor-pointer focus:outline-none shrink-0"
        >
          <img 
            src="/am_logo_white.png" 
            alt="AM Akash Makana Production" 
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]" 
          />
          <div className="hidden sm:flex flex-col border-l border-[#9dbeb7]/25 pl-3">
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-white brand-font uppercase">
              AM PRODUCTION
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9dbeb7] font-medium -mt-0.5">
              Concerts & Festivals
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-[13px] tracking-wide font-medium transition-colors relative py-1.5 cursor-pointer ${
                  isActive 
                    ? 'text-[#efe6d5] font-semibold' 
                    : 'text-[#9dbeb7]/80 hover:text-[#efe6d5]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e73213] rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mid-screen Nav */}
        <nav className="hidden lg:flex xl:hidden items-center gap-4">
          {navLinks.slice(0, 6).map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-xs tracking-wider transition-colors relative py-1 cursor-pointer ${
                  isActive 
                    ? 'text-[#efe6d5] font-semibold' 
                    : 'text-[#9dbeb7]/80 hover:text-[#efe6d5]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA - Vermilion Red Button (#e73213) with Cream text (#efe6d5) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              onNavigate('plan-event');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-[#efe6d5] bg-[#e73213] hover:bg-[#cf2b0f] active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-[#e73213]/25"
          >
            <span>Plan Your Event</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#9dbeb7] hover:text-[#efe6d5] focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b0e] border-b border-[#9dbeb7]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left py-2.5 px-3 rounded-lg text-xs tracking-wider font-medium cursor-pointer ${
                  currentPage === link.page
                    ? 'bg-[#e73213]/15 text-[#efe6d5] font-bold border border-[#e73213]/30'
                    : 'text-[#9dbeb7] hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('plan-event');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold tracking-wider text-xs text-[#efe6d5] bg-[#e73213] hover:bg-[#cf2b0f] cursor-pointer shadow-md shadow-[#e73213]/20"
            >
              PLAN YOUR EVENT
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
