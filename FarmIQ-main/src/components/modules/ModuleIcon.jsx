/** SVG path fragments for module-specific icons. */
const paths = {
  farm:     <><path d="m3 10 9-6 9 6M5 9v11h14V9M9 20v-6h6v6" /></>,
  crop:     <path d="M12 21V10M12 14c-4.5 0-7-2.3-7-7 4.5 0 7 2.2 7 7ZM12 10c0-4 2.2-6 6.5-6 0 4.2-2.2 6-6.5 6Z" />,
  flask:    <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M8 15h8" /></>,
  drop:     <path d="M12 3S5.5 10.2 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10.2 12 3 12 3Z" />,
  soil:     <><path d="M3 8c3-2 6 2 9 0s6 2 9 0M3 13c3-2 6 2 9 0s6 2 9 0M3 18c3-2 6 2 9 0s6 2 9 0" /></>,
  signal:   <><circle cx="12" cy="12" r="2" /><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13" /></>,
  chart:    <><path d="M4 20V10M10 20V5M16 20v-7M22 20H2" /><path d="m3 7 6-4 6 5 6-5" /></>,
  market:   <><path d="M4 20V10M10 20V6M16 20v-8M22 20H2" /><path d="m3 6 5-3 5 3 6-4" /></>,
  camera:   <><path d="M14.5 5 13 3h-2L9.5 5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-3.5Z" /><circle cx="12" cy="12" r="3.2" /></>,
  book:     <><path d="M4 4h7a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H4V4ZM20 4h-3a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3h3V4Z" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
  bell:     <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></>,
  report:   <><path d="M5 3h14v18H5zM9 16v-3M12 16V8M15 16v-5" /></>,
  device:   <><rect x="5" y="2" width="14" height="20" rx="3" /><path d="M9 5h6M10 18h4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19 13.5v-3l2-1.5-2-3-2.4 1a8 8 0 0 0-2.6-1.5L13.5 3h-3L10 5.5A8 8 0 0 0 7.4 7L5 6 3 9l2 1.5v3L3 15l2 3 2.4-1a8 8 0 0 0 2.6 1.5l.5 2.5h3l.5-2.5a8 8 0 0 0 2.6-1.5l2.4 1 2-3-2-1.5Z" /></>,
  model:    <><path d="m12 3 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 17l8 4 8-4" /></>,
  shield:   <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  search:   <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  arrow:    <path d="m9 18 6-6-6-6" />,
  back:     <path d="m15 18-6-6 6-6" />,
  plus:     <path d="M12 5v14M5 12h14" />,
  check:    <path d="m5 12 4 4L19 6" />,
  trash:    <><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14" /></>,
  edit:     <><path d="M4 20h4L19 9l-4-4L4 16v4ZM13.5 6.5l4 4" /></>,
};

/**
 * Inline SVG icon for module screens and the sidebar.
 *
 * @param {object} props
 * @param {string} props.name   - Icon key.
 * @param {number} [props.size] - Width/height in px (default 21).
 */
export default function ModuleIcon({ name, size = 21 }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name] ?? paths.crop}
    </svg>
  );
}
