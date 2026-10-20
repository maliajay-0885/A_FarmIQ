import { iconPaths } from "@/constants/icons.jsx";

/**
 * Renders an inline SVG icon from the FarmIQ icon set.
 *
 * @param {object} props
 * @param {string} props.name    - Key from the iconPaths map.
 * @param {number} [props.size]  - Width and height in pixels (default 22).
 * @param {string} [props.className] - Additional CSS classes.
 */
export default function Icon({ name, size = 22, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  );
}
