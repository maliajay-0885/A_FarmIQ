import Icon from "@/components/common/Icon";
import { languages } from "@/constants/languages";

/**
 * Bottom-sheet overlay for selecting the display language.
 *
 * @param {object}   props
 * @param {string}   props.selected   - Currently selected language.
 * @param {Function} props.onSelect   - Called with the chosen language string.
 * @param {Function} props.onClose    - Dismisses the sheet.
 */
export default function LanguageSheet({ selected, onSelect, onClose }) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-end bg-[#143526]/35 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <section
        aria-label="Select language"
        className="max-h-[76%] w-full overflow-hidden rounded-t-[28px] bg-white px-5 pb-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto my-3 h-1.5 w-10 rounded-full bg-[#D7DFD9]" />
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-extrabold text-[#17392A]">
              Choose your language
            </h2>
            <p className="mt-1 text-[12px] text-[#73857B]">
              You can change this anytime
            </p>
          </div>
          <button
            className="rounded-full bg-[#F1F5F1] px-3 py-2 text-xs font-bold text-[#52665B]"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 overflow-y-auto">
          {languages.map((language) => (
            <button
              key={language}
              className={`flex h-12 items-center justify-between rounded-xl border px-4 text-left text-sm font-semibold ${
                selected === language
                  ? "border-[#216B45] bg-[#EAF3EC] text-[#216B45]"
                  : "border-[#E5EAE6] text-[#354D40]"
              }`}
              onClick={() => onSelect(language)}
            >
              {language}
              {selected === language && <Icon name="check" size={17} />}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
