import { useState } from "react";
import { moduleCatalog } from "@/data/modules";
import ModuleIcon from "./ModuleIcon";

const GROUPS = ["All", "Plan", "Monitor", "Learn", "Manage", "Administration"];

/**
 * All-tools browser — searchable, filterable grid of every FarmIQ module.
 *
 * @param {object}   props
 * @param {Function} props.onBack - Navigate back to the home screen.
 * @param {Function} props.onOpen - Open a module by its key.
 */
export default function ModuleHub({ onBack, onOpen }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");

  const results = moduleCatalog.filter(
    (item) =>
      (group === "All" || item.group === group) &&
      `${item.title} ${item.short}`
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  return (
    <div className="px-5 pb-8 pt-5">
      <header className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#DDE6DF] bg-white text-[#3F5A4B]"
        >
          <ModuleIcon name="back" size={19} />
        </button>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#648071]">
            FarmIQ workspace
          </p>
          <h1 className="text-[25px] font-extrabold tracking-[-.04em] text-[#17392A]">
            All tools
          </h1>
        </div>
      </header>

      <label className="mt-5 flex h-12 items-center gap-3 rounded-2xl border border-[#DFE7E1] bg-white px-4">
        <ModuleIcon name="search" size={18} />
        <input
          aria-label="Search FarmIQ tools"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[12px] outline-none"
          placeholder="Search FarmIQ tools..."
        />
      </label>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {GROUPS.map((item) => (
          <button
            key={item}
            onClick={() => setGroup(item)}
            className={`shrink-0 rounded-full px-3 py-2 text-[10px] font-bold ${
              group === item
                ? "bg-[#216B45] text-white"
                : "border border-[#DDE6DF] bg-white text-[#607369]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {results.map((item) => (
          <button
            key={item.key}
            onClick={() => onOpen(item.key)}
            className="flex items-center gap-3 rounded-[18px] border border-[#E2E9E4] bg-white p-4 text-left shadow-[0_4px_14px_rgba(31,57,44,.04)] transition hover:-translate-y-0.5"
          >
            <span
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${item.color}`}
            >
              <ModuleIcon name={item.icon} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[13px] font-extrabold text-[#233F31]">
                {item.title}
              </span>
              <span className="mt-1 block text-[10px] leading-4 text-[#75877D]">
                {item.short}
              </span>
            </span>
            <ModuleIcon name="arrow" size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}
