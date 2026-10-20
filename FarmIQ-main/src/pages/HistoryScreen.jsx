import { useState } from "react";
import Icon from "@/components/common/Icon";
import TextInput from "@/components/common/TextInput";
import ScreenShell from "@/components/layout/ScreenShell";
import { conversations } from "@/data/modules";

/**
 * Conversation History screen — searchable list of past AI sessions.
 *
 * @param {object}   props
 * @param {Function} props.navigate - Navigate to a screen.
 */
export default function HistoryScreen({ navigate }) {
  const [query, setQuery] = useState("");

  const filtered = conversations.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScreenShell active="history" navigate={navigate}>
      <div className="px-5 pb-7 pt-5">
        <header className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#5D7B6B]">
            Your activity
          </p>
          <h1 className="mt-1 text-[27px] font-extrabold tracking-[-0.04em] text-[#17392A]">
            Conversation History
          </h1>
          <p className="mt-2 text-[12px] text-[#718279]">
            Continue where you left off with FarmIQ.
          </p>
        </header>

        <TextInput
          onChange={setQuery}
          placeholder="Search conversations..."
          value={query}
        />

        <div className="mb-3 mt-7 flex items-center justify-between">
          <h2 className="text-[14px] font-extrabold text-[#213D2F]">
            Previous conversations
          </h2>
          <span className="text-[10px] font-semibold text-[#819087]">
            {filtered.length} conversations
          </span>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[#E2E9E4] bg-white">
          {filtered.map((item, index) => (
            <button
              key={item.title}
              className={`flex w-full items-center gap-3 p-4 text-left transition hover:bg-[#F8FAF7] ${
                index ? "border-t border-[#EDF1EE]" : ""
              }`}
              onClick={() => navigate("chat")}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.tone}`}
              >
                <Icon name={item.icon} size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-bold text-[#263F32]">
                  {item.title}
                </span>
                <span className="mt-1 block truncate text-[10px] text-[#819087]">
                  {item.preview}
                </span>
              </span>
              <span className="self-start whitespace-nowrap text-[9px] font-semibold text-[#95A198]">
                {item.date}
              </span>
              <Icon name="chevron" size={15} className="text-[#9CA8A0]" />
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="p-8 text-center text-sm text-[#7A8C82]">
              No conversations found.
            </div>
          )}
        </div>

        <button
          className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#216B45] text-[12px] font-bold text-white shadow-md"
          onClick={() => navigate("chat")}
        >
          <Icon name="plus" size={17} />
          Start new conversation
        </button>
      </div>
    </ScreenShell>
  );
}
