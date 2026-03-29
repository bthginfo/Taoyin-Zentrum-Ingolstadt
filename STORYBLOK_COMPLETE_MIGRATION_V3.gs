/**
 * STORYBLOK COMPLETE MIGRATION v4.0
 * 
 * Taoyin Zentrum Ingolstadt - Vollstaendige Migration
 * 
 * ARCHITEKTUR:
 * - 12 Nested Block Components + 11 Root Page Components = 23 total
 * - 11 Seiten x 3 Sprachen (DE/EN/ES) = 33 Stories + 3 Globals = 36 Stories
 * - 30+ Assets (alle Bilder aus den React-Komponenten)
 * - Alle Links als multilink (Auswahl: Anchor, Story, URL)
 * - 100% Content aus den echten React-Seiten
 * 
 * AUSFUEHRUNG (einzeln, nacheinander):
 *   1. testConnection()        - Verbindung pruefen
 *   2. cleanup()               - Optional: alten Content loeschen
 *   3. runStep1_Components()   - Alle 23 Components erstellen (~1 Min)
 *   4. runStep2_Folders()      - DE/EN/ES Ordner erstellen (~10 Sek)
 *   5. runStep3_GlobalAndHome()- Global + Home Stories (~2 Min)
 *   6. runStep4_ServicePages() - TaoYin, QiGong, ChiNeiTsang, Psycho (~3 Min)
 *   7. runStep5_OtherPages()   - About, Kontakt, Therapien, Behandlung, Impressum (~3 Min)
 *   8. runStep6_Config()       - Preview URLs (~10 Sek)
 * 
 * HINWEIS: Jeder Step ist einzeln ausfuehrbar und ueberspringt bereits existierende Items.
 */

// ============================================
// 1. CONFIGURATION
// ============================================
var CONFIG = {
  STORYBLOK_SPACE_ID: 'YOUR_SPACE_ID_HERE',
  STORYBLOK_MANAGEMENT_TOKEN: 'YOUR_MANAGEMENT_TOKEN_HERE',
  STORYBLOK_REGION: 'eu',
  PREVIEW_URL: 'https://taoyin-zentrum-ingolstadt.de/'
};

var BASE_URL = 'https://mapi.storyblok.com/v1/spaces/' + CONFIG.STORYBLOK_SPACE_ID;
var HEADERS = {
  'Authorization': CONFIG.STORYBLOK_MANAGEMENT_TOKEN,
  'Content-Type': 'application/json'
};

// ============================================
// 2. CACHES
// ============================================
var componentCache = null;
var folderIdCache = {};
var assetCache = {};

// ============================================
// 3. ALL ASSETS (30+ Bilder, komplett aus React-Komponenten)
// ============================================
var ASSETS = {
  // Logos
  logo: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d6bafdd0696561be5520_tao_logo.png',
  logoWhite: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d8b72344be05aef5a64a_tao_logo_white.png',
  
  // Home Hero
  heroSpa: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/6890d6745cc734423847d58b_9ae3166a-4496-49f1-9d77-c97f40759bdb.avif',
  heroMassage: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370c877743c4a7999300_Estela-byaylin-3.jpg',
  
  // Home Detail Cards
  taoBasis: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg',
  qiGongIntro: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53713513520b6bbe5b786_Estela-byaylin-33-min.jpg',
  chiBehandlung: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371f98928ab373b92ff9_Estela-byaylin-59-min.jpg',
  
  // Psychotherapie
  psychoRelax: 'https://cdn.prod.website-files.com/image-generation-assets/c79b83fd-d5a5-46a1-8aa0-b49f43616c5e.avif',
  psycho: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif',
  estelaByaylin29: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537114c0ae0a617d65064_Estela-byaylin-29-min.jpg',
  
  // Estela Portraits
  estela: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370f3e66ed943079d4c6_Estela-byaylin-26-min.jpg',
  estelaByaylin35: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371895543153b432f2fa_Estela-byaylin-35-min.jpg',
  
  // CTA Background (used across many pages)
  ctaBackground: 'https://cdn.prod.website-files.com/image-generation-assets/ee125b47-41aa-4ec5-a593-18b12a1fca27.avif',
  
  // TaoYin Hero Images
  taoyinHero1: 'https://cdn.prod.website-files.com/image-generation-assets/ec1e1865-4371-4deb-b640-940bfd2c1974.avif',
  taoyinHero2: 'https://cdn.prod.website-files.com/image-generation-assets/3cc8d6ee-98ad-4bfb-ae1b-618e78b0ce21.avif',
  yinYangSymbol: 'https://cdn.prod.website-files.com/wordpress/wp-content/uploads/2017/01/Yin_yang.svg_.png',
  
  // QiGong Hero Images
  qigongHero1: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370e9aba7881ec031049_Estela-byaylin-13.jpg',
  qigongHero2: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53719850089c1594b1703_Estela-byaylin-42.jpg',
  qigongHero3: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370bf7333a00c99cc3e1_Estela-byaylin-14.jpg',
  qigongHero4: 'https://cdn.prod.website-files.com/image-generation-assets/d38b1252-bc48-440f-9886-7d0d97209543.avif',
  
  // Chi Nei Tsang
  cntHero: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371e7929cdfb71466f5a_Estela-byaylin-60-min.jpg',
  
  // Behandlung
  behandlungNatur: 'https://cdn.prod.website-files.com/image-generation-assets/b745265f-4158-4a26-82c2-6957d4c4e11e.avif',
  behandlungPraxis: 'https://cdn.prod.website-files.com/image-generation-assets/490e72ce-966a-433d-96d3-28f46b7a18a1.avif',
  
  // Medizinisches QiGong
  medQiGong: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53718065ce01562873ef1_Estela-byaylin-43.jpg',
  
  // Chi Nei Tsang Ausbildung
  chiAusbildung: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537205b0c2bd091d7b6a5_Estela-byaylin-58-min.jpg',
  
  // WhatsApp
  whatsapp: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c835a8e0044c154a36077_WhatsApp.svg.webp'
};

// ============================================
// 4. HELPER FUNCTIONS
// ============================================

function makeRequest(endpoint, method, payload) {
  method = method || 'GET';
  var options = {
    method: method,
    headers: HEADERS,
    muteHttpExceptions: true
  };
  if (payload) {
    options.payload = JSON.stringify(payload);
  }
  var url = BASE_URL + endpoint;
  var response = UrlFetchApp.fetch(url, options);
  var code = response.getResponseCode();
  
  // Rate limit handling
  if (code === 429) {
    Logger.log('   Rate limited, waiting 3s...');
    Utilities.sleep(3000);
    response = UrlFetchApp.fetch(url, options);
    code = response.getResponseCode();
  }
  
  if (code >= 400) {
    var error = response.getContentText();
    Logger.log('API Error ' + code + ' on ' + method + ' ' + endpoint + ': ' + error);
    throw new Error('API Error ' + code + ': ' + error);
  }
  var text = response.getContentText();
  return text ? JSON.parse(text) : null;
}

function componentExists(name) {
  if (!componentCache) {
    var response = makeRequest('/components');
    componentCache = response.components || [];
  }
  return componentCache.some(function(c) { return c.name === name; });
}

function createComponent(data) {
  if (!componentExists(data.component.name)) {
    Logger.log('   + ' + data.component.name);
    var result = makeRequest('/components', 'POST', data);
    if (componentCache && result && result.component) {
      componentCache.push(result.component);
    }
    Utilities.sleep(400);
  } else {
    Logger.log('   = ' + data.component.name + ' (exists)');
  }
}

function getStory(slug) {
  try {
    var response = makeRequest('/stories?by_slugs=' + slug);
    return response.stories && response.stories.length > 0 ? response.stories[0] : null;
  } catch (e) { return null; }
}

function createStory(data) {
  var slug = data.story.full_slug || (data.story.parent_id ? '' : data.story.slug);
  // For stories in folders, check by searching
  var existing = null;
  if (data.story.parent_id) {
    try {
      var response = makeRequest('/stories?with_parent=' + data.story.parent_id + '&per_page=100');
      if (response.stories) {
        existing = response.stories.find(function(s) { return s.slug === data.story.slug; });
      }
    } catch (e) { /* ignore */ }
  } else {
    existing = getStory(data.story.slug);
  }
  
  if (!existing) {
    Logger.log('   + ' + (data.story.name || data.story.slug));
    makeRequest('/stories', 'POST', data);
    Utilities.sleep(400);
  } else {
    Logger.log('   = ' + (data.story.name || data.story.slug) + ' (exists)');
  }
}

function getFolderId(lang) {
  if (folderIdCache[lang]) return folderIdCache[lang];
  var folder = getStory(lang);
  var id = folder ? folder.id : 0;
  folderIdCache[lang] = id;
  return id;
}

function uid() { return Utilities.getUuid(); }

function asset(key) {
  return { filename: ASSETS[key] || '', alt: key, title: key };
}

function ml(type, url) {
  // multilink helper: type = 'url' | 'story' | 'email'
  if (type === 'url' || type === 'anchor') {
    return { linktype: 'url', url: url, cached_url: url };
  }
  if (type === 'email') {
    return { linktype: 'email', url: url, cached_url: url };
  }
  // story
  return { linktype: 'story', cached_url: url };
}

// ============================================
// 5. ALL COMPONENTS
// ============================================

