
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon, FacebookIcon, MailIcon, PhoneIcon, ClockIcon } from '../components/icons';

const ContactUsPage: React.FC = () => {
  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            Have questions about our services or need support? Reach out—we're happy to help!
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-verba-navy/20 backdrop-blur-xl border border-verba-beige/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
            <p className="text-verba-beige/80 mb-6">Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-verba-beige">Your Name *</label>
                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-verba-beige">Email Address *</label>
                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-verba-beige">Subject *</label>
                <input type="text" id="subject" required list="subjects" className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta" />
                <datalist id="subjects">
                    <option value="General Inquiry" />
                    <option value="Partnership" />
                    <option value="Media" />
                    <option value="Support" />
                </datalist>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-verba-beige">Message *</label>
                <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta" placeholder="Please share your question or message in detail."></textarea>
              </div>
               <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="consent" name="consent" type="checkbox" required className="focus:ring-verba-terracotta h-4 w-4 text-verba-terracotta border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-verba-beige">I agree to the <Link to="/privacy-policy" className="underline">privacy policy</Link> and consent to be contacted by VerbaItalia.</label>
                  </div>
                </div>
              <button type="submit" className="w-full bg-verba-terracotta text-white font-bold py-3 px-6 rounded-full hover:bg-verba-terracotta-dark transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">General Inquiries</h3>
              <div className="space-y-3 text-lg text-verba-beige/90">
                <p className="flex items-center"><MailIcon className="h-6 w-6 mr-3 text-verba-terracotta"/> info@verbaitalia.com</p>
                <p className="flex items-center"><PhoneIcon className="h-6 w-6 mr-3 text-verba-terracotta"/> +39 02 XXXX XXXX (Italian office)</p>
                <p className="flex items-center"><PhoneIcon className="h-6 w-6 mr-3 text-verba-terracotta"/> +46 8 XXXX XXXX (Nordika HQ, Sweden)</p>
                <p className="flex items-center"><ClockIcon className="h-6 w-6 mr-3 text-verba-terracotta"/> Monday-Friday, 9:00 AM – 5:00 PM CET</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Contact Us Directly?</h3>
               <ul className="space-y-2 text-lg text-verba-beige/90">
                 <li className="flex items-start"><b className="mr-2 text-verba-green">✓</b> <b>Expert Advice:</b> Our localization specialists can guide you on the best approach.</li>
                 <li className="flex items-start"><b className="mr-2 text-verba-green">✓</b> <b>Urgent Requests:</b> Call for time-sensitive projects.</li>
                 <li className="flex items-start"><b className="mr-2 text-verba-green">✓</b> <b>Partnerships:</b> Discuss long-term collaboration opportunities.</li>
               </ul>
               <p className="mt-4 text-verba-beige/80">For project-specific quotes, please use our <Link to="/request-quote" className="font-bold underline">Request a Quote form</Link> for faster service.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-verba-beige hover:text-verba-terracotta transition-colors duration-300"><LinkedinIcon className="h-8 w-8" /></a>
                  <a href="#" className="text-verba-beige hover:text-verba-terracotta transition-colors duration-300"><TwitterIcon className="h-8 w-8" /></a>
                  <a href="#" className="text-verba-beige hover:text-verba-terracotta transition-colors duration-300"><FacebookIcon className="h-8 w-8" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;