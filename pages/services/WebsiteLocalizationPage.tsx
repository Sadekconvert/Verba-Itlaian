import React from 'react';
import { Link } from 'react-router-dom';
import { WebsiteIcon, CheckCircleIcon, StarIcon } from '../../components/icons';

const ProcessCard: React.FC<{ number: number, title: string, children: React.ReactNode, example: string, cta: string, href: string }> = ({ number, title, children, example, cta, href }) => (
    <div className="bg-verba-beige/5 backdrop-blur-xl p-6 rounded-2xl border border-verba-beige/10 shadow-lg h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-verba-terracotta text-white font-bold">{number}</span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-verba-beige/80 flex-grow">{children}</div>
        <div className="mt-4 text-sm bg-verba-navy/30 p-3 rounded-lg">
            <b className="text-verba-beige/90">Example:</b> <span className="text-verba-beige/70 italic">{example}</span>
        </div>
        <Link to={href} className="mt-4 font-bold text-verba-terracotta hover:underline self-start">
            {cta} →
        </Link>
    </div>
);

const IndustryCard: React.FC<{ name: string, description: string }> = ({ name, description }) => (
    <div className="bg-verba-navy/20 p-4 rounded-lg">
        <h4 className="font-bold text-white">{name}</h4>
        <p className="text-sm text-verba-beige/80 mt-1">{description}</p>
    </div>
);

const WebsiteLocalizationPage: React.FC = () => {
    const industries = [
        { name: '🛒 E-commerce', description: 'Localized product descriptions, seamless checkout flows, and Italian payment gateway integration to boost conversions.' },
        { name: '💻 SaaS & Tech', description: 'Adapted dashboards, error messages, and documentation for flawless Italian user experiences.' },
        { name: '🏦 Finance & Legal', description: 'Regulatory-compliant terminology and secure, localized content for banking/fintech sectors.' },
        { name: '🎮 Gaming & Media', description: 'Culturally adapted promo pages, community portals, and in-game web content for Italian players.' },
        { name: '✈️ Tourism & Hospitality', description: 'Multilingual booking systems, travel guides, and hospitality content tailored for Italian-speaking travelers.' },
        { name: '🏥 Healthcare & Medical', description: 'Patient portals, medical information, and telehealth platforms localized with HIPAA-compliant precision.' },
    ];

  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Make Your Website Feel Native in Italian</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
             Don’t just translate—adapt. We transform your website into a seamless experience for Italian users, ensuring cultural relevance, UX optimization, and higher conversions.
          </p>
           <div className="mt-8 bg-verba-navy/20 backdrop-blur-md border border-verba-beige/10 p-4 rounded-lg inline-block text-left text-sm space-y-2">
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Full-Website Localization (UI, content, SEO, and multimedia)</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> E-commerce, SaaS, Corporate & Landing Pages</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Italian ↔ English, German, French, Spanish + 20+ Languages</p>
          </div>
           <div className="mt-8">
               <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-8 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                   📌 Need a website that resonates in Italy? Get a Free Localization Audit →
                </Link>
           </div>
        </div>
      </section>

      <main className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Website Localization Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <ProcessCard number={1} title="Cultural & Linguistic Adaptation" example='Adapting "Add to Cart" → "Aggiungi al carrello" (IT) vs. "Compra ora" (for urgency).' cta="See Examples" href="#">
                    <p>Transcreation of slogans, CTAs, and idioms. Localized imagery, colors, and date/currency formats (€, DD/MM/YYYY). Tone adjustment (formal vs. casual Italian based on audience).</p>
                </ProcessCard>
                <ProcessCard number={2} title="Technical Localization" example='Italian keywords ≠ direct translations (e.g., "smartphone" → "cellulare").' cta="Talk to Our SEO Experts" href="/contact">
                    <p>CMS & Platform Integration (WordPress, Shopify, etc.). Dynamic content handling (menus, forms). Meta tags, hreflang tags, and SEO optimization for Italian search engines.</p>
                </ProcessCard>
                <ProcessCard number={3} title="UX/UI Optimization" example="73% of Italians abandon sites with poor localization." cta="Improve Your Italian UX" href="/request-quote">
                    <p>Mobile responsiveness for Italian browsing habits. Local payment gateways (Satispay, Bancomat). Cookie banners & GDPR compliance for EU/Italian law.</p>
                </ProcessCard>
                <ProcessCard number={4} title="QA & Testing" example="Leen™ AI checks for cultural/linguistic errors." cta="Learn About Our QA" href="/leen-ai">
                    <p>Real-user testing with Italian speakers. Cross-browser/device validation.</p>
                </ProcessCard>
            </div>
        </section>
        
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map(industry => <IndustryCard key={industry.name} {...industry} />)}
            </div>
            <div className="text-center mt-8">
                <Link to="/industries" className="font-bold text-verba-terracotta hover:underline">
                    View Industry-Specific Case Studies →
                </Link>
            </div>
        </section>

        <section className="bg-verba-navy/20 p-8 rounded-lg grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-white">Why Choose VerbaItalia?</h2>
                 <blockquote className="mt-8 text-lg italic text-verba-beige/90 border-l-4 border-verba-terracotta pl-6">
                    "After VerbaItalia localized our site, Italian conversions rose by 30%."
                    <footer className="mt-2 not-italic font-bold">- E-commerce Client</footer>
                </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">Italian-Native Localizers</h4><p className="text-sm text-verba-beige/70">Not just translators, but UX specialists.</p></div>
                <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">SEO-Ready</h4><p className="text-sm text-verba-beige/70">Rank higher on Google.it.</p></div>
                <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">Fast Turnaround</h4><p className="text-sm text-verba-beige/70">Launch localized sites 40% faster.</p></div>
                <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">Post-Launch Support</h4><p className="text-sm text-verba-beige/70">Edits and updates included.</p></div>
            </div>
        </section>

        <section className="bg-verba-terracotta/90 p-12 rounded-lg text-center text-white">
            <h2 className="text-3xl font-bold">📢 Ready to grow in Italy?</h2>
            <p className="mt-2 max-w-xl mx-auto">Get started in 3 steps: 1. Share your site URL, 2. Receive a tailored strategy, 3. Launch & optimize.</p>
            <Link to="/request-quote" className="mt-6 inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-8 rounded-full hover:bg-verba-beige transition-all duration-300 shadow-md">
                Request a Quote Now →
            </Link>
        </section>
      </main>
    </div>
  );
};

export default WebsiteLocalizationPage;
