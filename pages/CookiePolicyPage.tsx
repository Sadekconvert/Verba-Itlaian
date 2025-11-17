
import React from 'react';

const CookiePolicyPage: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-CA');

  return (
    <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-verba-navy-dark/50 backdrop-blur-lg rounded-lg p-8 md:p-12">
            <div className="prose prose-invert lg:prose-lg max-w-4xl mx-auto text-verba-beige/90">
                <h1>Cookie Policy</h1>
                <p><strong>Effective Date:</strong> {effectiveDate}</p>
                <p>At VerbaItalia (“we,” “us,” or “our”), we use cookies and similar technologies to enhance your experience on our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.</p>

                <h2>What Are Cookies?</h2>
                <p>Cookies are small text files stored on your device by your web browser when you visit a website. They help the site recognize your device and remember your preferences or actions over time.</p>

                <h2>How We Use Cookies</h2>
                <p>We use cookies to:</p>
                <ul>
                <li><strong>Ensure website functionality:</strong> Keep you logged in, remember language preferences, and support navigation.</li>
                <li><strong>Analyze website performance:</strong> Collect anonymous data to understand how visitors use our site and improve its performance.</li>
                <li><strong>Enhance user experience:</strong> Personalize content and offers based on your interactions.</li>
                <li><strong>Support marketing efforts:</strong> Deliver relevant advertising (only with your consent).</li>
                </ul>
                
                <h2>Types of Cookies We Use</h2>
                <table>
                <thead>
                    <tr>
                    <th>Cookie Type</th>
                    <th>Purpose</th>
                    <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Essential Cookies</td>
                    <td>Necessary for basic website functions</td>
                    <td>Login sessions, security</td>
                    </tr>
                    <tr>
                    <td>Performance Cookies</td>
                    <td>Collect anonymous data for analytics</td>
                    <td>Google Analytics, website usage stats</td>
                    </tr>
                    <tr>
                    <td>Functional Cookies</td>
                    <td>Remember preferences and settings</td>
                    <td>Language, display preferences</td>
                    </tr>
                    <tr>
                    <td>Marketing Cookies</td>
                    <td>Track browsing habits for advertising</td>
                    <td>Retargeting, social media ads</td>
                    </tr>
                </tbody>
                </table>

                <h2>Third-Party Cookies</h2>
                <p>Some cookies are set by third-party services integrated into our website, such as analytics or social media platforms. These third parties have their own privacy policies.</p>

                <h2>Your Choices</h2>
                <p>Most browsers allow you to manage cookie preferences through settings:</p>
                <ul>
                <li>Accept or block cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
                </ul>
                <p>Please note that blocking certain cookies may affect website functionality and your user experience.</p>
                
                <h2>Updates to This Policy</h2>
                <p>We may update this Cookie Policy periodically. Changes will be posted here with the updated date.</p>
                
                <h2>Contact Us</h2>
                <p>If you have questions about our use of cookies, please contact:</p>
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

export default CookiePolicyPage;