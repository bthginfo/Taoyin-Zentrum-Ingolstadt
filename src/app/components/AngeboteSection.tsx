import { Check, MapPin, Clock } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { ScrollReveal, StaggerContainer, staggerItem, motion } from "../../lib/animations";

interface PricingCard {
  price: string;
  priceNote: string;
  title: string;
  description: string;
  features: string[];
  phone: string;
  email: string;
  wide?: boolean;
  ort?: string;
  uhrzeit?: string;
  phoneLabel: string;
  mailLabel: string;
}

interface AngeboteSectionProps {
  content?: {
    angebote_title?: string;
    angebote_cards?: any[];
  };
}

export function AngeboteSection({ content }: AngeboteSectionProps) {
  const { t } = useTranslation();

  // Use Storyblok cards if available, otherwise fall back to hardcoded translations
  const cards: PricingCard[] = content?.angebote_cards?.length
    ? content.angebote_cards.map((card: any) => ({
        price: card.price || "",
        priceNote: card.price_note || "",
        title: card.title || "",
        description: card.description || "",
        features: card.features
          ? card.features.split("\n").filter((f: string) => f.trim())
          : [],
        phone: card.phone || "+4915115539416",
        email: card.email || "info@taoyin-zentrum.de",
        wide: card.wide || false,
        ort: card.ort || undefined,
        uhrzeit: card.uhrzeit || undefined,
        phoneLabel: t("angebote.phone"),
        mailLabel: t("angebote.mail"),
      }))
    : [
        {
          price: "280 €",
          priceNote: t("angebote.c1.note"),
          title: t("angebote.c1.title"),
          description: t("angebote.c1.desc"),
          features: [t("angebote.c1.f1"), t("angebote.c1.f2"), t("angebote.c1.f3")],
          phone: "+4915115539416",
          email: "info@taoyin-zentrum.de",
          phoneLabel: t("angebote.phone"),
          mailLabel: t("angebote.mail"),
        },
        {
          price: "150 €",
          priceNote: t("angebote.c2.note"),
          title: t("angebote.c2.title"),
          description: t("angebote.c2.desc"),
          features: [t("angebote.c2.f1"), t("angebote.c2.f2"), t("angebote.c2.f3"), t("angebote.c2.f4")],
          phone: "+4915115539416",
          email: "info@taoyin-zentrum.de",
          phoneLabel: t("angebote.phone"),
          mailLabel: t("angebote.mail"),
        },
        {
          price: "95 €",
          priceNote: t("angebote.c3.note"),
          title: t("angebote.c3.title"),
          description: t("angebote.c3.desc"),
          features: [t("angebote.c3.f1"), t("angebote.c3.f2"), t("angebote.c3.f3"), t("angebote.c3.f4")],
          phone: "+4915115539416",
          email: "info@taoyin-zentrum.de",
          phoneLabel: t("angebote.phone"),
          mailLabel: t("angebote.mail"),
        },
        {
          price: "5.500€",
          priceNote: t("angebote.c4.note"),
          title: t("angebote.c4.title"),
          description: t("angebote.c4.desc"),
          features: [t("angebote.c4.f1"), t("angebote.c4.f2"), t("angebote.c4.f3"), t("angebote.c4.f4")],
          phone: "+4915115539416",
          email: "info@taoyin-zentrum.de",
          wide: true,
          phoneLabel: t("angebote.phone"),
          mailLabel: t("angebote.mail"),
        },
      ];

  const sectionTitle = content?.angebote_title || t("angebote.title");

  const smallCards = cards.filter((c) => !c.wide);
  const wideCard = cards.find((c) => c.wide);

  return (
    <section id="Angebote" className="w-full bg-[var(--wf-neutral-secondary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
      <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
        <ScrollReveal className="text-center mb-[var(--gap-lg)]">
          <h2>{sectionTitle}</h2>
          <p className="text-[var(--text-lg-size)] text-current/60 leading-[1.6] max-w-[40rem] mx-auto">{t("angebote.subtitle")}</p>
        </ScrollReveal>

        {/* 3 small cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--gap-sm)] mb-[var(--gap-sm)]">
          {smallCards.map((card) => (
            <motion.div key={card.title} variants={staggerItem}>
              <SmallCard card={card} />
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Wide card */}
        {wideCard && <ScrollReveal><WideCard card={wideCard} /></ScrollReveal>}
      </div>
    </section>
  );
}

