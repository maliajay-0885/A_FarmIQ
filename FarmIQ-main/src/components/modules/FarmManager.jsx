import { useState } from "react";
import { DemoBadge, ModuleButton, Field, SelectField } from "./ModuleShared";
import ModuleIcon from "./ModuleIcon";
import { defaultFarms, farmChecklist } from "@/data/modules";

/**
 * Farm Management module — list farms and add new ones.
 * Initial farm data and checklist items come from `data/modules.js`.
 */
export default function FarmManager() {
  const [farms, setFarms]       = useState(defaultFarms);
  const [adding, setAdding]     = useState(false);
  const [name, setName]         = useState("");
  const [location, setLocation] = useState("");
  const [error, setError]       = useState("");

  const addFarm = () => {
    if (!name.trim() || !location.trim()) {
      setError("Farm name and location are required. You can skip the other details.");
      return;
    }
    setFarms([...farms, { name, location, area: "Area not provided", crop: "No crop added" }]);
    setName("");
    setLocation("");
    setError("");
    setAdding(false);
  };

  return (
    <div className="space-y-4">
      <DemoBadge />

      {farms.map((farm, index) => (
        <button
          key={farm.name}
          className="w-full rounded-[20px] border border-[#E0E8E2] bg-white p-4 text-left"
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-[14px] font-extrabold text-[#213D2F]">
                {farm.name}
              </h2>
              <p className="mt-1 text-[10px] text-[#77887E]">{farm.location}</p>
            </div>
            <span className="text-[9px] font-bold text-[#216B45]">
              {index === 0 ? "SELECTED" : "SELECT"}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <span className="rounded-xl bg-[#F3F6F2] p-3 text-[10px] text-[#53685C]">
              {farm.area}
            </span>
            <span className="rounded-xl bg-[#F3F6F2] p-3 text-[10px] text-[#53685C]">
              {farm.crop}
            </span>
          </div>
        </button>
      ))}

      {!adding ? (
        <ModuleButton onClick={() => setAdding(true)}>
          <ModuleIcon name="plus" size={17} />
          Add Farm
        </ModuleButton>
      ) : (
        <section className="space-y-3 rounded-[22px] border border-[#DCE6DF] bg-white p-4">
          <div>
            <h2 className="text-[15px] font-extrabold text-[#213D2F]">
              Add a farm
            </h2>
            <p className="mt-1 text-[10px] text-[#7B8C82]">
              Step 1 of 3 • Skip anything you do not know.
            </p>
          </div>

          <Field
            label="Farm name *"
            value={name}
            onChange={setName}
            placeholder="Example: Sunrise Farm"
          />
          <Field
            label="Farm location *"
            value={location}
            onChange={setLocation}
            placeholder="Village, district, state"
          />

          <div className="grid grid-cols-2 gap-3">
            <SelectField
              label="Area unit"
              value="Acres"
              onChange={() => {}}
              options={["Acres", "Hectares", "Guntha"]}
            />
            <SelectField
              label="Irrigation"
              value="Drip"
              onChange={() => {}}
              options={["Drip", "Sprinkler", "Flood", "Not known"]}
            />
          </div>

          {error && (
            <p className="rounded-xl bg-[#FCE9E5] p-3 text-[10px] font-bold text-[#9D4C3E]">
              {error}
            </p>
          )}

          <div className="flex gap-2">
            <ModuleButton secondary onClick={() => setAdding(false)}>
              Skip for now
            </ModuleButton>
            <ModuleButton onClick={addFarm}>Save farm</ModuleButton>
          </div>
        </section>
      )}

      <section className="rounded-[20px] border border-[#E0E8E2] bg-white p-4">
        <h2 className="text-[14px] font-extrabold text-[#213D2F]">
          Farm details checklist
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {farmChecklist.map((item) => (
            <button
              key={item}
              className="rounded-xl bg-[#F3F6F2] p-3 text-left text-[10px] font-bold text-[#50665A]"
            >
              {item}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
