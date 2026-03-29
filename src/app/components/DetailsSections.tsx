import { ContentSection } from "./ContentSection";
import { useTranslation, useLangLink } from "../../hooks/useTranslation";

const images = [
  "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg",
  "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53713513520b6bbe5b786_Estela-byaylin-33-min.jpg",
  "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53718065ce01562873ef1_Estela-byaylin-43.jpg",
  "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371f98928ab373b92ff9_Estela-byaylin-59-min.jpg",
  "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537205b0c2bd091d7b6a5_Estela-byaylin-58-min.jpg",
  "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif",
  "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370f3e66ed943079d4c6_Estela-byaylin-26-min.jpg",
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
  const { t } = useTranslation();
  const ll = useLangLink();

  const fallbackSections = [
    {
      eyebrow: t("details.s1.eyebrow"), heading: t("details.s1.heading"), paragraph: t("details.s1.text"),
      links: [{ label: t("details.s1.btn1"), href: "/taoyin" }, { label: t("details.s1.btn2"), href: "#Angebote" }],
      imageSrc: images[0], imageAlt: t("details.s1.heading"), imageLeft: false,
    },
    {
      eyebrow: t("details.s2.eyebrow"), heading: t("details.s2.heading"), paragraph: t("details.s2.text"),
      links: [{ label: t("details.s2.btn1"), href: "/qi-gong" }, { label: t("details.s2.btn2"), href: "#Angebote" }],
      imageSrc: images[1], imageAlt: t("details.s2.heading"), imageLeft: true,
    },
    {
      eyebrow: t("details.s3.eyebrow"), heading: t("details.s3.heading"), paragraph: t("details.s3.text"),
      links: [{ label: t("details.s3.btn1"), href: "#Angebote" }],
      imageSrc: images[2], imageAlt: t("details.s3.heading"), imageLeft: false,
    },
    {
      eyebrow: t("details.s4.eyebrow"), heading: t("details.s4.heading"), paragraph: t("details.s4.text"),
      links: [{ label: t("details.s4.btn1"), href: "/chi-nei-tsang" }, { label: t("details.s4.btn2"), href: "#Angebote" }],
      imageSrc: images[3], imageAlt: t("details.s4.heading"), imageLeft: true,
    },
    {
      eyebrow: t("details.s5.eyebrow"), heading: t("details.s5.heading"), paragraph: t("details.s5.text"),
      links: [{ label: t("details.s5.btn1"), href: "#Angebote" }],
      imageSrc: images[4], imageAlt: t("details.s5.heading"), imageLeft: false,
    },
    {
      eyebrow: t("details.s6.eyebrow"), heading: t("details.s6.heading"), paragraph: t("details.s6.text"),
      links: [{ label: t("details.s6.btn1"), href: "/psychotherapie" }],
      imageSrc: images[5], imageAlt: t("details.s6.heading"), imageLeft: true,
    },
    {
      eyebrow: t("details.s7.eyebrow"), heading: t("details.s7.heading"), paragraph: t("details.s7.text"),
      links: [{ label: t("details.s7.btn1"), href: "/about" }],
      imageSrc: images[6], imageAlt: t("details.s7.heading"), imageLeft: false,
    },
  ];

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

  // Add lang prefix to links
  const prefixedSections = sections.map(s => ({
    ...s,
    links: s.links.map(l => ({ ...l, href: l.href.startsWith('#') ? l.href : ll(l.href) })),
  }));

  return (
    <section id="Details" className="w-full bg-background py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
      <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
        <div className="flex flex-col gap-[var(--gap-xl)] lg:gap-[var(--gap-xxl)]">
          {prefixedSections.map((section, index) => (
            <ContentSection key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}