"use client";

type TagBadgeProps = {
  tag: string;
  onClick?: (tag: string) => void;
  isActive?: boolean;
  size?: "sm" | "md";
};

export default function TagBadge({
  tag,
  onClick,
  isActive = false,
  size = "sm",
}: TagBadgeProps) {
  const baseClasses = "font-medium rounded transition-colors";
  const sizeClasses = size === "sm"
    ? "text-[9px] px-1.5 py-0.5"
    : "text-[10px] px-2 py-1";
  const stateClasses = isActive
    ? "bg-secondary text-white"
    : "bg-parchment text-slate/60 hover:bg-secondary/10 hover:text-secondary";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={() => onClick(tag)}
        className={`${baseClasses} ${sizeClasses} ${stateClasses} ${clickableClasses}`}
      >
        #{tag}
      </button>
    );
  }

  return (
    <span className={`${baseClasses} ${sizeClasses} ${stateClasses}`}>
      #{tag}
    </span>
  );
}
