import { EventItem, ArtistItem, ServiceItem, TestimonialItem, ClientPartnerItem, GalleryItem, InstagramHighlight } from '../types';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'ev-1',
    slug: 'bollywood-takeover-lord-of-the-drinks',
    title: 'BOLLYWOOD BLOWOUT: SATURDAY TAKEOVER',
    subtitle: 'Signature High-Energy Bollywood & Commercial Night',
    date: 'EVERY SATURDAY / UPCOMING SPECIALS',
    year: '2025',
    location: 'Chennai, India',
    venue: 'Lord of the Drinks (LOTD), Nungambakkam',
    category: 'CONCERTS',
    status: 'Upcoming',
    heroImage: '/media/lotd_reel_2_thumb.jpg',
    thumbnail: '/media/lotd_reel_2_thumb.jpg',
    shortDescription: 'Chennai’s premier packed Saturday night featuring top-tier resident & guest DJs, synchronized intelligent beam lighting, and high-energy club entertainment.',
    fullDescription: 'Produced week-in and week-out by AM PRODUCTION at Lord of the Drinks Chennai. We oversee audio engineering, bespoke stage DJ console lighting, CO2 blast cannons, and unmatched crowd hype for over 1,200 attendees every weekend.',
    stats: {
      audience: '1,200+ Weekly',
      duration: '6 Hours',
      artistsCount: 'Resident & Guest Headliners',
      crewSize: '25 Production Crew'
    },
    artists: ['DJ Meet', 'DJ Akhil Talreja', 'DJ Musical Monkey', 'DJ Rihya'],
    gallery: [
      '/media/lotd_reel_2_thumb.jpg',
      '/media/lotd_reel_1_thumb.jpg',
      '/media/lotd_reel_4_thumb.jpg',
      '/media/lotd_reel_3_thumb.jpg'
    ],
    behindTheScenes: [
      '/media/lotd_reel_1_thumb.jpg',
      '/media/lotd_reel_4_thumb.jpg'
    ],
    videoUrl: '/media/lotd_reel_2.mp4',
    sponsors: ['Lord of the Drinks', 'Pioneer DJ', 'Budweiser Experiences']
  },
  {
    id: 'ev-2',
    slug: 'hard-rock-cafe-retro-bollywood-explosion',
    title: 'RETRO & BOLLYWOOD SOUNDSCAPES LIVE',
    subtitle: 'Rock & Commercial Fusion Showcase',
    date: 'FRIDAY PRIME NIGHTS',
    year: '2025',
    location: 'Chennai, India',
    venue: 'Hard Rock Cafe, Nungambakkam',
    category: 'CONCERTS',
    status: 'Upcoming',
    heroImage: '/media/lotd_reel_1_thumb.jpg',
    thumbnail: '/media/lotd_reel_1_thumb.jpg',
    shortDescription: 'Electrifying club showcases merging Bollywood chartbusters, South hits, and rock anthems on Chennai’s most iconic music stage.',
    fullDescription: 'From artist advancing and custom Pioneer CDJ-3000 backlines to programmed strobe chases and VIP table crowd management, AM PRODUCTION delivers flawless hospitality and concert-grade acoustics inside Hard Rock Cafe.',
    stats: {
      audience: '800+ Attendees',
      duration: '5 Hours',
      artistsCount: 'DJ Rihya & Special Guests',
      crewSize: '18 Production Crew'
    },
    artists: ['DJ Rihya', 'DJ Meet'],
    gallery: [
      '/media/dj_rihya_photo.jpg',
      '/media/lotd_reel_1_thumb.jpg',
      '/media/sherlocks_pub_dj_thumb.jpg'
    ],
    behindTheScenes: [
      '/media/lotd_reel_4_thumb.jpg'
    ],
    videoUrl: '/media/sherlocks_pub_dj.mp4',
    sponsors: ['Hard Rock Cafe', 'Red Bull Live', 'Heineken Silver']
  },
  {
    id: 'ev-3',
    slug: 'nexus-bass-festival-arena',
    title: 'NEXUS ARENA MUSIC FESTIVAL',
    subtitle: 'High-Impact Multi-Stage Electronic & Live Music Spectacle',
    date: 'NOVEMBER 15-16, 2025',
    year: '2025',
    location: 'Chennai & Bengaluru',
    venue: 'Open Grounds & Arena Amphitheatre',
    category: 'MUSIC FESTIVALS',
    status: 'Upcoming',
    heroImage: '/media/pool_party_live_thumb.jpg',
    thumbnail: '/media/pool_party_live_thumb.jpg',
    shortDescription: 'Monumental open-air festival experience with multi-tier stage structures, laser matrix, and pristine stadium-line acoustics.',
    fullDescription: 'Spanning thousands of music enthusiasts, AM PRODUCTION provides end-to-end stage design, transparent curved LED walls, cryogenic CO2 jets, and line array tuning for festival scale.',
    stats: {
      audience: '15,000+',
      duration: '2 Days / 16 Hours',
      artistsCount: '12 Headline DJs & Acts',
      crewSize: '95 Production Crew'
    },
    artists: ['DJ Rihya', 'DJ Meet', 'Soulstrings Collective'],
    gallery: [
      '/media/pool_party_live_thumb.jpg',
      '/media/dj_santana_live_thumb.jpg'
    ],
    behindTheScenes: [
      '/media/lotd_reel_4_thumb.jpg'
    ],
    videoUrl: '/media/pool_party_live.mp4',
    sponsors: ['Pioneer DJ', 'Monster Energy', 'VH1']
  },
  {
    id: 'ev-4',
    slug: 'college-carnival-mega-star-night',
    title: 'CAMPUS CELEBRITY STAR NIGHT',
    subtitle: 'Inter-College Mega Cultural Festival Stage',
    date: 'OCTOBER 24, 2024',
    year: '2024',
    location: 'Chennai & Tamil Nadu',
    venue: 'University Mega Stadium',
    category: 'COLLEGE EVENTS',
    status: 'Past',
    heroImage: '/media/chennai_club_night_thumb.jpg',
    thumbnail: '/media/chennai_club_night_thumb.jpg',
    shortDescription: 'High-octane college festival night bringing together 12,000+ students with laser choreography and live concert energy.',
    fullDescription: 'From university approvals and crowd barriers to mounting concert-grade sound and lighting rigs, AM PRODUCTION delivers youth cultural spectacles with total safety compliance.',
    stats: {
      audience: '12,000+',
      duration: '6 Hours',
      artistsCount: '4 Live Performers',
      crewSize: '55 Production Crew'
    },
    artists: ['DJ Meet', 'DJ Rihya', 'Soulstrings Live'],
    gallery: [
      '/media/chennai_club_night_thumb.jpg',
      '/media/lotd_reel_2_thumb.jpg'
    ],
    behindTheScenes: [
      '/media/lotd_reel_3_thumb.jpg'
    ],
    videoUrl: '/media/chennai_club_night.mp4',
    sponsors: ['Campus Activewear', 'Fastrack']
  },
  {
    id: 'ev-5',
    slug: 'exclusive-comedy-poetry-lounge-showcase',
    title: 'THE SPOTLIGHT: COMEDY & POETRY SOIREE',
    subtitle: 'Intimate Cultural Entertainment & Stand-Up Night',
    date: 'MONTHLY CURATION',
    year: '2024',
    location: 'Chennai, India',
    venue: 'Sir Mutha Concert Hall & Studio Lounges',
    category: 'OTHER',
    status: 'Past',
    heroImage: '/media/lotd_reel_3_thumb.jpg',
    thumbnail: '/media/lotd_reel_3_thumb.jpg',
    shortDescription: 'Acoustically tuned, intimate live stage curating premier stand-up comics, spoken-word poets, and storytelling evenings.',
    fullDescription: 'AM PRODUCTION provides turnkey production for live spoken-word and comedy specials—handling crystal microphone arrays, warm key lighting, HD multi-cam recording, and audience seating design.',
    stats: {
      audience: '450 Guests',
      duration: '3 Hours',
      artistsCount: '6 Featured Artists',
      crewSize: '12 Crew'
    },
    artists: ['Featured Comics & Spoken Word Poets'],
    gallery: [
      '/media/lotd_reel_3_thumb.jpg',
      '/media/lotd_reel_4_thumb.jpg'
    ],
    behindTheScenes: [
      '/media/lotd_reel_1_thumb.jpg'
    ],
    videoUrl: '/media/lotd_reel_3.mp4',
    sponsors: ['The Comedy Collective', 'Studio Live']
  },
  {
    id: 'ev-6',
    slug: 'corporate-annual-gala-celebration',
    title: 'SUMMIT AWARDS & CELEBRITY NIGHT',
    subtitle: 'Luxury Corporate Celebration & Gala Experience',
    date: 'DECEMBER 2024',
    year: '2024',
    location: 'Chennai & Mahabalipuram',
    venue: 'Grand Luxury Resort Lawns',
    category: 'CORPORATE',
    status: 'Past',
    heroImage: '/media/dj_santana_live_thumb.jpg',
    thumbnail: '/media/dj_santana_live_thumb.jpg',
    shortDescription: 'Grand corporate celebration featuring LED walls, architectural lighting, corporate protocol, and high-energy DJ afterparty.',
    fullDescription: 'Custom staging, seamless AV presentations, celebrity artist hospitality, and sound engineering that balances keynote clarity with dancefloor power.',
    stats: {
      audience: '1,500 Delegates',
      duration: '5 Hours',
      artistsCount: '3 Acts & DJ Sets',
      crewSize: '30 Crew'
    },
    artists: ['DJ Rihya', 'Live Fusion Band'],
    gallery: [
      '/media/dj_santana_live_thumb.jpg',
      '/media/chennai_club_night_thumb.jpg'
    ],
    behindTheScenes: [
      '/media/lotd_reel_2_thumb.jpg'
    ],
    videoUrl: '/media/dj_santana_live.mp4',
    sponsors: ['Titan Tech', 'Mercedes-Benz']
  }
];

