"use client";
import {
  getHomePageHeroMedia,
  HomePageHeroMedia,
} from "@/api/services/page-content/get-page-content";
import { API_URL } from "@/lib/constants";
import TypedText from "@/lib/motion/components/TypedText";
import { m, staggerContainer } from "@/lib/motion/motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import MaxWidthContainer from "../base/MaxWidthContainer";

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
    <div className="relative h-screen w-full overflow-y-scroll snap-y snap-proximity scrollbar-hide  ">
      {media.length > 0 &&
        media.map((item) => (
          // Each slide takes up the full height and snaps into place.
          <div key={item.media.id} className="snap-start h-full relative">
            <m.video
              src={`${API_URL}${item.media.url}`}
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <m.div
              className="absolute bottom-5 right-2 text-white text-4xl font-bold mix-blend-difference px-4 py-2 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
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
  return (
    <m.div
      variants={staggerContainer({ staggerChildren: 0.2, delayChildren: 0.5 })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className=" bg-green-500 snap-center flex justify-center items-center">
      <MaxWidthContainer className="max-w-screen-md flex flex-col justify-center items-center px-2 py-5 space-y-10">
        {/* First Paragraph - Typed Effect */}
        <TypedText
          text="A Journey Through Design Excellence"
          className="text-right text-5xl font-bold text-white"
        />

        {/* Second Paragraph - Typed Effect */}
        <TypedText
          text="Each collection is a reflection of artistry, innovation, and timeless craftsmanship."
          className="text-left text-2xl text-white/80"
        />
      </MaxWidthContainer>
    </m.div>
  );
};
export const CollectionSection = () => {
  return (
    <div id="collections" className="h-screen bg-yellow-500 flex flex-col">
      Collection Section : Here, we will display the collections as the user
      scrolls. for each collection the images for the collection would be
      displayed as a stack with one image of the cloth (worn by a model) display
      in full at the side which changes as the user hovers on the stack
      <Link href="/collections/1" className=" underline text-blue-500">
        Go to Collection Page
      </Link>
    </div>
  );
};
