/**
 * Storyblok Seeding Script
 * Creates components, folders, and stories for Taoyin Zentrum Ingolstadt
 * Compatible with Storyblok Free Plan (folder-based multilingual, no locales)
 * 
 * Usage: node scripts/storyblok-seed.mjs
 */

import { EXTRA_COMPONENTS, EXPANDED_ABOUT_SCHEMA, EXPANDED_KONTAKT_SCHEMA } from './storyblok-page-components.mjs';
import { PAGE_CONTENT } from './storyblok-page-content.mjs';
import { PAGE_CONTENT_PART2 } from './storyblok-page-content-2.mjs';

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;
const PAT = process.env.STORYBLOK_PAT;
const API_BASE = 'https://mapi.storyblok.com/v1';
const REGION = 'eu';

if (!SPACE_ID || !PAT) {
  console.error('❌ Missing environment variables. Set STORYBLOK_SPACE_ID and STORYBLOK_PAT.');
  console.error('   Usage: STORYBLOK_SPACE_ID=xxx STORYBLOK_PAT=xxx node scripts/storyblok-seed.mjs');
  process.exit(1);
}

// Rate limit helper
async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function apiCall(method, path, body = null, retries = 3) {
  const url = `${API_BASE}/spaces/${SPACE_ID}${path}`;
  const opts = {
    method,
    headers: {
      'Authorization': PAT,
      'Content-Type': 'application/json',
    },
  };
  if (body) opts.body = JSON.stringify(body);

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, opts);
      
      if (res.status === 429) {
        console.log('  ⏳ Rate limited, waiting 1s...');
        await sleep(1000);
        continue;
      }
      
      if (res.status === 422) {
        const errBody = await res.json().catch(() => ({}));
        // If it's a "already taken" error, we can handle it
        if (JSON.stringify(errBody).includes('already taken')) {
          return { alreadyExists: true, status: 422, body: errBody };
        }
        console.error(`  ❌ 422 error:`, JSON.stringify(errBody));
        return null;
      }
      
      if (!res.ok) {
        const errText = await res.text().catch(() => '');
        console.error(`  ❌ ${res.status}: ${errText.substring(0, 200)}`);
        if (attempt < retries - 1) { await sleep(500); continue; }
        return null;
      }

      // Handle 204 No Content
      if (res.status === 204) return { success: true };
      
      const data = await res.json();
      await sleep(200); // Respect rate limits
      return data;
    } catch (e) {
      console.error(`  ❌ Network error: ${e.message}`);
      if (attempt < retries - 1) { await sleep(1000); continue; }
      return null;
    }
  }
  return null;
}

// ════════════════════════════════════════════════
// STEP 1: Components
// ════════════════════════════════════════════════

