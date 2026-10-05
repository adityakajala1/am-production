import React, { useState } from 'react';
import { 
  ArrowUpRight, ChevronRight, ChevronLeft, Check, Sparkles, 
  Calendar, MapPin, Users, IndianRupee, Mail, Phone, Building, 
  FileCheck, Shield, CheckCircle2, AlertCircle, UploadCloud
} from 'lucide-react';

interface QuoteFormProps {
  initialArtistName?: string;
  initialServiceId?: string;
}

export const PlanEventPage: React.FC<QuoteFormProps> = ({ initialArtistName, initialServiceId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    eventType: 'Concert',
    eventName: '',
    eventDate: '',
    city: '',
    venue: '',
    audienceSize: '10,000 – 25,000',
    services: initialServiceId ? ['Complete Production'] : ['Sound', 'Lighting', 'Stage Production'],
    budget: '₹25L – ₹50L',
    name: '',
    company: '',
    email: '',
    phone: '',
    description: initialArtistName ? `Enquiry for booking artist: ${initialArtistName}. ` : '',
    uploadedFileName: ''
  });

  const eventTypes = [
    { label: 'Concert', desc: 'Single or multi-headliner arena / stadium live show' },
    { label: 'Music Festival', desc: 'Multi-stage weekend or day-long festival experience' },
    { label: 'College Festival', desc: 'Campus mega-cultural nights & celebrity artist shows' },
    { label: 'Corporate Event', desc: 'Brand summits, CXO galas, product reveals & annual bashes' },
    { label: 'Brand Activation', desc: 'Immersive pop-ups, lifestyle stages & marketing spectacles' },
    { label: 'Private Event', desc: 'Ultra-exclusive luxury celebrations & private concerts' },
    { label: 'Other', desc: 'Bespoke live music or theatrical production' },
  ];

  const serviceOptions = [
    'Event Planning',
    'Complete Event Management',
    'Artist Booking',
    'Stage Production',
    'Sound',
    'Lighting',
    'LED Screens',
    'Special Effects',
    'Photography',
    'Videography',
    'Complete Production'
  ];

  const budgetOptions = [
    { label: '₹5L – ₹10L', tier: 'Intimate / Club Stage' },
    { label: '₹10L – ₹25L', tier: 'College / Mid-Size Concert' },
    { label: '₹25L – ₹50L', tier: 'Major Concert / Arena Stage' },
    { label: '₹50L+', tier: 'Stadium Tour / Flagship Festival' },
    { label: 'Not Decided', tier: 'Consultation & Custom Scope' },
  ];

  const toggleService = (srv: string) => {
    if (srv === 'Complete Production') {
      if (formData.services.includes('Complete Production')) {
        setFormData({ ...formData, services: [] });
      } else {
        setFormData({ ...formData, services: ['Complete Production', ...serviceOptions] });
      }
      return;
    }

    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== srv && s !== 'Complete Production')
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv]
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, uploadedFileName: e.target.files[0].name });
    }
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const stepsList = [
    { num: 1, title: 'Event Type' },
    { num: 2, title: 'Event Details' },
    { num: 3, title: 'Services' },
    { num: 4, title: 'Budget' },
    { num: 5, title: 'Client Info' },
    { num: 6, title: 'Vision & Brief' },
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e73213] block mb-2">
            PRODUCTION QUOTE & INQUIRY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            PLAN YOUR EVENT
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Tell us about your event scale, location, and technical requirements. Our directors prepare a tailored estimate within 24 hours.
          </p>
        </div>

        {/* Multi-step progress bar */}
        {!isSubmitted && (
          <div className="mb-10">
            <div className="grid grid-cols-6 gap-2 sm:gap-3 text-center">
              {stepsList.map((step) => {
                const isActive = currentStep === step.num;
                const isPassed = currentStep > step.num;
                return (
                  <button
                    key={step.num}
                    onClick={() => {
                      if (isPassed) setCurrentStep(step.num);
                    }}
                    className={`group cursor-pointer focus:outline-none transition-all ${
                      isPassed ? 'cursor-pointer' : isActive ? 'cursor-default' : 'opacity-40 pointer-events-none'
                    }`}
                  >
                    <div className={`h-1.5 rounded-full mb-2 transition-all ${
                      isActive 
                        ? 'bg-[#e73213]' 
                        : isPassed 
                        ? 'bg-white/60' 
                        : 'bg-white/10'
                    }`}></div>
                    <span className="hidden sm:block text-[11px] uppercase tracking-wider font-semibold truncate text-neutral-300">
                      {step.title}
                    </span>
                    <span className="sm:hidden text-[10px] text-neutral-400">
                      {step.num}/6
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Multi-step form container */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Event Enquiry Received!
              </h2>
              <p className="text-neutral-300 max-w-lg mx-auto text-sm leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>! Our executive producer and technical team have received the brief for <span className="text-[#e73213] font-semibold">{formData.eventName || formData.eventType}</span>.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 max-w-md mx-auto text-left text-xs space-y-2 font-mono text-neutral-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Scope:</span>
                  <span className="text-white">{formData.eventType}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Estimated Audience:</span>
                  <span className="text-white">{formData.audienceSize}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Location:</span>
                  <span className="text-white">{formData.city || 'TBD'}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-400">Target Budget:</span>
                  <span className="text-[#e73213] font-bold">{formData.budget}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  Submit Another Project
                </button>
                <a
                  href="tel:9940435886"
                  className="px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold bg-[#e73213] hover:bg-[#d02c0f] text-white transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#e73213]/25"
                >
                  <Phone className="w-4 h-4" />
                  Call Production Desk (+91 99404 35886)
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: EVENT TYPE */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-[#e73213] uppercase tracking-wider">Step 01 of 06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mt-1">
                      Select Your Event Category
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                      What type of experience are we engineering together?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {eventTypes.map((type) => {
                      const isSelected = formData.eventType === type.label;
                      return (
                        <div
                          key={type.label}
                          onClick={() => setFormData({ ...formData, eventType: type.label })}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-gradient-to-br from-[#e73213]/20 to-[#9dbeb7]/20 border-[#e73213] shadow-lg shadow-[#e73213]/15'
                              : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white text-sm uppercase tracking-wide">
                              {type.label}
                            </span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-[#e73213] bg-[#e73213] text-white' : 'border-neutral-500'
                            }`}>
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                          </div>
                          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                            {type.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: EVENT DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-[#e73213] uppercase tracking-wider">Step 02 of 06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mt-1">
                      Event Scope & Location
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                      Provide basic timelines and capacity to help calculate rigging & sound arrays.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                        Event Name / Working Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Echoes Arena Tour 2025 or Mumbai Tech Conclave"
                        value={formData.eventName}
                        onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                          Target Date or Month *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. November 2025 or Tentative Q4"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                          City / State *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mumbai, New Delhi, Bengaluru, Goa"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                          Venue (If finalized)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Jio Garden, Arena, Stadium, Resort"
                          value={formData.venue}
                          onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                          Expected Audience Size *
                        </label>
                        <select
                          value={formData.audienceSize}
                          onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                          className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e73213] transition-colors cursor-pointer"
                        >
                          <option value="Under 1,000 (Intimate)">Under 1,000 (Intimate / VIP)</option>
                          <option value="1,000 – 5,000">1,000 – 5,000 (Club / Hall)</option>
                          <option value="5,000 – 15,000">5,000 – 15,000 (Open Air Grounds)</option>
                          <option value="15,000 – 35,000">15,000 – 35,000 (Major Arena)</option>
                          <option value="35,000+ (Stadium / Mega-Festival)">35,000+ (Stadium / Mega-Festival)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: SERVICES REQUIRED */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-[#e73213] uppercase tracking-wider">Step 03 of 06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mt-1">
                      Services & Production Packages
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                      Select all technical and management capabilities needed for this production.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {serviceOptions.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <div
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#e73213]/20 to-[#9dbeb7]/20 border-[#e73213] text-white shadow-md shadow-[#e73213]/10'
                              : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30 hover:bg-white/10'
                          }`}
                        >
                          <span className="text-xs font-semibold leading-tight">{service}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                            isSelected ? 'bg-[#e73213] border-[#e73213] text-white' : 'border-neutral-500'
                          }`}>
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-xs font-mono text-neutral-400 italic">
                    Tip: Choosing "Complete Production" bundles stage, sound, lighting, LED visuals, and on-ground safety management into a seamless turnkey execution.
                  </p>
                </div>
              )}

              {/* STEP 4: BUDGET */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-[#e73213] uppercase tracking-wider">Step 04 of 06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mt-1">
                      Estimated Production Budget
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                      Select your planned investment bracket so our engineers configure the right line-array and stage tier.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {budgetOptions.map((b) => {
                      const isSelected = formData.budget === b.label;
                      return (
                        <div
                          key={b.label}
                          onClick={() => setFormData({ ...formData, budget: b.label })}
                          className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#e73213]/20 to-[#9dbeb7]/20 border-[#e73213] shadow-lg shadow-[#e73213]/10'
                              : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                          }`}
                        >
                          <div>
                            <span className="font-extrabold text-white text-base font-mono">
                              {b.label}
                            </span>
                            <span className="text-xs text-neutral-400 block mt-0.5">
                              {b.tier}
                            </span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#e73213] bg-[#e73213] text-white' : 'border-neutral-500'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: CLIENT INFORMATION */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-[#e73213] uppercase tracking-wider">Step 05 of 06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mt-1">
                      Contact & Organization Details
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                      Who should our executive producer contact regarding quotes & technical drawings?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karan Singhania"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                        Company / College / Entity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Music Group / BITS Pilani"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="karan@eventgroup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: EVENT DESCRIPTION & UPLOAD */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-[#e73213] uppercase tracking-wider">Step 06 of 06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mt-1">
                      Event Vision & Technical Brief
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                      Tell us about your event, requirements and vision.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                      Tell us about your event, requirements and vision *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Share your staging concept, artist desires, sound specifications, pyrotechnic cues, or any custom brand activations you envision..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e73213] transition-colors leading-relaxed"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                      Optional: Upload Event Brief or Tech Rider (PDF, DOCX, ZIP)
                    </label>
                    <label className="border-2 border-dashed border-white/15 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#e73213]/60 transition-colors bg-white/5">
                      <UploadCloud className="w-8 h-8 text-[#e73213] mb-2" />
                      <span className="text-sm font-semibold text-white">
                        {formData.uploadedFileName ? formData.uploadedFileName : 'Click to attach brief or proposal'}
                      </span>
                      <span className="text-xs text-neutral-400 mt-1">
                        Max size 25MB • Formats: PDF, PPTX, DWG, ZIP
                      </span>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Summary Preview Box */}
                  <div className="bg-[#0e0e14] border border-white/10 rounded-xl p-4 text-xs font-mono text-neutral-300 space-y-1.5">
                    <div className="text-white font-bold uppercase tracking-wider flex items-center gap-1.5 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#e73213]" /> Enquiry Summary
                    </div>
                    <div className="text-neutral-400">
                      Type: <span className="text-white">{formData.eventType}</span> | City: <span className="text-white">{formData.city || 'Not set'}</span> | Budget: <span className="text-[#e73213]">{formData.budget}</span>
                    </div>
                    <div className="text-neutral-400">
                      Services: <span className="text-neutral-200">{formData.services.join(', ') || 'None selected'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#e73213] to-[#9dbeb7] hover:opacity-95 shadow-lg shadow-[#e73213]/25 transition-all cursor-pointer"
                  >
                    Continue to Step {currentStep + 1}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider font-extrabold text-white bg-gradient-to-r from-[#e73213] via-[#e11d48] to-[#9dbeb7] hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#e73213]/30 transition-all cursor-pointer"
                  >
                    SUBMIT EVENT ENQUIRY
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Reassurance Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Shield className="w-5 h-5 text-[#e73213] mx-auto mb-2" />
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Turnkey Reliability</h4>
            <p className="text-neutral-400 text-xs mt-1">Full statutory safety clearances, structural calculations, and backup generators.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Sparkles className="w-5 h-5 text-[#e73213] mx-auto mb-2" />
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">24-Hour Proposal Turnaround</h4>
            <p className="text-neutral-400 text-xs mt-1">Detailed technical rider, CAD stage drawing options, and itemized billing.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Users className="w-5 h-5 text-[#e73213] mx-auto mb-2" />
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Dedicated Production Manager</h4>
            <p className="text-neutral-400 text-xs mt-1">Single point of contact from initial site recce through strike down.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
