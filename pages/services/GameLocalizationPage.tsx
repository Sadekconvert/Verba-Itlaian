import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon, CheckCircleIcon } from '../../components/icons';

const ProcessCard: React.FC<{ title: string, children: React.ReactNode, example: string, href: string }> = ({ title, children, example, href }) => (
    <div className="bg-verba-beige/5 backdrop-blur-xl p-6 rounded-2xl border border-verba-beige/10 shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="text-verba-beige/80 flex-grow">{children}</div>
        <div className="mt-4 text-sm bg-verba-navy/30 p-3 rounded-lg">
            <b className="text-verba-beige/90">Example:</b> <span className="text-verba-beige/70 italic">{example}</span>
        </div>
        <Link to={href} className="mt-4 font-bold text-verba-terracotta hover:underline self-start">
            See Case Studies →
        </Link>
    </div>
);


const GameLocalizationPage: React.FC = () => {
    const genres = [
        "🛡️ RPGs/Open World",
        "🔫 FPS/Shooters",
        "📱 Mobile/Casual Games",
        "🎲 Visual Novels"
    ];

  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Level Up Your Game for Italian Players</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            Immerse Italian audiences with culturally adapted dialogue, UI, and lore—localized by native gaming experts, not just translators.
          </p>
           <div className="mt-8 bg-verba-navy/20 backdrop-blur-md border border-verba-beige/10 p-4 rounded-lg inline-block text-left text-sm space-y-2">
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> AAA & Indie Games (RPGs, FPS, Mobile, VR)</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Full-Service Localization (Text, Audio, Subtitles, Marketing)</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Italian ↔ English, German, French, Spanish + 15+ Languages</p>
          </div>
          <div className="mt-8">
            <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-8 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                📌 Need your game to resonate in Italy? Get a Free Localization Quote →
            </Link>
          </div>
        </div>
      </section>

      <main className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <section className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 bg-verba-beige/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is Game Localization?</h2>
                <p className="text-verba-beige/80">It's the complete adaptation of your game for a new market — not just text translation. It includes:</p>
                <ul className="mt-4 space-y-2 text-verba-beige/80 list-disc list-inside">
                    <li>In-Game Texts</li>
                    <li>Culturalization</li>
                    <li>Voiceover Coordination</li>
                    <li>Subtitles & UI Adaptation</li>
                    <li>Linguistic Quality Assurance (LQA)</li>
                </ul>
            </div>
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Game Localization Process</h2>
                 <div className="grid md:grid-cols-2 gap-6">
                    <ProcessCard title="1. Cultural Adaptation" example='Localizing "potions" → "pozioni" (IT) vs. "infusi" (for realism).' href="#">
                        <p>Dialogue transcreation (slang, jokes), lore/character name adaptation, and sensitivity reviews.</p>
                    </ProcessCard>
                    <ProcessCard title="2. UI & Technical Localization" example="Italian text expands 20-30% vs English." href="#">
                        <p>Menu/button resizing, font/encoding support, and achievement/trophy text adaptation.</p>
                    </ProcessCard>
                     <ProcessCard title="3. Voiceover & Subtitling" example="Matching character tones with native Italian voice actors." href="/services/voiceover">
                        <p>Lip-sync adaptation for dubbed cutscenes and subtitle timing to avoid UI overlap.</p>
                    </ProcessCard>
                     <ProcessCard title="4. QA & Playtesting" example="In-context testing of dialogue and gameplay flow." href="/leen-ai">
                        <p>Leen™ AI checks for glossary consistency and beta testing with Italian gamers.</p>
                    </ProcessCard>
                </div>
            </div>
        </section>

        <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Genres We Localize</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {genres.map(genre => <div key={genre} className="bg-verba-navy/20 p-4 rounded-lg text-verba-beige">{genre}</div>)}
            </div>
             <div className="text-center mt-8">
                <Link to="/industries" className="font-bold text-verba-terracotta hover:underline">
                    View All Genres →
                </Link>
            </div>
        </section>

        <section className="grid lg:grid-cols-5 gap-8 items-center bg-verba-navy/20 p-8 rounded-lg">
             <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-white">Why Choose VerbaItalia?</h2>
                 <blockquote className="mt-6 text-lg italic text-verba-beige/90 border-l-4 border-verba-terracotta pl-6">
                    "Your team nailed the Sicilian dialect for our mobster DLC!"
                    <footer className="mt-2 not-italic font-bold">- Indie Game Studio</footer>
                </blockquote>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">Gamer-Linguists</h4><p className="text-sm text-verba-beige/70">Our team plays what they localize.</p></div>
                 <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">One-Stop Solution</h4><p className="text-sm text-verba-beige/70">Text + audio + testing in a single workflow.</p></div>
                 <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">Competitive Pricing</h4><p className="text-sm text-verba-beige/70">Bulk wordcount discounts for large projects.</p></div>
                 <div className="bg-verba-beige/5 p-4 rounded-lg"><h4 className="font-bold text-white">AI-Powered QA</h4><p className="text-sm text-verba-beige/70">Glossary and consistency checks with Leen™.</p></div>
            </div>
        </section>
        
        <section className="bg-verba-terracotta/90 p-12 rounded-lg text-center text-white">
            <h2 className="text-3xl font-bold">📢 Ready to connect with Italian players?</h2>
            <p className="mt-2 max-w-xl mx-auto">Get Started: 1. Share your files, 2. Receive style guide + glossary, 3. Launch with authentic Italian appeal.</p>
            <Link to="/request-quote" className="mt-6 inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-8 rounded-full hover:bg-verba-beige transition-all duration-300 shadow-md">
                Request a Quote →
            </Link>
        </section>

      </main>
    </div>
  );
};

export default GameLocalizationPage;
