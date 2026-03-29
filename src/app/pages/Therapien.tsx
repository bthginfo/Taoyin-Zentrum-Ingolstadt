import { CtaSection } from "../components/CtaSection";

export default function Therapien() {
  return (
    <>
      {/* Hero — .section.is-secondary */}
      <header className="w-full bg-[var(--wf-neutral-secondary)] py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: grid_2-col gap-xsmall with 3 images ratio_2x3 */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ec1e1865-4371-4deb-b640-940bfd2c1974.avif"
                alt="Ruhige Landschaft"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371895543153b432f2fa_Estela-byaylin-35-min.jpg"
                alt="Estela in der Praxis"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ee125b47-41aa-4ec5-a593-18b12a1fca27.avif"
                alt="Hintergrund"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3] col-span-2 max-h-[280px]"
                loading="lazy"
              />
            </div>

            {/* Right: Header */}
            <div className="flex flex-col">
              <h1>Meine Therapien im Detail</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/60">
                Erfahren Sie mehr zu meinen therapeutischen Ansätzen und verstehen Sie meinen ganzheitlichen Ansatz.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Autogenes Training — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Autogenes Training</h2>
            <p>
              <strong>Autogenes Training</strong> ist ein auf Autosuggestion basierendes Entspannungsverfahren. Es wurde vom Berliner Psychiater Johannes Heinrich Schultz aus der Hypnose entwickelt, 1926 erstmals vorgestellt und 1932 in seinem Buch <em>Das autogene Training</em> publiziert. Heute ist das autogene Training eine weit verbreitete und – beispielsweise in Deutschland und Österreich sogar gesetzlich – anerkannte Psychotherapiemethode.
            </p>
          </article>
        </div>
      </section>

      {/* 2. Kognitive Verhaltenstherapie — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Kognitive Verhaltenstherapie</h2>
            <p>
              Im Mittelpunkt der kognitiven Therapieverfahren stehen Kognitionen. Kognitionen umfassen Einstellungen, Gedanken, Bewertungen und Überzeugungen. Die kognitiven Therapieverfahren, zu denen die kognitive Therapie (KT) und die Rational-Emotive Verhaltenstherapie (REVT) gehören, gehen davon aus, dass die Art und Weise, wie wir denken, bestimmt, wie wir uns fühlen und verhalten und wie wir körperlich reagieren. Schwerpunkte der Therapie sind
            </p>
            <ul>
              <li>die Bewusstmachung von Kognitionen,</li>
              <li>die Überprüfung von Kognitionen und Schlussfolgerungen auf ihre Angemessenheit,</li>
              <li>die Korrektur von irrationalen Einstellungen und</li>
              <li>der Transfer der korrigierten Einstellungen ins konkrete Verhalten.</li>
            </ul>
            <p>
              Die kognitive Therapie stellt somit die aktive Gestaltung des Wahrnehmungsprozesses in den Vordergrund, weil in letzter Instanz nicht die objektive Realität, sondern die subjektive Sicht des Betrachtenden über das Verhalten entscheidet. Ist die Kognition inadäquat (z.&nbsp;B. durch Wahrnehmungsselektion und -bewertung), ist auch die Möglichkeit beeinträchtigt, Affekt und Verhalten zu korrigieren. Vor allem spontanes und emotional getriebenes Verhalten sind sehr von der Art beeinflusst, wie ein Mensch sein Modell der Umwelt gedanklich strukturiert hat.
            </p>
          </article>
        </div>
      </section>

      {/* 3. Massage — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Massage</h2>
            <p>
              Die <strong>Massage</strong> (von &bdquo;massieren; berühren; betasten; kneten&ldquo;) dient zur mechanischen Beeinflussung von Haut, Bindegewebe und Muskulatur durch Dehnungs-, Zug- und Druckreiz. Die Wirkung der Massage erstreckt sich von der behandelten Stelle des Körpers über den gesamten Organismus und schließt auch die Psyche mit ein.
            </p>
            <h3><strong>Wie wirkt die Massage auf die Gesundheit?</strong></h3>
            <ul>
              <li>Lokale Steigerung der Durchblutung</li>
              <li>Senkung von Blutdruck und Pulsfrequenz</li>
              <li>Entspannung der Muskulatur</li>
              <li>Lösen von Verklebungen und Narben</li>
              <li>Verbesserte Wundheilung</li>
              <li>Schmerzlinderung</li>
              <li>Einwirken auf innere Organe über Reflexbögen</li>
              <li>Psychische Entspannung</li>
              <li>Reduktion von Stress</li>
              <li>Verbesserung des Zellstoffwechsels im Gewebe</li>
              <li>Entspannung von Haut und Bindegewebe</li>
              <li>Beeinflussung des vegetativen Nervensystems</li>
            </ul>
            <p>
              Der Hautkontakt, die Stoffwechselanregung und die Entspannung wirken sich positiv auf die psychische Verfassung aus. Die Massage eignet sich hervorragend dafür, die eigene Körperwahrnehmung zu verbessern und kann zur Vorbeugung bei Stress und ergänzend zur Therapie von Angststörungen oder Depressionen eingesetzt werden.
            </p>
          </article>
        </div>
      </section>

      {/* 4. Meditation — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Meditation</h2>
            <p>
              <strong>Meditation</strong> (von &bdquo;nachdenken, nachsinnen, überlegen&ldquo;) ist eine in vielen Religionen und Kulturen ausgeübte spirituelle Praxis. Durch Achtsamkeits- oder Konzentrationsübungen soll sich der Geist beruhigen und sammeln. In östlichen Kulturen gilt sie als eine grundlegende und zentrale bewusstseinserweiternde Übung.
            </p>

            <h2>Wie wirkt die Meditation?</h2>
            <p>
              Die Wirkung von Meditation ist vielschichtig. Studien belegen die positiven Effekte der Meditation auf die Gesundheit in folgenden Bereichen:
            </p>

            <p><strong>Meditation stärkt die physische Gesundheit</strong></p>
            <ul>
              <li>Reduzierung von Bluthochdruck, der Herzschlag wird verlangsamt, die Atmung vertieft, Muskelspannungen reduziert.</li>
              <li>Verbesserten Umgang mit chronischem und Spannungs-Schmerzen</li>
              <li>Stärkung des Immunsystems und der Gesundheit</li>
              <li>Reduzierung von Kopfschmerzen</li>
              <li>Entspannende Wirkung bei Stress</li>
            </ul>

            <p><strong>Meditation stärkt die psychische Gesundheit</strong></p>
            <ul>
              <li>Reduzierung von Angstzuständen</li>
              <li>Reduzierung und bessere Erholung bei Burnout und Depression</li>
              <li>Minimierung von Schlafstörungen</li>
              <li>Reduzierung von Stress Tinnitus, Zwangsstörung</li>
            </ul>

            <p><strong>Meditation unterstützt Verhaltensänderungen, bzw. hilft bei Verhaltensstörungen</strong></p>
            <ul>
              <li>Reduzierung von Aggression</li>
              <li>Genesung von Alkoholsucht</li>
              <li>Minderung von Essstörungen</li>
              <li>Überwindung von Lernschwierigkeiten</li>
              <li>Verbesserter Umgang mit Sucht</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 5. Paartherapie — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Paartherapie</h2>
            <p>
              Gemeinsam einen Schritt vorwärts machen – in Einzel- und Paargesprächen, ergänzt mit Elementen der taoistischen Traditionen in Meditation, Yoga und Qigong, verfolgen wir folgende Ziele:
            </p>
            <ul>
              <li>Beziehungsprobleme verstehen und herausfinden, wie Ihre Liebesbeziehung funktionieren kann</li>
              <li>Sich selbst und den Partner besser erkennen und verstehen</li>
              <li>Neue Werkzeuge in die Hand bekommen, die in allen Lebenslagen nützlich sind</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 6. Sokratischer Dialog — .section.is-secondary (light blue) */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Sokratischer Dialog</h2>
            <p>
              Der Sokratische Dialog ist eine Fragetechnik, derer sich Therapeuten bedienen, wenn es im therapeutisch-beratenden Gespräch um Begriffsklärung und Entscheidungsfindung geht. Es ist ein Prozess des kritischen Hinterfragens von Argumenten. So sollen Strukturen und Verhaltensmuster sichtbar, das eigene Denken und Handeln verstehbar und damit auch veränderbar werden.
            </p>
          </article>
        </div>
      </section>

      {/* 7. Yoga, Qigong, Tai Chi — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Yoga, Qigong, Tai Chi</h2>
            <p>
              <strong>Yoga, Qigong</strong> und <strong>Tai Chi</strong> sind Techniken, die an der Körperstruktur und an der Körperwahrnehmung arbeiten. In Verbindung mit Meditation und Massage führen diese Praktiken zu einem neuen Selbstbewußtsein, eine positivere und annehmendere Haltung zu sich selbst und zum eigenen Körper und eine zunehmendes Gefühl für die eigene Gesundheit.
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
