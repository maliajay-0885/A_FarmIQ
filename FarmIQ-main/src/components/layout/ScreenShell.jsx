import BottomNavigation from "./BottomNavigation";

/**
 * Mobile screen wrapper — constrains width, adds scroll area and bottom nav.
 *
 * @param {object}   props
 * @param {React.ReactNode} props.children
 * @param {string}   props.active    - Active nav key passed to BottomNavigation.
 * @param {Function} props.navigate  - Navigation callback.
 */
export default function ScreenShell({ children, active, navigate }) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[390px] flex-col overflow-hidden bg-[#F7F9F5] shadow-[0_0_60px_rgba(26,57,40,.12)] sm:min-h-[844px] sm:rounded-[30px]">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        {children}
      </div>
      <BottomNavigation active={active} navigate={navigate} />
    </main>
  );
}
