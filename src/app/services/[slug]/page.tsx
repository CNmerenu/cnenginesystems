import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { services } from "@/lib/data/services";

import { generateMetadata as createMetadata } from "@/lib/metadata";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return createMetadata({
      title: "Service Not Found",
      noindex: true,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    url: `https://cnenginesystems.com/services/${slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const content = service.content;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="container-padding">
          <Link
            href="/services"
            className="inline-flex items-center text-accent-500 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src={content.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">
                Service Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {content.overview}
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
            <h3 className="text-2xl font-bold text-primary-500 mb-6">
              Our Approach
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.approach}
            </p>
          </div>

          {/* Industries Served */}
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-6">
              Industries We Serve
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {content.industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-accent-500 transition-colors"
                >
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
            Contact our team to discuss your {service.title.toLowerCase()}{" "}
            needs.
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
