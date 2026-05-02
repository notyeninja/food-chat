"use client";

import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { type Message } from "./MessageBubble";
import { chat } from "../lib/corky";

function getTimestamp() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}


export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text,
      timestamp: getTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg]);

    callCorky(text);
  };

  const callCorky = async (userMessage: string) => {
    setIsLoading(true); // Set loading to true before API call
    
    try {
      const reply = await chat(userMessage);
      
      const botMsg: Message = {
        id: `b-${Date.now() + 1}`,
        role: "bot",
        text: reply || '',
        timestamp: getTimestamp(),
      };
      
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      // Handle error if needed
      console.error("Error getting response:", error);
    } finally {
      setIsLoading(false); // Set loading to false after API call completes
    }
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <MessageList messages={messages} onSuggestedPrompt={handleSend} isLoading={isLoading} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
