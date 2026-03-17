import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import CursorFollower from "@/components/CursorFollower";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond", // keeping variable name for compatibility or change it if we want
  weight: ["400", "500", "600", "700"]
});

const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-poppins", // keeping variable name to avoid breaking existing classes instantly, but we can change it
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "SimbiSpace",
  description: "Made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGrotesk.variable} ${DMSans.variable} bg-[#F7EEE9] text-neutral-900 border-neutral-900 antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <CursorFollower />
          <Header />
          <main className="pt-24 min-h-screen">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
