/**
 * Primary CTA button — full-width green with shadow.
 */
export function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button
      className={`flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#216B45] px-5 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(33,107,69,.22)] transition active:scale-[.98] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/**
 * Secondary button — outlined, white background, green text.
 */
export function SecondaryButton({ children, onClick }) {
  return (
    <button
      className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#D7E2DA] bg-white px-4 text-[13px] font-bold text-[#216B45] transition active:scale-[.98]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
