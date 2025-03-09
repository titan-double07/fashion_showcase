"use client"
import { getHomePageHeroMedia, HomePageHeroMedia } from "@/api/services/page-content/get-page-content";
import { API_URL } from "@/lib/constants";
import { m } from "@/lib/motion/motion";
import Link from "next/link";
import { useEffect, useState } from "react";



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
    <div className="relative h-[65vh] lg:h-screen w-full overflow-y-scroll snap-y snap-proximity scrollbar-hide  ">
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
              className="absolute top-10 left-10 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg"
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

// // This version of the HeroSection component switches between videos on end
// export function HeroSection() {
//   const [media, setMedia] = useState<HomePageHeroMedia[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   console.log("🚀 ~ HeroSection ~ media:", media[currentIndex])

//   // Fetch the hero media
//   useEffect(() => {
//     async function fetchVideos() {
//       const data = await getHomePageHeroMedia();
//       if (data?.data) {
//         setMedia(data.data);
//       }
//     }
//     fetchVideos();
//   }, []);

//   // Handle video end event to switch videos
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleVideoEnd = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
//     };

//     video.addEventListener("ended", handleVideoEnd);
//     return () => {
//       video.removeEventListener("ended", handleVideoEnd);
//     };
//   }, [media, currentIndex]);

//   return (
//     <div className="relative h-[50vh] lg:h-screen w-full overflow-hidden">
//       {media.length > 0 && (
//         <>
//           {/* VIDEO ELEMENT */}
//           <m.video
//             key={media[currentIndex].media.id}
//             ref={videoRef}
//             src={`${API_URL}${media[currentIndex].media.url}`}
//             autoPlay
//             muted
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           />

//           {/* VIDEO NAME */}
//           <m.div
//             className="absolute top-10 left-10 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg"
//             key={media[currentIndex].media.id} // Ensures animation triggers on change
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}>
//             {media[currentIndex].name}
//           </m.div>
//         </>
//       )}
//     </div>
//   );
// }

export const IntroSection = () => {
  return (
    <div className="h-96 bg-green-500">
      IntroSection where there will be some text
    </div>
  )
}

export const CollectionSection = () => {
    return <div id="collections" className="h-screen bg-yellow-500 flex flex-col">
        Collection Section :  Here, we will display the collections as the user scrolls. for each collection the images for the collection would be displayed as a stack with one image of the cloth (worn by a model) display in full at the side which changes as the user hovers on the stack
        <Link href="/collections/1" className=" underline text-blue-500">Go to Collection Page</Link>
    </div>;
}
