"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/home/heroSection/HeroSection";
import TrendingSection from "@/components/home/trendingSection/TrendingSection";
import TopCreatorsSection from "@/components/home/topCreatorSection/TopCreatorsSection";
import CategoriesSection from "@/components/home/categorieSection/CategoriesSection";
import DiscoverSection from "@/components/home/discoverSection/DiscoverSection";
import HighlightSection from "@/components/home/highlightSection/HighlightSection";
import HowItWork from "@/components/home/howItWorkSection/HowItWork";
import SubscribeWidgetSection from "@/components/home/subscribeWidget/SubscribeWidgetSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <TopCreatorsSection />
      <CategoriesSection />
      <DiscoverSection />
      <HighlightSection />
      <HowItWork />
      <SubscribeWidgetSection />
    </>
  );
}
