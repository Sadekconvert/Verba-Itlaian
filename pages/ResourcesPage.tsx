
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard: React.FC<{ title: string; category: string; excerpt: string; href: string; }> = ({ title, category, excerpt, href }) => (
    <Link to={href} className="block bg-verba-beige/5 backdrop-blur-xl border border-verba-beige/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <p className="text-sm font-semibold text-verba-terracotta mb-2">{category}</p>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-verba-beige/80">{excerpt}</p>
    </Link>
);

const ResourcesPage: React.FC = () => {
  const blogPosts = [
    { title: 'Practical How-Tos and Workflow Strategies', category: 'Localization Tips', excerpt: 'Dive into practical advice for terminology management and workflow optimization for the Italian market.', href: "#" },
    { title: 'Updates on AI Tools, Standards, and Tech', category: 'Industry News', excerpt: 'Stay current with the latest developments in the language industry, from new AI tools to evolving standards.', href: "#" },
    { title: 'Deep Dives into Client Success Stories', category: 'Case Studies', excerpt: 'Explore how we\'ve helped clients in gaming, tech, and media succeed with our localization services.', href: "#" },
  ];

  return (
    <div>
      <section className="bg-verba-green-dark/10 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Master Global Markets with VerbaItalia's Localization Expertise</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-verba-beige/80">
            Discover actionable tips, industry trends, and success stories—powered by Leen™, our AI QA assistant ensuring flawless Italian adaptations.
          </p>
           <div className="mt-8 flex justify-center gap-4">
               <Link to="#blog" className="inline-block bg-verba-beige text-verba-navy-dark font-bold py-3 px-6 rounded-full hover:bg-verba-beige/90 transition-colors duration-300">Explore Blog</Link>
               <Link to="/leen-ai" className="inline-block bg-transparent border border-verba-beige text-verba-beige font-bold py-3 px-6 rounded-full hover:bg-verba-beige/10 transition-colors duration-300">Meet Leen™</Link>
           </div>
        </div>
      </section>

      <section id="blog" className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Smart Thinking for Smarter Localization</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map(post => <BlogCard key={post.title} {...post} />)}
        </div>
        <div className="text-center mt-12">
            <Link to="#" className="font-bold text-verba-terracotta hover:underline">
                Explore the Blog »
            </Link>
        </div>
      </section>
      
      <section className="bg-verba-navy/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white">Want insights sent to your inbox?</h2>
            <p className="mt-4 text-lg text-verba-beige/80">
                Join our newsletter for localization tips, Italian market insights, and industry trends.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-md focus:ring-verba-terracotta focus:border-verba-terracotta" required />
                <button type="submit" className="bg-verba-terracotta text-white font-bold py-3 px-6 rounded-md hover:bg-verba-terracotta-dark transition-colors duration-300">
                    Subscribe Now
                </button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;