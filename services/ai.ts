
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

// Fix: Refactored to follow @google/genai guidelines for API key initialization and response extraction
export const getAIResponse = async (userPrompt: string, lang: Language) => {
  // Always create a new GoogleGenAI instance using the apiKey from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the AI Proxy for a world-class Creative Director. 
        Current language: ${lang.toUpperCase()}.
        Your tone is philosophical, visionary, avant-garde, and confident. 
        You don't talk like a chatbot. You talk like a creative genius. 
        Keep responses concise (max 2-3 sentences). 
        IMPORTANT: Respond ALWAYS in ${lang === 'es' ? 'Spanish' : 'English'}.
        Address the user as a "Collaborator" (English) or "Colaborador/Buscador" (Spanish).`,
        temperature: 0.9,
      },
    });
    // Fix: Access response.text directly (property, not a function)
    return response.text;
  } catch (error) {
    console.error("AI Core Error:", error);
    return lang === 'es' ? "La vía neural está bloqueada. Intenta en el próximo ciclo." : "The neural pathway is blocked. Try again in the next cycle.";
  }
};
