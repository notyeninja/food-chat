import Image from "next/image";

export default function LoadingBubble() {
  return (
    <div className="flex items-end gap-2 justify-start">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7FAFB8] text-sm shrink-0 mb-1 shadow-sm">
        <Image src="/chat-sticker.gif" alt="corky" width={100} height={100} />
      </div>
      
      <div className="flex flex-col gap-1 max-w-[70%] items-start">
        <div className="px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm bg-[#E8D8C3] text-[#8A6F5A] rounded-bl-sm">
          <div className="flex gap-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}