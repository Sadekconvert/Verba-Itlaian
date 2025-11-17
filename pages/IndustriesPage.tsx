
import React from 'react';
import { INDUSTRIES_LIST } from '../constants';
import { Link } from 'react-router-dom';
import { StarIcon, CheckCircleIcon } from '../components/icons';

const IndustriesPage: React.FC = () => {
  return (
    <div>
      <section className="bg-verba-navy-dark/30 py-20 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">Industry-Tailored Localization Solutions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
            Precision adaptation for your sector—because gaming, healthcare, and legal content shouldn't sound the same in Italian.
          </p>
          <div className="mt-8 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
            <span className="flex items-center text-white/90"><StarIcon className="h-5 w-5 mr-2 text-verba-terracotta"/> Trusted by 500+ global brands across 12 industries</span>
            <span className="flex items-center text-white/90"><CheckCircleIcon className="h-5 w-5 mr-2 text-verba-terracotta"/> ISO 17100 Certified</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_LIST.map((industry) => (
              <div key={industry.name} className="bg-verba-beige/5 backdrop-blur-xl p-8 rounded-xl border border-verba-beige/10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-4">{industry.name}</h2>
                <p className="text-verba-beige/80 flex-grow">{industry.description}</p>
                <Link to="/request-quote" className="mt-6 font-bold text-verba-terracotta hover:underline self-start">
                  Get Your Quote →
                </Link>
              </div>
            ))}
          </div>
           <div className="mt-16 text-center bg-verba-green-dark/20 p-10 rounded-lg">
                <h3 className="text-2xl font-bold text-white">Don't see your industry listed?</h3>
                <p className="mt-2 text-verba-beige/80">We provide custom solutions for a wide range of sectors.</p>
                <Link to="/contact" className="mt-4 inline-block font-bold text-verba-terracotta hover:underline">
                    Contact us for custom solutions →
                </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;