import type { Metadata } from "next";
import { Be_Vietnam_Pro, Jersey_10_Charted as Sans } from "next/font/google";
import "./globals.css";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const sans = Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WeblQ Developers",
  description: "Discover innovative web solutions with WeblQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${be_vietnam_pro.className} ${sans.variable} text-white bg-[#215e4c]`}
      >
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
