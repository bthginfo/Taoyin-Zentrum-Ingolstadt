import { AngeboteSection } from "../components/AngeboteSection";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";
import { usePageContent } from "../../hooks/usePageContent";
import type { TaoYinContent } from "../../types/storyblok";

export default function TaoYin() {
  const { text, t } = usePageContent<TaoYinContent>("taoyin");

  return (
    <>
      <SEO
        title={text("seo_title", "taoyin.heroTitle")}
        description={text("seo_description", "taoyin.heroText")}
        keywords={text("seo_keywords", "taoyin.heroTitle")}
        url="/taoyin"
      />
      {/* Hero Header — section.is-secondary */}
      <header className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: 2-col grid with 3 images, gap-xsmall */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ec1e1865-4371-4deb-b640-940bfd2c1974.avif"
                alt="Ruhige Landschaft mit Fluss"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/3cc8d6ee-98ad-4bfb-ae1b-618e78b0ce21.avif"
                alt="Qi Gong Kurs"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ee125b47-41aa-4ec5-a593-18b12a1fca27.avif"
                alt="Tao Yin Praxis"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
            </div>

            {/* Right: Header text */}
            <div className="flex flex-col">
              <h1>{text("hero_title", "taoyin.heroTitle")}</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/70 text-balance max-w-[var(--container-sm-width)]">
                {text("hero_text", "taoyin.heroText")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section: TAO — section (bg-primary / white) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("hero_title", "taoyin.taoTitle")}</h2>
            <p>{text("tao_p1", "taoyin.taoP1")}</p>
            <p>{text("tao_p2", "taoyin.taoP2")}</p>
            <blockquote>
              <p>{text("tao_quote", "taoyin.taoQuote")}</p>
              <footer>{text("tao_quote_author", "taoyin.taoQuoteAuthor")}</footer>
            </blockquote>
            <p>{text("tao_p3", "taoyin.taoP3")}</p>
          </article>

          {/* YouTube Embed — Webflow .w-embed-youtubevideo */}
          <div className="mt-[var(--space-2x)] relative w-full" style={{ paddingTop: "56.17%" }}>
            <iframe
              src="https://www.youtube.com/embed/fsmXRcD_jYI?rel=0&controls=1&autoplay=0&mute=0&start=0"
              className="absolute inset-0 w-full h-full rounded-[var(--radius-image)]"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Dimensions: Cosmic Eye HD"
            />
          </div>
        </div>
      </section>

      {/* Section: YIN — section.is-secondary */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{t("taoyin.yinTitle")}</h2>
            <p>
              <strong>Yin und Yang</strong> {text("yin_p1", "taoyin.yinP1")}
            </p>

            <h3>{text("yin_subtitle", "taoyin.yinSubtitle")}</h3>

            {/* Yin Yang Symbol — centered figure */}
            <figure className="flex justify-center my-[var(--space-2x)]">
              <img
                src="https://cdn.prod.website-files.com/wordpress/wp-content/uploads/2017/01/Yin_yang.svg_.png"
                alt="Yin und Yang Symbol"
                className="w-40 h-40 object-contain"
                loading="lazy"
              />
            </figure>

            <p>{text("yin_p2", "taoyin.yinP2")}</p>
            <p>{text("yin_p3", "taoyin.yinP3")}</p>

            <blockquote>
              <p>{text("yin_quote", "taoyin.yinQuote")}</p>
              <footer>{text("yin_quote_author", "taoyin.yinQuoteAuthor")}</footer>
            </blockquote>

            <p>{text("yin_p4", "taoyin.yinP4")}</p>
            <p>{text("yin_p5", "taoyin.yinP5")}</p>
            <p>{text("yin_p6", "taoyin.yinP6")}</p>
          </article>
        </div>
      </section>

      {/* Section: TAOYIN — section (bg-primary / white) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{t("taoyin.taoyinTitle")}</h2>
            <p>{text("taoyin_p1", "taoyin.taoyinP1")}</p>
            <p>{text("taoyin_p2", "taoyin.taoyinP2")}</p>
            <p>{text("taoyin_p3", "taoyin.taoyinP3")}</p>
            <p>{text("taoyin_sign", "taoyin.taoyinSign")}</p>
          </article>
        </div>
      </section>

      {/* Angebote — section.is-secondary (reused component) */}
      <AngeboteSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}