import { Link } from "react-router";
import { useTranslation, useLangLink } from "../../hooks/useTranslation";
import { ScrollReveal } from "../../lib/animations";

interface PsychotherapieSectionProps {
  content?: {
    psycho_title?: string;
    psycho_description?: string;
    psycho_image?: { filename: string; alt?: string };
    psycho_button_text?: string;
    psycho_button_link?: { cached_url?: string };
  };
}

export function PsychotherapieSection({ content }: PsychotherapieSectionProps) {
  const { t } = useTranslation();
  const ll = useLangLink();
  const defaultTitle = t("psycho.title");
  const defaultDesc = t("psycho.desc");
  const defaultImage = "https://cdn.prod.website-files.com/image-generation-assets/c79b83fd-d5a5-46a1-8aa0-b49f43616c5e.avif";
  const defaultButtonText = t("psycho.btn");
  
  return (
    <section className="w-full bg-primary text-primary-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)]">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-primary-foreground mb-5">{content?.psycho_title || defaultTitle}</h2>
            <p className="text-current/60 text-[16px] leading-relaxed mb-8">
              {content?.psycho_description || defaultDesc}
            </p>
            <Link
              to={ll(content?.psycho_button_link?.cached_url || "/psychotherapie")}
              className="inline-flex items-center justify-center shadow-[inset_0_0_0_1px_var(--wf-primary-a60)] text-primary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:shadow-[inset_0_0_0_1px_rgba(249,246,229,0.4)] transition-all"
            >
              {content?.psycho_button_text || defaultButtonText}
            </Link>
          </div>
          <div className="lg:col-span-2">
            <img
              src={content?.psycho_image?.filename || defaultImage}
              alt={content?.psycho_image?.alt || "Psychotherapie"}
              className="w-full h-auto rounded-[var(--radius-image)] object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}