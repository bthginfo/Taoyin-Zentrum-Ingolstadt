import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchGlobalData, getCurrentLanguage, type Language } from "../lib/storyblok";
import { type GlobalContent } from "../types/storyblok";

interface StoryblokContextValue {
  globalData: GlobalContent | null;
  language: Language;
  loading: boolean;
  error: Error | null;
}

const StoryblokContext = createContext<StoryblokContextValue | undefined>(undefined);

export function StoryblokProvider({ children }: { children: ReactNode }) {
  const [globalData, setGlobalData] = useState<GlobalContent | null>(null);
  const [language, setLanguage] = useState<Language>(getCurrentLanguage());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadGlobalData = async () => {
      try {
        setLoading(true);
        const story = await fetchGlobalData(language);
        // Only set content if story exists (Storyblok API available)
        if (story && story.content) {
          setGlobalData(story.content);
        } else {
          // Use fallback/static data when Storyblok is not available
          setGlobalData(null);
        }
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to load global data"));
        console.error("Error loading global data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadGlobalData();
  }, [language]);

  // Listen for language changes (e.g., from URL changes)
  useEffect(() => {
    const handleLocationChange = () => {
      const newLang = getCurrentLanguage();
      if (newLang !== language) {
        setLanguage(newLang);
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [language]);

  return (
    <StoryblokContext.Provider value={{ globalData, language, loading, error }}>
      {children}
    </StoryblokContext.Provider>
  );
}

export function useStoryblok() {
  const context = useContext(StoryblokContext);
  if (context === undefined) {
    throw new Error("useStoryblok must be used within a StoryblokProvider");
  }
  return context;
}