// Plain data only: this module is imported by vite.config.ts at build time to prerender
// per-route HTML (titles, Open Graph tags, sitemap), so it must not import React, JSX, CSS or assets.

export const SITE = {
  url: 'https://temnadigital.hr',
  name: 'Temna Digital',
  author: 'Lovro Buničić',
  title: 'Lovro Buničić | Senior Software Engineer | Temna Digital',
  description:
    'Senior Software Engineer with over 7 years of experience building high-quality mobile applications for enterprise-scale systems across fintech, healthcare, and telecom industries.',
  email: 'lovro.bunicic@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lovro-buni%C4%8Di%C4%87/',
  location: 'Zagreb, Croatia',
  timeZone: 'Europe/Zagreb',
  // Shown next to the live clock in the hero when set, e.g. 'Available for projects from March'
  availability: null as string | null,
};

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  originalLink?: string;
  featured?: boolean;
}

export const posts: PostMeta[] = [
  {
    slug: 'type-driven-design',
    title: 'Type-Driven Design: Safer Software for Complex Domains',
    excerpt:
      'Reducing bugs via Type Driven Design - exploring how encoding business rules into the type system can eliminate entire classes of bugs before they reach production.',
    category: 'Software Engineering',
    date: 'Oct 22, 2025',
    readTime: '12 min read',
    author: 'Lovro Buničić',
    originalLink: 'https://medium.com/@lovro.bunicic/type-driven-design-6412f29e3d5d',
    featured: true,
  },
  {
    slug: 'ble-sdk-architecture',
    title: 'Solving Architectural Problems in Bluetooth Low Energy Mobile Apps',
    excerpt:
      'Learn how to create a solid BLE architecture using Command and Queue patterns to handle complex operations like OTA firmware updates.',
    category: 'Mobile Development',
    date: 'Jan 27, 2021',
    readTime: '10 min read',
    author: 'Lovro Buničić & Josip Grubeša',
    originalLink: 'https://arsfutura.com/blog/solving-architectural-problems-in-bluetooth-low-energy-mobile-apps',
  },
];

export type DeviceKind = 'phone' | 'tablet' | 'browser';

export interface ProjectMeta {
  // Public URL: /work/<slug>. Treat as permanent once deployed.
  slug: string;
  name: string;
  category: string;
  year: number;
  // Bento tile size on the home page
  size?: 'xl' | 'wide';
  device: DeviceKind;
  stats?: string;
  metrics?: { value: string; label: string }[];
  airlines?: string[];
  rating?: string;
  nda?: boolean;
  indie?: boolean;
  highlights: string[];
  technologies: string[];
  link?: string;
  // Optional real screenshot (path under /public), shown inside the device frame instead of the illustration
  image?: string;
  // Optional case-study write-up; each section renders only when filled in
  caseStudy?: {
    problem?: string;
    role?: string;
    approach?: string;
    outcome?: string;
  };
}

