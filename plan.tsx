// ============================================
// PROJECT STRUCTURE FOR CN ENGINE SYSTEMS LTD
// ============================================

/*
cn-engine-systems/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   ├── services/
│   │   ├── projects/
│   │   └── team/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── engineering/page.tsx
│   │   │   ├── procurement/page.tsx
│   │   │   ├── installation/page.tsx
│   │   │   └── maintenance/page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── CTASection.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ServiceDetail.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectGallery.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   └── common/
│   │       ├── ContactForm.tsx
│   │       └── LoadingSpinner.tsx
│   ├── lib/
│   │   ├── data/
│   │   │   ├── services.ts
│   │   │   ├── projects.ts
│   │   │   └── team.ts
│   │   └── utils.ts
│   ├── types/
│   │   ├── index.ts
│   │   ├── services.ts
│   │   └── projects.ts
│   └── styles/
│       └── globals.css
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
*/

// ============================================
// FILE: src/types/index.ts
// ============================================

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  description: string;
  shortDescription: string;
  date: string;
  location: string;
  services: string[];
  images: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

// ============================================
// FILE: src/lib/data/services.ts
// ============================================

import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    title: "Engineering Services",
    slug: "engineering",
    description:
      "Comprehensive engineering design, feasibility studies, and technical consultation for industrial and commercial projects.",
    icon: "🔧",
    features: [
      "Feasibility studies and technical assessments",
      "System design and specification",
      "Engineering calculations and simulations",
      "Technical documentation and drawings",
      "Value engineering and optimization",
      "Compliance and regulatory approvals",
    ],
    benefits: [
      "Reduced project risks through thorough planning",
      "Optimized system performance and efficiency",
      "Regulatory compliance assurance",
      "Cost-effective engineering solutions",
    ],
  },
  {
    id: "2",
    title: "Procurement Services",
    slug: "procurement",
    description:
      "Strategic sourcing and procurement management ensuring quality equipment at competitive prices with reliable delivery.",
    icon: "📦",
    features: [
      "Equipment sourcing and vendor selection",
      "Price negotiation and cost optimization",
      "Quality verification and compliance checking",
      "Logistics coordination and customs clearance",
      "Inventory management",
      "Warranty and documentation management",
    ],
    benefits: [
      "5-15% cost savings through vendor relationships",
      "Quality assurance and compliance",
      "Reduced lead times and delivery risks",
      "Single point of contact for all procurement needs",
    ],
  },
  {
    id: "3",
    title: "Installation Services",
    slug: "installation",
    description:
      "Professional installation and commissioning services with certified technicians and project management expertise.",
    icon: "⚙️",
    features: [
      "Site preparation and coordination",
      "Equipment installation and positioning",
      "Mechanical and electrical connections",
      "System integration and networking",
      "Testing and commissioning",
      "Training and handover",
    ],
    benefits: [
      "On-time project delivery",
      "Certified and experienced technicians",
      "Safety-first approach with zero incidents",
      "Comprehensive testing and quality assurance",
    ],
  },
  {
    id: "4",
    title: "Maintenance Services",
    slug: "maintenance",
    description:
      "Preventive and corrective maintenance programs to maximize equipment uptime and extend operational life.",
    icon: "🔨",
    features: [
      "Preventive maintenance contracts (PMC)",
      "Emergency breakdown response (2-4 hours)",
      "Predictive maintenance and diagnostics",
      "Annual maintenance contracts (AMC)",
      "24/7 technical support hotline",
      "Spare parts management",
    ],
    benefits: [
      "Reduced downtime and operational disruptions",
      "Extended equipment lifespan",
      "Lower total cost of ownership",
      "Priority emergency response",
    ],
  },
];

// ============================================
// FILE: src/lib/data/projects.ts
// ============================================

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Manufacturing Plant HVAC System",
    slug: "manufacturing-hvac",
    client: "ABC Manufacturing Ltd",
    category: "Industrial",
    description:
      "Complete HVAC system design, procurement, and installation for a 50,000 sq ft manufacturing facility.",
    shortDescription: "Industrial HVAC system for manufacturing facility",
    date: "2024-03",
    location: "Industrial Zone, City",
    services: ["Engineering", "Procurement", "Installation"],
    images: ["/images/projects/hvac-1.jpg", "/images/projects/hvac-2.jpg"],
    challenge:
      "Client needed energy-efficient climate control for temperature-sensitive manufacturing processes while meeting strict budget constraints.",
    solution:
      "Designed a zoned HVAC system with variable frequency drives and heat recovery, reducing energy consumption by 35%.",
    results: [
      "35% reduction in energy costs",
      "Completed 2 weeks ahead of schedule",
      "Zero safety incidents during installation",
      "Client satisfaction score: 4.8/5.0",
    ],
  },
  {
    id: "2",
    title: "Hospital Emergency Power System",
    slug: "hospital-power",
    client: "City General Hospital",
    category: "Healthcare",
    description:
      "Emergency generator and UPS system installation with automatic transfer switches for critical healthcare facility.",
    shortDescription: "Emergency power backup for healthcare facility",
    date: "2024-01",
    location: "City Center",
    services: ["Engineering", "Procurement", "Installation", "Maintenance"],
    images: ["/images/projects/power-1.jpg"],
    challenge:
      "Hospital required 100% uptime for critical care areas with seamless power transition during outages.",
    solution:
      "Implemented redundant power system with N+1 generator configuration and instantaneous UPS backup.",
    results: [
      "99.99% power availability achieved",
      "<10ms transfer time during tests",
      "Ongoing AMC contract secured",
      "Compliance with healthcare regulations",
    ],
  },
];

