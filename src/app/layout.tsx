import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HoverNavigation from "@/components/HoverNavigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hiroki Okabe",
  description: "Click vertices to navigate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HoverNavigation />
        <div className="content-wrapper transition-opacity duration-300">
          {children}
        </div>
      </body>
    </html>
  );
}
