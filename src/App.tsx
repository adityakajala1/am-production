import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { ArtistDetailPage } from './pages/ArtistDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ClientsPage } from './pages/ClientsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { PlanEventPage } from './pages/PlanEventPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPages } from './pages/LegalPages';
import { VenuePartnersPage } from './pages/VenuePartnersPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParams, setPageParams] = useState<any>({});

  const handleNavigate = (page: string, params: any = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e2e8f0] flex flex-col justify-between selection:bg-[#e73213] selection:text-white">
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Routed View */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'events' && <EventsPage onNavigate={handleNavigate} />}
        {currentPage === 'event-detail' && (
          <EventDetailPage 
            eventId={pageParams.eventId || 'ev-1'} 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
            selectedServiceId={pageParams.serviceId} 
          />
        )}
        {currentPage === 'artists' && <ArtistsPage onNavigate={handleNavigate} />}
        {currentPage === 'artist-detail' && (
          <ArtistDetailPage 
            artistId={pageParams.artistId || 'art-1'} 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {(currentPage === 'venue-partners' || currentPage === 'clients') && (
          <VenuePartnersPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'testimonials' && <TestimonialsPage onNavigate={handleNavigate} />}
        {currentPage === 'plan-event' && (
          <PlanEventPage 
            initialArtistName={pageParams.artistName} 
            initialServiceId={pageParams.serviceId} 
          />
        )}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === 'privacy-policy' && <LegalPages type="privacy" />}
        {currentPage === 'terms-conditions' && <LegalPages type="terms" />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
