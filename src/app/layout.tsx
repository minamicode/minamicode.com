import type { Metadata } from "next";
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
      </head>
      <body>{children}</body>
    </html>
  );
}
