
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-CA');
  
  return (
    <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-verba-navy-dark/50 backdrop-blur-lg rounded-lg p-8 md:p-12">
            <div className="prose prose-invert lg:prose-lg max-w-4xl mx-auto text-verba-beige/90">
                <h1>Privacy Policy</h1>
                <p><strong>Effective Date:</strong> {effectiveDate}</p>
                <p>At VerbaItalia (“we,” “us,” or “our”), your privacy is a top priority. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services.</p>
                
                <h2>1. Information We Collect</h2>
                <p>We collect personal information you provide directly, such as:</p>
                <ul>
                <li>Name, email address, phone number</li>
                <li>Company name and job title (if applicable)</li>
                <li>Information submitted through contact forms, quote requests, or newsletter sign-ups</li>
                <li>Files you upload for translation or localization projects</li>
                </ul>
                <p>We also automatically collect some technical data when you visit our website, including IP address, browser type, and browsing behavior, using cookies and similar technologies.</p>
                
                <h2>2. How We Use Your Information</h2>
                <p>Your data helps us to:</p>
                <ul>
                <li>Respond to inquiries and provide requested services</li>
                <li>Process quotes, orders, and deliver translations or localization projects</li>
                <li>Improve our website and customer experience</li>
                <li>Send you relevant updates, newsletters, or marketing materials (only with your consent)</li>
                <li>Comply with legal and regulatory requirements</li>
                </ul>

                <h2>3. Data Sharing and Disclosure</h2>
                <p>We do not sell or rent your personal information. We may share data with:</p>
                <ul>
                <li>Trusted service providers who support our operations (e.g., IT, payment processors)</li>
                <li>Our parent company, Nordika Group AB, for administrative and operational purposes</li>
                <li>Legal authorities if required by law</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
                
                <h2>5. Your Rights</h2>
                <p>Depending on your location, you may have rights to:</p>
                <ul>
                <li>Access, correct, or delete your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Request data portability</li>
                </ul>
                <p>To exercise your rights, please contact us at privacy@verbaitalia.it.</p>
                
                <h2>6. Cookies and Tracking Technologies</h2>
                <p>Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>

                <h2>7. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

                <h2>8. Contact Us</h2>
                <p>If you have questions or concerns about your privacy, please contact:</p>
                <p>
                VerbaItalia Privacy Team<br />
                Email: privacy@verbaitalia.it
                </p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default PrivacyPolicyPage;