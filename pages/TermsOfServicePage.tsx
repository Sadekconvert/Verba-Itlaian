
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-CA');
  
  return (
    <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-verba-navy-dark/50 backdrop-blur-lg rounded-lg p-8 md:p-12">
            <div className="prose prose-invert lg:prose-lg max-w-4xl mx-auto text-verba-beige/90">
                <h1>Terms of Service</h1>
                <p><strong>Effective Date:</strong> {effectiveDate}</p>
                <p>Welcome to VerbaItalia, a Nordika Group Company. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please read them carefully.</p>
                
                <h2>1. Acceptance of Terms</h2>
                <p>By using our website, submitting inquiries, or engaging our translation, localization, voiceover, or subtitling services, you accept these Terms in full. If you do not agree, please do not use our services.</p>
                
                <h2>2. Services Overview</h2>
                <p>VerbaItalia provides professional translation, website localization, app and software localization, game localization, voiceover, and subtitling services. Detailed descriptions of each service are available on our site.</p>

                <h2>3. Use of Our Website</h2>
                <p>You agree to use our website lawfully and responsibly. You must not:</p>
                <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to access unauthorized areas of our systems</li>
                <li>Interfere with website security or functionality</li>
                </ul>

                <h2>4. Quotations and Orders</h2>
                <p>All quotes provided are valid for the specified period only. Upon acceptance of a quote, a binding agreement is established for the services described. Any changes to the project scope may require revised quotes.</p>
                
                <h2>5. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and software, is the property of VerbaItalia or its licensors and is protected by copyright and intellectual property laws. Clients retain ownership of their original materials. VerbaItalia retains rights to its proprietary tools and methodologies, including the AI model Leen™.</p>
                
                <h2>6. Confidentiality</h2>
                <p>We treat all client materials and information as confidential and use industry-standard measures to protect your data. You agree to keep all VerbaItalia proprietary information confidential.</p>
                
                <h2>7. Liability</h2>
                <p>VerbaItalia strives to deliver high-quality services but does not guarantee error-free translations or outcomes. Our liability for any damages arising from our services is limited to the amount paid for the specific project.</p>

                <h2>8. Payment Terms</h2>
                <p>Payment terms are outlined in individual quotes or contracts. Late payments may incur interest or service suspension until resolved.</p>

                <h2>9. Termination</h2>
                <p>Either party may terminate a project agreement with written notice. In such cases, clients are responsible for payment for services rendered up to termination.</p>

                <h2>10. Changes to Terms</h2>
                <p>VerbaItalia reserves the right to update these Terms at any time. Changes will be posted on this page with an updated effective date.</p>

                <h2>11. Governing Law</h2>
                <p>These Terms are governed by and construed in accordance with the laws of Sweden, where Nordika Group AB is headquartered.</p>

                <h2>12. Contact Information</h2>
                <p>For questions about these Terms, please contact:</p>
                <p>
                VerbaItalia Legal Team<br />
                Email: legal@verbaitalia.com
                </p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default TermsOfServicePage;