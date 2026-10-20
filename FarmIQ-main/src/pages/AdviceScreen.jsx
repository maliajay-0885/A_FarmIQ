import Icon from "@/components/common/Icon";
import ScreenShell from "@/components/layout/ScreenShell";
import { recommendations } from "@/data/modules";

/**
 * Farming Advice screen — AI-generated recommendation cards.
 *
 * @param {object}   props
 * @param {Function} props.navigate - Navigate to a screen.
 */
export default function AdviceScreen({ navigate }) {
  return (
    <ScreenShell active="advice" navigate={navigate}>
      <div className="px-5 pb-7 pt-5">
        <header className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#5D7B6B]">
                FarmIQ insights
              </p>
              <h1 className="mt-1 text-[27px] font-extrabold tracking-[-0.04em] text-[#17392A]">
                Farming Advice
              </h1>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E5F1E8] text-[#216B45]">
              <Icon name="sparkles" size={22} />
            </span>
          </div>
          <p className="mt-3 text-[12px] leading-5 text-[#718279]">
            Personalized for Green Valley Farm • Updated today
          </p>
        </header>

        <div className="space-y-3">
          {recommendations.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-[#E3E9E4] bg-white p-4 shadow-[0_5px_18px_rgba(31,57,44,.045)]"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${item.tone}`}
                >
                  <Icon name={item.icon} size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-[.08em] text-[#7D8E84]">
                      {item.category}
                    </p>
                    <span className="shrink-0 rounded-full bg-[#F0F5F1] px-2 py-1 text-[9px] font-bold text-[#4A715A]">
                      {item.tag}
                    </span>
                  </div>
                  <h2 className="mt-2 text-[16px] font-extrabold text-[#203D2E]">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-[11px] leading-[1.55] text-[#718178]">
                    {item.body}
                  </p>
                </div>
              </div>
              <button
                className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#F0F6F1] text-[11px] font-bold text-[#216B45]"
                onClick={() => navigate("chat")}
              >
                <Icon name="sparkles" size={15} />
                Ask FarmIQ
                <Icon name="arrow" size={14} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}
