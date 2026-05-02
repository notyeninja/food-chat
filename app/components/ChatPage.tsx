"use client";

import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { type Message } from "./MessageBubble";

function getTimestamp() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Mock bot response for UI iteration (no API yet)
function getMockBotReply(userText: string): string {
  const lower = userText.toLowerCase();
  if (lower.includes("salmon") || lower.includes("fish") || lower.includes("seafood")) {
    return "For salmon, I'd recommend a crisp Pinot Gris or an unoaked Chardonnay. The bright acidity cuts through the richness of the fish beautifully. 🥂";
  }
  if (lower.includes("steak") || lower.includes("beef") || lower.includes("red meat")) {
    return "A bold Cabernet Sauvignon or a Malbec would be perfect with beef. The tannins complement the fat and protein in the meat wonderfully. 🍷";
  }
  if (lower.includes("pasta") || lower.includes("italian")) {
    return "For Italian pasta dishes, a Chianti Classico or Sangiovese is a classic pairing. The acidity matches tomato-based sauces perfectly! 🍝";
  }
  if (lower.includes("spicy") || lower.includes("thai") || lower.includes("indian") || lower.includes("curry")) {
    return "Spicy food pairs beautifully with an off-dry Riesling or Gewürztraminer. The slight sweetness tames the heat while the aromatics complement the spices. 🌶️";
  }
  if (lower.includes("cheese") || lower.includes("charcuterie")) {
    return "For a cheese board, a versatile Champagne or Prosecco works with almost everything. For aged cheeses, try a Sauternes or Port. 🧀";
  }
  return "That sounds delicious! Could you tell me more about the preparation or sauce? That'll help me find the ideal wine pairing for you. 🍽️";
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text,
      timestamp: getTimestamp(),
    };

    const botMsg: Message = {
      id: `b-${Date.now() + 1}`,
      role: "bot",
      text: getMockBotReply(text),
      timestamp: getTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <MessageList messages={messages} onSuggestedPrompt={handleSend} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
