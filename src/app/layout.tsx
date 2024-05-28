import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const myFont1 = localFont({
  weight: "700",
  variable: "--font-Knight-Warrior",
  src: "../assets/fonts/KnightWarrior-w16n8.otf",
});

const myFont2 = localFont({
  weight: "500",
  variable: "--font-Cubic-Pixel",
  src: "../assets/fonts/CubicPixel-lgEmy.otf",
});

const myFont3 = localFont({
  weight: "500",
  variable: "--font-Spac3-Neon",
  src: "../assets/fonts/Valorax-lg25V.otf",
});

export const metadata: Metadata = {
  title: "Esport-gaming",
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
        className={`${myFont1.variable} ${myFont2.variable} ${myFont3.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
