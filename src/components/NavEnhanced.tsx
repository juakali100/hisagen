"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState, useRef } from "react";

const navigation = {
  about: [
    {
      name: "Our Mission",
      href: "/strategy",
      description: "Vision, Theory of Change, and strategic positioning",
    },
    {
      name: "The Team",
      href: "/organization",
      description: "Founding partners and ecosystem",
    },
  ],
  programs: [
    {
      name: "Agri-Carbon Program",
      href: "/program",
      description: "Operating model and revenue wheel",
    },
    {
      name: "Uganda Pilot",
      href: "/project/hisagen-uganda",
      description: "Flagship implementation project",
    },
  ],
  capitalStages: [
    {
      name: "Stage 1: Incubation",
      href: "/stage-1",
      description: "Years 1-3 • Grants & Concessions",
      status: "active",
    },
    {
      name: "Stage 2: Implementation",
      href: "/stage-2",
      description: "Years 4-8 • Blended Finance",
    },
    {
      name: "Stage 3: Stabilization",
      href: "/stage-3",
      description: "Years 9-15 • Impact & Equity",
    },
    {
      name: "Stage 4: Maturity",
      href: "/stage-4",
      description: "Years 16+ • Bonds & Equity",
    },
  ],
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
      name: "CZMP",
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

const recentUpdates = [
  {
    title: "V0 Grant Proposals Published",
    href: "/stage-1/funding",
    date: "Jan 15, 2026",
    description: "Concept note and full proposal now available for funder review.",
    imageUrl: "/images/features/uganda-smallhold-farner-soil-samples-field-plan.jpeg",
  },
  {
    title: "Partner Ecosystem Complete",
    href: "/program",
    date: "Jan 14, 2026",
    description: "All 5 core partners documented with detailed dossiers.",
    imageUrl: "/images/features/healthy-roots-soil-sample.jpeg",
  },
];

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
    }, 150); // Small delay to allow moving to panel
  };

  return (
    <Popover>
      {() => (
        <>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-white/90 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md px-1.5 py-1">
              {buttonLabel}
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
          <HoverPopover buttonLabel="About">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="flex gap-x-8">
                {navigation.about.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-lg p-3 text-sm hover:bg-white/10 transition-all group"
                  >
                    <p className="font-bold text-white group-hover:text-accent transition-colors">{item.name}</p>
                    <p className="mt-1 text-xs text-white/60 group-hover:text-accent/80 transition-colors">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </HoverPopover>

          {/* Programs Flyout */}
          <HoverPopover buttonLabel="Programs">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="grid grid-cols-2 gap-x-12">
                {/* Programs List */}
                <div>
                  <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">Programs & Projects</h3>
                  <div className="space-y-1">
                    {navigation.programs.map((item) => (
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

                {/* Capital Continuum */}
                <div>
                  <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">Capital Continuum</h3>
                  <div className="space-y-1">
                    {navigation.capitalStages.map((stage) => (
                      <Link
                        key={stage.name}
                        href={stage.href}
                        className="block rounded-lg p-3 text-sm hover:bg-white/10 transition-all group relative"
                      >
                        {stage.status === "active" && (
                          <div className="absolute left-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent animate-pulse"></div>
                        )}
                        <p className={`font-bold text-white group-hover:text-accent transition-colors ${stage.status === "active" ? "pl-4" : ""}`}>{stage.name}</p>
                        <p className={`mt-1 text-xs text-white/60 group-hover:text-accent/80 transition-colors ${stage.status === "active" ? "pl-4" : ""}`}>{stage.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </HoverPopover>

          {/* Partners Flyout */}
          <HoverPopover buttonLabel="Partners">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="grid grid-cols-2 gap-x-12">
                {/* Partner List */}
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

                {/* Recent Updates */}
                <div>
                  <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">Recent Updates</h3>
                  <div className="space-y-4">
                    {recentUpdates.map((update) => (
                      <Link
                        key={update.title}
                        href={update.href}
                        className="flex gap-x-4 rounded-lg hover:bg-white/10 transition-all group p-2"
                      >
                        <div className="relative flex-none w-20 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={update.imageUrl}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-white group-hover:text-accent transition-colors">{update.title}</p>
                          <p className="mt-1 text-[10px] text-white/50 group-hover:text-accent/60 transition-colors">{update.date}</p>
                          <p className="mt-1 text-xs text-white/60 group-hover:text-accent/80 transition-colors leading-snug">{update.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </HoverPopover>

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
