import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

//components
import FavButton from "@/components/ui/FavButton";
import { ModalContextProvider } from "./context/ModalContext";
import Modal from "@/components/ui/Modal";
import Footer from "@/components/section/Footer";
import Navbar from "@/components/section/Navbar";
import SectionCta from "@/components/section/SectionCta";
import ScrollSmooth from "@/components/ui/ScrollSmooth";
import LoadingApplication from "@/components/ui/LoadingApplication";

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
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
      <body className={barlow.className} suppressHydrationWarning={true}>
        <ModalContextProvider>
          <ScrollSmooth>
            <LoadingApplication />
            <Navbar />
            {children}
            <SectionCta />
            <Footer />

            <FavButton />
            <Modal.Root>
              <Modal.Card />
            </Modal.Root>
          </ScrollSmooth>
        </ModalContextProvider>
      </body>
    </html>
  );
}
