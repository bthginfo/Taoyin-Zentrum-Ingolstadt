import { useStoryblokPage } from "./useStoryblokPage";
import { useTranslation } from "./useTranslation";
import type { t as tFn } from "../lib/translations";

/**
 * Combines Storyblok CMS content with static translation fallbacks.
 * If a Storyblok field has content, it's used. Otherwise, falls back to translations.ts.
 *
 * Usage:
 *   const { text, t, lang, content, loading } = usePageContent<MyContent>("pagename");
 *   <h1>{text("hero_title", "page.heroTitle")}</h1>
 */
export function usePageContent<T extends Record<string, any>>(pageName: string) {
  const { content, loading } = useStoryblokPage<T>(pageName);
  const { t, lang } = useTranslation();

  /**
   * Get text: prefer Storyblok field value, fall back to translation key.
   */
  const text = (
    field: keyof T & string,
    translationKey: Parameters<typeof tFn>[0]
  ): string => {
    const val = content?.[field];
    if (typeof val === "string" && val.length > 0) return val;
    return t(translationKey);
  };

  return { content, loading, text, t, lang };
}
