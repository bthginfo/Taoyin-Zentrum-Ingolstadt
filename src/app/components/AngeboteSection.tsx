import { Check } from "lucide-react";

interface PricingCard {
  price: string;
  priceNote: string;
  title: string;
  description: string;
  features: string[];
  phone: string;
  email: string;
  wide?: boolean;
}

const cards: PricingCard[] = [
  {
    price: "280 €",
    priceNote: "(3,5 - 4 Std.)",
    title: "Tao Basis (Einführung)",
    description:
      "„TaoBasis – Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.",
    features: [
      "Tao Grundlagen",
      "Einsteigerkurs Qi Gong",
      "Grundlagen der Chi Nei Tsang Massage",
    ],
    phone: "+4915115539416",
    email: "info@taoyin-zentrum.de",
  },
  {
    price: "150 €",
    priceNote: "(Zehnerkarte)",
    title: "Medizinisches Qi Gong",
    description:
      "Dreimal pro Woche treffen wir uns zur gemeinsamen Übungsstunde. Regelmäßiges Qi Gong wirkt wie Medizin für Körper und Geist.",
    features: [
      "Stärkung des Immunsystems",
      "Verbesserung von Haltung und Beweglichkeit",
      "Reduzierung von Stress, Müdigkeit und Schmerzen",
      "mehr Energie im Alltag",
    ],
    phone: "+4915115539416",
    email: "info@taoyin-zentrum.de",
  },
  {
    price: "95 €",
    priceNote: "(Einführungspreis)",
    title: "Chi Nei Tsang Behandlung",
    description:
      "Chi Nei Tsang ist eine taoistische Massagekunst, die die inneren Organe harmonisiert und den Energiefluss (Qi) im Körper aktiviert.",
    features: [
      "Blockaden in den Meridianen lösen",
      "Schmerzen und Verspannungen lindern",
      "Ihre Selbstheilungskräfte aktivieren",
      "Körper, Geist und Emotionen ins Gleichgewicht bringen",
    ],
    phone: "+4915115539416",
    email: "info@taoyin-zentrum.de",
  },
  {
    price: "5.500€",
    priceNote: "(Jahresausbildung mit offizieller Zertifizierung)",
    title: "Chi Nei Tsang Ausbildung",
    description:
      "Lernen Sie die Kunst der Selbstheilung durch Berührung.\nIn der Ausbildung erfahren Sie Schritt für Schritt.",
    features: [
      "wie Sie Qi-Blockaden erkennen und lösen",
      "die Meridiane öffnen und Ihre Lebensenergie stärken",
      "mit gezielten Massagegriffen Körper und Seele in Balance bringen",
      "Techniken, die Sie für sich selbst und andere anwenden können",
    ],
    phone: "+4915115539416",
    email: "info@taoyin-zentrum.de",
    wide: true,
  },
];

interface AngeboteSectionProps {
  content?: {
    angebote_title?: string;
    angebote_cards?: any[];
  };
}

export function AngeboteSection({ content }: AngeboteSectionProps) {
  const smallCards = cards.filter((c) => !c.wide);
  const wideCard = cards.find((c) => c.wide);

  return (
    <section id="Angebote" className="w-full bg-[var(--wf-neutral-secondary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
      <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-[var(--gap-lg)]">
          <h2>Meine Angebote für dich</h2>
          <p className="text-[var(--text-lg-size)] text-current/60 leading-[1.6] max-w-[40rem] mx-auto">Individuell abgestimmt auf deine Bedürfnisse – finde das passende Angebot für deinen Weg zu mehr Balance und Wohlbefinden.</p>
        </div>

        {/* 3 small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--gap-sm)] mb-[var(--gap-sm)]">
          {smallCards.map((card) => (
            <SmallCard key={card.title} card={card} />
          ))}
        </div>

        {/* Wide card */}
        {wideCard && <WideCard card={wideCard} />}
      </div>
    </section>
  );
}

function SmallCard({ card }: { card: PricingCard }) {
  return (
    <div className="flex flex-col">
      {/* Card with border */}
      <div className="shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] rounded-[var(--radius-card)] p-[var(--card-padding-mobile)] md:p-[var(--card-padding-tablet)] lg:p-[var(--card-padding)] flex flex-col bg-white/40">
        {/* Price */}
        <div className="mb-1">
          <span className="text-[2rem] text-primary font-medium">{card.price}</span>
        </div>
        <span className="text-[13px] text-primary/60 mb-4">{card.priceNote}</span>

        {/* Divider */}
        <div className="h-px bg-primary/15 mb-4" />

        {/* Title & Description */}
        <h3 className="text-[18px] mb-2">{card.title}</h3>
        <p className="text-[14px] text-foreground/60 leading-relaxed mb-6 flex-1">
          {card.description}
        </p>

        {/* Buttons */}
        <div className="space-y-2">
          <a
            href={`tel:${card.phone}`}
            className="block w-full text-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
          >
            Anfragen per Telefon
          </a>
          <a
            href={`mailto:${card.email}?subject=Neue%20Anfrage%20Taoyin%20Zentrum`}
            className="block w-full text-center bg-transparent text-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] hover:shadow-[inset_0_0_0_1px_var(--wf-inverse-a40)] transition-all min-h-[48px]"
          >
            Anfragen per Mail
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
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-end gap-[var(--space-0-75x)]">
            <a
              href={`tel:${card.phone}`}
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all min-h-[48px]"
            >
              Anfragen per Telefon
            </a>
            <a
              href={`mailto:${card.email}?subject=Neue%20Anfrage%20Taoyin%20Zentrum`}
              className="inline-flex items-center justify-center bg-transparent text-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] hover:shadow-[inset_0_0_0_1px_var(--wf-inverse-a40)] transition-all min-h-[48px]"
            >
              Anfragen per Mail
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