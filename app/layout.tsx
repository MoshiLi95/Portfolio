import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import { Space_Grotesk } from "next/font/google";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        <Providers>
          <Navigation />
          <div className="main--content">
            {children}
            <Footer />
          </div>
          <ContactForm />
        </Providers>
      </body>
    </html>
  );
}
