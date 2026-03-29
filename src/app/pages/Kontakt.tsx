import { SEO } from "../components/SEO";

export default function Kontakt() {
  return (
    <>
      <SEO
        title="Kontakt & Anfahrt – Taoyin Zentrum Ingolstadt"
        description="So erreichen Sie das Taoyin Zentrum in Ingolstadt: Adresse, Telefon, E-Mail und WhatsApp. Bei der Schleifmühle 34b, 85049 Ingolstadt."
        keywords="Taoyin Zentrum Kontakt, Qi Gong Ingolstadt Adresse, Anfahrt Taoyin Zentrum, Schleifmühle Ingolstadt, Estela Fuchs Kontakt"
        url="/kontakt"
      />
      {/* Anfahrt & Kontakt — .section (cream) */}
      <section className="w-full bg-[var(--wf-neutral-primary)] text-foreground py-[var(--section-padding-mobile-p)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding)] overflow-clip">
        <div className="max-w-[var(--container-sm-width)] mx-auto px-[var(--container-padding)]">
          <article className="prose-custom">
            <h2>Anfahrt &amp; Kontakt</h2>
            <p>
              Sie erreichen mich telefonisch unter der Nummer:{" "}
              <a href="tel:+4915115539416">015115539416</a>
            </p>
            <p>
              Anfragen für das Taoyin Zentrum schicken Sie an:{" "}
              <a href="mailto:info@taoyin-zentrum.de">info@taoyin-zentrum.de</a>{" "}
              und für meine Praxis für Psychotherapie an:{" "}
              <a href="mailto:info@estela-fuchs.com">info@estela-fuchs.com</a>
            </p>
            <p>
              Sie können mich auch über{" "}
              <a
                href="https://wa.me/4915115539416"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>{" "}
              erreichen.
            </p>
            <p>
              So finden Sie in unser Taoyin Zentrum in Ingolstadt ( Bei der Schleifmühle 34b, 85049 Ingolstadt).
            </p>
          </article>

          {/* Google Maps Embed — w-embed w-iframe */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.0624516720795!2d11.420049176458845!3d48.76160367131921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479efe56d8b8cd61%3A0x3dc999cc772d6329!2sTaoyin%20Zentrum!5e0!3m2!1sde!2sde!4v1755087424680!5m2!1sde!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taoyin Zentrum Ingolstadt auf Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}
