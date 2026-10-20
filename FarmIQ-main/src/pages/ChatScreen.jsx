import { useState } from "react";
import Icon from "@/components/common/Icon";
import TextInput from "@/components/common/TextInput";
import MicrophoneButton from "@/components/common/MicrophoneButton";
import ScreenShell from "@/components/layout/ScreenShell";
import { seedChatMessages } from "@/data/modules";

// ─── Sub-components ──────────────────────────────────────────────────────────

/** A single chat bubble — farmer (right) or AI (left). */
function ChatBubble({ children, sender }) {
  const isAi = sender === "ai";
  return (
    <div className={`flex gap-2.5 ${isAi ? "items-start" : "justify-end"}`}>
      {isAi && (
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#216B45] text-white">
          <Icon name="leaf" size={17} />
        </span>
      )}
      <div
        className={`max-w-[276px] rounded-[18px] px-4 py-3 text-[13px] leading-[1.55] ${
          isAi
            ? "rounded-tl-md border border-[#E1E9E3] bg-white text-[#334A3D] shadow-[0_3px_12px_rgba(31,57,44,.04)]"
            : "rounded-tr-md bg-[#216B45] text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Context card shown after the first AI response.
 * Displays what the assistant is checking, the active farm context,
 * and quick-links to relevant modules.
 */
function AIContextCard({ openModule }) {
  const CONTEXT_CHECKS = [
    { icon: "droplet",  label: "Moisture"   },
    { icon: "crop",     label: "Crop stage" },
    { icon: "calendar", label: "Rainfall"   },
  ];

  const MODULE_SHORTCUTS = [
    { label: "View Soil Health",    key: "soil"                },
    { label: "Check Irrigation",    key: "irrigation"          },
    { label: "Crop Recommendation", key: "crop-recommendation" },
    { label: "Market Prices",       key: "market"              },
    { label: "Yield Prediction",    key: "yield"               },
  ];

  return (
    <>
      {/* What the assistant is checking */}
      <div className="ml-[42px] rounded-2xl border border-[#DDE9DF] bg-[#F0F7F1] p-4">
        <div className="mb-2 flex items-center gap-2 text-[12px] font-bold text-[#216B45]">
          <Icon name="sparkles" size={16} />
          What I will check
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {CONTEXT_CHECKS.map(({ icon, label }) => (
            <div
              key={label}
              className="rounded-xl bg-white px-1 py-2 text-[10px] font-semibold text-[#53675C]"
            >
              <Icon name={icon} size={16} className="mx-auto mb-1 text-[#3B7954]" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Active farm context pill */}
      <div className="ml-[42px] rounded-2xl border border-[#DCE8DF] bg-white p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#4C6758]">
            Using farm context
          </span>
          <span className="rounded-full bg-[#EAF4EC] px-2 py-1 text-[8px] font-bold text-[#216B45]">
            GREEN VALLEY FARM
          </span>
        </div>
        <p className="mt-2 text-[9px] leading-4 text-[#7A8B82]">
          Soil moisture 62% • Tomato, flowering stage • Rain chance 20%
        </p>
      </div>

      {/* Module shortcut buttons */}
      <div className="ml-[42px] flex flex-wrap gap-2">
        {MODULE_SHORTCUTS.map(({ label, key }) => (
          <button
            key={key}
            onClick={() => openModule(key)}
            className="rounded-full border border-[#CFE0D4] bg-white px-3 py-2 text-[10px] font-bold text-[#216B45]"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

// ─── Main screen ─────────────────────────────────────────────────────────────

/**
 * AI Assistant chat screen.
 *
 * Seed messages come from `data/modules.js` so the demo conversation
 * can be updated without touching this component.
 *
 * @param {object}   props
 * @param {Function} props.navigate       - Navigate to a screen.
 * @param {Function} props.openModule     - Open a module screen.
 * @param {string}   props.language       - Current language label.
 * @param {Function} props.openLanguages  - Open the language sheet.
 */
export default function ChatScreen({ navigate, openModule, language, openLanguages }) {
  const [message, setMessage]           = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [listening, setListening]       = useState(false);
  const [speaking, setSpeaking]         = useState(false);
  const [photo, setPhoto]               = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    setSentMessages((prev) => [...prev, message.trim()]);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <ScreenShell active="chat" navigate={navigate}>
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#E6EBE7] bg-[#F7F9F5]/95 px-5 py-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#216B45] text-white">
            <Icon name="bot" size={21} />
          </span>
          <div>
            <h1 className="text-[16px] font-extrabold text-[#193A2A]">
              FarmIQ Assistant
            </h1>
            <p className="flex items-center gap-1.5 text-[10px] font-semibold text-[#678073]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4BAA6E]" />
              Online and ready
            </p>
          </div>
        </div>
        <button
          onClick={openLanguages}
          className="flex h-9 items-center gap-1.5 rounded-full bg-white px-3 text-[9px] font-bold text-[#52665B]"
          aria-label={`Current language: ${language}. Tap to change.`}
        >
          <Icon name="language" size={15} />
          {language}
        </button>
      </header>

      {/* Message thread */}
      <div className="flex-1 space-y-4 px-5 py-6">
        <div className="text-center text-[10px] font-bold uppercase tracking-[.12em] text-[#91A097]">
          Today, 10:24 AM
        </div>

        {/* Seed messages from data — no logic lives in markup */}
        {seedChatMessages.map((msg) => (
          <ChatBubble key={msg.id} sender={msg.sender}>
            {msg.text}
          </ChatBubble>
        ))}

        {/* Context card appears after the first AI reply */}
        <AIContextCard openModule={openModule} />

        {/* Text-to-speech toggle (demonstration) */}
        <button
          onClick={() => setSpeaking(!speaking)}
          className="ml-[42px] flex items-center gap-2 text-[10px] font-bold text-[#587064]"
          aria-pressed={speaking}
        >
          <Icon name={speaking ? "check" : "bot"} size={15} />
          {speaking ? "Reading response aloud (demo)" : "Listen to this answer"}
        </button>

        {/* User-typed messages */}
        {sentMessages.map((sent, index) => (
          <ChatBubble key={`user-${index}`} sender="farmer">
            {sent}
          </ChatBubble>
        ))}

        {/* Photo upload confirmation */}
        {photo && (
          <ChatBubble sender="farmer">
            Uploaded crop photograph: {photo}
          </ChatBubble>
        )}
      </div>

      {/* Input bar */}
      <div className="sticky bottom-0 border-t border-[#E4EAE5] bg-white p-3">
        <div className="flex items-end gap-2">
          <label
            htmlFor="chat-photo-upload"
            aria-label="Upload crop photograph"
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#F0F4F1] text-[#50655A]"
          >
            <Icon name="camera" size={20} />
            <input
              id="chat-photo-upload"
              accept="image/*"
              className="hidden"
              type="file"
              onChange={(e) => setPhoto(e.target.files?.[0]?.name ?? "")}
            />
          </label>

          <div className="min-w-0 flex-1">
            <TextInput
              icon="sparkles"
              onChange={setMessage}
              onKeyDown={handleKeyDown}
              placeholder="Ask FarmIQ..."
              value={message}
            />
          </div>

          <MicrophoneButton onClick={() => setListening(!listening)} />

          <button
            aria-label="Send message"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#216B45] text-white shadow-md active:scale-95"
            onClick={sendMessage}
          >
            <Icon name="send" size={19} />
          </button>
        </div>

        {listening && (
          <p className="mt-2 text-center text-[10px] font-bold text-[#216B45]" role="status">
            Listening demonstration • Tap microphone to stop
          </p>
        )}
        <p className="mt-2 text-center text-[9px] text-[#98A59E]">
          FarmIQ can make mistakes. Check important farming decisions.
        </p>
      </div>
    </ScreenShell>
  );
}
