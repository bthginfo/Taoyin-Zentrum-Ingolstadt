/**
 * Storyblok RESEED Script – Deletes all existing content and reseeds
 * Includes ALL detail sections, angebot_card with Ort/Uhrzeit fields
 * 
 * Usage: node scripts/storyblok-reseed.mjs
 */

const SPACE_ID = '291082434696616';
const PAT = 'JHCxNjskFfbKg9s74qPzrAtt-153719275866521-K_Sz7uHwTvBfchYpFy27';
const API_BASE = 'https://mapi.storyblok.com/v1';

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function apiCall(method, path, body = null, retries = 3) {
  const url = `${API_BASE}/spaces/${SPACE_ID}${path}`;
  const opts = {
    method,
    headers: { 'Authorization': PAT, 'Content-Type': 'application/json' },
  };
  if (body) opts.body = JSON.stringify(body);

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, opts);
      if (res.status === 429) { console.log('  ⏳ Rate limited...'); await sleep(1500); continue; }
      if (res.status === 422) {
        const err = await res.json().catch(() => ({}));
        if (JSON.stringify(err).includes('already been taken')) return { alreadyExists: true };
        console.error(`  ❌ 422:`, JSON.stringify(err).substring(0, 200));
        return null;
      }
      if (!res.ok) {
        const t = await res.text().catch(() => '');
        console.error(`  ❌ ${res.status}: ${t.substring(0, 150)}`);
        if (attempt < retries - 1) { await sleep(500); continue; }
        return null;
      }
      if (res.status === 204) return { success: true };
      const data = await res.json();
      await sleep(250);
      return data;
    } catch (e) {
      console.error(`  ❌ Network: ${e.message}`);
      if (attempt < retries - 1) { await sleep(1000); continue; }
      return null;
    }
  }
  return null;
}

// ════════════════════════
// STEP 0: Delete ALL existing stories
// ════════════════════════

async function deleteAllStories() {
  console.log('\n🗑️  Step 0: Deleting all existing stories...');
  let page = 1;
  let deleted = 0;
  while (true) {
    const result = await apiCall('GET', `/stories?per_page=25&page=${page}`);
    if (!result?.stories?.length) break;
    for (const story of result.stories) {
      await apiCall('DELETE', `/stories/${story.id}`);
      deleted++;
      process.stdout.write(`  Deleted: ${deleted}\r`);
    }
    // After deletion page stays 1 since items shift
  }
  console.log(`  ✅ Deleted ${deleted} stories`);
}

async function deleteAllComponents() {
  console.log('\n🗑️  Deleting all existing components...');
  const result = await apiCall('GET', '/components');
  if (!result?.components) return;
  for (const comp of result.components) {
    await apiCall('DELETE', `/components/${comp.id}`);
    console.log(`  Deleted: ${comp.name}`);
  }
}

// ════════════════════════
// STEP 1: Components
// ════════════════════════

