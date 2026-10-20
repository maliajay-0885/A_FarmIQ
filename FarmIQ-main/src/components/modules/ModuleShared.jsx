import ModuleIcon from "./ModuleIcon";

/**
 * Small amber badge indicating demonstration or unverified data.
 */
export function DemoBadge({ status = "Demonstration data" }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5DE] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.06em] text-[#916112]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D99A2B]" />
      {status}
    </span>
  );
}

/**
 * Primary/secondary action button used inside module screens.
 */
export function ModuleButton({
  children,
  onClick,
  secondary = false,
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-[12px] font-extrabold transition active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-50 ${
        secondary
          ? "border border-[#D9E4DC] bg-white text-[#216B45]"
          : "bg-[#216B45] text-white shadow-[0_6px_16px_rgba(33,107,69,.18)]"
      }`}
    >
      {children}
    </button>
  );
}

/**
 * Labelled text input for module forms.
 */
export function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-bold text-[#52675B]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-[#DDE6DF] bg-white px-3 text-[12px] text-[#203B2D] outline-none focus:border-[#76A58A]"
      />
    </label>
  );
}

/**
 * Labelled select input for module forms.
 */
export function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-bold text-[#52675B]">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-xl border border-[#DDE6DF] bg-white px-3 text-[12px] font-semibold text-[#203B2D] outline-none"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

/**
 * Single metric tile used in the 3-column metric grid.
 */
export function Metric({ label, value, note, tone = "" }) {
  return (
    <div className="rounded-2xl border border-[#E2E9E4] bg-white p-3">
      <p className="text-[9px] font-bold uppercase tracking-[.08em] text-[#7A8B82]">
        {label}
      </p>
      <p
        className={`mt-2 text-[21px] font-extrabold tracking-[-.03em] ${
          tone || "text-[#1D3A2B]"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-[9px] text-[#84938B]">{note}</p>
    </div>
  );
}

/**
 * Simple bar chart placeholder used in module summary sections.
 */
export function MiniChart({ values = [40, 55, 48, 68, 62, 74, 80] }) {
  return (
    <div className="flex h-24 items-end gap-2 rounded-2xl bg-[#F4F7F3] p-3">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col items-center justify-end gap-1"
        >
          <div
            className="w-full rounded-t-md bg-[#7EAE8E]"
            style={{ height: `${value}%` }}
          />
          <span className="text-[7px] font-semibold text-[#86958D]">
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}
