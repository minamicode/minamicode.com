import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "minamicode.com",
  description: "Minami's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </head>
      <body>{children}</body>
    </html>
  );
}
