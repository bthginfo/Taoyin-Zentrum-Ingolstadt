#!/usr/bin/env node
/**
 * Fetches Storyblok component schemas and generates TypeScript interfaces.
 *
 * Usage:
 *   STORYBLOK_SPACE_ID=... STORYBLOK_PAT=... npm run generate-types
 *
 * This pulls all component definitions from the Storyblok Management API,
 * saves them as JSON, then runs storyblok-generate-ts to produce .d.ts types.
 */
import { writeFileSync } from "fs";
import { execSync } from "child_process";

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;
const PAT = process.env.STORYBLOK_PAT;

if (!SPACE_ID || !PAT) {
  console.error("❌ Missing env vars: STORYBLOK_SPACE_ID and STORYBLOK_PAT required");
  console.error("   Example: STORYBLOK_SPACE_ID=123 STORYBLOK_PAT=xyz npm run generate-types");
  process.exit(1);
}

async function main() {
  console.log("📦 Fetching component schemas from Storyblok...");

  const res = await fetch(
    `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components`,
    { headers: { Authorization: PAT } }
  );

  if (!res.ok) {
    console.error(`❌ API error: ${res.status} ${res.statusText}`);
    process.exit(1);
  }

  const data = await res.json();
  const componentsFile = `components.${SPACE_ID}.json`;

  writeFileSync(componentsFile, JSON.stringify(data, null, 2));
  console.log(`✅ Saved ${data.components.length} components to ${componentsFile}`);

  console.log("🔧 Generating TypeScript types...");
  execSync(
    `npx storyblok-generate-ts source=./${componentsFile} target=./src/types/storyblok-generated.d.ts`,
    { stdio: "inherit" }
  );

  console.log("✅ Types generated at src/types/storyblok-generated.d.ts");
}

main().catch((err) => {
  console.error("❌ Failed:", err.message);
  process.exit(1);
});
