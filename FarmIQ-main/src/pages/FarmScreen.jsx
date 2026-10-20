import Icon from "@/components/common/Icon";
import { SecondaryButton } from "@/components/common/Button";
import ScreenShell from "@/components/layout/ScreenShell";
import { farmCrops } from "@/data/modules";

/** Single IoT sensor card. */
function SensorCard({ icon, label, value, detail, tone }) {
  return (
    <div className="rounded-[20px] border border-[#E3E9E4] bg-white p-4 shadow-[0_4px_16px_rgba(31,57,44,.04)]">
      <div className="mb-4 flex items-start justify-between">
        <span className={`grid h-9 w-9 place-items-center rounded-xl ${tone}`}>
          <Icon name={icon} size={19} />
        </span>
        <span className="flex items-center gap-1 text-[9px] font-bold text-[#4A9365]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#52AB71]" />
          LIVE
        </span>
      </div>
      <p className="text-[11px] font-semibold text-[#75877D]">{label}</p>
      <p className="mt-1 text-[24px] font-extrabold tracking-[-0.03em] text-[#193A2A]">
        {value}
      </p>
      <p className="mt-1 text-[10px] text-[#809087]">{detail}</p>
    </div>
  );
}

/**
 * My Farm screen — farm overview, active crops, and connected sensors.
 *
 * @param {object}   props
 * @param {Function} props.navigate - Navigate to a screen.
 */
export default function FarmScreen({ navigate }) {
  return (
    <ScreenShell active="farm" navigate={navigate}>
      <div className="px-5 pb-7 pt-5">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#668173]">
              My farm
            </p>
            <h1 className="mt-1 text-[26px] font-extrabold tracking-[-0.04em] text-[#17392A]">
              Green Valley Farm
            </h1>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E5F1E8] text-[#216B45]">
            <Icon name="farm" size={23} />
          </span>
        </header>

        {/* Farm summary card */}
        <div className="mb-7 rounded-[22px] bg-[#216B45] p-5 text-white shadow-[0_10px_24px_rgba(33,107,69,.2)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white/65">
                Farm details
              </p>
              <p className="mt-2 text-[18px] font-bold">Nashik, Maharashtra</p>
              <p className="mt-1 text-[12px] text-white/70">
                12.5 acres • Loamy soil
              </p>
            </div>
            <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold">
              ACTIVE
            </span>
          </div>
          <div className="mt-5 grid grid-cols-3 border-t border-white/15 pt-4 text-center">
            <div>
              <b className="block text-[17px]">3</b>
              <span className="text-[9px] text-white/65">Crops</span>
            </div>
            <div className="border-x border-white/15">
              <b className="block text-[17px]">4</b>
              <span className="text-[9px] text-white/65">Sensors</span>
            </div>
            <div>
              <b className="block text-[17px]">Good</b>
              <span className="text-[9px] text-white/65">Farm health</span>
            </div>
          </div>
        </div>

        {/* Crops */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[17px] font-extrabold text-[#1D382A]">
            My crops
          </h2>
          <button className="text-[11px] font-bold text-[#216B45]">
            View all
          </button>
        </div>
        <div className="mb-7 flex gap-3 overflow-x-auto pb-1">
          {farmCrops.map(({ name, stage, icon, tone }) => (
            <div
              key={name}
              className="min-w-[116px] rounded-2xl border border-[#E4EAE5] bg-white p-3"
            >
              <span
                className={`mb-3 grid h-9 w-9 place-items-center rounded-xl ${tone}`}
              >
                <Icon name={icon} size={18} />
              </span>
              <p className="text-[13px] font-bold text-[#243F31]">{name}</p>
              <p className="mt-1 text-[10px] text-[#7D8D84]">{stage}</p>
            </div>
          ))}
        </div>
        <SecondaryButton>
          <Icon name="plus" size={17} /> Add Crop
        </SecondaryButton>

        {/* Sensors */}
        <div className="mt-7 mb-3 flex items-center justify-between">
          <h2 className="text-[17px] font-extrabold text-[#1D382A]">
            Connected sensors
          </h2>
          <button className="text-[11px] font-bold text-[#216B45]">
            4 connected
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SensorCard
            detail="Optimal range"
            icon="droplet"
            label="Soil Moisture"
            tone="bg-[#E7F4F7] text-[#287A8E]"
            value="62%"
          />
          <SensorCard
            detail="Normal today"
            icon="temperature"
            label="Temperature"
            tone="bg-[#FFF0E1] text-[#B06E2B]"
            value="27°C"
          />
        </div>
        <button className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#AFC4B5] text-[12px] font-bold text-[#216B45]">
          <Icon name="sensor" size={18} /> Connect Sensor
        </button>
      </div>
    </ScreenShell>
  );
}
