import { AngeboteSection } from "../components/AngeboteSection";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";

export default function TaoYin() {
  return (
    <>
      <SEO
        title="Tao Yin Ingolstadt – Taoistische Bewegungs- & Atempraxis"
        description="Tao Yin in Ingolstadt: Sanfte Dehnungen, fließende Bewegungen und gezielte Atemtechniken für Gesundheit, innere Balance und Wohlbefinden. Kurse im Taoyin Zentrum."
        keywords="Tao Yin Ingolstadt, Tao Yin Kurs, Taoistische Übungen, Yin Yang, Daoismus, Bewegungstherapie Ingolstadt, Atemübungen, Qi Gong Ingolstadt, Energiearbeit"
        url="/taoyin"
      />
      {/* Hero Header — section.is-secondary */}
      <header className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-xxl)] items-center">
            {/* Left: 2-col grid with 3 images, gap-xsmall */}
            <div className="grid grid-cols-2 gap-[var(--gap-xs)]">
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ec1e1865-4371-4deb-b640-940bfd2c1974.avif"
                alt="Ruhige Landschaft mit Fluss"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/3cc8d6ee-98ad-4bfb-ae1b-618e78b0ce21.avif"
                alt="Qi Gong Kurs"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/image-generation-assets/ee125b47-41aa-4ec5-a593-18b12a1fca27.avif"
                alt="Tao Yin Praxis"
                className="w-full object-cover rounded-[var(--radius-image)] aspect-[2/3]"
                loading="lazy"
              />
            </div>

            {/* Right: Header text */}
            <div className="flex flex-col">
              <h1>Taoyin: was bedeutet es?</h1>
              <p className="text-[var(--text-lg-size)] leading-[1.6] text-current/70 text-balance max-w-[var(--container-sm-width)]">
                Tao Yin ist eine jahrtausendealte chinesische Bewegungs- und
                Atempraxis zur Förderung von Gesundheit und innerer Balance.
                Sanfte Dehnungen, fließende Bewegungen und gezielte
                Atemtechniken helfen, Körper und Geist zu harmonisieren.
                Diese Übungen stärken die Lebensenergie (Qi), lösen
                Verspannungen und unterstützen ein ganzheitliches
                Wohlbefinden.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section: TAO — section (bg-primary / white) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>TAO</h2>
            <p>
              Das Wort &bdquo;Daoismus&ldquo; leitet sich ab von &bdquo;Dao&ldquo;
              (Tao), einem Begriff der chinesischen Philosophie, der bereits vor
              dem Daodejing verwendet wurde, aber erst in diesem Text seine
              zentrale Stellung und besondere, universale Bedeutung erhielt.
              &bdquo;Dao&ldquo; bedeutete ursprünglich &bdquo;Weg&ldquo;, im
              klassischen Chinesisch aber bereits &bdquo;Methode&ldquo;,
              &bdquo;Prinzip&ldquo;, &bdquo;der rechte Weg&ldquo;. Bei Laozi nimmt
              dann der Begriff des Dao die Bedeutung eines der ganzen Welt
              zugrunde liegenden, alldurchdringenden Prinzips an. Es ist die
              höchste Wirklichkeit und das höchste Mysterium, die
              uranfängliche Einheit, das kosmische Gesetz und Absolute. Aus
              dem Dao entstehen die &bdquo;zehntausend Dinge&ldquo;, also der
              Kosmos, und auch die Ordnung der Dinge entsteht aus ihm,
              ähnlich einem Naturgesetz, doch ist dem Dao selbst kein
              omnipotentes Wesen zuzuschreiben, sondern es ist Ursprung und
              Vereinigung der Gegensätze, womit es letztlich undefinierbar
              ist.
            </p>
            <p>
              Philosophisch könnte man das Dao als jenseits aller
              Begrifflichkeit fassen, weil es der Grund des Seins, die
              transzendente Ursache ist und somit alles, auch den Gegensatz von
              Sein und Nicht-Sein, enthält. In diesem Sinne kann nichts
              über das Dao ausgesagt werden, weil jede Definition eine
              Begrenzung enthält. Das Dao ist aber sowohl unbegrenzte
              Transzendenz, als auch das dem Kosmos, dem All immanente Prinzip.
            </p>
            <blockquote>
              <p>
                &bdquo;Das Tao, das sich mit Worten beschreiben lässt, ist
                nicht das wahre Tao.&ldquo;
              </p>
              <footer>– Lao Tse: Tao Te King</footer>
            </blockquote>
            <p>
              Durch das Wirken des Dao wird die Schöpfung durch Zweiheit,
              das Yin und das Yang, Licht und Schatten, hervorgebracht, aus
              deren Wandlungen, Bewegungen und Wechselspielen dann die Welt
              hervorgeht.
            </p>
          </article>

          {/* YouTube Embed — Webflow .w-embed-youtubevideo */}
          <div className="mt-[var(--space-2x)] relative w-full" style={{ paddingTop: "56.17%" }}>
            <iframe
              src="https://www.youtube.com/embed/fsmXRcD_jYI?rel=0&controls=1&autoplay=0&mute=0&start=0"
              className="absolute inset-0 w-full h-full rounded-[var(--radius-image)]"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Dimensions: Cosmic Eye HD"
            />
          </div>
        </div>
      </section>

      {/* Section: YIN — section.is-secondary */}
      <section className="w-full bg-[var(--wf-neutral-secondary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Yin</h2>
            <p>
              <strong>Yin und Yang</strong> (chinesisch 陰陽 /
              阴阳, Pinyin <em>yīn yáng</em>) sind zwei
              Begriffe der chinesischen Philosophie, insbesondere des Daoismus.
              Sie stehen für polar einander entgegengesetzte und dennoch
              aufeinander bezogene Kräfte oder Prinzipien. Ein weit
              verbreitetes Symbol des Prinzips ist das Taijitu, in dem das
              weiße Yang (hell, hart, heiß, männlich, aktiv,
              Bewegung) und das schwarze Yin (dunkel, weich, kalt, weiblich,
              passiv, Ruhe) gegenüberstehend dargestellt werden.
            </p>

            <h3>
              Yin und Yang als Prinzipien der Wandlung und der Korrelation
            </h3>

            {/* Yin Yang Symbol — centered figure */}
            <figure className="flex justify-center my-[var(--space-2x)]">
              <img
                src="https://cdn.prod.website-files.com/wordpress/wp-content/uploads/2017/01/Yin_yang.svg_.png"
                alt="Yin und Yang Symbol"
                className="w-40 h-40 object-contain"
                loading="lazy"
              />
            </figure>

            <p>
              Yin und Yang bezeichnen &bdquo;Gegensätze&ldquo; in ihrer
              wechselseitigen Bezogenheit als eine Gesamtheit, einen ewigen
              Kreislauf. Daher können sie zur Erklärung von
              Wandlungsvorgängen und Prozessen und zur Darstellung der
              gegenseitigen Begrenzung und Wiederkehr von Dingen benutzt werden.
            </p>
            <p>
              Yin und Yang steigen und sinken immer abwechselnd. Nach einer
              Hochphase des Yang folgt zwingend ein Absinken von Yang und ein
              Ansteigen von Yin und umgekehrt.
            </p>

            <blockquote>
              <p>
                &bdquo;Das Urprinzip bewegt sich und erzeugt Yang. Wenn die
                Bewegung ihr Ende erreicht, so wird sie still, und diese Stille
                erzeugt Yin. Wenn diese Stille ihr Ende erreicht, dann geht sie
                wieder in Bewegung über. So haben wir abwechselnd bald
                Bewegung, bald Ruhe. Sie beide bilden zusammen die Basis, von
                der aus durch Abtrennung Yin und Yang entstehen und auf der die
                beiden Modi ruhen.&ldquo;
              </p>
              <footer>– Alfred Forke</footer>
            </blockquote>

            <p>
              Diese Vorstellung gehört zu einer volkstümlichen
              beziehungsweise für das Volk bestimmten Ethik des mittleren
              Maßes: So sollte das Volk in guten Zeiten nicht
              überschwänglich agieren und z. B. eine gute Ernte
              für schlechte Zeiten lagern. In schlechten Zeiten sollte im
              Volk Hoffnung erweckt werden, dass nach der Yin-Yang-Lehre nach
              diesen schlechten Zeiten auch zwingend wieder gute folgen werden.
            </p>
            <p>
              Die Wandlung von Yin und Yang stellt neben diesen
              Handlungsweisungen nach den altertümlichen Astronomen auch
              noch den Grund dar, warum Naturereignisse so ablaufen, wie sie
              ablaufen, aber auch warum diese Naturereignisse zu einem
              bestimmten Sozialverhalten führen. So sind Yin und Yang und
              deren Wandlung sowohl der Grund für den Wandel der
              Jahreszeiten wie für das Verhalten der Menschen, die sich an
              dem Wechsel der Jahreszeiten ausrichten.
            </p>
            <p>
              Yin und Yang können nicht gleichzeitig ansteigen oder
              absinken. Wenn Yang sich vergrößert, verringert sich
              Yin und umgekehrt.
            </p>
          </article>
        </div>
      </section>

      {/* Section: TAOYIN — section (bg-primary / white) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>TAOYIN</h2>
            <p>
              Tao Yin (manchmal als Taoist Yoga bezeichnet) ist eine Reihe von
              Übungen (vor allem in liegenden und sitzenden Positionen,
              aber auch in stehenden Positionen) von Taoisten, um ch&apos;i, die
              innere Energie des Körpers nach traditioneller chinesischer
              Medizin zu pflegen. Die Praxis von Tao Yin war ein Vorläufer
              des Qigong und wurde in chinesischen taoistischen Klöstern
              für die Gesundheit und zur spirituellen Kultivierung
              praktiziert. Tao Yin ist auch ein Element in der bekannten
              &bdquo;weichen Stil&ldquo; chinesischen Kampfkunst, T&apos;ai Chi Ch&apos;uan.
            </p>
            <p>
              Das Hauptziel von Tao Yin ist es, Gleichgewicht zwischen inneren
              und äußeren Energien zu schaffen und Körper, Geist
              und Seele neu zu beleben, und Kraft und Flexibilität in
              Muskeln und Sehnen zu entwickeln.
            </p>
            <p>
              Im <strong>Taoyin</strong> Zentrum Ingolstadt erweitern wir diese
              beiden Aspekte der taoistischen Gedankenwelt. Unsere heutige Welt
              hat bereits genug Yang aufzuweisen – der Yin Charakter dagegen
              fehlt. Wir möchten diesen Yin Charakter in uns stärken
              und in der Welt zur Geltung bringen für eine bessere und
              ausgewogenere Lebensweise für uns und unsere Kinder.
            </p>
            <p>
              Euer <strong>Taoyin</strong> Team
            </p>
          </article>
        </div>
      </section>

      {/* Angebote — section.is-secondary (reused component) */}
      <AngeboteSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}