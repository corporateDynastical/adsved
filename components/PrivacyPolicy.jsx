// components/PrivacyPolicy.jsx
export default function PrivacyPolicy() {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      {/* Information Collection and Use */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Information Collection and Use</h2>
        <h3 className="font-medium">Personal Information We Collect:</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Name and contact details</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Location/address information</li>
          <li>Birth details (for Janam Kundli services)</li>
          <li>Business information (for business consultation services)</li>
        </ul>
      </div>

      {/* How We Use Your Information */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Provide astrological and Vastu consultation services</li>
          <li>Schedule appointments and workshops</li>
          <li>Deliver personalized remedies and solutions</li>
          <li>Communicate about our services and updates</li>
          <li>Process service bookings</li>
        </ul>
      </div>

      {/* Information Security */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Information Security</h2>
        <p>We implement appropriate security measures to protect your personal information.</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Access to personal information is restricted to authorized personnel only.</li>
          <li>Your birth details and other sensitive information are handled with strict confidentiality.</li>
        </ul>
      </div>

      {/* Data Sharing */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
        <p>We do not:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Sell your personal information to third parties</li>
          <li>Share your information without your consent</li>
          <li>Use your information for unauthorized purposes</li>
        </ul>
      </div>

      {/* Communication */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Communication</h2>
        <p>By providing your contact information, you agree to receive:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Service-related communications</li>
          <li>Appointment confirmations</li>
          <li>Workshop notifications</li>
          <li>Spiritual guidance and updates</li>
        </ul>
      </div>

      {/* Your Rights */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Access your personal information</li>
          <li>Request corrections to your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Request data deletion</li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>For privacy-related concerns, contact us at:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Email: <a href="mailto:contact@vedbramha.com" className="text-blue-600">contact@vedbramha.com</a>, <a href="mailto:info@vedbramha.com" className="text-blue-600">info@vedbramha.com</a></li>
          <li>Phone: <a href="tel:+918087401984" className="text-blue-600">+91-8087401984</a></li>
          <li>
            Address:<br />
            Prabhat Road, Lane No. 2, Ranade Bungalow, Ground Floor, Opp. PYC Deccan Ground, Pune 411004<br />
            17/130, Anand Nagar, Nehru Road, Near Vakola Police Station, Santacruz East – 400055
          </li>
        </ul>
      </div>

      {/* Policy Updates */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Policy Updates</h2>
        <p>We reserve the right to modify this privacy policy at any time. Changes will be effective immediately upon posting to the website.</p>
        <p className="mt-2 text-sm text-gray-500">Last Updated: May 2025</p>
      </div>
    </section>
  );
}
