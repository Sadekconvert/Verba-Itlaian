
import React from 'react';

const RequestQuotePage: React.FC = () => {
    const services = ['Translation Services', 'Website Localization', 'App & Software Localization', 'Game Localization', 'Voiceover Services', 'Subtitling Services'];
    const languages = ['English ↔ Italian', 'German ↔ Italian', 'French ↔ Italian', 'Spanish ↔ Italian', 'Swedish ↔ Italian', 'Danish ↔ Italian', 'Norwegian ↔ Italian', 'Finnish ↔ Italian'];
    const industries = ['Gaming', 'E-commerce', 'Legal', 'Medical', 'Technical', 'Media & Entertainment', 'Marketing & Advertising'];

  return (
    <div>
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Get a Tailored Quote for Your Localization Project</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            At VerbaItalia, we provide fast, accurate pricing for all your translation and localization needs. Fill out the form below, and our team will respond within 24 hours with a customized quote.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-verba-navy/20 backdrop-blur-xl border border-verba-beige/10 p-8 sm:p-12 rounded-lg shadow-2xl">
            <p className="text-sm text-verba-beige/70 mb-6">Please complete all required fields marked with an asterisk * to help us prepare the most accurate estimate.</p>
            <form className="space-y-6">
                <div>
                    <label className="block text-base font-medium text-white">1. Service Type *</label>
                    <fieldset className="mt-2 grid grid-cols-2 gap-4">
                        {services.map(service => (
                             <label key={service} className="flex items-center">
                                <input type="checkbox" name="service-type" value={service} className="h-4 w-4 text-verba-terracotta border-gray-300 rounded focus:ring-verba-terracotta"/>
                                <span className="ml-2 text-sm text-verba-beige">{service}</span>
                            </label>
                        ))}
                    </fieldset>
                </div>
                <div>
                    <label className="block text-base font-medium text-white">2. Language Pair *</label>
                    <fieldset className="mt-2 grid grid-cols-2 gap-4">
                        {languages.map(lang => (
                             <label key={lang} className="flex items-center">
                                <input type="checkbox" name="language-pair" value={lang} className="h-4 w-4 text-verba-terracotta border-gray-300 rounded focus:ring-verba-terracotta"/>
                                <span className="ml-2 text-sm text-verba-beige">{lang}</span>
                            </label>
                        ))}
                    </fieldset>
                </div>
                <div>
                    <label className="block text-base font-medium text-white">3. Industry</label>
                    <fieldset className="mt-2 grid grid-cols-2 gap-4">
                        {industries.map(industry => (
                             <label key={industry} className="flex items-center">
                                <input type="checkbox" name="industry" value={industry} className="h-4 w-4 text-verba-terracotta border-gray-300 rounded focus:ring-verba-terracotta"/>
                                <span className="ml-2 text-sm text-verba-beige">{industry}</span>
                            </label>
                        ))}
                    </fieldset>
                </div>
                <div>
                    <label htmlFor="details" className="block text-base font-medium text-white">4. Project Details</label>
                    <p className="text-sm text-verba-beige/70">Tell us about your project — volume, deadline, tone preferences, etc.</p>
                    <textarea id="details" rows={4} className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-verba-terracotta focus:border-verba-terracotta"></textarea>
                </div>
                <div>
                    <label htmlFor="file-upload" className="block text-base font-medium text-white">5. Upload Your File(s)</label>
                    <p className="text-sm text-verba-beige/70">Supported formats: PDF, DOCX, XLSX, PPT, TXT, ZIP, MP4, SRT, etc.</p>
                    <input type="file" id="file-upload" className="mt-1 block w-full text-sm text-verba-beige file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-verba-terracotta/20 file:text-verba-terracotta hover:file:bg-verba-terracotta/40"/>
                </div>
                 <div className="border-t border-verba-beige/20 pt-6">
                    <h3 className="text-base font-medium text-white">6. Contact Information *</h3>
                     <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-verba-beige">Name *</label>
                            <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm"/>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-verba-beige">Email *</label>
                            <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm"/>
                        </div>
                         <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-medium text-verba-beige">Company Name (optional)</label>
                            <input type="text" id="company" className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm"/>
                        </div>
                     </div>
                </div>
                <div className="pt-4">
                     <button type="submit" className="w-full bg-verba-terracotta text-white font-bold py-3 px-6 rounded-full hover:bg-verba-terracotta-dark transition-colors duration-300 shadow-lg text-lg">
                        Submit Request
                    </button>
                    <p className="text-center text-sm text-verba-beige/70 mt-4">We typically respond within 1 business day. Your files and data are handled with complete confidentiality.</p>
                </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuotePage;