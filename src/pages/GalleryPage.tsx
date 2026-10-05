import React, { useState } from 'react';
import { Maximize2, X, Play, Heart, MessageCircle, ExternalLink, Volume2, VolumeX, ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_DATA, INSTAGRAM_HIGHLIGHTS } from '../data/siteData';
import { InstagramIcon } from '../components/InstagramIcon';
import { InstagramHighlight } from '../types';

interface GalleryPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalItem, setActiveModalItem] = useState<any | null>(null);
  
  // Story Highlight Player state
  const [activeHighlight, setActiveHighlight] = useState<InstagramHighlight | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const categories = ['ALL', 'REELS', 'CONCERTS', 'PRODUCTION', 'BACKSTAGE'];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  const handleOpenHighlight = (hl: InstagramHighlight) => {
    setActiveHighlight(hl);
    setCurrentStoryIndex(0);
  };

  const handleNextStory = () => {
    if (!activeHighlight || !activeHighlight.stories) return;
    if (currentStoryIndex < activeHighlight.stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      setActiveHighlight(null);
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#9dbeb7]/20 text-[11px] font-mono tracking-widest text-[#9dbeb7] mb-3 uppercase">
          <InstagramIcon className="w-3.5 h-3.5 text-[#e73213]" />
          <span>REAL PORTFOLIO & EVENT ARCHIVES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight brand-font">
          Gallery & <span className="text-[#e73213]">Instagram Reels</span>
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Authentic live footage, stage performances, and club takeover energy straight from Lord of the Drinks Chennai, Hard Rock Cafe, and headline DJ concerts.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2">
          <a
            href="https://www.instagram.com/am_production26/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#e73213] hover:text-[#efe6d5] transition-colors bg-[#e73213]/10 px-3.5 py-1.5 rounded-full border border-[#e73213]/25"
          >
            <span>@am_production26 on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* PLAYABLE INSTAGRAM HIGHLIGHTS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="glass-panel rounded-2xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#efe6d5] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e73213] animate-pulse"></span>
              PLAYABLE STORY HIGHLIGHTS (TAP TO WATCH)
            </span>
            <span className="text-[11px] font-mono text-[#9dbeb7] uppercase">Click any circle to play</span>
          </div>

          <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto pb-2 scrollbar-none">
            {INSTAGRAM_HIGHLIGHTS.map((hl) => (
              <div 
                key={hl.id} 
                onClick={() => handleOpenHighlight(hl)}
                className="flex flex-col items-center gap-2.5 shrink-0 cursor-pointer group"
              >
                {/* Story Gradient Ring */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[3px] bg-gradient-to-tr from-[#e73213] via-[#ff6b4a] to-[#9dbeb7] group-hover:scale-105 transition-transform duration-200 shadow-md shadow-[#e73213]/20">
                  <div className="w-full h-full rounded-full overflow-hidden p-0.5 bg-[#0a0b0e]">
                    <img 
                      src={hl.coverImage} 
                      alt={hl.title} 
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#efe6d5] group-hover:text-white text-center max-w-[85px] truncate block">
                  {hl.title}
                </span>
                <span className="text-[10px] font-mono text-[#9dbeb7] -mt-2">
                  {hl.storyCount} stories
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#e73213] text-white font-bold shadow-md shadow-[#e73213]/25'
                  : 'bg-white/[0.05] text-[#9dbeb7] hover:text-white hover:bg-white/[0.1] border border-white/[0.06]'
              }`}
            >
              {cat === 'REELS' ? '🎬 PLAYABLE REELS' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Media Grid (Reels & Real Event Photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isReel = item.isReel || item.category === 'REELS';
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#e73213] transition-all duration-300 bg-[#09090d] shadow-lg ${
                  isReel ? 'h-[460px] sm:h-[500px]' : 'h-80'
                }`}
              >
                {/* If it has local video and is reel, display video element preview on hover */}
                {item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    poster={item.imageUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                    onMouseLeave={(e) => {
                      const v = e.target as HTMLVideoElement;
                      v.pause();
                      v.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Reel Badge if video */}
                {isReel && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold">
                    <Play className="w-3.5 h-3.5 fill-[#e73213] text-[#e73213]" />
                    <span>PLAY REEL</span>
                  </div>
                )}

                {/* Likes count */}
                {item.likesCount && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium">
                    <Heart className="w-3.5 h-3.5 text-[#e73213] fill-[#e73213]" />
                    <span>{item.likesCount}</span>
                  </div>
                )}
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 flex flex-col justify-end pointer-events-none">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-[#e73213] uppercase tracking-wider font-mono font-bold block">
                      {item.category} • {item.event}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase tracking-tight">
                      {item.title}
                    </h4>
                    {item.caption && (
                      <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                    <span className="text-[11px] font-mono">@am_production26</span>
                    <span className="text-[#e73213] font-semibold flex items-center gap-1">
                      Play Full Media <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FULL-SCREEN PLAYABLE STORY HIGHLIGHT MODAL */}
      {activeHighlight && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setActiveHighlight(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm sm:max-w-md h-[90vh] bg-black rounded-3xl overflow-hidden border border-white/20 flex flex-col justify-between shadow-2xl"
          >
            {/* Story Progress Bars */}
            <div className="absolute top-3 left-3 right-3 z-30 flex items-center gap-1.5">
              {(activeHighlight.stories || [{ id: '1', imageUrl: activeHighlight.coverImage, caption: '' }]).map((_, sIdx) => (
                <div key={sIdx} className="h-1 flex-1 bg-white/25 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-white transition-all duration-300 ${
                      sIdx < currentStoryIndex 
                        ? 'w-full' 
                        : sIdx === currentStoryIndex 
                        ? 'w-full animate-pulse' 
                        : 'w-0'
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Story Header */}
            <div className="absolute top-6 left-4 right-4 z-30 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <img
                  src="/am_logo_white.png"
                  alt="AM Production"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h4 className="text-xs font-bold font-mono">am_production26</h4>
                  <p className="text-[10px] text-neutral-300">{activeHighlight.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveHighlight(null)}
                  className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Playable Video or Photo */}
            <div className="w-full h-full relative flex items-center justify-center bg-black">
              {activeHighlight.videoUrl ? (
                <video
                  src={activeHighlight.stories?.[currentStoryIndex]?.videoUrl || activeHighlight.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={activeHighlight.stories?.[currentStoryIndex]?.imageUrl || activeHighlight.coverImage}
                  alt={activeHighlight.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Navigation click zones (left & right) */}
              <div 
                onClick={handlePrevStory}
                className="absolute inset-y-0 left-0 w-1/3 z-20 cursor-pointer"
                title="Previous Story"
              ></div>
              <div 
                onClick={handleNextStory}
                className="absolute inset-y-0 right-0 w-2/3 z-20 cursor-pointer"
                title="Next Story"
              ></div>
            </div>

            {/* Story Caption & Action */}
            <div className="absolute bottom-4 left-4 right-4 z-30 space-y-2 pointer-events-auto">
              <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white">
                <p className="text-xs leading-relaxed">
                  {activeHighlight.stories?.[currentStoryIndex]?.caption || activeHighlight.category}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/am_production26/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-xl text-xs font-mono font-bold text-center bg-[#e73213] text-white hover:bg-[#d02c0f] flex items-center justify-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal with Playable Reel Video */}
      {activeModalItem && (
        <div 
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[92vh] bg-[#0c0c12] border border-white/15 rounded-2xl overflow-hidden flex flex-col md:flex-row cursor-default shadow-2xl"
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#e73213] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Media Area (Video Player or Photo) */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[350px]">
              {activeModalItem.videoUrl ? (
                <video
                  src={activeModalItem.videoUrl}
                  poster={activeModalItem.imageUrl}
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              ) : (
                <img 
                  src={activeModalItem.imageUrl} 
                  alt={activeModalItem.title} 
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              )}
            </div>

            {/* Post Details & Caption */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-4 bg-[#09090d]">
              <div className="space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                  <img
                    src="/am_logo_white.png"
                    alt="AM Production"
                    className="w-9 h-9 object-contain"
                  />
                  <div>
                    <h4 className="text-sm font-bold font-mono text-white">am_production26</h4>
                    <p className="text-[11px] text-[#9dbeb7]">{activeModalItem.event}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white uppercase">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeModalItem.caption || activeModalItem.event}
                  </p>
                </div>

                {activeModalItem.likesCount && (
                  <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2">
                    <span className="flex items-center gap-1.5 text-white font-mono font-semibold">
                      <Heart className="w-4 h-4 text-[#e73213] fill-[#e73213]" />
                      {activeModalItem.likesCount} Likes
                    </span>
                    <span className="flex items-center gap-1.5 text-[#9dbeb7] font-mono">
                      <MessageCircle className="w-4 h-4" />
                      Live Feed
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <a
                  href="https://www.instagram.com/am_production26/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#d02c0f] flex items-center justify-center gap-2 transition-all shadow-md shadow-[#e73213]/25"
                >
                  <InstagramIcon className="w-4 h-4" />
                  View Original on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight brand-font">
            BRING THIS PRODUCTION QUALITY TO YOUR VENUE
          </h3>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-lg mx-auto">
            From club DJ takeovers and sound systems to festival rigging, let AM PRODUCTION engineer your next event.
          </p>
          <button
            onClick={() => onNavigate('plan-event')}
            className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#e73213] hover:bg-[#d02c0f] cursor-pointer shadow-lg shadow-[#e73213]/25"
          >
            PLAN YOUR EVENT
          </button>
        </div>
      </section>
    </div>
  );
};
