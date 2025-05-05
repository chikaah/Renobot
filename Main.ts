import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (_req) => {
  const adLink = "https://www.profitableratecpm.com/gek6e26ws?key=8fc5fec2b6aa16de54e32b8a1a75c315";

  try {
    await fetch(adLink, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*",
      },
    });
    return new Response("Fake visit sent successfully!", { status: 200 });
  } catch (err) {
    return new Response("Failed to send visit.", { status: 500 });
  }
});
