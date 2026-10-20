import { useState } from "react";
import { DemoBadge, ModuleButton, SelectField } from "./ModuleShared";
import ModuleIcon from "./ModuleIcon";

const CROP_OPTIONS    = ["Tomato", "Onion", "Wheat", "Other"];
const PROBLEM_OPTIONS = ["Leaf spots", "Curling", "Yellowing", "Not sure"];

/**
 * Crop Image Analysis module.
 *
 * Lets the user upload a crop photograph and select the visible symptom.
 * The analysis result is a demonstration — no real AI inference runs here.
 */
export default function ImageAnalysis() {
  const [file, setFile]             = useState("");
  const [crop, setCrop]             = useState(CROP_OPTIONS[0]);
  const [problem, setProblem]       = useState(PROBLEM_OPTIONS[0]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult]         = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0]?.name ?? "");
    setResult(false);
  };

  const analyze = () => {
    if (!file) return;
    setProcessing(true);
    // Simulate a short processing delay (demonstration only — no real inference)
    setTimeout(() => {
      setProcessing(false);
      setResult(true);
    }, 900);
  };

  return (
    <div className="space-y-4">
      <DemoBadge status="AI demonstration" />

      {/* Photo upload */}
      <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-[22px] border-2 border-dashed border-[#B7CABB] bg-white p-6 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E9F3EC] text-[#216B45]">
          <ModuleIcon name="camera" />
        </span>
        <b className="mt-3 text-[13px] text-[#294234]">
          {file || "Upload a crop photograph"}
        </b>
        <span className="mt-1 text-[10px] text-[#829188]">
          JPG or PNG • Clear, close-up photos work best
        </span>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      {/* Crop and symptom selectors — both controlled */}
      <div className="grid grid-cols-2 gap-3">
        <SelectField
          label="Crop"
          value={crop}
          onChange={setCrop}
          options={CROP_OPTIONS}
        />
        <SelectField
          label="Visible problem"
          value={problem}
          onChange={setProblem}
          options={PROBLEM_OPTIONS}
        />
      </div>

      <ModuleButton disabled={!file || processing} onClick={analyze}>
        {processing ? "Checking photograph..." : "Analyze photograph"}
      </ModuleButton>

      {/* Demonstration result */}
      {result && (
        <section className="rounded-[22px] border border-[#E0E8E2] bg-white p-4">
          <DemoBadge status="Possible cause" />
          <h2 className="mt-3 text-[16px] font-extrabold text-[#203C2E]">
            Possible early leaf spot
          </h2>
          <p className="mt-2 text-[11px] leading-5 text-[#718379]">
            This is not a confirmed diagnosis. Similar marks can be caused by
            fungal infection, nutrient stress, or physical damage.
          </p>
          <div className="mt-3 rounded-xl bg-[#F3F6F2] p-3 text-[10px] leading-5 text-[#52675B]">
            <b>Next steps:</b> Isolate affected leaves, avoid overhead watering,
            and ask a local agronomist before applying treatment.
          </div>
        </section>
      )}
    </div>
  );
}
