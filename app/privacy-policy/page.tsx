import type { Metadata } from 'next';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Codename Tathastu ',
  description: 'Privacy Policy for Codename Tathastu  - Premium Residential Plots',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <div className="sticky top-0 z-50 bg-white shadow-md w-full">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#584f48]">
              Codename Tathastu 
            </a>
          </div>
          <a
            href="/"
            className="text-gray-700 hover:text-[#584f48] transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#584f48] mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Codename Tathastu , a premium residential plots project by RISING SPACES. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>codenameiriswoods.com</strong> and use our services.
              </p>
              <p>
                By using our website and services, you consent to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us when you:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Fill out contact forms on our website</li>
                <li>Submit enquiry forms</li>
                <li>Request information about our residential plots</li>
                <li>Download brochures or other materials</li>
                <li>Contact us via phone, email, or WhatsApp</li>
              </ul>
              <p className="mb-4">The types of personal information we may collect include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Name:</strong> Your full name as provided</li>
                <li><strong>Email Address:</strong> Your email address for communication</li>
                <li><strong>Phone Number:</strong> Your contact number (10-digit mobile number)</li>
                <li><strong>Message:</strong> Any additional information or queries you provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Respond to your enquiries and provide information about our residential plots</li>
                <li>Process and manage your requests for property information</li>
                <li>Send you brochures, project details, and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Communicate with you about our projects, offers, and updates</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">4. Data Storage and Security</h2>
              <p className="mb-4">
                Your personal information is submitted to our secure API endpoint hosted by RISING SPACES. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">5. Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services that may collect information:</p>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Analytics</h3>
                <p className="mb-2">
                  We use Google Analytics (Tracking ID: G-4V2HDZ92YD) to analyze website traffic and user behavior. Google Analytics collects information such as:
                </p>
                <ul className="list-disc pl-6 mb-2 space-y-1">
                  <li>Pages visited and time spent on pages</li>
                  <li>Device and browser information</li>
                  <li>Geographic location (general)</li>
                  <li>Referral sources</li>
                </ul>
                <p>
                  This information is used to improve our website and user experience. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp Integration</h3>
                <p>
                  Our website includes WhatsApp integration for customer communication. When you use the WhatsApp feature, your messages are handled by WhatsApp's platform, and their privacy policy applies. We do not store WhatsApp messages on our servers unless you submit information through our contact forms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">7. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
                <li><strong>With Your Consent:</strong> When you have explicitly consented to such sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">8. Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw your consent at any time where we rely on consent to process your information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the contact information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">9. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">10. Children's Privacy</h2>
              <p>
                Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">12. Contact Us</h2>
              <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-[#dcf8fe] p-6 rounded-lg border border-[#584f48]">
                <p className="mb-2"><strong>RISING SPACES</strong></p>
                <p className="mb-2">
                  <strong>Address:</strong> S. No. 261, Near Laxmi Chowk, Marunji Road, Hinjawadi, Pune
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> <a href="tel:+918378944777" className="text-[#584f48] hover:underline">+91 80073 37788</a>
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:info@risingspaces.in" className="text-[#584f48] hover:underline">info@risingspaces.in</a>
                </p>
                <p>
                  <strong>Website:</strong> <a href="https://codenameiriswoods.com" className="text-[#584f48] hover:underline">codenameiriswoods.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#584f48] mb-4">13. Consent</h2>
              <p>
                By using our website and providing your personal information, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our website or provide your personal information.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-500 text-center">
              This Privacy Policy is effective as of the date stated above and applies to all users of the Codename Tathastu  website.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

