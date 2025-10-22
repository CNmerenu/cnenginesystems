import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cnenginesystems.com'),
  title:
    "CN Engine Systems Ltd - Engineering Excellence in Nigeria | Procurement, Installation & Maintenance",
  description:
    "Leading engineering services company in Nigeria providing comprehensive solutions in engineering design, equipment procurement, professional installation, and maintenance services for industrial and commercial projects.",
  keywords:
    "engineering services Nigeria, equipment procurement, installation services, maintenance contracts, industrial engineering, commercial engineering, HVAC systems, power systems, vending machines, construction services, Nigerian engineering company",
  authors: [{ name: "CN Engine Systems Ltd" }],
  openGraph: {
    title: "CN Engine Systems Ltd - Engineering Excellence in Nigeria",
    description:
      "Comprehensive engineering, procurement, installation, and maintenance services for industrial and commercial projects across Nigeria.",
    type: "website",
    locale: "en_NG",
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
