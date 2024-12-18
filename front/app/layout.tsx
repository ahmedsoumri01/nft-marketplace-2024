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
import WelcomeFirstTime from "@/components/header/WelcomeFirstTime";
import CheckTokenValiditie from "@/components/CheckTokenValiditie";
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Buy and sell NFTs",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
   return (
    <html lang="en">
      <body>
        <ToastContainer />
        <StoreProvider>
          <Providers>
            <CheckTokenValiditie />
            <WelcomeFirstTime />
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
            <ScrollToTopBtn />
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
