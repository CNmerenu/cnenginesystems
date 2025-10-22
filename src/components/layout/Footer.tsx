import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Clock } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-secondary-500 to-primary-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container-padding py-16">
        <div className="flex flex-col  gap-8 md:flex-row md:justify-between ">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/assets/logo-light.svg"
                  alt="CN Engine Systems Logo"
                  width={200}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-subtleAccent-500 mb-6 max-w-md leading-relaxed">
              Professional engineering services company in Nigeria providing
              comprehensive solutions in engineering, procurement, installation,
              and maintenance for industrial and commercial projects.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/cnesnigeria/"
                target="_blank"
                className="text-dark-400 hover:text-secondary-400 transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/cnesnigeria/"
                target="_blank"
                className="text-dark-400 hover:text-secondary-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/cnesnigeria/"
                target="_blank"
                className="text-dark-400 hover:text-secondary-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-lightAccent-500">
              Contact Us
            </h3>
            <ul className="space-y-4 text-subtleAccent-500">
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-accent-500 transition-colors">
                  <MapPin className="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-lightAccent-500">
                    HQ Address
                  </div>
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-accent-500 transition-colors">
                  <Mail className="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-lightAccent-500">Email</div>
                  <span className="text-sm">projects@cnenginesystems.com</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-accent-500 transition-colors">
                  <Clock className="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-lightAccent-500">
                    Support
                  </div>
                  <span className="text-sm">24/7 Available</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lightAccent-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-subtleAccent-500 text-sm">
              &copy; 2021 - {currentYear} CN Engine Systems Ltd. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-subtleAccent-500 hover:text-accent-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-subtleAccent-500 hover:text-accent-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
