// Correct hero images from Webflow live site
const heroImage1 = "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d6745cc734423847d58b_9ae3166a-4496-49f1-9d77-c97f40759bdb.avif";
const heroImage2 = "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370c877743c4a7999300_Estela-byaylin-3.jpg";

import { useTranslation } from "../../hooks/useTranslation";

interface HeroProps {
  content?: {
    hero_title?: string;
    hero_subtitle?: string;
    hero_image_1?: { filename: string; alt?: string };
    hero_image_2?: { filename: string; alt?: string };
    hero_button_1_text?: string;
    hero_button_1_link?: string;
    hero_button_2_text?: string;
    hero_button_2_link?: string;
  };
}

export function Hero({ content }: HeroProps) {
  const { t } = useTranslation();
  const title = content?.hero_title || t("hero.title");
  const subtitle = content?.hero_subtitle || t("hero.subtitle");
  const image1 = content?.hero_image_1?.filename || heroImage1;
  const image2 = content?.hero_image_2?.filename || heroImage2;
  const button1Text = content?.hero_button_1_text || t("hero.btn1");
  const button1Link = content?.hero_button_1_link || "#Details";
  const button2Text = content?.hero_button_2_text || t("hero.btn2");
  const button2Link = content?.hero_button_2_link || "#Angebote";

  return (
    <header className="w-full bg-[var(--background-secondary)] overflow-hidden lg:max-h-dvh relative">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.03] via-transparent to-[var(--secondary)]/[0.05] pointer-events-none" />
      <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-md)] lg:gap-[var(--gap-lg)] items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-stretch">
            <div className="inline-flex items-center gap-2 mb-4 text-[var(--eyebrow-size)] tracking-[var(--eyebrow-letter-spacing)] uppercase text-[var(--secondary)]">
              <span className="w-8 h-px bg-[var(--secondary)]"></span>
              {t("hero.eyebrow")}
            </div>
            <h1>{title}</h1>
            <p className="text-[var(--text-lg-size)] leading-[1.7] text-current/65 mb-[var(--space-1-5x)] max-w-[var(--container-sm-width)]" style={{ textWrap: 'balance' }}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-[var(--space-0-75x)] mt-[var(--space-1-5x)]">
              <a
                href={button1Link}
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
              >
                {button1Text}
              </a>
              <a
                href={button2Link}
                className="inline-flex items-center justify-center bg-transparent text-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] hover:shadow-[inset_0_0_0_1px_var(--wf-inverse-a40)] transition-all min-h-[48px]"
              >
                {button2Text}
              </a>
            </div>
          </div>

          {/* Right: Image Composition – overlapping cards on desktop */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rotate-0 lg:rotate-[8deg] transition-transform">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-[var(--gap-xs)] sm:gap-[var(--gap-sm)]">
                  <div className="overflow-hidden rounded-[var(--radius-image)] shadow-lg">
                    <img
                      src={image1}
                      alt={content?.hero_image_1?.alt || t("hero.imgAlt1")}
                      className="w-full object-cover aspect-[3/2] hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[var(--radius-image)] shadow-lg">
                    <img
                      src={image2}
                      alt={content?.hero_image_2?.alt || t("hero.imgAlt2")}
                      className="w-full object-cover aspect-[3/2] hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[var(--secondary)]/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}