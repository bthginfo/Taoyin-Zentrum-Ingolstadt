import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getCurrentLanguage, fetchNewsList } from "../lib/storyblok";
import type { StoryblokStory, NewsArticleContent } from "../types/storyblok";

export function useNewsList() {
  const [articles, setArticles] = useState<StoryblokStory<NewsArticleContent>[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const lang = getCurrentLanguage();
      const stories = await fetchNewsList(lang);
      setArticles(stories);
      setLoading(false);
    };
    load();
  }, [location.pathname]);

  return { articles, loading };
}