const COMPONENTS = [
  {
    name: 'global',
    display_name: 'Global Settings',
    is_root: true,
    is_nestable: false,
    schema: {
      logo: { type: 'asset', display_name: 'Logo', filetypes: ['images'] },
      logo_white: { type: 'asset', display_name: 'Logo (White)', filetypes: ['images'] },
      footer_description: { type: 'text', display_name: 'Footer Description' },
      footer_email_1: { type: 'text', display_name: 'Footer Email 1' },
      footer_email_2: { type: 'text', display_name: 'Footer Email 2' },
      footer_instagram_url: { type: 'text', display_name: 'Instagram URL' },
      whatsapp_number: { type: 'text', display_name: 'WhatsApp Number' },
      contact_phone: { type: 'text', display_name: 'Contact Phone' },
      contact_email: { type: 'text', display_name: 'Contact Email' },
    },
  },
  {
    name: 'page_home',
    display_name: 'Home Page',
    is_root: true,
    is_nestable: false,
    schema: {
      // SEO
      seo_title: { type: 'text', display_name: 'SEO Title' },
      seo_description: { type: 'textarea', display_name: 'SEO Description' },
      seo_keywords: { type: 'text', display_name: 'SEO Keywords' },
      seo_image: { type: 'asset', display_name: 'SEO Image', filetypes: ['images'] },
      // Hero
      hero_title: { type: 'text', display_name: 'Hero Title' },
      hero_subtitle: { type: 'textarea', display_name: 'Hero Subtitle' },
      hero_image_1: { type: 'asset', display_name: 'Hero Image 1', filetypes: ['images'] },
      hero_image_2: { type: 'asset', display_name: 'Hero Image 2', filetypes: ['images'] },
      hero_button_1_text: { type: 'text', display_name: 'Hero Button 1 Text' },
      hero_button_1_link: { type: 'text', display_name: 'Hero Button 1 Link' },
      hero_button_2_text: { type: 'text', display_name: 'Hero Button 2 Text' },
      hero_button_2_link: { type: 'text', display_name: 'Hero Button 2 Link' },
      // Details Sections
      details_sections: { type: 'bloks', display_name: 'Detail Sections', restrict_type: '', restrict_components: true, component_whitelist: ['detail_card'] },
      // Angebote
      angebote_title: { type: 'text', display_name: 'Angebote Section Title' },
      angebote_subtitle: { type: 'textarea', display_name: 'Angebote Subtitle' },
      // Personal
      personal_title: { type: 'text', display_name: 'Persönliches Angebot Title' },
      personal_features: { type: 'bloks', display_name: 'Personal Features', restrict_type: '', restrict_components: true, component_whitelist: ['feature_item'] },
      personal_button_text: { type: 'text', display_name: 'Personal Button Text' },
      // Psycho
      psycho_title: { type: 'text', display_name: 'Psycho Section Title' },
      psycho_description: { type: 'textarea', display_name: 'Psycho Description' },
      psycho_image: { type: 'asset', display_name: 'Psycho Image', filetypes: ['images'] },
      psycho_button_text: { type: 'text', display_name: 'Psycho Button Text' },
      // FAQ
      faq_title: { type: 'text', display_name: 'FAQ Title' },
      faq_subtitle: { type: 'textarea', display_name: 'FAQ Subtitle' },
      faq_items: { type: 'bloks', display_name: 'FAQ Items', restrict_type: '', restrict_components: true, component_whitelist: ['faq_item'] },
      // Testimonials
      testimonials_eyebrow: { type: 'text', display_name: 'Testimonials Eyebrow' },
      testimonials_title: { type: 'text', display_name: 'Testimonials Title' },
      testimonials_subtitle: { type: 'textarea', display_name: 'Testimonials Subtitle' },
      testimonials_items: { type: 'bloks', display_name: 'Testimonials', restrict_type: '', restrict_components: true, component_whitelist: ['testimonial_item'] },
      // CTA
      cta_title: { type: 'text', display_name: 'CTA Title' },
      cta_description: { type: 'textarea', display_name: 'CTA Description' },
      cta_background: { type: 'asset', display_name: 'CTA Background', filetypes: ['images'] },
    },
  },
  {
    name: 'detail_card',
    display_name: 'Detail Card',
    is_root: false,
    is_nestable: true,
    schema: {
      eyebrow: { type: 'text', display_name: 'Eyebrow' },
      title: { type: 'text', display_name: 'Title', required: true },
      description: { type: 'textarea', display_name: 'Description' },
      image: { type: 'asset', display_name: 'Image', filetypes: ['images'] },
      button_text_1: { type: 'text', display_name: 'Button 1 Text' },
      button_link_1: { type: 'multilink', display_name: 'Button 1 Link' },
      button_text_2: { type: 'text', display_name: 'Button 2 Text' },
      button_link_2: { type: 'multilink', display_name: 'Button 2 Link' },
      image_left: { type: 'boolean', display_name: 'Image Left' },
    },
  },
  {
    name: 'feature_item',
    display_name: 'Feature Item',
    is_root: false,
    is_nestable: true,
    schema: {
      text: { type: 'textarea', display_name: 'Text', required: true },
    },
  },
  {
    name: 'faq_item',
    display_name: 'FAQ Item',
    is_root: false,
    is_nestable: true,
    schema: {
      question: { type: 'text', display_name: 'Question', required: true },
      answer: { type: 'textarea', display_name: 'Answer', required: true },
    },
  },
  {
    name: 'testimonial_item',
    display_name: 'Testimonial',
    is_root: false,
    is_nestable: true,
    schema: {
      text: { type: 'textarea', display_name: 'Text', required: true },
      author: { type: 'text', display_name: 'Author', required: true },
      rating: { type: 'number', display_name: 'Rating (1-5)' },
    },
  },
  {
    name: 'page_service',
    display_name: 'Service Page',
    is_root: true,
    is_nestable: false,
    schema: {
      seo_title: { type: 'text', display_name: 'SEO Title' },
      seo_description: { type: 'textarea', display_name: 'SEO Description' },
      seo_keywords: { type: 'text', display_name: 'SEO Keywords' },
      hero_title: { type: 'text', display_name: 'Hero Title' },
      hero_subtitle: { type: 'textarea', display_name: 'Hero Subtitle' },
      content_html: { type: 'richtext', display_name: 'Page Content' },
    },
  },
  {
    name: 'page_about',
    display_name: 'About Page',
    is_root: true,
    is_nestable: false,
    schema: EXPANDED_ABOUT_SCHEMA,
  },
  {
    name: 'page_kontakt',
    display_name: 'Contact Page',
    is_root: true,
    is_nestable: false,
    schema: EXPANDED_KONTAKT_SCHEMA,
  },
  {
    name: 'page_impressum',
    display_name: 'Impressum Page',
    is_root: true,
    is_nestable: false,
    schema: {
      title: { type: 'text', display_name: 'Title' },
      content_html: { type: 'richtext', display_name: 'Content' },
    },
  },
  {
    name: 'news_article',
    display_name: 'News Article',
    is_root: true,
    is_nestable: false,
    schema: {
      title: { type: 'text', display_name: 'Title', required: true },
      excerpt: { type: 'textarea', display_name: 'Excerpt' },
      body: { type: 'textarea', display_name: 'Body' },
      image: { type: 'asset', display_name: 'Image', filetypes: ['images'] },
      date: { type: 'text', display_name: 'Date (YYYY-MM-DD)' },
      seo_title: { type: 'text', display_name: 'SEO Title' },
      seo_description: { type: 'textarea', display_name: 'SEO Description' },
    },
  },
  // Page-specific components (from storyblok-page-components.mjs)
  ...EXTRA_COMPONENTS,
];

