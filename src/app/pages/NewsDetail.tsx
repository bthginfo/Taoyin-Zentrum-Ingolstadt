import { useParams, Link } from "react-router";
import { useStoryblokPage } from "../../hooks/useStoryblokPage";
import { SEO } from "../components/SEO";
import { useTranslation, useLangLink } from "../../hooks/useTranslation";
import { motion } from "motion/react";
import type { NewsArticleContent } from "../../types/storyblok";

export default function NewsDetail() {
  const { slug } = useParams();
  const { content, loading } = useStoryblokPage<NewsArticleContent>(`news/${slug}`);
  const { t } = useTranslation();
  const ll = useLangLink();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[--primary] mx-auto"></div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl mb-4">{t("news.notFound")}</h1>
        <Link to={ll("/")} className="text-secondary hover:underline">
          ← {t("news.backHome")}
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={content.seo_title || content.title}
        description={content.excerpt}
      />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-background py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]"
      >
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <Link
            to={ll("/")}
            className="inline-flex items-center gap-2 text-secondary hover:opacity-80 transition-opacity mb-8"
          >
            ← {t("news.backHome")}
          </Link>

          {content.image?.filename && (
            <div className="rounded-[var(--radius-image)] overflow-hidden mb-8">
              <img
                src={content.image.filename}
                alt={content.image.alt || content.title}
                className="w-full h-auto object-cover aspect-[2/1]"
              />
            </div>
          )}

          <h1 className="mb-4">{content.title}</h1>

          {content.date && (
            <p className="text-current/50 text-sm mb-8">
              {new Date(content.date).toLocaleDateString()}
            </p>
          )}

          <div className="prose-custom whitespace-pre-line">
            <p>{content.body}</p>
          </div>
        </div>
      </motion.article>
    </>
  );
}
