import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Users, Factory, Cog } from "lucide-react";
import { images } from "@/lib/data/images";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 text-white section-padding overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero.background}
          alt="Industrial engineering background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 via-secondary-500/80 to-primary-600/80"></div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-subtleAccent-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
                Engineering Excellence in Nigeria
              </h1>
              <p className="text-xl text-subtleAccent-500 leading-relaxed">
                Comprehensive engineering, procurement, installation, and
                maintenance services. Your trusted partner for industrial and
                commercial solutions across Nigeria.
              </p>
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
          <div className="hidden md:block relative animate-scale-in">
            {/* Engineering Illustration */}
            <div className="relative">
              <div className="glass-card p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Factory className="w-10 h-10 text-primary-100" />
                    </div>
                    <h3 className="text-lg font-bold text-lightAccent-500">
                      Engineering Excellence
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center space-x-4 p-3 glass-card">
                      <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Cog className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lightAccent-500">
                          Precision Engineering
                        </h4>
                        <p className="text-xs text-subtleAccent-500">
                          Advanced Technical Solutions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 glass-card">
                      <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lightAccent-500">
                          Rapid Deployment
                        </h4>
                        <p className="text-xs text-subtleAccent-500">
                          Fast Project Execution
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 glass-card">
                      <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lightAccent-500">
                          Industry Professionals
                        </h4>
                        <p className="text-xs text-subtleAccent-500">
                          Proven Track Record
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-subtleAccent-500 rounded-full opacity-60 animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
