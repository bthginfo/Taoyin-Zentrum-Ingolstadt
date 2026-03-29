import { SEO } from "../components/SEO";
import { CtaSection } from "../components/CtaSection";
import { usePageContent } from "../../hooks/usePageContent";
import type { AboutContent } from "../../types/storyblok";

export default function About() {
  const { text, t } = usePageContent<AboutContent>("about");

  return (
    <>
      <SEO
        title={text("seo_title", "about.heroName")}
        description={text("seo_description", "about.heroSubtitle")}
        keywords="Estela Fuchs, Psychotherapie Ingolstadt, Qi Gong Lehrerin, Taoismus, TaoBasis, Heilpraktiker Ingolstadt, Chi Nei Tsang Therapeutin, Taoyin Zentrum"
        url="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Estela Fuchs",
          "jobTitle": "Heilpraktikerin für Psychotherapie, Qi Gong & Tao Yin Lehrerin",
          "url": "https://taoyin-zentrum-ingolstadt.de/about",
          "worksFor": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Taoyin Zentrum Ingolstadt",
            "url": "https://taoyin-zentrum-ingolstadt.de"
          },
          "knowsAbout": ["Qi Gong", "Tao Yin", "Chi Nei Tsang", "Psychotherapie", "Taoismus"],
          "sameAs": ["https://taoyin-zentrum-ingolstadt.de"]
        }}
      />

      {/* Hero — .section (cream), grid_5-col tablet-1-col gap-small */}
      <header className="w-full bg-[var(--wf-neutral-primary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-[var(--gap-sm)] items-center">
            {/* Left 3 cols: image with mask_left */}
            <div className="lg:col-span-3 relative">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370c877743c4a7999300_Estela-byaylin-3.jpg"
                alt={text("hero_name", "about.heroName")}
                className="w-full object-cover"
                style={{
                  borderRadius: "0 0 0 var(--radius-image, 0.75rem)",
                  maskImage: "linear-gradient(to right, transparent 0%, black 8%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%)",
                }}
                loading="lazy"
              />
            </div>

            {/* Right 2 cols: header */}
            <div className="lg:col-span-2 flex flex-col">
              <h1>{text("hero_name", "about.heroName")}</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60 max-w-[30rem]">
                {text("hero_subtitle", "about.heroSubtitle")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Über mich — .section (cream), container.is-small, rich-text */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("article_title", "about.articleTitle")}</h2>
            {text("p1", "about.p1").split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <ul>
              <li>{text("li1", "about.li1")}</li>
              <li>{text("li2", "about.li2")}</li>
              <li>{text("li3", "about.li3")}</li>
            </ul>
            <p>{text("p2", "about.p2")}</p>
            <p>{text("p3", "about.p3")}</p>
            <p>{text("p4", "about.p4")}</p>
            <p>
              {text("p5_title", "about.p5title")}<br />
              {text("p5", "about.p5")}
            </p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
