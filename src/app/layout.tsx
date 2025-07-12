import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "minamicode.com | Personal Website of Indie Founder Minami",
  description:
    "Hello, I am Minami and this is my personal website, where I write about my software engineering journey and about interesting and fun projects I am working on.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define the JSON-LD structured data for a Person
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Minami",
    url: "https://minamicode.com",
    sameAs: [
      "https://github.com/minamicode",
      "https://bsky.app/profile/minamicode.com",
      "https://www.instagram.com/freddandminami",
    ],
    image: "https://minamicode.com/minami.jpg",
    description:
      "The personal portfolio and website for Minami, a software engineer.",
  };

  return (
    <html lang="en" className="font-display text-base">
      <head>
        <link rel="icon" href="https://fav.farm/🌱" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="nw/Wml73yw28f6lobbD/xA"
          strategy="afterInteractive"
          async
        />

        {/* Add JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
