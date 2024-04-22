import type { Metadata } from "next";
import { Stick_No_Bills, Jersey_10_Charted as Sans } from "next/font/google";
import "./globals.css";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const stick = Stick_No_Bills({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const sans = Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stick.className} ${sans.variable} text-white bg-[#1b4d3e]`}
      >
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
