import { CtaSection } from "../components/CtaSection";

export default function Behandlung() {
  return (
    <>
      {/* Hero — .section (cream, default) */}
      <header className="w-full bg-[var(--wf-neutral-primary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: Header */}
            <div className="flex flex-col">
              <h1>Ihr Ziel, meine Behandlung</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60">
                Erfahren Sie mehr über das Ziel der Behandlung und mein Vorgehen. Damit wir zusammen den richtigen Ansatz finden können.
              </p>
            </div>

            {/* Right: grid_2-col tablet-1-col gap-xsmall with 3 images */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/b745265f-4158-4a26-82c2-6957d4c4e11e.avif"
                alt="Natur und Heilung"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/490e72ce-966a-433d-96d3-28f46b7a18a1.avif"
                alt="Praxisraum"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537114c0ae0a617d65064_Estela-byaylin-29-min.jpg"
                alt="Estela Fuchs"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[3/2] col-span-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Ihr Ziel — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Ihr Ziel</h2>

            <h2>Orientierung</h2>
            <p>
              Sie stehen an einem Scheideweg? Wichtige <strong>Entscheidungen</strong> liegen vor Ihnen? Sie suchen nach Halt und Orientierung? nach innerer Ruhe und <strong>Sicherheit</strong>, ohne von externen Faktoren getrieben und beeinflußt zu werden? Sie suchen nach Distanz vom täglichen <strong>Alltag</strong>? Sie sind auf der Suche nach Ihrem inneren Selbst?
            </p>

            <h2>Stabilisierung</h2>
            <p>
              Sie befinden sich in einer Krise? Ihr <strong>Leben</strong> hat sich in beabsichtigter oder unbeabsichtigter Weise verändert und Sie fühlen sich überfordert? Sie finden keine <strong>Erholung</strong> und sehen wenig Alternativen? Sie fühlen sich krank oder schwach obwohl der Arzt Ihnen keinen Befund nennen kann? Sie suchen Hilfe über das Gespräch mit Anderen?
            </p>

            <h2>Unterstützung</h2>
            <p>
              Sie fühlen sich unwohl? Sie leiden unter psychischen oder körperlichen Symptomen und machen sich Gedanken dazu? Sie suchen <strong>Heilpraktiker</strong> der Psychotherapie als Ansprechpartner und Berater? Sie suchen nach konkreten psychotherapeutischen <strong>Behandlungsmöglichkeiten</strong>?
            </p>
          </article>
        </div>
      </section>

      {/* Die Behandlung — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Die Behandlung</h2>

            <h4><strong>Beratung</strong></h4>
            <p>
              Lernen Sie uns kennen. Im Gespräch tasten wir uns an Ihr ganz persönliches Bedürfnis heran und entscheiden gemeinsam die für Sie beste Vorgehensweise. Das erste Gespräch ist unverbindlich und kostenfrei und erlaubt Ihnen, Einblick in unser Denken und Handeln zu gewinnen.
            </p>

            <h4><strong>Einzelsitzungen</strong></h4>
            <p>
              In einzelnen Sitzungen gehen wir Schritt für Schritt auf Ihre Bedürfnisse ein und arbeiten an den für Sie wichtigen Themen. Gerne können die verschiedenen Methoden auch nur zum Kennenlernen ausprobiert werden.
            </p>
            <p>
              Unser Ziel ist es, dass Sie die Verantwortung für Ihre eigene Gesundheit übernehmen können und selbst entscheiden, was Ihnen gut tut.
            </p>

            <h4><strong>Körperorientierte Psychotherapie</strong></h4>
            <p>
              Wir verbinden die Elemente der Meditation und der Massage in eine wirksame Behandlungsform nach den Leitlinien des Universal Healing Tao und des Chi Nei Tsang nach Großmeister Mantak Chia. Diese lassen sich sehr gut mit den bestehenden klassischen Psychotherapieformen integrieren. Wir unterstützen Sie sehr gerne auf dem Weg zu Ihrer Genesung.
            </p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        content={{
          cta_title: "Finde deine Mitte. Spüre dein Chi.",
          cta_description: "Lernen Sie die Kraft der Integration von Körper, Geist und Seele für Sich zu nutzen.",
        }}
      />
    </>
  );
}
