import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  if (!client) {
    // Fallback sans clé : réponse factice pour que la démo fonctionne
    return NextResponse.json({
      reply: `Démo locale (pas de clé OPENAI_API_KEY). Exemple de quête:\n- Échauffement 5 min\n- 3 séries de pompes au max (repos 90s)\n- Étirements 3 min`,
    });
  }

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Tu es un coach pragmatique. Propose des défis réalistes, ≤20 minutes, mesurables." },
      { role: "user", content: prompt || "Propose-moi une courte quête réaliste pour progresser aujourd'hui." }
    ]
  });

  return NextResponse.json({ reply: completion.choices[0].message?.content ?? "" });
}
