import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST } from '../constants';
import { 
    CheckCircleIcon, 
    CodeIcon, 
    StarIcon,
    DocumentTextIcon,
    MegaphoneIcon,
    ScaleIcon,
    StethoscopeIcon,
    WrenchIcon,
    TranslateIcon
} from '../components/icons';

const TextCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-verba-beige/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-verba-beige/10 shadow-lg h-full flex flex-col ${className}`}>
    {children}
  </div>
);

const ImageCard: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <div className={`rounded-2xl overflow-hidden shadow-lg h-full bg-verba-navy/20 ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const CtaCard: React.FC = () => (
    <div className="bg-verba-terracotta/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-verba-terracotta/50 shadow-lg h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-2xl font-bold">Ready to Go Global?</h2>
        <p className="mt-2 text-white/90">Let's adapt your content for the Italian market. Get a precise, no-obligation quote today.</p>
        <Link to="/request-quote" className="mt-6 inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-6 rounded-full hover:bg-verba-beige transition-all duration-300 shadow-md">
            Request a Free Quote
        </Link>
    </div>
);


const translationSubcategories = [
    { icon: DocumentTextIcon, title: 'General Translations', description: 'Everyday documents, emails, and communications—accurately translated.', cta: 'Learn More', href: '/services/translation' },
    { icon: MegaphoneIcon, title: 'Marketing & Advertising', description: 'Localize campaigns to resonate with Italian consumers.', cta: 'Get Quote', href: '/request-quote' },
    { icon: ScaleIcon, title: 'Legal Translations', description: 'Certified, legally binding translations for contracts and compliance.', cta: 'See Expertise', href: '/services/translation' },
    { icon: StethoscopeIcon, title: 'Medical Translations', description: 'Precise, HIPAA-compliant translations for healthcare and pharma.', cta: 'Trust Our Accuracy', href: '/services/translation' },
    { icon: WrenchIcon, title: 'Technical Translations', description: 'Manuals, patents, and engineering documents—flawless terminology.', cta: 'Discuss Your Project', href: '/request-quote' },
];


