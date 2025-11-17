
import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Removed 'UsersIcon' from import as it was not exported from '../components/icons' and was not used in this component.
import { BriefcaseIcon, CheckCircleIcon, CodeIcon, ScaleIcon, StarIcon } from '../components/icons';

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">About VerbaItalia</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            Your Trusted Partner for Italian Language Excellence
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-lg text-verba-beige/90 text-center">
          <p>
            At VerbaItalia, we specialize in one thing — perfectly crafted language services in and out of Italian. Whether you're a global brand localizing your product for the Italian market, or an Italian company expanding abroad, we help you communicate clearly, culturally, and professionally.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="VerbaItalia Team" className="rounded-lg shadow-xl"/>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-verba-beige/80 mb-6">
                  To deliver specialized, high-impact language services centered on Italian — powered by expert linguists, quality-focused workflows, and AI-enhanced support.
                </p>
                <p className="text-lg text-verba-beige/80">
                  We combine precision, speed, and cultural fluency to help our clients succeed in global markets with messaging that resonates.
                </p>
            </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 text-center">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Nordika Group" className="rounded-lg shadow-xl"/>
            </div>
            <div className="md:order-1">
                <h2 className="text-3xl font-bold text-white mb-4">A Nordika Group Company</h2>
                <p className="text-lg text-verba-beige/80">
                  VerbaItalia is proud to be part of Nordika Group AB, a Swedish multinational group headquartered in Stockholm and known for its innovation in language and localization services. Being under the Nordika umbrella gives us access to world-class tools, cross-border expertise, and global infrastructure, while allowing us to focus exclusively on what we do best: Italian language services.
                </p>
                 <a href="#" className="mt-4 inline-block font-bold text-verba-terracotta hover:underline">Learn about Nordika Group →</a>
            </div>
        </div>

         <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                <div className="bg-verba-beige/5 backdrop-blur-lg p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Italian-Centric Expertise</h3>
                    <p className="text-verba-beige/80">Native linguists from Milan to Sicily and industry-specialized teams (gaming, legal, healthcare).</p>
                </div>
                <div className="bg-verba-beige/5 backdrop-blur-lg p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Global Backing, Local Focus</h3>
                    <p className="text-verba-beige/80">A proud subsidiary of Nordika Group AB—a Stockholm-based leader serving 50+ countries since 2005.</p>
                </div>
                 <div className="bg-verba-beige/5 backdrop-blur-lg p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Our Credentials</h3>
                    <p className="text-verba-beige/80">ISO 17100 Certified processes, 200+ vetted Italian linguists, and specialized in 15+ industries.</p>
                </div>
            </div>
        </div>

        <div className="mt-20 bg-verba-terracotta/10 p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white">Let's Work Together</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-verba-beige/80">
            Whether you're localizing a game, translating legal documents, or adapting a website for the Italian market, VerbaItalia delivers clarity, nuance, and impact — in every word.
            </p>
            <div className="mt-6 flex justify-center gap-4">
                 <Link to="/request-quote" className="inline-block bg-verba-terracotta text-white font-bold py-3 px-6 rounded-full hover:bg-verba-terracotta-dark transition-all duration-300 shadow-md">
                    Request a Quote
                </Link>
                <Link to="/contact" className="inline-block bg-white text-verba-terracotta-dark font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md">
                    Contact Us
                </Link>
            </div>
        </div>

      </section>
    </div>
  );
};

export default AboutUsPage;