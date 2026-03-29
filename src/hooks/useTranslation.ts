import { getCurrentLanguage, type Language } from "../lib/storyblok";
import { t as translate } from "../lib/translations";
import { useLocation } from "react-router";

export function useTranslation() {
  // Re-read language on every render (location changes trigger re-render)
  useLocation();
  const lang = getCurrentLanguage();

  const t = (key: Parameters<typeof translate>[0]) => translate(key, lang);

  return { t, lang };
}

// Helper to prefix internal links with the current language
export function useLangLink() {
  useLocation();
  const lang = getCurrentLanguage();

  return (path: string) => {
    if (lang === "de") return path;
    // If path already has lang prefix, return as-is
    if (path.match(/^\/(de|en|es)(\/|$)/)) return path;
    return `/${lang}${path}`;
  };
}
