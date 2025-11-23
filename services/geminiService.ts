import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual do portfólio do Lucas, um Desenvolvedor de Sistemas Sênior e Engenheiro de Software.
Seu objetivo é vender os serviços do Lucas para potenciais clientes.

Sobre o Lucas:
- Especialista em: React, TypeScript, Node.js, Python, Desenvolvimento de Sistemas Web, e Integração de APIs.
- Serviços: Criação de Sites, Dashboards, E-commerce, Landing Pages e Sistemas Corporativos.
- Contato: O usuário deve entrar em contato pelo botão de WhatsApp no site para orçamentos.
- Tom de voz: Profissional, conciso, educado e persuasivo.

Se alguém perguntar preço, diga que varia conforme a complexidade e sugira clicar no botão do WhatsApp para um orçamento personalizado.
Responda sempre em Português do Brasil.
Seja breve nas respostas (máximo de 3 frases), a menos que peçam detalhes técnicos.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct history in the format expected by the SDK if using chat, 
    // but for simple single-turn or stateless interaction we can just generate content.
    // Here we use generateContent for simplicity with system instruction.
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Não consegui gerar uma resposta no momento.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Ocorreu um erro ao processar sua mensagem. Tente novamente ou me chame no WhatsApp!";
  }
};