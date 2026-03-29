const defaultTestimonials = [
  {
    name: "D.L.",
    text: "Als ich Anfang des Jahres zu Estela kam, war ich am Ende meiner seelischen und körperlichen Kräfte. Ich suchte überall um Rat oder Antworten. Jedoch ohne Erfolg. Eine psychosomatische Belastungsstörung wurde bei mir diagnostiziert. Dann... Zu meinem Glück, traf ich auf Estelas Taoyin Zentrum. Dank ihrer Erfahrung, ihres Know-Hows, ihrer Menschenkenntnis, ihres ganzen Wesens, hat sich mich aus meinem Loch wieder rausgeholt. Ich bin so dankbar Estela gefunden zu haben.",
  },
  {
    name: "Petra S.",
    text: "Als es mir richtig mies ging und ich mich fühlte, als würde ich bald in eine waschechte Depression rutschen, hat mir Estela geholfen, wieder in die Kraft und in den Flow zu kommen. Hauptsächlich mit ihrer unglaublich kraftvollen Chi Nei Tsang Massage. Und das in relativer kurzer Zeit und mit so wenig Aufwand! Wie von Zauberhand und ohne viel Reden zu müssen. Estela ist mit ganzem Herzen dabei und beherrscht ihr Handwerk auf allen Ebenen.",
  },
  {
    name: "Valeria A.",
    text: "Estela ist ein unglaublicher Mensch, ich bin bereits seit einem Jahr bei ihr und ich habe ihr so viel zu verdanken. Ihre Art, ihre Energie, ihr Wissen und ihr Können halfen mir extrem. Ich kann niemanden so sehr empfehlen wie Sie. Einfach toll diese Frau.",
  },
];

interface TestimonialsSectionProps {
  content?: {
    testimonials_eyebrow?: string;
    testimonials_title?: string;
    testimonials_subtitle?: string;
    testimonials_items?: Array<{
      _uid: string;
      text: string;
      author: string;
      rating: number;
    }>;
  };
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const testimonials = Array.isArray(content?.testimonials_items) ? content.testimonials_items : defaultTestimonials;
  
  return (
    <section className="w-full bg-background py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)]">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-sm)] mb-[var(--gap-md)]">
          <div>
            <p className="text-[var(--eyebrow-size)] tracking-[var(--eyebrow-letter-spacing)] uppercase text-current/60 mb-[var(--eyebrow-margin-bottom)] leading-[var(--eyebrow-line-height)]">
              Erfahrungen aus unserer Gemeinschaft
            </p>
            <h2>Stimmen, die ber&uuml;hren</h2>
          </div>
          <p className="text-[var(--text-lg-size)] text-current/70 leading-[1.6] lg:pt-8">
            Unsere Teilnehmer*innen teilen, wie die taoistischen Praktiken ihr
            Leben bereichern – mit mehr Ruhe, innerer Balance und neuer
            Lebensenergie. Lass dich inspirieren und finde deinen eigenen Weg in
            die Mitte.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--gap-sm)] mb-[var(--gap-lg)]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white shadow-[inset_0_0_0_1px_var(--wf-inverse-a20)] rounded-[var(--radius-card)] p-[var(--card-padding-mobile)] md:p-[var(--card-padding-tablet)] lg:p-[var(--card-padding)] flex flex-col"
            >
              {/* Star rating */}
              <div className="flex justify-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[var(--wf-accent-primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-foreground/60 leading-relaxed flex-1 mb-4">
                &bdquo;{t.text}&ldquo;
              </p>
              <p className="text-[14px] font-medium text-foreground mt-auto pt-3 border-t border-current/10">{t.name}</p>
            </div>
          ))}
        </div>

        {/* Google Link */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Taoyin+Zentrum+Rezensionen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] font-normal leading-[1.2] hover:opacity-90 transition-all"
          >
            Mehr Rezensionen auf Google
          </a>
        </div>
      </div>
    </section>
  );
}