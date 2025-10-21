import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The SME CFO - Enterprise Financial Services for African SMEs",
  description:
    "Professional CFO services for Small and Medium Enterprises across Africa. Get financial statements, performance reporting, tax preparation, and expert financial guidance.",
  keywords:
    "CFO services, SME finance, African business, financial statements, tax preparation, Nigeria, financial consulting",
  authors: [{ name: "The SME CFO" }],
  openGraph: {
    title: "The SME CFO - Enterprise Financial Services",
    description: "Professional CFO services for African SMEs",
    type: "website",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
