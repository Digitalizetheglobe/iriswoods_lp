import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IRIS WOODS - Premium Residential Plots',
  description: 'Premium NA residential plots near Hinjewadi Phase III, Ghotawade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>NA Plots for Sale Near Hinjewadi Phase 3, Pune | Codename Iriswoods</title>
        <meta name="description" content="NA plots near Hinjewadi, Pune in a gated community with entrance gate, 24/7 security, clubhouse, pool, internal roads, water, electricity & more." />
        <meta name="google-site-verification" content="1jnGarEGITMJHRSy33sqq1_ct2MUFqUiUFTzxmlZt9U" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4V2HDZ92YD"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4V2HDZ92YD');
        ` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Residence",
          "name": "NA Plots Near Hinjewadi, Pune",
          "description": "Premium NA plots for sale near Hinjewadi, Pune in a gated community with 24/7 security, clubhouse, pool, internal roads, water, electricity & more.",
          "url": "https://codenameiriswoods.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hinjewadi",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Entrance Gate", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Individual Plot Compound", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Internal Roads", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Walkways", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Roadside Plantation", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Water & Electricity", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Name Board", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Drainage Line", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Grand Clubhouse", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Street Lighting", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Indoor Games", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Multipurpose Hall", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Children's Garden", "value": true }
          ]
        }) }} />
      </head>
      <body className={inter.className}>
        {children}

        {/* Enquire Now Button */}
        <a
          href="#contact" // or your contact link
          className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <button className="bg-[#097199] text-white font-bold py-2 px-3 rounded-l-md shadow-lg hover:bg-[#075a7a] transition duration-300 cursor-pointer">
            Download Broucher
          </button>
        </a>
      </body>
    </html>
  );
}
