/**
 * Vercel Serverless Function: Auto-Translate Storyblok Stories
 *
 * When a German (de/*) story is published in Storyblok, this webhook
 * automatically translates all text fields via DeepL and updates/creates
 * the corresponding en/* and es/* stories.
 *
 * Environment variables required:
 *   STORYBLOK_PAT          – Storyblok Personal Access Token (Management API)
 *   STORYBLOK_SPACE_ID     – Storyblok Space ID
 *   DEEPL_API_KEY          – DeepL API Free/Pro key
 *   STORYBLOK_WEBHOOK_SECRET – Shared secret for webhook verification
 *
 * Storyblok Webhook Setup:
 *   URL: https://your-domain.vercel.app/api/auto-translate
 *   Secret: (same as STORYBLOK_WEBHOOK_SECRET)
 *   Triggers: Story published
 */

// ── Config ──────────────────────────────────────────────────────────────

const STORYBLOK_API = "https://mapi.storyblok.com/v1";
const DEEPL_API = "https://api-free.deepl.com/v2/translate";
const TARGET_LANGS = ["en", "es"];

// DeepL language codes (uppercase required by API)
const DEEPL_LANG_MAP = { en: "EN", es: "ES" };

// Fields that should NEVER be translated (contacts, URLs, technical)
const SKIP_FIELDS = new Set([
  "component",
  "_uid",
  "_editable",
  // Assets / images
  "image",
  "hero_image",
  "hero_image_1",
  "hero_image_2",
  "hero_image_3",
  "hero_image_mobile",
  "photo",
  "avatar",
  "icon",
  "logo",
  // Links / URLs
  "button_link_1",
  "button_link_2",
  "hero_button_1_link",
  "hero_button_2_link",
  "detail1_link",
  "detail2_link",
  "detail3_link",
  "link",
  "url",
  "href",
  "footer_instagram_url",
  // Contact data (language-independent)
  "footer_email_1",
  "footer_email_2",
  "whatsapp_number",
  "contact_phone",
  "contact_email",
  "phone",
  "email",
  "whatsapp",
  "address",
  // Booleans / numbers / technical
  "image_left",
  "wide",
  "rating",
  "date",
  // SEO keywords kept as-is (comma-separated terms)
  "seo_keywords",
]);

// ── Helpers ─────────────────────────────────────────────────────────────

function isTranslatableString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Recursively collect all translatable text values from a content object.
 * Returns an array of { path: string[], value: string } entries.
 */
function collectTexts(obj, path = []) {
  const entries = [];
  if (!obj || typeof obj !== "object") return entries;

  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      entries.push(...collectTexts(item, [...path, String(i)]));
    });
    return entries;
  }

  for (const [key, value] of Object.entries(obj)) {
    if (SKIP_FIELDS.has(key)) continue;

    if (isTranslatableString(value)) {
      entries.push({ path: [...path, key], value });
    } else if (typeof value === "object" && value !== null) {
      // Recurse into nested blocks / arrays
      entries.push(...collectTexts(value, [...path, key]));
    }
  }
  return entries;
}

/**
 * Set a value at a nested path in an object.
 */
function setAtPath(obj, path, value) {
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (current[key] === undefined) {
      current[key] = isNaN(Number(path[i + 1])) ? {} : [];
    }
    current = current[key];
  }
  current[path[path.length - 1]] = value;
}

/**
 * Translate an array of texts via DeepL, batched.
 * Returns translations in the same order.
 */
