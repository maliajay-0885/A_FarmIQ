import Icon from "./Icon";

/**
 * Round microphone button used in the chat input bar.
 */
export default function MicrophoneButton({ onClick }) {
  return (
    <button
      aria-label="Use microphone"
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E9F3EC] text-[#216B45] transition active:scale-95"
      onClick={onClick}
    >
      <Icon name="mic" size={20} />
    </button>
  );
}
