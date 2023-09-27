import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import { Inter } from "next/font/google";
import Script from "next/script";

import Navigation from "./(Navigation)";
import Footer from "./(Footer)";
import ContactForm from "./(ContactForm)";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home L-M.com",
    template: "%s L-M.com",
  },
  description: `Moshi Li's portfolio`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Navigation />
          <div className="main--content">{children}</div>
          <Footer />
          <ContactForm />
        </Providers>
      </body>
    </html>
  );
}
