import Hero from "@/components/home/Hero";
import AdventureFinder from "@/components/home/AdventureFinder";
import Destinations from "@/components/home/Destinations";
import TrekkingRegions from "@/components/home/TrekkingRegions";
import FeaturedTreks from "@/components/home/FeaturedTreks";
import FeaturedTours from "@/components/home/FeaturedTours";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrustStats from "@/components/home/TrustStats";

export default function Home() {
  return (
    <>
      <Hero />
      <AdventureFinder />
      <TrustStats />
      <Destinations />
      <TrekkingRegions />
      <FeaturedTreks />
      <FeaturedTours />
      <WhyChooseUs />
    </>
  );
}