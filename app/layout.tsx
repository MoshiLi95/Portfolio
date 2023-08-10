import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navigation from "./(Navigation)";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Moshi Li's portfolio`,
  description: `Moshi Li's portfolio`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
