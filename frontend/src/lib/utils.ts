import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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