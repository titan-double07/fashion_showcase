import { API_ROUTES } from "@/api/routes";
import { API_URL } from "@/lib/constants";
import qs from "qs";

// get Home Page Hero Media
export async function getHomePageHeroMedia() {
  const url = new URL(API_ROUTES.HOME_PAGE_HERO, API_URL);
  url.search = qs.stringify({
    populate: {
      media: "*",
    },
  });
  const res = await fetch(url.href);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// get design collections
export async function getDesignCollection() {
  const url = new URL("/api/design-collections", API_URL);
  url.search = qs.stringify({
    populate: "*",
  });
  const res = await fetch(url.href);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
