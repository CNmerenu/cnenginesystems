import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { services } from "@/lib/data/services";
import { images } from "@/lib/data/images";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - CN Engine Systems Ltd`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceImages = {
    engineering: images.services.engineering,
    procurement: images.services.procurement,
    installation: images.services.installation,
    maintenance: images.services.maintenance
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="container-padding">
          <Link href="/services" className="inline-flex items-center text-accent-500 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-neutral-200 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src={serviceImages[service.slug as keyof typeof serviceImages]}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.slug === 'engineering' && "Our engineering services encompass the complete spectrum of technical design and consultation for industrial and commercial projects. From initial concept development to detailed engineering drawings, we provide comprehensive solutions that meet international standards and local regulations."}
                {service.slug === 'procurement' && "Our procurement services leverage extensive supplier networks and industry expertise to source high-quality equipment and materials at competitive prices. We manage the entire procurement lifecycle, from specification development to delivery coordination."}
                {service.slug === 'installation' && "Our installation services combine technical expertise with project management excellence to deliver seamless equipment commissioning and system integration. Our certified technicians ensure installations meet manufacturer specifications."}
                {service.slug === 'maintenance' && "Our maintenance and support services maximize equipment uptime and extend operational life through proactive maintenance strategies. We offer comprehensive maintenance programs tailored to specific equipment types and operational requirements."}
              </p>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-neutral-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary-500 mb-6">Our Approach</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.slug === 'engineering' && "We employ a systematic approach to engineering design, beginning with thorough site assessments and feasibility studies. Our team of certified engineers utilizes cutting-edge CAD software and simulation tools to develop optimal solutions that balance performance, cost-effectiveness, and sustainability."}
              {service.slug === 'procurement' && "We maintain strategic partnerships with leading manufacturers and suppliers across Nigeria and internationally. Our procurement specialists conduct rigorous vendor evaluations, negotiate favorable terms, and implement quality assurance protocols to guarantee all procured items meet project specifications."}
              {service.slug === 'installation' && "We follow structured installation methodologies that prioritize safety, quality, and efficiency. Our teams conduct pre-installation planning, coordinate with other trades, and perform comprehensive testing and commissioning to ensure optimal system performance from day one."}
              {service.slug === 'maintenance' && "We implement condition-based maintenance strategies using advanced diagnostic tools and predictive analytics. Our maintenance programs include regular inspections, preventive maintenance schedules, emergency response protocols, and comprehensive documentation."}
            </p>
          </div>

          {/* Industries Served */}
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-6">Industries We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {service.slug === 'engineering' && ['Manufacturing', 'Oil & Gas', 'Power Generation', 'Water Treatment', 'Commercial Buildings', 'Industrial Facilities'].map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-accent-500 transition-colors">
                  <span className="font-medium text-gray-700">{industry}</span>
                </div>
              ))}
              {service.slug === 'procurement' && ['Heavy Machinery', 'Electrical Equipment', 'HVAC Systems', 'Industrial Tools', 'Safety Equipment', 'Spare Parts'].map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-accent-500 transition-colors">
                  <span className="font-medium text-gray-700">{industry}</span>
                </div>
              ))}
              {service.slug === 'installation' && ['Industrial Equipment', 'Power Systems', 'HVAC Installation', 'Control Systems', 'Safety Systems', 'Process Equipment'].map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-accent-500 transition-colors">
                  <span className="font-medium text-gray-700">{industry}</span>
                </div>
              ))}
              {service.slug === 'maintenance' && ['Manufacturing Plants', 'Power Facilities', 'Commercial Buildings', 'Industrial Equipment', 'HVAC Systems', 'Process Control'].map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-accent-500 transition-colors">
                  <span className="font-medium text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-500 to-orange-500 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team to discuss your {service.title.toLowerCase()} needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-accent-500 px-8 py-4 rounded-lg hover:bg-neutral-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-bold text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}