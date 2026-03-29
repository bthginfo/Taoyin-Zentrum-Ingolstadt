import { AngeboteSection } from "../components/AngeboteSection";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";

export default function ChiNeiTsang() {
  return (
    <>
      <SEO
        title="Chi Nei Tsang Ingolstadt – Taoistische Bauchmassage & Ausbildung"
        description="Chi Nei Tsang Behandlung & Ausbildung in Ingolstadt: Taoistische Bauchmassage für Verdauung, Entgiftung und emotionales Gleichgewicht. Zertifizierte Ausbildung nach Mantak Chia."
        keywords="Chi Nei Tsang Ingolstadt, Bauchmassage Ingolstadt, Chi Nei Tsang Ausbildung, Mantak Chia, Taoistische Massage, Bauchbehandlung, Energiemassage, Heilmassage"
        url="/chi-nei-tsang"
      />
      {/* Hero Header — .section (bg-primary = cream) with grid_5-col */}
      <header className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[var(--gap-sm)] items-center">
            {/* Left: Single large image with mask_left */}
            <div className="relative overflow-hidden rounded-[var(--radius-image)] lg:rounded-none lg:-ml-[var(--container-padding)]">
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371e7929cdfb71466f5a_Estela-byaylin-60-min.jpg"
                alt="Chi Nei Tsang Behandlung"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
                loading="lazy"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 15%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%)",
                }}
              />
            </div>

            {/* Right: Header text */}
            <div className="flex flex-col">
              <h1>Chi Nei Tsang Massage</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/70 text-balance max-w-[38rem]">
                Chi Nei Tsang ist eine traditionelle taoistische Bauchmassage, die innere Organe sanft löst und energetisch harmonisiert. Sie arbeitet mit tiefen, achtsamen Berührungen im Bauchraum, um Blockaden zu lösen und den Energiefluss zu fördern. Diese Technik unterstützt Verdauung, Entgiftung und emotionales Gleichgewicht.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Tiefe Bauchmassage — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Tiefe Bauchmassage für Wohlbefinden und innere Balance</h2>
            <p>
              Chi Nei Tsang ist eine sanfte, aber wirkungsvolle Massageform aus der taoistischen Heiltradition Chinas. Der Name bedeutet übersetzt &bdquo;die inneren Organe pflegen&ldquo; und beschreibt den Kern dieser Methode: Durch achtsame, tiefgehende Berührungen im Bauchraum werden Verspannungen gelöst, die Organe entspannt und der Energiefluss im Körper harmonisiert.
            </p>
            <p>
              Unser Bauch wird oft als &bdquo;zweites Gehirn&ldquo; bezeichnet – hier sitzen nicht nur wichtige Organe, sondern auch viele Nervenbahnen und emotionale Erinnerungen. Stress, falsche Ernährung oder ungelöste Emotionen können dazu führen, dass sich Anspannung und Blockaden in diesem Bereich festsetzen. Chi Nei Tsang hilft, diese sanft zu lösen und den Körper von innen heraus zu regenerieren.
            </p>
            <p>
              Während einer Behandlung liegst du entspannt auf einer Liege. Mit gezielten, kreisenden und drückenden Bewegungen arbeite ich an deinem Bauchbereich, immer im Einklang mit deinem Atemrhythmus. Dabei kann sich ein Gefühl von tiefer Entspannung, innerer Leichtigkeit und mehr Energie einstellen.
            </p>
          </article>
        </div>
      </section>

      {/* Section 2: Mögliche Wirkungen — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Mögliche Wirkungen von Chi Nei Tsang:</h2>
            <ul>
              <li>Verbesserung der Verdauung und Entgiftung</li>
              <li>Lösen von körperlichen und emotionalen Spannungen</li>
              <li>Stärkung des Immunsystems</li>
              <li>Förderung von innerer Ruhe und Ausgeglichenheit</li>
              <li>Unterstützung des Energieflusses (Qi) im gesamten Körper</li>
            </ul>
            <p>
              Chi Nei Tsang ist für Menschen jeden Alters geeignet und kann sowohl präventiv als auch begleitend zu anderen Gesundheits- und Entspannungsmethoden angewendet werden. Die Behandlung ist sanft, achtsam und immer auf deine individuellen Bedürfnisse abgestimmt.
            </p>
            <p>
              Gönne dir diese besondere Form der Selbstfürsorge und erlebe, wie sich dein Bauch – und damit dein ganzes Wohlbefinden – entspannen kann.
            </p>
          </article>
        </div>
      </section>

      {/* Section 3: 1-Jährige Ausbildung — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>1-Jährige Ausbildung</h2>
            <p>
              Der Darm! das Organ, das wir am wenigsten wertschätzen – Übergewicht, Burn-Out, Probleme mit der Haut – Alltagsbeschwerden, deren Verbindung zur Darmflora werden von Tag zu Tag offensichtlicher. Wir fühlen uns wohl, leben länger und glücklicher und gesünder, nur wenn wir auch unseren Darm entsprechend pflegen und im Gleichgewicht halten.
            </p>
            <p>
              Ich freue mich, Ihnen die Chi Nei Tsang (Bauch-)Massage in Form einer Ausbildung zum CNT Practitioner nach Mantak Chia näher bringen zu können. Der Darm steht im Fokus genauso wie alle damit verbundenen und davon beeinflussten Organe.
            </p>
            <p>
              Chi Nei Tsang ist eine besondere Form der Massage, mit Grundlagen in der Traditionellen Chinesischen Medizin, dem Taoismus und damit auch dem Medizinischen Qigong. Anatomie spielt eine genauso wichtige Rolle wie Fokus und Achtsamkeit auf die involvierten Organe und Energiekreise.
            </p>
            <p>
              Die Ausbildung ist geeignet für Therapeuten, Heilpraktiker (Allgemein oder der Psychotherapie), Masseure jeglicher Fachrichtung oder Personen mit einer besonderen Affinität zur Massage. Der Kursplan beruht auf dem Studienplan von Großmeister Mantak Chia und läuft über 10 Wochenenden mit Theorie gefolgt von intensiver Praxis.
            </p>
            <p>
              In der Ausbildung wird deshalb sehr viel Fokus auf die Praxis der Massagetechniken und der Meditation als auch auf die medizinische Theorie und Anatomie gelegt.
            </p>
            <p>Inhalte der Ausbildung:</p>
            <ul>
              <li>Grundlagen des Chi Nei Tsang</li>
              <li>Anatomie der Bauchregion, der inneren Organe, des Lymphsystems, des kardiovaskulären Systems und des Bewegungsapparates</li>
              <li>Aktivierung, Entgiftung und Ausgleichen der inneren Organe</li>
              <li>Entgiftung des Gewebes und des Lymphsystems</li>
              <li>Verarbeitung von emotionalen Spannungen</li>
              <li>Wirbelsäule, Rückenmuskulatur und Kreuzbein</li>
              <li>Ernährung</li>
              <li>Energiearbeit</li>
              <li>Vorbereitungen für die Praxis</li>
            </ul>
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
