import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";

// Real logo from CDN
const logoImg = "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d6bafdd0696561be5520_tao_logo.png";

const angeboteItems = [
  {
    category: "Tao Yin & Qigong",
    items: [
      { label: "Tao Yin", desc: "Sanfte Bewegung, tiefe Entspannung.", href: "/taoyin" },
      { label: "Qigong", desc: "Lebensenergie st\u00e4rken, Balance finden.", href: "/qi-gong" },
      { label: "Chi Nei Tsang", desc: "Bauchmassage f\u00fcr innere Harmonie.", href: "/chi-nei-tsang" },
    ],
  },
  {
    category: "Ganzheitliche Psychotherapie",
    items: [
      { label: "Zur Praxis", desc: "Ganzheitliche Praxis f\u00fcr Psychotherapie", href: "/psychotherapie" },
      { label: "Therapien", desc: "Meine verschiedenen Therapie Angebote", href: "/therapien" },
      { label: "Behandlung", desc: "Welche M\u00f6glichkeiten gibt es", href: "/psychotherapie/ziele" },
    ],
  },
];

const DocIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
    <path d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z" strokeLinejoin="round" />
  </svg>
);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [angeboteOpen, setAngeboteOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileAngeboteOpen, setMobileAngeboteOpen] = useState(false);
  const location = useLocation();
  const angeboteRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on route change
  useEffect(() => {
    setAngeboteOpen(false);
    setLangOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="w-full bg-[var(--background-secondary)] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)] py-[var(--space-0-75x)] flex items-center rounded-b-[var(--radius-card)]">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center h-10 mr-[var(--gap-sm)]">
          <img src={logoImg} alt="Taoyin Zentrum" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav - left aligned */}
        <div className="hidden lg:flex items-center gap-[var(--gap-sm)] flex-1">
          {/* Angebote Dropdown */}
          <div
            ref={angeboteRef}
            className="relative"
            onMouseEnter={() => setAngeboteOpen(true)}
            onMouseLeave={() => setAngeboteOpen(false)}
          >
            <button className="flex items-center gap-[var(--gap-xxs)] py-2 px-3 rounded-[var(--radius-button)] text-[1rem] text-inherit hover:opacity-70 transition-opacity">
              Angebote
              <svg className={`w-3 h-3 transition-transform ${angeboteOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            {angeboteOpen && (
              <div className="absolute top-full left-0 pt-2 z-50" style={{ left: `-${angeboteRef.current?.getBoundingClientRect().left ?? 0}px`, width: '100vw' }}>
                <div className="max-w-[1280px] mx-auto px-[var(--container-padding)]">
                  <div className="bg-background rounded-[var(--radius-card)] shadow-xl border border-[var(--wf-inverse-a20)] p-[var(--space-3x)] grid grid-cols-[1fr_1fr_minmax(220px,auto)] gap-[var(--gap-md)]">
                    {/* Left two columns */}
                    {angeboteItems.map((group) => (
                      <div key={group.category}>
                        <p className="text-[var(--eyebrow-size)] tracking-[var(--eyebrow-letter-spacing)] uppercase text-current/60 mb-[var(--eyebrow-margin-bottom)]">
                          {group.category}
                        </p>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-start gap-3 p-2.5 rounded-[var(--radius-button)] hover:bg-white/60 transition-colors group"
                            >
                              <div className="text-current/50 mt-0.5 group-hover:text-current transition-colors">
                                <DocIcon />
                              </div>
                              <div>
                                <div className="text-[1rem]"><strong>{item.label}</strong></div>
                                <div className="text-[var(--text-sm-size)] text-current/60">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* Right: Individuelle Anfragen card */}
                    <div className="bg-primary text-primary-foreground rounded-[var(--radius-card)] p-[var(--card-padding)] flex flex-col justify-between">
                      <div>
                        <div className="text-[var(--h3-size)]">Individuelle Anfragen</div>
                        <p className="text-[var(--text-sm-size)] text-current/70 leading-relaxed">
                          Das passende Angebot f&uuml;r dich, individuell abgestimmt auf deine Bed&uuml;rfnisse
                        </p>
                      </div>
                      <div className="mt-auto">
                        <div className="mt-[var(--space-2x)]">
                          <Link to="/kontakt" className="inline-flex items-center gap-[0.5em] text-[1rem] font-medium text-current/80 hover:gap-[0.7em] hover:text-current transition-all">
                            Jetzt anfragen
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`py-2 px-3 rounded-[var(--radius-button)] text-[1rem] transition-opacity ${
              location.pathname === "/about" ? "text-inherit" : "text-inherit hover:opacity-70"
            }`}
          >
            &Uuml;ber mich
          </Link>

          <Link
            to="/kontakt"
            className={`py-2 px-3 rounded-[var(--radius-button)] text-[1rem] transition-opacity ${
              location.pathname === "/kontakt" ? "text-inherit" : "text-inherit hover:opacity-70"
            }`}
          >
            Kontakt
          </Link>

          {/* Language Dropdown */}
          <div
            ref={langRef}
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="flex items-center gap-[var(--gap-xxs)] py-2 px-3 rounded-[var(--radius-button)] text-[1rem] text-inherit hover:opacity-70 transition-opacity">
              Sprache
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 pt-2 z-50">
                <div className="bg-background rounded-[var(--radius-button)] shadow-lg border border-[var(--wf-inverse-a10)] py-1 min-w-[80px]">
                  {["DE", "EN", "ES"].map((lang) => (
                    <button
                      key={lang}
                      className="block w-full text-left px-4 py-2 text-[1rem] text-inherit hover:opacity-70 transition-opacity"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Spacer to push CTA right */}
          <div className="flex-1" />

          {/* CTA */}
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all"
          >
            Kontakt &amp; Anfahrt
          </Link>
        </div>

        {/* Mobile: Spacer + Hamburger */}
        <div className="lg:hidden flex-1" />
        <button
          className="lg:hidden text-inherit p-[var(--space-0-5x)] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="1" y1="5" x2="23" y2="5" />
              <line x1="1" y1="12" x2="23" y2="12" />
              <line x1="1" y1="19" x2="23" y2="19" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary text-primary-foreground">
          <div className="px-[var(--container-padding)] py-[var(--space-1x)] space-y-1">
            <button
              onClick={() => setMobileAngeboteOpen(!mobileAngeboteOpen)}
              className="flex items-center justify-between w-full py-4 text-[var(--text-lg-size)] text-inherit min-h-[48px]"
            >
              Angebote
              <svg className={`w-3 h-3 transition-transform ${mobileAngeboteOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            {mobileAngeboteOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {angeboteItems.flatMap((group) =>
                  group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-[1rem] text-inherit/70 hover:text-inherit"
                    >
                      {item.label}
                    </Link>
                  ))
                )}
              </div>
            )}

            <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-4 text-[var(--text-lg-size)] text-inherit min-h-[48px]">
              &Uuml;ber mich
            </Link>
            <Link to="/kontakt" onClick={() => setMobileOpen(false)} className="block py-4 text-[var(--text-lg-size)] text-inherit min-h-[48px]">
              Kontakt
            </Link>

            {/* Language in mobile */}
            <div className="py-3 flex gap-2">
              {["DE", "EN", "ES"].map((lang) => (
                <button key={lang} className="text-[1rem] text-inherit/70 hover:text-inherit px-2 py-1">
                  {lang}
                </button>
              ))}
            </div>

            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 bg-secondary text-secondary-foreground text-center py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2]"
            >
              Kontakt &amp; Anfahrt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
