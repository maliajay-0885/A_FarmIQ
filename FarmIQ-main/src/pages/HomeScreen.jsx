import Icon from "@/components/common/Icon";
import Logo from "@/components/common/Logo";
import { PrimaryButton } from "@/components/common/Button";
import TextInput from "@/components/common/TextInput";
import ScreenShell from "@/components/layout/ScreenShell";
import { quickActions } from "@/data/modules";

/**
 * Home screen — welcome hero, quick action cards, explore-all button.
 *
 * @param {object}   props
 * @param {Function} props.navigate         - Navigate to a screen by key.
 * @param {string}   props.language         - Currently selected language label.
 * @param {Function} props.openLanguages    - Open the language sheet.
 * @param {Function} props.openTools        - Navigate to the module hub.
 * @param {object}   [props.user]           - Logged-in user data.
 * @param {Function} props.onOpenProfile    - Open the profile panel.
 */
export default function HomeScreen({
  navigate,
  language,
  openLanguages,
  openTools,
  user,
  onOpenProfile,
}) {
  /** Generate up-to-2-char initials from a full name string. */
  const initials = (name = "?") =>
    name
      .trim()
      .split(/\s+/)
      .map((w) => w[0]?.toUpperCase() ?? "")
      .slice(0, 2)
      .join("");
  return (
    <ScreenShell active="home" navigate={navigate}>
      <div className="px-5 pb-6 pt-5">
        <header className="flex items-center justify-between gap-2">
          <Logo />
          <div className="flex items-center gap-2">
            <button
              className="flex h-10 items-center gap-2 rounded-full border border-[#DFE7E1] bg-white px-3 text-[11px] font-bold text-[#345443]"
              onClick={openLanguages}
            >
              <Icon name="language" size={17} />
              {language}
            </button>
            {/* Profile avatar button */}
            <button
              aria-label="Open profile"
              onClick={onOpenProfile}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#216B45] text-[13px] font-extrabold text-white shadow-[0_2px_8px_rgba(33,107,69,.3)] transition hover:bg-[#1a5738] active:scale-95 select-none"
            >
              {user ? initials(user.full_name) : <Icon name="person" size={18} />}
            </button>
          </div>
        </header>

        <section className="pb-5 pt-9">
          <p className="mb-2 text-[13px] font-bold text-[#4D7A61]">
            Welcome to FarmIQ
          </p>
          <h1 className="max-w-[320px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#17392A]">
            How can I help with your farming today?
          </h1>
          <p className="mt-3 text-[13px] leading-5 text-[#718279]">
            Get simple, timely advice for a healthier and more productive farm.
          </p>
        </section>

        <PrimaryButton onClick={() => navigate("chat")}>
          <Icon name="mic" size={21} />
          Ask FarmIQ
        </PrimaryButton>

        <div className="mt-3" onClick={() => navigate("chat")}>
          <TextInput placeholder="Ask anything about farming..." />
        </div>

        <div className="mb-3 mt-7 flex items-center justify-between">
          <h2 className="text-[17px] font-extrabold text-[#1D382A]">
            Quick actions
          </h2>
          <span className="text-[11px] font-semibold text-[#76877E]">
            Tap to explore
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <button
              key={action.title}
              className="group min-h-[128px] rounded-[20px] border border-[#E6EBE7] bg-white p-4 text-left shadow-[0_5px_18px_rgba(31,57,44,.05)] transition hover:-translate-y-0.5 hover:shadow-md active:scale-[.98]"
              onClick={() => navigate("advice")}
            >
              <span
                className={`mb-4 grid h-10 w-10 place-items-center rounded-xl ${action.color}`}
              >
                <Icon name={action.icon} size={20} />
              </span>
              <span className="block text-[14px] font-bold text-[#1D382A]">
                {action.title}
              </span>
              <span className="mt-1 block text-[11px] leading-4 text-[#7C8E84]">
                {action.subtitle}
              </span>
            </button>
          ))}
        </div>

        <button
          className="mt-4 flex w-full items-center gap-3 rounded-[20px] border border-[#D8E5DC] bg-[#ECF4EE] p-4 text-left"
          onClick={openTools}
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#216B45] text-white">
            <Icon name="menu" size={20} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-extrabold text-[#21412F]">
              Explore all FarmIQ tools
            </span>
            <span className="mt-1 block text-[10px] text-[#718279]">
              Recommendations, sensors, calendar, reports and more
            </span>
          </span>
          <Icon name="chevron" size={17} className="text-[#216B45]" />
        </button>
      </div>
    </ScreenShell>
  );
}
