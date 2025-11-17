import React from 'react';
import { Link } from 'react-router-dom';
import { AppIcon, CheckCircleIcon, CodeIcon } from '../../components/icons';

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

const AppLocalizationPage: React.FC = () => {
  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Seamless Italian Experiences for Global Apps</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            Go beyond translation—fully adapt your software for Italian users with culturally optimized UI, technical precision, and market-specific compliance.
          </p>
           <div className="mt-8 bg-verba-navy/20 backdrop-blur-md border border-verba-beige/10 p-4 rounded-lg inline-block text-left text-sm space-y-2">
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Mobile & Desktop Apps (iOS, Android, Windows, macOS)</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> SaaS Platforms & Enterprise Software</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Italian ↔ English, German, French, Spanish + 20+ Languages</p>
          </div>
          <div className="mt-8">
            <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-8 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                📌 Need your app to feel native in Italy? Get a Free Localization Audit →
            </Link>
          </div>
        </div>
      </section>

      <main className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
         <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our App & Software Localization Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ProcessCard number={1} title="UI/UX Localization" example='Dating apps adjust match criteria for Italian social norms.' cta="See UI Adaptation Samples" href="#">
                    <p>Adapt buttons, menus, and notifications. Resize layouts for Italian text expansion (up to 30% longer). Localize icons, colors, and graphics.</p>
                </ProcessCard>
                <ProcessCard number={2} title="Technical Implementation" example='Italian tax/VAT prompts in billing flows for SaaS.' cta="Developer-Friendly Workflows" href="/contact">
                    <p>JSON/XLIFF file integration for developers. Pseudolocalization testing pre-launch. RTL/LTR script support.</p>
                </ProcessCard>
                <ProcessCard number={3} title="Functional Localization" example='Date format 01/02/2024 → 02/01/2024 for IT.' cta="Learn More" href="#">
                    <p>Date/time/number formats. Address fields & form validation (Italian CAP codes). Payment gateways (Satispay, Bancomat).</p>
                </ProcessCard>
                 <ProcessCard number={4} title="QA & Testing" example="Leen™ AI checks for linguistic/cultural errors." cta="Our QA Process" href="/leen-ai">
                    <p>Real-device testing on Italian market devices. Beta user feedback from native speakers.</p>
                </ProcessCard>
            </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-8">Industries We Serve</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-verba-navy/20 p-4 rounded-lg">🎮 Gaming Apps</div>
                    <div className="bg-verba-navy/20 p-4 rounded-lg">🏦 Fintech/Banking</div>
                    <div className="bg-verba-navy/20 p-4 rounded-lg">🛍️ E-Commerce Apps</div>
                    <div className="bg-verba-navy/20 p-4 rounded-lg">🏥 Healthcare SaaS</div>
                </div>
                 <blockquote className="mt-8 text-lg italic text-verba-beige/90 border-l-4 border-verba-terracotta pl-6">
                    "Your team caught 15 layout bugs our internal QA missed!"
                    <footer className="mt-2 not-italic font-bold">- SaaS Client</footer>
                </blockquote>
            </div>
            <div className="bg-verba-beige/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose VerbaItalia?</h3>
                <ul className="space-y-3 text-verba-beige/80">
                    <li className="flex items-start"><CheckCircleIcon className="h-5 w-5 mr-2 mt-1 text-verba-green flex-shrink-0"/><b>Dev-Savvy Linguists:</b> Localizers with technical backgrounds (APIs, GitHub, Figma).</li>
                    <li className="flex items-start"><CheckCircleIcon className="h-5 w-5 mr-2 mt-1 text-verba-green flex-shrink-0"/><b>Agile Workflows:</b> Continuous localization for CI/CD pipelines.</li>
                    <li className="flex items-start"><CheckCircleIcon className="h-5 w-5 mr-2 mt-1 text-verba-green flex-shrink-0"/><b>Post-Launch Support:</b> String updates handled within 24hrs.</li>
                </ul>
            </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold text-white">Technical Capabilities</h2>
                 <p className="mt-4 text-verba-beige/80">We work with the tools your development team already uses, ensuring a smooth and efficient localization pipeline.</p>
                 <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">Strings XML</span>
                    <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">JSON</span>
                    <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">YAML</span>
                    <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">Flutter ARB</span>
                    <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">React Native</span>
                     <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">Unity</span>
                     <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">Figma</span>
                     <span className="bg-verba-terracotta/20 text-verba-terracotta font-medium px-3 py-1 rounded-full">GitHub</span>
                 </div>
            </div>
            <div className="bg-verba-green-dark/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white">Powered by Leen™ AI</h3>
                <p className="mt-2 text-verba-beige/80">Our internal AI tool enhances quality by generating smart glossaries, identifying inconsistencies, and supporting our linguists during QA. <b>Leen™ doesn’t translate</b>; it helps us deliver faster, better, and culturally sound results.</p>
                <Link to="/leen-ai" className="mt-4 inline-block font-bold text-verba-terracotta hover:underline">Learn more about Leen™ →</Link>
            </div>
        </section>

        <section className="bg-verba-terracotta/90 p-12 rounded-lg text-center text-white">
            <h2 className="text-3xl font-bold">📢 Ready to expand to Italy?</h2>
            <p className="mt-2 max-w-xl mx-auto">Get started: 1. Share your strings/files, 2. Receive pseudo/localized samples, 3. Launch with confidence.</p>
            <Link to="/request-quote" className="mt-6 inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-8 rounded-full hover:bg-verba-beige transition-all duration-300 shadow-md">
                Request a Quote →
            </Link>
        </section>
      </main>
    </div>
  );
};

export default AppLocalizationPage;
