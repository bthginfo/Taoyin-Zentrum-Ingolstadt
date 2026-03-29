import { AngeboteSection } from "../components/AngeboteSection";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";
import { usePageContent } from "../../hooks/usePageContent";
import type { QiGongContent } from "../../types/storyblok";

export default function QiGong() {
  const { text, t } = usePageContent<QiGongContent>("qi-gong");

  return (
    <>
      <SEO
        title={text("seo_title", "qigong.heroTitle")}
        description={text("seo_description", "qigong.heroText")}
        keywords={text("seo_keywords", "qigong.heroTitle")}
        url="/qi-gong"
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Medizinisches Qi Gong",
          "description": "Qi Gong Kurse zur Förderung von Gesundheit, innerer Ruhe und Lebensenergie im Taoyin Zentrum Ingolstadt.",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Taoyin Zentrum Ingolstadt",
            "url": "https://taoyin-zentrum-ingolstadt.de"
          },
          "courseMode": "onsite",
          "availableLanguage": ["de", "en", "es"],
          "location": {
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
        }}
      />
      {/* Hero Header — .section (bg-primary = cream) */}
      <header className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: 2-col grid with 4 images (2x2), gap-xsmall */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370e9aba7881ec031049_Estela-byaylin-13.jpg"
                alt="Estela bei der Praxis"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53719850089c1594b1703_Estela-byaylin-42.jpg"
                alt="Gemeinschaftliche Qi Gong Übung"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370bf7333a00c99cc3e1_Estela-byaylin-14.jpg"
                alt="Qi Gong Einzelbegleitung"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/d38b1252-bc48-440f-9886-7d0d97209543.avif"
                alt="Entspannende Qi Gong Sitzung"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
            </div>

            {/* Right: Header text */}
            <div className="flex flex-col">
              <h1>{text("hero_title", "qigong.heroTitle")}</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/70 text-balance max-w-[var(--container-sm-width)]">
                {text("hero_text", "qigong.heroText")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Rich Text Section — .section.is-secondary */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("med_title", "qigong.medTitle")}</h2>
            <p>{text("med_p1", "qigong.medP1")}</p>

            <h2>{text("when_title", "qigong.whenTitle")}</h2>
            <p>{text("when_text", "qigong.whenText")}</p>
            <ul>
              {text("conditions", "qigong.conditions").split(",").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>{text("cert_title", "qigong.certTitle")}</h3>
            <p>{text("cert_p1", "qigong.certP1")}</p>
            <p>{text("cert_p2", "qigong.certP2")}</p>

            <h3>{text("who_title", "qigong.whoTitle")}</h3>
            <p>{text("who_p1", "qigong.whoP1")}</p>
            <p>{text("who_p2", "qigong.whoP2")}</p>
            <p>{text("who_p3", "qigong.whoP3")}</p>
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
