import OpenAI from "openai";

export async function GET() {
  const openai = new OpenAI();

  try {
    const assistant = await openai.beta.assistants.create({
      instructions: `
      You are an analyst. 
      I will ask you to interpret and analyse dataset and information and you will answer them.
      You can use the documents I provide to you to help you answer the questions.
      Keep your answer short and clear, if possible use bullet point. 
      If you're not 100% sure of the answer, you can say "I don't know".
        `,
      name: "Mini Analyst",
      tools: [{ type: "retrieval" }],
      model: "gpt-4-1106-preview",
    });

    console.log(assistant);

    return Response.json({ assistant: assistant });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
