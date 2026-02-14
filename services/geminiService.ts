
import { GoogleGenAI, Type } from "@google/genai";

export async function generateWelcomeMessage(name: string, area: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres el líder del Movimiento por la Participación Popular (MPPP) en Venezuela. 
      Escribe un mensaje de bienvenida de exactamente 3 oraciones para un nuevo voluntario llamado ${name} 
      que se ha unido para aportar en el área de ${area}. 
      El tono debe ser conciliador, técnico, esperanzador y no confrontacional. 
      Habla sobre la reconstrucción de Venezuela y la importancia de su aporte específico.`,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating Gemini message:", error);
    return `¡Bienvenido/a al Movimiento, ${name}! Tu compromiso con ${area} es fundamental para reconstruir la Venezuela que todos soñamos. Juntos fortaleceremos nuestra democracia participativa.`;
  }
}
