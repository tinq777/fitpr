// functions/config.js
// Cloudflare Pages Function — serves /config.js at runtime
// with credentials injected from environment variables (never stored in files).
//
// Setup in Cloudflare Pages dashboard:
//   Settings → Environment Variables → Add:
//     SUPABASE_URL  = https://rzvdmefztxjnplaowgtr.supabase.co
//     SUPABASE_ANON = your-anon-key

// functions/config.js
// Cloudflare Pages Function — serves /config.js at runtime
// with credentials injected from environment variables (never stored in files).
//
// Setup in Cloudflare Pages dashboard:
//   Settings → Environment Variables → Add:
//     SUPABASE_URL  = https://rzvdmefztxjnplaowgtr.supabase.co
//     SUPABASE_ANON = your-anon-key

export async function onRequest(context) {
  const url  = context.env.SUPABASE_URL  || "";
  const anon = context.env.SUPABASE_ANON || "";

  // Debug: return all available env keys so we can see what CF is passing
  const debugKeys = Object.keys(context.env || {}).join(", ") || "none";

  const js = `
/* CF Function running. Env keys: ${debugKeys} */
window.sb = (function() {
  var url  = ${JSON.stringify(url)};
  var anon = ${JSON.stringify(anon)};
  if (typeof supabase !== "undefined" && url && anon) {
    return supabase.createClient(url, anon);
  }
  return null;
})();
`.trim();

  return new Response(js, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "no-store",
    },
  });
}