function runStep1_Components() {
  Logger.log('=== STEP 1: Creating all 23 components ===\n');
  componentCache = null;
  
  // ── NESTED BLOCKS (12) ──
  Logger.log('--- Nested Blocks ---');
  
  createComponent({ component: {
    name: 'nav_link',
    display_name: 'Navigation Link',
    is_nestable: true,
    schema: {
      label: { type: 'text', required: true, pos: 0 },
      link: { type: 'multilink', required: true, pos: 1 }
    }
  }});
  
  createComponent({ component: {
    name: 'detail_card',
    display_name: 'Detail Card (Text + Bild)',
    is_nestable: true,
    schema: {
      eyebrow: { type: 'text', pos: 0 },
      title: { type: 'text', required: true, pos: 1 },
      description: { type: 'textarea', required: true, pos: 2 },
      image: { type: 'asset', filetypes: ['images'], pos: 3 },
      button_text_1: { type: 'text', pos: 4 },
      button_link_1: { type: 'multilink', pos: 5 },
      button_text_2: { type: 'text', pos: 6 },
      button_link_2: { type: 'multilink', pos: 7 },
      image_left: { type: 'boolean', default_value: false, pos: 8 }
    }
  }});
  
  createComponent({ component: {
    name: 'angebot_card',
    display_name: 'Angebot/Preis Card',
    is_nestable: true,
    schema: {
      price: { type: 'text', required: true, pos: 0 },
      price_note: { type: 'text', pos: 1 },
      title: { type: 'text', required: true, pos: 2 },
      description: { type: 'textarea', required: true, pos: 3 },
      features: { type: 'textarea', pos: 4 },
      phone: { type: 'text', pos: 5 },
      email: { type: 'text', pos: 6 },
      wide: { type: 'boolean', default_value: false, pos: 7 }
    }
  }});
  
  createComponent({ component: {
    name: 'faq_item',
    display_name: 'FAQ Eintrag',
    is_nestable: true,
    schema: {
      question: { type: 'text', required: true, pos: 0 },
      answer: { type: 'textarea', required: true, pos: 1 }
    }
  }});
  
  createComponent({ component: {
    name: 'testimonial_item',
    display_name: 'Testimonial',
    is_nestable: true,
    schema: {
      author: { type: 'text', required: true, pos: 0 },
      text: { type: 'textarea', required: true, pos: 1 },
      rating: { type: 'number', default_value: 5, pos: 2 }
    }
  }});
  
  createComponent({ component: {
    name: 'feature_item',
    display_name: 'Feature/Vorteil',
    is_nestable: true,
    schema: {
      text: { type: 'textarea', required: true, pos: 0 }
    }
  }});
  
  createComponent({ component: {
    name: 'cta_button',
    display_name: 'CTA Button',
    is_nestable: true,
    schema: {
      label: { type: 'text', required: true, pos: 0 },
      link: { type: 'multilink', required: true, pos: 1 },
      variant: { type: 'text', default_value: 'primary', pos: 2 }
    }
  }});
  
  createComponent({ component: {
    name: 'content_section',
    display_name: 'Content Section (Titel + Text)',
    is_nestable: true,
    schema: {
      title: { type: 'text', pos: 0 },
      body: { type: 'textarea', required: true, pos: 1 },
      bg_variant: { type: 'text', default_value: 'white', pos: 2 }
    }
  }});
  
  createComponent({ component: {
    name: 'therapy_card',
    display_name: 'Therapie Karte',
    is_nestable: true,
    schema: {
      title: { type: 'text', required: true, pos: 0 },
      description: { type: 'textarea', required: true, pos: 1 }
    }
  }});
  
  createComponent({ component: {
    name: 'checklist_item',
    display_name: 'Checklist Eintrag',
    is_nestable: true,
    schema: {
      text: { type: 'text', required: true, pos: 0 }
    }
  }});
  
  createComponent({ component: {
    name: 'hero_image_item',
    display_name: 'Hero Bild',
    is_nestable: true,
    schema: {
      image: { type: 'asset', filetypes: ['images'], required: true, pos: 0 },
      alt_text: { type: 'text', pos: 1 }
    }
  }});
  
  createComponent({ component: {
    name: 'detail_block',
    display_name: 'Detail Block (Bild + Text alternierend)',
    is_nestable: true,
    schema: {
      eyebrow: { type: 'text', pos: 0 },
      title: { type: 'text', required: true, pos: 1 },
      description: { type: 'textarea', required: true, pos: 2 },
      image: { type: 'asset', filetypes: ['images'], pos: 3 },
      link_text: { type: 'text', pos: 4 },
      link: { type: 'multilink', pos: 5 },
      image_left: { type: 'boolean', default_value: false, pos: 6 }
    }
  }});
  
  // ── ROOT COMPONENTS (11) ──
  Logger.log('\n--- Root Components ---');
  
  // 1. GLOBAL
  createComponent({ component: {
    name: 'global',
    display_name: 'Global (Navbar/Footer/Kontakt)',
    is_root: true,
    schema: {
      tab_navbar: { type: 'tab', display_name: 'Navbar', pos: 0 },
      logo: { type: 'asset', filetypes: ['images'], required: true, pos: 1 },
      logo_white: { type: 'asset', filetypes: ['images'], pos: 2 },
      navbar_links: { type: 'bloks', restrict_components: true, component_whitelist: ['nav_link'], pos: 3 },
      tab_footer: { type: 'tab', display_name: 'Footer', pos: 4 },
      footer_description: { type: 'textarea', pos: 5 },
      footer_email_1: { type: 'text', pos: 6 },
      footer_email_2: { type: 'text', pos: 7 },
      footer_instagram_url: { type: 'text', pos: 8 },
      footer_copyright: { type: 'text', pos: 9 },
      tab_contact: { type: 'tab', display_name: 'Kontaktdaten', pos: 10 },
      whatsapp_number: { type: 'text', pos: 11 },
      contact_phone: { type: 'text', pos: 12 },
      contact_email: { type: 'text', pos: 13 }
    }
  }});
  
  // 2. PAGE: HOME
  createComponent({ component: {
    name: 'page_home',
    display_name: 'Seite: Startseite',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      seo_image: { type: 'asset', filetypes: ['images'], pos: 4 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 5 },
      hero_title: { type: 'text', required: true, pos: 6 },
      hero_subtitle: { type: 'textarea', pos: 7 },
      hero_image_1: { type: 'asset', filetypes: ['images'], pos: 8 },
      hero_image_2: { type: 'asset', filetypes: ['images'], pos: 9 },
      hero_button_1_text: { type: 'text', pos: 10 },
      hero_button_1_link: { type: 'multilink', pos: 11 },
      hero_button_2_text: { type: 'text', pos: 12 },
      hero_button_2_link: { type: 'multilink', pos: 13 },
      tab_details: { type: 'tab', display_name: 'Detail Sections', pos: 14 },
      details_sections: { type: 'bloks', restrict_components: true, component_whitelist: ['detail_card'], pos: 15 },
      tab_angebote: { type: 'tab', display_name: 'Angebote', pos: 16 },
      angebote_title: { type: 'text', pos: 17 },
      angebote_cards: { type: 'bloks', restrict_components: true, component_whitelist: ['angebot_card'], pos: 18 },
      tab_personal: { type: 'tab', display_name: 'Persoenliches Angebot', pos: 19 },
      personal_title: { type: 'text', pos: 20 },
      personal_features: { type: 'bloks', restrict_components: true, component_whitelist: ['feature_item'], pos: 21 },
      personal_button_text: { type: 'text', pos: 22 },
      personal_button_link: { type: 'multilink', pos: 23 },
      tab_psycho: { type: 'tab', display_name: 'Psychotherapie Section', pos: 24 },
      psycho_title: { type: 'text', pos: 25 },
      psycho_description: { type: 'textarea', pos: 26 },
      psycho_image: { type: 'asset', filetypes: ['images'], pos: 27 },
      psycho_button_text: { type: 'text', pos: 28 },
      psycho_button_link: { type: 'multilink', pos: 29 },
      tab_faq: { type: 'tab', display_name: 'FAQ', pos: 30 },
      faq_title: { type: 'text', pos: 31 },
      faq_subtitle: { type: 'textarea', pos: 32 },
      faq_items: { type: 'bloks', restrict_components: true, component_whitelist: ['faq_item'], pos: 33 },
      tab_testimonials: { type: 'tab', display_name: 'Testimonials', pos: 34 },
      testimonials_eyebrow: { type: 'text', pos: 35 },
      testimonials_title: { type: 'text', pos: 36 },
      testimonials_subtitle: { type: 'textarea', pos: 37 },
      testimonials_items: { type: 'bloks', restrict_components: true, component_whitelist: ['testimonial_item'], pos: 38 },
      tab_cta: { type: 'tab', display_name: 'CTA Section', pos: 39 },
      cta_title: { type: 'text', pos: 40 },
      cta_description: { type: 'textarea', pos: 41 },
      cta_background: { type: 'asset', filetypes: ['images'], pos: 42 },
      cta_buttons: { type: 'bloks', restrict_components: true, component_whitelist: ['cta_button'], pos: 43 }
    }
  }});
  
  // 3. PAGE: TAO YIN
  createComponent({ component: {
    name: 'page_taoyin',
    display_name: 'Seite: Tao Yin',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 4 },
      hero_title: { type: 'text', required: true, pos: 5 },
      hero_subtitle: { type: 'textarea', pos: 6 },
      hero_images: { type: 'bloks', restrict_components: true, component_whitelist: ['hero_image_item'], pos: 7 },
      tab_content: { type: 'tab', display_name: 'Content Sections', pos: 8 },
      content_sections: { type: 'bloks', restrict_components: true, component_whitelist: ['content_section'], pos: 9 },
      youtube_url: { type: 'text', pos: 10 },
      yin_yang_image: { type: 'asset', filetypes: ['images'], pos: 11 },
      tab_angebote: { type: 'tab', display_name: 'Angebote', pos: 12 },
      show_angebote: { type: 'boolean', default_value: true, pos: 13 },
      angebote_title: { type: 'text', pos: 14 }
    }
  }});
  
  // 4. PAGE: QI GONG
  createComponent({ component: {
    name: 'page_qigong',
    display_name: 'Seite: Qi Gong',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 4 },
      hero_title: { type: 'text', required: true, pos: 5 },
      hero_subtitle: { type: 'textarea', pos: 6 },
      hero_images: { type: 'bloks', restrict_components: true, component_whitelist: ['hero_image_item'], pos: 7 },
      tab_content: { type: 'tab', display_name: 'Content', pos: 8 },
      content_sections: { type: 'bloks', restrict_components: true, component_whitelist: ['content_section'], pos: 9 },
      tab_checklist: { type: 'tab', display_name: 'Anwendungsgebiete', pos: 10 },
      checklist_title: { type: 'text', pos: 11 },
      checklist_items: { type: 'bloks', restrict_components: true, component_whitelist: ['checklist_item'], pos: 12 },
      tab_angebote: { type: 'tab', display_name: 'Angebote', pos: 13 },
      show_angebote: { type: 'boolean', default_value: true, pos: 14 },
      angebote_title: { type: 'text', pos: 15 }
    }
  }});
  
  // 5. PAGE: CHI NEI TSANG
  createComponent({ component: {
    name: 'page_chineitsung',
    display_name: 'Seite: Chi Nei Tsang',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 4 },
      hero_title: { type: 'text', required: true, pos: 5 },
      hero_subtitle: { type: 'textarea', pos: 6 },
      hero_image: { type: 'asset', filetypes: ['images'], pos: 7 },
      tab_content: { type: 'tab', display_name: 'Content', pos: 8 },
      content_sections: { type: 'bloks', restrict_components: true, component_whitelist: ['content_section'], pos: 9 },
      tab_wirkungen: { type: 'tab', display_name: 'Wirkungen', pos: 10 },
      wirkungen_title: { type: 'text', pos: 11 },
      wirkungen_items: { type: 'bloks', restrict_components: true, component_whitelist: ['checklist_item'], pos: 12 },
      wirkungen_outro: { type: 'textarea', pos: 13 },
      tab_ausbildung: { type: 'tab', display_name: 'Ausbildung', pos: 14 },
      ausbildung_title: { type: 'text', pos: 15 },
      ausbildung_intro: { type: 'textarea', pos: 16 },
      ausbildung_items: { type: 'bloks', restrict_components: true, component_whitelist: ['checklist_item'], pos: 17 },
      tab_angebote: { type: 'tab', display_name: 'Angebote', pos: 18 },
      show_angebote: { type: 'boolean', default_value: true, pos: 19 },
      angebote_title: { type: 'text', pos: 20 }
    }
  }});
  
  // 6. PAGE: PSYCHOTHERAPIE
  createComponent({ component: {
    name: 'page_psychotherapie',
    display_name: 'Seite: Psychotherapie',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 4 },
      hero_title: { type: 'text', required: true, pos: 5 },
      hero_subtitle: { type: 'textarea', pos: 6 },
      hero_images: { type: 'bloks', restrict_components: true, component_whitelist: ['hero_image_item'], pos: 7 },
      hero_button_1_text: { type: 'text', pos: 8 },
      hero_button_1_link: { type: 'multilink', pos: 9 },
      hero_button_2_text: { type: 'text', pos: 10 },
      hero_button_2_link: { type: 'multilink', pos: 11 },
      tab_details: { type: 'tab', display_name: 'Detail Blocks', pos: 12 },
      detail_blocks: { type: 'bloks', restrict_components: true, component_whitelist: ['detail_block'], pos: 13 },
      tab_therapien: { type: 'tab', display_name: 'Therapie-Karten', pos: 14 },
      therapien_title: { type: 'text', pos: 15 },
      therapy_cards: { type: 'bloks', restrict_components: true, component_whitelist: ['therapy_card'], pos: 16 },
      therapien_button_1_text: { type: 'text', pos: 17 },
      therapien_button_1_link: { type: 'multilink', pos: 18 },
      therapien_button_2_text: { type: 'text', pos: 19 },
      therapien_button_2_link: { type: 'multilink', pos: 20 },
      tab_cta: { type: 'tab', display_name: 'CTA Section', pos: 21 },
      cta_title: { type: 'text', pos: 22 },
      cta_description: { type: 'textarea', pos: 23 },
      cta_background: { type: 'asset', filetypes: ['images'], pos: 24 },
      cta_buttons: { type: 'bloks', restrict_components: true, component_whitelist: ['cta_button'], pos: 25 }
    }
  }});
  
  // 7. PAGE: ABOUT
  createComponent({ component: {
    name: 'page_about',
    display_name: 'Seite: Ueber mich',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 4 },
      hero_title: { type: 'text', required: true, pos: 5 },
      hero_subtitle: { type: 'textarea', pos: 6 },
      hero_image: { type: 'asset', filetypes: ['images'], pos: 7 },
      tab_content: { type: 'tab', display_name: 'Content', pos: 8 },
      content_html: { type: 'textarea', pos: 9 },
      tab_cta: { type: 'tab', display_name: 'CTA Section', pos: 10 },
      cta_title: { type: 'text', pos: 11 },
      cta_description: { type: 'textarea', pos: 12 },
      cta_background: { type: 'asset', filetypes: ['images'], pos: 13 },
      cta_buttons: { type: 'bloks', restrict_components: true, component_whitelist: ['cta_button'], pos: 14 }
    }
  }});
  
  // 8. PAGE: KONTAKT
  createComponent({ component: {
    name: 'page_kontakt',
    display_name: 'Seite: Kontakt',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_content: { type: 'tab', display_name: 'Content', pos: 4 },
      title: { type: 'text', required: true, pos: 5 },
      subtitle: { type: 'textarea', pos: 6 },
      content_html: { type: 'textarea', pos: 7 },
      tab_contact: { type: 'tab', display_name: 'Kontaktdaten', pos: 8 },
      phone: { type: 'text', pos: 9 },
      email: { type: 'text', pos: 10 },
      email_2: { type: 'text', pos: 11 },
      whatsapp: { type: 'text', pos: 12 },
      address: { type: 'textarea', pos: 13 },
      tab_map: { type: 'tab', display_name: 'Karte', pos: 14 },
      map_embed_url: { type: 'text', pos: 15 }
    }
  }});
  
  // 9. PAGE: THERAPIEN
  createComponent({ component: {
    name: 'page_therapien',
    display_name: 'Seite: Therapien (Detail)',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 4 },
      hero_title: { type: 'text', required: true, pos: 5 },
      hero_subtitle: { type: 'textarea', pos: 6 },
      hero_images: { type: 'bloks', restrict_components: true, component_whitelist: ['hero_image_item'], pos: 7 },
      tab_content: { type: 'tab', display_name: 'Therapie Sections', pos: 8 },
      therapy_sections: { type: 'bloks', restrict_components: true, component_whitelist: ['content_section'], pos: 9 },
      tab_cta: { type: 'tab', display_name: 'CTA Section', pos: 10 },
      cta_title: { type: 'text', pos: 11 },
      cta_description: { type: 'textarea', pos: 12 },
      cta_background: { type: 'asset', filetypes: ['images'], pos: 13 },
      cta_buttons: { type: 'bloks', restrict_components: true, component_whitelist: ['cta_button'], pos: 14 }
    }
  }});
  
  // 10. PAGE: BEHANDLUNG
  createComponent({ component: {
    name: 'page_behandlung',
    display_name: 'Seite: Behandlung/Ziele',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      seo_keywords: { type: 'text', pos: 3 },
      tab_hero: { type: 'tab', display_name: 'Hero', pos: 4 },
      hero_title: { type: 'text', required: true, pos: 5 },
      hero_subtitle: { type: 'textarea', pos: 6 },
      hero_images: { type: 'bloks', restrict_components: true, component_whitelist: ['hero_image_item'], pos: 7 },
      tab_content: { type: 'tab', display_name: 'Content Sections', pos: 8 },
      content_sections: { type: 'bloks', restrict_components: true, component_whitelist: ['content_section'], pos: 9 },
      tab_cta: { type: 'tab', display_name: 'CTA Section', pos: 10 },
      cta_title: { type: 'text', pos: 11 },
      cta_description: { type: 'textarea', pos: 12 },
      cta_background: { type: 'asset', filetypes: ['images'], pos: 13 },
      cta_buttons: { type: 'bloks', restrict_components: true, component_whitelist: ['cta_button'], pos: 14 }
    }
  }});
  
  // 11. PAGE: IMPRESSUM
  createComponent({ component: {
    name: 'page_impressum',
    display_name: 'Seite: Impressum & Datenschutz',
    is_root: true,
    schema: {
      tab_seo: { type: 'tab', display_name: 'SEO', pos: 0 },
      seo_title: { type: 'text', pos: 1 },
      seo_description: { type: 'textarea', pos: 2 },
      tab_impressum: { type: 'tab', display_name: 'Impressum', pos: 3 },
      impressum_html: { type: 'textarea', pos: 4 },
      tab_datenschutz: { type: 'tab', display_name: 'Datenschutz', pos: 5 },
      datenschutz_html: { type: 'textarea', pos: 6 }
    }
  }});
  
  Logger.log('\n=== STEP 1 COMPLETE: All components created ===');
  Logger.log('Next: run runStep2_Folders()');
}

// ============================================
// 6. FOLDER STRUCTURE
// ============================================

function runStep2_Folders() {
  Logger.log('=== STEP 2: Creating folder structure ===\n');
  folderIdCache = {};
  
  var languages = ['de', 'en', 'es'];
  languages.forEach(function(lang) {
    if (!getStory(lang)) {
      Logger.log('   + Folder: ' + lang.toUpperCase());
      makeRequest('/stories', 'POST', {
        story: { name: lang.toUpperCase(), slug: lang, is_folder: true, parent_id: 0 }
      });
      Utilities.sleep(400);
    } else {
      Logger.log('   = Folder: ' + lang.toUpperCase() + ' (exists)');
    }
  });
  
  Logger.log('\n=== STEP 2 COMPLETE ===');
  Logger.log('Next: run runStep3_GlobalAndHome()');
}

// ============================================
// PLACEHOLDER STEPS (filled in subsequent parts)
// ============================================

// ============================================
// STEP 5: OTHER PAGES (About, Kontakt, Therapien, Behandlung, Impressum)
// ============================================

function runStep5_OtherPages() {
  Logger.log('=== STEP 5: Other Pages ===\n');
  folderIdCache = {};
  var langs = ['de', 'en', 'es'];
  langs.forEach(function(lang) {
    Logger.log('--- ' + lang.toUpperCase() + ' ---');
    createAboutStory(lang);
    createKontaktStory(lang);
    createTherapienStory(lang);
    createBehandlungStory(lang);
    createImpressumStory(lang);
  });
  Logger.log('\n=== STEP 5 COMPLETE ===');
  Logger.log('ALL MIGRATION STEPS DONE! Run runStep6_PreviewConfig() to finish.');
}

// ── ABOUT ──

function createAboutStory(lang) {
  var seo = {
    de: { t: 'Ueber mich - Psychotherapie & Taoistische Praxis Ingolstadt', d: 'Erfahre mehr ueber meinen Weg: Psychotherapie, Qi Gong und Taoismus in Ingolstadt.', kw: 'Estela Fuchs, Psychotherapie Ingolstadt, Qi Gong, Taoismus' },
    en: { t: 'About Me - Psychotherapy & Taoist Practice Ingolstadt', d: 'Learn more about my journey: Psychotherapy, Qi Gong and Taoism in Ingolstadt.', kw: 'Estela Fuchs, Psychotherapy Ingolstadt, Qi Gong, Taoism' },
    es: { t: 'Sobre Mi - Psicoterapia y Practica Taoista Ingolstadt', d: 'Conoce mi camino: Psicoterapia, Qi Gong y Taoismo en Ingolstadt.', kw: 'Estela Fuchs, Psicoterapia Ingolstadt, Qi Gong, Taoismo' }
  };
  var hero = {
    de: { t: 'Estela Fuchs', s: 'Lernen Sie mich kennen und erfahren Sie mehr ueber mich und meinen Ueberzeugungen.' },
    en: { t: 'Estela Fuchs', s: 'Get to know me and learn more about me and my convictions.' },
    es: { t: 'Estela Fuchs', s: 'Conoceme y descubre mas sobre mi y mis convicciones.' }
  };
  var body = {
    de: 'Ueber mich - mein Weg mit TaoBasis\n\nNach einer laengeren Pause und einer herausfordernden Heilungszeit moechte ich mich neu vorstellen. Vor einiger Zeit erlitt ich einen Bruch am Fussgelenk. Dieser Unfall brachte mich aus dem Gleichgewicht und verlangte viel Geduld und Achtsamkeit. Doch gerade in dieser Phase durfte ich erfahren, wie tiefgreifend Qi Gong und die taoistischen Heilmethoden wirken.\n\nSie unterstuetzten meine koerperliche Regeneration.\nSie gaben mir Kraft, wieder sicher auf meinen Beinen zu stehen.\nSie oeffneten mir die Tuer zu einer noch tieferen Erfahrung von Heilung und Vertrauen.\n\nSeit ueber 30 Jahren gehe ich den Weg des Taoismus. Viele Jahre habe ich Qi Gong geuebt, weitergegeben und Menschen begleitet. Doch diese persoenliche Erfahrung hat meine Ueberzeugung vertieft: Taoistische Praktiken sind nicht nur Bewegungen, sondern lebendige Werkzeuge fuer Heilung, Balance und innere Staerke.\n\nParallel dazu habe ich mich intensiv mit Psychotherapie beschaeftigt. In meiner heutigen Arbeit fliessen diese beiden Wege zusammen: die tiefgehende innere Arbeit der Psychotherapie und die koerperlich-seelische Dimension der taoistischen Praxis. Diese Verbindung ermoeglicht es, nicht nur auf einer geistigen Ebene Themen zu bearbeiten, sondern Heilung und Veraenderung ganzheitlich zu erfahren.\n\nHeute moechte ich das, was mir selbst so viel geschenkt hat, weitergeben - authentisch, mitfuehlend und voller Hingabe.\n\nMein Angebot an Sie:\nNicht nur Techniken zu lernen, sondern eine lebendige Praxis zu erfahren, die Koerper, Geist und Seele verbindet - und die Ihnen im Alltag neue Energie, Vertrauen und innere Ruhe schenkt. Gleichzeitig biete ich einen geschuetzten psychotherapeutischen Raum, in dem persoenliche Themen angeschaut, verarbeitet und in neue Staerke verwandelt werden koennen.',
    en: 'About Me - My Path with TaoBasis\n\nAfter a longer break and a challenging healing period, I would like to reintroduce myself. Some time ago I suffered a broken ankle. This accident threw me off balance and demanded much patience and mindfulness. But it was precisely in this phase that I experienced how profoundly Qi Gong and Taoist healing methods work.\n\nThey supported my physical regeneration.\nThey gave me the strength to stand firmly on my feet again.\nThey opened the door to an even deeper experience of healing and trust.\n\nFor over 30 years I have been walking the path of Taoism. I have practiced and taught Qi Gong for many years and accompanied people. But this personal experience deepened my conviction: Taoist practices are not just movements, but living tools for healing, balance and inner strength.\n\nIn parallel, I have studied psychotherapy intensively. In my work today, these two paths come together: the deep inner work of psychotherapy and the physical-spiritual dimension of Taoist practice.\n\nToday I want to pass on what has given me so much - authentically, compassionately and with full dedication.\n\nMy offer to you:\nNot just learning techniques, but experiencing a living practice that connects body, mind and soul.',
    es: 'Sobre Mi - Mi Camino con TaoBasis\n\nDespues de una larga pausa y un periodo de curacion desafiante, me gustaria presentarme de nuevo. Hace un tiempo sufri una fractura de tobillo. Este accidente me desestabilizo y exigio mucha paciencia y atencion plena. Pero fue precisamente en esta fase donde experimente lo profundamente que funcionan el Qi Gong y los metodos de curacion taoistas.\n\nApoyaron mi regeneracion fisica.\nMe dieron fuerza para volver a estar firme.\nMe abrieron la puerta a una experiencia aun mas profunda de curacion y confianza.\n\nDesde hace mas de 30 anos camino por el sendero del Taoismo. Hoy quiero transmitir lo que tanto me ha dado - de forma autentica, compasiva y con plena dedicacion.'
  };
  var s = seo[lang]; var h = hero[lang]; var cta = ctaFields(lang);
  createStory({
    story: { name: 'About ' + lang.toUpperCase(), slug: 'about', parent_id: getFolderId(lang),
      content: {
        component: 'page_about',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        hero_title: h.t, hero_subtitle: h.s,
        hero_image: asset('heroMassage'),
        body: body[lang],
        cta_title: cta.cta_title, cta_description: cta.cta_description,
        cta_background: cta.cta_background, cta_buttons: cta.cta_buttons
      }
    }, publish: 1
  });
}

