import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function main() {
  const models = await ai.models.list();

  for await (const m of models) {
    console.log(m.name);
  }
}

main();
