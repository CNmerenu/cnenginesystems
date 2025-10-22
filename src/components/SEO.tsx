import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export default function SEO({
  title = "CN Engine Systems Ltd - Engineering Excellence in Nigeria",
  description = "Leading engineering services company in Nigeria providing comprehensive solutions in engineering design, equipment procurement, professional installation, and maintenance services.",
  keywords = "engineering services Nigeria, equipment procurement, installation services, maintenance contracts, industrial engineering, commercial engineering, HVAC systems, power systems",
  image = "/assets/og-image.jpg",
  url = "https://cnenginesystems.com",
  type = "website",
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes("CN Engine Systems") ? title : `${title} | CN Engine Systems Ltd`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CN Engine Systems Ltd" />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="author" content="CN Engine Systems Ltd" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en-NG" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CN Engine Systems Ltd",
            "description": description,
            "url": url,
            "logo": `${url}/assets/logo.svg`,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NG",
              "addressLocality": "Lagos"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://linkedin.com/company/cn-engine-systems",
              "https://twitter.com/cnenginesystems"
            ]
          })
        }}
      />
    </Head>
  );
}