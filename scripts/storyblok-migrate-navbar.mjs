#!/usr/bin/env node
/**
 * Migration: Add navbar_categories to Global component in Storyblok
 * Creates nav_category and nav_item components, updates global schema,
 * and seeds navbar data for all languages.
 *
 * Usage:
 *   STORYBLOK_SPACE_ID=... STORYBLOK_PAT=... node scripts/storyblok-migrate-navbar.mjs
 */

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;
const PAT = process.env.STORYBLOK_PAT;

if (!SPACE_ID || !PAT) {
  console.error("❌ STORYBLOK_SPACE_ID and STORYBLOK_PAT env vars required");
  process.exit(1);
}

const BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

async function apiCall(method, path, body) {
  const opts = {
    method,
    headers: { Authorization: PAT, "Content-Type": "application/json" },
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(`${BASE}${path}`, opts);
  if (!res.ok) {
    const text = await res.text();
    if (text.includes("already taken")) return { alreadyExists: true };
    console.error(`  ❌ ${method} ${path}: ${res.status} ${text}`);
    return null;
  }
  return res.json();
}

// ── Step 1: Create nestable components ──
async function createNestableComponents() {
  console.log("🧩 Creating nav components...");

  const components = [
    {
      name: "nav_item",
      display_name: "Navigation Item",
      is_root: false,
      is_nestable: true,
      schema: {
        label: { type: "text", display_name: "Label", required: true },
        description: { type: "text", display_name: "Description" },
        href: { type: "text", display_name: "Link Path", required: true },
      },
    },
    {
      name: "nav_category",
      display_name: "Navigation Category",
      is_root: false,
      is_nestable: true,
      schema: {
        category: { type: "text", display_name: "Category Name", required: true },
        items: {
          type: "bloks",
          display_name: "Navigation Items",
          restrict_type: "",
          restrict_components: true,
          component_whitelist: ["nav_item"],
        },
      },
    },
  ];

  for (const comp of components) {
    const existing = await apiCall("GET", "/components");
    const found = existing?.components?.find((c) => c.name === comp.name);
    if (found) {
      console.log(`  ✅ ${comp.name} (exists)`);
    } else {
      const result = await apiCall("POST", "/components", { component: comp });
      console.log(`  ${result ? "✅" : "⚠️"} ${comp.name}`);
    }
  }
}

// ── Step 2: Update global component to include navbar_categories ──
async function updateGlobalComponent() {
  console.log("\n🔧 Updating global component schema...");

  const existing = await apiCall("GET", "/components");
  const globalComp = existing?.components?.find((c) => c.name === "global");

  if (!globalComp) {
    console.error("  ❌ Global component not found!");
    return;
  }

  // Add navbar fields if not present
  if (!globalComp.schema.navbar_categories) {
    globalComp.schema.navbar_categories = {
      type: "bloks",
      display_name: "Navbar Categories",
      restrict_type: "",
      restrict_components: true,
      component_whitelist: ["nav_category"],
    };
    globalComp.schema.navbar_cta_text = {
      type: "text",
      display_name: "Navbar CTA Button Text",
    };
    globalComp.schema.navbar_cta_link = {
      type: "text",
      display_name: "Navbar CTA Button Link",
    };

    await apiCall("PUT", `/components/${globalComp.id}`, { component: globalComp });
    console.log("  ✅ Added navbar_categories, navbar_cta_text, navbar_cta_link to global");
  } else {
    console.log("  ✅ Already has navbar_categories");
  }
}

// ── Step 3: Seed navbar data for each language ──
const NAVBAR_DATA = {
  de: {
    navbar_categories: [
      {
        component: "nav_category",
        _uid: "nc1",
        category: "Tao Yin & Qigong",
        items: [
          { component: "nav_item", _uid: "ni1", label: "Tao Yin", description: "Taoistische Bewegungskunst für Körper, Geist und Seele.", href: "/taoyin" },
          { component: "nav_item", _uid: "ni2", label: "Qi Gong", description: "Medizinisches Qi Gong für Vitalität und innere Ruhe.", href: "/qi-gong" },
          { component: "nav_item", _uid: "ni3", label: "Chi Nei Tsang", description: "Taoistische Bauchmassage für tiefe Heilung.", href: "/chi-nei-tsang" },
        ],
      },
      {
        component: "nav_category",
        _uid: "nc2",
        category: "Ganzheitliche Psychotherapie",
        items: [
          { component: "nav_item", _uid: "ni4", label: "Meine Praxis", description: "Ganzheitliche Psychotherapie in Ingolstadt.", href: "/psychotherapie" },
          { component: "nav_item", _uid: "ni5", label: "Therapien", description: "Therapeutische Methoden & Verfahren im Überblick.", href: "/therapien" },
          { component: "nav_item", _uid: "ni6", label: "Behandlungsziele", description: "Dein Weg zu innerer Balance und Wohlbefinden.", href: "/psychotherapie/ziele" },
        ],
      },
    ],
    navbar_cta_text: "Kontakt & Anfahrt",
    navbar_cta_link: "/kontakt",
  },
  en: {
    navbar_categories: [
      {
        component: "nav_category",
        _uid: "nc1",
        category: "Tao Yin & Qigong",
        items: [
          { component: "nav_item", _uid: "ni1", label: "Tao Yin", description: "Taoist movement art for body, mind and soul.", href: "/taoyin" },
          { component: "nav_item", _uid: "ni2", label: "Qi Gong", description: "Medical Qi Gong for vitality and inner peace.", href: "/qi-gong" },
          { component: "nav_item", _uid: "ni3", label: "Chi Nei Tsang", description: "Taoist abdominal massage for deep healing.", href: "/chi-nei-tsang" },
        ],
      },
      {
        component: "nav_category",
        _uid: "nc2",
        category: "Holistic Psychotherapy",
        items: [
          { component: "nav_item", _uid: "ni4", label: "My Practice", description: "Holistic psychotherapy in Ingolstadt.", href: "/psychotherapie" },
          { component: "nav_item", _uid: "ni5", label: "Therapies", description: "Therapeutic methods & approaches at a glance.", href: "/therapien" },
          { component: "nav_item", _uid: "ni6", label: "Treatment Goals", description: "Your path to inner balance and well-being.", href: "/psychotherapie/ziele" },
        ],
      },
    ],
    navbar_cta_text: "Contact & Directions",
    navbar_cta_link: "/kontakt",
  },
  es: {
    navbar_categories: [
      {
        component: "nav_category",
        _uid: "nc1",
        category: "Tao Yin y Qigong",
        items: [
          { component: "nav_item", _uid: "ni1", label: "Tao Yin", description: "Arte de movimiento taoísta para cuerpo, mente y alma.", href: "/taoyin" },
          { component: "nav_item", _uid: "ni2", label: "Qi Gong", description: "Qi Gong médico para vitalidad y paz interior.", href: "/qi-gong" },
          { component: "nav_item", _uid: "ni3", label: "Chi Nei Tsang", description: "Masaje abdominal taoísta para sanación profunda.", href: "/chi-nei-tsang" },
        ],
      },
      {
        component: "nav_category",
        _uid: "nc2",
        category: "Psicoterapia Holística",
        items: [
          { component: "nav_item", _uid: "ni4", label: "Mi Consulta", description: "Psicoterapia holística en Ingolstadt.", href: "/psychotherapie" },
          { component: "nav_item", _uid: "ni5", label: "Terapias", description: "Métodos y enfoques terapéuticos de un vistazo.", href: "/therapien" },
          { component: "nav_item", _uid: "ni6", label: "Objetivos del Tratamiento", description: "Tu camino hacia el equilibrio y bienestar interior.", href: "/psychotherapie/ziele" },
        ],
      },
    ],
    navbar_cta_text: "Contacto y Cómo Llegar",
    navbar_cta_link: "/kontakt",
  },
};

async function seedNavbarData() {
  console.log("\n📝 Seeding navbar data...");

  for (const lang of ["de", "en", "es"]) {
    // Rate limit safety
    await new Promise((r) => setTimeout(r, 300));

    // Find story ID via list endpoint
    const listResult = await apiCall("GET", `/stories?with_slug=${lang}/global`);
    const storyMeta = listResult?.stories?.[0];

    if (!storyMeta) {
      console.log(`  ⚠️ No global story found for ${lang}`);
      continue;
    }

    await new Promise((r) => setTimeout(r, 300));

    // Fetch full story with content
    const fullResult = await apiCall("GET", `/stories/${storyMeta.id}`);
    const story = fullResult?.story;

    if (!story) {
      console.log(`  ⚠️ Could not fetch full story for ${lang}`);
      continue;
    }

    // Merge new navbar fields into existing content
    const updatedContent = { ...story.content, ...NAVBAR_DATA[lang] };

    await new Promise((r) => setTimeout(r, 300));

    const updateResult = await apiCall("PUT", `/stories/${story.id}`, {
      story: {
        name: story.name,
        slug: story.slug,
        parent_id: story.parent_id,
        content: updatedContent,
      },
      force_update: 1,
    });

    if (updateResult && !updateResult.alreadyExists) {
      console.log(`  ✅ ${lang}/global updated with navbar data`);
    } else {
      console.log(`  ⚠️ ${lang}/global update may have failed`);
    }
  }
}

async function main() {
  console.log("🚀 Migrating navbar to Storyblok...\n");
  await createNestableComponents();
  await updateGlobalComponent();
  await seedNavbarData();
  console.log("\n✅ Navbar migration complete!");
}

main().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
