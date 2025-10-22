import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - CN Engine Systems Ltd",
  description: "Terms of service for CN Engine Systems Ltd",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
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
                These Terms of Service govern your use of CN Engine Systems Ltd
                services and are legally binding. Please read carefully before
                engaging our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              By accessing our website, requesting quotations, or engaging CN
              Engine Systems Ltd (RC 1759862) (&quot;Company,&quot;
              &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) for services,
              you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;)
              agree to be bound by these Terms of Service and all applicable
              laws of the Federal Republic of Nigeria. If you do not agree to
              these terms, you must not use our services.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              2. Company Information
            </h2>
            <p className="text-gray-600 mb-6">
              CN Engine Systems Ltd is a company incorporated under the laws of
              Nigeria with its registered office at Lagos, Nigeria. We are
              licensed to provide engineering, procurement, installation, and
              maintenance services in accordance with Nigerian regulations.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              3. Services Overview
            </h2>
            <p className="text-gray-600 mb-4">
              We provide the following professional services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Engineering design and consultation services</li>
              <li>Equipment and materials procurement</li>
              <li>Professional installation and commissioning</li>
              <li>Maintenance and support services</li>
              <li>Project management and technical advisory</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">
                Important Notice: Project-Specific Contracts
              </h3>
              <p className="text-orange-700">
                <strong>
                  Each project will be governed by a separate, detailed contract
                </strong>{" "}
                that will specify scope of work, deliverables, timelines,
                payment terms, and specific conditions. These Terms of Service
                provide the general framework, but project-specific contracts
                will take precedence for individual engagements.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              4. Quotations and Proposals
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                All quotations are valid for 30 days unless otherwise specified
              </li>
              <li>
                Quotations are estimates and may be subject to adjustment based
                on final specifications
              </li>
              <li>
                Acceptance of quotations constitutes agreement to proceed with
                detailed contract negotiations
              </li>
              <li>
                We reserve the right to decline any project at our sole
                discretion
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              5. Payment Terms
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                Payment terms will be specified in individual project contracts
              </li>
              <li>
                Typical payment structure: 30% advance, 40% at milestones, 30%
                on completion
              </li>
              <li>
                All payments must be made in Nigerian Naira unless otherwise
                agreed
              </li>
              <li>
                Late payment charges of 2% per month may apply to overdue
                amounts
              </li>
              <li>We reserve the right to suspend work for non-payment</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              6. Client Obligations
            </h2>
            <p className="text-gray-600 mb-4">Clients must:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Provide accurate and complete project information</li>
              <li>Ensure site access and necessary permits</li>
              <li>Make timely payments as per contract terms</li>
              <li>Comply with health and safety requirements</li>
              <li>Obtain necessary regulatory approvals</li>
              <li>Provide adequate insurance coverage as required</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              7. Intellectual Property
            </h2>
            <p className="text-gray-600 mb-6">
              All designs, drawings, specifications, and technical documentation
              created by CN Engine Systems Ltd remain our intellectual property
              unless explicitly transferred through written agreement. Clients
              receive a license to use such materials for the specific project
              only.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              8. Warranties and Guarantees
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                We warrant our services will be performed with professional
                skill and care
              </li>
              <li>Equipment warranties are as provided by manufacturers</li>
              <li>
                Installation work carries a 12-month warranty against defects
              </li>
              <li>Warranties are void if equipment is modified or misused</li>
              <li>
                Our liability under warranties is limited to repair or
                replacement
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              9. Limitation of Liability
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="text-red-700 font-medium mb-4">
                IMPORTANT LIABILITY LIMITATIONS:
              </p>
              <ul className="list-disc pl-6 text-red-700 space-y-2">
                <li>
                  Our total liability for any project shall not exceed the
                  contract value
                </li>
                <li>
                  We are not liable for indirect, consequential, or punitive
                  damages
                </li>
                <li>
                  We are not liable for delays caused by force majeure events
                </li>
                <li>
                  Claims must be made within 12 months of project completion
                </li>
                <li>
                  Our liability excludes third-party products and services
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              10. Force Majeure
            </h2>
            <p className="text-gray-600 mb-6">
              We shall not be liable for delays or failures in performance due
              to circumstances beyond our reasonable control, including but not
              limited to acts of God, government actions, war, terrorism,
              pandemic, strikes, material shortages, or natural disasters.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              11. Confidentiality
            </h2>
            <p className="text-gray-600 mb-6">
              Both parties agree to maintain confidentiality of proprietary
              information shared during the course of business. This obligation
              survives termination of any agreement and continues for a period
              of 5 years.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              12. Health, Safety, and Environment
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                All work will comply with Nigerian health and safety regulations
              </li>
              <li>Clients must provide safe working conditions</li>
              <li>
                We reserve the right to stop work if safety conditions are
                inadequate
              </li>
              <li>
                Environmental compliance is the responsibility of both parties
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              13. Termination
            </h2>
            <p className="text-gray-600 mb-4">
              Either party may terminate services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>With 30 days written notice for convenience</li>
              <li>Immediately for material breach of contract</li>
              <li>Immediately for non-payment after 14 days notice</li>
              <li>Upon insolvency or bankruptcy of either party</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              14. Dispute Resolution
            </h2>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these terms or our services shall be
              resolved through:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
              <li>Good faith negotiations between the parties</li>
              <li>Mediation through the Lagos Chamber of Commerce</li>
              <li>
                Arbitration under Nigerian Arbitration and Conciliation Act
              </li>
              <li>
                As a last resort, litigation in Nigerian courts with
                jurisdiction in Lagos State
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              15. Governing Law
            </h2>
            <p className="text-gray-600 mb-6">
              These Terms of Service are governed by the laws of the Federal
              Republic of Nigeria. Any legal proceedings shall be conducted in
              English and subject to the jurisdiction of Nigerian courts.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              16. Insurance and Indemnification
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                We maintain professional indemnity and public liability
                insurance
              </li>
              <li>
                Clients must maintain adequate insurance for their property and
                operations
              </li>
              <li>
                Each party indemnifies the other against claims arising from
                their negligence
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              17. Modifications and Severability
            </h2>
            <p className="text-gray-600 mb-6">
              These terms may only be modified in writing signed by both
              parties. If any provision is found unenforceable, the remaining
              provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
              18. Entire Agreement
            </h2>
            <p className="text-gray-600 mb-6">
              These Terms of Service, together with project-specific contracts
              and our Privacy Policy, constitute the entire agreement between
              the parties and supersede all prior negotiations, representations,
              or agreements.
            </p>

            <div className="bg-neutral-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-4">
                19. Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service or to discuss project
                requirements:
              </p>
              <div className="text-gray-600">
                <p>
                  <strong>CN Engine Systems Ltd</strong>
                </p>
                <p>Legal Department</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:legal@cnenginesystems.com"
                    className="text-accent-500 hover:underline"
                  >
                    legal@cnenginesystems.com
                  </a>
                </p>
                <p>
                  Projects:{" "}
                  <a
                    href="mailto:projects@cnenginesystems.com"
                    className="text-accent-500 hover:underline"
                  >
                    projects@cnenginesystems.com
                  </a>
                </p>
                <p>Phone:+234 913 8802 2206</p>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </div>

            <div className="bg-accent-500/10 border border-accent-500 rounded-lg p-6 mt-8">
              <p className="text-accent-700 font-medium text-center">
                By engaging our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
