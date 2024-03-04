import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

//components
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-barlow'
})

export const metadata: Metadata = {
  title: "Lanistar Card - Case de estudo",
  description: "Este é um case de estudo usando o layout do CodeBoost",
  openGraph: {

  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body className={barlow.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
