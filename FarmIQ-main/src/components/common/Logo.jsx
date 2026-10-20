import Icon from "./Icon";

/**
 * FarmIQ wordmark with leaf icon.
 *
 * @param {object}  props
 * @param {boolean} [props.compact] - Hide the tagline when true.
 */
export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#216B45] text-white shadow-[0_5px_14px_rgba(33,107,69,.22)]">
        <Icon name="leaf" size={22} />
      </span>
      <div>
        <div className="text-[22px] font-extrabold leading-6 tracking-[-0.04em] text-[#17392A]">
          FarmIQ
        </div>
        {!compact && (
          <div className="text-[9px] font-semibold uppercase tracking-[.14em] text-[#698073]">
            Intelligent Farm Management
          </div>
        )}
      </div>
    </div>
  );
}
