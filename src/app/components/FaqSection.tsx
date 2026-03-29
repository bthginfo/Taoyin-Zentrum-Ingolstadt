import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

interface FaqSectionProps {
  content?: {
    faq_title?: string;
    faq_subtitle?: string;
    faq_items?: Array<{
      _uid: string;
      question: string;
      answer: string;
    }>;
  };
}

export function FaqSection({ content }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const fallbackFaqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
  ];
  
  const title = content?.faq_title || t("faq.title");
  const subtitle = content?.faq_subtitle || t("faq.subtitle");
  const faqs = Array.isArray(content?.faq_items) ? content.faq_items : fallbackFaqs;

  return (
    <section className="w-full bg-[var(--wf-neutral-secondary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[var(--primary)]/[0.05] blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      {/* container.is-small like Webflow */}
      <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
        {/* header.is-align-center */}
        <div className="text-center mb-[var(--gap-md)]">
          <h2 className="mb-[var(--space-1x)]">
            {title}
          </h2>
          <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60">
            {subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={faq._uid || i} className="border-b border-current/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-[var(--space-1-25x)] text-left group cursor-pointer"
              >
                <span className="text-[1.125rem] leading-[1.6] text-current/80 group-hover:text-current transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-current/40 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-[var(--space-1x)]" : "max-h-0"
                }`}
              >
                <p className="text-[1rem] text-current/60 leading-[1.8]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}