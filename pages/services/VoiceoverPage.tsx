import React from 'react';
import { Link } from 'react-router-dom';
import { MicIcon, CheckCircleIcon } from '../../components/icons';

const ServiceCard: React.FC<{ title: string, children: React.ReactNode, example: string }> = ({ title, children, example }) => (
    <div className="bg-verba-beige/5 backdrop-blur-xl p-6 rounded-2xl border border-verba-beige/10 shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="text-verba-beige/80 flex-grow">{children}</div>
        <div className="mt-4 text-sm bg-verba-navy/30 p-3 rounded-lg">
            <b className="text-verba-beige/90">Example:</b> <span className="text-verba-beige/70 italic">{example}</span>
        </div>
    </div>
);


const VoiceoverPage: React.FC = () => {
    const whyChoosePoints = [
        "200+ Native Italian Voice Talents",
        "End-to-End Production",
        "Fast Turnaround (24-48hrs for short projects)"
    ];

  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Authentic Italian Voices That Bring Your Content to Life</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            From games to commercials, our native Italian voice actors deliver emotionally engaging, studio-quality recordings tailored to your audience.
          </p>
           <div className="mt-8 bg-verba-navy/20 backdrop-blur-md border border-verba-beige/10 p-4 rounded-lg inline-block text-left text-sm space-y-2">
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Game Dubbing & Character Voices</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Commercials & Promos</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> E-Learning & Corporate Narration</p>
          </div>
          <div className="mt-8">
            <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-8 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                📌 Need the perfect Italian voice? Request Voice Samples →
            </Link>
          </div>
        </div>
      </section>

      <main className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Voiceover Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard title="1. Game Voiceovers" example="Localizing a gruff dwarf warrior → Deep, rustic Italian dialect.">
                    <p>Character casting by age/gender/archetype, lip-sync adaptation for cutscenes, NPC barks & battle cries localization.</p>
                </ServiceCard>
                 <ServiceCard title="2. Commercial & Advertising" example="Brand-aligned tone (energetic, sophisticated, etc.), regional accents (Tuscan, Roman, Sicilian).">
                    <p>Multilingual campaigns (sync with other language versions).</p>
                </ServiceCard>
                 <ServiceCard title="3. E-Learning & Corporate" example="Clear, articulate narration for training materials, technical/medical terminology precision.">
                    <p>AI voiceover alternatives (for budget-friendly options).</p>
                </ServiceCard>
                 <ServiceCard title="4. Dubbing Services" example="Full dialogue replacement for films/TV, child actor specialists for cartoons/animations.">
                    <p>Music & lyric adaptation (singing voiceovers).</p>
                </ServiceCard>
            </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold text-white">Professional Voice Talent</h2>
                 <p className="mt-4 text-verba-beige/80">We work with native Italian voice actors who bring a variety of styles and tones:</p>
                 <ul className="mt-4 space-y-2 text-verba-beige/80 list-disc list-inside">
                     <li><b>Male & Female Voice Artists:</b> From deep, authoritative voices to energetic and youthful tones.</li>
                     <li><b>Various Accents & Dialects:</b> Standard Italian or regional dialects (e.g., Neapolitan, Sicilian, etc.).</li>
                     <li><b>Range of Styles:</b> Casual, professional, dramatic, conversational — we cater to your project’s needs.</li>
                 </ul>
            </div>
            <div className="bg-verba-navy/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose VerbaItalia?</h3>
                <ul className="space-y-3">
                    {whyChoosePoints.map(point => (
                        <li key={point} className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-3 text-verba-green flex-shrink-0"/>{point}</li>
                    ))}
                </ul>
                <blockquote className="mt-6 text-md italic text-verba-beige/90 border-l-4 border-verba-terracotta pl-4">
                    "Your actors nailed our ad campaign—sales jumped 40% in Italy!"
                    <footer className="mt-1 not-italic font-bold">- Global Brand</footer>
                </blockquote>
            </div>
        </section>

         <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-4 text-verba-beige max-w-4xl mx-auto">
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">1.</div><p>Script Localization</p></div>
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">2.</div><p>Voice Casting</p></div>
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">3.</div><p>Studio Recording</p></div>
                <div className="p-4"><div className="text-3xl font-bold text-verba-terracotta">4.</div><p>Post-Production & QA</p></div>
            </div>
        </section>
        
        <section className="bg-verba-terracotta/90 p-12 rounded-lg text-center text-white">
            <h2 className="text-3xl font-bold">📢 Ready to find your perfect voice?</h2>
            <p className="mt-2">Whether you need a single recording or a complete voiceover solution, we’re here to help.</p>
            <Link to="/request-quote" className="mt-6 inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-8 rounded-full hover:bg-verba-beige transition-all duration-300 shadow-md">
                Get a Quote Today →
            </Link>
        </section>
      </main>
    </div>
  );
};

export default VoiceoverPage;
