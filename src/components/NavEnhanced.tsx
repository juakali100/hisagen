"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";
import Image from "next/image";

// =============================================================================
// NAVIGATION DATA - Aligned with Home Page Structure
// =============================================================================

const strategyGovernance = [
  { name: "Strategy & Governance", href: "/strategy", icon: "/icons/icon-shield.png" },
  { name: "Team & Organization", href: "/organization", icon: "/icons/icon-handshake.png" },
];

const program = [
  { name: "Program Overview", href: "/program", icon: "/icons/icon-globe-seedling.png" },
  { name: "Uganda Pilot", href: "/project/hisagen-uganda", icon: "/icons/icon-farmer.png", status: "active" },
  { name: "Rwanda", href: "/project/rwanda", icon: "/icons/icon-seedling.png", status: "planned" },
  { name: "Kenya", href: "/project/kenya", icon: "/icons/icon-leaf.png", status: "planned" },
];

const frameworks = [
  { name: "Capital Continuum", href: "/capital-continuum", icon: "/icons/icon-circular-arrows.png" },
  { name: "Sustainability Framework", href: "/strategy/sustainability-framework", icon: "/icons/icon-green-hands.png" },
  { name: "Grant Lifecycle", href: "/grant-lifecycle", icon: "/icons/icon-graph.png" },
  { name: "Base Proposal Template", href: "/frameworks/base-proposal", icon: "/icons/icon-certificate.png" },
];

const knowledge = [
  { name: "Knowledge Base", href: "/knowledge-base", icon: "/icons/icon-vault.png" },
  { name: "Evidence Vault", href: "/evidence", icon: "/icons/icon-leaf-check.png" },
  { name: "Ecosystem Partners", href: "/ecosystem", icon: "/icons/icon-deedling-circular.png" },
];

// =============================================================================
// NAVIGATION COMPONENT
// =============================================================================

// Reusable nav link with icon
function NavLink({ item }: { item: { name: string; href: string; icon: string; status?: string } }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 py-2 text-sm font-semibold text-white hover:text-accent transition-colors group"
    >
      <Image
        src={item.icon}
        alt=""
        width={20}
        height={20}
        className="opacity-60 group-hover:opacity-100 transition-opacity"
      />
      <span>{item.name}</span>
      {item.status === "active" && (
        <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider">
          Active
        </span>
      )}
      {item.status === "planned" && (
        <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-white/40 font-bold uppercase tracking-wider">
          Planned
        </span>
      )}
    </Link>
  );
}

// Hover-enabled Popover wrapper
function HoverPopover({
  buttonLabel,
  children,
}: {
  buttonLabel: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <Popover>
      {() => (
        <>
          <div
            className="flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <PopoverButton
              className="inline-flex items-center gap-x-1 text-sm font-semibold text-white/90 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md px-2 py-1"
            >
              {buttonLabel}
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>
          </div>

          {isOpen && (
            <PopoverPanel
              static
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute inset-x-0 top-full z-10 bg-secondary transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-secondary shadow-lg ring-1 ring-black/10" />
              <div className="relative bg-secondary">
                {children}
              </div>
            </PopoverPanel>
          )}
        </>
      )}
    </Popover>
  );
}

export default function NavEnhanced() {
  return (
    <header className="relative z-50 mx-auto mb-10 bg-secondary">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 py-3 px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-lg font-bold text-white hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-md"
          >
            HISAGEN
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="h-4 w-px bg-white/30"></span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-0.5 text-[10px] font-bold text-white/80">
              Program Hub
            </span>
          </div>
        </div>

        {/* Navigation - Single Mega Menu */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {/* Direct links for primary pages */}
          <Link
            href="/strategy"
            className="text-sm font-semibold text-white/90 hover:text-accent transition-colors px-2 py-1"
          >
            Strategy
          </Link>
          <Link
            href="/program"
            className="text-sm font-semibold text-white/90 hover:text-accent transition-colors px-2 py-1"
          >
            Program
          </Link>

          {/* Menu Flyout - Full Navigation */}
          <HoverPopover buttonLabel="Menu">
            <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
                {/* Strategy & Governance */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                    Strategy & Governance
                  </h3>
                  <div className="space-y-1">
                    {strategyGovernance.map((item) => (
                      <NavLink key={item.name} item={item} />
                    ))}
                  </div>
                </div>

                {/* Agri-Carbon Program */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                    Agri-Carbon Program
                  </h3>
                  <div className="space-y-1">
                    {program.map((item) => (
                      <NavLink key={item.name} item={item} />
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                    Frameworks
                  </h3>
                  <div className="space-y-1">
                    {frameworks.map((item) => (
                      <NavLink key={item.name} item={item} />
                    ))}
                  </div>
                </div>

                {/* Knowledge */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                    Knowledge
                  </h3>
                  <div className="space-y-1">
                    {knowledge.map((item) => (
                      <NavLink key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </HoverPopover>
        </div>
      </nav>
    </header>
  );
}