const ServicesPage: React.FC = () => {
  const serviceData = {
    translation: SERVICES_LIST.find(s => s.id === 'translation'),
    website: SERVICES_LIST.find(s => s.id === 'website-localization'),
    app: SERVICES_LIST.find(s => s.id === 'app-software-localization'),
    game: SERVICES_LIST.find(s => s.id === 'game-localization'),
    voiceover: SERVICES_LIST.find(s => s.id === 'voiceover'),
    subtitling: SERVICES_LIST.find(s => s.id === 'subtitling'),
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-transparent pt-20 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-verba-green/10 via-verba-beige/10 to-verba-terracotta/10 opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Precision-Crafted Italian Localization & Translation Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            From games to legal documents, we adapt your content for Italian audiences—with cultural accuracy, technical expertise, and AI-powered quality checks.
          </p>
           <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
               <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-6 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                    Get a Free Quote →
                </Link>
                <Link to="/services/game-localization" className="text-sm text-verba-beige/80 hover:text-white">Or explore our most popular service: <span className="font-bold underline">Game Localization →</span></Link>
           </div>
           <div className="mt-8 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
              <span className="flex items-center text-verba-beige/80 text-sm"><StarIcon className="h-4 w-4 mr-2 text-verba-green"/> Trusted by 200+ global clients</span>
              <span className="flex items-center text-verba-beige/80 text-sm"><CheckCircleIcon className="h-4 w-4 mr-2 text-verba-green"/> ISO 17100 Certified Linguists</span>
              <span className="flex items-center text-verba-beige/80 text-sm"><CodeIcon className="h-4 w-4 mr-2 text-verba-green"/> Powered by Leen™ AI for cultural QA</span>
           </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        
        {/* Grid 1: Key Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <TextCard className="lg:col-span-2 lg:row-span-2">
                <span className="text-sm font-bold text-verba-terracotta">🎯 KEY OFFERING</span>
                <h2 className="text-3xl font-bold text-white mt-2">Game Localization</h2>
                <p className="mt-4 text-verba-beige/80">Localize your game, not just translate it. We specialize in full-scope Italian game localization:</p>
                <ul className="mt-4 space-y-2 text-verba-beige/80 list-disc list-inside">
                    <li>In-game dialogue & menus</li>
                    <li>Voice casting & integration</li>
                    <li>Cultural adaptation & playtesting</li>
                </ul>
                <p className="mt-4 text-verba-beige/80">Give Italian gamers the experience they deserve.</p>
                <div className="flex-grow"></div>
                <Link to="/services/game-localization" className="mt-6 font-bold text-verba-terracotta hover:underline self-start">
                    Dive Into Game Localization »
                </Link>
            </TextCard>
            {serviceData.game && <ImageCard src={serviceData.game.image} alt={serviceData.game.title} className="lg:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-0" />}
            
            {serviceData.website && <ImageCard src={serviceData.website.image} alt={serviceData.website.title} className="lg:col-span-2 min-h-[300px]" />}
            <TextCard className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white">🌐 Website Localization</h2>
                <p className="mt-4 text-verba-beige/80 flex-grow">Make your website resonate with Italian users. We adapt not just your words, but your entire online experience — layout, cultural nuance, imagery, and SEO — to reach and engage Italian-speaking audiences.</p>
                <Link to="/services/website-localization" className="mt-6 font-bold text-verba-terracotta hover:underline self-start">
                    Learn More About Website Localization »
                </Link>
            </TextCard>
        </div>

        {/* Grid 2: Digital Products & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TextCard className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-white">📱 App & Software Localization</h2>
                <p className="mt-4 text-verba-beige/80 flex-grow">User-focused localization for mobile, desktop, and SaaS platforms. From UI strings and user manuals to app store descriptions, we ensure your digital products feel native in Italian while maintaining functionality and brand voice.</p>
                <Link to="/services/app-software-localization" className="mt-6 font-bold text-verba-terracotta hover:underline self-start">
                    Discover App & Software Localization »
                </Link>
            </TextCard>
            {serviceData.app && <ImageCard src={serviceData.app.image} alt={serviceData.app.title} className="lg:col-span-1 min-h-[300px]" />}
            <CtaCard />
        </div>

        {/* Grid 3: Media Services */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <TextCard className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white">🗣️ Voiceover Services</h2>
                <p className="mt-4 text-verba-beige/80">Voice that speaks directly to Italian audiences. We offer voiceover services for:</p>
                <ul className="mt-4 space-y-2 text-verba-beige/80 list-disc list-inside flex-grow">
                    <li>Commercials & promos</li>
                    <li>E-learning modules</li>
                    <li>Audiobooks & Games</li>
                </ul>
                <Link to="/services/voiceover" className="mt-6 font-bold text-verba-terracotta hover:underline self-start">
                    Explore Voiceover Services »
                </Link>
            </TextCard>
            {serviceData.voiceover && <ImageCard src={serviceData.voiceover.image} alt={serviceData.voiceover.title} className="lg:col-span-2 min-h-[300px]" />}
            {serviceData.subtitling && <ImageCard src={serviceData.subtitling.image} alt={serviceData.subtitling.title} className="lg:col-span-2 min-h-[300px]" />}
            <TextCard className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white">🎬 Subtitling Services</h2>
                <p className="mt-4 text-verba-beige/80">High-quality subtitles for clarity and cultural precision. We provide:</p>
                <ul className="mt-4 space-y-2 text-verba-beige/80 list-disc list-inside flex-grow">
                    <li>Accurate time-coded subtitles</li>
                    <li>Translation & transcription</li>
                    <li>Formats for broadcast, digital, and social media</li>
                </ul>
                <Link to="/services/subtitling" className="mt-6 font-bold text-verba-terracotta hover:underline self-start">
                     View Subtitling Services »
                </Link>
            </TextCard>
        </div>
        
        {/* Translation Services Section */}
        <div className="grid grid-cols-1 gap-6">
             <TextCard className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-4">
                    <TranslateIcon className="h-8 w-8 text-verba-terracotta"/>
                    <h2 className="text-3xl font-bold text-white">Translation Services</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {translationSubcategories.map(sub => (
                        <div key={sub.title} className="bg-verba-navy/30 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <sub.icon className="h-5 w-5 text-verba-green flex-shrink-0" />
                                <h3 className="font-bold text-white">{sub.title}</h3>
                            </div>
                            <p className="text-sm text-verba-beige/70 mt-2">{sub.description}</p>
                            <Link to={sub.href} className="mt-3 text-sm font-bold text-verba-terracotta hover:underline self-start block">
                                {sub.cta} →
                            </Link>
                        </div>
                    ))}
                     <div className="bg-verba-navy/30 p-4 rounded-lg sm:col-span-2 lg:col-span-1 lg:col-start-3">
                        <h3 className="font-bold text-white">Languages</h3>
                        <p className="text-sm text-verba-beige/70 mt-2">Specializing in <span className="font-bold">English, German, French, Spanish, Swedish, Danish, Norwegian, Finnish ↔ Italian</span> (and vice versa).</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link to="/services/translation" className="font-bold text-lg text-verba-terracotta hover:underline">
                        View Full Translation Services →
                    </Link>
                </div>
            </TextCard>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;