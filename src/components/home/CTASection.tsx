import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Rocket } from "lucide-react";
import { images } from "@/lib/data/images";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent-500 via-accent-600 to-accent-500 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Image
          src={images.cta.background}
          alt="Construction engineering site"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-500/80 via-accent-600/80 to-accent-500/80"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-padding text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 glass-card text-white text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Ready to Transform Your Operations?
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
            Let's Build Something{" "}
            <span className="relative">
              Amazing
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our expert team today for a free consultation and
            detailed quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Link
              href="/contact"
              className="group bg-white text-accent-500 px-10 py-4 rounded-xl hover:bg-neutral-50 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-bold text-lg flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-accent-500"
            >
              Start Your Project
              <MessageCircle className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="group border-2 border-white/50 text-white px-10 py-4 rounded-xl hover:bg-white hover:text-accent-500 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-bold text-lg flex items-center glass-card focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-accent-500"
            >
              Explore Services
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 opacity-80 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-white/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
