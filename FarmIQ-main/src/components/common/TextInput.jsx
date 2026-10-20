import Icon from "./Icon";

/**
 * Labelled text input with a leading icon.
 *
 * @param {object}   props
 * @param {string}   props.placeholder
 * @param {string}   [props.icon]       - Icon name (default "search").
 * @param {string}   [props.type]       - HTML input type (default "text").
 * @param {string}   [props.name]       - HTML input name attribute.
 * @param {string}   [props.value]
 * @param {Function} [props.onChange]   - Called with the new string value.
 * @param {Function} [props.onKeyDown]
 * @param {string}   [props.className]  - Extra classes on the wrapper label.
 */
export default function TextInput({
  placeholder,
  icon = "search",
  type = "text",
  name,
  value,
  onChange,
  onKeyDown,
  className = "",
}) {
  return (
    <label
      className={`flex h-13 items-center gap-3 rounded-2xl border border-[#DFE7E1] bg-white px-4 shadow-[0_3px_12px_rgba(31,57,44,.04)] ${className}`}
    >
      <Icon name={icon} size={19} className="shrink-0 text-[#7A8E82]" />
      <input
        aria-label={placeholder}
        className="min-w-0 flex-1 bg-transparent text-[14px] text-[#1E382B] outline-none placeholder:text-[#8A9A91]"
        name={name}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  );
}
