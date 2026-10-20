import { moduleCatalog } from "@/data/modules";
import ModuleIcon from "@/components/modules/ModuleIcon";

/**
 * Sticky left sidebar shown on lg+ breakpoints.
 *
 * @param {object}    props
 * @param {string}    [props.activeModule] - Currently open module key.
 * @param {Function}  props.onHome         - Navigate to home screen.
 * @param {Function}  props.onAssistant    - Navigate to chat screen.
 * @param {Function}  props.onOpen         - Open a module by key.
 */
export default function DesktopNavigation({
  activeModule,
  onHome,
  onAssistant,
  onOpen,
}) {
  const primary = moduleCatalog.filter((item) => item.key !== "admin");

  return (
    <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-64 shrink-0 flex-col overflow-hidden rounded-[24px] bg-[#17392A] text-white shadow-xl lg:flex">
      <div className="border-b border-white/10 p-5">
        <div className="text-[20px] font-extrabold">FarmIQ</div>
        <div className="text-[9px] uppercase tracking-[.14em] text-white/50">
          Intelligent Farm Management
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3">
        <button
          onClick={onHome}
          className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[11px] font-bold text-white/75 hover:bg-white/10"
        >
          Overview
        </button>
        <button
          onClick={onAssistant}
          className="mb-3 flex w-full items-center gap-3 rounded-xl bg-[#2C7B54] px-3 py-2.5 text-left text-[11px] font-bold"
        >
          AI Assistant
        </button>

        {primary.map((item) => (
          <button
            key={item.key}
            onClick={() => onOpen(item.key)}
            className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[10px] font-semibold ${
              activeModule === item.key
                ? "bg-white/15 text-white"
                : "text-white/65 hover:bg-white/10"
            }`}
          >
            <ModuleIcon name={item.icon} size={16} />
            {item.title}
          </button>
        ))}
      </nav>

      <button
        onClick={() => onOpen("admin")}
        className="m-3 flex items-center gap-3 rounded-xl border border-white/10 px-3 py-3 text-left text-[10px] font-bold text-white/70"
      >
        <ModuleIcon name="shield" size={16} />
        Administration &amp; Roles
      </button>
    </aside>
  );
}
