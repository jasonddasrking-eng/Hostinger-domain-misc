export interface Project {
  id: string;
  title: string;
  category: 'Landing Pages' | 'SaaS' | 'E-commerce' | 'Business' | 'Portfolios';
  client: string;
  summary: string;
  fullDescription: string;
  image: string;
  deliveryDays: number;
  highlightMetric: string;
  techStack: string[];
  aiTools: string[];
  liveUrl?: string;
  challenge: string;
  solution: string;
  aiAdvantage: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  turnaround: string;
  deliverables: string[];
  idealFor: string;
  startingPriceNGN: string;
  startingPriceUSD: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  outcome: string;
  projectType: string;
  avatarInitials: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  targetBusiness: string;
  tier: 'small-business' | 'standard';
  priceNGN: string;
  priceUSD: string;
  turnaround: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  aiRole: string;
  deliverables: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'pulse-saas',
    title: 'Pulse Metrics Analytics',
    category: 'SaaS',
    client: 'Pulse Dynamics Inc.',
    summary: 'Real-time telemetry and subscription analytics platform for enterprise B2B software companies.',
    fullDescription: 'Pulse needed a lightning-fast, high-converting product dashboard and marketing ecosystem before their Series A announcement. Leveraging Cursor and Next.js, we architected a modular component library and responsive data visualization suite in record time.',
    image: '/src/assets/images/project_saas_dashboard_1791059358043.jpg',
    deliveryDays: 7,
    highlightMetric: '+68% Demo Booking Rate',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    aiTools: ['Cursor', 'v0 by Vercel', 'Claude 3.7 Sonnet'],
    challenge: 'The founders had only 10 days before investor roadshow with an outdated legacy interface with 4.2s load times.',
    solution: 'Engineered a greenfield responsive web app with zero layout shift, sub-second TTFB, and an interactive live pricing calculator.',
    aiAdvantage: 'Generated initial dashboard wireframes in v0 within 4 hours, then used Cursor agentic workflows to refactor clean TypeScript types and API interfaces.',
    featured: true,
  },
  {
    id: 'strata-fintech',
    title: 'Strata Corporate Capital',
    category: 'Landing Pages',
    client: 'Strata Financial Group',
    summary: 'Next-generation credit card and cashflow infrastructure landing page engineered for high-ticket business conversion.',
    fullDescription: 'High-stakes fintech landing page with custom interactive rate calculators, fluid micro-animations, and bank-grade security trust indicators.',
    image: '/src/assets/images/project_fintech_landing_1791059367022.jpg',
    deliveryDays: 5,
    highlightMetric: '+42% Inbound Form Submissions',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    aiTools: ['Cursor', 'GPT-4o', 'Midjourney v6'],
    challenge: 'Low conversion on existing page due to confusing jargon, slow mobile performance, and generic visual design.',
    solution: 'Rebuilt the customer journey from scratch: single-screen value proposition, instant repayment slider, and friction-free multi-step form.',
    aiAdvantage: 'AI-assisted rapid copy testing generated 12 headline variants tested for maximum clarity; component scaffolded in minutes.',
    featured: true,
  },
  {
    id: 'lumiere-design',
    title: 'Lumière Digital Design Studio',
    category: 'Portfolios',
    client: 'Studio Lumière Paris',
    summary: 'High-end digital agency portfolio featuring interactive case studies, dynamic work showcases, and fluid micro-interactions.',
    fullDescription: 'A stark, minimalist editorial web portfolio engineered for a Paris-based digital brand consultancy. Features fullscreen interactive media transitions, custom cursor physics, and responsive typography.',
    image: '/src/assets/images/hero_ai_interface_1791059346709.jpg',
    deliveryDays: 6,
    highlightMetric: '99/100 Mobile Lighthouse Score',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Motion'],
    aiTools: ['v0', 'Claude 3.7', 'Cursor'],
    challenge: 'High-res assets caused severe lag and layout reflow on their previous WordPress site.',
    solution: 'Architected next-gen asset optimization pipeline with WebP format, blurhash placeholders, and buttery 60fps transitions.',
    aiAdvantage: 'Used Claude to craft custom masonry layout math without any external bulky masonry libraries, saving 140kb in bundle size.',
    featured: true,
  },
  {
    id: 'novabio-labs',
    title: 'NovaBio Therapeutics',
    category: 'Business',
    client: 'NovaBio Sciences',
    summary: 'Clean corporate biotech web portal explaining clinical trial pipelines, scientific advisory team, and investor relations.',
    fullDescription: 'A regulatory-compliant, modern corporate website designed to establish immediate scientific authority with institutional investors.',
    image: '/src/assets/images/project_saas_dashboard_1791059358043.jpg',
    deliveryDays: 8,
    highlightMetric: 'Launched 3 Weeks Ahead of Target',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    aiTools: ['Cursor', 'Claude 3.7', 'Lovable'],
    challenge: 'Scientific team had dense scientific manuscripts with no clear visual hierarchy for non-technical investors.',
    solution: 'Created an interactive visual pipeline timeline and downloadable prospectus gating system with zero friction.',
    aiAdvantage: 'Extracted key milestone data directly from PDFs into clean React structured schemas in seconds using LLM parsing.',
  },
  {
    id: 'kinship-goods',
    title: 'Kinship Artisan Roasters',
    category: 'E-commerce',
    client: 'Kinship Coffee Collective',
    summary: 'Direct-to-consumer artisanal coffee subscription portal with personalized blend finder quiz and recurring billing flow.',
    fullDescription: 'High-converting headless commerce storefront built for recurring coffee subscriptions with customized roast preference selector.',
    image: '/src/assets/images/project_fintech_landing_1791059367022.jpg',
    deliveryDays: 9,
    highlightMetric: '+$18.5k Monthly Recurring Revenue in Mo 1',
    techStack: ['React', 'Shopify Storefront API', 'Tailwind CSS'],
    aiTools: ['Cursor', 'v0', 'GPT-4o'],
    challenge: 'Standard Shopify theme felt generic and dropped 60% of users during subscription roast selection.',
    solution: 'Built a 3-question recommendation engine that pairs users with their ideal roast in 30 seconds with 1-click checkout.',
    aiAdvantage: 'Generated the quiz recommendation logic and mobile drawer cart state in 1 day using AI code pairing.',
  },
  {
    id: 'zenith-ai-os',
    title: 'Zenith Developer Gateway',
    category: 'Landing Pages',
    client: 'Zenith Labs',
    summary: 'Developer documentation portal and API playground for modern agentic AI orchestration pipelines.',
    fullDescription: 'An ultra-refined developer experience with interactive code snippets, copy-paste curl commands, and dark-mode aesthetic.',
    image: '/src/assets/images/hero_ai_interface_1791059346709.jpg',
    deliveryDays: 6,
    highlightMetric: '3,200+ Waitlist Developers in 48h',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'PrismJS'],
    aiTools: ['Cursor', 'Claude 3.7', 'v0'],
    challenge: 'Developer tools require immaculate documentation UX; standard docs frameworks felt sterile.',
    solution: 'Crafted a custom docs experience with inline playground, dark mode syntax highlighting, and live response mockers.',
    aiAdvantage: 'AI agent generated complete OpenAPI interactive endpoint wrappers and mock responses in 3 hours.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'ai-development',
    title: 'AI-Accelerated Web Development',
    shortDesc: 'Turn your design or concept into clean, battle-tested production React code at 3x standard agency speed.',
    fullDesc: 'We bypass weeks of manual boilerplate typing. Utilizing advanced AI coding tools like Cursor, Claude 3.7, and v0 alongside 8+ years of engineering rigor, you receive hand-crafted quality in a fraction of the traditional timeline.',
    turnaround: '5–8 business days',
    startingPriceNGN: '₦1,421,000',
    startingPriceUSD: '$1,176',
    idealFor: 'Startups, founders & businesses in Nigeria and globally needing fast, high-quality execution without bloated overhead.',
    deliverables: [
      'Full modern React / Next.js / TypeScript codebase',
      'Clean Tailwind CSS architecture (no rigid template locks)',
      'Sub-second load times & 95+ Core Web Vitals score',
      'Full GitHub repository handover & 1-click deployment',
    ],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages & Conversion Engines',
    shortDesc: 'Laser-focused single pages engineered to convert cold visitors into qualified leads, demos, and buyers.',
    fullDesc: 'A great landing page is not just visual flair; it is a mathematical conversion funnel. We pair persuasive copywriting architecture with instant-load frontend engineering to maximize your ad spend ROI.',
    turnaround: '3–5 business days',
    startingPriceNGN: '₦833,000',
    startingPriceUSD: '$735',
    idealFor: 'Product launches, marketing campaigns, waitlists & lead generation funnels.',
    deliverables: [
      'Strategic value proposition & copy structuring',
      'Interactive ROI calculators / lead capture forms',
      'Mobile-first responsive layout & subtle micro-interactions',
      'Analytics & event tracking integration (Paystack/Flutterwave/Stripe ready)',
    ],
  },
  {
    id: 'full-custom',
    title: 'Full Custom Websites & SaaS MVPs',
    shortDesc: 'Comprehensive multi-page websites, customer portals, and lightweight web apps built for scale.',
    fullDesc: 'From multi-page corporate sites to dynamic web applications with database integrations and authentication, we deliver enterprise-grade digital architecture on modern serverless stacks.',
    turnaround: '7–12 business days',
    startingPriceNGN: '₦2,352,000',
    startingPriceUSD: '$2,058',
    idealFor: 'Growing Nigerian businesses, B2B software companies, and international brands upgrading their digital presence.',
    deliverables: [
      'Multi-page architecture with dynamic routing',
      'Content management setup (Sanity, Strapi, or Markdown)',
      'SEO-structured metadata, sitemap & Schema.org markup',
      'Full mobile optimization across all browser viewports',
    ],
  },
  {
    id: 'redesign-modernization',
    title: 'Website Redesign & Modernization',
    shortDesc: 'Transform dated, slow, high-maintenance legacy websites into fast, modern, high-converting digital assets.',
    fullDesc: 'Is your current site stuck on bloated WordPress builders, lagging on mobile data networks, or failing to convert? We extract your content, modernize your visual branding, and migrate to an agile modern tech stack.',
    turnaround: '5–7 business days',
    startingPriceNGN: '₦1,078,000',
    startingPriceUSD: '$931',
    idealFor: 'Companies with existing traffic who are losing conversions due to slow, outdated design.',
    deliverables: [
      'Comprehensive performance & UX audit',
      'Content migration & URL redirect protection',
      '4x to 10x faster page loading speeds on mobile networks',
      'Polished modern aesthetic aligned with industry leaders',
    ],
  },
  {
    id: 'maintenance-optimization',
    title: 'Ongoing Sprints & Speed Optimization',
    shortDesc: 'Dedicated monthly engineering bandwidth for landing page iterations, feature additions, and speed maintenance.',
    fullDesc: 'No need to hire a full-time in-house developer. Get on-demand access to a senior AI-assisted engineer to test new landers, squash bugs, and keep your tech running at peak performance.',
    turnaround: '24–48h per request',
    startingPriceNGN: '₦637,000/mo',
    startingPriceUSD: '$539/mo',
    idealFor: 'Agencies with client overflow and fast-moving teams testing new offers weekly.',
    deliverables: [
      'Dedicated Slack/WhatsApp communication channel',
      'Unlimited minor updates & weekly A/B landing variations',
      'Continuous Core Web Vitals monitoring & security audits',
      'Zero long-term lock-in (pause or cancel anytime)',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Femi Adeleke',
    role: 'Founder & CEO',
    company: 'Apex Logistics & Tech',
    location: 'Nigeria',
    quote: 'Ja-Sey delivered our complete corporate logistics web portal in just 6 days. Local agencies quoted us ₦12M and a 2-month timeline. The speed, responsiveness on Nigerian mobile networks, and clean code were world-class.',
    outcome: '+84% Inbound Quote Requests',
    projectType: 'Logistics Web App',
    avatarInitials: 'FA',
  },
  {
    id: 't2',
    name: 'Chidinma Nwosu',
    role: 'Head of Growth',
    company: 'KudiFlow Capital',
    location: 'Nigeria',
    quote: 'Working with Ja-Sey feels like having an elite international engineering squad right here in Nigeria. His ability to combine AI tools with strict frontend engineering standards delivered our fintech launch ahead of schedule.',
    outcome: '+42% Qualified Leads',
    projectType: 'Fintech Platform',
    avatarInitials: 'CN',
  },
  {
    id: 't3',
    name: 'Marcus Thorne',
    role: 'Managing Partner',
    company: 'Thorne & Co. Ventures',
    location: 'London, United Kingdom',
    quote: 'We partner with Ja-Sey from the UK. He took our Figma files on Monday and had the live, pixel-perfect, accessible site deployed by Friday. Timezone coordination was seamless (WAT is just 1 hr from London).',
    outcome: 'Deployed in 4 Business Days',
    projectType: 'Venture Fund Portal',
    avatarInitials: 'MT',
  },
  {
    id: 't4',
    name: 'Sophie Lin',
    role: 'Creative Director',
    company: 'Studio Lumière',
    location: 'Toronto, Canada',
    quote: 'Distance was never an issue. Ja-Sey’s AI-accelerated workflow, clear communication, and incredible attention to detail produced a 99/100 Lighthouse score for our studio showcase.',
    outcome: '99/100 Mobile Lighthouse',
    projectType: 'Design Studio Portfolio',
    avatarInitials: 'SL',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Strategic Blueprint',
    duration: 'Day 1',
    description: 'We align on your business goals, target audience, conversion actions, and aesthetic inspiration. No endless meetings—just a focused intake and architecture map.',
    aiRole: 'AI synthesizes competitor research, extracts key positioning angles, and outlines clean site architecture in hours.',
    deliverables: ['Project Roadmap', 'Site Architecture & Wireframe Spec', 'Technical Stack Alignment'],
  },
  {
    step: '02',
    title: 'AI-Assisted Rapid Prototyping',
    duration: 'Days 2–3',
    description: 'We generate interactive visual layouts and user flows rapidly. Instead of static mockups that take weeks in Figma, you interact with functional web components right away.',
    aiRole: 'Tools like v0 and Claude quickly generate multiple layout variations, enabling instant visual exploration and feedback.',
    deliverables: ['Interactive Layout Preview', 'Design System & Component Library', 'Content & Copy Integration'],
  },
  {
    step: '03',
    title: 'Clean Engineering & AI Refinement',
    duration: 'Days 4–6',
    description: 'This is where senior developer expertise shines. We take the validated design and write clean, semantic TypeScript and Tailwind code with zero bloat.',
    aiRole: 'Cursor IDE accelerates boilerplate, unit testing, and responsive styling while I enforce strict architectural standards.',
    deliverables: ['Production TypeScript Codebase', 'Fluid Micro-Interactions & Animations', 'Form Validations & API Hooks'],
  },
  {
    step: '04',
    title: 'Performance Audit, Launch & Handover',
    duration: 'Days 7–8',
    description: 'Rigorous cross-browser QA, mobile testing, Core Web Vitals optimization, and 1-click Vercel/Netlify deployment with zero downtime.',
    aiRole: 'Automated AI accessibility scanners and Lighthouse audits ensure top scores and semantic compliance before launch.',
    deliverables: ['Live Production Deployment', '100% Code Ownership & GitHub Repo', 'Lighthouse 95+ Audit Report'],
  },
];

