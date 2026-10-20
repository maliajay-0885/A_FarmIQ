/**
 * SVG path definitions for every icon used in FarmIQ.
 * Each value is a JSX fragment that goes inside an <svg> element.
 * This file uses .jsx because it contains inline JSX path elements.
 */
export const iconPaths = {
  arrow: <path d="m9 18 6-6-6-6" />,
  bot: (
    <>
      <rect x="4" y="6" width="16" height="13" rx="4" />
      <path d="M12 2v4M8 12h.01M16 12h.01M9 16h6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  camera: (
    <>
      <path d="M14.5 5 13 3h-2L9.5 5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-3.5Z" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  crop: (
    <path d="M12 21V10M12 14c-4.5 0-7-2.3-7-7 4.5 0 7 2.2 7 7ZM12 10c0-4 2.2-6 6.5-6 0 4.2-2.2 6-6.5 6Z" />
  ),
  droplet: (
    <path d="M12 3S5.5 10.2 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10.2 12 3 12 3Z" />
  ),
  "eye-off": (
    <>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <path d="m1 1 22 22" />
    </>
  ),
  eye: (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  farm: (
    <>
      <path d="m3 10 9-6 9 6M5 9v11h14V9M9 20v-6h6v6" />
      <path d="M8 11h.01M16 11h.01" />
    </>
  ),
  fertilizer: (
    <>
      <path d="M8 3h8l-1 4H9L8 3ZM9 7l-3 5v8h12v-8l-3-5" />
      <path d="M9 13h6M12 13v4M10 15h4" />
    </>
  ),
  history: (
    <>
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5M12 7v5l3 2" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.2 2.5 3.2 5.5 3 9 .2 3.5-.8 6.5-3 9-2.2-2.5-3.2-5.5-3-9-.2-3.5.8-6.5 3-9Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C10 4 5 8 5 14c0 3 2 5 5 5 6 0 10-5 10-15Z" />
      <path d="M4 21c2-5 6-8 12-11" />
    </>
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </>
  ),
  market: (
    <>
      <path d="M4 20V10M10 20V6M16 20v-8M22 20H2" />
      <path d="m3 6 5-3 5 3 6-4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  mic: (
    <>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  phone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  send: <path d="m21 3-8 18-3-8-8-3 19-7ZM10 13l5-5" />,
  sensor: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11 4.5-.85 8-5.75 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  logout: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </>
  ),
  edit: (
    <>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14ZM5 13l.7 1.8 1.8.7-1.8.7L5 18l-.7-1.8-1.8-.7 1.8-.7L5 13Z" />
    </>
  ),
  temperature: (
    <>
      <path d="M14 14.8V5a3 3 0 0 0-6 0v9.8a5 5 0 1 0 6 0Z" />
      <path d="M11 7v9" />
    </>
  ),
};
