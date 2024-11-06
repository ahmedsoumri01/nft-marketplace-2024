import HeroSection from "@/components/home/heroSection/HeroSection";
import TrendingSection from "@/components/home/trendingSection/TrendingSection";
import TopCreatorsSection from "@/components/home/topCreatorSection/TopCreatorsSection";
import CategoriesSection from "@/components/home/categorieSection/CategoriesSection";
import DiscoverSection from "@/components/home/discoverSection/DiscoverSection";
import HighlightSection from "@/components/home/highlightSection/HighlightSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <TopCreatorsSection />
      <CategoriesSection />
      <DiscoverSection />
      <HighlightSection />
    </>
  );
}