// ── KONTAKT ──

function createKontaktStory(lang) {
  var seo = {
    de: { t: 'Kontakt & Anfahrt - Taoyin Zentrum Ingolstadt', d: 'So finden Sie uns: Kontakt, Anfahrt und Oeffnungszeiten des Taoyin Zentrums Ingolstadt.', kw: 'Kontakt, Anfahrt, Taoyin Zentrum, Ingolstadt' },
    en: { t: 'Contact & Directions - Taoyin Center Ingolstadt', d: 'How to find us: Contact, directions and opening hours of the Taoyin Center Ingolstadt.', kw: 'Contact, Directions, Taoyin Center, Ingolstadt' },
    es: { t: 'Contacto y Direccion - Centro Taoyin Ingolstadt', d: 'Como encontrarnos: Contacto, direccion y horarios del Centro Taoyin Ingolstadt.', kw: 'Contacto, Direccion, Centro Taoyin, Ingolstadt' }
  };
  var title = { de: 'Anfahrt & Kontakt', en: 'Directions & Contact', es: 'Direccion y Contacto' };
  var body = {
    de: 'Sie erreichen mich telefonisch unter der Nummer: 015115539416\n\nAnfragen fuer das Taoyin Zentrum schicken Sie an: info@taoyin-zentrum.de und fuer meine Praxis fuer Psychotherapie an: info@estela-fuchs.com\n\nSie koennen mich auch ueber WhatsApp erreichen.\n\nSo finden Sie in unser Taoyin Zentrum in Ingolstadt (Bei der Schleifmuehle 34b, 85049 Ingolstadt).',
    en: 'You can reach me by phone at: 015115539416\n\nFor Taoyin Center inquiries, please email: info@taoyin-zentrum.de and for my psychotherapy practice: info@estela-fuchs.com\n\nYou can also reach me via WhatsApp.\n\nHow to find our Taoyin Center in Ingolstadt (Bei der Schleifmuehle 34b, 85049 Ingolstadt).',
    es: 'Puede contactarme por telefono al: 015115539416\n\nPara consultas del Centro Taoyin, escriba a: info@taoyin-zentrum.de y para mi practica de psicoterapia: info@estela-fuchs.com\n\nTambien puede contactarme por WhatsApp.\n\nComo encontrar nuestro Centro Taoyin en Ingolstadt (Bei der Schleifmuehle 34b, 85049 Ingolstadt).'
  };
  var s = seo[lang];
  createStory({
    story: { name: 'Kontakt ' + lang.toUpperCase(), slug: 'kontakt', parent_id: getFolderId(lang),
      content: {
        component: 'page_kontakt',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        page_title: title[lang],
        body: body[lang],
        address: 'Bei der Schleifmuehle 34b, 85049 Ingolstadt',
        google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.0624516720795!2d11.420049176458845!3d48.76160367131921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479efe56d8b8cd61%3A0x3dc999cc772d6329!2sTaoyin%20Zentrum!5e0!3m2!1sde!2sde!4v1755087424680!5m2!1sde!2sde',
        phone: '+4915115539416',
        email_zentrum: 'info@taoyin-zentrum.de',
        email_praxis: 'info@estela-fuchs.com',
        whatsapp_url: 'https://wa.me/4915115539416'
      }
    }, publish: 1
  });
}

// ── THERAPIEN ──

function createTherapienStory(lang) {
  var seo = {
    de: { t: 'Therapien im Detail - Taoyin Zentrum Ingolstadt', d: 'Erfahren Sie mehr zu meinen therapeutischen Ansaetzen: Autogenes Training, Kognitive Verhaltenstherapie, Massage, Meditation, Paartherapie und mehr.', kw: 'Therapien, Autogenes Training, Verhaltenstherapie, Massage, Meditation, Paartherapie, Ingolstadt' },
    en: { t: 'Therapies in Detail - Taoyin Center Ingolstadt', d: 'Learn more about my therapeutic approaches: Autogenic Training, CBT, Massage, Meditation, Couples Therapy and more.', kw: 'Therapies, Autogenic Training, CBT, Massage, Meditation, Couples Therapy, Ingolstadt' },
    es: { t: 'Terapias en Detalle - Centro Taoyin Ingolstadt', d: 'Conoce mis enfoques terapeuticos: Entrenamiento Autogeno, TCC, Masaje, Meditacion y mas.', kw: 'Terapias, Entrenamiento Autogeno, TCC, Masaje, Meditacion, Ingolstadt' }
  };
  var hero = {
    de: { t: 'Meine Therapien im Detail', s: 'Erfahren Sie mehr zu meinen therapeutischen Ansaetzen und verstehen Sie meinen ganzheitlichen Ansatz.' },
    en: { t: 'My Therapies in Detail', s: 'Learn more about my therapeutic approaches and understand my holistic approach.' },
    es: { t: 'Mis Terapias en Detalle', s: 'Conoce mas sobre mis enfoques terapeuticos y comprende mi enfoque holistico.' }
  };
  var s = seo[lang]; var h = hero[lang]; var cta = ctaFields(lang);
  createStory({
    story: { name: 'Therapien ' + lang.toUpperCase(), slug: 'therapien', parent_id: getFolderId(lang),
      content: {
        component: 'page_therapien',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        hero_title: h.t, hero_subtitle: h.s,
        hero_images: [
          { _uid: uid(), component: 'hero_image_item', image: asset('taoyinHero1'), alt_text: 'Ruhige Landschaft' },
          { _uid: uid(), component: 'hero_image_item', image: asset('therapienHero'), alt_text: 'Estela in der Praxis' },
          { _uid: uid(), component: 'hero_image_item', image: asset('ctaBackground'), alt_text: 'Hintergrund' }
        ],
        content_sections: getTherapienSections(lang),
        cta_title: cta.cta_title,
        cta_description: lang === 'de' ? 'Lernen Sie die Kraft der Integration von Koerper, Geist und Seele fuer Sich zu nutzen.' : lang === 'en' ? 'Learn to harness the power of integrating body, mind and soul.' : 'Aprende a aprovechar el poder de integrar cuerpo, mente y alma.',
        cta_background: cta.cta_background,
        cta_buttons: ctaButtons(lang)
      }
    }, publish: 1
  });
}

function getTherapienSections(lang) {
  if (lang === 'de') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Autogenes Training', body: 'Autogenes Training ist ein auf Autosuggestion basierendes Entspannungsverfahren. Es wurde vom Berliner Psychiater Johannes Heinrich Schultz aus der Hypnose entwickelt, 1926 erstmals vorgestellt und 1932 in seinem Buch "Das autogene Training" publiziert. Heute ist das autogene Training eine weit verbreitete und - beispielsweise in Deutschland und Oesterreich sogar gesetzlich - anerkannte Psychotherapiemethode.', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Kognitive Verhaltenstherapie', body: 'Im Mittelpunkt der kognitiven Therapieverfahren stehen Kognitionen. Kognitionen umfassen Einstellungen, Gedanken, Bewertungen und Ueberzeugungen. Die kognitiven Therapieverfahren gehen davon aus, dass die Art und Weise, wie wir denken, bestimmt, wie wir uns fuehlen und verhalten und wie wir koerperlich reagieren.\n\nSchwerpunkte der Therapie sind:\n- die Bewusstmachung von Kognitionen\n- die Ueberpruefung von Kognitionen und Schlussfolgerungen auf ihre Angemessenheit\n- die Korrektur von irrationalen Einstellungen\n- der Transfer der korrigierten Einstellungen ins konkrete Verhalten\n\nDie kognitive Therapie stellt somit die aktive Gestaltung des Wahrnehmungsprozesses in den Vordergrund, weil in letzter Instanz nicht die objektive Realitaet, sondern die subjektive Sicht des Betrachtenden ueber das Verhalten entscheidet.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Massage', body: 'Die Massage dient zur mechanischen Beeinflussung von Haut, Bindegewebe und Muskulatur durch Dehnungs-, Zug- und Druckreiz. Die Wirkung der Massage erstreckt sich von der behandelten Stelle des Koerpers ueber den gesamten Organismus und schliesst auch die Psyche mit ein.\n\nWie wirkt die Massage auf die Gesundheit?\n- Lokale Steigerung der Durchblutung\n- Senkung von Blutdruck und Pulsfrequenz\n- Entspannung der Muskulatur\n- Loesen von Verklebungen und Narben\n- Verbesserte Wundheilung\n- Schmerzlinderung\n- Einwirken auf innere Organe ueber Reflexboegen\n- Psychische Entspannung\n- Reduktion von Stress\n- Verbesserung des Zellstoffwechsels im Gewebe\n- Entspannung von Haut und Bindegewebe\n- Beeinflussung des vegetativen Nervensystems\n\nDie Massage eignet sich hervorragend dafuer, die eigene Koerperwahrnehmung zu verbessern und kann zur Vorbeugung bei Stress und ergaenzend zur Therapie von Angststoerungen oder Depressionen eingesetzt werden.', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Meditation', body: 'Meditation ist eine in vielen Religionen und Kulturen ausgeuebte spirituelle Praxis. Durch Achtsamkeits- oder Konzentrationsuebungen soll sich der Geist beruhigen und sammeln. In oestlichen Kulturen gilt sie als eine grundlegende bewusstseinserweiternde Uebung.\n\nMeditation staerkt die physische Gesundheit:\n- Reduzierung von Bluthochdruck, verlangsamter Herzschlag\n- Verbesserter Umgang mit chronischem Schmerz\n- Staerkung des Immunsystems\n- Reduzierung von Kopfschmerzen\n- Entspannende Wirkung bei Stress\n\nMeditation staerkt die psychische Gesundheit:\n- Reduzierung von Angstzustaenden\n- Bessere Erholung bei Burnout und Depression\n- Minimierung von Schlafstoerungen\n- Reduzierung von Stress, Tinnitus, Zwangsstoerung\n\nMeditation unterstuetzt Verhaltensaenderungen:\n- Reduzierung von Aggression\n- Genesung von Alkoholsucht\n- Minderung von Essstoerungen\n- Ueberwindung von Lernschwierigkeiten\n- Verbesserter Umgang mit Sucht', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Paartherapie', body: 'Gemeinsam einen Schritt vorwaerts machen - in Einzel- und Paargespraechen, ergaenzt mit Elementen der taoistischen Traditionen in Meditation, Yoga und Qigong, verfolgen wir folgende Ziele:\n\n- Beziehungsprobleme verstehen und herausfinden, wie Ihre Liebesbeziehung funktionieren kann\n- Sich selbst und den Partner besser erkennen und verstehen\n- Neue Werkzeuge in die Hand bekommen, die in allen Lebenslagen nuetzlich sind', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Sokratischer Dialog', body: 'Der Sokratische Dialog ist eine Fragetechnik, derer sich Therapeuten bedienen, wenn es im therapeutisch-beratenden Gespraech um Begriffserklaerung und Entscheidungsfindung geht. Es ist ein Prozess des kritischen Hinterfragens von Argumenten. So sollen Strukturen und Verhaltensmuster sichtbar, das eigene Denken und Handeln verstehbar und damit auch veraenderbar werden.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Yoga, Qigong, Tai Chi', body: 'Yoga, Qigong und Tai Chi sind Techniken, die an der Koerperstruktur und an der Koerperwahrnehmung arbeiten. In Verbindung mit Meditation und Massage fuehren diese Praktiken zu einem neuen Selbstbewusstsein, eine positivere und annehmendere Haltung zu sich selbst und zum eigenen Koerper und ein zunehmendes Gefuehl fuer die eigene Gesundheit.', bg_variant: 'white' }
    ];
  }
  if (lang === 'en') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Autogenic Training', body: 'Autogenic training is a relaxation technique based on autosuggestion, developed by Berlin psychiatrist Johannes Heinrich Schultz from hypnosis. Today it is a widely recognized psychotherapy method.', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Cognitive Behavioral Therapy', body: 'Cognitive therapy focuses on cognitions - attitudes, thoughts, evaluations and beliefs. It assumes that the way we think determines how we feel, behave and physically react.\n\nTherapy focuses on:\n- Making cognitions conscious\n- Checking cognitions for appropriateness\n- Correcting irrational attitudes\n- Transferring corrected attitudes into concrete behavior', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Massage', body: 'Massage serves to mechanically influence skin, connective tissue and muscles. Its effect extends from the treated area throughout the entire organism, including the psyche.\n\nEffects include: improved circulation, lower blood pressure, muscle relaxation, pain relief, stress reduction, and improved cell metabolism.', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Meditation', body: 'Meditation is a spiritual practice found in many religions and cultures. Through mindfulness or concentration exercises, the mind calms and collects itself.\n\nPhysical benefits: reduced blood pressure, better pain management, stronger immune system.\n\nMental benefits: reduced anxiety, better recovery from burnout and depression, reduced sleep disorders.\n\nBehavioral benefits: reduced aggression, recovery from addiction, overcoming learning difficulties.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Couples Therapy', body: 'Taking a step forward together - in individual and couples sessions, supplemented with Taoist traditions.\n\nGoals:\n- Understanding relationship problems\n- Better recognizing yourself and your partner\n- Getting new tools useful in all life situations', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Socratic Dialogue', body: 'The Socratic Dialogue is a questioning technique for clarification and decision-making. It is a process of critically questioning arguments to make structures and behavioral patterns visible and changeable.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Yoga, Qigong, Tai Chi', body: 'Yoga, Qigong and Tai Chi work on body structure and awareness. Combined with meditation and massage, they lead to new self-awareness, a more positive attitude toward oneself and an increasing sense of one\'s own health.', bg_variant: 'white' }
    ];
  }
  return [
    { _uid: uid(), component: 'content_section', title: 'Entrenamiento Autogeno', body: 'El entrenamiento autogeno es una tecnica de relajacion basada en la autosugerencia, desarrollada por el psiquiatra berlines Johannes Heinrich Schultz.', bg_variant: 'white' },
    { _uid: uid(), component: 'content_section', title: 'Terapia Cognitivo-Conductual', body: 'La terapia cognitiva se centra en las cogniciones: actitudes, pensamientos, evaluaciones y creencias. Asume que la forma de pensar determina como nos sentimos y comportamos.', bg_variant: 'neutral' },
    { _uid: uid(), component: 'content_section', title: 'Masaje', body: 'El masaje influye en piel, tejido conectivo y musculatura. Su efecto se extiende por todo el organismo, incluyendo la psique.', bg_variant: 'white' },
    { _uid: uid(), component: 'content_section', title: 'Meditacion', body: 'La meditacion es una practica espiritual de muchas culturas. A traves de ejercicios de atencion plena, la mente se calma.', bg_variant: 'neutral' },
    { _uid: uid(), component: 'content_section', title: 'Terapia de Pareja', body: 'Dar un paso adelante juntos, en sesiones individuales y de pareja, complementadas con tradiciones taoistas.', bg_variant: 'white' },
    { _uid: uid(), component: 'content_section', title: 'Dialogo Socratico', body: 'El Dialogo Socratico es una tecnica de cuestionamiento para clarificacion y toma de decisiones.', bg_variant: 'neutral' },
    { _uid: uid(), component: 'content_section', title: 'Yoga, Qigong, Tai Chi', body: 'Yoga, Qigong y Tai Chi trabajan la estructura y percepcion corporal. Combinados con meditacion y masaje, conducen a nueva conciencia de uno mismo.', bg_variant: 'white' }
  ];
}

// ── BEHANDLUNG ──

function createBehandlungStory(lang) {
  var seo = {
    de: { t: 'Ihr Ziel, meine Behandlung - Psychotherapie Ingolstadt', d: 'Erfahren Sie mehr ueber das Ziel der Behandlung und mein Vorgehen. Damit wir zusammen den richtigen Ansatz finden.', kw: 'Behandlung, Psychotherapie, Beratung, Einzelsitzungen, Ingolstadt' },
    en: { t: 'Your Goal, My Treatment - Psychotherapy Ingolstadt', d: 'Learn more about the treatment goal and my approach.', kw: 'Treatment, Psychotherapy, Counseling, Individual sessions, Ingolstadt' },
    es: { t: 'Tu Objetivo, Mi Tratamiento - Psicoterapia Ingolstadt', d: 'Conoce mas sobre el objetivo del tratamiento y mi enfoque.', kw: 'Tratamiento, Psicoterapia, Asesoramiento, Sesiones individuales, Ingolstadt' }
  };
  var hero = {
    de: { t: 'Ihr Ziel, meine Behandlung', s: 'Erfahren Sie mehr ueber das Ziel der Behandlung und mein Vorgehen. Damit wir zusammen den richtigen Ansatz finden koennen.' },
    en: { t: 'Your Goal, My Treatment', s: 'Learn more about the treatment goal and my approach. So that together we can find the right approach.' },
    es: { t: 'Tu Objetivo, Mi Tratamiento', s: 'Conoce mas sobre el objetivo del tratamiento y mi enfoque para que juntos encontremos el camino correcto.' }
  };
  var s = seo[lang]; var h = hero[lang]; var cta = ctaFields(lang);
  createStory({
    story: { name: 'Behandlung ' + lang.toUpperCase(), slug: 'psychotherapie/ziele', parent_id: getFolderId(lang),
      content: {
        component: 'page_behandlung',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        hero_title: h.t, hero_subtitle: h.s,
        hero_images: [
          { _uid: uid(), component: 'hero_image_item', image: asset('behandlungHero1'), alt_text: 'Natur und Heilung' },
          { _uid: uid(), component: 'hero_image_item', image: asset('behandlungHero2'), alt_text: 'Praxisraum' },
          { _uid: uid(), component: 'hero_image_item', image: asset('estelaByaylin29'), alt_text: 'Estela Fuchs' }
        ],
        content_sections: getBehandlungSections(lang),
        cta_title: cta.cta_title,
        cta_description: lang === 'de' ? 'Lernen Sie die Kraft der Integration von Koerper, Geist und Seele fuer Sich zu nutzen.' : lang === 'en' ? 'Learn to harness the power of integrating body, mind and soul.' : 'Aprende a aprovechar el poder de integrar cuerpo, mente y alma.',
        cta_background: cta.cta_background,
        cta_buttons: ctaButtons(lang)
      }
    }, publish: 1
  });
}