async function createComponents() {
  console.log('\n🧩 Step 1: Creating Components...');
  
  // First get existing components
  const existing = await apiCall('GET', '/components');
  const existingNames = existing?.components?.map(c => c.name) || [];
  
  for (const comp of COMPONENTS) {
    if (existingNames.includes(comp.name)) {
      console.log(`  ✅ ${comp.name} (already exists)`);
      continue;
    }
    const result = await apiCall('POST', '/components', { component: comp });
    if (result) {
      console.log(`  ✅ ${comp.name}`);
    } else {
      console.log(`  ⚠️ ${comp.name} (may already exist)`);
    }
  }
}

// ════════════════════════════════════════════════
// STEP 2: Folders
// ════════════════════════════════════════════════

async function createFolders() {
  console.log('\n📁 Step 2: Creating Language Folders...');
  
  for (const lang of ['de', 'en', 'es']) {
    const result = await apiCall('POST', '/stories', {
      story: {
        name: lang.toUpperCase(),
        slug: lang,
        is_folder: true,
        default_root: 'page_home',
      },
    });
    if (result?.alreadyExists) {
      console.log(`  ✅ /${lang}/ (already exists)`);
    } else if (result) {
      console.log(`  ✅ /${lang}/`);
    } else {
      console.log(`  ⚠️ /${lang}/ (might exist)`);
    }
  }
}

// ════════════════════════════════════════════════
// STEP 3: Content / Stories
// ════════════════════════════════════════════════

// Helper to get folder ID
async function getFolderId(slug) {
  const result = await apiCall('GET', `/stories?with_slug=${slug}&is_folder=true`);
  return result?.stories?.[0]?.id || null;
}

async function createStory(parentId, slug, name, componentName, content) {
  const result = await apiCall('POST', '/stories', {
    story: {
      name,
      slug,
      parent_id: parentId,
      content: {
        component: componentName,
        ...content,
      },
    },
    publish: 1, // Auto-publish
  });
  
  if (result?.alreadyExists) {
    // Story exists – update it with the new component and content
    console.log(`  🔄 ${slug} exists, updating...`);
    return await updateStory(parentId, slug, name, componentName, content);
  } else if (result?.story) {
    console.log(`  ✅ ${slug}`);
    return true;
  } else {
    console.log(`  ❌ ${slug} failed`);
    return false;
  }
}

async function updateStory(parentId, slug, name, componentName, content) {
  // Find the existing story by looking it up
  const parentStory = await apiCall('GET', `/stories?by_slugs=*/${slug}&with_parent=${parentId}`);
  const story = parentStory?.stories?.[0];
  if (!story) {
    console.log(`  ⚠️ ${slug} not found for update`);
    return false;
  }
  
  const result = await apiCall('PUT', `/stories/${story.id}`, {
    story: {
      name,
      slug,
      parent_id: parentId,
      content: {
        component: componentName,
        ...content,
      },
    },
    publish: 1,
  });
  
  if (result?.story) {
    console.log(`  ✅ ${slug} (updated)`);
    return true;
  } else {
    console.log(`  ❌ ${slug} update failed`);
    return false;
  }
}

// ═══ CONTENT DATA (DE/EN/ES) ═══

