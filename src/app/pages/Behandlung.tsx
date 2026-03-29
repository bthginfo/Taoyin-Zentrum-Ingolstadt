import { CtaSection } from "../components/CtaSection";
import { usePageContent } from "../../hooks/usePageContent";
import type { BehandlungContent } from "../../types/storyblok";

export default function Behandlung() {
  const { text, t } = usePageContent<BehandlungContent>("behandlung");

  return (
    <>
      {/* Hero — .section (cream, default) */}
      <header className="w-full bg-[var(--wf-neutral-primary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: Header */}
            <div className="flex flex-col">
              <h1>{text("hero_title", "behandlung.heroTitle")}</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60">
                {text("hero_text", "behandlung.heroText")}
              </p>
            </div>

            {/* Right: grid_2-col tablet-1-col gap-xsmall with 3 images */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/b745265f-4158-4a26-82c2-6957d4c4e11e.avif"
                alt="Natur und Heilung"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/490e72ce-966a-433d-96d3-28f46b7a18a1.avif"
                alt="Praxisraum"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537114c0ae0a617d65064_Estela-byaylin-29-min.jpg"
                alt="Estela Fuchs"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2] col-span-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Ihr Ziel — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("ihr_ziel", "behandlung.ihrZiel")}</h2>

            <h2>{text("orient_title", "behandlung.orientTitle")}</h2>
            <p>{text("orient_text", "behandlung.orientText")}</p>

            <h2>{text("stabil_title", "behandlung.stabilTitle")}</h2>
            <p>{text("stabil_text", "behandlung.stabilText")}</p>

            <h2>{text("unters_title", "behandlung.untersTitle")}</h2>
            <p>{text("unters_text", "behandlung.untersText")}</p>
          </article>
        </div>
      </section>

      {/* Die Behandlung — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>{text("die_behandlung", "behandlung.dieBehandlung")}</h2>

            <h4><strong>{text("beratung_title", "behandlung.beratungTitle")}</strong></h4>
            <p>{text("beratung_text", "behandlung.beratungText")}</p>

            <h4><strong>{text("einzel_title", "behandlung.einzelTitle")}</strong></h4>
            <p>{text("einzel_text1", "behandlung.einzelText1")}</p>
            <p>{text("einzel_text2", "behandlung.einzelText2")}</p>

            <h4><strong>{text("koerper_title", "behandlung.koerperTitle")}</strong></h4>
            <p>{text("koerper_text", "behandlung.koerperText")}</p>
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
