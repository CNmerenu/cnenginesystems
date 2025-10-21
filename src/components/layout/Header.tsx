"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-primary-500/95 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 shadow-xl border-b border-accent-500/20">
      <nav className="container-padding">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative transition-transform group-hover:scale-105">
              <Image
                src="/assets/logo-light.svg"
                alt="CN Engine Systems Logo"
                width={200}
                height={148}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lightAccent-500 hover:text-accent-500 transition-all duration-300 font-medium relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary-500/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-accent-500/20 mt-4 pt-4 animate-slide-up">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-lightAccent-500 hover:text-accent-500 hover:bg-secondary-500/50 rounded-md px-2 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
