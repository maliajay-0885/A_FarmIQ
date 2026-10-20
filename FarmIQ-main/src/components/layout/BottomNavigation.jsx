import Icon from "@/components/common/Icon";
import { navItems } from "@/data/modules";

/**
 * Sticky bottom navigation bar for the mobile shell.
 *
 * @param {object}   props
 * @param {string}   props.active    - Currently active screen key.
 * @param {Function} props.navigate  - Called with the new screen key.
 */
export default function BottomNavigation({ active, navigate }) {
  return (
    <nav className="sticky bottom-0 z-20 mt-auto grid h-[76px] grid-cols-4 border-t border-[#E6EBE7] bg-white/95 px-2 pb-2 backdrop-blur">
      {navItems.map((item) => {
        const selected = active === item.key;
        return (
          <button
            key={item.key}
            className={`flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition ${
              selected ? "text-[#216B45]" : "text-[#85948C]"
            }`}
            onClick={() => navigate(item.key)}
          >
            <span
              className={`grid h-8 w-12 place-items-center rounded-full ${
                selected ? "bg-[#E6F2E9]" : ""
              }`}
            >
              <Icon name={item.icon} size={20} />
            </span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
