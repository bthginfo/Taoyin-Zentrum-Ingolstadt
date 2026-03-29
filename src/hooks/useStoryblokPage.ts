import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import { fetchStory, getStorySlug, getCurrentLanguage } from "../lib/storyblok";
import { type StoryblokStory } from "../types/storyblok";

export function useStoryblokPage<T = any>(pageName: string) {
  const [story, setStory] = useState<StoryblokStory<T> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  useEffect(() => {
    const loadStory = async () => {
      try {
        setLoading(true);
        const language = getCurrentLanguage();
        const slug = getStorySlug(pageName, language);
        const storyData = await fetchStory(slug);
        setStory(storyData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to load page"));
        console.error(`Error loading page ${pageName}:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadStory();
  }, [pageName, location.pathname]);

  // Listen for Storyblok Visual Editor bridge events (live preview)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data &&
        typeof event.data === "object" &&
        event.data.action === "input" &&
        event.data.story
      ) {
        const updatedStory = event.data.story;
        // Only update if it's the same story
        if (story && updatedStory.id === story.id) {
          setStory(updatedStory);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [story?.id]);

  return { story, content: story?.content as T | null, loading, error };
}