export const ARTISTS_DATA: ArtistItem[] = [
  {
    id: 'art-1',
    slug: 'dj-rihya',
    name: 'DJ RIHYA',
    genre: 'Commercial, Bollywood & Club Anthems',
    category: 'DJs',
    location: 'Chennai / Mumbai, India',
    photo: '/media/dj_rihya_photo.jpg',
    bannerImage: '/media/dj_rihya_stage.jpg',
    bio: 'One of the most sought-after party instigators in India, known for explosive Bollywood remixes, commercial club bangers, melodic techno sets, and electrifying crowd engagement across top luxury venues.',
    monthlyListeners: 'Resident & Touring Headliner',
    notablePerformances: [
      'Saturday Takeovers at Lord of the Drinks (LOTD)',
      'Friday Rock & Commercial Nights at Hard Rock Cafe',
      'Campus Mega Cultural Star Nights'
    ],
    gallery: [
      '/media/dj_rihya_photo.jpg',
      '/media/dj_rihya_stage.jpg',
      '/media/dj_rihya_club.jpg'
    ],
    featuredEvents: ['ev-1', 'ev-2', 'ev-3', 'ev-4']
  },
  {
    id: 'art-2',
    slug: 'dj-meet',
    name: 'DJ MEET',
    genre: 'Bollywood, Punjabi & Desi Hip-Hop',
    category: 'DJs',
    location: 'Chennai / Mumbai',
    photo: '/media/lotd_reel_1_thumb.jpg',
    bannerImage: '/media/lotd_reel_2_thumb.jpg',
    bio: 'Renowned for seamless genre-blending and high-energy Bollywood club sets that keep dance floors moving till the early hours.',
    monthlyListeners: 'Nightlife Favorite',
    notablePerformances: [
      'Bollywood Nights at Lord of the Drinks',
      'South India Intercollege Celebrations',
      'High-End Private Sangeet & Afterparties'
    ],
    gallery: [
      '/media/lotd_reel_1_thumb.jpg',
      '/media/lotd_reel_2_thumb.jpg'
    ],
    featuredEvents: ['ev-1', 'ev-4']
  },
  {
    id: 'art-3',
    slug: 'dj-musical-monkey',
    name: 'DJ MUSICAL MONKEY',
    genre: 'Club Commercial, Tech & Bollywood',
    category: 'DJs',
    location: 'Chennai, India',
    photo: '/media/dj_santana_live_thumb.jpg',
    bannerImage: '/media/sherlocks_pub_dj_thumb.jpg',
    bio: 'Delivering infectious rhythms, creative live mashups, and energetic drops tailored for modern nightlife crowds and music festival stages.',
    monthlyListeners: 'Club & Festival Specialist',
    notablePerformances: [
      'Weekend Bollywood Nights at LOTD',
      'Club Arena Soundscapes',
      'Youth Festival Headliner'
    ],
    gallery: [
      '/media/dj_santana_live_thumb.jpg',
      '/media/sherlocks_pub_dj_thumb.jpg'
    ],
    featuredEvents: ['ev-1']
  },
  {
    id: 'art-4',
    slug: 'the-crimson-collective',
    name: 'SOULSTRINGS COLLECTIVE',
    genre: 'Live Fusion & Rock Anthems',
    category: 'Bands',
    location: 'Chennai / Bengaluru',
    photo: '/media/sherlocks_pub_dj_thumb.jpg',
    bannerImage: '/media/chennai_club_night_thumb.jpg',
    bio: 'Dynamic live ensemble combining electric guitars, violin, and dual vocalists for unforgettable live acoustic and concert performances.',
    monthlyListeners: 'Live Concert Favorite',
    notablePerformances: [
      'Hard Rock Cafe Acoustic Showcase',
      'Corporate Leadership Night',
      'Inter-College Mega Fest'
    ],
    gallery: [
      '/media/sherlocks_pub_dj_thumb.jpg',
      '/media/lotd_reel_1_thumb.jpg'
    ],
    featuredEvents: ['ev-2', 'ev-4']
  },
  {
    id: 'art-5',
    slug: 'the-standup-storytellers',
    name: 'COMEDY & POETRY FELLOWSHIP',
    genre: 'Stand-Up Comedy & Spoken Word',
    category: 'Performers',
    location: 'Chennai, India',
    photo: '/media/lotd_reel_3_thumb.jpg',
    bannerImage: '/media/lotd_reel_1_thumb.jpg',
    bio: 'Curated roster of top local and touring stand-up comedians and poets delivering high-engagement, laughter-filled evenings.',
    monthlyListeners: 'Intimate Showcase',
    notablePerformances: [
      'Spotlight Comedy Evenings',
      'Studio Lounge Poetry Nights'
    ],
    gallery: [
      '/media/lotd_reel_3_thumb.jpg'
    ],
    featuredEvents: ['ev-5']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Club & Nightlife Event Production',
    tagline: 'High-Impact Bollywood Nights, Guest DJs & Club Takeovers',
    description: 'We orchestrate end-to-end nightlife experiences at premier venues like Lord of the Drinks and Hard Rock Cafe: intelligent moving lighting, club sound balancing, resident DJs, and door-to-dancefloor crowd energy.',
    icon: 'Music2',
    coverImage: '/media/lotd_reel_2_thumb.jpg',
    deliverables: [
      'Curated DJ lineup and theme programming (Bollywood, Commercial, Retro, Hip-Hop)',
      'Intelligent DMX moving heads and laser light show choreography',
      'CO2 jet cannons, confetti drops, and indoor cold pyrotechnics',
      'Social media hype reels, photography, and event promotional campaigns',
      'VIP guest hospitality and artist concierge'
    ],
    equipmentHighlights: [
      'Pioneer DJ CDJ-3000 & DJM-900NXS2 / A9 consoles',
      'JBL / RCF / L-Acoustics high-SPL sound reinforcement',
      'Beam 230W moving heads & haze atmospheric generators'
    ],
    relatedEvents: ['ev-1', 'ev-2']
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Concerts & Music Festivals',
    tagline: 'Multi-Stage Mega Festivals & Live Concert Rigs',
    description: 'From open grounds to indoor arenas, we provide turnkey concert structures, massive LED backdrops, line array audio distribution, and complete festival logistical containment.',
    icon: 'Radio',
    coverImage: '/media/lotd_reel_4_thumb.jpg',
    deliverables: [
      'Full stage design, Layher trussing, and structural load signoffs',
      'Multi-stage artist schedule advancing & rider execution',
      'Sound propagation tuning for uniform audience coverage',
      'Cashless wristband access & security crowd containment',
      'Generator silent power grids and technical redundancy'
    ],
    equipmentHighlights: [
      'L-Acoustics / d&b audiotechnik line-array speaker systems',
      'P2.9 and P3.9 outdoor weatherproof high-contrast LED video walls',
      'GrandMA2 & GrandMA3 professional lighting consoles'
    ],
    relatedEvents: ['ev-3']
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'College Festivals & Star Nights',
    tagline: 'Youth Mega-Cultural Celebrations & Celebrity Shows',
    description: 'Specializing in high-decibel campus cultural festivals. We handle college administration approvals, crowd barrier safety, celebrity singer/DJ advancing, and electrifying stage setups.',
    icon: 'CalendarCheck',
    coverImage: '/media/chennai_club_night_thumb.jpg',
    deliverables: [
      'Turnkey stage, sound, lighting, and LED wall rentals',
      'Celebrity artist booking and student council coordination',
      'Heavy-duty Mojo barricades for crowd safety',
      'Police and statutory fire department permission liaising',
      'Live concert video recording and aftermovie production'
    ],
    equipmentHighlights: [
      'High-output stadium concert audio rigs',
      'Concert-grade strobe arrays and blinder fixtures',
      'TÜV-certified aluminum trussing'
    ],
    relatedEvents: ['ev-4']
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Stage & Set Production',
    tagline: 'Custom Stage Design, LED Backdrops & Scenography',
    description: 'We turn plain venues into architectural wonderlands. Customized 3D DJ booths, tiered risers, transparent dance stages, and synchronized visual displays.',
    icon: 'Layers',
    coverImage: '/media/lotd_reel_1_thumb.jpg',
    deliverables: [
      '3D CAD stage concepts and photorealistic visual previews',
      'Custom CNC fabricated brand & DJ console fascias',
      'Motorized and hydraulic risers for performers',
      'Engineered wind-load certified aluminum scaffolding'
    ],
    equipmentHighlights: [
      'Modular stage decks with non-slip surfaces',
      'Brompton & Novastar LED video processors',
      'Flame-retardant scenic backdrop fabrics'
    ],
    relatedEvents: ['ev-1', 'ev-3']
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'Sound, Lighting & Special Effects',
    tagline: 'Concert Sound Engineering & Pyrotechnic Excitement',
    description: 'Acoustic fidelity that gives punch to every beat drop and clarity to every vocal, backed by lasers, CO2 blasts, cold sparks, and synchronized strobes.',
    icon: 'Zap',
    coverImage: '/media/lotd_reel_4_thumb.jpg',
    deliverables: [
      'Predictive acoustic modeling for venue SPL balance',
      'ArtNet/DMX moving head and strobe programming',
      'Indoor-safe cold spark fountains and cryogenic CO2 jets',
      'Multitrack live audio recording'
    ],
    equipmentHighlights: [
      'Robe / Sharpy moving beam luminaires',
      'High-power RGB concert laser projectors',
      'Digital audio mixing consoles (DiGiCo / Yamaha / Allen & Heath)'
    ],
    relatedEvents: ['ev-1', 'ev-2', 'ev-3']
  },
  {
    id: 'srv-6',
    number: '06',
    title: 'Artist Booking & Hospitality',
    tagline: 'DJs, Bands, Singers, Comedians & VIP Advancing',
    description: 'Direct booking connections for leading DJs, Bollywood and regional playback singers, progressive bands, and stand-up comics with seamless contract management.',
    icon: 'Sparkles',
    coverImage: '/media/lotd_reel_3_thumb.jpg',
    deliverables: [
      'Artist contracting, tech rider checks, and schedule advancing',
      'VIP airport transfers, luxury hospitality, and green room suites',
      'Dedicated artist liaison managers on-site throughout show'
    ],
    equipmentHighlights: [
      'Industry-standard backline rider equipment',
      'Private green room amenities and monitoring setups'
    ],
    relatedEvents: ['ev-1', 'ev-2', 'ev-5']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'AM PRODUCTION transformed our weekend footfall. The sound punch, synchronized lighting cues, and DJ curation at Lord of the Drinks Chennai create an electric vibe every single Saturday night.',
    name: 'Venue Operations Team',
    position: 'Nightlife & Events Programming',
    companyOrEvent: 'Lord of the Drinks, Chennai',
    category: 'Clients',
    avatar: '/media/lotd_reel_1_thumb.jpg',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'As a DJ, working with AM PRODUCTION is an absolute breeze. The booth setup is pristine, Pioneer CDJ-3000s are calibrated, and the lighting crew tracks every build-up and drop in real time.',
    name: 'DJ Rihya',
    position: 'Headline DJ & Performer',
    companyOrEvent: 'Club Resident & Touring Artist',
    category: 'Artists',
    avatar: '/media/dj_rihya_photo.jpg',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Akash Makana and the AM PRODUCTION team bring top-tier nightlife energy. From venue acoustic tuning to artist guest-management, they consistently turn every show into a packed success.',
    name: 'Suresh Krishnan',
    position: 'Head of Operations',
    companyOrEvent: 'Nightlife & Events Consortium, Chennai',
    category: 'Brand Partners',
    avatar: '/media/lotd_reel_2_thumb.jpg',
    rating: 5
  }
];

