import { useTranslation } from "../../hooks/useTranslation";
import { ScrollReveal, motion, useScroll, useTransform } from "../../lib/animations";
import { useRef } from "react";

interface CtaSectionProps {
  content?: {
    cta_title?: string;
    cta_description?: string;
    cta_background?: { filename: string };
    cta_buttons?: string;
  };
}

export function CtaSection({ content }: CtaSectionProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const defaultTitle = t("cta.title");
  const defaultDesc = t("cta.desc");
  const defaultImage = "https://cdn.prod.website-files.com/image-generation-assets/ee125b47-41aa-4ec5-a593-18b12a1fca27.avif";
  
  return (
    <section ref={ref} className="relative w-full min-h-[70vh] lg:min-h-dvh grid grid-rows-1 overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={content?.cta_background?.filename || defaultImage}
          alt={t("cta.imgAlt")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: bgY }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(3, 123, 175, 0.35) 30%, rgba(3, 123, 175, 0.65) 60%, rgba(3, 123, 175, 0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-end pb-[var(--section-padding-mobile-p)] md:pb-[var(--section-padding-tablet)] lg:pb-[var(--section-padding)] max-w-[var(--container-width)] mx-auto px-[var(--container-padding)] w-full">
        <ScrollReveal className="w-full">
          <div className="text-center max-w-[var(--container-sm-width)] mx-auto">
            <h2 className="text-white mb-[var(--space-1x)]" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
              {content?.cta_title || defaultTitle}
            </h2>
            <p className="text-white/70 text-[var(--text-lg-size)] leading-[1.7] mb-[var(--space-2x)] max-w-[42rem] mx-auto">
              {content?.cta_description || defaultDesc}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-[var(--space-0-75x)]">
              <a
                href="tel:+4915115539416"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
              >
                {t("cta.phone")}
              </a>
              <a
                href="mailto:info@taoyin-zentrum.de?subject=Neue%20Anfrage%20Taoyin%20Zentrum"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
              >
                {t("cta.email")}
              </a>
              <a
                href="https://wa.me/4915115539416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
              >
                {t("cta.whatsapp")}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
