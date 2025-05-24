"use client";
import {
  CollectionSectionData,
  HeroCollection,
  Intro,
} from "@/api/services/page-content/get-page-content";
import TypedText from "@/lib/motion/components/TypedText";
import {
  m,
  slideIn,
  stagger,
  staggerContainer,
  useAnimate,
  useInView,
} from "@/lib/motion/motion";
import { MImage } from "@/lib/motion/motion-components";
import { LandingPageRoutes } from "@/lib/routes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import GlowingOrb from "../base/GlowingOrb";
import MaxWidthContainer from "../base/MaxWidthContainer";

export function HeroSection({ collection }: { collection?: HeroCollection[] }) {
  return (
    <div className="scrollbar-hide relative h-screen w-full snap-y snap-proximity overflow-y-scroll">
      {!!collection &&
        collection?.map((item) => (
          // Each slide takes up the full height and snaps into place.
          <div key={item.id} className="relative h-full snap-start">
            <m.video
              // src={`${API_URL}${item.collection_media.url}`}
              src={`${item.collection_media.url}`}
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
              {item.collection_name}
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
export const IntroSection = ({ intro }: { intro?: Intro }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <m.div className="relative flex h-screen w-full snap-center overflow-hidden bg-black">
      {/* Orbs */}
      <GlowingOrb size={300} className="bg-blue-500" />
      <GlowingOrb size={500} />

      <MaxWidthContainer className="flex min-h-full max-w-[1000px] flex-col justify-center space-y-12 px-2 md:px-10 lg:space-y-[100px]">
        {/* First Paragraph - Typed Effect */}

        <TypedText
          text={intro?.paragraph_1 || ""}
          className="z-20 self-end text-right text-5xl font-bold text-white md:max-w-[800px]"
          onAnimationComplete={() => setIsDone(true)}
        />

        {/* Second Paragraph - Typed Effect */}
        {isDone && ( //display second paragraph after the first is done
          <TypedText
            text={intro?.paragraph_2 || ""}
            className="z-20 text-left text-2xl text-white/80 md:max-w-[600px]"
          />
        )}
      </MaxWidthContainer>
    </m.div>
  );
};

export const CollectionSection = ({
  data,
}: {
  data?: CollectionSectionData;
  }) => {
  console.log("🚀 ~ data:", data)
  
  // fetch the collection data from landing page api
  return (
    <>
      {data && (
        <>
          <CollectionIntroSection data={data} />
          <CollectionList data={data} />
        </>
      )}
    </>
  );
};
export const CollectionIntroSection = ({
  data,
}: {
  data: CollectionSectionData;
}) => {

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.5,once:true });

  const [scope, animate] = useAnimate();

  // Initial entrance animations
  useEffect(() => {
    if (!isInView || !data) return;

    animate([
      // starting line animation
      [
        ".line",
        { scaleY: [0, 1] },
        {
          duration: 0.8,
          delay: stagger(0.5),
          ease: "easeInOut",
        },
      ],
      // media slide in animation
      [
        ".intro-media",
        { opacity: [0, 1], height: ["0%", "100%"] },
        {
          duration: 1,
          delay: stagger(0.3),
        },
      ],
    ]);
  }, [isInView, animate, data]);

  return (
    <section ref={ref} id="collections" className="relative h-screen w-full bg-black">
      <div ref={scope} className="absolute inset-0">
        {data?.intro_media?.slice(0, -1).map((_, index) => {
          const left = ` ${((index + 1) / data.intro_media.length) * 100}%`;
          return (
            <div
              key={`line-${index}`}
              className="line absolute top-0 h-full w-1 origin-top scale-y-0 bg-white"
              style={{ left }}
            />
          );
        })}

        {/* Intro Media Columns */}
        <div
          className="absolute inset-0 z-0 grid gap-0"
          style={{
            gridTemplateColumns: ` repeat(${data?.intro_media?.length || 1}, 1fr)`,
          }}
        >
          {data?.intro_media?.map((media, index) => (
            <div key={index} className="intro-media h-full w-full opacity-0">
              <video
                className="h-full w-full object-cover"
                src={media?.url}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CollectionList = ({ data }: { data?: CollectionSectionData }) => {
  console.log("🚀 ~ CollectionList ~ data:", data)
  // const ref = useRef(null);

  // const isInView = useInView(ref, { amount: 0.5 });

  // const [scope, animate] = useAnimate();
  // useEffect(() => {
  //   if (!isInView || !data) return;

  //   // animate(
  //   //   ".collection-item",
  //   //   {
  //   //     opacity: [0, 1],
  //   //     x: [50, 0],
  //   //   },
  //   //   { duration: 0.8, delay: stagger(0.2) },
  //   // );
  // }, [isInView, animate, data]);

  return (
    <section className="relative w-full bg-black py-20 text-white">
      <m.div className="mx-auto">
        {data?.design_collections?.map((collection) => (
          <m.div
            key={collection.id}
            className="flex flex-col gap-4 rounded-lg p-6 shadow-lg"
          >
            <Link
              href={`${LandingPageRoutes.COLLECTIONS}/${collection.slug}`}
              className="hover:underline"
            >
              <h3 className="mb-2 text-xl font-bold capitalize">
                {collection.name}
              </h3>
            </Link>
            <p className="mb-4">{collection.description}</p>

            <m.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer({
                staggerChildren: 0.2,
                // delayChildren: 0.3,
              })}
              viewport={{ amount: 0.5, once: true }}
              className="scrollbar-hide flex h-96 w-screen snap-x snap-mandatory gap-5 overflow-x-auto"
            >
              {collection?.media.map((item) => (
                // <m.div
                //   key={item.id}
                // variants={slideIn({ direction: "right", distance: 100 })}
                //   className="w-full snap-center overflow-hidden rounded-md"
                // >
                <MImage
                  key={item.id}
                  src={item.url}
                  alt={item.name || "Media"}
                  className="h-full w-full  object-cover"
                  width={500}
                  height={500}
                  variants={slideIn({ direction: "right", distance: 50 })}
                />
                // {/* </m.div> */}
              ))}
            </m.div>
          </m.div>
        ))}
      </m.div>
    </section>
  );
};
