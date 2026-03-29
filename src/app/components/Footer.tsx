import { Link } from "react-router";
import { useTranslation, useLangLink } from "../../hooks/useTranslation";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8,1.441c2.136,0,2.389.009,3.233.047a4.419,4.419,0,0,1,1.485.276,2.472,2.472,0,0,1,.92.6,2.472,2.472,0,0,1,.6.92,4.419,4.419,0,0,1,.276,1.485c.038.844.047,1.1.047,3.233s-.009,2.389-.047,3.233a4.419,4.419,0,0,1-.276,1.485,2.644,2.644,0,0,1-1.518,1.518,4.419,4.419,0,0,1-1.485.276c-.844.038-1.1.047-3.233.047s-2.389-.009-3.233-.047a4.419,4.419,0,0,1-1.485-.276,2.472,2.472,0,0,1-.92-.6,2.472,2.472,0,0,1-.6-.92,4.419,4.419,0,0,1-.276-1.485c-.038-.844-.047-1.1-.047-3.233s.009-2.389.047-3.233a4.419,4.419,0,0,1,.276-1.485,2.472,2.472,0,0,1,.6-.92,2.472,2.472,0,0,1,.92-.6,4.419,4.419,0,0,1,1.485-.276c.844-.038,1.1-.047,3.233-.047M8,0C5.827,0,5.555.009,4.7.048A5.868,5.868,0,0,0,2.76.42a3.908,3.908,0,0,0-1.417.923A3.908,3.908,0,0,0,.42,2.76,5.868,5.868,0,0,0,.048,4.7C.009,5.555,0,5.827,0,8s.009,2.445.048,3.3A5.868,5.868,0,0,0,.42,13.24a3.908,3.908,0,0,0,.923,1.417,3.908,3.908,0,0,0,1.417.923,5.868,5.868,0,0,0,1.942.372C5.555,15.991,5.827,16,8,16s2.445-.009,3.3-.048a5.868,5.868,0,0,0,1.942-.372,4.094,4.094,0,0,0,2.34-2.34,5.868,5.868,0,0,0,.372-1.942c.039-.853.048-1.125.048-3.3s-.009-2.445-.048-3.3A5.868,5.868,0,0,0,15.58,2.76a3.908,3.908,0,0,0-.923-1.417A3.908,3.908,0,0,0,13.24.42,5.868,5.868,0,0,0,11.3.048C10.445.009,10.173,0,8,0Z" />
      <path d="M8,3.892A4.108,4.108,0,1,0,12.108,8,4.108,4.108,0,0,0,8,3.892Zm0,6.775A2.667,2.667,0,1,1,10.667,8,2.667,2.667,0,0,1,8,10.667Z" />
      <circle cx="12.27" cy="3.73" r="0.96" />
    </svg>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const ll = useLangLink();

  const angeboteLinks = [
    { label: "Tao Yin", href: "/taoyin" },
    { label: "Qigong", href: "/qi-gong" },
    { label: t("footer.cntMassage"), href: "/chi-nei-tsang" },
    { label: t("footer.psychotherapie"), href: "/psychotherapie" },
  ];

  const serviceLinks = [
    { label: t("footer.anfahrt"), href: "/kontakt" },
    { label: t("footer.impressum"), href: "/impressum" },
  ];

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        {/* Top: Heading + Emails */}
        <div className="mb-[var(--gap-lg)]">
          <h2 className="text-primary-foreground">
            {t("footer.heading")}
          </h2>
          <a
            href="mailto:info@taoyin-zentrum.de?subject=Neue%20Anfrage%20Taoyin%20Zentrum"
            className="block text-[var(--text-xl-size)] text-current/70 hover:text-current transition-colors mb-1"
            style={{ fontFamily: "'Petrona', Georgia, serif", fontStyle: "italic" }}
          >
            info@taoyin-zentrum.de
          </a>
          <a
            href="mailto:info@estela-fuchs.com?subject=Neue%20Therapieanfrage"
            className="block text-[var(--text-xl-size)] text-current/70 hover:text-current transition-colors"
            style={{ fontFamily: "'Petrona', Georgia, serif", fontStyle: "italic" }}
          >
            info@estela-fuchs.com
          </a>
        </div>

        {/* Middle: Description + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-lg)] mb-[var(--gap-lg)]">
          <p className="text-current/50 text-[1rem] leading-relaxed">
            {t("footer.tagline")}
          </p>
          <div className="grid grid-cols-2 gap-[var(--gap-lg)]">
            <div>
              <h3 className="text-[var(--eyebrow-size)] tracking-[0.1em] uppercase text-current/40 mb-[var(--space-1x)]">
                {t("footer.angebote")}
              </h3>
              <ul className="space-y-2.5">
                {angeboteLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={ll(link.href)}
                      className="text-[1rem] text-current/60 hover:text-current transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[var(--eyebrow-size)] tracking-[0.1em] uppercase text-current/40 mb-[var(--space-1x)]">
                {t("footer.service")}
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={ll(link.href)}
                      className="text-[1rem] text-current/60 hover:text-current transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: Logo + Social */}
        <div className="border-t border-current/10 pt-[var(--space-2x)] flex items-center justify-between">
          <Link to={ll("/")}>
            <img
              src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d8b72344be05aef5a64a_tao_logo_white.png"
              alt="Taoyin Zentrum"
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </Link>
          <a
            href="https://www.instagram.com/taoyin_zentrum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current/50 hover:text-current transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
