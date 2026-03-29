import { Link } from "react-router";
import { useTranslation, useLangLink } from "../../hooks/useTranslation";
import { ScrollReveal } from "../../lib/animations";

interface PersoenlichesAngebotProps {
  content?: {
    personal_title?: string;
    personal_features?: any[];
    personal_button_text?: string;
    personal_button_link?: any;
  };
}

export function PersoenlichesAngebot({ content }: PersoenlichesAngebotProps) {
  const { t } = useTranslation();
  const ll = useLangLink();
  const items = [t("personal.f1"), t("personal.f2"), t("personal.f3")];
  // Extract text from features if they're objects from Storyblok, or parse flat string
  const rawFeatures = content?.personal_features;
  const features = Array.isArray(rawFeatures)
    ? rawFeatures.map(f => typeof f === 'string' ? f : f.text)
    : typeof rawFeatures === 'string'
      ? rawFeatures.split('\n').filter(Boolean)
      : items;
  
  return (
    <section className="w-full bg-[var(--wf-neutral-primary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--secondary)]/[0.06] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-md)] lg:gap-[var(--gap-lg)] items-start">
          <h2>
            {content?.personal_title || t("personal.title")}
          </h2>
          <div>
            <div className="flex flex-col gap-0">
              {features.map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-3 py-4">
                    <ArrowIcon />
                    <p className="text-[14px] text-foreground/70 leading-relaxed">
                      {item}
                    </p>
                  </div>
                  {i < features.length - 1 && <div className="h-px bg-border" />}
                </div>
              ))}
            </div>
            <div className="mt-[var(--space-2x)]">
              <Link
                to={ll(content?.personal_button_link?.cached_url || "/kontakt")}
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all"
              >
                {content?.personal_button_text || t("personal.btn")}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 mt-1"
    >
      <path
        d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}