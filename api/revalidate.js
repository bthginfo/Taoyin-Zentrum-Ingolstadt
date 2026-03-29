/**
 * Vercel Serverless Function: Storyblok Webhook Handler
 *
 * When content is published in Storyblok, this webhook triggers a
 * Vercel Deploy Hook to rebuild the site with fresh content.
 *
 * Setup:
 * 1. Create a Deploy Hook in Vercel Dashboard → Settings → Git → Deploy Hooks
 * 2. Set VERCEL_DEPLOY_HOOK_URL env var to the hook URL
 * 3. In Storyblok → Settings → Webhooks → Add:
 *    URL: https://your-domain.vercel.app/api/revalidate
 *    Trigger: Story published, Story unpublished, Story deleted
 * 4. Optionally set STORYBLOK_WEBHOOK_SECRET for verification
 */
export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Optional: verify webhook secret
  const secret = process.env.STORYBLOK_WEBHOOK_SECRET;
  if (secret && req.headers["webhook-secret"] !== secret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;

  if (!deployHookUrl) {
    console.error("VERCEL_DEPLOY_HOOK_URL not configured");
    return res.status(500).json({ error: "Deploy hook not configured" });
  }

  try {
    const body = req.body;
    const action = body?.action;
    const storyName = body?.story_id || body?.full_slug || "unknown";

    console.log(`🔄 Storyblok webhook: action=${action}, story=${storyName}`);

    // Trigger Vercel rebuild
    const response = await fetch(deployHookUrl, { method: "POST" });

    if (!response.ok) {
      throw new Error(`Deploy hook returned ${response.status}`);
    }

    console.log("✅ Deploy triggered successfully");
    return res.status(200).json({
      revalidated: true,
      action,
      story: storyName,
    });
  } catch (err) {
    console.error("❌ Revalidation failed:", err.message);
    return res.status(500).json({ error: "Revalidation failed" });
  }
}
