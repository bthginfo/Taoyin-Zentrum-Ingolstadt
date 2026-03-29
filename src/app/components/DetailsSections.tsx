import { ContentSection } from "./ContentSection";

const fallbackSections = [
  {
    eyebrow: "Ganzheitlich. Achtsam. Verbunden.",
    heading: "Tao Basis",
    paragraph:
      '\u201ETaoBasis \u2013 Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.',
    links: [
      { label: "Mehr erfahren \u00fcber Tao Yin", href: "/taoyin" },
      { label: "Jetzt Angebote entdecken", href: "#Angebote" },
    ],
    imageSrc:
      "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg",
    imageAlt: "Estela in Meditation \u2013 Tao Basis",
    imageLeft: false,
  },
  {
    eyebrow: "Tao Yin & Qigong",
    heading: "Einf\u00fchrung in Qi Gong",
    paragraph:
      '\u201EQi Gong Kurs f\u00fcr Anf\u00e4nger: Lernen Sie sanfte \u00dcbungen, Atemtechniken & Energiearbeit f\u00fcr Vitalit\u00e4t, Entspannung & mehr Lebensbalance.\u201c',
    links: [
      { label: "Mehr erfahren \u00fcber Qi Gong", href: "/qi-gong" },
      { label: "Kurse ansehen", href: "#Angebote" },
    ],
    imageSrc:
      "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53713513520b6bbe5b786_Estela-byaylin-33-min.jpg",
    imageAlt: "Estela \u2013 Qi Gong Praxis",
    imageLeft: true,
  },
  {
    eyebrow: "Tao Yin & Qigong",
    heading: "Medizinisches Qi Gong",
    paragraph:
      '\u201EMedizinisches Qi Gong \u2013 dreimal pro Woche: st\u00e4rken Sie Ihr Immunsystem, bauen Sie Stress ab & finden Sie Energie f\u00fcr K\u00f6rper & Geist.\u201c',
    links: [{ label: "Kurse ansehen", href: "#Angebote" }],
    imageSrc:
      "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53718065ce01562873ef1_Estela-byaylin-43.jpg",
    imageAlt: "Medizinisches Qi Gong \u00dcbung",
    imageLeft: false,
  },
  {
    eyebrow: "Chi Nei Tsang",
    heading: "Chi Nei Tsang Behandlung",
    paragraph:
      '\u201EChi Nei Tsang Bauchmassage: l\u00f6sen Sie Blockaden, aktivieren Sie Selbstheilung & erleben Sie tiefe Entspannung f\u00fcr K\u00f6rper & Seele.\u201c',
    links: [
      { label: "Mehr erfahren \u00fcber Chi Nei Tsang", href: "/chi-nei-tsang" },
      { label: "Jetzt Behandlung buchen", href: "#Angebote" },
    ],
    imageSrc:
      "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371f98928ab373b92ff9_Estela-byaylin-59-min.jpg",
    imageAlt: "Chi Nei Tsang Behandlung",
    imageLeft: true,
  },
  {
    eyebrow: "Chi Nei Tsang",
    heading: "Chi Nei Tsang Ausbildung",
    paragraph:
      '\u201EChi Nei Tsang Ausbildung: lernen Sie die taoistische Bauchmassage & Selbstbehandlung, kombiniert mit Qi Gong f\u00fcr maximale Heilwirkung.\u201c',
    links: [{ label: "Ausbildung buchen", href: "#Angebote" }],
    imageSrc:
      "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537205b0c2bd091d7b6a5_Estela-byaylin-58-min.jpg",
    imageAlt: "Chi Nei Tsang Ausbildung",
    imageLeft: false,
  },
  {
    eyebrow: "Ich berate und unterst\u00fctze Sie gerne",
    heading: "Praxis f\u00fcr ganzheitliche Psychotherapie",
    paragraph:
      "Lernen Sie die Kraft der Integration von K\u00f6rper, Geist und Seele f\u00fcr Sich zu nutzen.",
    links: [{ label: "zur Praxis", href: "/psychotherapie" }],
    imageSrc:
      "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif",
    imageAlt: "Praxis f\u00fcr Psychotherapie",
    imageLeft: true,
  },
  {
    eyebrow: "Estela Fuchs",
    heading: "Meine Geschichte",
    paragraph:
      "Nach einer langen Pause kehre ich mit neuer Kraft und Dankbarkeit zur\u00fcck. Ein schwerer Bruch am Fu\u00dfgelenk hat mich gezwungen, innezuhalten \u2013 und zugleich gezeigt, wie heilsam Qi Gong und taoistische Praktiken wirklich sind.\n\nSie haben mir geholfen, schneller zu regenerieren, wieder fest auf den Beinen zu stehen und tiefer in meine Praxis einzutauchen. Seit \u00fcber 30 Jahren \u00fcbe ich den Weg des Taoismus \u2013 heute mit noch mehr \u00dcberzeugung und dem Wunsch, diese Sch\u00e4tze mit anderen zu teilen.\n\nMeine Angebote sind mehr als Kurse \u2013 sie sind eine Einladung, die eigene Lebenskraft neu zu entdecken.",
    links: [{ label: "Mehr erfahren", href: "/about" }],
    imageSrc:
      "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370f3e66ed943079d4c6_Estela-byaylin-26-min.jpg",
    imageAlt: "Estela Fuchs \u2013 Meine Geschichte",
    imageLeft: false,
  },
];

interface DetailsSectionsProps {
  content?: {
    details_sections?: Array<{
      _uid: string;
      eyebrow?: string;
      title: string;
      description: string;
      image?: { filename: string; alt?: string };
      button_text_1?: string;
      button_link_1?: { cached_url?: string };
      button_text_2?: string;
      button_link_2?: { cached_url?: string };
      image_left?: boolean;
    }>;
  };
}

export function DetailsSections({ content }: DetailsSectionsProps) {
  // Map Storyblok content to ContentSection format
  const sections = (Array.isArray(content?.details_sections) ? content.details_sections.map(section => ({
    eyebrow: section.eyebrow || "",
    heading: section.title,
    paragraph: section.description,
    links: [
      ...(section.button_text_1 ? [{ 
        label: section.button_text_1, 
        href: section.button_link_1?.cached_url || "#" 
      }] : []),
      ...(section.button_text_2 ? [{ 
        label: section.button_text_2, 
        href: section.button_link_2?.cached_url || "#" 
      }] : []),
    ],
    imageSrc: section.image?.filename || "",
    imageAlt: section.image?.alt || section.title,
    imageLeft: section.image_left || false,
  })) : null) || fallbackSections;

  return (
    <section id="Details" className="w-full bg-background py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
      <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
        <div className="flex flex-col gap-[var(--gap-xl)] lg:gap-[var(--gap-xxl)]">
          {sections.map((section, index) => (
            <ContentSection key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}