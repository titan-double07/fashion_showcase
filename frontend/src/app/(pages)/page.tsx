/* eslint-disable @typescript-eslint/no-unused-vars */
import { getDesignCollection, getHomePageHeroMedia } from "@/api/services/page-content/get-page-content";
import { CollectionSection, HeroSection, IntroSection } from "@/components/home-page/sections";



export default async function page() {
  // const data = await getHomePageHeroMedia();
  // console.log("🚀 ~ Home ~ data:", data)
  
  return (
    <div className=" ">
      <HeroSection />
      <IntroSection />
      <CollectionSection />  
    </div>
  );
}







