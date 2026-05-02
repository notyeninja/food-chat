"use client";

import { useRef, useState } from "react";

type Props = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    // Auto-resize
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
    }
  };

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isEmpty = value.trim().length === 0;

  return (
    <div className="shrink-0 border-t border-[#E8D8C3] bg-[#FAF5EC] px-4 py-3">
      <div className="flex items-end gap-2 max-w-3xl mx-auto">
        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Ask about food & wine pairings…"
          className="flex-1 resize-none rounded-2xl border border-[#E8D8C3] bg-white px-4 py-2.5 text-sm text-[#8A6F5A] placeholder-[#8A6F5A]/50 leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#7FAFB8] focus:border-transparent shadow-sm overflow-hidden"
          style={{ minHeight: "42px", maxHeight: "120px" }}
        />

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={isEmpty}
          aria-label="Send message"
          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full shadow-sm transition-all duration-150 ${
            isEmpty
              ? "bg-[#E8D8C3] text-[#8A6F5A]/40 cursor-not-allowed"
              : "bg-[#D98C6B] text-white hover:bg-[#c97a5a] active:scale-95 cursor-pointer"
          }`}
        >
          {/* Paper plane icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 translate-x-px"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>

      {/* Hint */}
      <p className="text-center text-[10px] text-[#8A6F5A]/40 mt-2">
        Press <kbd className="font-mono">Enter</kbd> to send · <kbd className="font-mono">Shift+Enter</kbd> for new line
      </p>
    </div>
  );
}
