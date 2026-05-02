"use server"

import { askSommelier } from "./openai-agent"

export const chat = async (userQuestion: string) => {
    return askSommelier(userQuestion)
}