export const COMPARISON_ROWS = [
  {
    metric: 'Delivery Timeline',
    traditional: '4 to 8 weeks (sluggish meetings)',
    alexAI: '5 to 10 days (rapid iteration)',
    highlight: true,
  },
  {
    metric: 'Investment Range',
    traditional: '₦8,000,000 – ₦25,000,000+ ($6,000 – $18,000+)',
    alexAI: '₦833,000 – ₦2,744,000 ($735 – $2,352)',
    highlight: true,
  },
  {
    metric: 'Communication',
    traditional: 'Account managers & ticketing queues',
    alexAI: 'Direct with your senior engineer',
    highlight: false,
  },
  {
    metric: 'Code Quality',
    traditional: 'Heavy CMS themes or bloated agency boilerplate',
    alexAI: 'Hand-crafted, clean TypeScript & Tailwind CSS',
    highlight: false,
  },
  {
    metric: 'Speed & Mobile Networks',
    traditional: 'Often 45–65 on mobile with plugin bloat',
    alexAI: 'Consistently 95–100 sub-second performance on 4G/5G',
    highlight: true,
  },
  {
    metric: 'Revision Cycles',
    traditional: '3–5 days per revision turn',
    alexAI: 'Same-day or next-day turnaround',
    highlight: false,
  },
];

