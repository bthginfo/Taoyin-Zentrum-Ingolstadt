import {StoryblokStory} from 'storyblok-generate-ts'

export interface AngebotCardStoryblok {
  price: string;
  price_note?: string;
  title: string;
  description?: string;
  features?: string;
  phone?: string;
  email?: string;
  wide: boolean;
  ort?: string;
  uhrzeit?: string;
  _uid: string;
  component: "angebot_card";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number | null;
  alt: string | null;
  name: string;
  focus: string | null;
  source: string | null;
  title: string | null;
  filename: string;
  copyright: string | null;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface DetailCardStoryblok {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: AssetStoryblok;
  button_text_1?: string;
  button_link_1?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  button_text_2?: string;
  button_link_2?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  image_left: boolean;
  _uid: string;
  component: "detail_card";
  [k: string]: any;
}

export interface FaqItemStoryblok {
  question: string;
  answer: string;
  _uid: string;
  component: "faq_item";
  [k: string]: any;
}

export interface FeatureItemStoryblok {
  text: string;
  _uid: string;
  component: "feature_item";
  [k: string]: any;
}

export interface GlobalStoryblok {
  footer_description?: string;
  footer_email_1?: string;
  footer_email_2?: string;
  footer_instagram_url?: string;
  whatsapp_number?: string;
  contact_phone?: string;
  contact_email?: string;
  _uid: string;
  component: "global";
  uuid?: string;
  [k: string]: any;
}

export interface NewsArticleStoryblok {
  title: string;
  excerpt?: string;
  body?: string;
  image?: AssetStoryblok;
  date?: string;
  seo_title?: string;
  seo_description?: string;
  _uid: string;
  component: "news_article";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface PageAboutStoryblok {
  seo_title?: string;
  seo_description?: string;
  title?: string;
  subtitle?: string;
  content_html?: RichtextStoryblok;
  _uid: string;
  component: "page_about";
  [k: string]: any;
}

export interface PageBehandlungStoryblok {
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
  _uid: string;
  component: "page_behandlung";
  [k: string]: any;
}

export interface PageChineiStoryblok {
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
  _uid: string;
  component: "page_chinei";
  [k: string]: any;
}

export interface PageHomeStoryblok {
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_subtitle?: string;
  hero_image_1?: AssetStoryblok;
  hero_image_2?: AssetStoryblok;
  hero_button_1_text?: string;
  hero_button_1_link?: string;
  hero_button_2_text?: string;
  hero_button_2_link?: string;
  details_sections?: DetailCardStoryblok[];
  angebote_title?: string;
  angebote_subtitle?: string;
  angebote_cards?: AngebotCardStoryblok[];
  personal_title?: string;
  personal_features?: FeatureItemStoryblok[];
  personal_button_text?: string;
  psycho_title?: string;
  psycho_description?: string;
  psycho_image?: AssetStoryblok;
  psycho_button_text?: string;
  faq_title?: string;
  faq_subtitle?: string;
  faq_items?: FaqItemStoryblok[];
  testimonials_eyebrow?: string;
  testimonials_title?: string;
  testimonials_subtitle?: string;
  testimonials_items?: TestimonialItemStoryblok[];
  cta_title?: string;
  cta_description?: string;
  cta_background?: AssetStoryblok;
  _uid: string;
  component: "page_home";
  [k: string]: any;
}

export interface PageImpressumStoryblok {
  title?: string;
  content_html?: RichtextStoryblok;
  _uid: string;
  component: "page_impressum";
  [k: string]: any;
}

export interface PageKontaktStoryblok {
  seo_title?: string;
  seo_description?: string;
  title?: string;
  subtitle?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  address?: string;
  _uid: string;
  component: "page_kontakt";
  [k: string]: any;
}

export interface PageNotfoundStoryblok {
  title?: string;
  text?: string;
  link_text?: string;
  _uid: string;
  component: "page_notfound";
  [k: string]: any;
}

export interface PagePsychoStoryblok {
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
  _uid: string;
  component: "page_psycho";
  [k: string]: any;
}

export interface PageQigongStoryblok {
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
  _uid: string;
  component: "page_qigong";
  [k: string]: any;
}

export interface PageServiceStoryblok {
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  hero_title?: string;
  hero_subtitle?: string;
  content_html?: RichtextStoryblok;
  _uid: string;
  component: "page_service";
  [k: string]: any;
}

export interface PageTaoyinStoryblok {
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
  _uid: string;
  component: "page_taoyin";
  [k: string]: any;
}

export interface PageTherapienStoryblok {
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
  _uid: string;
  component: "page_therapien";
  [k: string]: any;
}

export interface TestimonialItemStoryblok {
  text: string;
  author: string;
  rating?: string;
  _uid: string;
  component: "testimonial_item";
  [k: string]: any;
}
