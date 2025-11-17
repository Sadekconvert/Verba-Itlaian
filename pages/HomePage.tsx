
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS_LIST, WHY_VERBAITALIA_POINTS, FEATURED_SERVICES_TEASER } from '../constants';
import { GamepadIcon, BriefcaseIcon, CheckCircleIcon, StarIcon } from '../components/icons';

const GlassCard: React.FC<{ icon: React.FC<React.SVGProps<SVGSVGElement>>; title: string; children: React.ReactNode; }> = ({ icon: Icon, title, children }) => (
  <div className="bg-verba-beige/5 backdrop-blur-xl p-6 rounded-2xl border border-verba-beige/10 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-verba-terracotta/20 p-3 rounded-full">
        <Icon className="h-6 w-6 text-verba-terracotta" />
      </div>
      <h3 className="text-xl font-bold text-verba-beige">{title}</h3>
    </div>
    <p className="text-verba-beige/80">{children}</p>
  </div>
);

const BentoTextCard: React.FC<{ icon: React.FC<React.SVGProps<SVGSVGElement>>; title: string; description: string; className?: string }> = ({ icon: Icon, title, description, className = '' }) => (
    <div className={`bg-verba-beige/5 backdrop-blur-xl p-6 rounded-2xl border border-verba-beige/10 shadow-lg flex flex-col justify-center ${className}`}>
        <div className="flex items-center gap-4 mb-3">
            <div className="bg-verba-green-dark/50 p-3 rounded-full">
                <Icon className="h-6 w-6 text-verba-green" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-verba-beige/80">{description}</p>
    </div>
);

