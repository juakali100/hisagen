"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";
import Image from "next/image";

// =============================================================================
// BREADCRUMB MAPPING - Route to Display Names
// =============================================================================

const routeLabels: Record<string, string> = {
  "organization": "Who We Are",
  "strategy": "Strategy & Governance",
  "sustainability-framework": "Sustainability Framework",
  "program": "Program",
  "project": "Projects",
  "hisagen-uganda": "Uganda Pilot",
  "rwanda": "Rwanda",
  "kenya": "Kenya",
  "stage-1": "Stage 1: Incubation",
  "stage-2": "Stage 2: Implementation",
  "stage-3": "Stage 3: Stabilization",
  "stage-4": "Stage 4: Maturity",
  "funding": "Funding",
  "funder-landscape": "Funder Landscape",
  "opportunities": "Opportunities",
  "v0-grant-proposal": "Grant Proposal",
  "grant-progress": "Grant Progress",
  "projects": "Projects",
  "capital-continuum": "Capital Continuum",
  "grant-lifecycle": "Grant Lifecycle",
  "knowledge-base": "Knowledge Base",
  "evidence": "Evidence Vault",
  "ecosystem": "Ecosystem",
  "locus-ag": "Locus AG",
  "comms": "Communications",
  "brand": "Brand Identity",
  "logo": "Logo Concepts",
  "assets": "Asset Library",
  "website": "Website & Digital",
  "content": "Content & Messaging",
  "social": "Social Media",
  "pr": "PR & Media",
  "collateral": "Marketing Collateral",
  "investor": "Investor Comms",
  "internal": "Internal Comms",
  "frameworks": "Frameworks",
  "base-proposal": "Base Proposal",
  "start-here": "Start Here",
};

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
  { name: "Evidence Vault", href: "/knowledge-base/evidence", icon: "/icons/icon-leaf-check.png" },
  { name: "Ecosystem Partners", href: "/ecosystem", icon: "/icons/icon-deedling-circular.png" },
];

// Communications & Brand - 8 Functions
const commsFunctions = [
  { name: "Communications Hub", href: "/comms", icon: "/icons/icon-handshake.png", isParent: true },
  { name: "01 Brand Identity", href: "/brand", icon: "/icons/icon-shield.png" },
  { name: "02 Website & Digital", href: "/comms/website", icon: "/icons/icon-globe-seedling.png" },
  { name: "03 Content & Messaging", href: "/comms/content", icon: "/icons/icon-certificate.png" },
  { name: "04 Social Media", href: "/comms/social", icon: "/icons/icon-circular-arrows.png" },
  { name: "05 PR & Media", href: "/comms/pr", icon: "/icons/icon-graph.png" },
  { name: "06 Marketing Collateral", href: "/comms/collateral", icon: "/icons/icon-vault.png" },
  { name: "07 Investor Comms", href: "/comms/investor", icon: "/icons/icon-hand-money.png" },
  { name: "08 Internal Comms", href: "/comms/internal", icon: "/icons/icon-farmer.png" },
];

const commsQuickLinks = [
  { name: "Asset Library", href: "/assets", icon: "/icons/icon-leaf-check.png" },
  { name: "Logo Concepts", href: "/logo", icon: "/icons/icon-seedling.png" },
];

// =============================================================================
// NAVIGATION COMPONENT
// =============================================================================

// Reusable nav link with icon
function NavLink({ item, nested = false }: { item: { name: string; href: string; icon: string; status?: string; isParent?: boolean }; nested?: boolean }) {
  const isHubLink = item.status === "hub"; // Links back to hub (no dedicated page yet)

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 py-1.5 text-sm font-medium transition-colors group ${
        item.isParent
          ? "text-primary font-semibold"
          : isHubLink
          ? "text-slate/60 hover:text-slate"
          : nested
          ? "text-secondary/80 hover:text-primary pl-2"
          : "text-secondary hover:text-primary"
      }`}
    >
      <Image
        src={item.icon}
        alt=""
        width={nested ? 16 : 20}
        height={nested ? 16 : 20}
        className={`transition-opacity ${isHubLink ? "opacity-40" : "opacity-70 group-hover:opacity-100"}`}
      />
      <span>{item.name}</span>
      {item.status === "active" && (
        <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase tracking-wider">
          Active
        </span>
      )}
      {item.status === "planned" && (
        <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-bold uppercase tracking-wider">
          Planned
        </span>
      )}
      {item.status === "hub" && (
        <span className="text-[8px] px-1 py-0.5 rounded bg-slate-100 text-slate-400 font-medium">
          →Hub
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
              className="absolute inset-x-0 top-full z-10 bg-mist transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-mist shadow-lg ring-1 ring-black/5" />
              <div className="relative bg-mist border-t border-secondary/20">
                {children}
              </div>
            </PopoverPanel>
          )}
        </>
      )}
    </Popover>
  );
}

// =============================================================================
// BREADCRUMB COMPONENT
// =============================================================================

function Breadcrumb() {
  const pathname = usePathname();

  // Don't show breadcrumb on home page
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb items
  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = routeLabels[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const isLast = index === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="flex items-center gap-1.5 py-2 text-[11px]">
        <Link
          href="/"
          className="text-slate/60 hover:text-primary transition-colors font-medium"
        >
          Home
        </Link>
        {items.map((item) => (
          <span key={item.href} className="flex items-center gap-1.5">
            <ChevronRightIcon className="h-3 w-3 text-slate/30" />
            {item.isLast ? (
              <span className="text-secondary font-semibold">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-slate/60 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
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

        {/* Navigation - Section flyouts */}
        <div className="hidden md:flex flex-wrap items-center gap-x-1">
          {/* Strategy Flyout */}
          <HoverPopover buttonLabel="Strategy">
            <div className="mx-auto max-w-xl px-6 py-6">
              <div className="space-y-1">
                {strategyGovernance.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </div>
            </div>
          </HoverPopover>

          {/* Program Flyout */}
          <HoverPopover buttonLabel="Program">
            <div className="mx-auto max-w-xl px-6 py-6">
              <div className="space-y-1">
                {program.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </div>
            </div>
          </HoverPopover>

          {/* Communications Flyout */}
          <HoverPopover buttonLabel="Comms">
            <div className="mx-auto max-w-2xl px-6 py-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <NavLink item={commsFunctions[0]} />
                  <div className="border-l-2 border-mist ml-2 pl-1 mt-2 space-y-0.5">
                    {commsFunctions.slice(1).map((item) => (
                      <NavLink key={item.name} item={item} nested />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/50 mb-3">Quick Links</p>
                  {commsQuickLinks.map((item) => (
                    <NavLink key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </HoverPopover>

          {/* Frameworks Flyout */}
          <HoverPopover buttonLabel="Frameworks">
            <div className="mx-auto max-w-xl px-6 py-6">
              <div className="space-y-1">
                {frameworks.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </div>
            </div>
          </HoverPopover>

          {/* Knowledge Flyout */}
          <HoverPopover buttonLabel="Knowledge">
            <div className="mx-auto max-w-xl px-6 py-6">
              <div className="space-y-1">
                {knowledge.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </div>
            </div>
          </HoverPopover>
        </div>
      </nav>
      {/* Breadcrumb Bar */}
      <div className="bg-parchment border-b border-mist">
        <Breadcrumb />
      </div>
    </header>
  );
}