function getBehandlungSections(lang) {
  if (lang === 'de') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Ihr Ziel', body: 'Orientierung\n\nSie stehen an einem Scheideweg? Wichtige Entscheidungen liegen vor Ihnen? Sie suchen nach Halt und Orientierung? nach innerer Ruhe und Sicherheit, ohne von externen Faktoren getrieben und beeinflusst zu werden? Sie suchen nach Distanz vom taeglichen Alltag? Sie sind auf der Suche nach Ihrem inneren Selbst?\n\nStabilisierung\n\nSie befinden sich in einer Krise? Ihr Leben hat sich in beabsichtigter oder unbeabsichtigter Weise veraendert und Sie fuehlen sich ueberfordert? Sie finden keine Erholung und sehen wenig Alternativen? Sie fuehlen sich krank oder schwach obwohl der Arzt Ihnen keinen Befund nennen kann? Sie suchen Hilfe ueber das Gespraech mit Anderen?\n\nUnterstuetzung\n\nSie fuehlen sich unwohl? Sie leiden unter psychischen oder koerperlichen Symptomen und machen sich Gedanken dazu? Sie suchen Heilpraktiker der Psychotherapie als Ansprechpartner und Berater? Sie suchen nach konkreten psychotherapeutischen Behandlungsmoeglichkeiten?', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Die Behandlung', body: 'Beratung\n\nLernen Sie uns kennen. Im Gespraech tasten wir uns an Ihr ganz persoenliches Beduerfnis heran und entscheiden gemeinsam die fuer Sie beste Vorgehensweise. Das erste Gespraech ist unverbindlich und kostenfrei und erlaubt Ihnen, Einblick in unser Denken und Handeln zu gewinnen.\n\nEinzelsitzungen\n\nIn einzelnen Sitzungen gehen wir Schritt fuer Schritt auf Ihre Beduerfnisse ein und arbeiten an den fuer Sie wichtigen Themen. Gerne koennen die verschiedenen Methoden auch nur zum Kennenlernen ausprobiert werden. Unser Ziel ist es, dass Sie die Verantwortung fuer Ihre eigene Gesundheit uebernehmen koennen und selbst entscheiden, was Ihnen gut tut.\n\nKoerperorientierte Psychotherapie\n\nWir verbinden die Elemente der Meditation und der Massage in eine wirksame Behandlungsform nach den Leitlinien des Universal Healing Tao und des Chi Nei Tsang nach Grossmeister Mantak Chia. Diese lassen sich sehr gut mit den bestehenden klassischen Psychotherapieformen integrieren. Wir unterstuetzen Sie sehr gerne auf dem Weg zu Ihrer Genesung.', bg_variant: 'neutral' }
    ];
  }
  if (lang === 'en') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Your Goal', body: 'Orientation\n\nAre you at a crossroads? Important decisions ahead? Looking for stability and orientation? For inner peace and security?\n\nStabilization\n\nAre you in a crisis? Has your life changed and you feel overwhelmed? You cannot find rest and see few alternatives?\n\nSupport\n\nDo you feel unwell? Do you suffer from psychological or physical symptoms? Are you looking for a psychotherapy practitioner as a contact and advisor?', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'The Treatment', body: 'Counseling\n\nGet to know us. In conversation, we approach your personal needs and decide together on the best course of action. The first consultation is non-binding and free.\n\nIndividual Sessions\n\nStep by step, we address your needs and work on your important topics. Our goal is for you to take responsibility for your own health.\n\nBody-Oriented Psychotherapy\n\nWe combine meditation and massage elements following Universal Healing Tao and Chi Nei Tsang guidelines according to Grandmaster Mantak Chia. These integrate well with classical psychotherapy.', bg_variant: 'neutral' }
    ];
  }
  return [
    { _uid: uid(), component: 'content_section', title: 'Tu Objetivo', body: 'Orientacion\n\nEstas en una encrucijada? Decisiones importantes por delante? Buscas estabilidad y orientacion?\n\nEstabilizacion\n\nEstas en crisis? Tu vida ha cambiado y te sientes abrumado?\n\nApoyo\n\nTe sientes mal? Sufres sintomas psicologicos o fisicos? Buscas un psicoterapeuta como contacto y asesor?', bg_variant: 'white' },
    { _uid: uid(), component: 'content_section', title: 'El Tratamiento', body: 'Asesoramiento\n\nConocenos. En la conversacion nos acercamos a tus necesidades personales. La primera consulta es gratuita y sin compromiso.\n\nSesiones Individuales\n\nPaso a paso, abordamos tus necesidades. Nuestro objetivo es que asumas la responsabilidad de tu propia salud.\n\nPsicoterapia Corporal\n\nCombinamos elementos de meditacion y masaje segun las directrices del Universal Healing Tao y Chi Nei Tsang de Mantak Chia.', bg_variant: 'neutral' }
  ];
}

// ── IMPRESSUM ──

function createImpressumStory(lang) {
  var seo = {
    de: { t: 'Impressum & Datenschutz - Taoyin Zentrum Ingolstadt', d: 'Impressum und Datenschutzerklaerung des Taoyin Zentrums Ingolstadt.', kw: 'Impressum, Datenschutz, Taoyin Zentrum, Ingolstadt' },
    en: { t: 'Legal Notice & Privacy - Taoyin Center Ingolstadt', d: 'Legal notice and privacy policy of the Taoyin Center Ingolstadt.', kw: 'Legal Notice, Privacy, Taoyin Center, Ingolstadt' },
    es: { t: 'Aviso Legal y Privacidad - Centro Taoyin Ingolstadt', d: 'Aviso legal y politica de privacidad del Centro Taoyin Ingolstadt.', kw: 'Aviso Legal, Privacidad, Centro Taoyin, Ingolstadt' }
  };
  var s = seo[lang];
  createStory({
    story: { name: 'Impressum ' + lang.toUpperCase(), slug: 'impressum', parent_id: getFolderId(lang),
      content: {
        component: 'page_impressum',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        impressum_title: lang === 'de' ? 'Impressum' : lang === 'en' ? 'Legal Notice' : 'Aviso Legal',
        impressum_body: getImpressumBody(lang),
        datenschutz_title: lang === 'de' ? 'Datenschutz' : lang === 'en' ? 'Privacy Policy' : 'Politica de Privacidad',
        datenschutz_body: getDatenschutzBody(lang)
      }
    }, publish: 1
  });
}

function getImpressumBody(lang) {
  if (lang === 'de') {
    return 'Angaben gemaess § 5 TMG:\n\nEstela und Paul Fuchs\nUniversal Healing Tao Center Ingolstadt\nVenusstrasse 10\n85080 Gaimersheim\n\nEstela und Paul Fuchs\nTao Yin Zentrum Ingolstadt\nBei der Schleifmuehle 34b\n85049 Ingolstadt\n\nKontakt:\nTelefon: +49 (0) 8458 343641\nTelefax: +49 (0) 8458 343641\nE-Mail: pkfuchs@hotmail.com\n\nUmsatzsteuer-ID:\nUmsatzsteuer-Identifikationsnummer gemaess §27 a Umsatzsteuergesetz:\n171/218/80989\n\nAufsichtsbehoerde:\nLandratsamt Gaimersheim';
  }
  if (lang === 'en') {
    return 'Information according to § 5 TMG:\n\nEstela and Paul Fuchs\nUniversal Healing Tao Center Ingolstadt\nVenusstrasse 10\n85080 Gaimersheim\n\nEstela and Paul Fuchs\nTao Yin Center Ingolstadt\nBei der Schleifmuehle 34b\n85049 Ingolstadt\n\nContact:\nPhone: +49 (0) 8458 343641\nFax: +49 (0) 8458 343641\nEmail: pkfuchs@hotmail.com\n\nVAT ID: 171/218/80989\n\nSupervisory authority: Landratsamt Gaimersheim';
  }
  return 'Informacion segun § 5 TMG:\n\nEstela y Paul Fuchs\nUniversal Healing Tao Center Ingolstadt\nVenusstrasse 10\n85080 Gaimersheim\n\nEstela y Paul Fuchs\nCentro Tao Yin Ingolstadt\nBei der Schleifmuehle 34b\n85049 Ingolstadt\n\nContacto:\nTelefono: +49 (0) 8458 343641\nEmail: pkfuchs@hotmail.com\n\nID Fiscal: 171/218/80989';
}

function getDatenschutzBody(lang) {
  if (lang === 'de') {
    return 'Datenschutzerklaerung\nStand: 12. April 2023\n\nINHALTSUEBERSICHT\n- Verantwortlicher\n- Uebersicht der Verarbeitungen\n- Massgebliche Rechtsgrundlagen\n- Sicherheitsmassnahmen\n- Loeschung von Daten\n- Einsatz von Cookies\n- Bereitstellung des Onlineangebotes und Webhosting\n- Kontakt- und Anfragenverwaltung\n- Praesenzen in sozialen Netzwerken (Social Media)\n- Plugins und eingebettete Funktionen sowie Inhalte\n- Aenderung und Aktualisierung der Datenschutzerklaerung\n- Rechte der betroffenen Personen\n\nARTEN DER VERARBEITETEN DATEN\n- Kontaktdaten\n- Inhaltsdaten\n- Nutzungsdaten\n- Meta-, Kommunikations- und Verfahrensdaten\n\nKATEGORIEN BETROFFENER PERSONEN\n- Kommunikationspartner\n- Nutzer\n\nZWECKE DER VERARBEITUNG\n- Kontaktanfragen und Kommunikation\n- Sicherheitsmassnahmen\n- Verwaltung und Beantwortung von Anfragen\n- Feedback\n- Marketing\n- Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit\n- Informationstechnische Infrastruktur\n\nMASSGEBLICHE RECHTSGRUNDLAGEN\nEinwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) - Die betroffene Person hat ihre Einwilligung in die Verarbeitung gegeben.\nBerechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) - Die Verarbeitung ist zur Wahrung der berechtigten Interessen erforderlich.\n\nSICHERHEITSMASSNAHMEN\nWir treffen nach Massgabe der gesetzlichen Vorgaben geeignete technische und organisatorische Massnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewaehrleisten.\n\nEINSATZ VON COOKIES\nCookies sind kleine Textdateien, die Informationen auf Endgeraeten speichern. Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein.\n\nKONTAKT- UND ANFRAGENVERWALTUNG\nBei der Kontaktaufnahme mit uns werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen erforderlich ist.\n\nAllgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): Nutzer koennen die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und einen Widerspruch gemaess Art. 21 DSGVO einlegen.';
  }
  if (lang === 'en') {
    return 'Privacy Policy\nAs of: April 12, 2023\n\nTYPES OF DATA PROCESSED\n- Contact data\n- Content data\n- Usage data\n- Meta, communication and procedural data\n\nPURPOSES OF PROCESSING\n- Contact inquiries and communication\n- Security measures\n- Managing and responding to inquiries\n- Providing our online services\n\nLEGAL BASES\nConsent (Art. 6 para. 1 lit. a GDPR)\nLegitimate interests (Art. 6 para. 1 lit. f GDPR)\n\nCOOKIES\nWe use cookies in accordance with legal requirements.\n\nUsers can revoke their consent at any time and object to processing according to Art. 21 GDPR.';
  }
  return 'Politica de Privacidad\nFecha: 12 de abril de 2023\n\nTIPOS DE DATOS PROCESADOS\n- Datos de contacto\n- Datos de contenido\n- Datos de uso\n\nFINALIDADES DEL PROCESAMIENTO\n- Consultas de contacto y comunicacion\n- Medidas de seguridad\n- Prestacion de nuestros servicios en linea\n\nBASES LEGALES\nConsentimiento (Art. 6 parr. 1 lit. a RGPD)\nIntereses legitimos (Art. 6 parr. 1 lit. f RGPD)\n\nCOOKIES\nUtilizamos cookies de acuerdo con la normativa legal.\n\nLos usuarios pueden revocar su consentimiento en cualquier momento.';
}

// ============================================
// SHARED HELPERS
// ============================================

function ctaButtons(lang) {
  var labels = {
    de: ['Telefon', 'E-Mail', 'WhatsApp'],
    en: ['Phone', 'Email', 'WhatsApp'],
    es: ['Telefono', 'Correo', 'WhatsApp']
  };
  var l = labels[lang] || labels.de;
  return [
    { _uid: uid(), component: 'cta_button', label: l[0], link: ml('url', 'tel:+4915115539416'), variant: 'primary' },
    { _uid: uid(), component: 'cta_button', label: l[1], link: ml('url', 'mailto:info@taoyin-zentrum.de?subject=Neue%20Anfrage%20Taoyin%20Zentrum'), variant: 'primary' },
    { _uid: uid(), component: 'cta_button', label: l[2], link: ml('url', 'https://wa.me/4915115539416'), variant: 'primary' }
  ];
}

function ctaFields(lang) {
  var t = {
    de: { title: 'Finde deine Mitte. Spuere dein Chi.', desc: 'Tauche ein in einen Raum fuer Achtsamkeit, Heilung und innere Balance. Entdecke sanfte taoistische Praktiken, die Koerper, Geist und Seele verbinden. Hier findest du Ruhe, neue Energie und Inspiration fuer deinen Alltag - unabhaengig von Erfahrung oder Lebensphase. Komm an, atme durch und lass dich begleiten auf deinem Weg zu mehr Wohlbefinden.' },
    en: { title: 'Find your center. Feel your Chi.', desc: 'Immerse yourself in a space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul. Find peace, new energy and inspiration for your everyday life - regardless of experience or stage of life.' },
    es: { title: 'Encuentra tu centro. Siente tu Chi.', desc: 'Sumergete en un espacio para la atencion plena, la curacion y el equilibrio interior. Descubre practicas taoistas suaves que conectan cuerpo, mente y alma. Encuentra paz, nueva energia e inspiracion para tu vida cotidiana.' }
  };
  var c = t[lang] || t.de;
  return {
    cta_title: c.title,
    cta_description: c.desc,
    cta_background: asset('ctaBackground'),
    cta_buttons: ctaButtons(lang)
  };
}

// ============================================
// STEP 3: GLOBAL + HOME
// ============================================

function runStep3_GlobalAndHome() {
  Logger.log('=== STEP 3: Global + Home Stories ===\n');
  folderIdCache = {};
  var langs = ['de', 'en', 'es'];
  langs.forEach(function(lang) {
    Logger.log('--- ' + lang.toUpperCase() + ' ---');
    createGlobalStory(lang);
    createHomeStory(lang);
  });
  Logger.log('\n=== STEP 3 COMPLETE ===');
  Logger.log('Next: run runStep4_ServicePages()');
}

function createGlobalStory(lang) {
  var navLinks = {
    de: [
      { _uid: uid(), component: 'nav_link', label: 'Startseite', link: ml('story', 'de/home') },
      { _uid: uid(), component: 'nav_link', label: 'Ueber mich', link: ml('story', 'de/about') },
      { _uid: uid(), component: 'nav_link', label: 'Kontakt', link: ml('story', 'de/kontakt') }
    ],
    en: [
      { _uid: uid(), component: 'nav_link', label: 'Home', link: ml('story', 'en/home') },
      { _uid: uid(), component: 'nav_link', label: 'About', link: ml('story', 'en/about') },
      { _uid: uid(), component: 'nav_link', label: 'Contact', link: ml('story', 'en/kontakt') }
    ],
    es: [
      { _uid: uid(), component: 'nav_link', label: 'Inicio', link: ml('story', 'es/home') },
      { _uid: uid(), component: 'nav_link', label: 'Sobre mi', link: ml('story', 'es/about') },
      { _uid: uid(), component: 'nav_link', label: 'Contacto', link: ml('story', 'es/kontakt') }
    ]
  };
  var footerDesc = { de: 'Raum fuer Achtsamkeit & Balance', en: 'Space for Mindfulness & Balance', es: 'Espacio para la Atencion Plena y el Equilibrio' };
  var copyright = { de: '2026 Taoyin Zentrum Ingolstadt. Alle Rechte vorbehalten.', en: '2026 Taoyin Center Ingolstadt. All rights reserved.', es: '2026 Centro Taoyin Ingolstadt. Todos los derechos reservados.' };
  var names = { de: 'Deutsch', en: 'English', es: 'Espanol' };
  createStory({
    story: {
      name: 'Global ' + names[lang], slug: 'global', parent_id: getFolderId(lang),
      content: {
        component: 'global',
        logo: asset('logo'), logo_white: asset('logoWhite'),
        navbar_links: navLinks[lang],
        footer_description: footerDesc[lang],
        footer_email_1: 'info@taoyin-zentrum.de', footer_email_2: 'info@estela-fuchs.com',
        footer_instagram_url: 'https://www.instagram.com/taoyin_zentrum/',
        footer_copyright: copyright[lang],
        whatsapp_number: '+4915115539416', contact_phone: '+4915115539416', contact_email: 'info@taoyin-zentrum.de'
      }
    }, publish: 1
  });
}

function createHomeStory(lang) {
  createStory({
    story: { name: 'Home ' + lang.toUpperCase(), slug: 'home', parent_id: getFolderId(lang), content: getHomeContent(lang), is_startpage: true },
    publish: 1
  });
}

