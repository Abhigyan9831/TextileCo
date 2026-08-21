import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MARUTI KRIT TEXTILES | Premium Textile Manufacturing",
    template: "%s | MARUTI KRIT TEXTILES",
  },
  description:
    "MARUTI KRIT TEXTILES is a leading premium textile manufacturer with 10+ years of excellence. Specializing in garment production, fabric sourcing, and custom textile solutions for brands across 25+ cities.",
  keywords: [
    "textile manufacturing",
    "garment production",
    "fabric sourcing",
    "custom textiles",
    "apparel manufacturing",
    "textile exporter",
    "MARUTI KRIT TEXTILES",
    "premium textiles",
    "clothing manufacturer",
    "fabric supplier",
    "textile industry India",
    "garment factory",
  ],
  authors: [{ name: "MARUTI KRIT TEXTILES" }],
  creator: "MARUTI KRIT TEXTILES",
  publisher: "MARUTI KRIT TEXTILES",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://marutikrittextiles.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://marutikrittextiles.com",
    siteName: "MARUTI KRIT TEXTILES",
    title: "MARUTI KRIT TEXTILES | Premium Textile Manufacturing",
    description:
      "Leading premium textile manufacturer with 10+ years of excellence. Specializing in garment production, fabric sourcing, and custom textile solutions for brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MARUTI KRIT TEXTILES | Premium Textile Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARUTI KRIT TEXTILES | Premium Textile Manufacturing",
    description:
      "Leading premium textile manufacturer with 10+ years of excellence. Garment production, fabric sourcing, and custom textile solutions.",
    images: ["/og-image.png"],
    creator: "@marutikrittextiles",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "manufacturing",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: "MARUTI KRIT TEXTILES",
  description:
    "Leading premium textile manufacturer with 10+ years of excellence in garment production, fabric sourcing, and custom textile solutions.",
  url: "https://marutikrittextiles.com",
  logo: "https://marutikrittextiles.com/logo.png",
  image: "https://marutikrittextiles.com/og-image.png",
  telephone: "+91-8013244984",
  email: "marutikrittextiles@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 12, Industrial Area",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "395002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.1702",
    longitude: "72.8311",
  },
  foundingDate: "2009",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 200,
    maxValue: 500,
  },
  sameAs: [
    "https://www.linkedin.com/company/marutikrittextiles",
    "https://twitter.com/marutikrittextiles",
    "https://www.instagram.com/marutikrittextiles",
    "https://www.facebook.com/marutikrittextiles",
  ],
  knowsAbout: [
    "Textile Manufacturing",
    "Garment Production",
    "Fabric Sourcing",
    "Custom Textile Solutions",
    "Apparel Manufacturing",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "21.1702",
      longitude: "72.8311",
    },
    geoRadius: "50000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#FFFFE3] text-foreground`}
        style={{ backgroundColor: "#FFFFE3" }}
      >
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              fontFamily: "var(--font-inter), sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
