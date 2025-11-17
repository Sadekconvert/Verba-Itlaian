import type { NavLink, Service, Industry, Testimonial } from './types';
import { TranslateIcon, WebsiteIcon, AppIcon, GamepadIcon, MicIcon, SubtitlesIcon, BriefcaseIcon, MegaphoneIcon, ScaleIcon, StethoscopeIcon, WrenchIcon, CodeIcon, ClockIcon, StarIcon, CheckCircleIcon } from './components/icons';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about' },
  { label: 'Leen™ AI', href: '/leen-ai' },
  { label: 'Resources', href: '/resources' },
  { label: 'Join Us', href: '/join-us' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES_LIST: Service[] = [
  { id: 'translation', icon: TranslateIcon, title: 'Translation Services', description: 'Everyday documents, emails, and communications—accurately translated.', href: '/services/translation', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop' },
  { id: 'website-localization', icon: WebsiteIcon, title: 'Website Localization', description: 'Make your website resonate with Italian users.', href: '/services/website-localization', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop' },
  { id: 'app-software-localization', icon: AppIcon, title: 'App & Software Localization', description: 'User-focused localization for mobile, desktop, and SaaS platforms.', href: '/services/app-software-localization', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2940&auto=format&fit=crop' },
  { id: 'game-localization', icon: GamepadIcon, title: 'Game Localization', description: 'Localize your game, not just translate it.', href: '/services/game-localization', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop' },
  { id: 'voiceover', icon: MicIcon, title: 'Voiceover Services', description: 'Voice that speaks directly to Italian audiences.', href: '/services/voiceover', image: 'https://images.unsplash.com/photo-1590602848952-a9914d48a10d?q=80&w=2940&auto=format&fit=crop' },
  { id: 'subtitling', icon: SubtitlesIcon, title: 'Subtitling Services', description: 'High-quality subtitles for clarity and cultural precision.', href: '/services/subtitling', image: 'https://images.unsplash.com/photo-1616587992928-083f248232c1?q=80&w=2874&auto=format&fit=crop' },
];

export const FEATURED_SERVICES_TEASER = [
    { title: "Website Localization", description: "Make your website feel native to Italian audiences.", icon: WebsiteIcon, href: "/services/website-localization" },
    { title: "App & Software Localization", description: "Seamlessly adapt your app for Italian users.", icon: AppIcon, href: "/services/app-software-localization" },
    { title: "Voiceover Services", description: "Professional Italian voice actors for media & entertainment.", icon: MicIcon, href: "/services/voiceover" },
    { title: "Subtitling", description: "Accurate, timed subtitles for videos and films.", icon: SubtitlesIcon, href: "/services/subtitling" },
];

export const INDUSTRIES_LIST: Industry[] = [
    { name: 'Gaming & Interactive Entertainment', description: 'Character dialogue that feels authentic, UI localization for consoles/mobile, and ESRB/PEGI compliance.' },
    { name: 'E-Commerce & Retail', description: 'Product descriptions that convert, localized checkout flows (tax/VAT, payment gateways), and SEO-optimized category pages.' },
    { name: 'Legal & Financial Services', description: 'Certified translations of contracts/patents, GDPR/compliance documentation, and banking app UI localization.' },
    { name: 'Tech & SaaS', description: 'Error messages that make sense in Italian, API documentation localization, and agile string updates for continuous deployment.' },
    { name: 'Healthcare & Life Sciences', description: 'Patient consent forms with HIPAA-compliant accuracy, medical device manuals (ISO 13485), and culturally sensitive health campaign transcreation.' },
    { name: 'Media & Entertainment', description: 'Subtitling that preserves humor/timing, voiceover casting for Italian dubs, and metadata localization for streaming platforms.' },
];

export const TESTIMONIALS_LIST: Testimonial[] = [
    { quote: "VerbaItalia helped us localize our mobile app into Italian flawlessly. Their team was responsive, fast, and highly professional.", author: 'Andreas L.', company: 'Product Manager, Berlin' },
    { quote: "Top-tier service with real cultural insight. The Leen™ QA system is a game-changer.", author: 'Lucia P.', company: 'Localization Manager, Milan' },
];

export const WHY_VERBAITALIA_POINTS = [
    { icon: CheckCircleIcon, title: 'Native Expertise', description: 'Italian is our specialty. Every word is crafted by native-speaking professionals.'},
    { icon: BriefcaseIcon, title: 'Industry Focused', description: 'From legal documents to immersive games, we tailor localization to your sector.'},
    { icon: ClockIcon, title: 'Fast Turnarounds, High Quality', description: 'We combine expert linguists and advanced tools to deliver fast, flawless results.'},
    { icon: CodeIcon, title: 'Powered by Leen™ AI', description: 'Our proprietary AI detects cultural nuances and ensures consistency—so your content always feels natural.'},
    { icon: StarIcon, title: 'Trusted by Global Brands', description: 'Our clients rely on our attention to detail, cultural precision, and confidentiality.'},
];