function getHomeContent(lang) {
  var seo = {
    de: { title: 'Taoyin Zentrum Ingolstadt - Heilung, Balance & Energie', desc: 'Dein Zentrum fuer Qi Gong, Tao Yin, Chi Nei Tsang & Psychotherapie in Ingolstadt.', kw: 'Tao Yin, Qi Gong, Chi Nei Tsang, Psychotherapie, Ingolstadt' },
    en: { title: 'Taoyin Center Ingolstadt - Healing, Balance & Energy', desc: 'Your center for Qi Gong, Tao Yin, Chi Nei Tsang & Psychotherapy in Ingolstadt.', kw: 'Tao Yin, Qi Gong, Chi Nei Tsang, Psychotherapy, Ingolstadt' },
    es: { title: 'Centro Taoyin Ingolstadt - Curacion, Equilibrio y Energia', desc: 'Tu centro para Qi Gong, Tao Yin, Chi Nei Tsang y Psicoterapia en Ingolstadt.', kw: 'Tao Yin, Qi Gong, Chi Nei Tsang, Psicoterapia, Ingolstadt' }
  };
  var hero = {
    de: { title: 'Willkommen im Taoyin Zentrum Ingolstadt', sub: 'Willkommen in deinem Raum fuer Achtsamkeit, Heilung und innere Balance. Entdecke sanfte taoistische Praktiken, die Koerper, Geist und Seele verbinden - fuer mehr Energie, Gelassenheit und Wohlbefinden im Alltag.', b1: 'Mehr erfahren', b2: 'Angebote entdecken' },
    en: { title: 'Welcome to Taoyin Center Ingolstadt', sub: 'Welcome to your space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul - for more energy, serenity and well-being.', b1: 'Learn more', b2: 'Discover services' },
    es: { title: 'Bienvenido al Centro Taoyin Ingolstadt', sub: 'Bienvenido a tu espacio para la atencion plena, la curacion y el equilibrio interior. Descubre practicas taoistas suaves que conectan cuerpo, mente y alma.', b1: 'Mas informacion', b2: 'Descubrir servicios' }
  };
  var s = seo[lang]; var h = hero[lang]; var cta = ctaFields(lang);
  return {
    component: 'page_home',
    seo_title: s.title, seo_description: s.desc, seo_keywords: s.kw,
    hero_title: h.title, hero_subtitle: h.sub,
    hero_image_1: asset('taoBasis'), hero_image_2: asset('estela'),
    hero_button_1_text: h.b1, hero_button_1_link: ml('anchor', '#Details'),
    hero_button_2_text: h.b2, hero_button_2_link: ml('anchor', '#Angebote'),
    details_sections: getDetailCards(lang),
    angebote_title: lang === 'de' ? 'Meine Angebote fuer dich' : lang === 'en' ? 'My Services for You' : 'Mis Servicios para Ti',
    angebote_cards: getAngeboteCards(lang),
    personal_title: lang === 'de' ? 'Mein persoenliches Angebot - das Besondere bei TaoBasis' : lang === 'en' ? 'My Personal Offer - What Makes TaoBasis Special' : 'Mi Oferta Personal - Lo Especial de TaoBasis',
    personal_features: getPersonalFeatures(lang),
    personal_button_text: lang === 'de' ? 'Kontakt aufnehmen' : lang === 'en' ? 'Get in touch' : 'Contactar',
    personal_button_link: ml('story', lang + '/kontakt'),
    psycho_title: lang === 'de' ? 'Ganzheitliche Psychotherapie' : lang === 'en' ? 'Holistic Psychotherapy' : 'Psicoterapia Holistica',
    psycho_description: lang === 'de' ? 'Ich arbeite mit klassischen Verfahren wie Entspannungstechniken und Verhaltenstherapie sowie mit alternativen Methoden aus den Bereichen der Meditation, des Qigong, des Tai Chi und der Ernaehrung nach den 5 Elementen.' : lang === 'en' ? 'I work with classical methods such as relaxation techniques and behavioral therapy as well as alternative methods from meditation, Qigong, Tai Chi and nutrition according to the 5 elements.' : 'Trabajo con metodos clasicos como tecnicas de relajacion y terapia conductual, asi como con metodos alternativos de meditacion, Qigong, Tai Chi y nutricion segun los 5 elementos.',
    psycho_image: asset('psychoRelax'),
    psycho_button_text: lang === 'de' ? 'Mehr erfahren' : lang === 'en' ? 'Learn more' : 'Mas informacion',
    psycho_button_link: ml('story', lang + '/psychotherapie'),
    faq_title: lang === 'de' ? 'Raum fuer Achtsamkeit & Balance' : lang === 'en' ? 'Space for Mindfulness & Balance' : 'Espacio para la Atencion Plena y el Equilibrio',
    faq_subtitle: lang === 'de' ? 'Antworten auf haeufige Fragen zu unseren taoistischen Angeboten, Methoden und deinem Weg zu mehr Wohlbefinden.' : lang === 'en' ? 'Answers to frequently asked questions about our Taoist offerings and your path to more well-being.' : 'Respuestas a preguntas frecuentes sobre nuestras ofertas taoistas y tu camino hacia mas bienestar.',
    faq_items: getFaqItems(lang),
    testimonials_eyebrow: lang === 'de' ? 'Erfahrungen aus unserer Gemeinschaft' : lang === 'en' ? 'Experiences from our community' : 'Experiencias de nuestra comunidad',
    testimonials_title: lang === 'de' ? 'Stimmen, die beruehren' : lang === 'en' ? 'Voices that Touch' : 'Voces que Conmueven',
    testimonials_subtitle: lang === 'de' ? 'Unsere Teilnehmer*innen teilen, wie die taoistischen Praktiken ihr Leben bereichern - mit mehr Ruhe, innerer Balance und neuer Lebensenergie.' : lang === 'en' ? 'Our participants share how Taoist practices enrich their lives - with more peace, inner balance and new life energy.' : 'Nuestros participantes comparten como las practicas taoistas enriquecen sus vidas.',
    testimonials_items: getTestimonials(lang),
    cta_title: cta.cta_title, cta_description: cta.cta_description,
    cta_background: cta.cta_background, cta_buttons: cta.cta_buttons
  };
}

function getDetailCards(lang) {
  return [
    { _uid: uid(), component: 'detail_card',
      eyebrow: lang === 'de' ? 'Ganzheitlich. Achtsam. Verbunden.' : lang === 'en' ? 'Holistic. Mindful. Connected.' : 'Holistico. Consciente. Conectado.',
      title: 'Tao Basis',
      description: lang === 'de' ? 'TaoBasis - Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.' : lang === 'en' ? 'TaoBasis - Qi Gong courses & Chi Nei Tsang abdominal massage. Find peace, energy & inner balance.' : 'TaoBasis - Cursos de Qi Gong y masaje abdominal Chi Nei Tsang.',
      image: asset('taoBasis'),
      button_text_1: lang === 'de' ? 'Mehr erfahren ueber Tao Yin' : lang === 'en' ? 'Learn more about Tao Yin' : 'Mas sobre Tao Yin',
      button_link_1: ml('story', lang + '/taoyin'),
      button_text_2: lang === 'de' ? 'Jetzt Angebote entdecken' : lang === 'en' ? 'Discover offers' : 'Descubrir ofertas',
      button_link_2: ml('anchor', '#Angebote'), image_left: false },
    { _uid: uid(), component: 'detail_card',
      eyebrow: 'Tao Yin & Qigong',
      title: lang === 'de' ? 'Einfuehrung in Qi Gong' : lang === 'en' ? 'Introduction to Qi Gong' : 'Introduccion al Qi Gong',
      description: lang === 'de' ? 'Qi Gong Kurs fuer Anfaenger: Lernen Sie sanfte Uebungen, Atemtechniken & Energiearbeit fuer Vitalitaet, Entspannung & mehr Lebensbalance.' : lang === 'en' ? 'Qi Gong course for beginners: Learn gentle exercises, breathing techniques & energy work for vitality and relaxation.' : 'Curso de Qi Gong para principiantes: ejercicios suaves, tecnicas de respiracion y trabajo energetico.',
      image: asset('qiGongIntro'),
      button_text_1: lang === 'de' ? 'Mehr erfahren ueber Qi Gong' : lang === 'en' ? 'Learn more about Qi Gong' : 'Mas sobre Qi Gong',
      button_link_1: ml('story', lang + '/qi-gong'),
      button_text_2: lang === 'de' ? 'Kurse ansehen' : lang === 'en' ? 'View courses' : 'Ver cursos',
      button_link_2: ml('anchor', '#Angebote'), image_left: true },
    { _uid: uid(), component: 'detail_card',
      eyebrow: 'Tao Yin & Qigong',
      title: lang === 'de' ? 'Medizinisches Qi Gong' : lang === 'en' ? 'Medical Qi Gong' : 'Qi Gong Medico',
      description: lang === 'de' ? 'Medizinisches Qi Gong - dreimal pro Woche: staerken Sie Ihr Immunsystem, bauen Sie Stress ab & finden Sie Energie fuer Koerper & Geist.' : lang === 'en' ? 'Medical Qi Gong - three times a week: strengthen your immune system, reduce stress & find energy for body & mind.' : 'Qi Gong Medico - tres veces por semana: fortalece tu sistema inmunologico y reduce el estres.',
      image: asset('medQiGong'),
      button_text_1: lang === 'de' ? 'Kurse ansehen' : lang === 'en' ? 'View courses' : 'Ver cursos',
      button_link_1: ml('anchor', '#Angebote'), image_left: false },
    { _uid: uid(), component: 'detail_card',
      eyebrow: 'Chi Nei Tsang',
      title: lang === 'de' ? 'Chi Nei Tsang Behandlung' : lang === 'en' ? 'Chi Nei Tsang Treatment' : 'Tratamiento Chi Nei Tsang',
      description: lang === 'de' ? 'Chi Nei Tsang Bauchmassage: loesen Sie Blockaden, aktivieren Sie Selbstheilung & erleben Sie tiefe Entspannung fuer Koerper & Seele.' : lang === 'en' ? 'Chi Nei Tsang abdominal massage: release blockages, activate self-healing & experience deep relaxation.' : 'Masaje abdominal Chi Nei Tsang: libera bloqueos y activa la autocuracion.',
      image: asset('chiBehandlung'),
      button_text_1: lang === 'de' ? 'Mehr erfahren' : lang === 'en' ? 'Learn more' : 'Mas informacion',
      button_link_1: ml('story', lang + '/chi-nei-tsang'),
      button_text_2: lang === 'de' ? 'Jetzt Behandlung buchen' : lang === 'en' ? 'Book treatment' : 'Reservar tratamiento',
      button_link_2: ml('anchor', '#Angebote'), image_left: true },
    { _uid: uid(), component: 'detail_card',
      eyebrow: 'Chi Nei Tsang',
      title: lang === 'de' ? 'Chi Nei Tsang Ausbildung' : lang === 'en' ? 'Chi Nei Tsang Training' : 'Formacion Chi Nei Tsang',
      description: lang === 'de' ? 'Chi Nei Tsang Ausbildung: lernen Sie die taoistische Bauchmassage & Selbstbehandlung, kombiniert mit Qi Gong fuer maximale Heilwirkung.' : lang === 'en' ? 'Chi Nei Tsang training: learn Taoist abdominal massage & self-treatment, combined with Qi Gong for maximum healing.' : 'Formacion Chi Nei Tsang: aprende el masaje abdominal taoista y autotratamiento.',
      image: asset('chiAusbildung'),
      button_text_1: lang === 'de' ? 'Ausbildung buchen' : lang === 'en' ? 'Book training' : 'Reservar formacion',
      button_link_1: ml('anchor', '#Angebote'), image_left: false },
    { _uid: uid(), component: 'detail_card',
      eyebrow: lang === 'de' ? 'Ich berate und unterstuetze Sie gerne' : lang === 'en' ? 'I am happy to advise you' : 'Estare encantada de asesorarte',
      title: lang === 'de' ? 'Praxis fuer ganzheitliche Psychotherapie' : lang === 'en' ? 'Holistic Psychotherapy Practice' : 'Practica de Psicoterapia Holistica',
      description: lang === 'de' ? 'Lernen Sie die Kraft der Integration von Koerper, Geist und Seele fuer Sich zu nutzen.' : lang === 'en' ? 'Learn to harness the power of integrating body, mind and soul.' : 'Aprende a aprovechar el poder de integrar cuerpo, mente y alma.',
      image: asset('psycho'),
      button_text_1: lang === 'de' ? 'zur Praxis' : lang === 'en' ? 'To the practice' : 'A la practica',
      button_link_1: ml('story', lang + '/psychotherapie'), image_left: true },
    { _uid: uid(), component: 'detail_card',
      eyebrow: 'Estela Fuchs',
      title: lang === 'de' ? 'Meine Geschichte' : lang === 'en' ? 'My Story' : 'Mi Historia',
      description: lang === 'de' ? 'Nach einer langen Pause kehre ich mit neuer Kraft und Dankbarkeit zurueck. Ein schwerer Bruch am Fussgelenk hat mich gezwungen, innezuhalten - und zugleich gezeigt, wie heilsam Qi Gong und taoistische Praktiken wirklich sind.\n\nSie haben mir geholfen, schneller zu regenerieren, wieder fest auf den Beinen zu stehen und tiefer in meine Praxis einzutauchen. Seit ueber 30 Jahren uebe ich den Weg des Taoismus - heute mit noch mehr Ueberzeugung und dem Wunsch, diese Schaetze mit anderen zu teilen.\n\nMeine Angebote sind mehr als Kurse - sie sind eine Einladung, die eigene Lebenskraft neu zu entdecken.' : lang === 'en' ? 'After a long break, I return with new strength and gratitude. A severe ankle fracture forced me to pause - and showed me how healing Qi Gong and Taoist practices really are.\n\nThey helped me recover faster and dive deeper into my practice. For over 30 years I have been practicing the Taoist path - today with even more conviction.\n\nMy offerings are more than courses - they are an invitation to rediscover your own life force.' : 'Despues de una larga pausa, regreso con nueva fuerza y gratitud. Una fractura severa de tobillo me obligo a hacer una pausa - y me mostro cuan sanadores son el Qi Gong y las practicas taoistas.\n\nMe ayudaron a recuperarme mas rapido y a profundizar en mi practica. He practicado el camino taoista durante mas de 30 anos.\n\nMis ofertas son mas que cursos - son una invitacion a redescubrir tu propia fuerza vital.',
      image: asset('estela'),
      button_text_1: lang === 'de' ? 'Mehr erfahren' : lang === 'en' ? 'Learn more' : 'Mas informacion',
      button_link_1: ml('story', lang + '/about'), image_left: false }
  ];
}

function getAngeboteCards(lang) {
  return [
    { _uid: uid(), component: 'angebot_card',
      price: '280 EUR', price_note: lang === 'de' ? '(3,5 - 4 Std.)' : lang === 'en' ? '(3.5 - 4 hrs)' : '(3,5 - 4 horas)',
      title: lang === 'de' ? 'Tao Basis (Einfuehrung)' : lang === 'en' ? 'Tao Basis (Introduction)' : 'Tao Basis (Introduccion)',
      description: lang === 'de' ? 'TaoBasis - Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.' : lang === 'en' ? 'TaoBasis - Qi Gong courses & Chi Nei Tsang massage. Find peace, energy & inner balance.' : 'TaoBasis - Cursos de Qi Gong y masaje Chi Nei Tsang.',
      features: lang === 'de' ? 'Tao Grundlagen\nEinsteigerkurs Qi Gong\nGrundlagen der Chi Nei Tsang Massage' : lang === 'en' ? 'Tao Basics\nQi Gong Beginner Course\nChi Nei Tsang Massage Basics' : 'Fundamentos del Tao\nCurso de Qi Gong\nFundamentos del masaje Chi Nei Tsang',
      phone: '+4915115539416', email: 'info@taoyin-zentrum.de', wide: false },
    { _uid: uid(), component: 'angebot_card',
      price: '150 EUR', price_note: lang === 'de' ? '(Zehnerkarte)' : lang === 'en' ? '(10-session card)' : '(Tarjeta de 10 sesiones)',
      title: lang === 'de' ? 'Medizinisches Qi Gong' : lang === 'en' ? 'Medical Qi Gong' : 'Qi Gong Medico',
      description: lang === 'de' ? 'Dreimal pro Woche treffen wir uns zur gemeinsamen Uebungsstunde. Regelmaessiges Qi Gong wirkt wie Medizin fuer Koerper und Geist.' : lang === 'en' ? 'We meet three times a week for practice. Regular Qi Gong works like medicine for body and mind.' : 'Nos reunimos tres veces por semana para practicar.',
      features: lang === 'de' ? 'Staerkung des Immunsystems\nVerbesserung von Haltung und Beweglichkeit\nReduzierung von Stress, Muedigkeit und Schmerzen\nmehr Energie im Alltag' : lang === 'en' ? 'Strengthening the immune system\nImproving posture and mobility\nReducing stress, fatigue and pain\nMore energy in everyday life' : 'Fortalecimiento del sistema inmunologico\nMejora de la postura y movilidad\nReduccion del estres y dolor\nMas energia',
      phone: '+4915115539416', email: 'info@taoyin-zentrum.de', wide: false },
    { _uid: uid(), component: 'angebot_card',
      price: '95 EUR', price_note: lang === 'de' ? '(Einfuehrungspreis)' : lang === 'en' ? '(Introductory price)' : '(Precio de introduccion)',
      title: lang === 'de' ? 'Chi Nei Tsang Behandlung' : lang === 'en' ? 'Chi Nei Tsang Treatment' : 'Tratamiento Chi Nei Tsang',
      description: lang === 'de' ? 'Chi Nei Tsang ist eine taoistische Massagekunst, die die inneren Organe harmonisiert und den Energiefluss (Qi) im Koerper aktiviert.' : lang === 'en' ? 'Chi Nei Tsang is a Taoist massage art that harmonizes internal organs and activates energy flow (Qi).' : 'Chi Nei Tsang es un arte de masaje taoista que armoniza los organos internos.',
      features: lang === 'de' ? 'Blockaden in den Meridianen loesen\nSchmerzen und Verspannungen lindern\nIhre Selbstheilungskraefte aktivieren\nKoerper, Geist und Emotionen ins Gleichgewicht bringen' : lang === 'en' ? 'Release blockages in meridians\nRelieve pain and tension\nActivate self-healing powers\nBring body, mind and emotions into balance' : 'Liberar bloqueos en meridianos\nAliviar dolor y tension\nActivar poderes de autocuracion\nEquilibrar cuerpo, mente y emociones',
      phone: '+4915115539416', email: 'info@taoyin-zentrum.de', wide: false },
    { _uid: uid(), component: 'angebot_card',
      price: '5.500 EUR', price_note: lang === 'de' ? '(Jahresausbildung mit Zertifizierung)' : lang === 'en' ? '(Annual training with certification)' : '(Formacion anual con certificacion)',
      title: lang === 'de' ? 'Chi Nei Tsang Ausbildung' : lang === 'en' ? 'Chi Nei Tsang Training' : 'Formacion Chi Nei Tsang',
      description: lang === 'de' ? 'Lernen Sie die Kunst der Selbstheilung durch Beruehrung.\nIn der Ausbildung erfahren Sie Schritt fuer Schritt.' : lang === 'en' ? 'Learn the art of self-healing through touch.\nStep by step in the training.' : 'Aprende el arte de la autocuracion a traves del tacto.',
      features: lang === 'de' ? 'wie Sie Qi-Blockaden erkennen und loesen\ndie Meridiane oeffnen und Ihre Lebensenergie staerken\nmit gezielten Massagegriffen Koerper und Seele in Balance bringen\nTechniken fuer sich selbst und andere' : lang === 'en' ? 'Recognize and release Qi blockages\nOpen meridians and strengthen life energy\nBring body and soul into balance\nTechniques for yourself and others' : 'Reconocer y liberar bloqueos de Qi\nAbrir meridianos y fortalecer energia vital\nEquilibrar cuerpo y alma\nTecnicas para ti y para otros',
      phone: '+4915115539416', email: 'info@taoyin-zentrum.de', wide: true }
  ];
}