export const CLIENTS_PARTNERS_DATA: ClientPartnerItem[] = [
  { id: 'cp-1', name: 'LORD OF THE DRINKS', category: 'Venues', logoText: 'LORD OF THE DRINKS', subtext: 'Chennai Nightlife Partner' },
  { id: 'cp-2', name: 'SECRET STORY CHENNAI', category: 'Venues', logoText: 'SECRET STORY', subtext: 'High-Energy Bar & Kitchen Partner' },
  { id: 'cp-3', name: 'LIVING ROOM CHENNAI', category: 'Venues', logoText: 'LIVING ROOM', subtext: 'Premier Nightlife & Lounge Partner' },
  { id: 'cp-4', name: 'HARD ROCK CAFE', category: 'Venues', logoText: 'HARD ROCK CAFE', subtext: 'Chennai Live Stage Partner' },
  { id: 'cp-5', name: 'PIONEER DJ GLOBAL', category: 'Production Partners', logoText: 'PIONEER DJ', subtext: 'Hardware Tech Partner' },
  { id: 'cp-6', name: 'BUDWEISER EXPERIENCES', category: 'Brands', logoText: 'BUDWEISER', subtext: 'Event Sponsor' },
  { id: 'cp-7', name: 'RED BULL LIVE', category: 'Brands', logoText: 'RED BULL', subtext: 'Energy Beverage Partner' },
  { id: 'cp-8', name: 'L-ACOUSTICS SOUND', category: 'Production Partners', logoText: 'L-ACOUSTICS', subtext: 'Certified Sound Partner' }
];

