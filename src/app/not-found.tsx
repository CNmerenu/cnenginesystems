import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

const popularLinks = [
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <div className="text-8xl font-bold text-white/20 mb-4">404</div>
          <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-accent-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-white/80 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track with our engineering solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              variant="primary"
              className="bg-white text-accent-500 hover:bg-gray-100 flex items-center"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>

          <Link href="/services">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent-500 flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              View Services
            </Button>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <h3 className="text-white font-semibold mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {popularLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/80 hover:text-accent-500 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
