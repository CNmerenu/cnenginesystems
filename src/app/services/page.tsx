import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import { images } from "@/lib/data/images";
import { generateMetadata as createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Services - Engineering, Procurement, Installation & Maintenance",
  description: "Comprehensive engineering services including design, equipment procurement, professional installation, and maintenance solutions for industrial and commercial projects in Nigeria.",
  url: "https://cnenginesystems.com/services"
});

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-subtleAccent-500 max-w-3xl">
            Comprehensive engineering solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const serviceImages = [
                images.services.engineering,
                images.services.procurement,
                images.services.installation,
                images.services.maintenance
              ];
              
              return (
                <Link key={service.id} href={`/services/${service.slug}`} className="group">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-accent-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full">
                    <Image 
                      src={serviceImages[index]} 
                      alt={service.title} 
                      width={800}
                      height={240}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-primary-500 mb-4 group-hover:text-accent-500 transition-colors">{service.title}</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a detailed quote for your engineering needs. Our experts are ready to discuss your project requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-accent-500 px-10 py-4 rounded-lg hover:bg-neutral-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-bold text-lg"
          >
            Request Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
