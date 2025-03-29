"use client";
import {
  getHomePageHeroMedia,
  HomePageHeroMedia,
} from "@/api/services/page-content/get-page-content";
import { API_URL } from "@/lib/constants";
import TypedText from "@/lib/motion/components/TypedText";
import { m } from "@/lib/motion/motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import MaxWidthContainer from "../base/MaxWidthContainer";
import GlowingOrb from "../base/GlowingOrb";

export function HeroSection() {
  const [media, setMedia] = useState<HomePageHeroMedia[]>([]);

  // Fetch the hero media on mount
  useEffect(() => {
    async function fetchVideos() {
      const data = await getHomePageHeroMedia();
      if (data?.data) {
        setMedia(data.data);
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="scrollbar-hide relative h-screen w-full snap-y snap-proximity overflow-y-scroll">
      {media.length > 0 &&
        media.map((item) => (
          // Each slide takes up the full height and snaps into place.
          <div key={item.media.id} className="relative h-full snap-start">
            <m.video
              src={`${API_URL}${item.media.url}`}
              autoPlay
              muted
              loop
              className="absolute left-0 top-0 h-full w-full object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <m.div
              className="absolute bottom-5 right-2 rounded-lg px-4 py-2 text-4xl font-bold text-white mix-blend-difference"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.name}
            </m.div>
          </div>
        ))}
    </div>
  );
}

// export const IntroSection = () => {
//   return (
//     <m.div
//       variants={staggerContainer({ staggerChildren: 1, delayChildren: 0.5 })}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.5 }}
//       className="h-72 bg-green-500  snap-center flex justify-center items-center">
//       <MaxWidthContainer className=" max-w-screen-md flex flex-col justify-center items-center px-10 space-y-6">
//         <m.p
//           variants={slideIn({ direction: "right" })}
//           className="text-right text-3xl font-bold text-white">
//           A Journey Through Design Excellence
//         </m.p>

//         <m.p
//           variants={slideIn({ direction: "left" })}
//           className="text-left text-lg text-white/80">
//           Each collection is a reflection of artistry, innovation, and timeless
//           craftsmanship.
//         </m.p>
//       </MaxWidthContainer>
//     </m.div>
//   );
// };
export const IntroSection = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <m.div className="relative h-[500px] w-full snap-center overflow-hidden bg-black flex ">
      {/* Orbs */}
      <GlowingOrb size={300} className="bg-blue-500" />
      <GlowingOrb size={500} />

      <MaxWidthContainer className="flex h-full max-w-[1000px] flex-col justify-center space-y-12 px-2 py-14 md:px-10 md:py-32 lg:space-y-[100px]">
        {/* First Paragraph - Typed Effect */}

        <TypedText
          text="A Journey Through Design Excellence"
          className="z-20 self-end text-right text-5xl font-bold text-white md:max-w-[800px]"
          onAnimationComplete={() => setIsDone(true)}
        />

        {/* Second Paragraph - Typed Effect */}
        {isDone && ( //display second paragraph after the first is done
          <TypedText
            text="Each collection is a reflection of artistry, innovation, and timeless craftsmanship."
            className="z-20 text-left text-2xl text-white/80 md:max-w-[600px]"
          />
        )}
      </MaxWidthContainer>
    </m.div>
  );
};

export const CollectionSection = () => {
  return (
    <div id="collections" className="flex h-screen flex-col bg-yellow-500">
      Collection Section : Here, we will display the collections as the user
      scrolls. for each collection the images for the collection would be
      displayed as a stack with one image of the cloth (worn by a model) display
      in full at the side which changes as the user hovers on the stack
      <Link href="/collections/1" className="text-blue-500 underline">
        Go to Collection Page
      </Link>
    </div>
  );
};
