
import React from 'react';
import { CheckCircleIcon } from '../components/icons';

const JoinUsPage: React.FC = () => {
  return (
    <div>
      <section className="bg-verba-terracotta/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Join Our Team</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            Help us bridge languages and cultures—with precision, passion, and cutting-edge AI.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Freelance Opportunities</h2>
            <p className="text-lg text-verba-beige/80 mb-8">
                We're always looking for talented linguists and voice artists to join our global network.
            </p>
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-verba-green"/>Translators & Localization Experts</h3>
                    <p className="text-verba-beige/80"><b>Languages:</b> English, German, French, Spanish, Nordic languages → Italian</p>
                    <p className="text-verba-beige/80"><b>Specializations:</b> Marketing, Gaming, Legal, Technical, App/Software Localization</p>
                </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-verba-green"/>Voice-Over Artists & Dubbing Specialists</h3>
                    <p className="text-verba-beige/80"><b>Languages:</b> Italian (all dialects), Nordic languages, Major European languages</p>
                    <p className="text-verba-beige/80"><b>Specializations:</b> Commercials, Animation, Video Games, E-Learning</p>
                </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-verba-green"/>Subtitling & Transcreation Specialists</h3>
                    <p className="text-verba-beige/80"><b>Skills:</b> Timing, cultural adaptation, creative rewriting</p>
                    <p className="text-verba-beige/80"><b>Bonus:</b> Experience with Netflix-style guidelines</p>
                </div>
            </div>
            
            <div className="mt-12 bg-verba-green-dark/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Why Freelance With Us?</h3>
                <ul className="space-y-3 text-verba-beige/90">
                    <li className="flex"><b className="mr-2 text-verba-green">✓</b> AI-Powered Efficiency: Work smarter with Leen™.</li>
                    <li className="flex"><b className="mr-2 text-verba-green">✓</b> High-Volume Projects: Steady workflow from global clients.</li>
                    <li className="flex"><b className="mr-2 text-verba-green">✓</b> Fair Rates & Timely Payments: Transparent and reliable contracts.</li>
                </ul>
            </div>
          </div>
          <div className="bg-verba-navy/20 backdrop-blur-xl border border-verba-beige/10 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Freelancer Application Form</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-verba-beige">Full Name</label>
                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-verba-beige">Email</label>
                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta" />
              </div>
               <div>
                <label htmlFor="phone" className="block text-sm font-medium text-verba-beige">Phone (+Country Code)</label>
                <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta" />
              </div>
               <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-verba-beige">Specialization</label>
                <div className="mt-2 space-y-2">
                    {['Marketing', 'Gaming', 'Legal', 'E-Learning', 'Subtitling', 'Voice-Over'].map(spec => (
                        <label key={spec} className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-verba-terracotta border-gray-300 rounded focus:ring-verba-terracotta"/>
                            <span className="ml-2 text-sm text-verba-beige">{spec}</span>
                        </label>
                    ))}
                </div>
              </div>
               <div>
                <label htmlFor="cv" className="block text-sm font-medium text-verba-beige">Portfolio/CV Upload (PDF/DOC, max 5MB)</label>
                <input type="file" id="cv" accept=".pdf,.doc,.docx" className="mt-1 block w-full text-sm text-verba-beige file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-verba-terracotta/20 file:text-verba-terracotta hover:file:bg-verba-terracotta/40"/>
              </div>
               <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="consent" name="consent" type="checkbox" required className="focus:ring-verba-terracotta h-4 w-4 text-verba-terracotta border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-verba-beige">I consent to data processing per GDPR</label>
                  </div>
                </div>
              <div className="text-center pt-2">
                   <button type="submit" className="w-full bg-verba-terracotta text-white font-bold py-3 px-6 rounded-full hover:bg-verba-terracotta-dark transition-colors duration-300 shadow-md">
                      Submit Application
                  </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;