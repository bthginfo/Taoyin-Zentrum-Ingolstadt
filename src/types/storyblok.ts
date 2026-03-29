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

// ─── TaoYin page ───
export interface TaoYinContent {
  component: "page_taoyin";
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_text?: string;
  tao_p1?: string;
  tao_p2?: string;
  tao_p3?: string;
  tao_quote?: string;
  tao_quote_author?: string;
  yin_p1?: string;
  yin_subtitle?: string;
  yin_p2?: string;
  yin_p3?: string;
  yin_p4?: string;
  yin_p5?: string;
  yin_p6?: string;
  yin_quote?: string;
  yin_quote_author?: string;
  taoyin_p1?: string;
  taoyin_p2?: string;
  taoyin_p3?: string;
  taoyin_sign?: string;
}

// ─── QiGong page ───
export interface QiGongContent {
  component: "page_qigong";
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_text?: string;
  med_title?: string;
  med_p1?: string;
  when_title?: string;
  when_text?: string;
  conditions?: string;
  cert_title?: string;
  cert_p1?: string;
  cert_p2?: string;
  who_title?: string;
  who_p1?: string;
  who_p2?: string;
  who_p3?: string;
}

// ─── Chi Nei Tsang page ───
export interface ChiNeiTsangContent {
  component: "page_chinei";
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_text?: string;
  s1_title?: string;
  s1_p1?: string;
  s1_p2?: string;
  s1_p3?: string;
  s2_title?: string;
  s2_li1?: string;
  s2_li2?: string;
  s2_li3?: string;
  s2_li4?: string;
  s2_li5?: string;
  s2_p1?: string;
  s2_p2?: string;
  s3_title?: string;
  s3_p1?: string;
  s3_p2?: string;
  s3_p3?: string;
  s3_p4?: string;
  s3_p5?: string;
  s3_content_title?: string;
  s3_contents?: string;
}

// ─── Psychotherapie page ───
export interface PsychotherapieContent {
  component: "page_psycho";
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_text?: string;
  hero_btn1?: string;
  hero_btn2?: string;
  detail1_eyebrow?: string;
  detail1_title?: string;
  detail1_text?: string;
  detail1_link?: string;
  detail2_eyebrow?: string;
  detail2_title?: string;
  detail2_text?: string;
  detail2_link?: string;
  detail3_eyebrow?: string;
  detail3_title?: string;
  detail3_text?: string;
  detail3_link?: string;
  therapies_title?: string;
  therapies_more?: string;
  therapies_inquiry?: string;
  therapy_autogenes_title?: string;
  therapy_autogenes_text?: string;
  therapy_kognitiv_title?: string;
  therapy_kognitiv_text?: string;
  therapy_massage_title?: string;
  therapy_massage_text?: string;
  therapy_meditation_title?: string;
  therapy_meditation_text?: string;
  therapy_paar_title?: string;
  therapy_paar_text?: string;
  therapy_pmr_title?: string;
  therapy_pmr_text?: string;
  therapy_sokrat_title?: string;
  therapy_sokrat_text?: string;
  therapy_yoga_title?: string;
  therapy_yoga_text?: string;
}

// ─── Therapien detail page ───
export interface TherapienContent {
  component: "page_therapien";
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_text?: string;
  autogenes_title?: string;
  autogenes_text?: string;
  kognitiv_title?: string;
  kognitiv_detail?: string;
  kognitiv_li1?: string;
  kognitiv_li2?: string;
  kognitiv_li3?: string;
  kognitiv_li4?: string;
  kognitiv_detail2?: string;
  massage_title?: string;
  massage_text?: string;
  massage_effects_title?: string;
  massage_effects?: string;
  massage_detail2?: string;
  meditation_title?: string;
  meditation_text?: string;
  meditation_how_title?: string;
  meditation_how_text?: string;
  meditation_phys_title?: string;
  meditation_phys_list?: string;
  meditation_psych_title?: string;
  meditation_psych_list?: string;
  meditation_behav_title?: string;
  meditation_behav_list?: string;
  paar_title?: string;
  paar_text?: string;
  paar_goals?: string;
  sokrat_title?: string;
  sokrat_text?: string;
  yoga_title?: string;
  yoga_text?: string;
}

// ─── Behandlung page ───
export interface BehandlungContent {
  component: "page_behandlung";
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_text?: string;
  ihr_ziel?: string;
  orient_title?: string;
  orient_text?: string;
  stabil_title?: string;
  stabil_text?: string;
  unters_title?: string;
  unters_text?: string;
  die_behandlung?: string;
  beratung_title?: string;
  beratung_text?: string;
  einzel_title?: string;
  einzel_text1?: string;
  einzel_text2?: string;
  koerper_title?: string;
  koerper_text?: string;
}

// ─── About page ───
export interface AboutContent {
  component: "page_about";
  seo_title?: string;
  seo_description?: string;
  hero_name?: string;
  hero_subtitle?: string;
  article_title?: string;
  p1?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5_title?: string;
  p5?: string;
  image?: StoryblokAsset;
}

// ─── Kontakt page ───
export interface KontaktContent {
  component: "page_kontakt";
  seo_title?: string;
  seo_description?: string;
  title?: string;
  phone_intro?: string;
  email_intro?: string;
  email_praxis?: string;
  whatsapp_intro?: string;
  whatsapp_end?: string;
  directions?: string;
  map_title?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  address?: string;
}

// ─── Impressum page ───
export interface ImpressumContent {
  component: "page_impressum";
  title?: string;
  content_html?: string;
}

// ─── NotFound page ───
export interface NotFoundContent {
  component: "page_notfound";
  title?: string;
  text?: string;
  link_text?: string;
}

// ─── News article ───
export interface NewsArticleContent {
  component: "news_article";
  title: string;
  excerpt?: string;
  body?: string;
  image?: StoryblokAsset;
  date?: string;
  seo_title?: string;
  seo_description?: string;
}
