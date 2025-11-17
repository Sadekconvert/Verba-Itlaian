
import React from 'react';
import { Link } from 'react-router-dom';
import { CodeIcon, CheckCircleIcon, StarIcon } from '../components/icons';

const LeenAiPage: React.FC = () => {
  return (
    <div>
      <section className="bg-verba-navy-dark/30 py-20 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">Leen™ AI: Smarter Localization Support</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
            Your AI-Powered Quality Control Partner
          </p>
        </div>
      </section>
      
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Boosting Quality, Consistency, and Cultural Relevance — Without Replacing Human Linguists</h2>
            <p className="text-lg text-verba-beige/80">
              At VerbaItalia, we believe technology should enhance, not replace, the expertise of native-speaking professionals. That's why we developed Leen™ AI — a proprietary support system built to elevate translation and localization accuracy, consistency, and cultural relevance across every project. Leen™ doesn't translate. It empowers our human linguists with insights, automation, and proactive quality checks, enabling faster delivery and better results.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-verba-beige/5 backdrop-blur-xl border border-verba-beige/10 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">What Leen™ AI Does</h3>
                <ul className="space-y-3 text-verba-beige/90">
                    <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-verba-green mr-3 mt-1 flex-shrink-0"/><span><b>Terminology Management:</b> Automatically builds and manages project-specific glossaries.</span></li>
                    <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-verba-green mr-3 mt-1 flex-shrink-0"/><span><b>QA Automation:</b> Scans for terminology mismatches, formatting inconsistencies, and linguistic red flags.</span></li>
                    <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-verba-green mr-3 mt-1 flex-shrink-0"/><span><b>Cultural & Contextual Checks:</b> Flags elements that may require human review for cultural sensitivity or regional inconsistencies.</span></li>
                </ul>
            </div>
             <div className="bg-verba-terracotta/10 backdrop-blur-xl border border-verba-terracotta/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">What Leen™ Doesn't Do</h3>
                <ul className="space-y-3 text-verba-beige/90">
                    <li className="flex items-start"><b className="mr-3 text-verba-terracotta text-2xl">✗</b><span><b>Translate content:</b> It works alongside human linguists, enhancing their work.</span></li>
                    <li className="flex items-start"><b className="mr-3 text-verba-terracotta text-2xl">✗</b><span><b>Make creative decisions:</b> It only alerts our experts to potential issues.</span></li>
                </ul>
            </div>
        </div>

        <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">How Leen™ AI Fits into Our Workflow</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-verba-beige">
                <div className="p-4 text-center">
                    <div className="text-3xl font-bold">1.</div>
                    <p>Pre-Localization Prep</p>
                </div>
                 <div className="text-2xl">→</div>
                 <div className="p-4 text-center">
                    <div className="text-3xl font-bold">2.</div>
                    <p>Real-Time Localization Support</p>
                </div>
                 <div className="text-2xl">→</div>
                 <div className="p-4 text-center">
                    <div className="text-3xl font-bold">3.</div>
                    <p>Post-Translation QA</p>
                </div>
            </div>
        </div>

         <div className="bg-verba-navy/30 backdrop-blur-xl border border-verba-beige/10 p-12 rounded-lg shadow-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Why Clients Love Leen™</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                    <p className="text-4xl font-bold text-verba-terracotta">30%</p>
                    <p className="text-verba-beige/80">Faster Turnarounds</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-verba-terracotta">45%</p>
                    <p className="text-verba-beige/80">Improved Consistency Scores</p>
                </div>
                <div>
                    <StarIcon className="h-10 w-10 text-verba-terracotta mx-auto mb-2"/>
                    <p className="text-verba-beige/80">Cultural Risk Prevention</p>
                </div>
            </div>
            <blockquote className="mt-12 text-lg italic text-verba-beige/90 border-l-4 border-verba-terracotta pl-6 text-left max-w-2xl mx-auto">
                "Leen™ spotted 12 cultural mismatches our team missed in the game script."
                <footer className="mt-2 not-italic font-bold">- Localization Director, AAA Studio</footer>
            </blockquote>
        </div>

        <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Want to See Leen™ in Action?</h2>
             <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
              Discover how Leen™ AI helps us deliver better, faster, smarter localization — from English, German, French, Spanish, Swedish, and more into Italian, and vice versa.
            </p>
            <div className="mt-6">
                <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-6 rounded-full hover:bg-verba-terracotta-dark transition-colors duration-300">
                    Request a Quote
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default LeenAiPage;