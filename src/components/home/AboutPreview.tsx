import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Eye,
  Zap,
  Shield,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { images } from "@/lib/data/images";

export default function AboutPreview() {
  const values = [
    {
      title: "Our Mission",
      description:
        "Delivering engineering excellence through innovation and quality service.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "Our Vision",
      description:
        "To enable a culture of automation and sustainability in Nigerian Engineering",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions for modern engineering challenges.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and reliable service delivery.",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 rounded-full text-accent-500 text-sm font-medium mb-4">
                <Briefcase className="w-4 h-4 mr-2" />
                About Our Company
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-6 text-shadow">
                Engineering Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  CN Engine Systems Ltd is a professional engineering services
                  company in Nigeria, delivering world-class solutions in
                  engineering design, equipment procurement, professional
                  installation, and comprehensive maintenance services.
                </p>
                <p>
                  With years of proven expertise, we have established ourselves
                  as the trusted partner for industrial and commercial clients
                  across Nigeria, consistently delivering projects that exceed
                  expectations.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="btn-primary group flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={images.about.team}
              alt="Electrical engineer working on power infrastructure"
              width={1470}
              height={384}
              className="w-full h-96 object-cover rounded-2xl mb-6"
            />
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-lightAccent-500 to-white p-6 rounded-2xl border-2 border-subtleAccent-500/30 hover:border-accent-500/50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-accent-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300">
                      <div className="text-accent-500 group-hover:text-white transition-colors">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-primary-500 mb-3 group-hover:text-accent-500 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
