import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

//components
import FavButton from "@/components/ui/FavButton";
import { ModalContextProvider } from "./context/ModalContext";
import Modal from "@/components/ui/Modal";
import Footer from "@/components/section/Footer";
import Navbar from "@/components/section/Navbar";

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
        <ModalContextProvider>
          {/* <Navbar /> */}
          {children}
          <Footer />

          <FavButton />
          <Modal.Root>
            <Modal.Card />
          </Modal.Root>
        </ModalContextProvider>
      </body>
    </html>
  );
}
