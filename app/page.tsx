"use client";
import Header from "@/components/common/header/Header";
import BenefitsSections from "@/components/features/sections/BenefitsSections";
import Herosection from "@/components/features/sections/Herosection";
import NewHomeData from "../utils/data/home_data.json";
import CategorySection from "@/components/features/sections/CategorySection";
import PopularInArea from "@/components/features/sections/PopularInArea";
import { useMemo } from "react";
import BannerSection from "@/components/features/sections/BannerSection";
import Footer from "@/components/common/footer/Footer";
import FilterSection from "@/components/features/sections/FilterSection";
// import TabContainer from "@/components/sections/TabSection";

export default function HomePage() {
  const homeData = useMemo(() => NewHomeData?.newHomePage?.data?.success, []);
  return (
    <>
      <main>
        <Header />
        <Herosection />
        <BenefitsSections />
        <CategorySection data={homeData} />
        <PopularInArea data={homeData} />
        <BannerSection />
        <FilterSection data={homeData} />
        <Footer />
      </main>
    </>
  );
}
