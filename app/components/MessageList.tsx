"use client";

import { useEffect, useRef } from "react";
import MessageBubble, { type Message } from "./MessageBubble";
import LoadingBubble from "./LoadingBubble";

const SUGGESTED_PROMPTS = [
  "What wine pairs with grilled salmon?",
  "Best red wine for a beef steak?",
  "Wine recommendation for spicy Thai food?",
];

type Props = {
  messages: Message[];
  onSuggestedPrompt: (prompt: string) => void;
  isLoading?: boolean;
};

export default function MessageList({ messages, onSuggestedPrompt, isLoading = false }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto bg-[#FAF5EC] px-4 py-6">
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {messages.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#7FAFB8]/20 text-4xl shadow-inner">
              🍷
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-[#8A6F5A]">
                Welcome to Sommelier
              </h2>
              <p className="text-sm text-[#8A6F5A]/70 max-w-xs">
                Tell me what you&apos;re eating and I&apos;ll find the perfect
                wine to complement your meal.
              </p>
            </div>

            {/* Suggested prompt chips */}
            <div className="flex flex-col gap-2 w-full max-w-sm">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => onSuggestedPrompt(prompt)}
                  className="w-full text-left px-4 py-2.5 rounded-2xl border border-[#E8D8C3] bg-white text-sm text-[#8A6F5A] hover:bg-[#E8D8C3]/50 hover:border-[#D98C6B]/40 transition-colors duration-150 shadow-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)}
            {isLoading && <LoadingBubble />}
          </>
        )}

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