function getPersonalFeatures(lang) {
  var f = {
    de: [
      'Individuelle Abstimmung: Ich gehe auf die Beduerfnisse jedes einzelnen Menschen ein - kein "Schema F", sondern eine Begleitung, die wirklich passt.',
      'Ganzheitliche Verbindung: Die Kombination von Qi Gong und Chi Nei Tsang verstaerkt die Wirkung und schafft nachhaltige Heilimpulse.',
      'Authentische Begleitung: Ich lebe, was ich unterrichte. Meine Arbeit ist getragen von Achtsamkeit, Liebe zur Beruehrung und dem Wunsch, Heilung zu foerdern.'
    ],
    en: [
      'Individual Adaptation: I respond to each person\'s needs - no one size fits all, but support that really fits.',
      'Holistic Connection: The combination of Qi Gong and Chi Nei Tsang enhances the effect and creates sustainable healing impulses.',
      'Authentic Guidance: I live what I teach. My work is carried by mindfulness, love of touch and the desire to promote healing.'
    ],
    es: [
      'Adaptacion Individual: Respondo a las necesidades de cada persona, sin talla unica, sino un acompanamiento que realmente se ajusta.',
      'Conexion Holistica: La combinacion de Qi Gong y Chi Nei Tsang potencia el efecto y crea impulsos de curacion sostenibles.',
      'Guia Autentica: Vivo lo que enseno. Mi trabajo se sustenta en la atencion plena y el deseo de promover la curacion.'
    ]
  };
  return (f[lang] || f.de).map(function(text) { return { _uid: uid(), component: 'feature_item', text: text }; });
}

function getFaqItems(lang) {
  var f = {
    de: [
      { q: 'Was ist Tao Yin und wie wirkt es?', a: 'Tao Yin verbindet sanfte Bewegung, Atmung und innere Praesenz. Die Praxis staerkt deine Wirbelsaeule, loest Verspannungen und bringt deine Lebensenergie (Chi) in Fluss.' },
      { q: 'Fuer wen sind die Kurse geeignet?', a: 'Unsere Angebote richten sich an alle - egal ob Anfaenger*in, Fortgeschrittene, jung oder alt. Besonders profitieren Menschen mit Stress, Rueckenschmerzen oder dem Wunsch nach mehr innerer Ruhe.' },
      { q: 'Was ist das Besondere an Chi Nei Tsang?', a: 'Chi Nei Tsang ist eine tiefgehende Bauchmassage, die emotionale und energetische Blockaden loest. Sie unterstuetzt die Verdauung, staerkt die Organe und hilft dir, dich mit deinem Zentrum zu verbinden.' },
      { q: 'Wie kann ich einen Termin buchen?', a: 'Du kannst ganz einfach per WhatsApp, E-Mail oder Telefon einen Termin vereinbaren. Wir beraten dich gerne persoenlich und finden gemeinsam das passende Angebot.' }
    ],
    en: [
      { q: 'What is Tao Yin and how does it work?', a: 'Tao Yin combines gentle movement, breathing and inner presence. The practice strengthens your spine, releases tension and brings your life energy (Chi) into flow.' },
      { q: 'Who are the courses suitable for?', a: 'Our offerings are for everyone - whether beginner, advanced, young or old. People with stress, back pain or the desire for more inner peace benefit especially.' },
      { q: 'What is special about Chi Nei Tsang?', a: 'Chi Nei Tsang is a deep abdominal massage that releases emotional and energetic blockages. It supports digestion, strengthens organs and helps you connect with your center.' },
      { q: 'How can I book an appointment?', a: 'You can easily make an appointment via WhatsApp, email or phone. We are happy to advise you personally.' }
    ],
    es: [
      { q: 'Que es Tao Yin y como funciona?', a: 'Tao Yin combina movimiento suave, respiracion y presencia interior. La practica fortalece tu columna, libera tensiones y pone en flujo tu energia vital (Chi).' },
      { q: 'Para quien son los cursos?', a: 'Nuestras ofertas son para todos - principiantes, avanzados, jovenes o mayores. Las personas con estres o dolor de espalda se benefician especialmente.' },
      { q: 'Que tiene de especial Chi Nei Tsang?', a: 'Chi Nei Tsang es un masaje abdominal profundo que libera bloqueos emocionales y energeticos. Apoya la digestion y te ayuda a conectarte con tu centro.' },
      { q: 'Como puedo reservar una cita?', a: 'Puedes hacer una cita facilmente por WhatsApp, correo o telefono. Estaremos encantados de asesorarte.' }
    ]
  };
  return (f[lang] || f.de).map(function(faq) { return { _uid: uid(), component: 'faq_item', question: faq.q, answer: faq.a }; });
}

function getTestimonials(lang) {
  var t = {
    de: [
      { author: 'D.L.', text: 'Als ich Anfang des Jahres zu Estela kam, war ich am Ende meiner seelischen und koerperlichen Kraefte. Ich suchte ueberall um Rat oder Antworten. Jedoch ohne Erfolg. Eine psychosomatische Belastungsstoerung wurde bei mir diagnostiziert. Dann... Zu meinem Glueck, traf ich auf Estelas Taoyin Zentrum. Dank ihrer Erfahrung, ihres Know-Hows, ihrer Menschenkenntnis, ihres ganzen Wesens, hat sie mich aus meinem Loch wieder rausgeholt. Ich bin so dankbar Estela gefunden zu haben.' },
      { author: 'Petra S.', text: 'Als es mir richtig mies ging und ich mich fuehlte, als wuerde ich bald in eine waschechte Depression rutschen, hat mir Estela geholfen, wieder in die Kraft und in den Flow zu kommen. Hauptsaechlich mit ihrer unglaublich kraftvollen Chi Nei Tsang Massage. Und das in relativer kurzer Zeit und mit so wenig Aufwand! Estela ist mit ganzem Herzen dabei und beherrscht ihr Handwerk auf allen Ebenen.' },
      { author: 'Valeria A.', text: 'Estela ist ein unglaublicher Mensch, ich bin bereits seit einem Jahr bei ihr und ich habe ihr so viel zu verdanken. Ihre Art, ihre Energie, ihr Wissen und ihr Koennen halfen mir extrem. Ich kann niemanden so sehr empfehlen wie Sie. Einfach toll diese Frau.' }
    ],
    en: [
      { author: 'D.L.', text: 'When I came to Estela at the beginning of the year, I was at the end of my mental and physical strength. I searched everywhere for advice but without success. A psychosomatic stress disorder was diagnosed. Then fortunately I found Estela\'s Taoyin Center. Thanks to her experience, knowledge and her whole being, she pulled me out of my hole. I am so grateful to have found Estela.' },
      { author: 'Petra S.', text: 'When I was really down and felt like I was about to slip into depression, Estela helped me get back into power and flow. Mainly with her incredibly powerful Chi Nei Tsang massage. And in such a short time! Like magic. Estela is in it with all her heart and masters her craft on all levels.' },
      { author: 'Valeria A.', text: 'Estela is an incredible person, I have been with her for a year and I owe her so much. Her manner, her energy, her knowledge and skills helped me extremely. I cannot recommend anyone as much as her.' }
    ],
    es: [
      { author: 'D.L.', text: 'Cuando llegue a Estela a principios de ano, estaba al final de mis fuerzas. Busque consejo en todas partes, sin exito. Me diagnosticaron un trastorno psicosomatico. Afortunadamente encontre el Centro Taoyin de Estela. Gracias a su experiencia y todo su ser, me saco de mi agujero. Estoy muy agradecido.' },
      { author: 'Petra S.', text: 'Cuando estaba realmente mal, Estela me ayudo a recuperar la fuerza y el flujo. Principalmente con su increible masaje Chi Nei Tsang. Y en tan poco tiempo! Como por arte de magia. Estela esta en esto con todo su corazon y domina su oficio en todos los niveles.' },
      { author: 'Valeria A.', text: 'Estela es una persona increible, llevo un ano con ella y le debo tanto. Su manera, energia, conocimiento y habilidades me ayudaron enormemente. No puedo recomendar a nadie tanto como a ella.' }
    ]
  };
  return (t[lang] || t.de).map(function(item) { return { _uid: uid(), component: 'testimonial_item', author: item.author, text: item.text, rating: 5 }; });
}

// ============================================
// STEP 4: SERVICE PAGES (TaoYin, QiGong, ChiNeiTsang, Psychotherapie)
// ============================================

function runStep4_ServicePages() {
  Logger.log('=== STEP 4: Service Pages ===\n');
  folderIdCache = {};
  var langs = ['de', 'en', 'es'];
  langs.forEach(function(lang) {
    Logger.log('--- ' + lang.toUpperCase() + ' ---');
    createTaoYinStory(lang);
    createQiGongStory(lang);
    createChiNeiTsangStory(lang);
    createPsychotherapieStory(lang);
  });
  Logger.log('\n=== STEP 4 COMPLETE ===');
  Logger.log('Next: run runStep5_OtherPages()');
}

function createTaoYinStory(lang) {
  var seo = {
    de: { t: 'Tao Yin - Taoyin Zentrum Ingolstadt', d: 'Tao Yin: jahrtausendealte chinesische Bewegungs- und Atempraxis zur Foerderung von Gesundheit und innerer Balance.', kw: 'Tao Yin, Taoismus, Yin Yang, Qi Gong, Ingolstadt' },
    en: { t: 'Tao Yin - Taoyin Center Ingolstadt', d: 'Tao Yin: ancient Chinese movement and breathing practice for health and inner balance.', kw: 'Tao Yin, Taoism, Yin Yang, Qi Gong, Ingolstadt' },
    es: { t: 'Tao Yin - Centro Taoyin Ingolstadt', d: 'Tao Yin: practica milenaria china de movimiento y respiracion para la salud y el equilibrio interior.', kw: 'Tao Yin, Taoismo, Yin Yang, Qi Gong, Ingolstadt' }
  };
  var hero = {
    de: { t: 'Taoyin: was bedeutet es?', s: 'Tao Yin ist eine jahrtausendealte chinesische Bewegungs- und Atempraxis zur Foerderung von Gesundheit und innerer Balance. Sanfte Dehnungen, fliessende Bewegungen und gezielte Atemtechniken helfen, Koerper und Geist zu harmonisieren.' },
    en: { t: 'Taoyin: what does it mean?', s: 'Tao Yin is an ancient Chinese movement and breathing practice for promoting health and inner balance. Gentle stretches, flowing movements and targeted breathing techniques help harmonize body and mind.' },
    es: { t: 'Taoyin: que significa?', s: 'Tao Yin es una practica milenaria china de movimiento y respiracion para promover la salud y el equilibrio interior.' }
  };
  var s = seo[lang]; var h = hero[lang];
  createStory({
    story: { name: 'Tao Yin ' + lang.toUpperCase(), slug: 'taoyin', parent_id: getFolderId(lang),
      content: {
        component: 'page_taoyin',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        hero_title: h.t, hero_subtitle: h.s,
        hero_images: [
          { _uid: uid(), component: 'hero_image_item', image: asset('taoyinHero1'), alt_text: 'Ruhige Landschaft' },
          { _uid: uid(), component: 'hero_image_item', image: asset('taoyinHero2'), alt_text: 'Qi Gong Kurs' },
          { _uid: uid(), component: 'hero_image_item', image: asset('ctaBackground'), alt_text: 'Tao Yin Praxis' }
        ],
        content_sections: getTaoYinSections(lang),
        youtube_url: 'https://www.youtube.com/embed/fsmXRcD_jYI?rel=0&controls=1&autoplay=0&mute=0&start=0',
        yin_yang_image: asset('yinYangSymbol'),
        show_angebote: true,
        angebote_title: lang === 'de' ? 'Meine Angebote fuer dich' : lang === 'en' ? 'My Services for You' : 'Mis Servicios para Ti'
      }
    }, publish: 1
  });
}

function getTaoYinSections(lang) {
  if (lang === 'de') {
    return [
      { _uid: uid(), component: 'content_section', title: 'TAO', body: 'Das Wort "Daoismus" leitet sich ab von "Dao" (Tao), einem Begriff der chinesischen Philosophie, der bereits vor dem Daodejing verwendet wurde, aber erst in diesem Text seine zentrale Stellung und besondere, universale Bedeutung erhielt. "Dao" bedeutete urspruenglich "Weg", im klassischen Chinesisch aber bereits "Methode", "Prinzip", "der rechte Weg". Bei Laozi nimmt dann der Begriff des Dao die Bedeutung eines der ganzen Welt zugrunde liegenden, alldurchdringenden Prinzips an. Es ist die hoechste Wirklichkeit und das hoechste Mysterium, die uranfaengliche Einheit, das kosmische Gesetz und Absolute.\n\nAus dem Dao entstehen die "zehntausend Dinge", also der Kosmos, und auch die Ordnung der Dinge entsteht aus ihm, aehnlich einem Naturgesetz, doch ist dem Dao selbst kein omnipotentes Wesen zuzuschreiben, sondern es ist Ursprung und Vereinigung der Gegensaetze.\n\nPhilosophisch koennte man das Dao als jenseits aller Begrifflichkeit fassen, weil es der Grund des Seins, die transzendente Ursache ist.\n\n"Das Tao, das sich mit Worten beschreiben laesst, ist nicht das wahre Tao." - Lao Tse: Tao Te King\n\nDurch das Wirken des Dao wird die Schoepfung durch Zweiheit, das Yin und das Yang, Licht und Schatten, hervorgebracht.', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Yin', body: 'Yin und Yang sind zwei Begriffe der chinesischen Philosophie, insbesondere des Daoismus. Sie stehen fuer polar einander entgegengesetzte und dennoch aufeinander bezogene Kraefte oder Prinzipien. Ein weit verbreitetes Symbol des Prinzips ist das Taijitu, in dem das weisse Yang (hell, hart, heiss, maennlich, aktiv, Bewegung) und das schwarze Yin (dunkel, weich, kalt, weiblich, passiv, Ruhe) gegenueberstehend dargestellt werden.\n\nYin und Yang bezeichnen "Gegensaetze" in ihrer wechselseitigen Bezogenheit als eine Gesamtheit, einen ewigen Kreislauf. Daher koennen sie zur Erklaerung von Wandlungsvorgaengen und Prozessen benutzt werden.\n\nYin und Yang steigen und sinken immer abwechselnd. Nach einer Hochphase des Yang folgt zwingend ein Absinken von Yang und ein Ansteigen von Yin und umgekehrt.\n\n"Das Urprinzip bewegt sich und erzeugt Yang. Wenn die Bewegung ihr Ende erreicht, so wird sie still, und diese Stille erzeugt Yin." - Alfred Forke\n\nYin und Yang koennen nicht gleichzeitig ansteigen oder absinken. Wenn Yang sich vergroessert, verringert sich Yin und umgekehrt.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'TAOYIN', body: 'Tao Yin (manchmal als Taoist Yoga bezeichnet) ist eine Reihe von Uebungen von Taoisten, um chi, die innere Energie des Koerpers nach traditioneller chinesischer Medizin zu pflegen. Die Praxis von Tao Yin war ein Vorlaufer des Qigong und wurde in chinesischen taoistischen Kloestern fuer die Gesundheit und zur spirituellen Kultivierung praktiziert.\n\nDas Hauptziel von Tao Yin ist es, Gleichgewicht zwischen inneren und aeusseren Energien zu schaffen und Koerper, Geist und Seele neu zu beleben, und Kraft und Flexibilitaet in Muskeln und Sehnen zu entwickeln.\n\nIm Taoyin Zentrum Ingolstadt erweitern wir diese Aspekte der taoistischen Gedankenwelt. Unsere heutige Welt hat bereits genug Yang aufzuweisen - der Yin Charakter dagegen fehlt. Wir moechten diesen Yin Charakter in uns staerken und in der Welt zur Geltung bringen fuer eine bessere und ausgewogenere Lebensweise.\n\nEuer Taoyin Team', bg_variant: 'white' }
    ];
  }
  if (lang === 'en') {
    return [
      { _uid: uid(), component: 'content_section', title: 'TAO', body: 'The word "Taoism" derives from "Dao" (Tao), a concept of Chinese philosophy. "Dao" originally meant "way", but in classical Chinese already meant "method", "principle". In Laozi\'s work, the Dao takes the meaning of an all-pervading principle underlying the whole world.\n\n"The Tao that can be described in words is not the true Tao." - Lao Tse\n\nThrough the Dao, creation is brought forth through duality - Yin and Yang, light and shadow.', bg_variant: 'white' },
      { _uid: uid(), component: 'content_section', title: 'Yin', body: 'Yin and Yang are two concepts of Chinese philosophy, especially Taoism. They represent polar opposites that are nevertheless related. The Taijitu symbol shows white Yang (light, hard, hot, masculine, active) and black Yin (dark, soft, cold, feminine, passive).\n\nYin and Yang always rise and fall alternately. After a high phase of Yang, a decline necessarily follows, and vice versa.\n\nYin and Yang cannot rise or fall simultaneously.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'TAOYIN', body: 'Tao Yin (sometimes called Taoist Yoga) is a series of exercises to cultivate chi, the body\'s internal energy. The practice was a precursor to Qigong.\n\nThe main goal is to create balance between internal and external energies, revitalize body, mind and soul.\n\nAt the Taoyin Center Ingolstadt, we expand these aspects. Our world has enough Yang - the Yin character is missing. We want to strengthen this Yin character for a better, more balanced way of life.\n\nYour Taoyin Team', bg_variant: 'white' }
    ];
  }
  return [
    { _uid: uid(), component: 'content_section', title: 'TAO', body: 'La palabra "Taoismo" deriva de "Dao" (Tao), un concepto de la filosofia china. "Dao" significaba originalmente "camino".\n\n"El Tao que puede describirse con palabras no es el verdadero Tao." - Lao Tse\n\nA traves del Dao, la creacion surge a traves de la dualidad - Yin y Yang.', bg_variant: 'white' },
    { _uid: uid(), component: 'content_section', title: 'Yin', body: 'Yin y Yang son dos conceptos de la filosofia china. Representan opuestos polares relacionados entre si. El simbolo del Taijitu muestra el Yang blanco y el Yin negro.\n\nYin y Yang siempre suben y bajan alternativamente.', bg_variant: 'neutral' },
    { _uid: uid(), component: 'content_section', title: 'TAOYIN', body: 'Tao Yin es una serie de ejercicios para cultivar el chi. La practica fue precursora del Qigong.\n\nEn el Centro Taoyin Ingolstadt ampliamos estos aspectos. Nuestro mundo tiene suficiente Yang - falta el caracter Yin.\n\nVuestro equipo Taoyin', bg_variant: 'white' }
  ];
}

