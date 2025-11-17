import React from 'react';
import { Link } from 'react-router-dom';
import { TranslateIcon, CheckCircleIcon, DocumentTextIcon, MegaphoneIcon, ScaleIcon, StethoscopeIcon, WrenchIcon, StarIcon } from '../../components/icons';

const ServiceCard: React.FC<{ icon: React.ElementType, title: string, description: string, cta: string, href: string }> = ({ icon: Icon, title, description, cta, href }) => (
    <div className="bg-verba-beige/5 backdrop-blur-xl p-6 rounded-2xl border border-verba-beige/10 shadow-lg h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-verba-terracotta/20 p-3 rounded-full">
                <Icon className="h-6 w-6 text-verba-terracotta" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-verba-beige/80 flex-grow">{description}</p>
        <Link to={href} className="mt-4 font-bold text-verba-terracotta hover:underline self-start">
            {cta} →
        </Link>
    </div>
);

const TranslationPage: React.FC = () => {
  const translationServices = [
    { icon: DocumentTextIcon, title: 'General & Business Translations', description: 'Everyday documents, emails, reports, and communications—professionally translated for clarity and accuracy. Best for: Corporations, SMEs, personal documents.', cta: 'Request General Translation', href: '/request-quote' },
    { icon: MegaphoneIcon, title: 'Marketing & Advertising Translations', description: 'Localize slogans, campaigns, and brand messaging to captivate Italian audiences. Best for: Ad agencies, e-commerce, global brands.', cta: 'Adapt Your Marketing Content', href: '/request-quote' },
    { icon: ScaleIcon, title: 'Legal & Certified Translations', description: 'Legally binding translations for contracts, patents, court documents, and compliance. Certified options available for official use.', cta: 'Get Legal Translation Support', href: '/request-quote' },
    { icon: StethoscopeIcon, title: 'Medical & Pharmaceutical Translations', description: 'Accurate, HIPAA/GDPR-compliant translations for clinical trials, patient forms, and medical devices. Best for: Healthcare providers, biotech firms, research institutions.', cta: 'Ensure Medical Accuracy', href: '/request-quote' },
    { icon: WrenchIcon, title: 'Technical & Engineering Translations', description: 'Precise terminology for manuals, patents, schematics, and software documentation. Best for: Manufacturing, IT, automotive, and engineering firms.', cta: 'Translate Technical Documents', href: '/request-quote' },
  ];

  const whyChoosePoints = [
      { title: 'Native Translators', description: 'All projects handled by native speakers of the target language.' },
      { title: 'Domain Expertise', description: 'Specialized professionals for each industry.' },
      { title: 'Full Confidentiality', description: 'Strict NDA policies and secure workflows.' },
      { title: 'Rigorous QA Process', description: 'Each document reviewed with Leen™ support and human oversight.' },
      { title: 'Scalable & Timely', description: 'We handle urgent or large-volume projects without compromising quality.' },
      { title: 'ISO 17100 Certified', description: 'Guaranteed quality standards for all our translation projects.' },
  ];
  
  const languages = ['English (EN ↔ IT)', 'German (DE ↔ IT)', 'French (FR ↔ IT)', 'Spanish (ES ↔ IT)', 'Swedish (SV ↔ IT)', 'Danish (DA ↔ IT)', 'Norwegian (NO ↔ IT)', 'Finnish (FI ↔ IT)'];

  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Precision Translations for Global Success</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            At VerbaItalia, we don’t just translate words—we adapt meaning, tone, and cultural nuances to ensure your message resonates flawlessly in Italian and beyond.
          </p>
          <div className="mt-8 bg-verba-navy/20 backdrop-blur-md border border-verba-beige/10 p-4 rounded-lg inline-block text-left text-sm space-y-2">
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> English, German, French, Spanish, Swedish, Danish, Norwegian, Finnish ↔ Italian</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Industry-Specific Expertise (Legal, Medical, Marketing, Technical)</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Human Linguists + AI-Driven QA (Powered by Leen™)</p>
          </div>
           <div className="mt-8">
               <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-8 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                   📌 Need a certified, high-quality translation? Get a Free Quote
                </Link>
           </div>
        </div>
      </section>

      <main className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Translation Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {translationServices.map(service => <ServiceCard key={service.title} {...service} />)}
                <div className="md:col-span-2 lg:col-span-1 bg-verba-terracotta/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold text-white">Need Something Special?</h3>
                    <p className="text-verba-beige/80 mt-2">We offer rush services, notarized/certified translations, and creative transcreation.</p>
                    <Link to="/contact" className="mt-4 font-bold text-verba-terracotta hover:underline">Contact us for custom requests →</Link>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center bg-verba-navy/20 p-8 rounded-lg">
            <div>
                <h2 className="text-3xl font-bold text-white">Powered by Leen™ AI</h2>
                <p className="text-lg font-semibold text-verba-terracotta">Support Only, Not Translation</p>
                <p className="mt-4 text-verba-beige/80">While all translations are performed by experienced human linguists, our proprietary AI tool, Leen™, enhances our quality and speed by preparing custom glossaries, detecting cultural issues, and supporting our linguists in QA reviews. This allows us to deliver faster turnaround times without sacrificing accuracy.</p>
            </div>
             <div className="bg-verba-beige/5 p-6 rounded-lg space-y-2">
                <p className="flex items-start"><StarIcon className="h-5 w-5 mr-3 mt-1 text-verba-green flex-shrink-0"/> <b>Leen™ AI-Assisted QA:</b> Ensures consistency and cultural correctness.</p>
                <p className="flex items-start"><StarIcon className="h-5 w-5 mr-3 mt-1 text-verba-green flex-shrink-0"/> <b>Fast Turnaround:</b> Urgent projects welcome.</p>
                <p className="flex items-start"><StarIcon className="h-5 w-5 mr-3 mt-1 text-verba-green flex-shrink-0"/> <b>ISO 17100 Certified:</b> Guaranteed quality standards.</p>
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose VerbaItalia for Translations?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChoosePoints.map(point => (
                    <div key={point.title} className="bg-verba-beige/5 p-4 rounded-lg">
                        <h3 className="font-bold text-white">{point.title}</h3>
                        <p className="text-sm text-verba-beige/80 mt-1">{point.description}</p>
                    </div>
                ))}
            </div>
             <blockquote className="mt-12 text-lg italic text-verba-beige/90 border-l-4 border-verba-terracotta pl-6 text-center max-w-2xl mx-auto">
                "VerbaItalia’s legal translations saved us months of back-and-forth with Italian regulators."
                <footer className="mt-2 not-italic font-bold">- Law Firm Client</footer>
            </blockquote>
        </section>

         <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-4 text-verba-beige max-w-4xl mx-auto">
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">1.</div><p>Submit Your Document</p></div>
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">2.</div><p>Get a Quote</p></div>
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">3.</div><p>We Translate & QA</p></div>
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">4.</div><p>Delivery & Feedback</p></div>
            </div>
        </section>

         <section className="bg-verba-terracotta/90 p-12 rounded-lg text-center text-white">
            <h2 className="text-3xl font-bold">📢 Ready to start?</h2>
            <p className="mt-2">Transparent pricing, no hidden fees. Edits included if needed.</p>
            <Link to="/request-quote" className="mt-6 inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-8 rounded-full hover:bg-verba-beige transition-all duration-300 shadow-md">
                Request a Quote in &lt;1 Min
            </Link>
        </section>
        
      </main>
    </div>
  );
};

export default TranslationPage;
