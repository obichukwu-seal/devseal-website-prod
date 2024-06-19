import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  Footer,
  NavBar,
  ScrollToTop,
  Container,
  SectionHelpCard,
} from "@/components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DevSEAL Technology Inc.",
  description: "DevSEAL technology - software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <ScrollToTop />
        <div className="w-full h-full min-h-[100svh] flex flex-col justify-between">
          <header>
            <NavBar />
          </header>
          {children}
          <SectionHelpCard />
          <Footer />
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