export const projects: ProjectMeta[] = [
  {
    slug: 'most-io',
    name: 'most.io - Aviation Retail Platform',
    category: 'Fintech',
    year: 2024,
    size: 'xl',
    device: 'tablet',
    image: '/work/most-io.jpg',
    stats: '160M+ Passengers • 28K+ Crew • 1K+ Aircrafts',
    metrics: [
      { value: '160M+', label: 'Passengers' },
      { value: '28K+', label: 'Crew members' },
      { value: '1K+', label: 'Aircraft' },
      { value: '5K+', label: 'Flights per day' },
    ],
    airlines: [
      'Southwest',
      'Hawaiian Airlines',
      'Emerald Airlines',
      'Neos',
      'TUI',
      'Breeze',
      'KM Malta Airlines',
      'Aer Lingus',
      'WestJet',
      'Viva Aerobus',
      'Porter',
    ],
    highlights: [
      'Building Flutter-based payment and retail platforms for major airlines',
      'Serving 28,000+ airline crew members across 1,000+ aircrafts globally',
      'Reaching 160M+ passengers worldwide with secure retail solutions',
      'Working with major carriers: Southwest Airlines, Play, Hawaiian Airlines, and more',
      'Developing PCI-compliant fintech systems for aviation transactions',
      'Building mobile POS and secure, offline-capable payment processing',
      'Supporting 5,000+ flights per day across global airline networks',
    ],
    technologies: ['Flutter', 'Dart', 'PCI Compliance', 'Fintech', 'Offline-First'],
    link: 'https://most.io/',
  },
  {
    slug: 'sentir',
    indie: true,
    name: 'Sentir: Daily Examen',
    category: 'Lifestyle',
    year: 2026,
    size: 'wide',
    device: 'phone',
    image: '/work/sentir.jpg',
    highlights: [
      'Designed and built a calm, native guided Ignatian Examen experience',
      'Shipped private journaling with biometric protection and optional iCloud sync',
      'Extended daily practice across Apple Watch, widgets, Live Activities, Dynamic Island, Siri, and Shortcuts',
      'Implemented reminders, haptics, background audio, localization, and in-app purchases',
    ],
    technologies: ['iOS', 'SwiftUI', 'SwiftData', 'CloudKit', 'WidgetKit', 'ActivityKit', 'watchOS', 'StoreKit'],
    link: 'https://apps.apple.com/app/sentir-daily-examen/id6804172372',
  },
  {
    slug: 'truthseeker',
    indie: true,
    name: 'TruthSeeker',
    category: 'Education',
    year: 2026,
    size: 'wide',
    device: 'browser',
    image: '/work/truthseeker-canvas.png',
    highlights: [
      'Designed and built a node-based canvas for constructing and evaluating logical arguments',
      'Implemented real-time three-valued truth propagation across premises, rules, and conclusions',
      'Added 15+ syllogism templates, nested sub-arguments, smart connections, and eight visual themes',
      'Built optional Firebase sync plus PNG, SVG, and presentation exports',
    ],
    technologies: ['Web', 'React', 'TypeScript', 'React Flow', 'Firebase', 'Formal Logic'],
    link: 'https://www.truthseeker.temnadigital.hr/',
  },
  {
    slug: 'ufo-tracker',
    name: 'UFO Tracking app',
    category: 'Entertainment',
    year: 2023,
    device: 'phone',
    rating: '4.8 ★ · 5.9K ratings',
    metrics: [
      { value: '200K+', label: 'Sightings' },
      { value: '500K', label: 'Community' },
      { value: '5.9K', label: 'US ratings' },
    ],
    image: '/work/ufo-tracker.jpg',
    highlights: [
      'Assisted the team in refactoring legacy code, setting up app architecture, and delivering the app to the App Store',
      'Identified and resolved multiple performance issues',
    ],
    technologies: ['iOS', 'SwiftUI', 'MapKit', 'Sentry', 'Segment', 'SpriteKit', 'GraphQL'],
    link: 'https://tinyurl.com/enigma-ios',
  },
  {
    slug: 'nova-eva',
    name: 'Nova Eva (freelance project)',
    category: 'Lifestyle',
    year: 2020,
    device: 'phone',
    rating: '4.9 ★, 108 ratings',
    image: '/work/nova-eva.jpg',
    highlights: ['Maintaining the app since 2020'],
    technologies: ['iOS', 'UIKit'],
    link: 'https://tinyurl.com/nova-eva',
  },
  {
    slug: 'mindfulness-app',
    name: 'Mindfulness app',
    category: 'Healthcare',
    year: 2023,
    size: 'wide',
    device: 'phone',
    nda: true,
    highlights: [
      'Led the project development (architecture setup, style guide, code reviews etc.)',
      'Communicated deadlines, bottlenecks, estimates to both the team and the clients',
      'Supervised backend development',
      'Implemented advanced SwiftUI animations',
      'Implemented 3D UI with SceneKit, integrated it with SwiftUI',
      'Worked with 3D Assets Team to identify and resolve performance issues',
    ],
    technologies: ['iOS', 'SwiftUI', 'SceneKit'],
  },
  {
    slug: 'temnadigital',
    name: 'temnadigital.hr - Portfolio Website',
    category: 'Web',
    year: 2026,
    device: 'browser',
    image: '/work/temnadigital.jpg',
    highlights: [
      'Designed and developed a modern, monochromatic portfolio website',
      'Built with React and TypeScript for type-safe, maintainable code',
      'Implemented interactive tech filtering with smooth animations',
      'Automated deployment pipeline with GitHub Actions to GitHub Pages',
      'Optimized for performance and responsive across all devices',
    ],
    technologies: ['Web', 'React', 'TypeScript', 'Vite', 'GitHub Actions'],
    link: 'https://temnadigital.hr/',
  },
  {
    slug: 'ble-medical-sdk',
    name: 'Bluetooth (BLE) SDK for a medical device',
    category: 'Healthcare',
    year: 2022,
    size: 'wide',
    device: 'phone',
    nda: true,
    highlights: [
      'Helped design the public API for the SDK',
      'Implemented the SDK',
      'Designed and implemented a robust Over The Air (OTA) firmware update mechanism',
      'Delivered the product via private cocoapod spec',
      'Wrote about architectural challenges in a blog post',
    ],
    technologies: ['iOS', 'Bluetooth', 'OTA', 'Cocoapods', 'CoreBluetooth'],
    link: 'http://tinyurl.com/ble-blogpost',
  },
  {
    slug: 'gaming-arena',
    name: 'Gaming Arena Reservation iPad Application',
    category: 'Entertainment',
    year: 2021,
    device: 'tablet',
    nda: true,
    highlights: [
      'Helped resolving backend - client integration issues by introducing Clean Architecture concepts',
      'Helped implement Square payments',
      'Implemented custom and complex layouts for seat reservation calendar',
    ],
    technologies: ['iOS', 'RxSwift', 'Clean Architecture', 'iPadOS', 'WebSockets', 'Sentry', 'Bitrise'],
  },
  {
    slug: 'telecom-app',
    name: 'Mobile App for a Major Telecom',
    category: 'Telecom',
    year: 2022,
    device: 'phone',
    nda: true,
    highlights: [
      'Helped with app development',
      'Implemented server driven UI for subscription tier based screens',
    ],
    technologies: ['iOS', 'UIKit', 'Server driven UI'],
  },
  {
    slug: 'smart-lab-iot',
    name: 'Smart Lab Monitoring (IOT)',
    category: 'IoT',
    year: 2020,
    device: 'phone',
    nda: true,
    highlights: ['Developed a simple app that included sensor data monitoring and push notifications'],
    technologies: ['iOS', 'UIKit', 'Firebase Cloud Messaging'],
  },
  {
    slug: 'hskiki26',
    name: 'HSKIKI26 (freelance project)',
    category: 'Events',
    year: 2019,
    device: 'phone',
    nda: true,
    highlights: [
      'Developed native Android and iOS conference itinerary applications for Croatian Meeting of Chemists and Chemical Engineers',
    ],
    technologies: ['iOS', 'UIKit'],
  },
];

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  type: 'website' | 'article';
}

const DEFAULT_IMAGE = '/og/default.png';

// Every prerendered route with its head metadata. Used by the build and by the app for document.title.
export function getRoutes(): RouteMeta[] {
  return [
    { path: '/', title: SITE.title, description: SITE.description, image: DEFAULT_IMAGE, type: 'website' },
    {
      path: '/blog',
      title: `Writing | ${SITE.name}`,
      description: 'Articles on software architecture, type-driven design and mobile development.',
      image: DEFAULT_IMAGE,
      type: 'website',
    },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      title: `${post.title} | ${SITE.name}`,
      description: post.excerpt,
      image: `/og/blog-${post.slug}.png`,
      type: 'article' as const,
    })),
    ...projects.map((project) => ({
      path: `/work/${project.slug}`,
      title: `${project.name} | ${SITE.name}`,
      description: project.highlights[0],
      image: DEFAULT_IMAGE,
      type: 'website' as const,
    })),
  ];
}

export function getRouteMeta(path: string): RouteMeta | undefined {
  return getRoutes().find((route) => route.path === path);
}
