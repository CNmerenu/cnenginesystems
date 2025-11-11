import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import { images } from "@/lib/data/images";
import {
  Wrench,
  Package,
  Settings,
  ArrowRight,
  Drill,
  HeartHandshake,
  FolderKanban,
} from "lucide-react";

export default function Services() {
  const serviceIcons = {
    "1": <Wrench className="w-12 h-12" />,
    "2": <Package className="w-12 h-12" />,
    "3": <Settings className="w-12 h-12" />,
    "4": <Drill className="w-12 h-12" />,
    "5": <HeartHandshake className="w-12 h-12" />,
    "6": <FolderKanban className="w-12 h-12" />,
  };

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src={images.services.background}
          alt="Industrial equipment background"
          fill
          className="object-cover"
        />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 rounded-full text-accent-500 text-sm font-medium mb-4">
            <Settings className="w-4 h-4 mr-2" />
            Our Core Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-6 text-shadow">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver excellence in every aspect of
            engineering services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-accent-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300">
                  <div className="text-accent-500 group-hover:text-white transition-colors">
                    {serviceIcons[service.id as keyof typeof serviceIcons]}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-500 mb-4 group-hover:text-accent-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="text-accent-500 font-semibold flex items-center group-hover:text-accent-600">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
