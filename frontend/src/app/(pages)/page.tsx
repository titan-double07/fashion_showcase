/* eslint-disable @typescript-eslint/no-unused-vars */
import { getLandingPageContent } from "@/api/services/page-content/get-page-content";
import { CollectionSection, HeroSection, IntroSection } from "@/components/home-page/sections";



export default async function page() {
  const data = await getLandingPageContent().then((res) => res?.data ?? null);
  console.log("🚀 ~ Home ~ data:", data)
  
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start bg-black">
      <HeroSection collection={data?.hero_collection_video}  />
      <IntroSection intro={data?.intro_section} />
      <CollectionSection data={data?.collection_section} />  
      <div className="h-[500px] bg-green-500 w-full"></div>
    </div>
  );
}







