import type { Metadata } from "next";
import { Cormorant_Garamond,  Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import CursorFollower from "@/components/CursorFollower";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"]
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400",  "600"]
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
        className={`${CormorantGaramond.variable} ${PoppinsFont.variable} bg-[#F7EEE9] antialiased`}
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
