import { Link } from "react-router";
import { SEO } from "../components/SEO";
import { CtaSection } from "../components/CtaSection";
import { useLangLink } from "../../hooks/useTranslation";
import { usePageContent } from "../../hooks/usePageContent";
import type { PsychotherapieContent } from "../../types/storyblok";

const ArrowIcon = () => (
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

const therapyKeys = [
  { titleKey: "therapy.autogenes.title", textKey: "therapy.autogenes.short", sbTitle: "therapy_autogenes_title", sbText: "therapy_autogenes_text" },
  { titleKey: "therapy.kognitiv.title", textKey: "therapy.kognitiv.short", sbTitle: "therapy_kognitiv_title", sbText: "therapy_kognitiv_text" },
  { titleKey: "therapy.massage.title", textKey: "therapy.massage.short", sbTitle: "therapy_massage_title", sbText: "therapy_massage_text" },
  { titleKey: "therapy.meditation.title", textKey: "therapy.meditation.short", sbTitle: "therapy_meditation_title", sbText: "therapy_meditation_text" },
  { titleKey: "therapy.paar.title", textKey: "therapy.paar.short", sbTitle: "therapy_paar_title", sbText: "therapy_paar_text" },
  { titleKey: "therapy.pmr.title", textKey: "therapy.pmr.short", sbTitle: "therapy_pmr_title", sbText: "therapy_pmr_text" },
  { titleKey: "therapy.sokrat.title", textKey: "therapy.sokrat.short", sbTitle: "therapy_sokrat_title", sbText: "therapy_sokrat_text" },
  { titleKey: "therapy.yoga.title", textKey: "therapy.yoga.short", sbTitle: "therapy_yoga_title", sbText: "therapy_yoga_text" },
] as const;

const detailBlockKeys = [
  {
    eyebrowKey: "psycho.detail1Eyebrow",
    titleKey: "psycho.detail1Title",
    textKey: "psycho.detail1Text",
    linkTextKey: "psycho.detail1Link",
    sbEyebrow: "detail1_eyebrow",
    sbTitle: "detail1_title",
    sbText: "detail1_text",
    sbLink: "detail1_link",
    linkTo: "/behandlung",
    image: "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d6745cc734423847d58b_9ae3166a-4496-49f1-9d77-c97f40759bdb.avif",
    imageAlt: "Ruhige Landschaft",
    imageFirst: false,
  },
  {
    eyebrowKey: "psycho.detail2Eyebrow",
    titleKey: "psycho.detail2Title",
    textKey: "psycho.detail2Text",
    linkTextKey: "psycho.detail2Link",
    sbEyebrow: "detail2_eyebrow",
    sbTitle: "detail2_title",
    sbText: "detail2_text",
    sbLink: "detail2_link",
    linkTo: "/about",
    image: "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537114c0ae0a617d65064_Estela-byaylin-29-min.jpg",
    imageAlt: "Estela Fuchs",
    imageFirst: true,
  },
  {
    eyebrowKey: "psycho.detail3Eyebrow",
    titleKey: "psycho.detail3Title",
    textKey: "psycho.detail3Text",
    linkTextKey: "psycho.detail3Link",
    sbEyebrow: "detail3_eyebrow",
    sbTitle: "detail3_title",
    sbText: "detail3_text",
    sbLink: "detail3_link",
    linkTo: "/",
    image: "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg",
    imageAlt: "Taoyin Zentrum",
    imageFirst: true,
  },
] as const;

export default function Psychotherapie() {
  const { text, t } = usePageContent<PsychotherapieContent>("psychotherapie");
  const langLink = useLangLink();

  return (
    <>
      <SEO 
        title={text("seo_title", "psycho.heroTitle")}
        description={text("seo_description", "psycho.heroText")}
        keywords={text("seo_keywords", "psycho.heroTitle")}
        url="/psychotherapie"
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Ganzheitliche Psychotherapie – Taoyin Zentrum Ingolstadt",
          "description": "Psychotherapie nach dem Heilpraktikergesetz mit taoistischen Methoden, Körperarbeit und Achtsamkeit.",
          "provider": {
            "@type": "Person",
            "name": "Estela Fuchs",
            "jobTitle": "Heilpraktikerin für Psychotherapie"
          },
          "areaServed": {
            "@type": "City",
            "name": "Ingolstadt"
          },
          "url": "https://taoyin-zentrum-ingolstadt.de/psychotherapie"
        }}
      />

      {/* Hero — .section.is-secondary, max-height_100vh_desktop */}
      <header className="w-full bg-[var(--wf-neutral-secondary)] overflow-hidden lg:max-h-dvh py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-lg)] items-center">
            {/* Left: Header */}
            <div className="flex flex-col">
              <h1>{text("hero_title", "psycho.heroTitle")}</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60 mb-[var(--space-2x)] max-w-[var(--container-sm-width)]">
                {text("hero_text", "psycho.heroText")}
              </p>
              <div className="flex flex-wrap gap-[var(--space-0-5x)]">
                <a
                  href="#Details"
                  className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:opacity-90 transition-all"
                >
                  {text("hero_btn1", "psycho.heroBtn1")}
                </a>
                <a
                  href="#therapien"
                  className="inline-flex items-center justify-center border border-current/20 py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:bg-current/5 transition-all"
                >
                  {text("hero_btn2", "psycho.heroBtn2")}
                </a>
              </div>
            </div>

            {/* Right: rotate_12deg with 2 stacked images */}
            <div className="lg:rotate-[12deg] lg:origin-center flex flex-col gap-[var(--gap-sm)]">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370c877743c4a7999300_Estela-byaylin-3.jpg"
                alt="Estela in der Praxis"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif"
                alt="Massage Therapie"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Details Section — .section (cream) */}
      <section id="Details" className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="flex flex-col gap-[var(--gap-xxl)]">
            {detailBlockKeys.map((block) => (
              <div
                key={block.titleKey}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-lg)] items-center"
              >
                {/* Image — placed first on even blocks (imageFirst) */}
                {block.imageFirst && (
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className="w-full object-cover rounded-[var(--radius-image)]"
                    loading="lazy"
                  />
                )}

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--wf-accent-primary)] mb-[var(--space-0-5x)]">
                    {text(block.sbEyebrow as any, block.eyebrowKey)}
                  </span>
                  <h2 className="mb-[var(--space-1x)]">{text(block.sbTitle as any, block.titleKey)}</h2>
                  {text(block.sbText as any, block.textKey).split("\n\n").map((paragraph, pi) => (
                    <p
                      key={pi}
                      className="text-[var(--text-lg-size)] leading-[1.6] text-current/60 mb-[var(--space-0-75x)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <div className="flex items-center gap-2 mt-[var(--space-0-5x)]">
                    <Link
                      to={langLink(block.linkTo)}
                      className="inline-flex items-center gap-2 text-[var(--wf-accent-primary)] hover:underline"
                    >
                      {text(block.sbLink as any, block.linkTextKey)} <ArrowIcon />
                    </Link>
                  </div>
                </div>

                {/* Image — placed after text on odd blocks (!imageFirst) */}
                {!block.imageFirst && (
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className="w-full object-cover rounded-[var(--radius-image)]"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapien Section — .section.is-secondary */}
      <section
        id="therapien"
        className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]"
      >
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          {/* header.is-align-center */}
          <div className="text-center mb-[var(--gap-md)]">
            <h2>{text("therapies_title", "psycho.therapiesTitle")}</h2>
          </div>

          {/* grid_2-col gap-small with card.on-secondary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gap-sm)]">
            {therapyKeys.map((therapy) => (
              <div
                key={therapy.titleKey}
                className="bg-white rounded-[var(--radius-card)] p-[var(--space-2x)]"
              >
                <h3 className="text-center mb-[var(--space-0-75x)]">{text(therapy.sbTitle as any, therapy.titleKey)}</h3>
                <p className="text-[1rem] leading-[1.8] text-current/60 text-left">
                  {text(therapy.sbText as any, therapy.textKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Button group */}
          <div className="flex flex-wrap justify-center gap-[var(--space-0-5x)] mt-[var(--space-2x)]">
            <Link
              to={langLink("/therapien")}
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:opacity-90 transition-all"
            >
              {text("therapies_more", "psycho.therapiesMore")}
            </Link>
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center border border-current/20 py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:bg-current/5 transition-all"
            >
              {text("therapies_inquiry", "psycho.therapiesInquiry")}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section — with Psychotherapie-specific text */}
      <CtaSection
        content={{
          cta_title: t("cta.title"),
          cta_description: t("details.s6.text"),
        }}
      />
    </>
  );
}
