import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./wagmiProviders";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import StoreProvider from "@/components/StoreProvider";
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
        <ToastContainer />
        <StoreProvider>
          <Providers>
            <Header />

            {children}

            <Footer />

            <ScrollToTopBtn />
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