export const SMALL_BUSINESS_PLANS: PricingPlan[] = [
  {
    id: 'micro-launch',
    name: 'Micro Launch & Bio-Store',
    badge: 'Small Business Entry',
    tier: 'small-business',
    tagline: 'Ultra-fast single-screen digital showcase and order portal for small shops, artisans, and vendors.',
    targetBusiness: 'Small Businesses · Instagram & WhatsApp Vendors · Solopreneurs',
    priceNGN: '₦150,000',
    priceUSD: '$135',
    turnaround: '2–3 business days',
    popular: false,
    features: [
      'High-speed 1-page mobile-first storefront & bio link',
      'Direct 1-click WhatsApp order button with prefilled cart note',
      'Paystack payment button setup (receive Naira directly into your account)',
      'Sub-1.0s mobile load speed on Nigerian 3G/4G networks',
      'Google Maps & Google Business profile link integration',
      'Free cloud hosting setup (zero monthly hosting maintenance bills)',
      '100% full source code ownership',
      '7 days of free post-launch adjustments',
    ],
    ctaText: 'Start for ₦150,000',
  },
  {
    id: 'small-biz-storefront',
    name: 'Small Biz Storefront',
    badge: 'Most Popular for Small Business',
    tier: 'small-business',
    tagline: 'Complete single-page conversion website with services menu, testimonials, and automated checkout.',
    targetBusiness: 'Boutique Stores · Salons & Spas · Clinics · Freelancers · Local Brands',
    priceNGN: '₦220,000',
    priceUSD: '$195',
    turnaround: '3–4 business days',
    popular: true,
    features: [
      'Full multi-section landing page (Hero, Services/Menu, Pricing, Reviews, Contact)',
      'Automated Paystack & Flutterwave payment link integration',
      'Direct WhatsApp customer inquiry chat & quick quote form',
      'On-page local SEO & WhatsApp/Twitter preview image cards',
      'Sub-second Core Web Vitals speed score (98+ Google Lighthouse)',
      'Domain configuration, SSL security & 1-click cloud deploy',
      '100% code ownership with zero recurring vendor lock-in',
      '14 days of dedicated post-launch support & tweaks',
    ],
    ctaText: 'Choose Small Biz Storefront',
  },
  {
    id: 'small-biz-pro',
    name: 'Small Business Multi-Page Pro',
    badge: 'Full Small Business Suite',
    tier: 'small-business',
    tagline: 'Up to 3 high-impact pages designed to build supreme credibility and win steady client bookings.',
    targetBusiness: 'Local Consultancies · Schools · Legal/Accounting · Real Estate Agents',
    priceNGN: '₦290,000',
    priceUSD: '$260',
    turnaround: '4–5 business days',
    popular: false,
    features: [
      'Up to 3 custom pages (Home, Services & Portfolio, Contact & Booking)',
      'Interactive appointment scheduler or custom quote calculator',
      'Dual payment gateway integration (Paystack & Flutterwave)',
      'Local Google SEO schema rich snippets for Google search rankings',
      'Full mobile responsiveness across all Android & iOS devices',
      '100% source code repository handover with zero monthly lock-in',
      'Video walkthrough on how to review and manage customer leads',
      '21 days of priority post-launch support & warranty',
    ],
    ctaText: 'Select Small Biz Pro',
  },
];