function SmallCard({ card }: { card: PricingCard }) {
  return (
    <div className="flex flex-col">
      {/* Card with border */}
      <div className="shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] rounded-[var(--radius-card)] p-[var(--card-padding-mobile)] md:p-[var(--card-padding-tablet)] lg:p-[var(--card-padding)] flex flex-col bg-white/40 hover:shadow-xl hover:-translate-y-1.5 hover:shadow-secondary/10 transition-all duration-300">
        {/* Price */}
        <div className="mb-1">
          <span className="text-[2rem] text-primary font-medium">{card.price}</span>
        </div>
        <span className="text-[13px] text-primary/60 mb-4">{card.priceNote}</span>

        {/* Divider */}
        <div className="h-px bg-primary/15 mb-4" />

        {/* Title & Description */}
        <h3 className="text-[18px] mb-2">{card.title}</h3>
        <p className="text-[14px] text-foreground/60 leading-relaxed mb-4 flex-1">
          {card.description}
        </p>

        {/* Optional Ort & Uhrzeit */}
        {(card.ort || card.uhrzeit) && (
          <div className="flex flex-col gap-1.5 mb-4 text-[13px] text-foreground/50">
            {card.ort && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{card.ort}</span>
              </div>
            )}
            {card.uhrzeit && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{card.uhrzeit}</span>
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-2">
          <a
            href={`tel:${card.phone}`}
            className="block w-full text-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
          >
            {card.phoneLabel}
          </a>
          <a
            href={`mailto:${card.email}?subject=Neue%20Anfrage%20Taoyin%20Zentrum`}
            className="block w-full text-center bg-transparent text-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] hover:shadow-[inset_0_0_0_1px_var(--wf-inverse-a40)] transition-all min-h-[48px]"
          >
            {card.mailLabel}
          </a>
        </div>
      </div>

      {/* Features below card */}
      <ul className="mt-4 space-y-2 px-1">
        {card.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-[14px] text-foreground/70">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WideCard({ card }: { card: PricingCard }) {
  return (
    <div className="flex flex-col">
      {/* Card with border */}
      <div className="shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] rounded-[var(--radius-card)] p-[var(--card-padding-mobile)] md:p-[var(--card-padding-tablet)] lg:p-[var(--card-padding)] bg-white/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gap-sm)] items-center">
          {/* Left: Price, Title, Description */}
          <div>
            <div className="mb-1">
              <span className="text-[2rem] text-primary font-medium">{card.price}</span>
            </div>
            <span className="text-[13px] text-primary/60 block mb-4">
              {card.priceNote}
            </span>
            <div className="h-px bg-primary/15 mb-4" />
            <h3 className="text-[18px] mb-2">{card.title}</h3>
            <p className="text-[14px] text-foreground/60 leading-relaxed whitespace-pre-line">
              {card.description}
            </p>
            {/* Optional Ort & Uhrzeit */}
            {(card.ort || card.uhrzeit) && (
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 text-[13px] text-foreground/50">
                {card.ort && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{card.ort}</span>
                  </div>
                )}
                {card.uhrzeit && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{card.uhrzeit}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-end gap-[var(--space-0-75x)]">
            <a
              href={`tel:${card.phone}`}
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
            >
              {card.phoneLabel}
            </a>
            <a
              href={`mailto:${card.email}?subject=Neue%20Anfrage%20Taoyin%20Zentrum`}
              className="inline-flex items-center justify-center bg-transparent text-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] hover:shadow-[inset_0_0_0_1px_var(--wf-inverse-a40)] transition-all min-h-[48px]"
            >
              {card.mailLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Features below card in grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 px-1">
        {card.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-[14px] text-foreground/70">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}