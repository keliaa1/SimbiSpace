import type { Metadata } from "next";
import { Cormorant_Garamond,  Poppins } from "next/font/google";
import "./globals.css";

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

        {children}

      </body>
    </html>
  );
}