export const INSTAGRAM_HIGHLIGHTS: InstagramHighlight[] = [
  {
    id: 'hl-1',
    title: 'LOTD Saturday',
    coverImage: '/media/lotd_reel_1_thumb.jpg',
    storyCount: 48,
    category: 'Lord of the Drinks Bollywood Takeovers',
    videoUrl: '/media/lotd_reel_1.mp4',
    stories: [
      {
        id: 'st-1-1',
        videoUrl: '/media/lotd_reel_1.mp4',
        imageUrl: '/media/lotd_reel_1_thumb.jpg',
        caption: 'Saturday Bollywood Blowout live behind the Pioneer CDJs with @djmeet.official at Lord of the Drinks Chennai!'
      },
      {
        id: 'st-1-2',
        videoUrl: '/media/lotd_reel_2.mp4',
        imageUrl: '/media/lotd_reel_2_thumb.jpg',
        caption: 'Packed floor energy at Lord of the Drinks Chennai! 1,200+ partygoers turning up to pure Bollywood vibes.'
      }
    ]
  },
  {
    id: 'hl-2',
    title: 'Club Takeover',
    coverImage: '/media/lotd_reel_2_thumb.jpg',
    storyCount: 36,
    category: 'Full House Weekend Party Vibes',
    videoUrl: '/media/lotd_reel_2.mp4',
    stories: [
      {
        id: 'st-2-1',
        videoUrl: '/media/lotd_reel_2.mp4',
        imageUrl: '/media/lotd_reel_2_thumb.jpg',
        caption: 'Nightlife engineered to perfection! High-decibel sound and intelligent beam lighting.'
      }
    ]
  },
  {
    id: 'hl-3',
    title: 'VIP & Celebrations',
    coverImage: '/media/lotd_reel_3_thumb.jpg',
    storyCount: 24,
    category: 'VIP Bottle Service & Birthdays',
    videoUrl: '/media/lotd_reel_3.mp4',
    stories: [
      {
        id: 'st-3-1',
        videoUrl: '/media/lotd_reel_3.mp4',
        imageUrl: '/media/lotd_reel_3_thumb.jpg',
        caption: 'Special VIP birthday & celebration setups at Lord of the Drinks Chennai with custom marquee boards.'
      }
    ]
  },
  {
    id: 'hl-4',
    title: 'Guest Artists',
    coverImage: '/media/lotd_reel_4_thumb.jpg',
    storyCount: 42,
    category: 'DJ Akhil Talreja & Headliners',
    videoUrl: '/media/lotd_reel_4.mp4',
    stories: [
      {
        id: 'st-4-1',
        videoUrl: '/media/lotd_reel_4.mp4',
        imageUrl: '/media/lotd_reel_4_thumb.jpg',
        caption: 'DJ Akhil Talreja live arrival & performance produced at Lord of the Drinks Chennai!'
      }
    ]
  },
  {
    id: 'hl-5',
    title: 'DJ Rihya Live',
    coverImage: '/media/dj_rihya_photo.jpg',
    storyCount: 28,
    category: 'Commercial & Bollywood Club Nights',
    videoUrl: '/media/lotd_reel_1.mp4',
    stories: [
      {
        id: 'st-5-1',
        videoUrl: '/media/lotd_reel_1.mp4',
        imageUrl: '/media/dj_rihya_photo.jpg',
        caption: 'High-energy Bollywood & club anthems with DJ Rihya live on stage!'
      },
      {
        id: 'st-5-2',
        videoUrl: '/media/lotd_reel_1.mp4',
        imageUrl: '/media/dj_rihya_stage.jpg',
        caption: 'Behind the decks with DJ Rihya at peak hour crowd takeover.'
      }
    ]
  },
  {
    id: 'hl-6',
    title: 'Stage & SFX',
    coverImage: '/media/lotd_reel_4_thumb.jpg',
    storyCount: 31,
    category: 'Cold Pyro, CO2 & DMX Lightshow',
    videoUrl: '/media/lotd_reel_4.mp4',
    stories: [
      {
        id: 'st-6-1',
        videoUrl: '/media/lotd_reel_4.mp4',
        imageUrl: '/media/lotd_reel_4_thumb.jpg',
        caption: 'Synchronized indoor spark machines, laser chases, and heavy fog atmospheric drops.'
      }
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-reel-1',
    title: 'Saturday Madness @ Lord of the Drinks',
    category: 'REELS',
    imageUrl: '/media/lotd_reel_1_thumb.jpg',
    videoUrl: '/media/lotd_reel_1.mp4',
    event: 'Lord of the Drinks, Chennai',
    aspect: 'vertical',
    likesCount: '5.4K',
    caption: 'When the beat drops at LOTD Chennai! Complete crowd takeover with resident sound & intelligent lights. 🔥 #LOTDChennai #BollywoodNight #AMProduction',
    isReel: true
  },
  {
    id: 'gal-reel-2',
    title: 'Full House Bollywood Saturday Night',
    category: 'REELS',
    imageUrl: '/media/lotd_reel_2_thumb.jpg',
    videoUrl: '/media/lotd_reel_2.mp4',
    event: 'Lord of the Drinks, Chennai',
    aspect: 'vertical',
    likesCount: '7.8K',
    caption: 'Unstoppable crowd energy packed to capacity! Weekend club takeover powered by AM PRODUCTION. 🎧 #AMProduction #ChennaiNightlife #BollywoodTakeover',
    isReel: true
  },
  {
    id: 'gal-reel-3',
    title: 'DJ Akhil Talreja Live Headliner Set',
    category: 'REELS',
    imageUrl: '/media/lotd_reel_4_thumb.jpg',
    videoUrl: '/media/lotd_reel_4.mp4',
    event: 'Lord of the Drinks, Chennai',
    aspect: 'vertical',
    likesCount: '9.2K',
    caption: 'DJ Akhil Talreja headlining the Saturday special with indoor pyro and synchronized beam lighting! ⚡ #DJAkhilTalreja #NightlifeProduction',
    isReel: true
  },
  {
    id: 'gal-reel-4',
    title: 'VIP Table Celebrations & Ambience',
    category: 'REELS',
    imageUrl: '/media/lotd_reel_3_thumb.jpg',
    videoUrl: '/media/lotd_reel_3.mp4',
    event: 'Lord of the Drinks, Chennai',
    aspect: 'vertical',
    likesCount: '4.1K',
    caption: 'Curated VIP hospitality, custom celebration marquee boards and premium nightlife experiences. ✨ #VIPNightlife #AMProduction',
    isReel: true
  },
  {
    id: 'gal-1',
    title: 'LOTD Saturday Bollywood Euphoria',
    category: 'CONCERTS',
    imageUrl: '/media/lotd_reel_2_thumb.jpg',
    event: 'Lord of the Drinks Takeover',
    aspect: 'vertical',
    caption: '1,200+ partygoers packing the dancefloor for our signature Saturday Bollywood blowout.'
  },
  {
    id: 'gal-2',
    title: 'Live Behind the Console & Mixer',
    category: 'CONCERTS',
    imageUrl: '/media/lotd_reel_1_thumb.jpg',
    event: 'Club Night Showcase',
    aspect: 'vertical',
    caption: 'Headliner DJ driving peak energy behind the calibrated Pioneer CDJ consoles.'
  },
  {
    id: 'gal-3',
    title: 'VIP Arrival & Spark Fountain Setup',
    category: 'PRODUCTION',
    imageUrl: '/media/lotd_reel_4_thumb.jpg',
    event: 'Lord of the Drinks Stage Entrance',
    aspect: 'vertical',
    caption: 'Cold pyrotechnic spark fountains and red carpet guest arrival for DJ Akhil Talreja.'
  },
  {
    id: 'gal-4',
    title: 'VIP Lounge Ambience & Lighting',
    category: 'BACKSTAGE',
    imageUrl: '/media/lotd_reel_3_thumb.jpg',
    event: 'Exclusive Table Zone',
    aspect: 'vertical',
    caption: 'Warm ambient glow, personalized service, and curated nightlife atmosphere.'
  },
  {
    id: 'gal-5',
    title: 'DJ Rihya Live Stage & Club Performance',
    category: 'CONCERTS',
    imageUrl: '/media/dj_rihya_photo.jpg',
    event: 'Club Night Showcase',
    aspect: 'horizontal',
    caption: 'DJ Rihya driving the dancefloor with high-voltage commercial and Bollywood remixes.'
  }
];

export const COMPANY_STATS = [
  { value: '150+', label: 'Events & Club Nights', detail: 'Lord of the Drinks, Hard Rock Cafe, arenas & festivals' },
  { value: '20+', label: 'DJs & Live Artists', detail: 'Resident and touring headline performers' },
  { value: '50K+', label: 'Party-Goers Entertained', detail: 'Packed dance floors across South India' },
  { value: '100%', label: 'Turnkey Reliability', detail: 'Audio, intelligent lighting, SFX & talent advancing' },
];

export const COMPANY_TEAM = [
  {
    name: 'Akash Makana',
    role: 'Founder & Executive Producer',
    bio: 'Pioneering signature club takeovers, Bollywood nights, and stage productions at Chennai’s top nightlife destinations.',
    image: '/media/lotd_reel_3_thumb.jpg'
  },
  {
    name: 'Technical Sound & Lighting Lead',
    role: 'Chief AV Systems Engineer',
    bio: 'Specialist in Pioneer DJ setups, digital mixing consoles, DMX intelligent beam lighting, and indoor cold pyrotechnics.',
    image: '/media/lotd_reel_4_thumb.jpg'
  },
  {
    name: 'Artist Relations & Host Desk',
    role: 'Head of Talent & Hospitality',
    bio: 'Managing talent bookings, artist advancing, VIP guest lists, and backstage green room hospitality.',
    image: '/media/chennai_club_night_thumb.jpg'
  }
];