function createQiGongStory(lang) {
  var seo = {
    de: { t: 'Qi Gong - Taoyin Zentrum Ingolstadt', d: 'Qigong: traditionelle chinesische Praxis zur Pflege von Gesundheit, Energie und innerer Ruhe.', kw: 'Qi Gong, Qigong, Medizinisches Qigong, Ingolstadt' },
    en: { t: 'Qi Gong - Taoyin Center Ingolstadt', d: 'Qigong: traditional Chinese practice for health, energy and inner peace.', kw: 'Qi Gong, Medical Qigong, Ingolstadt' },
    es: { t: 'Qi Gong - Centro Taoyin Ingolstadt', d: 'Qigong: practica tradicional china para la salud y la paz interior.', kw: 'Qi Gong, Qigong Medico, Ingolstadt' }
  };
  var hero = {
    de: { t: 'Was ist Qigong?', s: 'Qigong ist eine traditionelle chinesische Praxis zur Pflege von Gesundheit, Energie und innerer Ruhe. Sie verbindet sanfte Bewegungen, Atemuebungen und meditative Konzentration zu einem harmonischen Ganzen.' },
    en: { t: 'What is Qigong?', s: 'Qigong is a traditional Chinese practice for cultivating health, energy and inner peace. It combines gentle movements, breathing exercises and meditative concentration into a harmonious whole.' },
    es: { t: 'Que es Qigong?', s: 'Qigong es una practica tradicional china para cultivar la salud, la energia y la paz interior.' }
  };
  var s = seo[lang]; var h = hero[lang];
  createStory({
    story: { name: 'Qi Gong ' + lang.toUpperCase(), slug: 'qi-gong', parent_id: getFolderId(lang),
      content: {
        component: 'page_qigong',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        hero_title: h.t, hero_subtitle: h.s,
        hero_images: [
          { _uid: uid(), component: 'hero_image_item', image: asset('qigongHero1'), alt_text: 'Estela bei der Praxis' },
          { _uid: uid(), component: 'hero_image_item', image: asset('qigongHero2'), alt_text: 'Gemeinschaftliche Qi Gong Uebung' },
          { _uid: uid(), component: 'hero_image_item', image: asset('qigongHero3'), alt_text: 'Qi Gong Einzelbegleitung' },
          { _uid: uid(), component: 'hero_image_item', image: asset('qigongHero4'), alt_text: 'Entspannende Qi Gong Sitzung' }
        ],
        content_sections: getQiGongSections(lang),
        checklist_title: lang === 'de' ? 'Wann medizinisches Qigong angewendet werden kann' : lang === 'en' ? 'When medical Qigong can be applied' : 'Cuando se puede aplicar Qigong medico',
        checklist_items: getQiGongChecklist(lang),
        show_angebote: true,
        angebote_title: lang === 'de' ? 'Meine Angebote fuer dich' : lang === 'en' ? 'My Services for You' : 'Mis Servicios para Ti'
      }
    }, publish: 1
  });
}

function getQiGongSections(lang) {
  if (lang === 'de') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Medizinisches Qigong', body: 'Medizinisches Qigong wurde nicht nur im alten China, sondern auch heute in China eingesetzt, um eine Vielzahl von Krankheiten zu behandeln. Es wird oft in Verbindung mit Kraeutern aus der chinesischen Medizin und mittlerweile auch in der westlichen Medizin verwendet. Es konzentriert sich auf Meridianwege und innere Organe des Koerpers.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Moechten Sie zertifizierter Qigong-Praktiker werden?', body: 'Unser einzigartiges Programm geht tief in Qigong Entwicklung. Wir lehren und begleiten Dich, wie Du Dich selbst und andere durch regelmaessige Qigong-Praktiken heilen kannst. Du lernst spezifische Uebungen fuer verschiedene Organprobleme, Krankheiten und andere Leiden.\n\nEs ist nie zu spaet oder zu frueh, um Qigong zu lernen! Ob Du neu bei Qigong oder ein fortgeschrittener Praktiker bist, Du kannst von unserem vollen Kurs Curriculum lernen und profitieren.\n\nDies ist offen fuer jede Ebene der Qigong-Praktiker: Anfaenger oder Fortgeschrittene. Anmeldung gerne im Taoyin Zentrum oder telefonisch.', bg_variant: 'white' }
    ];
  }
  if (lang === 'en') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Medical Qigong', body: 'Medical Qigong has been used not only in ancient China but also in modern China to treat various diseases. It focuses on meridian pathways and internal organs.', bg_variant: 'neutral' },
      { _uid: uid(), component: 'content_section', title: 'Want to become a certified Qigong practitioner?', body: 'Our unique program goes deep into Qigong development. We teach you how to heal yourself and others through regular Qigong practices.\n\nIt is never too late or too early to learn Qigong! This is open to all levels: beginners or advanced. Registration at the Taoyin Center or by phone.', bg_variant: 'white' }
    ];
  }
  return [
    { _uid: uid(), component: 'content_section', title: 'Qigong Medico', body: 'El Qigong medico se ha utilizado no solo en la antigua China sino tambien hoy para tratar diversas enfermedades. Se centra en los meridianos y organos internos.', bg_variant: 'neutral' },
    { _uid: uid(), component: 'content_section', title: 'Quieres ser practicante certificado?', body: 'Nuestro programa unico profundiza en el desarrollo del Qigong. Nunca es demasiado tarde para aprender Qigong. Abierto a todos los niveles.', bg_variant: 'white' }
  ];
}

function getQiGongChecklist(lang) {
  var items = {
    de: ['Krebs (alle Arten)', 'Sportverletzungen', 'Gastrointestinale Stoerungen', 'Orthopaedische Erkrankungen', 'Gebrochene Knochen', 'Verstauchungen', 'Erkaeltung', 'Grippe', 'Emotionale Stoerungen', 'Depression', 'ADHS', 'Bipolare Stoerung'],
    en: ['Cancer (all types)', 'Sports injuries', 'Gastrointestinal disorders', 'Orthopedic conditions', 'Broken bones', 'Sprains', 'Common cold', 'Flu', 'Emotional disorders', 'Depression', 'ADHD', 'Bipolar disorder'],
    es: ['Cancer (todos los tipos)', 'Lesiones deportivas', 'Trastornos gastrointestinales', 'Enfermedades ortopedicas', 'Huesos rotos', 'Esguinces', 'Resfriado', 'Gripe', 'Trastornos emocionales', 'Depresion', 'TDAH', 'Trastorno bipolar']
  };
  return (items[lang] || items.de).map(function(t) { return { _uid: uid(), component: 'checklist_item', text: t }; });
}

function createChiNeiTsangStory(lang) {
  var seo = {
    de: { t: 'Chi Nei Tsang Massage - Taoyin Zentrum Ingolstadt', d: 'Chi Nei Tsang: taoistische Bauchmassage fuer innere Organe, Energiefluss und emotionales Gleichgewicht.', kw: 'Chi Nei Tsang, Bauchmassage, Taoismus, Ingolstadt' },
    en: { t: 'Chi Nei Tsang Massage - Taoyin Center Ingolstadt', d: 'Chi Nei Tsang: Taoist abdominal massage for internal organs and emotional balance.', kw: 'Chi Nei Tsang, Abdominal Massage, Taoism, Ingolstadt' },
    es: { t: 'Masaje Chi Nei Tsang - Centro Taoyin Ingolstadt', d: 'Chi Nei Tsang: masaje abdominal taoista para organos internos y equilibrio emocional.', kw: 'Chi Nei Tsang, Masaje Abdominal, Taoismo, Ingolstadt' }
  };
  var hero = {
    de: { t: 'Chi Nei Tsang Massage', s: 'Chi Nei Tsang ist eine traditionelle taoistische Bauchmassage, die innere Organe sanft loest und energetisch harmonisiert. Sie arbeitet mit tiefen, achtsamen Beruehrungen im Bauchraum, um Blockaden zu loesen und den Energiefluss zu foerdern.' },
    en: { t: 'Chi Nei Tsang Massage', s: 'Chi Nei Tsang is a traditional Taoist abdominal massage that gently releases internal organs and energetically harmonizes them.' },
    es: { t: 'Masaje Chi Nei Tsang', s: 'Chi Nei Tsang es un masaje abdominal taoista tradicional que libera suavemente los organos internos y los armoniza energeticamente.' }
  };
  var s = seo[lang]; var h = hero[lang];
  createStory({
    story: { name: 'Chi Nei Tsang ' + lang.toUpperCase(), slug: 'chi-nei-tsang', parent_id: getFolderId(lang),
      content: {
        component: 'page_chineitsung',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        hero_title: h.t, hero_subtitle: h.s,
        hero_image: asset('cntHero'),
        content_sections: getCntSections(lang),
        wirkungen_title: lang === 'de' ? 'Moegliche Wirkungen von Chi Nei Tsang:' : lang === 'en' ? 'Possible effects of Chi Nei Tsang:' : 'Posibles efectos del Chi Nei Tsang:',
        wirkungen_items: getCntWirkungen(lang),
        wirkungen_outro: lang === 'de' ? 'Chi Nei Tsang ist fuer Menschen jeden Alters geeignet und kann sowohl praeventiv als auch begleitend angewendet werden. Die Behandlung ist sanft, achtsam und auf deine individuellen Beduerfnisse abgestimmt.\n\nGoenne dir diese besondere Form der Selbstfuersorge und erlebe, wie sich dein Bauch - und damit dein ganzes Wohlbefinden - entspannen kann.' : lang === 'en' ? 'Chi Nei Tsang is suitable for people of all ages and can be used both preventively and alongside other methods. The treatment is gentle, mindful and tailored to your needs.\n\nTreat yourself to this special form of self-care.' : 'Chi Nei Tsang es adecuado para personas de todas las edades. El tratamiento es suave y adaptado a tus necesidades.',
        ausbildung_title: lang === 'de' ? '1-Jaehrige Ausbildung' : lang === 'en' ? '1-Year Training Program' : 'Formacion de 1 Ano',
        ausbildung_intro: lang === 'de' ? 'Der Darm! das Organ, das wir am wenigsten wertschaetzen - Uebergewicht, Burn-Out, Probleme mit der Haut - Alltagsbeschwerden, deren Verbindung zur Darmflora werden von Tag zu Tag offensichtlicher.\n\nIch freue mich, Ihnen die Chi Nei Tsang (Bauch-)Massage in Form einer Ausbildung zum CNT Practitioner nach Mantak Chia naeher bringen zu koennen. Chi Nei Tsang ist eine besondere Form der Massage mit Grundlagen in der Traditionellen Chinesischen Medizin, dem Taoismus und dem Medizinischen Qigong.\n\nDie Ausbildung ist geeignet fuer Therapeuten, Heilpraktiker, Masseure oder Personen mit besonderer Affinitaet zur Massage. Der Kursplan beruht auf dem Studienplan von Grossmeister Mantak Chia und laeuft ueber 10 Wochenenden mit Theorie und intensiver Praxis.' : lang === 'en' ? 'The gut! The organ we value least. I am pleased to bring you Chi Nei Tsang abdominal massage training according to Mantak Chia.\n\nThe training is suitable for therapists, naturopaths, masseurs or people with a special affinity for massage. The curriculum is based on Grandmaster Mantak Chia\'s study plan over 10 weekends.' : 'El intestino! El organo que menos valoramos. Me alegra poder ofrecer la formacion de masaje Chi Nei Tsang segun Mantak Chia.\n\nLa formacion es adecuada para terapeutas, naturopatas, masajistas. El plan se basa en el de Mantak Chia en 10 fines de semana.',
        ausbildung_items: getCntAusbildung(lang),
        show_angebote: true,
        angebote_title: lang === 'de' ? 'Meine Angebote fuer dich' : lang === 'en' ? 'My Services for You' : 'Mis Servicios para Ti'
      }
    }, publish: 1
  });
}

function getCntSections(lang) {
  if (lang === 'de') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Tiefe Bauchmassage fuer Wohlbefinden und innere Balance', body: 'Chi Nei Tsang ist eine sanfte, aber wirkungsvolle Massageform aus der taoistischen Heiltradition Chinas. Der Name bedeutet uebersetzt "die inneren Organe pflegen" und beschreibt den Kern dieser Methode: Durch achtsame, tiefgehende Beruehrungen im Bauchraum werden Verspannungen geloest, die Organe entspannt und der Energiefluss harmonisiert.\n\nUnser Bauch wird oft als "zweites Gehirn" bezeichnet - hier sitzen nicht nur wichtige Organe, sondern auch viele Nervenbahnen und emotionale Erinnerungen. Stress, falsche Ernaehrung oder ungeloeste Emotionen koennen dazu fuehren, dass sich Anspannung und Blockaden festsetzen. Chi Nei Tsang hilft, diese sanft zu loesen.\n\nWaehrend einer Behandlung liegst du entspannt auf einer Liege. Mit gezielten, kreisenden und drueckenden Bewegungen arbeite ich an deinem Bauchbereich, immer im Einklang mit deinem Atemrhythmus.', bg_variant: 'white' }
    ];
  }
  if (lang === 'en') {
    return [
      { _uid: uid(), component: 'content_section', title: 'Deep abdominal massage for well-being and inner balance', body: 'Chi Nei Tsang is a gentle yet effective massage form from the Taoist healing tradition of China. The name translates to "caring for the internal organs".\n\nOur belly is often called the "second brain". Stress, poor nutrition or unresolved emotions can cause tension and blockages.\n\nDuring a treatment, you lie relaxed. With targeted, circular movements, I work on your abdominal area in harmony with your breathing rhythm.', bg_variant: 'white' }
    ];
  }
  return [
    { _uid: uid(), component: 'content_section', title: 'Masaje abdominal profundo para el bienestar', body: 'Chi Nei Tsang es una forma de masaje suave pero efectiva de la tradicion taoista china. El nombre se traduce como "cuidar los organos internos".\n\nNuestro vientre es llamado el "segundo cerebro". El estres y las emociones no resueltas pueden causar bloqueos.\n\nDurante el tratamiento, te acuestas relajado mientras trabajo con movimientos circulares en armonia con tu respiracion.', bg_variant: 'white' }
  ];
}

function getCntWirkungen(lang) {
  var items = {
    de: ['Verbesserung der Verdauung und Entgiftung', 'Loesen von koerperlichen und emotionalen Spannungen', 'Staerkung des Immunsystems', 'Foerderung von innerer Ruhe und Ausgeglichenheit', 'Unterstuetzung des Energieflusses (Qi) im gesamten Koerper'],
    en: ['Improving digestion and detoxification', 'Releasing physical and emotional tension', 'Strengthening the immune system', 'Promoting inner peace and balance', 'Supporting energy flow (Qi) throughout the body'],
    es: ['Mejora de la digestion y desintoxicacion', 'Liberacion de tensiones fisicas y emocionales', 'Fortalecimiento del sistema inmunologico', 'Fomento de la paz interior', 'Apoyo al flujo de energia (Qi)']
  };
  return (items[lang] || items.de).map(function(t) { return { _uid: uid(), component: 'checklist_item', text: t }; });
}

function getCntAusbildung(lang) {
  var items = {
    de: ['Grundlagen des Chi Nei Tsang', 'Anatomie der Bauchregion, der inneren Organe, des Lymphsystems, des kardiovaskulaeren Systems und des Bewegungsapparates', 'Aktivierung, Entgiftung und Ausgleichen der inneren Organe', 'Entgiftung des Gewebes und des Lymphsystems', 'Verarbeitung von emotionalen Spannungen', 'Wirbelsaeule, Rueckenmuskulatur und Kreuzbein', 'Ernaehrung', 'Energiearbeit', 'Vorbereitungen fuer die Praxis'],
    en: ['Chi Nei Tsang fundamentals', 'Anatomy of abdominal region, internal organs, lymphatic system, cardiovascular system and musculoskeletal system', 'Activation, detoxification and balancing of internal organs', 'Tissue and lymphatic system detoxification', 'Processing emotional tensions', 'Spine, back muscles and sacrum', 'Nutrition', 'Energy work', 'Preparations for practice'],
    es: ['Fundamentos de Chi Nei Tsang', 'Anatomia de la region abdominal, organos internos, sistema linfatico y cardiovascular', 'Activacion, desintoxicacion y equilibrio de organos', 'Desintoxicacion de tejidos y sistema linfatico', 'Procesamiento de tensiones emocionales', 'Columna vertebral y musculatura', 'Nutricion', 'Trabajo energetico', 'Preparaciones para la practica']
  };
  return (items[lang] || items.de).map(function(t) { return { _uid: uid(), component: 'checklist_item', text: t }; });
}

