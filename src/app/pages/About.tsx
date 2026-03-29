import { SEO } from "../components/SEO";
import { CtaSection } from "../components/CtaSection";

export default function About() {
  return (
    <>
      <SEO
        title="Über Estela Fuchs – Taoismus, Qi Gong & Psychotherapie Ingolstadt"
        description="Estela Fuchs: Über 30 Jahre Erfahrung in Taoismus, Qi Gong und Psychotherapie. Authentische Begleitung im Taoyin Zentrum Ingolstadt."
        keywords="Estela Fuchs, Psychotherapie Ingolstadt, Qi Gong Lehrerin, Taoismus, TaoBasis, Heilpraktiker Ingolstadt, Chi Nei Tsang Therapeutin, Taoyin Zentrum"
        url="/about"
      />

      {/* Hero — .section (cream), grid_5-col tablet-1-col gap-small */}
      <header className="w-full bg-[var(--wf-neutral-primary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-[var(--gap-sm)] items-center">
            {/* Left 3 cols: image with mask_left */}
            <div className="lg:col-span-3 relative">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370c877743c4a7999300_Estela-byaylin-3.jpg"
                alt="Estela Fuchs"
                className="w-full object-cover"
                style={{
                  borderRadius: "0 0 0 var(--radius-image, 0.75rem)",
                  maskImage: "linear-gradient(to right, transparent 0%, black 8%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%)",
                }}
                loading="lazy"
              />
            </div>

            {/* Right 2 cols: header */}
            <div className="lg:col-span-2 flex flex-col">
              <h1>Estela Fuchs</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60 max-w-[30rem]">
                Lernen Sie mich kennen und erfahren Sie mehr über mich und meinen Überzeugungen.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Über mich — .section (cream), container.is-small, rich-text */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Über mich – mein Weg mit TaoBasis</h2>
            <p>
              Nach einer längeren Pause und einer herausfordernden Heilungszeit möchte ich mich neu vorstellen.<br />
              Vor einiger Zeit erlitt ich einen Bruch am Fußgelenk. Dieser Unfall brachte mich aus dem Gleichgewicht und verlangte viel Geduld und Achtsamkeit. Doch gerade in dieser Phase durfte ich erfahren, wie tiefgreifend Qi Gong und die taoistischen Heilmethoden wirken.
            </p>
            <ul>
              <li>Sie unterstützten meine körperliche Regeneration.</li>
              <li>Sie gaben mir Kraft, wieder sicher auf meinen Beinen zu stehen.</li>
              <li>Sie öffneten mir die Tür zu einer noch tieferen Erfahrung von Heilung und Vertrauen.</li>
            </ul>
            <p>
              Seit über 30 Jahren gehe ich den Weg des Taoismus. Viele Jahre habe ich Qi Gong geübt, weitergegeben und Menschen begleitet. Doch diese persönliche Erfahrung hat meine Überzeugung vertieft: Taoistische Praktiken sind nicht nur Bewegungen, sondern lebendige Werkzeuge für Heilung, Balance und innere Stärke.
            </p>
            <p>
              Parallel dazu habe ich mich intensiv mit Psychotherapie beschäftigt. In meiner heutigen Arbeit fließen diese beiden Wege zusammen: die tiefgehende innere Arbeit der Psychotherapie und die körperlich-seelische Dimension der taoistischen Praxis. Diese Verbindung ermöglicht es, nicht nur auf einer geistigen Ebene Themen zu bearbeiten, sondern Heilung und Veränderung ganzheitlich zu erfahren.
            </p>
            <p>
              Heute möchte ich das, was mir selbst so viel geschenkt hat, weitergeben – authentisch, mitfühlend und voller Hingabe.
            </p>
            <p>
              ✨ Mein Angebot an Sie:<br />
              Nicht nur Techniken zu lernen, sondern eine lebendige Praxis zu erfahren, die Körper, Geist und Seele verbindet – und die Ihnen im Alltag neue Energie, Vertrauen und innere Ruhe schenkt. Gleichzeitig biete ich einen geschützten psychotherapeutischen Raum, in dem persönliche Themen angeschaut, verarbeitet und in neue Stärke verwandelt werden können.
            </p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
