export function HeaderBadge({ icon, text, percentage }) {
  return (
    <div
      className={`flex flex-col absolute ${
        text === "SAD" && "-translate-x-1"
      } `}
    >
      <div className="flex items-center gap-[2px]">
        <span className="text-[10px]">{icon}</span>
        <p className="uppercase text-white font-[600] text-[10px]">{text}</p>
      </div>
    </div>
  );
}
