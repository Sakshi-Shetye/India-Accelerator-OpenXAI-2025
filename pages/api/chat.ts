import type { NextApiRequest, NextApiResponse } from "next";

/**
 * ✅ How to set API details
 *  - OPENXAI_API_KEY   : your API key (required)
 *  - OPENXAI_API_BASE  : base URL ending with /v1 (default: https://api.openai.com/v1 OR your OpenXAI base)
 *  - OPENXAI_MODEL     : model id (default: gpt-4o-mini or whatever they gave you)
 */
const API_KEY = process.env.OPENXAI_API_KEY;
const API_BASE = process.env.OPENXAI_API_BASE || "https://api.openai.com/v1";
const MODEL    = process.env.OPENXAI_MODEL || "gpt-4o-mini";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!API_KEY) {
    return res.status(500).json({ error: "Missing OPENXAI_API_KEY in .env.local" });
  }

  try {
    const { message } = req.body as { message: string };
    const system = "You are MindMate, a warm, supportive mental wellness buddy. Be concise, calming, and practical. Never give medical diagnosis; suggest seeing a professional if needed.";

    const r = await fetch(`${API_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: system },
          { role: "user", content: message || "Say hi nicely in one sentence." }
        ]
      })
    });

    const data = await r.json();

    // Try common response shapes: { choices[0].message.content } or { choices[0].text }
    const reply =
      data?.choices?.[0]?.message?.content ??
      data?.choices?.[0]?.text ??
      JSON.stringify(data);

    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error("OpenXAI error:", err);
    return res.status(500).json({ error: "Failed to contact OpenXAI API" });
  }
}
