import React from "react";
import "./styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Paytone_One } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Analytics } from "@vercel/analytics/next";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: "500",
});

const paytone = Paytone_One({
  weight: "400",
  variable: "--font-paytone",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Saisa Motors Limited ",
  description: "Dealers in New and Clean second hand motor vehicles",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={` ${nunito.className} ${paytone.variable} antialiased`}>
        <Header />
        {children}
        <Button className="bg-red-500 rounded-md p-2 ">
          Test Tailwind css
        </Button>
        <SocialLinks />
        <WhatsappButton />
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
