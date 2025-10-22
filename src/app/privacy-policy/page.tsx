import Link from "next/link";
import { generateMetadata as createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for CN Engine Systems Ltd - How we collect, use, and protect your personal information in compliance with Nigerian Data Protection Regulation (NDPR) 2019.",
  url: "https://cnenginesystems.com/privacy-policy",
  noindex: true
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-sm">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}{" "}
              | <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="bg-accent-500/10 border-l-4 border-accent-500 p-6 mb-8">
              <p className="text-gray-700 font-medium">
                CN Engine Systems Ltd is committed to protecting your privacy
                and complying with the Nigeria Data Protection Regulation (NDPR)
                2019 and other applicable data protection laws.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-6">
              CN Engine Systems Ltd (RC 1759862) (&quot;Company,&quot;
              &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a company
              incorporated under the laws of the Federal Republic of Nigeria
              with its registered office at Lagos, Nigeria, is committed to
              protecting your privacy and personal data. This Privacy Policy
              explains how we collect, use, process, store, and protect your
              personal information in compliance with the Nigeria Data
              Protection Regulation (NDPR) 2019 and other applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              2. Information We Collect
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">
                2.1 Personal Information
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Contact details (name, email address, phone number, postal
                  address)
                </li>
                <li>Company information (business name, position, industry)</li>
                <li>Project specifications and technical requirements</li>
                <li>
                  Financial information for billing and payment processing
                </li>
                <li>Communication records and correspondence</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">
                2.2 Technical Information
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Website usage data and analytics</li>
                <li>IP addresses and device information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              3. Legal Basis for Processing
            </h2>
            <p className="text-gray-600 mb-4">
              We process your personal data based on:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                <strong>Consent:</strong> Where you have given explicit consent
              </li>
              <li>
                <strong>Contract:</strong> To fulfill our contractual
                obligations
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with Nigerian laws
                and regulations
              </li>
              <li>
                <strong>Legitimate Interest:</strong> For business operations
                and service improvement
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              4. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                Provide engineering, procurement, installation, and maintenance
                services
              </li>
              <li>Process quotations, contracts, and billing</li>
              <li>Communicate about projects and service updates</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and website functionality</li>
              <li>Maintain business records and documentation</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                Authorized subcontractors and suppliers (under strict
                confidentiality agreements)
              </li>
              <li>Professional advisors (lawyers, accountants, auditors)</li>
              <li>Regulatory authorities when legally required</li>
              <li>Law enforcement agencies when mandated by law</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              6. Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security
              measures to protect your personal data against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include encryption, access controls, secure storage systems, and
              regular security assessments.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              7. Data Retention
            </h2>
            <p className="text-gray-600 mb-6">
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this policy, comply with legal
              obligations, resolve disputes, and enforce our agreements.
              Project-related data is typically retained for 7 years after
              project completion in accordance with Nigerian business record
              requirements.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              8. Your Rights Under NDPR
            </h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                <strong>Right of Access:</strong> Request copies of your
                personal data
              </li>
              <li>
                <strong>Right to Rectification:</strong> Request correction of
                inaccurate data
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your data
                (subject to legal requirements)
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Limit how we use
                your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data in
                a structured format
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing based on
                legitimate interests
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw consent at
                any time
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              9. International Data Transfers
            </h2>
            <p className="text-gray-600 mb-6">
              If we transfer your data outside Nigeria, we ensure adequate
              protection through appropriate safeguards such as standard
              contractual clauses or adequacy decisions by the Nigerian Data
              Protection Commission.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              10. Cookies and Website Analytics
            </h2>
            <p className="text-gray-600 mb-6">
              Our website uses cookies to improve user experience and analyze
              website performance. You can control cookie settings through your
              browser preferences. For detailed information, please refer to our
              Cookie Policy.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              11. Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or applicable laws. We will notify you of
              material changes through our website or direct communication.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              12. Complaints and Regulatory Authority
            </h2>
            <p className="text-gray-600 mb-6">
              If you have concerns about our data processing practices, you may
              file a complaint with the Nigerian Data Protection Commission
              (NDPC) at{" "}
              <Link
                href="mailto:info@ndpc.gov.ng"
                className="text-accent-500 hover:underline"
              >
                info@ndpc.gov.ng
              </Link>{" "}
              or visit their website at www.ndpc.gov.ng.
            </p>

            <div className="bg-neutral-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                For questions, concerns, or to exercise your rights regarding
                this Privacy Policy, please contact our Data Protection Officer:
              </p>
              <div className="text-gray-600">
                <p>
                  <strong>CN Engine Systems Ltd</strong>
                </p>
                <p>Data Protection Officer</p>
                <p>
                  Email:{" "}
                  <Link
                    href="mailto:privacy@cnenginesystems.com"
                    className="text-accent-500 hover:underline"
                  >
                    privacy@cnenginesystems.com
                  </Link>
                </p>
                <p>Phone: +234 913 8802 2206 </p>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
