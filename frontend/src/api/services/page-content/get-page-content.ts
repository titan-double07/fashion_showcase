import { API_ROUTES } from "@/api/routes";
import { API_URL } from "@/lib/constants";
import qs from "qs";

type Metadata = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
    
};
type ApiResponse<T> = {
  data : T[];
  meta: Metadata;
}
  
export type Media = {
  id: number;
  documentId: string;
  url: string;
  mime: string;
};

export type HomePageHeroMedia =  {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media: Media;
}

// get Home Page Hero Media
export async function getHomePageHeroMedia(): Promise<ApiResponse<HomePageHeroMedia>| null> {
  const url = new URL(API_ROUTES.HOME_PAGE_HERO, API_URL);
  url.search = qs.stringify({
    populate: {
      media: "*",
    },
  });
  const res = await fetch(url.href);
  try {
    const data = await res.json();
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