function createPsychotherapieStory(lang) {
  var seo = {
    de: { t: 'Psychotherapie Ingolstadt - Heilung & Begleitung', d: 'Psychotherapeutische Praxis in Ingolstadt: Professionelle Begleitung bei Krisen und persoenlicher Entwicklung.', kw: 'Psychotherapie Ingolstadt, Verhaltenstherapie, Autogenes Training, Paartherapie' },
    en: { t: 'Psychotherapy Ingolstadt - Healing & Support', d: 'Psychotherapy practice in Ingolstadt: Professional support for crises and personal development.', kw: 'Psychotherapy Ingolstadt, Behavioral therapy, Autogenic training' },
    es: { t: 'Psicoterapia Ingolstadt - Curacion y Apoyo', d: 'Practica de psicoterapia en Ingolstadt: Apoyo profesional en crisis y desarrollo personal.', kw: 'Psicoterapia Ingolstadt, Terapia conductual' }
  };
  var hero = {
    de: { t: 'Willkommen in meiner Praxis fuer ganzheitliche Psychotherapie', s: 'Ich arbeite mit klassischen Verfahren wie Entspannungstechniken und Verhaltenstherapie sowie mit alternativen Methoden aus den Bereichen der Meditation, des Qigong, des Tai Chi und der Ernaehrung nach den 5 Elementen.', b1: 'Mehr erfahren', b2: 'Therapien entdecken' },
    en: { t: 'Welcome to my holistic psychotherapy practice', s: 'I work with classical methods such as relaxation techniques and behavioral therapy as well as alternative methods from meditation, Qigong, Tai Chi and nutrition.', b1: 'Learn more', b2: 'Discover therapies' },
    es: { t: 'Bienvenido a mi practica de psicoterapia holistica', s: 'Trabajo con metodos clasicos y alternativos de meditacion, Qigong, Tai Chi y nutricion.', b1: 'Mas informacion', b2: 'Descubrir terapias' }
  };
  var s = seo[lang]; var h = hero[lang]; var cta = ctaFields(lang);
  createStory({
    story: { name: 'Psychotherapie ' + lang.toUpperCase(), slug: 'psychotherapie', parent_id: getFolderId(lang),
      content: {
        component: 'page_psychotherapie',
        seo_title: s.t, seo_description: s.d, seo_keywords: s.kw,
        hero_title: h.t, hero_subtitle: h.s,
        hero_images: [
          { _uid: uid(), component: 'hero_image_item', image: asset('heroMassage'), alt_text: 'Estela in der Praxis' },
          { _uid: uid(), component: 'hero_image_item', image: asset('psycho'), alt_text: 'Massage Therapie' }
        ],
        hero_button_1_text: h.b1, hero_button_1_link: ml('anchor', '#details'),
        hero_button_2_text: h.b2, hero_button_2_link: ml('anchor', '#therapien'),
        detail_blocks: getPsychoDetailBlocks(lang),
        therapien_title: lang === 'de' ? 'Meine Therapie-Angebote' : lang === 'en' ? 'My Therapy Offerings' : 'Mis Ofertas de Terapia',
        therapy_cards: getPsychoTherapyCards(lang),
        therapien_button_1_text: lang === 'de' ? 'Mehr Details' : lang === 'en' ? 'More Details' : 'Mas Detalles',
        therapien_button_1_link: ml('story', lang + '/therapien'),
        therapien_button_2_text: lang === 'de' ? 'Therapie Anfragen' : lang === 'en' ? 'Request Therapy' : 'Solicitar Terapia',
        therapien_button_2_link: ml('anchor', '#anfrage'),
        cta_title: cta.cta_title,
        cta_description: lang === 'de' ? 'Lernen Sie die Kraft der Integration von Koerper, Geist und Seele fuer Sich zu nutzen.' : lang === 'en' ? 'Learn to harness the power of integrating body, mind and soul.' : 'Aprende a aprovechar el poder de integrar cuerpo, mente y alma.',
        cta_background: cta.cta_background,
        cta_buttons: ctaButtons(lang)
      }
    }, publish: 1
  });
}

function getPsychoDetailBlocks(lang) {
  return [
    { _uid: uid(), component: 'detail_block',
      eyebrow: lang === 'de' ? 'Orientierung. Stabilisierung. Unterstuetzung' : lang === 'en' ? 'Orientation. Stabilization. Support' : 'Orientacion. Estabilizacion. Apoyo',
      title: lang === 'de' ? 'Ihr Ziel & die Behandlung' : lang === 'en' ? 'Your Goal & Treatment' : 'Tu Objetivo y Tratamiento',
      description: lang === 'de' ? 'Sie stehen an einem Scheideweg? Sie befinden sich in einer Krise? Sie fuehlen sich unwohl? Egal was das aktuelle Problem ist, gemeinsam finden wir eine Loesung und die passende Therapie. Ob Beratung, Einzelsitzungen oder eine koerperorientierte Psychotherapie. Mein ganzheitlicher Ansatz bringt den Koerper und Geist wieder in Einklang.' : lang === 'en' ? 'Are you at a crossroads? In a crisis? Whatever the problem, together we will find a solution. Whether counseling, individual sessions or body-oriented psychotherapy. My holistic approach brings body and mind back into harmony.' : 'Estas en una encrucijada? Juntos encontraremos una solucion. Mi enfoque holistico armoniza cuerpo y mente.',
      image: asset('heroSpa'),
      link_text: lang === 'de' ? 'Mehr erfahren' : lang === 'en' ? 'Learn more' : 'Mas informacion',
      link: ml('story', lang + '/psychotherapie/ziele'), image_left: false },
    { _uid: uid(), component: 'detail_block',
      eyebrow: 'Estela Fuchs',
      title: lang === 'de' ? 'Ueber mich' : lang === 'en' ? 'About Me' : 'Sobre Mi',
      description: lang === 'de' ? 'Seit vielen Jahren begleite ich Menschen psychotherapeutisch auf ihrem Weg zu mehr Klarheit, innerer Stabilitaet und Selbstvertrauen. In meiner Arbeit verbinde ich bewaehrte Methoden der Psychotherapie mit achtsamen Koerper- und Atemuebungen sowie taoistischen Praktiken.\n\nDiese Kombination ermoeglicht es, nicht nur ueber Gedanken und Gefuehle zu sprechen, sondern auch den Koerper einzubeziehen - und damit Heilung auf mehreren Ebenen zu foerdern.\n\nMein Anliegen ist es, Menschen dabei zu unterstuetzen, ihre eigenen Ressourcen zu entdecken, Krisen zu bewaeltigen und einen liebevollen Zugang zu sich selbst zu finden.' : lang === 'en' ? 'For many years I have been accompanying people on their path to more clarity, inner stability and self-confidence. I combine proven psychotherapy methods with mindful body and breathing exercises and Taoist practices.\n\nThis combination makes it possible to not only talk about thoughts and feelings, but also involve the body - promoting healing on multiple levels.\n\nMy concern is to support people in discovering their own resources and finding a loving approach to themselves.' : 'Desde hace muchos anos acompano a personas en su camino hacia mas claridad y estabilidad interior. Combino metodos probados de psicoterapia con practicas taoistas.',
      image: asset('estelaByaylin29'),
      link_text: lang === 'de' ? 'Mehr erfahren' : lang === 'en' ? 'Learn more' : 'Mas informacion',
      link: ml('story', lang + '/about'), image_left: true },
    { _uid: uid(), component: 'detail_block',
      eyebrow: lang === 'de' ? 'Ich berate und unterstuetze Sie gerne' : lang === 'en' ? 'I am happy to advise you' : 'Estare encantada de asesorarte',
      title: 'Taoyin Zentrum Ingolstadt',
      description: lang === 'de' ? 'Entdecke sanfte taoistische Praktiken, die Koerper, Geist und Seele verbinden - fuer mehr Energie, Gelassenheit und Wohlbefinden im Alltag.' : lang === 'en' ? 'Discover gentle Taoist practices that connect body, mind and soul - for more energy, serenity and well-being.' : 'Descubre practicas taoistas suaves que conectan cuerpo, mente y alma.',
      image: asset('taoBasis'),
      link_text: lang === 'de' ? 'zum Taoyin Zentrum' : lang === 'en' ? 'To the Taoyin Center' : 'Al Centro Taoyin',
      link: ml('story', lang + '/home'), image_left: true }
  ];
}

function getPsychoTherapyCards(lang) {
  var cards = {
    de: [
      { t: 'Autogenes Training', d: 'Autogenes Training ist ein auf Autosuggestion basierendes Entspannungsverfahren. Es wurde vom Berliner Psychiater Johannes Heinrich Schultz aus der Hypnose entwickelt. Heute ist es eine weit verbreitete und anerkannte Psychotherapiemethode.' },
      { t: 'Kognitive Verhaltenstherapie', d: 'Im Mittelpunkt stehen Kognitionen - Einstellungen, Gedanken, Bewertungen und Ueberzeugungen. Die kognitiven Therapieverfahren gehen davon aus, dass die Art und Weise, wie wir denken, bestimmt, wie wir uns fuehlen und verhalten.' },
      { t: 'Massage', d: 'Die Massage dient zur mechanischen Beeinflussung von Haut, Bindegewebe und Muskulatur. Die Wirkung erstreckt sich ueber den gesamten Organismus und schliesst auch die Psyche mit ein.' },
      { t: 'Meditation', d: 'Meditation ist eine in vielen Religionen und Kulturen ausgueuebte spirituelle Praxis. Durch Achtsamkeits- oder Konzentrationsuebungen soll sich der Geist beruhigen und sammeln.' },
      { t: 'Paartherapie', d: 'Gemeinsam einen Schritt vorwaerts machen - in Einzel- und Paargespraechen, ergaenzt mit Elementen der taoistischen Traditionen in Meditation, Yoga und Qigong. Beziehungsprobleme verstehen und neue Werkzeuge in die Hand bekommen.' },
      { t: 'Progressive Muskelentspannung nach Jacobson', d: 'Ein Entspannungsverfahren, bei dem durch willentliche An- und Entspannung bestimmter Muskelgruppen ein Zustand tiefer Entspannung des ganzen Koerpers erreicht werden soll.' },
      { t: 'Sokratischer Dialog', d: 'Eine Fragetechnik fuer Begriffserklaaerung und Entscheidungsfindung. Ein Prozess des kritischen Hinterfragens, um Strukturen und Verhaltensmuster sichtbar und veraenderbar zu machen.' },
      { t: 'Yoga, Qigong, Tai Chi', d: 'Techniken, die an der Koerperstruktur und Koerperwahrnehmung arbeiten. In Verbindung mit Meditation und Massage fuehren sie zu einem neuen Selbstbewusstsein und einer positiveren Haltung zu sich selbst.' }
    ],
    en: [
      { t: 'Autogenic Training', d: 'A relaxation technique based on autosuggestion, developed by Berlin psychiatrist Johannes Heinrich Schultz. Today a widely recognized psychotherapy method.' },
      { t: 'Cognitive Behavioral Therapy', d: 'Focuses on cognitions - attitudes, thoughts, evaluations and beliefs. It assumes that the way we think determines how we feel and behave.' },
      { t: 'Massage', d: 'Massage serves to mechanically influence skin, connective tissue and muscles. Its effect extends throughout the entire organism, including the psyche.' },
      { t: 'Meditation', d: 'A spiritual practice found in many religions and cultures. Through mindfulness exercises, the mind calms and collects itself.' },
      { t: 'Couples Therapy', d: 'Taking a step forward together - in individual and couples sessions, supplemented with Taoist traditions in meditation, yoga and Qigong.' },
      { t: 'Progressive Muscle Relaxation (Jacobson)', d: 'A technique where deep relaxation is achieved through deliberate tensing and releasing of specific muscle groups.' },
      { t: 'Socratic Dialogue', d: 'A questioning technique for clarification and decision-making. A process of critically questioning arguments to make patterns visible and changeable.' },
      { t: 'Yoga, Qigong, Tai Chi', d: 'Techniques working on body structure and awareness. Combined with meditation and massage, they lead to new self-awareness and a more positive attitude toward oneself.' }
    ],
    es: [
      { t: 'Entrenamiento Autogeno', d: 'Tecnica de relajacion basada en la autosugerencia. Hoy es un metodo de psicoterapia ampliamente reconocido.' },
      { t: 'Terapia Cognitivo-Conductual', d: 'Se centra en las cogniciones - actitudes, pensamientos y creencias. Asume que la forma de pensar determina como nos sentimos.' },
      { t: 'Masaje', d: 'El masaje influye en la piel, tejido conectivo y musculatura. Su efecto se extiende por todo el organismo, incluyendo la psique.' },
      { t: 'Meditacion', d: 'Practica espiritual de muchas culturas. A traves de ejercicios de atencion plena, la mente se calma y se recoge.' },
      { t: 'Terapia de Pareja', d: 'Dar un paso adelante juntos, en sesiones individuales y de pareja, complementadas con tradiciones taoistas.' },
      { t: 'Relajacion Muscular Progresiva', d: 'Tecnica donde se logra relajacion profunda a traves de la tension y relajacion deliberada de grupos musculares.' },
      { t: 'Dialogo Socratico', d: 'Tecnica de cuestionamiento para clarificacion y toma de decisiones, haciendo visibles patrones de comportamiento.' },
      { t: 'Yoga, Qigong, Tai Chi', d: 'Tecnicas que trabajan la estructura y percepcion corporal. Combinadas con meditacion y masaje, conducen a nueva conciencia de uno mismo.' }
    ]
  };
  return (cards[lang] || cards.de).map(function(c) { return { _uid: uid(), component: 'therapy_card', title: c.t, description: c.d }; });
}

// ============================================
// STEP 6: PREVIEW CONFIG
// ============================================

function runStep6_Config() {
  Logger.log('=== STEP 6: Configuring preview URLs ===\n');
  try {
    makeRequest('', 'PUT', {
      space: {
        domain: CONFIG.PREVIEW_URL.replace(/^https?:\/\//, '').replace(/\/$/, '')
      }
    });
    Logger.log('   Preview URL set: ' + CONFIG.PREVIEW_URL);
  } catch (e) {
    Logger.log('   Could not set preview URL: ' + e.message);
    Logger.log('   -> Set manually: Storyblok > Settings > Visual Editor');
  }
  Logger.log('\n=== STEP 6 COMPLETE ===');
}

// ============================================
// TEST & CLEANUP
// ============================================

function testConnection() {
  Logger.log('Testing Storyblok connection...');
  try {
    var response = makeRequest('');
    Logger.log('Connection successful!');
    Logger.log('Space: ' + response.space.name + ' (ID: ' + response.space.id + ')');
    Logger.log('Region: ' + CONFIG.STORYBLOK_REGION);
    return true;
  } catch (e) {
    Logger.log('Connection FAILED: ' + e.message);
    Logger.log('Check CONFIG.STORYBLOK_SPACE_ID and CONFIG.STORYBLOK_MANAGEMENT_TOKEN');
    return false;
  }
}

function cleanup() {
  Logger.log('=== CLEANUP: Deleting ALL content ===\n');
  componentCache = null;
  folderIdCache = {};
  
  // 1. Delete all stories (non-folders first)
  Logger.log('Deleting stories...');
  try {
    var page = 1;
    var hasMore = true;
    while (hasMore) {
      var resp = makeRequest('/stories?per_page=100&page=' + page);
      if (!resp.stories || resp.stories.length === 0) { hasMore = false; break; }
      
      var nonFolders = resp.stories.filter(function(s) { return !s.is_folder; });
      nonFolders.forEach(function(s) {
        Logger.log('   x ' + s.full_slug);
        makeRequest('/stories/' + s.id, 'DELETE');
        Utilities.sleep(300);
      });
      
      if (nonFolders.length < resp.stories.length) {
        // There were folders, we'll handle them after
        page++;
      } else if (resp.stories.length < 100) {
        hasMore = false;
      } else {
        page++;
      }
    }
  } catch (e) { Logger.log('   Error deleting stories: ' + e.message); }
  
  // 2. Delete folders (children first, then root)
  Logger.log('Deleting folders...');
  try {
    var resp = makeRequest('/stories?per_page=100&is_folder=true');
    if (resp.stories) {
      var children = resp.stories.filter(function(s) { return s.parent_id !== 0; });
      var roots = resp.stories.filter(function(s) { return s.parent_id === 0; });
      children.forEach(function(s) {
        Logger.log('   x folder: ' + s.full_slug);
        makeRequest('/stories/' + s.id, 'DELETE');
        Utilities.sleep(300);
      });
      roots.forEach(function(s) {
        Logger.log('   x folder: ' + s.slug);
        makeRequest('/stories/' + s.id, 'DELETE');
        Utilities.sleep(300);
      });
    }
  } catch (e) { Logger.log('   Error deleting folders: ' + e.message); }
  
  // 3. Delete components
  Logger.log('Deleting components...');
  try {
    var resp = makeRequest('/components');
    if (resp.components) {
      resp.components.forEach(function(c) {
        try {
          Logger.log('   x component: ' + c.name);
          makeRequest('/components/' + c.id, 'DELETE');
          Utilities.sleep(300);
        } catch (e) { Logger.log('   Could not delete ' + c.name); }
      });
    }
  } catch (e) { Logger.log('   Error deleting components: ' + e.message); }
  
  Logger.log('\n=== CLEANUP COMPLETE ===');
  Logger.log('Now run: runStep1_Components()');
}
