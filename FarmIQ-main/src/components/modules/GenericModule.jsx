import { useState } from "react";
import { moduleConfigs } from "@/data/modules";
import {
  DemoBadge,
  ModuleButton,
  SelectField,
  Metric,
  MiniChart,
} from "./ModuleShared";
import ModuleIcon from "./ModuleIcon";

/**
 * Generic module screen used for all modules that don't have a custom UI.
 * Renders metrics, a mini chart, a data table, and save/ask actions.
 *
 * @param {object}   props
 * @param {string}   props.moduleKey - The module key from moduleCatalog.
 * @param {Function} props.onAsk     - Navigate to the chat/assistant screen.
 */
export default function GenericModule({ moduleKey, onAsk }) {
  const config = moduleConfigs[moduleKey] ?? moduleConfigs.reports;
  const [crop, setCrop] = useState("Tomato");
  const [farm, setFarm] = useState("Green Valley Farm");
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <SelectField
          label="Farm"
          value={farm}
          onChange={setFarm}
          options={["Green Valley Farm", "Riverbend Plot"]}
        />
        <SelectField
          label="Crop"
          value={crop}
          onChange={setCrop}
          options={["Tomato", "Onion", "Wheat", "Chickpea"]}
        />
      </div>

      <div className="flex items-center justify-between">
        <DemoBadge />
        <span className="text-[9px] font-semibold text-[#829188]">
          Updated 10:24 AM
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {config.metrics.map(([label, value, note]) => (
          <Metric key={label} label={label} value={value} note={note} />
        ))}
      </div>

      <section className="rounded-[22px] border border-[#E0E8E2] bg-white p-4">
        <h2 className="text-[16px] font-extrabold text-[#203C2E]">
          {config.title}
        </h2>
        <p className="mt-1 text-[11px] leading-5 text-[#75867C]">
          {config.detail}
        </p>
        <div className="mt-4">
          <MiniChart />
        </div>
      </section>

      <section className="overflow-hidden rounded-[22px] border border-[#E0E8E2] bg-white">
        {config.rows.map(([name, value, note], index) => (
          <div
            key={name}
            className={`flex items-center gap-3 p-4 ${
              index ? "border-t border-[#EDF1EE]" : ""
            }`}
          >
            <span className="min-w-0 flex-1">
              <b className="block text-[12px] text-[#294234]">{name}</b>
              <span className="mt-1 block text-[9px] text-[#84938B]">{note}</span>
            </span>
            <span className="text-right text-[11px] font-extrabold text-[#426653]">
              {value}
            </span>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-2 gap-3">
        <ModuleButton secondary onClick={() => setSaved(!saved)}>
          <ModuleIcon name={saved ? "check" : "plus"} size={16} />
          {saved ? "Saved" : "Save"}
        </ModuleButton>
        <ModuleButton onClick={onAsk}>Ask FarmIQ</ModuleButton>
      </div>
    </div>
  );
}