const COMPONENTS = [
  {
    name: 'global',
    display_name: 'Global Settings',
    is_root: true,
    is_nestable: false,
    schema: {
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
    name: 'angebot_card',
    display_name: 'Angebot Card',
    is_root: false,
    is_nestable: true,
    schema: {
      price: { type: 'text', display_name: 'Price', required: true },
      price_note: { type: 'text', display_name: 'Price Note' },
      title: { type: 'text', display_name: 'Title', required: true },
      description: { type: 'textarea', display_name: 'Description' },
      features: { type: 'textarea', display_name: 'Features (one per line)' },
      phone: { type: 'text', display_name: 'Phone' },
      email: { type: 'text', display_name: 'Email' },
      wide: { type: 'boolean', display_name: 'Wide Card' },
      ort: { type: 'text', display_name: 'Ort (optional)', description: 'Location – only shown if filled' },
      uhrzeit: { type: 'text', display_name: 'Uhrzeit (optional)', description: 'Time – only shown if filled' },
    },
  },
  {
    name: 'page_home',
    display_name: 'Home Page',
    is_root: true,
    is_nestable: false,
    schema: {
      seo_title: { type: 'text', display_name: 'SEO Title' },
      seo_description: { type: 'textarea', display_name: 'SEO Description' },
      seo_keywords: { type: 'text', display_name: 'SEO Keywords' },
      hero_title: { type: 'text', display_name: 'Hero Title' },
      hero_subtitle: { type: 'textarea', display_name: 'Hero Subtitle' },
      hero_image_1: { type: 'asset', display_name: 'Hero Image 1', filetypes: ['images'] },
      hero_image_2: { type: 'asset', display_name: 'Hero Image 2', filetypes: ['images'] },
      hero_button_1_text: { type: 'text', display_name: 'Hero Button 1 Text' },
      hero_button_1_link: { type: 'text', display_name: 'Hero Button 1 Link' },
      hero_button_2_text: { type: 'text', display_name: 'Hero Button 2 Text' },
      hero_button_2_link: { type: 'text', display_name: 'Hero Button 2 Link' },
      details_sections: { type: 'bloks', display_name: 'Detail Sections', restrict_type: '', restrict_components: true, component_whitelist: ['detail_card'] },
      angebote_title: { type: 'text', display_name: 'Angebote Title' },
      angebote_subtitle: { type: 'textarea', display_name: 'Angebote Subtitle' },
      angebote_cards: { type: 'bloks', display_name: 'Angebote Cards', restrict_type: '', restrict_components: true, component_whitelist: ['angebot_card'] },
      personal_title: { type: 'text', display_name: 'Personal Title' },
      personal_features: { type: 'bloks', display_name: 'Personal Features', restrict_type: '', restrict_components: true, component_whitelist: ['feature_item'] },
      personal_button_text: { type: 'text', display_name: 'Personal Button Text' },
      psycho_title: { type: 'text', display_name: 'Psycho Title' },
      psycho_description: { type: 'textarea', display_name: 'Psycho Description' },
      psycho_image: { type: 'asset', display_name: 'Psycho Image', filetypes: ['images'] },
      psycho_button_text: { type: 'text', display_name: 'Psycho Button Text' },
      faq_title: { type: 'text', display_name: 'FAQ Title' },
      faq_subtitle: { type: 'textarea', display_name: 'FAQ Subtitle' },
      faq_items: { type: 'bloks', display_name: 'FAQ Items', restrict_type: '', restrict_components: true, component_whitelist: ['faq_item'] },
      testimonials_eyebrow: { type: 'text', display_name: 'Testimonials Eyebrow' },
      testimonials_title: { type: 'text', display_name: 'Testimonials Title' },
      testimonials_subtitle: { type: 'textarea', display_name: 'Testimonials Subtitle' },
      testimonials_items: { type: 'bloks', display_name: 'Testimonials', restrict_type: '', restrict_components: true, component_whitelist: ['testimonial_item'] },
      cta_title: { type: 'text', display_name: 'CTA Title' },
      cta_description: { type: 'textarea', display_name: 'CTA Description' },
      cta_background: { type: 'asset', display_name: 'CTA Background', filetypes: ['images'] },
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
    schema: {
      seo_title: { type: 'text', display_name: 'SEO Title' },
      seo_description: { type: 'textarea', display_name: 'SEO Description' },
      title: { type: 'text', display_name: 'Title' },
      subtitle: { type: 'textarea', display_name: 'Subtitle' },
      content_html: { type: 'richtext', display_name: 'Content' },
    },
  },
  {
    name: 'page_kontakt',
    display_name: 'Contact Page',
    is_root: true,
    is_nestable: false,
    schema: {
      seo_title: { type: 'text', display_name: 'SEO Title' },
      seo_description: { type: 'textarea', display_name: 'SEO Description' },
      title: { type: 'text', display_name: 'Title' },
      subtitle: { type: 'textarea', display_name: 'Subtitle' },
      phone: { type: 'text', display_name: 'Phone' },
      email: { type: 'text', display_name: 'Email' },
      whatsapp: { type: 'text', display_name: 'WhatsApp' },
      address: { type: 'textarea', display_name: 'Address' },
    },
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
];

async function createComponents() {
  console.log('\n🧩 Step 1: Creating Components...');
  for (const comp of COMPONENTS) {
    const result = await apiCall('POST', '/components', { component: comp });
    console.log(`  ${result ? '✅' : '⚠️'} ${comp.name}`);
  }
}

// ════════════════════════
// STEP 2: Folders
// ════════════════════════

async function createFolders() {
  console.log('\n📁 Step 2: Creating Language Folders...');
  for (const lang of ['de', 'en', 'es']) {
    await apiCall('POST', '/stories', {
      story: { name: lang.toUpperCase(), slug: lang, is_folder: true, default_root: 'page_home' },
    });
    console.log(`  ✅ /${lang}/`);
  }
}

// ════════════════════════
// STEP 3: Stories with FULL content
// ════════════════════════

async function getFolderId(slug) {
  const result = await apiCall('GET', `/stories?with_slug=${slug}&is_folder=true`);
  return result?.stories?.[0]?.id || null;
}

async function createStory(parentId, slug, name, componentName, content) {
  const result = await apiCall('POST', '/stories', {
    story: { name, slug, parent_id: parentId, content: { component: componentName, ...content } },
    publish: 1,
  });
  console.log(`  ${result?.story ? '✅' : result?.alreadyExists ? '⚠️ exists' : '❌'} ${name}`);
  return !!result?.story;
}

// ══════════════════════════════════════
// DETAIL SECTIONS DATA (7 sections × 3 langs)
// ══════════════════════════════════════

function makeDetailSections(lang) {
  const sections = {
    de: [
      { _uid: 'ds1', component: 'detail_card', eyebrow: 'Ganzheitlich. Achtsam. Verbunden.', title: 'Tao Basis', description: '„TaoBasis – Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg', alt: 'Estela in Meditation – Tao Basis' }, button_text_1: 'Mehr erfahren über Tao Yin', button_link_1: { url: '/taoyin', linktype: 'url', cached_url: '/taoyin' }, button_text_2: 'Jetzt Angebote entdecken', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds2', component: 'detail_card', eyebrow: 'Tao Yin & Qigong', title: 'Einführung in Qi Gong', description: '„Qi Gong Kurs für Anfänger: Lernen Sie sanfte Übungen, Atemtechniken & Energiearbeit für Vitalität, Entspannung & mehr Lebensbalance."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53713513520b6bbe5b786_Estela-byaylin-33-min.jpg', alt: 'Estela – Qi Gong Praxis' }, button_text_1: 'Mehr erfahren über Qi Gong', button_link_1: { url: '/qi-gong', linktype: 'url', cached_url: '/qi-gong' }, button_text_2: 'Kurse ansehen', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: true },
      { _uid: 'ds3', component: 'detail_card', eyebrow: 'Tao Yin & Qigong', title: 'Medizinisches Qi Gong', description: '„Medizinisches Qi Gong – dreimal pro Woche: stärken Sie Ihr Immunsystem, bauen Sie Stress ab & finden Sie Energie für Körper & Geist."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53718065ce01562873ef1_Estela-byaylin-43.jpg', alt: 'Medizinisches Qi Gong Übung' }, button_text_1: 'Kurse ansehen', button_link_1: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds4', component: 'detail_card', eyebrow: 'Chi Nei Tsang', title: 'Chi Nei Tsang Behandlung', description: '„Chi Nei Tsang Bauchmassage: lösen Sie Blockaden, aktivieren Sie Selbstheilung & erleben Sie tiefe Entspannung für Körper & Seele."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371f98928ab373b92ff9_Estela-byaylin-59-min.jpg', alt: 'Chi Nei Tsang Behandlung' }, button_text_1: 'Mehr erfahren über Chi Nei Tsang', button_link_1: { url: '/chi-nei-tsang', linktype: 'url', cached_url: '/chi-nei-tsang' }, button_text_2: 'Jetzt Behandlung buchen', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: true },
      { _uid: 'ds5', component: 'detail_card', eyebrow: 'Chi Nei Tsang', title: 'Chi Nei Tsang Ausbildung', description: '„Chi Nei Tsang Ausbildung: lernen Sie die taoistische Bauchmassage & Selbstbehandlung, kombiniert mit Qi Gong für maximale Heilwirkung."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537205b0c2bd091d7b6a5_Estela-byaylin-58-min.jpg', alt: 'Chi Nei Tsang Ausbildung' }, button_text_1: 'Ausbildung buchen', button_link_1: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds6', component: 'detail_card', eyebrow: 'Ich berate und unterstütze Sie gerne', title: 'Praxis für ganzheitliche Psychotherapie', description: 'Lernen Sie die Kraft der Integration von Körper, Geist und Seele für Sich zu nutzen.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif', alt: 'Praxis für Psychotherapie' }, button_text_1: 'Zur Praxis', button_link_1: { url: '/psychotherapie', linktype: 'url', cached_url: '/psychotherapie' }, image_left: true },
      { _uid: 'ds7', component: 'detail_card', eyebrow: 'Estela Fuchs', title: 'Meine Geschichte', description: 'Nach einer langen Pause kehre ich mit neuer Kraft und Dankbarkeit zurück. Ein schwerer Bruch am Fußgelenk hat mich gezwungen, innezuhalten – und zugleich gezeigt, wie heilsam Qi Gong und taoistische Praktiken wirklich sind.\n\nSie haben mir geholfen, schneller zu regenerieren, wieder fest auf den Beinen zu stehen und tiefer in meine Praxis einzutauchen. Seit über 30 Jahren übe ich den Weg des Taoismus – heute mit noch mehr Überzeugung und dem Wunsch, diese Schätze mit anderen zu teilen.\n\nMeine Angebote sind mehr als Kurse – sie sind eine Einladung, die eigene Lebenskraft neu zu entdecken.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370f3e66ed943079d4c6_Estela-byaylin-26-min.jpg', alt: 'Estela Fuchs – Meine Geschichte' }, button_text_1: 'Mehr erfahren', button_link_1: { url: '/about', linktype: 'url', cached_url: '/about' }, image_left: false },
    ],
    en: [
      { _uid: 'ds1', component: 'detail_card', eyebrow: 'Holistic. Mindful. Connected.', title: 'Tao Basis', description: '"TaoBasis – Qi Gong courses & Chi Nei Tsang abdominal massage. Find calm, energy & inner balance.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg', alt: 'Estela in Meditation – Tao Basis' }, button_text_1: 'Learn more about Tao Yin', button_link_1: { url: '/en/taoyin', linktype: 'url', cached_url: '/en/taoyin' }, button_text_2: 'Discover offers', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds2', component: 'detail_card', eyebrow: 'Tao Yin & Qigong', title: 'Introduction to Qi Gong', description: '"Qi Gong course for beginners: Learn gentle exercises, breathing techniques & energy work for vitality, relaxation & more life balance."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53713513520b6bbe5b786_Estela-byaylin-33-min.jpg', alt: 'Estela – Qi Gong Practice' }, button_text_1: 'Learn more about Qi Gong', button_link_1: { url: '/en/qi-gong', linktype: 'url', cached_url: '/en/qi-gong' }, button_text_2: 'View courses', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: true },
      { _uid: 'ds3', component: 'detail_card', eyebrow: 'Tao Yin & Qigong', title: 'Medical Qi Gong', description: '"Medical Qi Gong – three times a week: strengthen your immune system, reduce stress & find energy for body & mind."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53718065ce01562873ef1_Estela-byaylin-43.jpg', alt: 'Medical Qi Gong Exercise' }, button_text_1: 'View courses', button_link_1: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds4', component: 'detail_card', eyebrow: 'Chi Nei Tsang', title: 'Chi Nei Tsang Treatment', description: '"Chi Nei Tsang abdominal massage: release blockages, activate self-healing & experience deep relaxation for body & soul."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371f98928ab373b92ff9_Estela-byaylin-59-min.jpg', alt: 'Chi Nei Tsang Treatment' }, button_text_1: 'Learn more about Chi Nei Tsang', button_link_1: { url: '/en/chi-nei-tsang', linktype: 'url', cached_url: '/en/chi-nei-tsang' }, button_text_2: 'Book treatment', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: true },
      { _uid: 'ds5', component: 'detail_card', eyebrow: 'Chi Nei Tsang', title: 'Chi Nei Tsang Training', description: '"Chi Nei Tsang training: learn the Taoist abdominal massage & self-treatment, combined with Qi Gong for maximum healing effect."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537205b0c2bd091d7b6a5_Estela-byaylin-58-min.jpg', alt: 'Chi Nei Tsang Training' }, button_text_1: 'Book training', button_link_1: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds6', component: 'detail_card', eyebrow: 'I advise and support you', title: 'Practice for Holistic Psychotherapy', description: 'Learn to harness the power of integrating body, mind and soul.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif', alt: 'Psychotherapy Practice' }, button_text_1: 'To the practice', button_link_1: { url: '/en/psychotherapie', linktype: 'url', cached_url: '/en/psychotherapie' }, image_left: true },
      { _uid: 'ds7', component: 'detail_card', eyebrow: 'Estela Fuchs', title: 'My Story', description: 'After a long break, I return with new strength and gratitude. A severe fracture of my ankle forced me to pause – and at the same time showed me how healing Qi Gong and Taoist practices truly are.\n\nThey helped me regenerate faster, stand firmly on my feet again and dive deeper into my practice. For over 30 years I have been walking the path of Taoism – today with even more conviction and the desire to share these treasures with others.\n\nMy offerings are more than courses – they are an invitation to rediscover your own life force.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370f3e66ed943079d4c6_Estela-byaylin-26-min.jpg', alt: 'Estela Fuchs – My Story' }, button_text_1: 'Learn more', button_link_1: { url: '/en/about', linktype: 'url', cached_url: '/en/about' }, image_left: false },
    ],
    es: [
      { _uid: 'ds1', component: 'detail_card', eyebrow: 'Holístico. Consciente. Conectado.', title: 'Tao Basis', description: '"TaoBasis – Cursos de Qi Gong y masaje abdominal Chi Nei Tsang. Encuentra calma, energía y equilibrio interior.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371146ec6241e81774b7_Estela-byaylin-52-min.jpg', alt: 'Estela en meditación – Tao Basis' }, button_text_1: 'Más sobre Tao Yin', button_link_1: { url: '/es/taoyin', linktype: 'url', cached_url: '/es/taoyin' }, button_text_2: 'Descubrir ofertas', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds2', component: 'detail_card', eyebrow: 'Tao Yin & Qigong', title: 'Introducción al Qi Gong', description: '"Curso de Qi Gong para principiantes: Aprende ejercicios suaves, técnicas de respiración y trabajo energético para vitalidad, relajación y más equilibrio."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53713513520b6bbe5b786_Estela-byaylin-33-min.jpg', alt: 'Estela – Práctica de Qi Gong' }, button_text_1: 'Más sobre Qi Gong', button_link_1: { url: '/es/qi-gong', linktype: 'url', cached_url: '/es/qi-gong' }, button_text_2: 'Ver cursos', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: true },
      { _uid: 'ds3', component: 'detail_card', eyebrow: 'Tao Yin & Qigong', title: 'Qi Gong Médico', description: '"Qi Gong Médico – tres veces por semana: fortalece tu sistema inmunológico, reduce el estrés y encuentra energía para cuerpo y mente."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c53718065ce01562873ef1_Estela-byaylin-43.jpg', alt: 'Ejercicio de Qi Gong Médico' }, button_text_1: 'Ver cursos', button_link_1: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds4', component: 'detail_card', eyebrow: 'Chi Nei Tsang', title: 'Tratamiento Chi Nei Tsang', description: '"Masaje abdominal Chi Nei Tsang: libera bloqueos, activa la autocuración y experimenta una relajación profunda para cuerpo y alma."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5371f98928ab373b92ff9_Estela-byaylin-59-min.jpg', alt: 'Tratamiento Chi Nei Tsang' }, button_text_1: 'Más sobre Chi Nei Tsang', button_link_1: { url: '/es/chi-nei-tsang', linktype: 'url', cached_url: '/es/chi-nei-tsang' }, button_text_2: 'Reservar tratamiento', button_link_2: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: true },
      { _uid: 'ds5', component: 'detail_card', eyebrow: 'Chi Nei Tsang', title: 'Formación Chi Nei Tsang', description: '"Formación Chi Nei Tsang: aprende el masaje abdominal taoísta y autotratamiento, combinado con Qi Gong para máximo efecto curativo."', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c537205b0c2bd091d7b6a5_Estela-byaylin-58-min.jpg', alt: 'Formación Chi Nei Tsang' }, button_text_1: 'Reservar formación', button_link_1: { url: '#Angebote', linktype: 'url', cached_url: '#Angebote' }, image_left: false },
      { _uid: 'ds6', component: 'detail_card', eyebrow: 'Te asesoro y apoyo', title: 'Consulta de Psicoterapia Holística', description: 'Aprende a aprovechar el poder de la integración de cuerpo, mente y alma.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c709e31ebcac5995a9622_a9db9b1a-d5b1-4270-a1b0-8044de34b697.avif', alt: 'Consulta de Psicoterapia' }, button_text_1: 'A la consulta', button_link_1: { url: '/es/psychotherapie', linktype: 'url', cached_url: '/es/psychotherapie' }, image_left: true },
      { _uid: 'ds7', component: 'detail_card', eyebrow: 'Estela Fuchs', title: 'Mi Historia', description: 'Después de una larga pausa, regreso con nueva fuerza y gratitud. Una fractura grave en el tobillo me obligó a detenerme – y al mismo tiempo me mostró cuán sanadores son realmente el Qi Gong y las prácticas taoístas.\n\nMe ayudaron a regenerarme más rápido, a volver a estar firme sobre mis pies y a sumergirme más profundamente en mi práctica. Desde hace más de 30 años camino por la senda del taoísmo – hoy con aún más convicción y el deseo de compartir estos tesoros con otros.\n\nMis ofertas son más que cursos – son una invitación a redescubrir tu propia fuerza vital.', image: { filename: 'https://cdn.prod.website-files.com/6890d61524a7dba397203fde/68c5370f3e66ed943079d4c6_Estela-byaylin-26-min.jpg', alt: 'Estela Fuchs – Mi Historia' }, button_text_1: 'Saber más', button_link_1: { url: '/es/about', linktype: 'url', cached_url: '/es/about' }, image_left: false },
    ],
  };
  return sections[lang];
}

// ══════════════════════════════════════
// HOME PAGE CONTENT
// ══════════════════════════════════════

function makeHomeContent(lang) {
  const base = {
    de: {
      seo_title: 'Taoyin Zentrum Ingolstadt – Qi Gong, Tao Yin & Chi Nei Tsang',
      seo_description: 'Dein Zentrum für Qi Gong, Tao Yin, Chi Nei Tsang & ganzheitliche Psychotherapie in Ingolstadt.',
      seo_keywords: 'Qi Gong Ingolstadt, Tao Yin Ingolstadt, Chi Nei Tsang Ingolstadt',
      hero_title: 'Willkommen im Taoyin Zentrum Ingolstadt',
      hero_subtitle: 'Willkommen in deinem Raum für Achtsamkeit, Heilung und innere Balance. Entdecke sanfte taoistische Praktiken, die Körper, Geist und Seele verbinden – für mehr Energie, Gelassenheit und Wohlbefinden im Alltag.',
      hero_button_1_text: 'Mehr erfahren', hero_button_1_link: '#Details',
      hero_button_2_text: 'Angebote entdecken', hero_button_2_link: '#Angebote',
      angebote_title: 'Meine Angebote für dich',
      angebote_subtitle: 'Individuell abgestimmt auf deine Bedürfnisse – finde das passende Angebot für deinen Weg zu mehr Balance und Wohlbefinden.',
      angebote_cards: [
        { _uid: 'ac1', component: 'angebot_card', price: '280 €', price_note: '(3,5 - 4 Std.)', title: 'Tao Basis (Einführung)', description: '„TaoBasis – Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.', features: 'Tao Grundlagen\nEinsteigerkurs Qi Gong\nGrundlagen der Chi Nei Tsang Massage', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac2', component: 'angebot_card', price: '150 €', price_note: '(Zehnerkarte)', title: 'Medizinisches Qi Gong', description: 'Dreimal pro Woche treffen wir uns zur gemeinsamen Übungsstunde. Regelmäßiges Qi Gong wirkt wie Medizin für Körper und Geist.', features: 'Stärkung des Immunsystems\nVerbesserung von Haltung und Beweglichkeit\nReduzierung von Stress, Müdigkeit und Schmerzen\nmehr Energie im Alltag', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac3', component: 'angebot_card', price: '95 €', price_note: '(Einführungspreis)', title: 'Chi Nei Tsang Behandlung', description: 'Chi Nei Tsang ist eine taoistische Massagekunst, die die inneren Organe harmonisiert und den Energiefluss (Qi) im Körper aktiviert.', features: 'Blockaden in den Meridianen lösen\nSchmerzen und Verspannungen lindern\nIhre Selbstheilungskräfte aktivieren\nKörper, Geist und Emotionen ins Gleichgewicht bringen', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac4', component: 'angebot_card', price: '5.500€', price_note: '(Jahresausbildung mit offizieller Zertifizierung)', title: 'Chi Nei Tsang Ausbildung', description: 'Lernen Sie die Kunst der Selbstheilung durch Berührung.\nIn der Ausbildung erfahren Sie Schritt für Schritt.', features: 'wie Sie Qi-Blockaden erkennen und lösen\ndie Meridiane öffnen und Ihre Lebensenergie stärken\nmit gezielten Massagegriffen Körper und Seele in Balance bringen\nTechniken, die Sie für sich selbst und andere anwenden können', phone: '+4915115539416', email: 'info@taoyin-zentrum.de', wide: true },
      ],
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
        { component: 'faq_item', question: 'Was ist Tao Yin und wie wirkt es?', answer: 'Tao Yin verbindet sanfte Bewegung, Atmung und innere Präsenz. Die Praxis stärkt deine Wirbelsäule, löst Verspannungen und bringt deine Lebensenergie (Chi) in Fluss.', _uid: 'faq1' },
        { component: 'faq_item', question: 'Für wen sind die Kurse geeignet?', answer: 'Unsere Angebote richten sich an alle – egal ob Anfänger*in, Fortgeschrittene, jung oder alt. Besonders profitieren Menschen mit Stress, Rückenschmerzen oder dem Wunsch nach mehr innerer Ruhe.', _uid: 'faq2' },
        { component: 'faq_item', question: 'Was ist das Besondere an Chi Nei Tsang?', answer: 'Chi Nei Tsang ist eine tiefgehende Bauchmassage, die emotionale und energetische Blockaden löst. Sie unterstützt die Verdauung, stärkt die Organe und hilft dir, dich mit deinem Zentrum zu verbinden.', _uid: 'faq3' },
        { component: 'faq_item', question: 'Wie kann ich einen Termin buchen?', answer: 'Du kannst ganz einfach per WhatsApp, E-Mail oder Telefon einen Termin vereinbaren. Wir beraten dich gerne persönlich.', _uid: 'faq4' },
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
      seo_description: 'Your center for Qi Gong, Tao Yin, Chi Nei Tsang & holistic psychotherapy in Ingolstadt.',
      seo_keywords: 'Qi Gong Ingolstadt, Tao Yin Ingolstadt, Chi Nei Tsang Ingolstadt',
      hero_title: 'Welcome to the Taoyin Center Ingolstadt',
      hero_subtitle: 'Welcome to your space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul – for more energy, serenity and well-being in everyday life.',
      hero_button_1_text: 'Learn more', hero_button_1_link: '#Details',
      hero_button_2_text: 'Discover offers', hero_button_2_link: '#Angebote',
      angebote_title: 'My offerings for you',
      angebote_subtitle: 'Individually tailored to your needs – find the right offer for your path to more balance and well-being.',
      angebote_cards: [
        { _uid: 'ac1', component: 'angebot_card', price: '280 €', price_note: '(3.5 - 4 hrs)', title: 'Tao Basis (Introduction)', description: '"TaoBasis – Qi Gong courses & Chi Nei Tsang abdominal massage. Find calm, energy & inner balance.', features: 'Tao Fundamentals\nBeginner Qi Gong Course\nChi Nei Tsang Massage Basics', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac2', component: 'angebot_card', price: '150 €', price_note: '(10-session card)', title: 'Medical Qi Gong', description: 'Three times a week we meet for joint practice sessions. Regular Qi Gong works like medicine for body and mind.', features: 'Strengthening the immune system\nImproving posture and flexibility\nReducing stress, fatigue and pain\nMore energy in daily life', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac3', component: 'angebot_card', price: '95 €', price_note: '(introductory price)', title: 'Chi Nei Tsang Treatment', description: 'Chi Nei Tsang is a Taoist massage art that harmonizes internal organs and activates energy flow (Qi).', features: 'Release meridian blockages\nRelieve pain and tension\nActivate self-healing powers\nBalance body, mind and emotions', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac4', component: 'angebot_card', price: '5,500€', price_note: '(Annual training with official certification)', title: 'Chi Nei Tsang Training', description: 'Learn the art of self-healing through touch.\nIn the training you learn step by step.', features: 'How to recognize and release Qi blockages\nOpen meridians and strengthen life energy\nBalance body and soul with targeted massage\nTechniques for yourself and others', phone: '+4915115539416', email: 'info@taoyin-zentrum.de', wide: true },
      ],
      personal_title: '✨ My personal offer – what makes TaoBasis special',
      personal_features: [
        { component: 'feature_item', text: 'Individual Alignment: I address the needs of each individual person – no "one size fits all", but guidance that truly fits.', _uid: 'f1' },
        { component: 'feature_item', text: 'Holistic Connection: The combination of Qi Gong and Chi Nei Tsang amplifies the effect and creates sustainable healing impulses.', _uid: 'f2' },
        { component: 'feature_item', text: 'Authentic Guidance: I live what I teach. My work is carried by mindfulness, love of touch and the desire to promote healing.', _uid: 'f3' },
      ],
      personal_button_text: 'Get in touch',
      psycho_title: 'Holistic Psychotherapy',
      psycho_description: 'I work with classical methods such as relaxation techniques and behavioral therapy as well as alternative methods from meditation, Qigong, Tai Chi and nutrition based on the 5 elements.',
      psycho_button_text: 'Learn more',
      faq_title: 'Space for Mindfulness & Balance',
      faq_subtitle: 'Answers to frequently asked questions about our Taoist offerings, methods and your path to more well-being.',
      faq_items: [
        { component: 'faq_item', question: 'What is Tao Yin and how does it work?', answer: 'Tao Yin combines gentle movement, breathing and inner presence. The practice strengthens your spine, releases tension and brings your life energy (Chi) into flow.', _uid: 'faq1' },
        { component: 'faq_item', question: 'Who are the courses suitable for?', answer: 'Our offerings are for everyone – whether beginner, advanced, young or old. People with stress, back pain or the desire for more inner peace benefit especially.', _uid: 'faq2' },
        { component: 'faq_item', question: 'What is special about Chi Nei Tsang?', answer: 'Chi Nei Tsang is a deep abdominal massage that releases emotional and energetic blockages. It supports digestion, strengthens organs and helps you connect with your center.', _uid: 'faq3' },
        { component: 'faq_item', question: 'How can I book an appointment?', answer: 'You can easily make an appointment via WhatsApp, email or phone. We are happy to advise you personally.', _uid: 'faq4' },
      ],
      testimonials_eyebrow: 'Experiences from our community',
      testimonials_title: 'Voices that touch',
      testimonials_subtitle: 'Our participants share how Taoist practices enrich their lives.',
      testimonials_items: [
        { component: 'testimonial_item', author: 'D.L.', text: 'When I came to Estela at the beginning of the year, I was at the end of my mental and physical strength. Thanks to her experience, her know-how, her whole being, she pulled me out of my hole. I am so grateful to have found Estela.', rating: 5, _uid: 't1' },
        { component: 'testimonial_item', author: 'Petra S.', text: 'When I was really down and felt like I was slipping into depression, Estela helped me get back into strength and flow. Mainly with her incredibly powerful Chi Nei Tsang massage.', rating: 5, _uid: 't2' },
        { component: 'testimonial_item', author: 'Valeria A.', text: 'Estela is an incredible person, I have been with her for a year and I owe her so much. Her way, her energy, her knowledge and skills helped me immensely.', rating: 5, _uid: 't3' },
      ],
      cta_title: 'Find your center. Feel your Chi.',
      cta_description: 'Immerse yourself in a space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul.',
    },
    es: {
      seo_title: 'Centro Taoyin Ingolstadt – Qi Gong, Tao Yin & Chi Nei Tsang',
      seo_description: 'Tu centro de Qi Gong, Tao Yin, Chi Nei Tsang y psicoterapia holística en Ingolstadt.',
      seo_keywords: 'Qi Gong Ingolstadt, Tao Yin Ingolstadt, Chi Nei Tsang Ingolstadt',
      hero_title: 'Bienvenido al Centro Taoyin Ingolstadt',
      hero_subtitle: 'Bienvenido a tu espacio de atención plena, sanación y equilibrio interior. Descubre prácticas taoístas suaves que conectan cuerpo, mente y alma – para más energía, serenidad y bienestar.',
      hero_button_1_text: 'Saber más', hero_button_1_link: '#Details',
      hero_button_2_text: 'Descubrir ofertas', hero_button_2_link: '#Angebote',
      angebote_title: 'Mis ofertas para ti',
      angebote_subtitle: 'Adaptadas individualmente a tus necesidades – encuentra la oferta adecuada para tu camino hacia más equilibrio.',
      angebote_cards: [
        { _uid: 'ac1', component: 'angebot_card', price: '280 €', price_note: '(3,5 - 4 hrs)', title: 'Tao Basis (Introducción)', description: '"TaoBasis – Cursos de Qi Gong y masaje abdominal Chi Nei Tsang. Encuentra calma, energía y equilibrio interior.', features: 'Fundamentos del Tao\nCurso inicial de Qi Gong\nBases del masaje Chi Nei Tsang', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac2', component: 'angebot_card', price: '150 €', price_note: '(tarjeta de 10 sesiones)', title: 'Qi Gong Médico', description: 'Tres veces por semana nos reunimos para la sesión de práctica conjunta. El Qi Gong regular funciona como medicina para cuerpo y mente.', features: 'Fortalecimiento del sistema inmunológico\nMejora de postura y flexibilidad\nReducción de estrés, fatiga y dolor\nMás energía en la vida diaria', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac3', component: 'angebot_card', price: '95 €', price_note: '(precio de introducción)', title: 'Tratamiento Chi Nei Tsang', description: 'Chi Nei Tsang es un arte de masaje taoísta que armoniza los órganos internos y activa el flujo energético (Qi).', features: 'Liberar bloqueos de meridianos\nAliviar dolor y tensiones\nActivar poderes de autocuración\nEquilibrar cuerpo, mente y emociones', phone: '+4915115539416', email: 'info@taoyin-zentrum.de' },
        { _uid: 'ac4', component: 'angebot_card', price: '5.500€', price_note: '(Formación anual con certificación oficial)', title: 'Formación Chi Nei Tsang', description: 'Aprende el arte de la autocuración a través del tacto.\nEn la formación aprendes paso a paso.', features: 'Cómo reconocer y liberar bloqueos de Qi\nAbrir meridianos y fortalecer energía vital\nEquilibrar cuerpo y alma con masaje dirigido\nTécnicas para ti y para otros', phone: '+4915115539416', email: 'info@taoyin-zentrum.de', wide: true },
      ],
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
      faq_subtitle: 'Respuestas a preguntas frecuentes sobre nuestras ofertas taoístas y tu camino hacia más bienestar.',
      faq_items: [
        { component: 'faq_item', question: '¿Qué es Tao Yin y cómo funciona?', answer: 'Tao Yin combina movimiento suave, respiración y presencia interior. La práctica fortalece tu columna, libera tensiones y pone en flujo tu energía vital (Chi).', _uid: 'faq1' },
        { component: 'faq_item', question: '¿Para quién son adecuados los cursos?', answer: 'Nuestras ofertas son para todos – principiantes, avanzados, jóvenes o mayores. Especialmente se benefician personas con estrés, dolor de espalda o deseo de más paz interior.', _uid: 'faq2' },
        { component: 'faq_item', question: '¿Qué tiene de especial Chi Nei Tsang?', answer: 'Chi Nei Tsang es un masaje abdominal profundo que libera bloqueos emocionales y energéticos. Apoya la digestión, fortalece los órganos y te ayuda a conectar con tu centro.', _uid: 'faq3' },
        { component: 'faq_item', question: '¿Cómo puedo reservar una cita?', answer: 'Puedes reservar fácilmente por WhatsApp, email o teléfono. Te asesoramos personalmente.', _uid: 'faq4' },
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
  };
  
  const content = base[lang];
  content.details_sections = makeDetailSections(lang);
  return content;
}

// Other pages content
const PAGES = {
  global: {
    de: { footer_description: 'Raum für Achtsamkeit & Balance', footer_email_1: 'info@taoyin-zentrum.de', footer_email_2: 'info@estela-fuchs.com', footer_instagram_url: 'https://www.instagram.com/taoyin_zentrum/', whatsapp_number: '+4915115539416', contact_phone: '+4915115539416', contact_email: 'info@taoyin-zentrum.de' },
    en: { footer_description: 'Space for Mindfulness & Balance', footer_email_1: 'info@taoyin-zentrum.de', footer_email_2: 'info@estela-fuchs.com', footer_instagram_url: 'https://www.instagram.com/taoyin_zentrum/', whatsapp_number: '+4915115539416', contact_phone: '+4915115539416', contact_email: 'info@taoyin-zentrum.de' },
    es: { footer_description: 'Espacio para Mindfulness & Equilibrio', footer_email_1: 'info@taoyin-zentrum.de', footer_email_2: 'info@estela-fuchs.com', footer_instagram_url: 'https://www.instagram.com/taoyin_zentrum/', whatsapp_number: '+4915115539416', contact_phone: '+4915115539416', contact_email: 'info@taoyin-zentrum.de' },
  },
  taoyin: {
    de: { seo_title: 'Tao Yin Ingolstadt – Taoistische Bewegungs- & Atempraxis', seo_description: 'Tao Yin in Ingolstadt: Sanfte Dehnungen, fließende Bewegungen und gezielte Atemtechniken.', seo_keywords: 'Tao Yin Ingolstadt', hero_title: 'Taoyin: was bedeutet es?', hero_subtitle: 'Tao Yin ist eine jahrtausendealte chinesische Bewegungs- und Atempraxis zur Förderung von Gesundheit und innerer Balance.' },
    en: { seo_title: 'Tao Yin Ingolstadt – Taoist Movement & Breathing Practice', seo_description: 'Tao Yin in Ingolstadt: Gentle stretches, flowing movements and targeted breathing techniques.', seo_keywords: 'Tao Yin Ingolstadt', hero_title: 'Taoyin: What does it mean?', hero_subtitle: 'Tao Yin is an ancient Chinese movement and breathing practice for promoting health and inner balance.' },
    es: { seo_title: 'Tao Yin Ingolstadt – Práctica Taoísta de Movimiento y Respiración', seo_description: 'Tao Yin en Ingolstadt: Estiramientos suaves, movimientos fluidos y técnicas de respiración.', seo_keywords: 'Tao Yin Ingolstadt', hero_title: 'Taoyin: ¿Qué significa?', hero_subtitle: 'Tao Yin es una milenaria práctica china de movimiento y respiración para la salud y el equilibrio interior.' },
  },
  'qi-gong': {
    de: { seo_title: 'Qi Gong Ingolstadt – Medizinisches Qigong & Kurse', seo_description: 'Qi Gong Kurse in Ingolstadt: Stärke dein Immunsystem, finde innere Ruhe.', seo_keywords: 'Qi Gong Ingolstadt', hero_title: 'Was ist Qigong?', hero_subtitle: 'Qigong ist eine traditionelle chinesische Praxis zur Pflege von Gesundheit, Energie und innerer Ruhe.' },
    en: { seo_title: 'Qi Gong Ingolstadt – Medical Qigong & Courses', seo_description: 'Qi Gong courses in Ingolstadt: Strengthen your immune system, find inner peace.', seo_keywords: 'Qi Gong Ingolstadt', hero_title: 'What is Qigong?', hero_subtitle: 'Qigong is a traditional Chinese practice for cultivating health, energy and inner calm.' },
    es: { seo_title: 'Qi Gong Ingolstadt – Qigong Médico & Cursos', seo_description: 'Cursos de Qi Gong en Ingolstadt: Fortalece tu sistema inmunológico, encuentra paz interior.', seo_keywords: 'Qi Gong Ingolstadt', hero_title: '¿Qué es Qigong?', hero_subtitle: 'Qigong es una práctica tradicional china para cultivar la salud, la energía y la calma interior.' },
  },
  'chi-nei-tsang': {
    de: { seo_title: 'Chi Nei Tsang Ingolstadt – Taoistische Bauchmassage', seo_description: 'Chi Nei Tsang Behandlung in Ingolstadt: Taoistische Bauchmassage für Verdauung und emotionales Gleichgewicht.', seo_keywords: 'Chi Nei Tsang Ingolstadt', hero_title: 'Chi Nei Tsang Massage', hero_subtitle: 'Chi Nei Tsang ist eine traditionelle taoistische Bauchmassage, die innere Organe sanft löst und energetisch harmonisiert.' },
    en: { seo_title: 'Chi Nei Tsang Ingolstadt – Taoist Abdominal Massage', seo_description: 'Chi Nei Tsang treatment in Ingolstadt: Taoist abdominal massage for digestion and emotional balance.', seo_keywords: 'Chi Nei Tsang Ingolstadt', hero_title: 'Chi Nei Tsang Massage', hero_subtitle: 'Chi Nei Tsang is a traditional Taoist abdominal massage that gently releases and energetically harmonizes the internal organs.' },
    es: { seo_title: 'Chi Nei Tsang Ingolstadt – Masaje Abdominal Taoísta', seo_description: 'Tratamiento Chi Nei Tsang en Ingolstadt: Masaje abdominal taoísta para digestión y equilibrio emocional.', seo_keywords: 'Chi Nei Tsang Ingolstadt', hero_title: 'Masaje Chi Nei Tsang', hero_subtitle: 'Chi Nei Tsang es un masaje abdominal taoísta tradicional que libera y armoniza energéticamente los órganos internos.' },
  },
  psychotherapie: {
    de: { seo_title: 'Psychotherapie Ingolstadt – Ganzheitliche Heilung', seo_description: 'Ganzheitliche Psychotherapie in Ingolstadt: Verhaltenstherapie, Meditation & körperorientierte Psychotherapie.', seo_keywords: 'Psychotherapie Ingolstadt', hero_title: 'Willkommen in meiner Praxis für ganzheitliche Psychotherapie', hero_subtitle: 'Ich arbeite mit klassischen Verfahren wie Entspannungstechniken und Verhaltenstherapie sowie mit alternativen Methoden.' },
    en: { seo_title: 'Psychotherapy Ingolstadt – Holistic Healing', seo_description: 'Holistic psychotherapy in Ingolstadt: Behavioral therapy, meditation & body-oriented psychotherapy.', seo_keywords: 'Psychotherapy Ingolstadt', hero_title: 'Welcome to my practice for holistic psychotherapy', hero_subtitle: 'I work with classical methods like relaxation techniques and behavioral therapy as well as alternative methods.' },
    es: { seo_title: 'Psicoterapia Ingolstadt – Sanación Holística', seo_description: 'Psicoterapia holística en Ingolstadt: Terapia conductual, meditación y psicoterapia corporal.', seo_keywords: 'Psicoterapia Ingolstadt', hero_title: 'Bienvenido a mi consulta de psicoterapia holística', hero_subtitle: 'Trabajo con métodos clásicos como técnicas de relajación y terapia conductual, así como métodos alternativos.' },
  },
  about: {
    de: { seo_title: 'Über Estela Fuchs – Taoismus & Psychotherapie Ingolstadt', seo_description: 'Estela Fuchs: Über 30 Jahre Erfahrung in Taoismus, Qi Gong und Psychotherapie.', title: 'Estela Fuchs', subtitle: 'Lernen Sie mich kennen.' },
    en: { seo_title: 'About Estela Fuchs – Taoism & Psychotherapy Ingolstadt', seo_description: 'Estela Fuchs: Over 30 years of experience in Taoism, Qi Gong and psychotherapy.', title: 'Estela Fuchs', subtitle: 'Get to know me.' },
    es: { seo_title: 'Sobre Estela Fuchs – Taoísmo & Psicoterapia Ingolstadt', seo_description: 'Estela Fuchs: Más de 30 años de experiencia en taoísmo, Qi Gong y psicoterapia.', title: 'Estela Fuchs', subtitle: 'Conóceme.' },
  },
  kontakt: {
    de: { seo_title: 'Kontakt – Taoyin Zentrum Ingolstadt', seo_description: 'Taoyin Zentrum: Bei der Schleifmühle 34b, 85049 Ingolstadt.', title: 'Anfahrt & Kontakt', subtitle: 'Wir freuen uns auf Ihre Nachricht', phone: '+4915115539416', email: 'info@taoyin-zentrum.de', whatsapp: '+4915115539416', address: 'Bei der Schleifmühle 34b, 85049 Ingolstadt' },
    en: { seo_title: 'Contact – Taoyin Center Ingolstadt', seo_description: 'Taoyin Center: Bei der Schleifmühle 34b, 85049 Ingolstadt.', title: 'Directions & Contact', subtitle: 'We look forward to hearing from you', phone: '+4915115539416', email: 'info@taoyin-zentrum.de', whatsapp: '+4915115539416', address: 'Bei der Schleifmühle 34b, 85049 Ingolstadt, Germany' },
    es: { seo_title: 'Contacto – Centro Taoyin Ingolstadt', seo_description: 'Centro Taoyin: Bei der Schleifmühle 34b, 85049 Ingolstadt.', title: 'Cómo llegar & Contacto', subtitle: 'Esperamos su mensaje', phone: '+4915115539416', email: 'info@taoyin-zentrum.de', whatsapp: '+4915115539416', address: 'Bei der Schleifmühle 34b, 85049 Ingolstadt, Alemania' },
  },
  impressum: {
    de: { title: 'Impressum & Datenschutz' },
    en: { title: 'Legal Notice & Privacy Policy' },
    es: { title: 'Aviso Legal & Política de Privacidad' },
  },
};

async function createStories() {
  console.log('\n📝 Step 3: Creating Stories...');
  
  const deFolderId = await getFolderId('de');
  const enFolderId = await getFolderId('en');
  const esFolderId = await getFolderId('es');
  
  if (!deFolderId || !enFolderId || !esFolderId) {
    console.error('❌ Missing folders. Got:', { deFolderId, enFolderId, esFolderId });
    return;
  }
  
  const folders = { de: deFolderId, en: enFolderId, es: esFolderId };
  
  // Global
  console.log('\n  📌 Global:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'global', `Global (${lang.toUpperCase()})`, 'global', PAGES.global[lang]);
  }
  
  // Home (with detail sections!)
  console.log('\n  🏠 Home:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'home', `Home (${lang.toUpperCase()})`, 'page_home', makeHomeContent(lang));
  }
  
  // Service pages
  const services = ['taoyin', 'qi-gong', 'chi-nei-tsang', 'psychotherapie'];
  console.log('\n  🧘 Services:');
  for (const page of services) {
    for (const lang of ['de', 'en', 'es']) {
      await createStory(folders[lang], page, `${page} (${lang.toUpperCase()})`, 'page_service', PAGES[page][lang]);
    }
  }
  
  // About
  console.log('\n  👤 About:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'about', `About (${lang.toUpperCase()})`, 'page_about', PAGES.about[lang]);
  }
  
  // Kontakt
  console.log('\n  📞 Kontakt:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'kontakt', `Kontakt (${lang.toUpperCase()})`, 'page_kontakt', PAGES.kontakt[lang]);
  }
  
  // Impressum
  console.log('\n  📋 Impressum:');
  for (const lang of ['de', 'en', 'es']) {
    await createStory(folders[lang], 'impressum', `Impressum (${lang.toUpperCase()})`, 'page_impressum', PAGES.impressum[lang]);
  }
}

// ════════════════════════
// MAIN
// ════════════════════════

async function main() {
  console.log('🚀 Storyblok RESEED – Taoyin Zentrum Ingolstadt');
  
  const spaceInfo = await apiCall('GET', '');
  if (!spaceInfo?.space) {
    console.error('❌ Cannot connect. Check PAT/Space ID.');
    process.exit(1);
  }
  console.log(`✅ Connected: "${spaceInfo.space.name}"`);
  
  await deleteAllStories();
  await deleteAllComponents();
  await createComponents();
  await createFolders();
  await createStories();
  
  console.log('\n✅ RESEED complete!');
  console.log('   - 11 Components (incl. angebot_card with Ort/Uhrzeit)');
  console.log('   - 3 Language folders (de/en/es)');
  console.log('   - 30 Stories (10 pages × 3 langs)');
  console.log('   - 7 Detail sections per Home page (21 total)');
  console.log('   - 4 Angebot cards per Home page (12 total)');
}

main().catch(console.error);
