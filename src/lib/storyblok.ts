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
      bridge: true, // Enable Storyblok Visual Editor bridge
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

// ═══ Storyblok Data Cache ═══
// In-memory cache with stale-while-revalidate pattern.
// In production, caches API responses for 5 minutes to avoid redundant requests.
// In dev mode, caching is disabled for fresh data during development.

const CACHE_TTL = import.meta.env.DEV ? 0 : 5 * 60 * 1000; // 5min in prod, disabled in dev
const memoryCache = new Map<string, { data: any; timestamp: number }>();

function getCached(key: string): any | null {
  if (CACHE_TTL === 0) return null;

  // Try memory cache first
  const mem = memoryCache.get(key);
  if (mem && Date.now() - mem.timestamp < CACHE_TTL) {
    return mem.data;
  }

  // Try sessionStorage
  try {
    const stored = sessionStorage.getItem(`sb_${key}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Date.now() - parsed.timestamp < CACHE_TTL) {
        memoryCache.set(key, parsed);
        return parsed.data;
      }
      sessionStorage.removeItem(`sb_${key}`);
    }
  } catch {
    // sessionStorage not available
  }

  return null;
}

function setCache(key: string, data: any): void {
  if (CACHE_TTL === 0) return;

  const entry = { data, timestamp: Date.now() };
  memoryCache.set(key, entry);

  try {
    sessionStorage.setItem(`sb_${key}`, JSON.stringify(entry));
  } catch {
    // storage full or unavailable
  }
}

// Fetch a story by slug (with caching)
export async function fetchStory(slug: string) {
  if (!storyblokApi) {
    return null;
  }

  const cached = getCached(`story:${slug}`);
  if (cached) return cached;

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: import.meta.env.DEV ? "draft" : "published",
    });
    setCache(`story:${slug}`, data.story);
    return data.story;
  } catch (error) {
    console.error(`Error fetching story ${slug}:`, error);
    return null;
  }
}

// Fetch list of news articles (with caching)
export async function fetchNewsList(lang: Language = "de") {
  if (!storyblokApi) return [];

  const cached = getCached(`news:${lang}`);
  if (cached) return cached;

  try {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: import.meta.env.DEV ? "draft" : "published",
      starts_with: `${lang}/news/`,
      sort_by: "first_published_at:desc",
    });
    const stories = data.stories || [];
    setCache(`news:${lang}`, stories);
    return stories;
  } catch (error) {
    console.error(`Error fetching news for ${lang}:`, error);
    return [];
  }
}

// Fetch global data (with caching)
export async function fetchGlobalData(lang: Language = "de") {
  if (!storyblokApi) {
    return null;
  }

  const cached = getCached(`global:${lang}`);
  if (cached) return cached;

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${lang}/global`, {
      version: import.meta.env.DEV ? "draft" : "published",
    });
    setCache(`global:${lang}`, data.story);
    return data.story;
  } catch (error) {
    console.error(`Error fetching global data for ${lang}:`, error);
    return null;
  }
}