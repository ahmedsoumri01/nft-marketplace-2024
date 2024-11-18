import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./wagmiProviders";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Buy and sell NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
          {children}
          </Suspense>
          <Footer />
          <ScrollToTopBtn />
        </Providers>
      </body>
    </html>
  );
}
