import { AngeboteSection } from "../components/AngeboteSection";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";
import { usePageContent } from "../../hooks/usePageContent";
import type { ChiNeiTsangContent } from "../../types/storyblok";

export default function ChiNeiTsang() {
  const { text, t } = usePageContent<ChiNeiTsangContent>("chi-nei-tsang");

  return (
    <>
      <SEO
        title={text("seo_title", "cnt.heroTitle")}
        description={text("seo_description", "cnt.heroText")}
        keywords={text("seo_keywords", "cnt.heroTitle")}
        url="/chi-nei-tsang"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Chi Nei Tsang – Taoistische Bauchmassage",
          "description": "Chi Nei Tsang ist eine tiefgreifende taoistische Bauchmassage zur Lösung emotionaler und körperlicher Blockaden.",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Taoyin Zentrum Ingolstadt",
            "url": "https://taoyin-zentrum-ingolstadt.de"
          },
          "areaServed": {
            "@type": "City",
            "name": "Ingolstadt"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceLocation": {
              "@type": "Place",
              "name": "Taoyin Zentrum Ingolstadt",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Schleifmühle 3a",
                "addressLocality": "Ingolstadt",
                "postalCode": "85049",
                "addressCountry": "DE"
              }
            }
          }
        }}
      />
      {/* Hero Header — .section (bg-primary = cream) with grid_5-col */}
      <header className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[var(--gap-sm)] items-center">
            {/* Left: Single large image with mask_left */}
            <div className="relative overflow-hidden rounded-[var(--radius-image)] lg:rounded-none lg:-ml-[var(--container-padding)]">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371e7929cdfb71466f5a_Estela-byaylin-60-min.jpg"
                alt={text("hero_title", "cnt.heroTitle")}
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
                loading="lazy"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 15%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%)",
                }}
              />
            </div>

            {/* Right: Header text */}
            <div className="flex flex-col">
              <h1>{text("hero_title", "cnt.heroTitle")}</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/70 text-balance max-w-[38rem]">
                {text("hero_text", "cnt.heroText")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Tiefe Bauchmassage — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("s1_title", "cnt.s1Title")}</h2>
            <p>{text("s1_p1", "cnt.s1P1")}</p>
            <p>{text("s1_p2", "cnt.s1P2")}</p>
            <p>{text("s1_p3", "cnt.s1P3")}</p>
          </article>
        </div>
      </section>

      {/* Section 2: Mögliche Wirkungen — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("s2_title", "cnt.s2Title")}</h2>
            <ul>
              <li>{text("s2_li1", "cnt.s2Li1")}</li>
              <li>{text("s2_li2", "cnt.s2Li2")}</li>
              <li>{text("s2_li3", "cnt.s2Li3")}</li>
              <li>{text("s2_li4", "cnt.s2Li4")}</li>
              <li>{text("s2_li5", "cnt.s2Li5")}</li>
            </ul>
            <p>{text("s2_p1", "cnt.s2P1")}</p>
            <p>{text("s2_p2", "cnt.s2P2")}</p>
          </article>
        </div>
      </section>

      {/* Section 3: 1-Jährige Ausbildung — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("s3_title", "cnt.s3Title")}</h2>
            <p>{text("s3_p1", "cnt.s3P1")}</p>
            <p>{text("s3_p2", "cnt.s3P2")}</p>
            <p>{text("s3_p3", "cnt.s3P3")}</p>
            <p>{text("s3_p4", "cnt.s3P4")}</p>
            <p>{text("s3_p5", "cnt.s3P5")}</p>
            <p>{text("s3_content_title", "cnt.s3ContentTitle")}</p>
            <ul>
              {text("s3_contents", "cnt.s3Contents").split(",").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Angebote — .section.is-secondary */}
      <AngeboteSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
