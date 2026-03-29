// Base Storyblok story interface
export interface StoryblokStory<T = any> {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  content: T;
  lang: string;
}

// Asset type for images
export interface StoryblokAsset {
  id?: number;
  alt: string;
  name?: string;
  focus?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: "asset";
}

// Link type
export interface StoryblokLink {
  id?: string;
  url?: string;
  linktype: "story" | "url" | "email";
  fieldtype?: "multilink";
  cached_url: string;
}

// ─── Global Content (navbar, footer) ───
// Matches: migration script "global" component
export interface GlobalContent {
  component: "global";
  logo: StoryblokAsset;
  logo_white: StoryblokAsset;
  navbar_links: Array<{
    _uid: string;
    label: string;
    link: StoryblokLink;
    component: "nav_link";
  }>;
  footer_description: string;
  footer_email_1: string;
  footer_email_2: string;
  footer_instagram_url: string;
  footer_copyright: string;
  whatsapp_number: string;
  contact_phone: string;
  contact_email: string;
}

// ─── Home page ───
// Matches: migration script "page_home" component
export interface HomeContent {
  component: "page_home";
  // SEO
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  seo_image?: StoryblokAsset;

  // Hero
  hero_title?: string;
  hero_subtitle?: string;
  hero_image_1?: StoryblokAsset;
  hero_image_2?: StoryblokAsset;
  hero_button_1_text?: string;
  hero_button_1_link?: string;
  hero_button_2_text?: string;
  hero_button_2_link?: string;

  // Details Sections
  details_sections?: Array<{
    _uid: string;
    eyebrow?: string;
    title: string;
    description: string;
    image?: StoryblokAsset;
    button_text_1?: string;
    button_link_1?: StoryblokLink;
    button_text_2?: string;
    button_link_2?: StoryblokLink;
    image_left?: boolean;
    component: "detail_card";
  }>;

  // Angebote
  angebote_title?: string;
  angebote_cards?: Array<{
    _uid: string;
    price: string;
    price_note?: string;
    title: string;
    description: string;
    features?: string;
    phone?: string;
    email?: string;
    wide?: boolean;
    component: "angebot_card";
  }>;

  // Persoenliches Angebot
  personal_title?: string;
  personal_features?: Array<{
    _uid: string;
    text: string;
    component: "feature_item";
  }>;
  personal_button_text?: string;
  personal_button_link?: StoryblokLink;

  // Psychotherapie Section
  psycho_title?: string;
  psycho_description?: string;
  psycho_image?: StoryblokAsset;
  psycho_button_text?: string;
  psycho_button_link?: StoryblokLink;

  // FAQ
  faq_title?: string;
  faq_subtitle?: string;
  faq_items?: Array<{
    _uid: string;
    question: string;
    answer: string;
    component: "faq_item";
  }>;

  // Testimonials
  testimonials_eyebrow?: string;
  testimonials_title?: string;
  testimonials_subtitle?: string;
  testimonials_items?: Array<{
    _uid: string;
    text: string;
    author: string;
    rating: number;
    component: "testimonial_item";
  }>;

  // CTA
  cta_title?: string;
  cta_description?: string;
  cta_background?: StoryblokAsset;
  cta_buttons?: string;
}

// ─── Service pages (TaoYin, QiGong, ChiNeiTsang, Psychotherapie) ───
// Matches: migration script "page_service" component
export interface ServicePageContent {
  component: "page_service";
  seo_title?: string;
  seo_description?: string;
  hero_title: string;
  hero_subtitle?: string;
  hero_image?: StoryblokAsset;
  content_html?: string;
  sidebar_info?: string;
}

// ─── About page ───
// Matches: migration script "page_about" component
export interface AboutContent {
  component: "page_about";
  seo_title?: string;
  seo_description?: string;
  title: string;
  subtitle?: string;
  image?: StoryblokAsset;
  content_html?: string;
}

// ─── Kontakt page ───
// Matches: migration script "page_kontakt" component
export interface KontaktContent {
  component: "page_kontakt";
  seo_title?: string;
  seo_description?: string;
  title: string;
  subtitle?: string;
  address_html?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  map_embed?: string;
}

// ─── Static-only pages (not yet in Storyblok) ───

export interface ImpressumContent {
  component: "page_impressum";
  title?: string;
  content_html?: string;
}

export interface TherapienContent {
  component: "page_therapien";
  title?: string;
  subtitle?: string;
}

export interface BehandlungContent {
  component: "page_behandlung";
  title?: string;
  subtitle?: string;
}
