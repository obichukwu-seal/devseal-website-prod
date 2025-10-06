import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  Footer,
  NavBar,
  ScrollToTop,
  Container,
  SectionHelpCard,
  StayInformed,
  ClientSection,
} from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { STAY_INFORMED_CONTENT } from "@/constants/stay-informed-data";
import { CookieBanner } from "@/components/molecule/CookieBanner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "devSEAL Technology Inc.",
  description: "devSEAL technology - software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} from-slate-900 via-blue-900 to-slate-900 bg-gradient-to-br`}>
        <ScrollToTop />
        <div className="w-full h-full min-h-[100svh] flex flex-col justify-between">
          <header>
            <NavBar />
          </header>
          {children}
          <SectionHelpCard />
          <ClientSection/>
          <StayInformed
            title={STAY_INFORMED_CONTENT.title}
            body={STAY_INFORMED_CONTENT.content}
            formCta={STAY_INFORMED_CONTENT.form.input.button.text}
            formLabel={STAY_INFORMED_CONTENT.form.input[1].label}
            formPlaceholder={STAY_INFORMED_CONTENT.form.input[1].placeholder}
          />
          <Footer />
        </div>
        <CookieBanner/>
        <ToastContainer />
      </body>
    </html>
  );
}
