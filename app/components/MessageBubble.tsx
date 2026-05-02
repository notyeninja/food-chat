export type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: string;
};

type Props = {
  message: Message;
};

export default function MessageBubble({ message }: Props) {
  const isBot = message.role === "bot";

  return (
    <div
      className={`flex items-end gap-2 ${isBot ? "justify-start" : "justify-end"}`}
    >
      {/* Bot avatar — only shown for bot messages */}
      {isBot && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7FAFB8] text-sm shrink-0 mb-1 shadow-sm">
          🍷
        </div>
      )}

      <div className={`flex flex-col gap-1 max-w-[70%] ${isBot ? "items-start" : "items-end"}`}>
        {/* Bubble */}
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
            isBot
              ? "bg-[#E8D8C3] text-[#8A6F5A] rounded-bl-sm"
              : "bg-[#D98C6B] text-white rounded-br-sm"
          }`}
        >
          {message.text}
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-[#8A6F5A]/60 px-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
