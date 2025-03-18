import { geminiAPI } from "@/config/env";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/system-prompt";
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!geminiAPI) {
  throw new Error("Gemini API key is not defined");
}
const genAI = new GoogleGenerativeAI(geminiAPI || "");

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    });
    const prompt = {
      contents: [
        {
          role: "user",
          parts: [
            { text: SUMMARY_SYSTEM_PROMPT },
            {
              text: `Transform this document into an
              engaging, easy-to-read summary with
              contextually relevan emojis and proper
              markdown formatting: \n\n${pdfText}`,
            },
          ],
        },
      ],
    };
    const res = await model.generateContent(prompt);
    const result = res.response.text();
    return result;
  } catch (error: any) {
    console.error("Gemini API error");
    throw error;
  }
};
