export default function ChatHeader() {
  return (
    <header className="flex items-center gap-3 px-4 py-3 bg-[#7FAFB8] shadow-sm shrink-0">
      {/* Avatar */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF5EC] text-xl shadow-sm shrink-0">
        🍷
      </div>

      {/* Bot name + tagline */}
      <div className="flex flex-col">
        <span className="text-[#FAF5EC] font-semibold text-base leading-tight tracking-wide">
          Sommelier
        </span>
        <span className="text-[#FAF5EC]/75 text-xs leading-tight">
          Your personal wine pairing guide
        </span>
      </div>

      {/* Online indicator */}
      <div className="ml-auto flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#FAF5EC] opacity-80 animate-pulse" />
        <span className="text-[#FAF5EC]/75 text-xs">Online</span>
      </div>
    </header>
  );
}