export const STANDARD_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Standard Growth',
    badge: 'Standard Size Business',
    tier: 'standard',
    tagline: 'High-impact launchpad for standard size businesses, regional brands & early commercial ventures.',
    targetBusiness: 'Standard Size Companies · Retail Outlets · Commercial Brands',
    priceNGN: '₦372,400',
    priceUSD: '$343',
    turnaround: '3–5 business days',
    popular: false,
    features: [
      'Custom 1-page conversion website / landing page',
      'Ultra-fast load time on Nigerian mobile networks (4G/3G)',
      'Direct WhatsApp chat integration & quick quote form',
      'Paystack or Flutterwave payment link integration',
      'Google Maps, Google Business & local SEO optimization',
      'Domain connection, SSL security & 1-click cloud deploy',
      '100% full source code ownership (zero monthly lock-in)',
      '14 days of free post-launch adjustments',
    ],
    ctaText: 'Start Standard Growth',
  },
  {
    id: 'growth',
    name: 'Business Accelerator',
    badge: 'Standard Size · Most Popular',
    tier: 'standard',
    tagline: 'Comprehensive multi-page digital asset built to establish market dominance and win high-ticket clients.',
    targetBusiness: 'Established Standard Businesses · Startups · Corporate Consultancies',
    priceNGN: '₦833,000',
    priceUSD: '$735',
    turnaround: '5–8 business days',
    popular: true,
    features: [
      '5 to 7 custom pages (Home, About, Services, Case Studies, Contact)',
      'Handcrafted React / Next.js & Tailwind CSS architecture',
      'Interactive quote calculator or online appointment booking',
      'Full technical SEO, Schema.org rich snippets & OpenGraph cards',
      'Headless CMS integration for effortless blogging & team updates',
      'Sub-second performance (98+ Google Lighthouse score)',
      'Multi-currency ready (NGN & USD payment gateways)',
      '30 days of priority post-launch support & video walkthrough',
    ],
    ctaText: 'Choose Business Accelerator',
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Scale',
    badge: 'Large Enterprises & Tech Companies',
    tier: 'standard',
    tagline: 'Custom web software, SaaS frontends, and bespoke enterprise platforms engineered for high volume.',
    targetBusiness: 'Large Corporate Organizations · Fintechs · High-Volume E-Commerce',
    priceNGN: '₦1,911,000',
    priceUSD: '$1,764',
    turnaround: '8–14 business days',
    popular: false,
    features: [
      'Full bespoke multi-page portal or interactive SaaS frontend MVP',
      'Custom API integrations, webhooks & backend database hooks',
      'Advanced checkout automations (Automated Paystack, Flutterwave & Stripe)',
      'User portals, role-based dashboards, or complex product catalogues',
      'Rigorous security audit, accessibility compliance & cross-browser QA',
      'Dedicated GitHub repository handover & full technical documentation',
      'Direct WhatsApp/Slack VIP communication channel with 2-hour SLA',
      '60 days of dedicated post-launch monitoring & warranty',
    ],
    ctaText: 'Inquire for Enterprise',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  ...SMALL_BUSINESS_PLANS,
  ...STANDARD_PLANS,
];
