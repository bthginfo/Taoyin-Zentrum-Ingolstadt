import { Link } from "react-router";
import { ScrollReveal } from "../../lib/animations";

interface ContentLink {
  label: string;
  href: string;
}

interface ContentSectionProps {
  eyebrow: string;
  heading: string;
  paragraph: string;
  links: ContentLink[];
  imageSrc: string;
  imageAlt: string;
  /** If true, image is on the left. Default: image on right */
  imageLeft?: boolean;
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
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

export function ContentSection({
  eyebrow,
  heading,
  paragraph,
  links,
  imageSrc,
  imageAlt,
  imageLeft = false,
}: ContentSectionProps) {
  const textContent = (
    <div className="flex flex-col justify-center">
      {/* Eyebrow */}
      <p className="text-[var(--eyebrow-size)] tracking-[var(--eyebrow-letter-spacing)] uppercase text-current/60 mb-[var(--eyebrow-margin-bottom)] leading-[var(--eyebrow-line-height)]">
        {eyebrow}
      </p>
      {/* Heading h2 */}
      <h2>{heading}</h2>
      {/* Paragraph */}
      <p className="text-[var(--text-lg-size)] leading-[1.7] text-current/60 mb-[var(--space-1-5x)] whitespace-pre-line">
        {paragraph}
      </p>
      {/* Text-button links */}
      <div className="flex flex-col gap-[var(--space-1x)]">
        {links.map((link) => (
          <div key={link.label}>
            <Link
              to={link.href}
              className="group inline-flex items-center gap-[0.5em] text-[1rem] font-medium text-[var(--wf-text-on-accent)] hover:gap-[0.7em] hover:text-secondary transition-all duration-200"
            >
              <span>{link.label}</span>
              <span className="inline-flex w-[1em] h-[1em]">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <div className="w-full overflow-hidden rounded-[var(--radius-image)]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto object-contain hover:scale-[1.03] transition-transform duration-700"
        loading="lazy"
      />
    </div>
  );

  return (
    <ScrollReveal>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-md)] lg:gap-[var(--gap-lg)] items-center">
      {imageLeft ? (
        <>
          <div className="order-1">{imageContent}</div>
          <div className="order-2">{textContent}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{textContent}</div>
          <div className="order-1 lg:order-2">{imageContent}</div>
        </>
      )}
    </div>
    </ScrollReveal>
  );
}