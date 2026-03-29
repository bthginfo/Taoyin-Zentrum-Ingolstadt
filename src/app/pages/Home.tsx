import { Hero } from "../components/Hero";
import { DetailsSections } from "../components/DetailsSections";
import { AngeboteSection } from "../components/AngeboteSection";
import { PersoenlichesAngebot } from "../components/PersoenlichesAngebot";
import { PsychotherapieSection } from "../components/PsychotherapieSection";
import { NewsSection } from "../components/NewsSection";
import { FaqSection } from "../components/FaqSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CtaSection } from "../components/CtaSection";
import { SEO, extractSEOFromStory } from "../components/SEO";
import { useStoryblokPage } from "../../hooks/useStoryblokPage";
import { type HomeContent } from "../../types/storyblok";

export default function Home() {
  const { content, loading, error, story } = useStoryblokPage<HomeContent>("home");

  // Show loading only briefly, then show static content if Storyblok unavailable
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[--primary] mx-auto mb-4"></div>
          <p className="text-gray-600">Laden...</p>
        </div>
      </div>
    );
  }

  // If error or no content, use static fallback (components have their own data)
  // This allows the site to work without Storyblok CMS
  return (
    <>
      <SEO 
        title={content?.seo_title || "Taoyin Zentrum Ingolstadt – Qi Gong, Tao Yin & Chi Nei Tsang"}
        description={content?.seo_description || "Dein Zentrum für Qi Gong, Tao Yin, Chi Nei Tsang & ganzheitliche Psychotherapie in Ingolstadt. Kurse, Behandlungen & Ausbildungen für innere Ruhe, Vitalität und Lebensbalance."}
        keywords={content?.seo_keywords || "Qi Gong Ingolstadt, Tao Yin Ingolstadt, Chi Nei Tsang Ingolstadt, Psychotherapie Ingolstadt, Taoistische Praxis Ingolstadt, Meditation Ingolstadt, Bauchmassage Ingolstadt, Energiearbeit, Heilpraktiker Ingolstadt, Qi Gong Kurse, Chi Nei Tsang Ausbildung, Estela Fuchs"}
        url="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "Taoyin Zentrum Ingolstadt",
          "alternateName": "TaoBasis",
          "description": "Zentrum für Qi Gong, Tao Yin, Chi Nei Tsang und ganzheitliche Psychotherapie in Ingolstadt",
          "url": "https://taoyin-zentrum-ingolstadt.de",
          "image": "https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68a58efe38dc7923d3429fdd_Taoyin_Image%202.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bei der Schleifmühle 34b",
            "postalCode": "85049",
            "addressLocality": "Ingolstadt",
            "addressRegion": "Bayern",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.7616,
            "longitude": 11.4200
          },
          "email": "info@taoyin-zentrum.de",
          "telephone": "+4915115539416",
          "priceRange": "€€",
          "openingHours": "Mo-Fr 09:00-18:00",
          "sameAs": ["https://www.instagram.com/taoyin_zentrum/"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Angebote",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tao Basis Einführung", "description": "Qi Gong Kurs & Chi Nei Tsang Bauchmassage"}, "price": "280", "priceCurrency": "EUR"},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Medizinisches Qi Gong", "description": "Zehnerkarte für regelmäßige Qi Gong Übungsstunden"}, "price": "150", "priceCurrency": "EUR"},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Chi Nei Tsang Behandlung", "description": "Taoistische Bauchmassage"}, "price": "95", "priceCurrency": "EUR"}
            ]
          }
        }}
        {...(story ? extractSEOFromStory(story) : {})}
      />
      <Hero content={content} />
      <DetailsSections content={content} />
      <AngeboteSection content={content} />
      <PersoenlichesAngebot content={content} />
      <PsychotherapieSection content={content} />
      <NewsSection />
      <FaqSection content={content} />
      <TestimonialsSection content={content} />
      <CtaSection content={content} />
    </>
  );
}