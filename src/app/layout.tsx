import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/globals.css";

import Navigation from "@/blocks/Navigation";
import Footer from "@/blocks/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sergio Castillo",
  description:
    "My name is Sergio. I'm a front-end engineer and UI designer based in Glasgow, Scotland",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} selection:text-light-dark selection:bg-light-light scroll-smooth antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
