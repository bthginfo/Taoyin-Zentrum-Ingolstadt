import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

// Check if token is available
const accessToken = import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN as string | undefined;

let storyblokApiInstance: ReturnType<typeof getStoryblokApi> | null = null;

if (accessToken) {
  try {
    storyblokInit({
      accessToken,
      use: [apiPlugin],
      apiOptions: {
        region: "eu",
      },
    });
    storyblokApiInstance = getStoryblokApi();
    console.log("✅ Storyblok initialized");
  } catch (e) {
    console.warn("⚠️ Storyblok initialization failed, using fallback data:", e);
    storyblokApiInstance = null;
  }
} else {
  console.info("ℹ️ No Storyblok token set – running with static fallback data.");
}

export const storyblokApi = storyblokApiInstance;

// Language paths for our custom multi-language setup
export const LANGUAGES = ["de", "en", "es"] as const;
export type Language = typeof LANGUAGES[number];

// Get current language from URL path
export function getCurrentLanguage(): Language {
  const path = window.location.pathname;
  const langMatch = path.match(/^\/(de|en|es)(\/|$)/);
  return langMatch ? (langMatch[1] as Language) : "de";
}

// Build story slug based on language and page
export function getStorySlug(page: string, lang?: Language): string {
  const language = lang || getCurrentLanguage();
  return `${language}/${page}`;
}

// Fetch a story by slug
export async function fetchStory(slug: string) {
  if (!storyblokApi) {
    return null;
  }

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: import.meta.env.DEV ? "draft" : "published",
    });
    return data.story;
  } catch (error) {
    console.error(`Error fetching story ${slug}:`, error);
    return null;
  }
}

// Fetch list of news articles
export async function fetchNewsList(lang: Language = "de") {
  if (!storyblokApi) return [];
  try {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: import.meta.env.DEV ? "draft" : "published",
      starts_with: `${lang}/news/`,
      sort_by: "first_published_at:desc",
    });
    return data.stories || [];
  } catch (error) {
    console.error(`Error fetching news for ${lang}:`, error);
    return [];
  }
}

// Fetch global data (navbar, footer, etc.)
export async function fetchGlobalData(lang: Language = "de") {
  if (!storyblokApi) {
    return null;
  }

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${lang}/global`, {
      version: import.meta.env.DEV ? "draft" : "published",
    });
    return data.story;
  } catch (error) {
    console.error(`Error fetching global data for ${lang}:`, error);
    return null;
  }
}