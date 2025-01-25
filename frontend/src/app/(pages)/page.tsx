import { getDesignCollection } from "@/services/page-content/get-page-content";



export default async function Home() {
  const data = await getDesignCollection();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
    </div>
  );
}



// a utiliTY function to get the strapi  image url
// export function getStrapiURL() {
//   return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337"; // responsible for getting the strapi public URL
// }

// export function getStrapiMedia(url: string | null) {
//   if (url == null) return null;
//   if (url.startsWith("data:")) return url;
//   if (url.startsWith("http") || url.startsWith("//")) return url;
//   return `${getStrapiURL()}${url}`;
// } // dictates if it should return the URL as is or by appendingthe strapi URL to the path

