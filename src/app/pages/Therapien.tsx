import { SEO } from "../components/SEO";
import { CtaSection } from "../components/CtaSection";
import { usePageContent } from "../../hooks/usePageContent";
import type { TherapienContent } from "../../types/storyblok";

export default function Therapien() {
  const { text, t } = usePageContent<TherapienContent>("therapien");

  return (
    <>
      <SEO
        title={text("seo_title", "therapien.heroTitle")}
        description={text("seo_description", "therapien.heroText")}
        keywords="Therapien Ingolstadt, ganzheitliche Therapie, Qi Gong Therapie, Chi Nei Tsang, Tao Yin, Psychotherapie Ingolstadt"
        url="/therapien"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Taoyin Zentrum Ingolstadt – Therapien",
          "description": "Ganzheitliche Therapien: Qi Gong, Tao Yin, Chi Nei Tsang und Psychotherapie im Taoyin Zentrum Ingolstadt.",
          "url": "https://taoyin-zentrum-ingolstadt.de/therapien",
          "medicalSpecialty": "Alternative Medicine"
        }}
      />
      {/* Hero — .section.is-secondary */}
      <header className="w-full bg-[var(--wf-neutral-secondary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: grid_2-col gap-xsmall with 3 images ratio_2x3 */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ec1e1865-4371-4deb-b640-940bfd2c1974.avif"
                alt="Ruhige Landschaft"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371895543153b432f2fa_Estela-byaylin-35-min.jpg"
                alt="Estela in der Praxis"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ee125b47-41aa-4ec5-a593-18b12a1fca27.avif"
                alt="Hintergrund"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3] col-span-2 max-h-[280px]"
                loading="lazy"
              />
            </div>

            {/* Right: Header */}
            <div className="flex flex-col">
              <h1>{text("hero_title", "therapien.heroTitle")}</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60">
                {text("hero_text", "therapien.heroText")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Autogenes Training — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("autogenes_title", "therapy.autogenes.title")}</h2>
            <p>{text("autogenes_text", "therapy.autogenes.short")}</p>
          </article>
        </div>
      </section>

      {/* 2. Kognitive Verhaltenstherapie — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("kognitiv_title", "therapy.kognitiv.title")}</h2>
            <p>{text("kognitiv_detail", "therapy.kognitiv.detail")}</p>
            <ul>
              <li>{text("kognitiv_li1", "therapy.kognitiv.li1")}</li>
              <li>{text("kognitiv_li2", "therapy.kognitiv.li2")}</li>
              <li>{text("kognitiv_li3", "therapy.kognitiv.li3")}</li>
              <li>{text("kognitiv_li4", "therapy.kognitiv.li4")}</li>
            </ul>
            <p>{text("kognitiv_detail2", "therapy.kognitiv.detail2")}</p>
          </article>
        </div>
      </section>

      {/* 3. Massage — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("massage_title", "therapy.massage.title")}</h2>
            <p>{text("massage_text", "therapy.massage.short")}</p>
            <h3><strong>{text("massage_effects_title", "therapy.massage.detail.title")}</strong></h3>
            <ul>
              {text("massage_effects", "therapy.massage.effects").split(",").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{text("massage_detail2", "therapy.massage.detail2")}</p>
          </article>
        </div>
      </section>

      {/* 4. Meditation — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("meditation_title", "therapy.meditation.title")}</h2>
            <p>{text("meditation_text", "therapy.meditation.short")}</p>

            <h2>{text("meditation_how_title", "therapy.meditation.howTitle")}</h2>
            <p>{text("meditation_how_text", "therapy.meditation.howText")}</p>

            <p><strong>{text("meditation_phys_title", "therapy.meditation.physTitle")}</strong></p>
            <ul>
              {text("meditation_phys_list", "therapy.meditation.physList").split(",").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p><strong>{text("meditation_psych_title", "therapy.meditation.psychTitle")}</strong></p>
            <ul>
              {text("meditation_psych_list", "therapy.meditation.psychList").split(",").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p><strong>{text("meditation_behav_title", "therapy.meditation.behavTitle")}</strong></p>
            <ul>
              {text("meditation_behav_list", "therapy.meditation.behavList").split(",").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* 5. Paartherapie — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("paar_title", "therapy.paar.title")}</h2>
            <p>{text("paar_text", "therapy.paar.short")}</p>
            <ul>
              {text("paar_goals", "therapy.paar.goals").split(",").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* 6. Sokratischer Dialog — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("sokrat_title", "therapy.sokrat.title")}</h2>
            <p>{text("sokrat_text", "therapy.sokrat.short")}</p>
          </article>
        </div>
      </section>

      {/* 7. Yoga, Qigong, Tai Chi — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("yoga_title", "therapy.yoga.title")}</h2>
            <p>{text("yoga_text", "therapy.yoga.short")}</p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        content={{
          cta_title: t("cta.title"),
          cta_description: t("details.s6.text"),
        }}
      />
    </>
  );
}
