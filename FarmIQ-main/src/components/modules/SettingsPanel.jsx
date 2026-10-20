import { useState } from "react";
import { SelectField } from "./ModuleShared";
import ModuleIcon from "./ModuleIcon";
import { settingsLanguages } from "@/data/modules";

/**
 * Profile & Settings module — language picker, area units, voice toggle.
 *
 * @param {object}   props
 * @param {string}   props.currentLanguage - Currently selected language value.
 * @param {Function} props.onLanguage      - Called with the new language value.
 */
export default function SettingsPanel({ currentLanguage, onLanguage }) {
  const [units, setUnits] = useState("Acres");
  const [voice, setVoice] = useState(true);

  return (
    <div className="space-y-4">
      {/* User profile */}
      <section className="rounded-[22px] border border-[#E0E8E2] bg-white p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E7F2E9] text-[16px] font-extrabold text-[#216B45]">
            AP
          </span>
          <div>
            <h2 className="text-[14px] font-extrabold text-[#213D2F]">
              Anita Patil
            </h2>
            <p className="text-[10px] text-[#7D8E84]">Farm Manager • Nashik</p>
          </div>
        </div>
      </section>

      {/* Language */}
      <section className="rounded-[22px] border border-[#E0E8E2] bg-white p-4">
        <h2 className="text-[14px] font-extrabold text-[#213D2F]">Language</h2>
        <p className="mt-1 text-[10px] text-[#7D8E84]">
          Translated examples: English, हिन्दी and मराठी. Other languages are
          layout-ready.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {settingsLanguages.map(([label, value]) => (
            <button
              key={value}
              onClick={() => onLanguage(value)}
              className={`flex h-10 items-center justify-between rounded-xl border px-3 text-left text-[10px] font-bold ${
                currentLanguage === value
                  ? "border-[#216B45] bg-[#EAF3EC] text-[#216B45]"
                  : "border-[#E2E9E4] text-[#4F6559]"
              }`}
            >
              {label}
              {currentLanguage === value && (
                <ModuleIcon name="check" size={14} />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Preferences */}
      <section className="space-y-3 rounded-[22px] border border-[#E0E8E2] bg-white p-4">
        <SelectField
          label="Farm area units"
          value={units}
          onChange={setUnits}
          options={["Acres", "Hectares", "Guntha"]}
        />
        <button
          onClick={() => setVoice(!voice)}
          className="flex w-full items-center justify-between rounded-xl bg-[#F3F6F2] p-3 text-[11px] font-bold text-[#40594B]"
        >
          <span>Read AI answers aloud</span>
          <span
            className={`relative h-6 w-11 rounded-full ${
              voice ? "bg-[#216B45]" : "bg-[#B8C4BC]"
            }`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                voice ? "left-6" : "left-1"
              }`}
            />
          </span>
        </button>
      </section>

      {/* Translation examples */}
      <section className="rounded-[22px] border border-[#E0E8E2] bg-white p-4">
        <h2 className="text-[13px] font-extrabold text-[#213D2F]">
          Translated interface examples
        </h2>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[9px] font-bold">
          <span className="rounded-xl bg-[#F3F6F2] p-3">Ask FarmIQ</span>
          <span className="rounded-xl bg-[#F3F6F2] p-3">FarmIQ से पूछें</span>
          <span className="rounded-xl bg-[#F3F6F2] p-3">FarmIQ ला विचारा</span>
        </div>
      </section>
    </div>
  );
}
