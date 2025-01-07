import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const futura = localfont({
  src: [
    {
      path: "../public/fonts/futura-bold.ttf",
    },
  ],
  variable: "--font-futura",
});

const futuraThin = localfont({
  src: [
    {
      path: "../public/fonts/futura-thin.ttf",
    },
  ],
  variable: "--font-futura-thin",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${futura.variable} ${futuraThin.variable}  `}>
        {children}
      </body>
    </html>
  );
}