const CONTENT = {
  global: {
    de: {
      footer_description: 'Raum für Achtsamkeit & Balance',
      footer_email_1: 'info@taoyin-zentrum.de',
      footer_email_2: 'info@estela-fuchs.com',
      footer_instagram_url: 'https://www.instagram.com/taoyin_zentrum/',
      whatsapp_number: '+4915115539416',
      contact_phone: '+4915115539416',
      contact_email: 'info@taoyin-zentrum.de',
    },
    en: {
      footer_description: 'Space for Mindfulness & Balance',
      footer_email_1: 'info@taoyin-zentrum.de',
      footer_email_2: 'info@estela-fuchs.com',
      footer_instagram_url: 'https://www.instagram.com/taoyin_zentrum/',
      whatsapp_number: '+4915115539416',
      contact_phone: '+4915115539416',
      contact_email: 'info@taoyin-zentrum.de',
    },
    es: {
      footer_description: 'Espacio para Mindfulness & Equilibrio',
      footer_email_1: 'info@taoyin-zentrum.de',
      footer_email_2: 'info@estela-fuchs.com',
      footer_instagram_url: 'https://www.instagram.com/taoyin_zentrum/',
      whatsapp_number: '+4915115539416',
      contact_phone: '+4915115539416',
      contact_email: 'info@taoyin-zentrum.de',
    },
  },

  home: {
    de: {
      seo_title: 'Taoyin Zentrum Ingolstadt – Qi Gong, Tao Yin & Chi Nei Tsang',
      seo_description: 'Dein Zentrum für Qi Gong, Tao Yin, Chi Nei Tsang & ganzheitliche Psychotherapie in Ingolstadt. Kurse, Behandlungen & Ausbildungen.',
      seo_keywords: 'Qi Gong Ingolstadt, Tao Yin Ingolstadt, Chi Nei Tsang Ingolstadt, Psychotherapie Ingolstadt',
      hero_title: 'Willkommen im Taoyin Zentrum Ingolstadt',
      hero_subtitle: 'Willkommen in deinem Raum für Achtsamkeit, Heilung und innere Balance. Entdecke sanfte taoistische Praktiken, die Körper, Geist und Seele verbinden – für mehr Energie, Gelassenheit und Wohlbefinden im Alltag.',
      hero_button_1_text: 'Mehr erfahren',
      hero_button_1_link: '#Details',
      hero_button_2_text: 'Angebote entdecken',
      hero_button_2_link: '#Angebote',
      angebote_title: 'Meine Angebote für dich',
      angebote_subtitle: 'Individuell abgestimmt auf deine Bedürfnisse – finde das passende Angebot für deinen Weg zu mehr Balance und Wohlbefinden.',
      personal_title: '✨ Mein persönliches Angebot – das Besondere bei TaoBasis',
      personal_features: [
        { component: 'feature_item', text: 'Individuelle Abstimmung: Ich gehe auf die Bedürfnisse jedes einzelnen Menschen ein – kein "Schema F", sondern eine Begleitung, die wirklich passt.', _uid: 'f1' },
        { component: 'feature_item', text: 'Ganzheitliche Verbindung: Die Kombination von Qi Gong und Chi Nei Tsang verstärkt die Wirkung und schafft nachhaltige Heilimpulse.', _uid: 'f2' },
        { component: 'feature_item', text: 'Authentische Begleitung: Ich lebe, was ich unterrichte. Meine Arbeit ist getragen von Achtsamkeit, Liebe zur Berührung und dem Wunsch, Heilung zu fördern.', _uid: 'f3' },
      ],
      personal_button_text: 'Kontakt aufnehmen',
      psycho_title: 'Ganzheitliche Psychotherapie',
      psycho_description: 'Ich arbeite mit klassischen Verfahren wie Entspannungstechniken und Verhaltenstherapie sowie mit alternativen Methoden aus den Bereichen der Meditation, des Qigong, des Tai Chi und der Ernährung nach den 5 Elementen.',
      psycho_button_text: 'Mehr erfahren',
      faq_title: 'Raum für Achtsamkeit & Balance',
      faq_subtitle: 'Antworten auf häufige Fragen zu unseren taoistischen Angeboten, Methoden und deinem Weg zu mehr Wohlbefinden.',
      faq_items: [
        { component: 'faq_item', question: 'Was ist Tao Yin und wie wirkt es?', answer: 'Tao Yin verbindet sanfte Bewegung, Atmung und innere Präsenz. Die Praxis stärkt deine Wirbelsäule, löst Verspannungen und bringt deine Lebensenergie (Chi) in Fluss. Du findest so zu mehr Ruhe, Flexibilität und innerer Balance.', _uid: 'faq1' },
        { component: 'faq_item', question: 'Für wen sind die Kurse geeignet?', answer: 'Unsere Angebote richten sich an alle – egal ob Anfänger*in, Fortgeschrittene, jung oder alt. Besonders profitieren Menschen mit Stress, Rückenschmerzen oder dem Wunsch nach mehr innerer Ruhe und Selbstfürsorge.', _uid: 'faq2' },
        { component: 'faq_item', question: 'Was ist das Besondere an Chi Nei Tsang?', answer: 'Chi Nei Tsang ist eine tiefgehende Bauchmassage, die emotionale und energetische Blockaden löst. Sie unterstützt die Verdauung, stärkt die Organe und hilft dir, dich mit deinem Zentrum zu verbinden.', _uid: 'faq3' },
        { component: 'faq_item', question: 'Wie kann ich einen Termin buchen?', answer: 'Du kannst ganz einfach per WhatsApp, E-Mail oder Telefon einen Termin vereinbaren. Wir beraten dich gerne persönlich und finden gemeinsam das passende Angebot für dich.', _uid: 'faq4' },
      ],
      testimonials_eyebrow: 'Erfahrungen aus unserer Gemeinschaft',
      testimonials_title: 'Stimmen, die berühren',
      testimonials_subtitle: 'Unsere Teilnehmer*innen teilen, wie die taoistischen Praktiken ihr Leben bereichern.',
      testimonials_items: [
        { component: 'testimonial_item', author: 'D.L.', text: 'Als ich Anfang des Jahres zu Estela kam, war ich am Ende meiner seelischen und körperlichen Kräfte. Dank ihrer Erfahrung, ihres Know-Hows, ihres ganzen Wesens, hat sie mich aus meinem Loch wieder rausgeholt. Ich bin so dankbar Estela gefunden zu haben.', rating: 5, _uid: 't1' },
        { component: 'testimonial_item', author: 'Petra S.', text: 'Als es mir richtig mies ging und ich fühlte, als würde ich in eine Depression rutschen, hat mir Estela geholfen, wieder in die Kraft und in den Flow zu kommen. Hauptsächlich mit ihrer unglaublich kraftvollen Chi Nei Tsang Massage.', rating: 5, _uid: 't2' },
        { component: 'testimonial_item', author: 'Valeria A.', text: 'Estela ist ein unglaublicher Mensch, ich bin bereits seit einem Jahr bei ihr und ich habe ihr so viel zu verdanken. Ihre Art, ihre Energie, ihr Wissen und ihr Können halfen mir extrem.', rating: 5, _uid: 't3' },
      ],
      cta_title: 'Finde deine Mitte. Spüre dein Chi.',
      cta_description: 'Tauche ein in einen Raum für Achtsamkeit, Heilung und innere Balance. Entdecke sanfte taoistische Praktiken, die Körper, Geist und Seele verbinden.',
    },
    en: {
      seo_title: 'Taoyin Center Ingolstadt – Qi Gong, Tao Yin & Chi Nei Tsang',
      seo_description: 'Your center for Qi Gong, Tao Yin, Chi Nei Tsang & holistic psychotherapy in Ingolstadt. Courses, treatments & training for inner peace, vitality and life balance.',
      seo_keywords: 'Qi Gong Ingolstadt, Tao Yin Ingolstadt, Chi Nei Tsang Ingolstadt, Psychotherapy Ingolstadt',
      hero_title: 'Welcome to the Taoyin Center Ingolstadt',
      hero_subtitle: 'Welcome to your space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul – for more energy, serenity and well-being in everyday life.',
      hero_button_1_text: 'Learn more',
      hero_button_1_link: '#Details',
      hero_button_2_text: 'Discover offers',
      hero_button_2_link: '#Angebote',
      angebote_title: 'My offerings for you',
      angebote_subtitle: 'Individually tailored to your needs – find the right offer for your path to more balance and well-being.',
      personal_title: '✨ My personal offer – what makes TaoBasis special',
      personal_features: [
        { component: 'feature_item', text: 'Individual Alignment: I address the needs of each individual person – no "one size fits all", but guidance that truly fits.', _uid: 'f1' },
        { component: 'feature_item', text: 'Holistic Connection: The combination of Qi Gong and Chi Nei Tsang amplifies the effect and creates sustainable healing impulses.', _uid: 'f2' },
        { component: 'feature_item', text: 'Authentic Guidance: I live what I teach. My work is carried by mindfulness, love of touch and the desire to promote healing.', _uid: 'f3' },
      ],
      personal_button_text: 'Get in touch',
      psycho_title: 'Holistic Psychotherapy',
      psycho_description: 'I work with classical methods such as relaxation techniques and behavioral therapy as well as alternative methods from the fields of meditation, Qigong, Tai Chi and nutrition based on the 5 elements.',
      psycho_button_text: 'Learn more',
      faq_title: 'Space for Mindfulness & Balance',
      faq_subtitle: 'Answers to frequently asked questions about our Taoist offerings, methods and your path to more well-being.',
      faq_items: [
        { component: 'faq_item', question: 'What is Tao Yin and how does it work?', answer: 'Tao Yin combines gentle movement, breathing and inner presence. The practice strengthens your spine, releases tension and brings your life energy (Chi) into flow. You find more calm, flexibility and inner balance.', _uid: 'faq1' },
        { component: 'faq_item', question: 'Who are the courses suitable for?', answer: 'Our offerings are for everyone – whether beginner, advanced, young or old. People with stress, back pain or the desire for more inner peace and self-care benefit especially.', _uid: 'faq2' },
        { component: 'faq_item', question: 'What is special about Chi Nei Tsang?', answer: 'Chi Nei Tsang is a deep abdominal massage that releases emotional and energetic blockages. It supports digestion, strengthens organs and helps you connect with your center.', _uid: 'faq3' },
        { component: 'faq_item', question: 'How can I book an appointment?', answer: 'You can easily make an appointment via WhatsApp, email or phone. We are happy to advise you personally and find the right offer for you.', _uid: 'faq4' },
      ],
      testimonials_eyebrow: 'Experiences from our community',
      testimonials_title: 'Voices that touch',
      testimonials_subtitle: 'Our participants share how Taoist practices enrich their lives.',
      testimonials_items: [
        { component: 'testimonial_item', author: 'D.L.', text: 'When I came to Estela at the beginning of the year, I was at the end of my mental and physical strength. Thanks to her experience, her know-how, her whole being, she pulled me out of my hole. I am so grateful to have found Estela.', rating: 5, _uid: 't1' },
        { component: 'testimonial_item', author: 'Petra S.', text: 'When I was really down and felt like I was slipping into depression, Estela helped me get back into strength and flow. Mainly with her incredibly powerful Chi Nei Tsang massage.', rating: 5, _uid: 't2' },
        { component: 'testimonial_item', author: 'Valeria A.', text: 'Estela is an incredible person, I have been with her for a year now and I owe her so much. Her way, her energy, her knowledge and her skills helped me immensely.', rating: 5, _uid: 't3' },
      ],
      cta_title: 'Find your center. Feel your Chi.',
      cta_description: 'Immerse yourself in a space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul.',
    },
    es: {
      seo_title: 'Centro Taoyin Ingolstadt – Qi Gong, Tao Yin & Chi Nei Tsang',
      seo_description: 'Tu centro de Qi Gong, Tao Yin, Chi Nei Tsang y psicoterapia holística en Ingolstadt. Cursos, tratamientos y formaciones para paz interior, vitalidad y equilibrio.',
      seo_keywords: 'Qi Gong Ingolstadt, Tao Yin Ingolstadt, Chi Nei Tsang Ingolstadt, Psicoterapia Ingolstadt',
      hero_title: 'Bienvenido al Centro Taoyin Ingolstadt',
      hero_subtitle: 'Bienvenido a tu espacio de atención plena, sanación y equilibrio interior. Descubre prácticas taoístas suaves que conectan cuerpo, mente y alma – para más energía, serenidad y bienestar en la vida diaria.',
      hero_button_1_text: 'Saber más',
      hero_button_1_link: '#Details',
      hero_button_2_text: 'Descubrir ofertas',
      hero_button_2_link: '#Angebote',
      angebote_title: 'Mis ofertas para ti',
      angebote_subtitle: 'Adaptadas individualmente a tus necesidades – encuentra la oferta adecuada para tu camino hacia más equilibrio y bienestar.',
      personal_title: '✨ Mi oferta personal – lo especial de TaoBasis',
      personal_features: [
        { component: 'feature_item', text: 'Armonización individual: Atiendo las necesidades de cada persona – sin "talla única", sino un acompañamiento que realmente encaja.', _uid: 'f1' },
        { component: 'feature_item', text: 'Conexión holística: La combinación de Qi Gong y Chi Nei Tsang amplifica el efecto y crea impulsos de sanación sostenibles.', _uid: 'f2' },
        { component: 'feature_item', text: 'Acompañamiento auténtico: Vivo lo que enseño. Mi trabajo está sustentado por la atención plena, el amor al tacto y el deseo de promover la sanación.', _uid: 'f3' },
      ],
      personal_button_text: 'Contactar',
      psycho_title: 'Psicoterapia holística',
      psycho_description: 'Trabajo con métodos clásicos como técnicas de relajación y terapia conductual, así como métodos alternativos de meditación, Qigong, Tai Chi y nutrición según los 5 elementos.',
      psycho_button_text: 'Saber más',
      faq_title: 'Espacio para Mindfulness & Equilibrio',
      faq_subtitle: 'Respuestas a preguntas frecuentes sobre nuestras ofertas taoístas, métodos y tu camino hacia más bienestar.',
      faq_items: [
        { component: 'faq_item', question: '¿Qué es Tao Yin y cómo funciona?', answer: 'Tao Yin combina movimiento suave, respiración y presencia interior. La práctica fortalece tu columna, libera tensiones y pone en flujo tu energía vital (Chi). Encuentras más calma, flexibilidad y equilibrio interior.', _uid: 'faq1' },
        { component: 'faq_item', question: '¿Para quién son adecuados los cursos?', answer: 'Nuestras ofertas son para todos – principiantes, avanzados, jóvenes o mayores. Especialmente se benefician personas con estrés, dolor de espalda o el deseo de más paz interior.', _uid: 'faq2' },
        { component: 'faq_item', question: '¿Qué tiene de especial Chi Nei Tsang?', answer: 'Chi Nei Tsang es un masaje abdominal profundo que libera bloqueos emocionales y energéticos. Apoya la digestión, fortalece los órganos y te ayuda a conectar con tu centro.', _uid: 'faq3' },
        { component: 'faq_item', question: '¿Cómo puedo reservar una cita?', answer: 'Puedes reservar fácilmente por WhatsApp, email o teléfono. Te asesoramos personalmente y encontramos juntos la oferta adecuada para ti.', _uid: 'faq4' },
      ],
      testimonials_eyebrow: 'Experiencias de nuestra comunidad',
      testimonials_title: 'Voces que conmueven',
      testimonials_subtitle: 'Nuestros participantes comparten cómo las prácticas taoístas enriquecen sus vidas.',
      testimonials_items: [
        { component: 'testimonial_item', author: 'D.L.', text: 'Cuando llegué a Estela a principios de año, estaba al final de mis fuerzas mentales y físicas. Gracias a su experiencia, su saber hacer, todo su ser, me sacó de mi pozo. Estoy tan agradecida de haber encontrado a Estela.', rating: 5, _uid: 't1' },
        { component: 'testimonial_item', author: 'Petra S.', text: 'Cuando me sentía realmente mal y sentía que iba a caer en depresión, Estela me ayudó a recuperar la fuerza y el flujo. Principalmente con su increíblemente poderoso masaje Chi Nei Tsang.', rating: 5, _uid: 't2' },
        { component: 'testimonial_item', author: 'Valeria A.', text: 'Estela es una persona increíble, llevo un año con ella y le debo tanto. Su forma de ser, su energía, su conocimiento y sus habilidades me ayudaron enormemente.', rating: 5, _uid: 't3' },
      ],
      cta_title: 'Encuentra tu centro. Siente tu Chi.',
      cta_description: 'Sumérgete en un espacio de mindfulness, sanación y equilibrio interior. Descubre prácticas taoístas suaves que conectan cuerpo, mente y alma.',
    },
  },

  // Service pages content now comes from PAGE_CONTENT / PAGE_CONTENT_PART2

  impressum: {
    de: {
      title: 'Impressum & Datenschutz',
    },
    en: {
      title: 'Legal Notice & Privacy Policy',
    },
    es: {
      title: 'Aviso Legal & Política de Privacidad',
    },
  },

  // Sample news articles (optional – shows how to create news via seed)
  news: {
    de: [
      {
        slug: 'neuer-qi-gong-kurs',
        name: 'Neuer Qi Gong Kurs (DE)',
        content: {
          title: 'Neuer Qi Gong Kurs ab April',
          excerpt: 'Ab April bieten wir einen neuen Einsteiger-Kurs für medizinisches Qi Gong an. Jetzt anmelden!',
          body: 'Wir freuen uns, einen neuen Qi Gong Kurs für Anfänger anzukündigen! Der Kurs findet ab April jeden Dienstag von 18:00 bis 19:30 Uhr statt. Lernen Sie sanfte Übungen, Atemtechniken und Energiearbeit für mehr Vitalität und Entspannung.\n\nDer Kurs ist ideal für alle, die einen Einstieg in die Welt des Qi Gong suchen. Keine Vorkenntnisse nötig.\n\nMelden Sie sich jetzt per WhatsApp oder E-Mail an!',
          date: '2026-03-15',
        },
      },
      {
        slug: 'chi-nei-tsang-workshop',
        name: 'Chi Nei Tsang Workshop (DE)',
        content: {
          title: 'Chi Nei Tsang Workshop im Mai',
          excerpt: 'Intensiv-Workshop: Lernen Sie die Grundlagen der taoistischen Bauchmassage in einem Wochenend-Workshop.',
          body: 'Im Mai veranstalten wir einen intensiven Wochenend-Workshop zu Chi Nei Tsang, der taoistischen Bauchmassage. Der Workshop richtet sich an alle, die diese kraftvolle Heilmethode kennenlernen möchten.\n\nInhalte: Grundlagen der Chi Nei Tsang Massage, Selbstbehandlung, Energetische Anatomie des Bauchraums.\n\nTermin: 10.-11. Mai 2026\nOrt: Taoyin Zentrum Ingolstadt\n\nPlätze sind begrenzt – sichern Sie sich Ihren Platz!',
          date: '2026-03-20',
        },
      },
    ],
    en: [
      {
        slug: 'neuer-qi-gong-kurs',
        name: 'New Qi Gong Course (EN)',
        content: {
          title: 'New Qi Gong Course Starting April',
          excerpt: 'Starting April, we offer a new beginner course for medical Qi Gong. Register now!',
          body: 'We are excited to announce a new Qi Gong course for beginners! The course takes place every Tuesday from 6:00 to 7:30 PM starting in April. Learn gentle exercises, breathing techniques and energy work for more vitality and relaxation.\n\nThe course is ideal for anyone looking to get started with Qi Gong. No prior experience needed.\n\nRegister now via WhatsApp or email!',
          date: '2026-03-15',
        },
      },
      {
        slug: 'chi-nei-tsang-workshop',
        name: 'Chi Nei Tsang Workshop (EN)',
        content: {
          title: 'Chi Nei Tsang Workshop in May',
          excerpt: 'Intensive workshop: Learn the basics of Taoist abdominal massage in a weekend workshop.',
          body: 'In May we are hosting an intensive weekend workshop on Chi Nei Tsang, the Taoist abdominal massage. The workshop is aimed at anyone who wants to learn about this powerful healing method.\n\nContent: Basics of Chi Nei Tsang massage, self-treatment, energetic anatomy of the abdomen.\n\nDate: May 10-11, 2026\nLocation: Taoyin Center Ingolstadt\n\nSpaces are limited – secure your spot!',
          date: '2026-03-20',
        },
      },
    ],
    es: [
      {
        slug: 'neuer-qi-gong-kurs',
        name: 'Nuevo Curso Qi Gong (ES)',
        content: {
          title: 'Nuevo Curso de Qi Gong desde Abril',
          excerpt: 'A partir de abril, ofrecemos un nuevo curso para principiantes de Qi Gong médico. ¡Inscríbete ahora!',
          body: '¡Nos complace anunciar un nuevo curso de Qi Gong para principiantes! El curso se llevará a cabo todos los martes de 18:00 a 19:30 a partir de abril. Aprende ejercicios suaves, técnicas de respiración y trabajo energético para más vitalidad y relajación.\n\nEl curso es ideal para todos los que buscan iniciarse en el mundo del Qi Gong. No se necesita experiencia previa.\n\n¡Inscríbete ahora por WhatsApp o email!',
          date: '2026-03-15',
        },
      },
      {
        slug: 'chi-nei-tsang-workshop',
        name: 'Taller Chi Nei Tsang (ES)',
        content: {
          title: 'Taller de Chi Nei Tsang en Mayo',
          excerpt: 'Taller intensivo: Aprende los fundamentos del masaje abdominal taoísta en un taller de fin de semana.',
          body: 'En mayo organizamos un taller intensivo de fin de semana sobre Chi Nei Tsang, el masaje abdominal taoísta. El taller está dirigido a todos los que quieran conocer este poderoso método de sanación.\n\nContenido: Fundamentos del masaje Chi Nei Tsang, autotratamiento, anatomía energética del abdomen.\n\nFecha: 10-11 de mayo de 2026\nLugar: Centro Taoyin Ingolstadt\n\n¡Las plazas son limitadas – asegura tu lugar!',
          date: '2026-03-20',
        },
      },
    ],
  },
};