const BentoImageCard: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
    <div className={`rounded-2xl overflow-hidden shadow-lg h-full ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
);

const LeenAiSection: React.FC = () => {
    const conversations = {
        en: [
            { type: 'ai', text: "Hi! How can I help with your localization?" },
            { type: 'user', text: `Is the term "sidekick" okay for an Italian audience?` },
            { type: 'ai', text: `It's understood, but "spalla" or "braccio destro" feels more natural. I've added it to the glossary!` }
        ],
        it: [
            { type: 'ai', text: "Ciao! Come posso aiutare con la localizzazione?" },
            { type: 'user', text: `Il termine "sidekick" va bene per un pubblico italiano?` },
            { type: 'ai', text: `È comprensibile, ma "spalla" o "braccio destro" è più naturale. L'ho aggiunto al glossario!` }
        ]
    };

    const [currentLang, setCurrentLang] = useState<'en' | 'it'>('en');
    const [messages, setMessages] = useState<{ type: string; text: string }[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const conversation = conversations[currentLang];

        if (step >= conversation.length) {
            const resetTimer = setTimeout(() => {
                setStep(0);
                setMessages([]);
                setCurrentLang(prev => (prev === 'en' ? 'it' : 'en'));
            }, 3000);
            return () => clearTimeout(resetTimer);
        }

        const currentMessage = conversation[step];
        let actionTimer: ReturnType<typeof setTimeout>;
        let typingTimer: ReturnType<typeof setTimeout>;

        if (currentMessage.type === 'user') {
            actionTimer = setTimeout(() => {
                setMessages(prev => [...prev, currentMessage]);
                setStep(prev => prev + 1);
            }, 1500);
        } else {
            typingTimer = setTimeout(() => {
                setIsTyping(true);
                actionTimer = setTimeout(() => {
                    setIsTyping(false);
                    setMessages(prev => [...prev, currentMessage]);
                    setStep(prev => prev + 1);
                }, 1200);
            }, step === 0 ? 500 : 1000);
            return () => {
                clearTimeout(typingTimer);
                clearTimeout(actionTimer);
            };
        }

        return () => clearTimeout(actionTimer);
    }, [step, currentLang]);
    
    const TypingIndicator = () => (
        <div className="flex justify-start animate-fade-in">
            <div className="p-3 rounded-2xl max-w-[85%] shadow-md bg-verba-green-dark rounded-bl-lg text-white">
                <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-white/50 rounded-full typing-dot" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-white/50 rounded-full typing-dot" style={{ animationDelay: '200ms' }}></span>
                    <span className="w-2 h-2 bg-white/50 rounded-full typing-dot" style={{ animationDelay: '400ms' }}></span>
                </div>
            </div>
        </div>
    );

    return (
         <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">About Leen™ AI</h2>
                    <p className="mt-4 max-w-3xl mx-auto lg:mx-0 text-lg text-verba-beige/70">
                        <b>Leen™ – Human-Driven Quality, AI-Supported.</b> Our proprietary AI tool Leen™ doesn't translate—it elevates. It helps our linguists prepare glossaries, spot cultural issues, and run quality checks, ensuring each project meets our highest standards—faster, better, smarter.
                    </p>
                    <div className="mt-8">
                        <Link to="/leen-ai" className="font-bold text-verba-terracotta hover:underline">
                        How Leen™ Works →
                        </Link>
                    </div>
                </div>
                <div className="relative min-h-[500px] flex items-center justify-center">
                    <div className="w-[300px] h-[600px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:translate-x-[160px]">
                        <div 
                            className="relative w-full h-full bg-gray-900 rounded-[50px] border-[12px] border-black shadow-2xl"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>
                            <div className="w-full h-full bg-verba-navy-dark rounded-[38px] overflow-hidden p-4 flex flex-col justify-between">
                                <div className="space-y-3 flex-grow">
                                    {messages.map((msg, index) => (
                                        <div key={`${currentLang}-${index}`} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`p-3 rounded-2xl max-w-[85%] shadow-md animate-fade-in ${msg.type === 'user' ? 'bg-verba-terracotta rounded-br-lg text-white' : 'bg-verba-green-dark rounded-bl-lg text-white'}`}>
                                                <p className="text-sm">{msg.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && <TypingIndicator />}
                                </div>
                                <div className="flex justify-around items-center p-2 bg-black/20 rounded-b-[30px] -m-4 mt-4 flex-shrink-0">
                                    <svg className="w-7 h-7 text-white/50" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-.293-.707L16 11.586V8a6 6 0 00-6-6zM8 18a2 2 0 114 0H8z"></path></svg>
                                    <svg className="w-7 h-7 text-white/50" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
                                    <svg className="w-7 h-7 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <svg className="w-7 h-7 text-white/50" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0012 11z" clipRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 text-center overflow-hidden">
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-verba-terracotta/10 rounded-full opacity-30 transform rotate-45"></div>
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-verba-terracotta/10 rounded-full opacity-20 transform -rotate-45"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Precision in Every Word. Passion for Every Culture.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-verba-beige/80">
            Expert Translation & Localization Services – From Italian to the World and Back
          </p>
          <div className="mt-10">
            <Link
              to="/request-quote"
              className="inline-block bg-verba-terracotta text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="bg-verba-terracotta/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <GamepadIcon className="h-12 w-12 text-verba-terracotta"/>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Most In-Demand Service: Game Localization: English → Italian</h2>
              <p className="mt-2 text-lg text-verba-beige/80 max-w-3xl mx-auto">Bring your game to life for Italian players. From voiceovers and in-game text to cultural adaptation, we localize every experience with native accuracy.</p>
              <Link to="/services/game-localization" className="mt-4 inline-block font-bold text-verba-terracotta hover:underline">Explore Game Localization Services »</Link>
            </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-verba-beige/70">
            Comprehensive solutions to make your content resonate with Italian audiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_SERVICES_TEASER.map(service => (
            <Link to={service.href} key={service.title} className="block">
                <GlassCard icon={service.icon} title={service.title}>
                  {service.description}
                </GlassCard>
            </Link>
          ))}
        </div>
         <div className="text-center mt-12">
            <Link to="/services" className="font-bold text-lg text-verba-terracotta hover:underline">
              Explore All Services →
            </Link>
          </div>
      </section>

      {/* Why VerbaItalia? */}
       <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Why VerbaItalia?</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 auto-rows-[220px]">
                <BentoTextCard icon={CheckCircleIcon} title="Native Expertise" description="Italian is our specialty. Every word is crafted by native-speaking professionals." className="lg:col-span-1" />
                <BentoImageCard src="https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2940&auto=format&fit=crop" alt="Native Italian Expertise" className="lg:col-span-2" />
                
                <BentoImageCard src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2940&auto=format&fit=crop" alt="Industry Focused" className="lg:col-span-2" />
                <BentoTextCard icon={BriefcaseIcon} title="Industry Focused" description="From legal documents to immersive games, we tailor localization to your sector." className="lg:col-span-1" />

                <BentoTextCard icon={StarIcon} title="Trusted by Global Brands" description="Our clients rely on our attention to detail, cultural precision, and confidentiality." className="lg:col-span-1" />
                <BentoImageCard src="https://images.unsplash.com/photo-1556740738-b6a63e2775df?q=80&w=2940&auto=format&fit=crop" alt="Trusted by Global Brands" className="lg:col-span-2" />
            </div>
        </section>
      
      {/* Leen AI Section */}
      <LeenAiSection />

      {/* Client Testimonials */}
       <section className="bg-verba-terracotta/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Client Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS_LIST.map((testimonial, index) => (
              <div key={index} className="bg-verba-navy-light/20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-verba-beige/10">
                <p className="text-verba-beige/80 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-verba-beige/70">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;