// ============================================
// FILE: src/app/layout.tsx
// ============================================

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "CN Engine Systems Ltd - Engineering, Procurement, Installation & Maintenance",
  description:
    "Local engineering, procurement, installation, and maintenance services for technology activities. Expert solutions for industrial and commercial projects.",
  keywords:
    "engineering services, equipment procurement, installation, maintenance, industrial services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// ============================================
// FILE: src/app/page.tsx
// ============================================

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import Stats from "@/components/home/Stats";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <AboutPreview />
      <CTASection />
    </>
  );
}

// ============================================
// FILE: src/components/layout/Header.tsx
// ============================================

("use client");

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#0d1b2a] text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#e63946] rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">CN</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-[#f1faee]">CN ENGINE</div>
              <div className="text-xs text-[#e63946] font-semibold tracking-wider">
                SYSTEMS LTD
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#f1faee] hover:text-[#e63946] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#e63946] text-white px-6 py-2 rounded-md hover:bg-[#d62839] transition-colors duration-200 font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-[#f1faee] hover:text-[#e63946] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-[#e63946] text-white px-6 py-2 rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

// ============================================
// FILE: src/components/layout/Footer.tsx
// ============================================

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d3557] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#e63946] rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">CN</span>
              </div>
              <div>
                <div className="text-xl font-bold">CN ENGINE SYSTEMS</div>
                <div className="text-xs text-[#e63946] font-semibold tracking-wider">
                  LIMITED
                </div>
              </div>
            </div>
            <p className="text-[#a8dadc] mb-4">
              Local engineering, procurement, installation, and maintenance
              services for technology activities. Your trusted partner for
              industrial and commercial solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#a8dadc] hover:text-[#e63946] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#a8dadc] hover:text-[#e63946] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1faee]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#a8dadc] hover:text-[#e63946] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#a8dadc] hover:text-[#e63946] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[#a8dadc] hover:text-[#e63946] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#a8dadc] hover:text-[#e63946] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#a8dadc] hover:text-[#e63946] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1faee]">
              Contact Us
            </h3>
            <ul className="space-y-2 text-[#a8dadc]">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5 text-[#e63946]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>123 Industrial Ave, City, Country</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-[#e63946]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-[#e63946]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@cnengine.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-[#e63946]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>24/7 Emergency Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0d1b2a] mt-8 pt-8 text-center text-[#a8dadc]">
          <p>
            &copy; {currentYear} CN Engine Systems Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// FILE: src/components/home/Hero.tsx
// ============================================

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0d1b2a] to-[#1d3557] text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Engineering Excellence for Your{" "}
              <span className="text-[#e63946]">Technology Needs</span>
            </h1>
            <p className="text-xl text-[#a8dadc] mb-8">
              Local engineering, procurement, installation, and maintenance
              services. Your trusted partner for industrial and commercial
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-[#e63946] text-white px-8 py-3 rounded-md hover:bg-[#d62839] transition-colors text-center font-semibold"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#f1faee] text-white px-8 py-3 rounded-md hover:bg-[#f1faee] hover:text-[#0d1b2a] transition-colors text-center font-semibold"
              >
                Get Quote
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-[#1d3557] p-8 rounded-lg shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e63946] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">ISO 9001 Certified</h3>
                    <p className="text-sm text-[#a8dadc]">
                      Quality Management System
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e63946] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">24/7 Emergency Support</h3>
                    <p className="text-sm text-[#a8dadc]">
                      Always here when you need us
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e63946] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-sm text-[#a8dadc]">
                      60+ certified professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FILE: src/components/home/Services.tsx
// ============================================

import Link from "next/link";
import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0d1b2a] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for your engineering and technology needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#e63946] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0d1b2a] mb-3 group-hover:text-[#e63946] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-[#e63946] font-semibold flex items-center">
                Learn More
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