async function createStories() {
  console.log('\n📝 Step 3: Creating Stories...');
  
  // Get folder IDs
  const deFolderId = await getFolderId('de');
  const enFolderId = await getFolderId('en');
  const esFolderId = await getFolderId('es');
  
  if (!deFolderId || !enFolderId || !esFolderId) {
    console.error('❌ Could not find all language folders. Run step 2 first.');
    console.log(`  DE: ${deFolderId}, EN: ${enFolderId}, ES: ${esFolderId}`);
    
    // Try to create them again
    await createFolders();
    return createStories(); // retry
  }
  
  const folders = { de: deFolderId, en: enFolderId, es: esFolderId };
  
  // 1. Global Settings
  console.log('\n  📌 Global Settings:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'global', `Global (${lang.toUpperCase()})`, 'global', CONTENT.global[lang]);
  }
  
  // 2. Home pages
  console.log('\n  🏠 Home Pages:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'home', `Home (${lang.toUpperCase()})`, 'page_home', CONTENT.home[lang]);
  }
  
  // Merge all page content
  const ALL_PAGES = { ...PAGE_CONTENT, ...PAGE_CONTENT_PART2 };

  // 3. Page-specific stories (taoyin, qi-gong, chi-nei-tsang, psychotherapie, therapien, behandlung, about, kontakt, not-found)
  console.log('\n  🧘 Page Stories (with full content):');
  for (const [key, page] of Object.entries(ALL_PAGES)) {
    for (const lang of ['de', 'en', 'es']) {
      const name = `${page.slug} (${lang.toUpperCase()})`;
      await createStory(folders[lang], page.slug, name, page.component, page.data[lang]);
    }
  }
  
  // 4. Impressum pages
  console.log('\n  📋 Impressum Pages:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'impressum', `Impressum (${lang.toUpperCase()})`, 'page_impressum', CONTENT.impressum[lang]);
  }

  // 5. News folders + sample articles
  console.log('\n  📰 News:');
  for (const lang of ['de', 'en', 'es']) {
    // Create news subfolder inside each language
    const newsFolder = await apiCall('POST', '/stories', {
      story: {
        name: `News (${lang.toUpperCase()})`,
        slug: 'news',
        parent_id: folders[lang],
        is_folder: true,
        default_root: 'news_article',
      },
    });
    if (newsFolder?.alreadyExists) {
      console.log(`  ✅ /${lang}/news/ (already exists)`);
    } else if (newsFolder) {
      console.log(`  ✅ /${lang}/news/`);
    }

    // Get news folder ID
    const newsFolderResult = await apiCall('GET', `/stories?with_slug=${lang}/news&is_folder=true`);
    const newsFolderId = newsFolderResult?.stories?.[0]?.id;
    if (!newsFolderId) {
      console.log(`  ⚠️ Could not find news folder for ${lang}`);
      continue;
    }

    // Create sample news articles
    if (CONTENT.news?.[lang]) {
      for (const article of CONTENT.news[lang]) {
        await createStory(newsFolderId, article.slug, article.name, 'news_article', article.content);
      }
    }
  }
}

// ════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════

async function main() {
  console.log('🚀 Storyblok Seed Script for Taoyin Zentrum Ingolstadt');
  console.log(`   Space ID: ${SPACE_ID}`);
  console.log(`   Region: ${REGION}`);
  
  // Test connection
  console.log('\n🔗 Testing connection...');
  const spaceInfo = await apiCall('GET', '');
  if (!spaceInfo?.space) {
    console.error('❌ Could not connect to Storyblok. Check your PAT and Space ID.');
    process.exit(1);
  }
  console.log(`✅ Connected to space: "${spaceInfo.space.name}"`);
  
  // Run steps
  await createComponents();
  await createFolders();
  await createStories();
  
  console.log('\n✅ Seeding complete!');
  console.log('\n📋 Summary:');
  console.log('   - 17+ Components created (incl. page-specific types)');
  console.log('   - 3 Language folders (de/en/es)');
  console.log('   - 42+ Stories (14 pages × 3 languages + news)');
  console.log('\n💡 Next steps:');
  console.log('   1. Go to https://app.storyblok.com');
  console.log('   2. Check your space and review the content');
  console.log('   3. Set VITE_STORYBLOK_ACCESS_TOKEN in .env');
}

main().catch(console.error);
