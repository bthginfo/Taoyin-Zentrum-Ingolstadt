import { AngeboteSection } from "../components/AngeboteSection";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";

export default function QiGong() {
  return (
    <>
      <SEO
        title="Qi Gong Ingolstadt – Medizinisches Qigong & Kurse"
        description="Qi Gong Kurse in Ingolstadt: Stärke dein Immunsystem, finde innere Ruhe und mehr Energie. Medizinisches Qi Gong dreimal wöchentlich im Taoyin Zentrum."
        keywords="Qi Gong Ingolstadt, Medizinisches Qi Gong, Qigong Kurs Ingolstadt, Qigong Anfänger, Energiearbeit, Entspannung, Meditation Ingolstadt, Zehnerkarte Qi Gong"
        url="/qi-gong"
      />
      {/* Hero Header — .section (bg-primary = cream) */}
      <header className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: 2-col grid with 4 images (2x2), gap-xsmall */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370e9aba7881ec031049_Estela-byaylin-13.jpg"
                alt="Estela bei der Praxis"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53719850089c1594b1703_Estela-byaylin-42.jpg"
                alt="Gemeinschaftliche Qi Gong Übung"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370bf7333a00c99cc3e1_Estela-byaylin-14.jpg"
                alt="Qi Gong Einzelbegleitung"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/d38b1252-bc48-440f-9886-7d0d97209543.avif"
                alt="Entspannende Qi Gong Sitzung"
                className="w-full object-cover rounded-[var(--radius-image)]"
                loading="lazy"
              />
            </div>

            {/* Right: Header text */}
            <div className="flex flex-col">
              <h1>Was ist Qigong?</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/70 text-balance max-w-[var(--container-sm-width)]">
                Qigong ist eine traditionelle chinesische Praxis zur Pflege von
                Gesundheit, Energie und innerer Ruhe. Sie verbindet sanfte
                Bewegungen, Atemübungen und meditative Konzentration zu
                einem harmonischen Ganzen. Regelmäßiges Üben
                stärkt das Qi, fördert Vitalität und
                unterstützt seelisches Gleichgewicht.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Rich Text Section — .section.is-secondary */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Medizinisches Qigong</h2>
            <p>
              Medizinisches Qigong wurde nicht nur im alten China, sondern auch
              heute in China eingesetzt, um eine Vielzahl von Krankheiten zu
              behandeln. Es wird oft in Verbindung mit Kräutern aus der
              chinesischen Medizin und mittlerweile auch in der westlichen
              Medizin verwendet. Es konzentriert sich auf Meridianwege und
              innere Organe des Körpers. Es wird in chinesischen
              Krankenhäusern in ganz China und seit Jahrhunderten im Osten
              verwendet.
            </p>

            <h2>Wann medizinisches Qigong angewendet werden kann</h2>
            <p>
              Diese Praktiken wurden in China seit jeher und noch bis heute
              verwendet, um verschiedene Erkrankungen zu behandeln wie:
            </p>
            <ul>
              {[
                "Krebs (alle Arten)",
                "Sportverletzungen",
                "Gastrointestinale Störungen",
                "Orthopädische Erkrankungen",
                "Gebrochene Knochen",
                "Verstauchungen",
                "Erkältung",
                "Grippe",
                "Emotionale Störungen",
                "Depression",
                "ADHS",
                "Bipolare Störung",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>
              Möchten Sie zertifizierter Qigong-Praktiker werden? Wir
              können helfen!
            </h3>
            <p>
              Interessiert an einer Ausbildung zum zertifizierten Praktiker?
            </p>
            <p>
              Unser einzigartiges Programm geht tief in Qigong Entwicklung. Wir
              lehren und begleiten Dich, wie Du Dich selbst und andere durch
              regelmäßige Qigong-Praktiken heilen kannst. Du lernst
              spezifische Übungen für verschiedene Organprobleme,
              Krankheiten und andere Leiden.
            </p>

            <h3>Wer kann an unseren medizinischen Qigong-Kursen teilnehmen?</h3>
            <p>Es ist nie zu spät oder zu früh, um Qigong zu lernen!</p>
            <p>
              Ob Du neu bei Qigong oder ein fortgeschrittener Praktiker bist, Du
              kannst von unserem vollen Kurs Curriculum lernen und profitieren.
              Wir haben persönlich Medical Qigong für Studenten im
              Jugendalter bis hin zu Patienten und Studenten in den 80igern
              unterrichtet.
            </p>
            <p>
              Dies ist offen für jede Ebene der Qigong-Praktiker:
              Anfänger oder Fortgeschrittene. Anmeldung gerne im Taoyin
              Zentrum oder telefonisch.
            </p>
          </article>
        </div>
      </section>

      {/* Angebote — .section.is-secondary */}
      <AngeboteSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
