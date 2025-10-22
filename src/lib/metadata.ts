import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export function generateMetadata({
  title = "CN Engine Systems Ltd - Engineering Excellence in Nigeria",
  description = "Leading engineering services company in Nigeria providing comprehensive solutions in engineering design, equipment procurement, professional installation, and maintenance services.",
  keywords = "engineering services Nigeria, equipment procurement, installation services, maintenance contracts, industrial engineering, commercial engineering, HVAC systems, power systems",
  image = "/assets/og-image.jpg",
  url = "https://cnenginesystems.com",
  type = "website",
  noindex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title.includes("CN Engine Systems") ? title : `${title} | CN Engine Systems Ltd`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: "CN Engine Systems Ltd" }],
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: image }],
      url,
      type,
      siteName: "CN Engine Systems Ltd",
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    alternates: {
      canonical: url,
    },
  };
}