import { Link } from "react-router";
import { useTranslation, useLangLink } from "../../hooks/useTranslation";
import { useNewsList } from "../../hooks/useNews";
import { ScrollReveal, StaggerContainer, staggerItem, motion } from "../../lib/animations";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NewsSection() {
  const { t } = useTranslation();
  const ll = useLangLink();
  const { articles, loading } = useNewsList();

  // Only show section when there are news articles
  if (loading || articles.length === 0) return null;

  return (
    <section className="w-full bg-background py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)]">
        <ScrollReveal className="mb-[var(--gap-md)]">
          <p className="text-[var(--eyebrow-size)] tracking-[var(--eyebrow-letter-spacing)] uppercase text-current/60 mb-[var(--eyebrow-margin-bottom)] leading-[var(--eyebrow-line-height)]">
            {t("news.eyebrow")}
          </p>
          <h2 className="mb-[var(--space-1x)]">
            {t("news.title")}
          </h2>
          <p className="text-[var(--text-lg-size)] text-current/70 leading-[1.6] max-w-[var(--container-sm-width)]">
            {t("news.subtitle")}
          </p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-[var(--gap-sm)]">
          {articles.slice(0, 3).map((article) => {
            const c = article.content;
            return (
              <motion.div key={article.uuid} variants={staggerItem}>
                <Link
                  to={ll(`/news/${article.slug}`)}
                  className="group block"
                >
                  {c.image?.filename && (
                    <div className="aspect-[3/2] rounded-[var(--radius-image)] overflow-hidden mb-4">
                      <img
                        src={c.image.filename}
                        alt={c.image.alt || c.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h3 className="text-[18px] mb-2 group-hover:text-primary/70 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[14px] text-foreground/60 mb-3">{c.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-[14px] text-secondary group-hover:opacity-80 transition-opacity">
                    {t("news.more")}
                    <span className="group-hover:translate-x-1 transition-transform">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}