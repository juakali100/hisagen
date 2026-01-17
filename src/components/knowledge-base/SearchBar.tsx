"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search knowledge base...",
  className = "",
}: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <MagnifyingGlassIcon className="size-5 text-secondary/40" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-xl border border-mist bg-white py-3 pl-11 pr-10 text-sm text-secondary placeholder:text-slate/40 focus:border-secondary/40 focus:outline-none focus:ring-1 focus:ring-secondary/20 transition-colors"
        placeholder={placeholder}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate/40 hover:text-secondary transition-colors"
        >
          <XMarkIcon className="size-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
