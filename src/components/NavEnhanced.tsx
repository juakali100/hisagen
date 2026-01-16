"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";

const navigation = {
  about: [
    {
      name: "The Team",
      href: "/organization",
      description: "Founding partners and ecosystem",
    },
  ],
  // Reserved for future flyout content (project updates, callouts, etc.)
  // projects: [...],
  // capitalStages: [...],
  partners: [
    {
      name: "Deep Six Consulting",
      href: "/ecosystem/deep-six",
      description: "Originator • Community engagement",
    },
    {
      name: "Locus AG",
      href: "/ecosystem/locus-ag",
      description: "Technology • Microbial products",
    },
    {
      name: "3Degrees",
      href: "/ecosystem/3-degrees",
      description: "Certification • Carbon verification",
    },
    {
      name: "Carbon Neutral Marketplace",
      href: "/ecosystem/czmp",
      description: "Monetization • Market access",
    },
    {
      name: "Pandion Studio",
      href: "/ecosystem/pandion",
      description: "Systems Architecture • Digital twin",
    },
  ],
};

// Reserved for future flyout enhancements (images, callouts, updates)
// const recentUpdates = [...];

// Hover-enabled Popover wrapper with optional clickable label
function HoverPopover({
  buttonLabel,
  buttonHref,
  children,
}: {
  buttonLabel: string;
  buttonHref?: string;
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
    }, 150); // Small delay to allow moving to panel
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
            {buttonHref ? (
              <Link
                href={buttonHref}
                className="text-sm font-semibold text-white/90 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md px-1.5 py-1"
              >
                {buttonLabel}
              </Link>
            ) : (
              <span className="text-sm font-semibold text-white/90 px-1.5 py-1">
                {buttonLabel}
              </span>
            )}
            <PopoverButton
              aria-label={`Open ${buttonLabel} menu`}
              className="inline-flex items-center text-white/70 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md p-1"
            >
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>
          </div>

          {isOpen && (
            <PopoverPanel
              static
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute inset-x-0 top-full z-10 bg-secondary pt-4 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
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
  const pathname = usePathname();

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
              Founding Portal
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {/* About Flyout */}
          <HoverPopover buttonLabel="About" buttonHref="/strategy">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="grid grid-cols-2 gap-x-12">
                {/* The Team */}
                <div>
                  <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">The Team</h3>
                  <div className="space-y-1">
                    {navigation.about.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg p-3 text-sm hover:bg-white/10 transition-all group"
                      >
                        <p className="font-bold text-white group-hover:text-accent transition-colors">{item.name}</p>
                        <p className="mt-1 text-xs text-white/60 group-hover:text-accent/80 transition-colors">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Core Ecosystem */}
                <div>
                  <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">Core Ecosystem</h3>
                  <div className="space-y-1">
                    {navigation.partners.map((partner) => (
                      <Link
                        key={partner.name}
                        href={partner.href}
                        className="block rounded-lg p-3 text-sm hover:bg-white/10 transition-all group"
                      >
                        <p className="font-bold text-white group-hover:text-accent transition-colors">{partner.name}</p>
                        <p className="mt-1 text-xs text-white/60 group-hover:text-accent/80 transition-colors">{partner.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </HoverPopover>

          {/* Agri-Carbon Program (simple link for now - flyout can be added for updates/callouts) */}
          <Link
            href="/program"
            className={[
              "text-sm font-semibold transition-colors rounded-md px-1.5 py-1",
              pathname === "/program" ? "text-accent" : "text-white/90 hover:text-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
            ].join(" ")}
          >
            Agri-Carbon Program
          </Link>

          {/* Evidence Vault (simple link) */}
          <Link
            href="/resources"
            className={[
              "text-sm font-semibold transition-colors rounded-md px-1.5 py-1",
              pathname === "/resources" ? "text-accent" : "text-white/90 hover:text-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
            ].join(" ")}
          >
            Evidence Vault
          </Link>
        </div>
      </nav>
    </header>
  );
}
