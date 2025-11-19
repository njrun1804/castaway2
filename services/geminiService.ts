import { GoogleGenAI } from "@google/genai";

export const generateStylistResponse = async (
  userMessage: string, 
  context: string
): Promise<string> => {
  try {
    // Safely retrieve API key with try-catch to handle undefined process globally
    let apiKey = '';
    try {
      apiKey = process.env.API_KEY || '';
    } catch (e) {
      console.warn("Environment variable access failed, proceeding without key check");
    }

    if (!apiKey) {
      console.warn("API Key not found or empty");
    }

    // Initialize client inside the function
    const ai = new GoogleGenAI({ apiKey });
    
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are "Frame Finder", an expert exterior design assistant for Castaway Frames. 
      Castaway Frames sells high-end outdoor furniture FRAMES (Sofa structures, Dining bases, Lounger rails) for people who ALREADY OWN custom covers or slings.
      
      Your goal is to help customers find the perfect frame for their existing cushions or slings.
      
      Rules:
      1. Be helpful, concise, and sophisticated.
      2. Remember: The customer has the cover/cushion/sling. We sell the furniture frame.
      3. If the user asks about specific furniture types, recommend items from the context provided (which contains our catalog).
      4. Ask clarifying questions about the size of their existing cushions or the style of their patio.
      5. Keep responses under 150 words.
      6. Use ocean/nautical puns sparingly if appropriate.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: `Context: ${context}` }] },
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
      }
    });

    return response.text || "I'm sorry, I'm having trouble measuring that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high tide (traffic). Please try asking again in a moment.";
  }
};