import React from 'react';
import { Link } from 'react-router-dom';
import { SubtitlesIcon, CheckCircleIcon } from '../../components/icons';

const ServiceCard: React.FC<{ title: string, children: React.ReactNode, example: string }> = ({ title, children, example }) => (
    <div className="bg-verba-beige/5 backdrop-blur-xl p-6 rounded-2xl border border-verba-beige/10 shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="text-verba-beige/80 flex-grow">{children}</div>
        <div className="mt-4 text-sm bg-verba-navy/30 p-3 rounded-lg">
            <b className="text-verba-beige/90">Example:</b> <span className="text-verba-beige/70 italic">{example}</span>
        </div>
    </div>
);

const SubtitlingPage: React.FC = () => {
    const applications = [
        "🎞️ Film & TV",
        "📹 Corporate videos & explainer content",
        "🧠 eLearning & internal training",
        "🎮 Game cutscenes & dialogue",
        "📱 Social media videos & marketing clips",
        "🎙️ Documentaries & interviews"
    ];

  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Precision Subtitles for Italian Audiences</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
             Make your videos globally accessible with accurate, culturally adapted subtitles—perfectly timed and optimized for readability.
          </p>
           <div className="mt-8 bg-verba-navy/20 backdrop-blur-md border border-verba-beige/10 p-4 rounded-lg inline-block text-left text-sm space-y-2">
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Films & TV Shows (Netflix, Amazon Prime standards)</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Corporate, Training & Social Media Videos</p>
              <p className="flex items-center text-verba-beige"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-green"/> Italian ↔ English + 30+ Languages</p>
          </div>
          <div className="mt-8">
            <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-8 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                📌 Need flawless subtitles? Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      <main className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Subtitling Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard title="1. Entertainment Subtitling" example='Localizing "Break a leg" → "In bocca al lupo".'>
                    <p>Netflix/Amazon-compliant formatting and cultural adaptation of idioms & humor.</p>
                </ServiceCard>
                 <ServiceCard title="2. Corporate & E-Learning" example="Terminology consistency for technical content.">
                    <p>Multilingual subtitle packages and closed captions (CC) for accessibility compliance.</p>
                </ServiceCard>
                 <ServiceCard title="3. Social Media & Advertising" example="Platform-optimized styles (font, positioning).">
                    <p>High-speed subtitling for viral content and emoji integration where appropriate.</p>
                </ServiceCard>
                 <ServiceCard title="4. Game Cinematics & Trailers" example="In-context timing and special effects captions [ominous music].">
                    <p>Localized text for NPC dialogue and cutscenes.</p>
                </ServiceCard>
            </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
                 <h2 className="text-3xl font-bold text-white mb-8">Our Subtitling Process</h2>
                 <ol className="relative border-l border-verba-beige/30 space-y-10">
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-verba-terracotta rounded-full -left-3">1</span>
                        <h3 className="text-lg font-semibold text-white">Transcription & Translation</h3>
                        <p className="text-sm text-verba-beige/80">Native Italian linguists handle dialogue with context notes for tone/sarcasm.</p>
                    </li>
                     <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-verba-terracotta rounded-full -left-3">2</span>
                        <h3 className="text-lg font-semibold text-white">Timecoding & Spotting</h3>
                        <p className="text-sm text-verba-beige/80">Frame-accurate sync and speaker identification for multi-voice scenes.</p>
                    </li>
                     <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-verba-terracotta rounded-full -left-3">3</span>
                        <h3 className="text-lg font-semibold text-white">Formatting & QA</h3>
                        <p className="text-sm text-verba-beige/80">Leen™ AI check for consistency/errors and a client review round before finalization.</p>
                    </li>
                     <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-verba-terracotta rounded-full -left-3">4</span>
                        <h3 className="text-lg font-semibold text-white">Delivery</h3>
                        <p className="text-sm text-verba-beige/80">All standard formats (.srt, .vtt, .stl, .ass) with resubmissions if edits are needed.</p>
                    </li>
                 </ol>
            </div>
            <div className="bg-verba-green-dark/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white">Supported by Leen™ AI</h3>
                <p className="mt-2 text-verba-beige/80">Our proprietary AI, Leen™, enhances quality by building consistent glossaries, detecting potential cultural missteps, and flagging inaccuracies before delivery. <b>Leen™ does not translate</b>; it assists our experts in ensuring subtitles are clear, culturally appropriate, and accurate.</p>
                <Link to="/leen-ai" className="mt-4 inline-block font-bold text-verba-terracotta hover:underline">Learn more →</Link>
                <blockquote className="mt-6 text-md italic text-verba-beige/90 border-l-4 border-verba-terracotta pl-4">
                    "Your subtitles helped our documentary win Best Foreign Film in Venice!"
                    <footer className="mt-1 not-italic font-bold">- Film Production Client</footer>
                </blockquote>
            </div>
        </section>

         <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Applications of Our Subtitling Work</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {applications.map(app => (
                    <span key={app} className="bg-verba-navy/20 text-verba-beige px-4 py-2 rounded-full">{app}</span>
                ))}
            </div>
        </section>

        <section className="bg-verba-terracotta/90 p-12 rounded-lg text-center text-white">
            <h2 className="text-3xl font-bold">📢 Ready to subtitle your project?</h2>
            <p className="mt-2 max-w-xl mx-auto">Get started: 1. Upload your video/script, 2. Select languages & specs, 3. Receive perfect subtitles.</p>
            <Link to="/request-quote" className="mt-6 inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-8 rounded-full hover:bg-verba-beige transition-all duration-300 shadow-md">
                Request a Quote Now →
            </Link>
        </section>

      </main>
    </div>
  );
};

export default SubtitlingPage;
