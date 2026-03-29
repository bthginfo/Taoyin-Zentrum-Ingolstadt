import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  locale?: 'de_DE' | 'en_US' | 'es_ES';
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: object;
}

const DEFAULT_IMAGE = 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68a58efe38dc7923d3429fdd_Taoyin_Image%202.png';
const SITE_NAME = 'Taoyin Zentrum Ingolstadt';
const BASE_URL = 'https://taoyin-zentrum-ingolstadt.de';

export function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  author = 'Estela Fuchs',
  locale = 'de_DE',
  publishedTime,
  modifiedTime,
  canonical,
  noindex = false,
  schema,
}: SEOProps) {
  const location = useLocation();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const fullUrl = url ? `${BASE_URL}${url}` : `${BASE_URL}${location.pathname}`;
  const canonicalUrl = canonical || fullUrl;

  // Build language alternates based on current path
  const pathWithoutLang = location.pathname.replace(/^\/(en|es)\//, '/').replace(/^\/(en|es)$/, '/');
  const deUrl = `${BASE_URL}${pathWithoutLang}`;
  const enUrl = `${BASE_URL}/en${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  const esUrl = `${BASE_URL}/es${pathWithoutLang === '/' ? '' : pathWithoutLang}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:site_name" content={SITE_NAME} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter / WhatsApp */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags for local SEO */}
      <meta name="geo.region" content="DE-BY" />
      <meta name="geo.placename" content="Ingolstadt" />
      <meta name="geo.position" content="48.7616;11.4200" />
      <meta name="ICBM" content="48.7616, 11.4200" />

      {/* Language Alternatives */}
      <link rel="alternate" hreflang="de" href={deUrl} />
      <link rel="alternate" hreflang="en" href={enUrl} />
      <link rel="alternate" hreflang="es" href={esUrl} />
      <link rel="alternate" hreflang="x-default" href={deUrl} />

      {/* Schema.org structured data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

// Utility function to extract SEO data from Storyblok story
export function extractSEOFromStory(story: any) {
  const content = story?.content || {};
  
  return {
    title: content.seo_title || content.title || story.name,
    description: content.seo_description || content.description || '',
    keywords: content.seo_keywords || '',
    image: content.seo_image?.filename || content.hero_image?.filename || DEFAULT_IMAGE,
    url: story.full_slug ? `/${story.full_slug}` : undefined,
    publishedTime: story.published_at,
    modifiedTime: story.published_at || story.created_at,
  };
}