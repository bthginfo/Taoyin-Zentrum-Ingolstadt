import { useTranslation } from "../../hooks/useTranslation";

const newsItems = [
  {
    image:
      "https://cdn.prod.website-files.com/image-generation-assets/dd5f0353-4356-46b0-949e-a67e9682d518.avif",
    alt: "Community gathering",
    title: "Hier steht ein Titel zu einer News",
    desc: "Hier steht eine kurze Beschreibung zu einer Neuigkeit",
  },
  {
    image:
      "https://cdn.prod.website-files.com/image-generation-assets/d81cdbc7-040d-4f5d-9227-99dc6fb3b8aa.avif",
    alt: "Deep tissue massage",
    title: "Hier steht ein Titel zu einer News",
    desc: "Hier steht eine kurze Beschreibung zu einer Neuigkeit",
  },
  {
    image:
      "https://cdn.prod.website-files.com/image-generation-assets/fd1fd4c8-51ee-44ce-9df4-49fc82e0eba3.avif",
    alt: "Kursmaterialien",
    title: "Hier steht ein Titel zu einer News",
    desc: "Hier steht eine kurze Beschreibung zu einer Neuigkeit",
  },
];

function ArrowIcon() {
  return (
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
}

export function NewsSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-background py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] hidden">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)]">
        <div className="mb-[var(--gap-md)]">
          <p className="text-[var(--eyebrow-size)] tracking-[var(--eyebrow-letter-spacing)] uppercase text-current/60 mb-[var(--eyebrow-margin-bottom)] leading-[var(--eyebrow-line-height)]">
            {t("news.eyebrow")}
          </p>
          <h2 className="mb-[var(--space-1x)]">
            {t("news.title")}
          </h2>
          <p className="text-[var(--text-lg-size)] text-current/70 leading-[1.6] max-w-[var(--container-sm-width)]">
            {t("news.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--gap-sm)]">
          {newsItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group block"
            >
              <div className="aspect-[3/2] rounded-[var(--radius-image)] overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[18px] mb-2 group-hover:text-primary/70 transition-colors">
                {item.title}
              </h3>
              <p className="text-[14px] text-foreground/60 mb-3">{item.desc}</p>
              <div className="inline-flex items-center gap-2 text-[14px] text-secondary group-hover:opacity-80 transition-opacity">
                {t("news.more")}
                <span className="group-hover:translate-x-1 transition-transform">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}