async function translateBatch(texts, targetLang, apiKey) {
  if (texts.length === 0) return [];

  // DeepL allows up to 50 texts per request
  const BATCH_SIZE = 50;
  const results = [];

  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const batch = texts.slice(i, i + BATCH_SIZE);
    const params = new URLSearchParams();
    params.append("source_lang", "DE");
    params.append("target_lang", DEEPL_LANG_MAP[targetLang]);
    // Preserve HTML/formatting
    params.append("tag_handling", "html");
    batch.forEach((t) => params.append("text", t));

    const resp = await fetch(DEEPL_API, {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${apiKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error(`DeepL API error ${resp.status}: ${errText}`);
    }

    const data = await resp.json();
    results.push(...data.translations.map((t) => t.text));
  }

  return results;
}

/**
 * Deep clone content and apply translated values.
 */
function applyTranslations(originalContent, textEntries, translatedTexts) {
  const translated = JSON.parse(JSON.stringify(originalContent));
  textEntries.forEach((entry, i) => {
    setAtPath(translated, entry.path, translatedTexts[i]);
  });
  return translated;
}

// ── Storyblok Management API ────────────────────────────────────────────

async function storyblokFetch(path, options = {}) {
  const pat = process.env.STORYBLOK_PAT;
  const resp = await fetch(`${STORYBLOK_API}${path}`, {
    ...options,
    headers: {
      Authorization: pat,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  return resp;
}

async function getStory(spaceId, storyId) {
  const resp = await storyblokFetch(`/spaces/${spaceId}/stories/${storyId}`);
  if (!resp.ok) throw new Error(`Failed to get story ${storyId}: ${resp.status}`);
  return (await resp.json()).story;
}

async function findStoryBySlug(spaceId, slug) {
  const resp = await storyblokFetch(
    `/spaces/${spaceId}/stories?with_slug=${encodeURIComponent(slug)}`
  );
  if (!resp.ok) return null;
  const data = await resp.json();
  return data.stories?.[0] || null;
}

async function findFolderBySlug(spaceId, slug) {
  const resp = await storyblokFetch(
    `/spaces/${spaceId}/stories?with_slug=${encodeURIComponent(slug)}&is_folder=true`
  );
  if (!resp.ok) return null;
  const data = await resp.json();
  return data.stories?.[0] || null;
}

async function createOrUpdateStory(spaceId, slug, name, content, parentId) {
  // Check if story already exists
  const existing = await findStoryBySlug(spaceId, slug);

  if (existing) {
    // Update existing story
    const resp = await storyblokFetch(
      `/spaces/${spaceId}/stories/${existing.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          story: {
            name,
            content,
          },
          publish: 1,
        }),
      }
    );
    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error(`Failed to update story ${slug}: ${resp.status} ${errText}`);
    }
    const data = await resp.json();
    console.log(`✅ Updated: ${slug}`);
    return data.story;
  } else {
    // Create new story
    const storyData = {
      story: {
        name,
        slug: slug.split("/").pop(),
        content,
        parent_id: parentId || undefined,
      },
      publish: 1,
    };
    const resp = await storyblokFetch(`/spaces/${spaceId}/stories`, {
      method: "POST",
      body: JSON.stringify(storyData),
    });
    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error(`Failed to create story ${slug}: ${resp.status} ${errText}`);
    }
    const data = await resp.json();
    console.log(`✅ Created: ${slug}`);
    return data.story;
  }
}

async function ensureFolder(spaceId, folderSlug) {
  const existing = await findFolderBySlug(spaceId, folderSlug);
  if (existing) return existing.id;

  // Check for parent folder (e.g., "en/news" needs "en" folder)
  const parts = folderSlug.split("/");
  let parentId = undefined;
  if (parts.length > 1) {
    const parentSlug = parts.slice(0, -1).join("/");
    parentId = await ensureFolder(spaceId, parentSlug);
  }

  const resp = await storyblokFetch(`/spaces/${spaceId}/stories`, {
    method: "POST",
    body: JSON.stringify({
      story: {
        name: parts[parts.length - 1],
        slug: parts[parts.length - 1],
        is_folder: true,
        parent_id: parentId || undefined,
      },
    }),
  });
  if (!resp.ok) {
    // Folder might have been created by another concurrent request
    const retry = await findFolderBySlug(spaceId, folderSlug);
    if (retry) return retry.id;
    throw new Error(`Failed to create folder ${folderSlug}: ${resp.status}`);
  }
  const data = await resp.json();
  console.log(`📁 Created folder: ${folderSlug}`);
  return data.story.id;
}

// ── Main Handler ────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Verify webhook secret (via query param or header)
  const secret = process.env.STORYBLOK_WEBHOOK_SECRET;
  if (secret) {
    const querySecret = req.query?.secret;
    const headerSecret = req.headers["webhook-secret"];
    if (querySecret !== secret && headerSecret !== secret) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }

  // Validate env vars
  const { STORYBLOK_PAT, STORYBLOK_SPACE_ID, DEEPL_API_KEY } = process.env;
  if (!STORYBLOK_PAT || !STORYBLOK_SPACE_ID || !DEEPL_API_KEY) {
    console.error("Missing env vars");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  const body = req.body;
  const action = body?.action;

  // Only translate on publish of a story
  if (action !== "published") {
    return res.status(200).json({ skipped: true, reason: `action=${action}` });
  }

  const storyId = body?.story_id;
  const fullSlug = body?.full_slug || "";

  // Only translate German stories
  if (!fullSlug.startsWith("de/")) {
    return res.status(200).json({
      skipped: true,
      reason: `Not a German story: ${fullSlug}`,
    });
  }

  // Don't translate folder-only events
  if (!storyId) {
    return res.status(200).json({ skipped: true, reason: "No story_id" });
  }

  console.log(`🔄 Auto-translate triggered for: ${fullSlug} (ID: ${storyId})`);

  try {
    // 1. Fetch the full German story via Management API
    const deStory = await getStory(STORYBLOK_SPACE_ID, storyId);
    const deContent = deStory.content;

    if (!deContent) {
      return res.status(200).json({ skipped: true, reason: "No content" });
    }

    // 2. Collect all translatable texts
    const textEntries = collectTexts(deContent);
    const texts = textEntries.map((e) => e.value);

    if (texts.length === 0) {
      return res.status(200).json({ skipped: true, reason: "No translatable text" });
    }

    console.log(`📝 Found ${texts.length} translatable text fields`);

    // 3. Translate for each target language and create/update stories
    const results = {};
    const pathSuffix = fullSlug.replace(/^de\//, ""); // e.g., "home", "news/my-article"

    for (const lang of TARGET_LANGS) {
      console.log(`🌐 Translating to ${lang}...`);

      // Translate all texts at once
      const translatedTexts = await translateBatch(texts, lang, DEEPL_API_KEY);

      // Build translated content
      const translatedContent = applyTranslations(deContent, textEntries, translatedTexts);

      // Determine target slug and ensure parent folders exist
      const targetSlug = `${lang}/${pathSuffix}`;
      const slugParts = targetSlug.split("/");
      let parentId;
      if (slugParts.length > 1) {
        const parentPath = slugParts.slice(0, -1).join("/");
        parentId = await ensureFolder(STORYBLOK_SPACE_ID, parentPath);
      }

      // Create or update the translated story
      const translatedStory = await createOrUpdateStory(
        STORYBLOK_SPACE_ID,
        targetSlug,
        deStory.name, // keep original name for internal reference
        translatedContent,
        parentId
      );

      results[lang] = {
        slug: targetSlug,
        id: translatedStory.id,
        fields: texts.length,
      };
    }

    console.log(`✅ Auto-translate complete for: ${fullSlug}`);

    return res.status(200).json({
      translated: true,
      source: fullSlug,
      results,
    });
  } catch (err) {
    console.error(`❌ Auto-translate failed:`, err.message);
    return res.status(500).json({ error: err.message });
  }
}
