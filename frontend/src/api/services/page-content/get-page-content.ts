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
  data: T;
  meta: Metadata;
};

// media type
export type Media = {
  id: number;
  documentId: string;
  url: string;
  mime: string;
};

export type HomePageHeroMedia = {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media: Media;
};

// hero collection type
export type HeroCollection = {
  id: number;
  collection_name: string;
  collection_media: Media;
};

// intro section type
export type Intro = {
  id: number;
  paragraph_1: string;
  paragraph_2: string;
};

// collection section
export type CollectionSectionData = {
  id: number;
  intro_media: Media[];
  design_collections: DesignCollection[];
};

type DesignCollection = {
  id: number;
  documentId: string;
  description: string;
  slug: string;
  media: Media[];
};

// landing page type
export type LandingPage = {
  id: number;
  documentId: number;
  hero_collection_video: HeroCollection[];
  intro_section: Intro;
  collection_section: CollectionSectionData;
};

// get landing page content
export async function getLandingPageContent(
  section?: "hero" | "intro" | "collection",
): Promise<ApiResponse<LandingPage> | undefined> {
  // Define populate options for each section
  const populateOptions: Record<string, Record<string, unknown>> = {
    hero: { hero_collection_video: { populate: "*" } },
    intro: { intro_section: { populate: "*" } },
    collection: {
      collection_section: {
        populate: {
          design_collections: { populate: "*" },
          intro_media: { populate: "*" },
        },
      },
    },
  };

  // Build the populate query dynamically based on the section parameter
  const populateQuery = section
    ? populateOptions[section]
    : {
        hero_collection_video: { populate: "*" },
        intro_section: { populate: "*" },
        collection_section: {
          populate: {
            design_collections: { populate: "*" },
            intro_media: { populate: "*" },
          },
        },
      };

  const url = new URL(API_ROUTES.LANDING_PAGE, API_URL);
  url.search = qs.stringify({ populate: populateQuery });

  try {
    const res = await fetch(url.href);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

// get Home Page Hero Media
export async function getHomePageHeroMedia(): Promise<ApiResponse<HomePageHeroMedia> | null> {
  const url = new URL(API_ROUTES.HOME_PAGE_HERO, API_URL);
  url.search = qs.stringify({
    populate: {
      media: "*",
    },
  });
  try {
    const res = await fetch(url.href);
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
  try {
    const res = await fetch(url.href);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
