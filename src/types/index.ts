export interface EventItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  year: string;
  location: string;
  venue: string;
  category: 'CONCERTS' | 'MUSIC FESTIVALS' | 'COLLEGE EVENTS' | 'CORPORATE' | 'OTHER';
  status: 'Upcoming' | 'Past';
  heroImage: string;
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  stats: {
    audience: string;
    duration: string;
    artistsCount: string;
    crewSize: string;
  };
  artists: string[];
  gallery: string[];
  behindTheScenes: string[];
  videoUrl?: string;
  sponsors: string[];
}

export interface ArtistItem {
  id: string;
  slug: string;
  name: string;
  genre: string;
  category: 'DJs' | 'Singers' | 'Bands' | 'Rappers' | 'Musicians' | 'Performers';
  location: string;
  photo: string;
  bannerImage: string;
  bio: string;
  monthlyListeners?: string;
  notablePerformances: string[];
  gallery: string[];
  featuredEvents: string[]; // event IDs or names
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  coverImage: string;
  deliverables: string[];
  equipmentHighlights: string[];
  relatedEvents: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  position: string;
  companyOrEvent: string;
  category: 'Clients' | 'Artists' | 'Event Organizers' | 'Brand Partners';
  avatar: string;
  rating?: number;
}

export interface ClientPartnerItem {
  id: string;
  name: string;
  category: 'Brands' | 'Sponsors' | 'Venues' | 'Artists' | 'Production Partners';
  logoText: string;
  subtext: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'CONCERTS' | 'FESTIVALS' | 'BACKSTAGE' | 'PRODUCTION' | 'REELS' | 'HIGHLIGHTS';
  imageUrl: string;
  videoUrl?: string;
  event: string;
  aspect: 'vertical' | 'horizontal' | 'square';
  likesCount?: string;
  caption?: string;
  isReel?: boolean;
}

export interface HighlightStory {
  id: string;
  videoUrl?: string;
  imageUrl: string;
  caption: string;
  duration?: number;
}

export interface InstagramHighlight {
  id: string;
  title: string;
  coverImage: string;
  storyCount: number;
  category: string;
  videoUrl?: string;
  stories?: HighlightStory[];
}
