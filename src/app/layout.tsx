import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Bartholomew Oche | Data Analyst & IT Specialist",
  description:
    "Portfolio of Joseph Bartholomew Oche — IT Support Specialist and Data Analyst with 4+ years of experience in ICT operations, GIS mapping, data analytics, and customer service.",
  keywords: [
    "Data Analyst",
    "IT Support",
    "Python",
    "SQL",
    "Power BI",
    "QGIS",
    "KoBoToolbox",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950">{children}</body>
    </html>
  );
}
