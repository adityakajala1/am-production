import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, 
  CheckCircle2, Sparkles, ArrowUpRight, MessageSquare 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Production Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono text-[#e73213] uppercase tracking-widest block mb-3">
          DIRECT LINE TO PRODUCTION
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-['Syne']">
          CONTACT US
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto mt-4">
          Connect directly with our executive producers, technical crew chiefs, and artist liaison desk.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight font-['Syne']">
                HQ & STUDIO LOCATIONS
              </h3>

              <div className="space-y-6 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e73213] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Chennai Production HQ & Operations</h4>
                    <p className="text-neutral-400 text-xs mt-1">
                      Nungambakkam Entertainment District, Chennai, Tamil Nadu 600034
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e73213] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">South India Tour & Rig Yard</h4>
                    <p className="text-neutral-400 text-xs mt-1">
                      Serving Chennai, Bengaluru, Pondicherry & Major South Indian Venues
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#e73213] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase font-mono text-xs">Direct Phone & WhatsApp</h4>
                    <a href="tel:9940435886" className="text-neutral-300 hover:text-white text-xs mt-1 block">
                      +91 99404 35886
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#e73213] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase font-mono text-xs">Direct Email Inquiries</h4>
                    <a href="mailto:akashmakana2983@gmail.com" className="text-neutral-300 hover:text-white text-xs mt-1 block">
                      akashmakana2983@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#e73213] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Operations Timing</h4>
                    <p className="text-neutral-400 text-xs mt-1">
                      Studio Hours: 10:00 AM – 8:00 PM <br />
                      Show Days: 24/7 Live Site Support
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.08]">
                  <a 
                    href="https://www.instagram.com/am_production26/?hl=en" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#e73213]/40 transition-all text-neutral-300 hover:text-white group"
                  >
                    <div className="w-8 h-8 rounded-lg gradient-accent-bg flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider block">Official Instagram</span>
                      <span className="text-xs text-[#e73213] font-semibold">@am_production26</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Quote Link box */}
            <div className="glass-panel p-6 rounded-2xl border border-[#e73213]/30 bg-gradient-to-r from-[#170a1a] to-[#09090f] flex items-center justify-between">
              <div>
                <h4 className="text-white text-sm font-bold uppercase">Need an itemized quote?</h4>
                <p className="text-neutral-400 text-xs mt-0.5">Use our multi-step event scoping engine.</p>
              </div>
              <button
                onClick={() => onNavigate('plan-event')}
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#e73213] text-white hover:bg-[#e11d48] cursor-pointer"
              >
                Plan Event
              </button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                  <h3 className="text-2xl font-bold text-white uppercase">Message Sent Successfully</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto">
                    Thank you, {form.name}. Our production team will review your message and reply via email or phone within 4-6 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight font-['Syne'] mb-2">
                    Send a Message to Production Desk
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98200 12345"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e73213]"
                      >
                        <option value="General Production Enquiry">General Production Enquiry</option>
                        <option value="Concert Rigging & Sound Rental">Concert Rigging & Sound Rental</option>
                        <option value="Artist Advancing & Hospitality">Artist Advancing & Hospitality</option>
                        <option value="Sponsorship & Brand Integration">Sponsorship & Brand Integration</option>
                        <option value="Press & Media Relations">Press & Media Relations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="How can AM PRODUCTION assist with your upcoming live experience?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] hover:opacity-95 shadow-xl shadow-[#e73213]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    SEND MESSAGE
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
