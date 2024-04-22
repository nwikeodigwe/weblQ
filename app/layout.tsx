import type { Metadata } from "next";
import { Anta, Jersey_10_Charted as Sans } from "next/font/google";
import "./globals.css";

const anta = Anta({
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
        className={`${anta.className} ${sans.variable} text-white bg-[#1b4d3e]`}
      >
        {children}
      </body>
    </html>
  );
}