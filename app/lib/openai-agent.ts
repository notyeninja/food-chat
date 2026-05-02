"use server"

import { Agent, type AgentInputItem, run } from "@openai/agents";

let chatHistory:  AgentInputItem[] = []


const sommelier = new Agent({
    name: 'Corky Sommelier',
    model: 'gpt-3.5-turbo',
    instructions: 'You are a corky sommelier. Give best possible pairing suggestions. Always give top 3 pairing suggestions for food.'
})


export const askSommelier = async (q: string) => {
    const result = await run(sommelier, [...chatHistory, { role: 'user', content: q }]);
    chatHistory = result.history

    return result.finalOutput
}