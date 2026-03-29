import { Link } from "react-router";
import { SEO } from "../components/SEO";
import { CtaSection } from "../components/CtaSection";

const ArrowIcon = () => (
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

const therapies = [
  {
    title: "Autogenes Training",
    text: "Autogenes Training ist ein auf Autosuggestion basierendes Entspannungsverfahren. Es wurde vom Berliner Psychiater Johannes Heinrich Schultz aus der Hypnose entwickelt, 1926 erstmals vorgestellt und 1932 in seinem Buch Das autogene Training publiziert. Heute ist das autogene Training eine weit verbreitete und – beispielsweise in Deutschland und Österreich sogar gesetzlich – anerkannte Psychotherapiemethode.",
  },
  {
    title: "Kognitive Verhaltenstherapie",
    text: "Im Mittelpunkt der kognitiven Therapieverfahren stehen Kognitionen. Kognitionen umfassen Einstellungen, Gedanken, Bewertungen und Überzeugungen. Die kognitiven Therapieverfahren, zu denen die kognitive Therapie (KT) und die Rational-Emotive Verhaltenstherapie (REVT) gehören, gehen davon aus, dass die Art und Weise, wie wir denken, bestimmt, wie wir uns fühlen und verhalten und wie wir körperlich reagieren.",
  },
  {
    title: "Massage",
    text: 'Die Massage (von „massieren; berühren; betasten; kneten") dient zur mechanischen Beeinflussung von Haut, Bindegewebe und Muskulatur durch Dehnungs-, Zug- und Druckreiz. Die Wirkung der Massage erstreckt sich von der behandelten Stelle des Körpers über den gesamten Organismus und schließt auch die Psyche mit ein.',
  },
  {
    title: "Meditation",
    text: 'Meditation (von „nachdenken, nachsinnen, überlegen") ist eine in vielen Religionen und Kulturen ausgeübte spirituelle Praxis. Durch Achtsamkeits- oder Konzentrationsübungen soll sich der Geist beruhigen und sammeln. In östlichen Kulturen gilt sie als eine grundlegende und zentrale bewusstseinserweiternde Übung.',
  },
  {
    title: "Paartherapie",
    text: "Gemeinsam einen Schritt vorwärts machen – in Einzel- und Paargesprächen, ergänzt mit Elementen der taoistischen Traditionen in Meditation, Yoga und Qigong, verfolgen wir folgende Ziele: Beziehungsprobleme verstehen und herausfinden, wie Ihre Liebesbeziehung funktionieren kann. Sich selbst und den Partner besser erkennen und verstehen. Neue Werkzeuge in die Hand bekommen, die in allen Lebenslagen nützlich sind.",
  },
  {
    title: "Progressive Muskelentspannung nach Jacobson",
    text: "Bei der progressiven Muskelentspannung (kurz PME; auch progressive Muskelrelaxation, kurz PMR, progressive Relaxation, kurz PR, oder Tiefenmuskelentspannung) nach Edmund Jacobson handelt es sich um ein Entspannungsverfahren, bei dem durch die willentliche und bewusste An- und Entspannung bestimmter Muskelgruppen ein Zustand tiefer Entspannung des ganzen Körpers erreicht werden soll.",
  },
  {
    title: "Sokratischer Dialog",
    text: "Der Sokratische Dialog ist eine Fragetechnik, derer sich Therapeuten bedienen, wenn es im therapeutisch-beratenden Gespräch um Begriffsklärung und Entscheidungsfindung geht. Es ist ein Prozess des kritischen Hinterfragens von Argumenten. So sollen Strukturen und Verhaltensmuster sichtbar, das eigene Denken und Handeln verstehbar und damit auch veränderbar werden.",
  },
  {
    title: "Yoga, Qigong, Tai Chi",
    text: "Yoga, Qigong und Tai Chi sind Techniken, die an der Körperstruktur und an der Körperwahrnehmung arbeiten. In Verbindung mit Meditation und Massage führen diese Praktiken zu einem neuen Selbstbewußtsein, eine positivere und annehmendere Haltung zu sich selbst und zum eigenen Körper und ein zunehmendes Gefühl für die eigene Gesundheit.",
  },
];

const detailBlocks = [
  {
    eyebrow: "Orientierung. Stabilisierung. Unterstützung",
    title: "Ihr Ziel & die Behandlung",
    text: "Sie stehen an einem Scheideweg? Sie befinden sich in einer Krise? Sie fühlen sich unwohl? Egal was das aktuelle Problem ist, gemeinsam finden wir eine Lösung und die passende Therapie. Ob Beratung, Einzelsitzungen oder eine körperorientierte Psychotherapie. Mein ganzheitlicher Ansatz bringt den Körper und Geist wieder in Einklang.",
    linkText: "Mehr erfahren",
    linkTo: "/behandlung",
    image: "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d6745cc734423847d58b_9ae3166a-4496-49f1-9d77-c97f40759bdb.avif",
    imageAlt: "Ruhige Landschaft",
    imageFirst: false,
  },
  {
    eyebrow: "Estela Fuchs",
    title: "Über mich",
    text: "Seit vielen Jahren begleite ich Menschen psychotherapeutisch auf ihrem Weg zu mehr Klarheit, innerer Stabilität und Selbstvertrauen. In meiner Arbeit verbinde ich bewährte Methoden der Psychotherapie mit achtsamen Körper- und Atemübungen sowie taoistischen Praktiken, die das seelische Wachstum unterstützen und vertiefen.\n\nDiese Kombination ermöglicht es, nicht nur über Gedanken und Gefühle zu sprechen, sondern auch den Körper einzubeziehen – und damit Heilung auf mehreren Ebenen zu fördern.\n\nMein Anliegen ist es, Menschen dabei zu unterstützen, ihre eigenen Ressourcen zu entdecken, Krisen zu bewältigen und einen liebevollen Zugang zu sich selbst zu finden.",
    linkText: "Mehr erfahren",
    linkTo: "/about",
    image: "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537114c0ae0a617d65064_Estela-byaylin-29-min.jpg",
    imageAlt: "Estela Fuchs",
    imageFirst: true,
  },
  {
    eyebrow: "Ich berate und unterstütze Sie gerne",
    title: "Taoyin Zentrum Ingolstadt",
    text: "Entdecke sanfte taoistische Praktiken, die Körper, Geist und Seele verbinden – für mehr Energie, Gelassenheit und Wohlbefinden im Alltag.",
    linkText: "zum Taoyin Zentrum",
    linkTo: "/",
    image: "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg",
    imageAlt: "Taoyin Zentrum",
    imageFirst: true,
  },
];

export default function Psychotherapie() {
  return (
    <>
      <SEO 
        title="Psychotherapie Ingolstadt – Ganzheitliche Heilung & Begleitung"
        description="Ganzheitliche Psychotherapie in Ingolstadt: Verhaltenstherapie, Autogenes Training, Paartherapie, Meditation & körperorientierte Psychotherapie. Praxis Estela Fuchs."
        keywords="Psychotherapie Ingolstadt, Verhaltenstherapie Ingolstadt, Autogenes Training, Paartherapie Ingolstadt, Meditation, Entspannung, Heilpraktiker Psychotherapie Ingolstadt, Körperorientierte Psychotherapie, Progressive Muskelentspannung, Sokratischer Dialog"
        url="/psychotherapie"
      />

      {/* Hero — .section.is-secondary, max-height_100vh_desktop */}
      <header className="w-full bg-[var(--wf-neutral-secondary)] overflow-hidden lg:max-h-dvh py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-lg)] items-center">
            {/* Left: Header */}
            <div className="flex flex-col">
              <h1>
                Willkommen in meiner Praxis für ganzheitliche Psychotherapie
              </h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60 mb-[var(--space-2x)] max-w-[var(--container-sm-width)]">
                Ich arbeite mit klassischen Verfahren wie
                Entspannungstechniken und Verhaltenstherapie sowie mit
                alternativen Methoden aus den Bereichen der Meditation, des
                Qigong, des Tai Chi und der Ernährung nach den 5 Elementen.
              </p>
              <div className="flex flex-wrap gap-[var(--space-0-5x)]">
                <a
                  href="#Details"
                  className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:opacity-90 transition-all"
                >
                  Mehr erfahren
                </a>
                <a
                  href="#therapien"
                  className="inline-flex items-center justify-center border border-current/20 py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:bg-current/5 transition-all"
                >
                  Therapien entdecken
                </a>
              </div>
            </div>

            {/* Right: rotate_12deg with 2 stacked images */}
            <div className="lg:rotate-[12deg] lg:origin-center flex flex-col gap-[var(--gap-sm)]">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370c877743c4a7999300_Estela-byaylin-3.jpg"
                alt="Estela in der Praxis"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif"
                alt="Massage Therapie"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Details Section — .section (cream) */}
      <section id="Details" className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="flex flex-col gap-[var(--gap-xxl)]">
            {detailBlocks.map((block, i) => (
              <div
                key={block.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-lg)] items-center"
              >
                {/* Image — placed first on even blocks (imageFirst) */}
                {block.imageFirst && (
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className="w-full object-cover rounded-[var(--radius-image)]"
                    loading="lazy"
                  />
                )}

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--wf-accent-primary)] mb-[var(--space-0-5x)]">
                    {block.eyebrow}
                  </span>
                  <h2 className="mb-[var(--space-1x)]">{block.title}</h2>
                  {block.text.split("\n\n").map((paragraph, pi) => (
                    <p
                      key={pi}
                      className="text-[var(--text-lg-size)] leading-[1.6] text-current/60 mb-[var(--space-0-75x)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <div className="flex items-center gap-2 mt-[var(--space-0-5x)]">
                    <Link
                      to={block.linkTo}
                      className="inline-flex items-center gap-2 text-[var(--wf-accent-primary)] hover:underline"
                    >
                      {block.linkText} <ArrowIcon />
                    </Link>
                  </div>
                </div>

                {/* Image — placed after text on odd blocks (!imageFirst) */}
                {!block.imageFirst && (
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className="w-full object-cover rounded-[var(--radius-image)]"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapien Section — .section.is-secondary */}
      <section
        id="therapien"
        className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]"
      >
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          {/* header.is-align-center */}
          <div className="text-center mb-[var(--gap-md)]">
            <h2>Meine Therapie-Angebote</h2>
          </div>

          {/* grid_2-col gap-small with card.on-secondary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gap-sm)]">
            {therapies.map((therapy) => (
              <div
                key={therapy.title}
                className="bg-white rounded-[var(--radius-card)] p-[var(--space-2x)]"
              >
                <h3 className="text-center mb-[var(--space-0-75x)]">{therapy.title}</h3>
                <p className="text-[1rem] leading-[1.8] text-current/60 text-left">
                  {therapy.text}
                </p>
              </div>
            ))}
          </div>

          {/* Button group */}
          <div className="flex flex-wrap justify-center gap-[var(--space-0-5x)] mt-[var(--space-2x)]">
            <Link
              to="/therapien"
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:opacity-90 transition-all"
            >
              Mehr Details
            </Link>
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center border border-current/20 py-[1em] px-[1.5em] rounded-[var(--radius-button)] text-[1rem] leading-[1.2] hover:bg-current/5 transition-all"
            >
              Therapie Anfragen
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section — with Psychotherapie-specific text */}
      <CtaSection
        content={{
          cta_title: "Finde deine Mitte. Spüre dein Chi.",
          cta_description: "Lernen Sie die Kraft der Integration von Körper, Geist und Seele für Sich zu nutzen.",
        }}
      />
    </>
  );
}
