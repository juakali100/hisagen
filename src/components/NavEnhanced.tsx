"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import {
  communications,
  research,
  evidence,
  milestones,
  ecosystem,
  getRecentEntries,
} from "../data";

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

// Project data for Program flyout
const projects = [
  {
    name: "Uganda Pilot",
    href: "/project/hisagen-uganda",
    description: "Flagship implementation • 10,000 smallholders",
  },
];

// Funding data for Program flyout
const funding = [
  {
    name: "Funding Roadmap",
    href: "/funding-roadmap",
    description: "Capital strategy hub",
  },
  {
    name: "Capital Continuum",
    href: "/funding-roadmap/capital-continuum",
    description: "4-stage project lifecycle",
  },
  {
    name: "Grant Lifecycle",
    href: "/funding-roadmap/grant-lifecycle",
    description: "11-phase delivery methodology",
  },
  {
    name: "Stage 1: Grants",
    href: "/stage-1/funding",
    description: "Grants & philanthropy (50%)",
  },
  {
    name: "Stage 2: Carbon Finance",
    href: "/stage-2/funding",
    description: "Pre-purchase & impact (65%)",
  },
  {
    name: "Stage 3: Commercial",
    href: "/stage-3/funding",
    description: "Working capital & debt (70%)",
  },
  {
    name: "Stage 4: Institutional",
    href: "/stage-4/funding",
    description: "Green bonds & SPV (95%)",
  },
];

// Featured content for Program flyout
const programFeatured = [
  {
    id: 1,
    title: "Field Planning & MRV",
    href: "/project/hisagen-uganda",
    date: "Implementation",
    category: "Operations",
    imageUrl: "/images/features/uganda-smallhold-farner-soil-samples-field-plan.jpeg",
    description: "Systematic field planning and measurement, reporting, verification protocols.",
  },
  {
    id: 2,
    title: "Soil Health Analysis",
    href: "/evidence",
    date: "Science",
    category: "Research",
    imageUrl: "/images/features/healthy-roots-soil-sample.jpeg",
    description: "Root development and soil carbon sequestration measurement.",
  },
];

// Featured content for About flyout
const aboutFeatured = [
  {
    id: 1,
    title: "Uganda Pilot Launch",
    href: "/project/hisagen-uganda",
    date: "Jan 2026",
    category: "Project",
    imageUrl: "/images/heroes/uganda-smallhold-farmer-mrv.jpeg",
    description: "Flagship implementation bringing regenerative agriculture to smallholder farmers.",
  },
  {
    id: 2,
    title: "Soil Carbon Science",
    href: "/evidence",
    date: "Research",
    category: "Evidence",
    imageUrl: "/images/features/healthy-roots-soil-sample.jpeg",
    description: "The science behind soil carbon sequestration and measurement.",
  },
];

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
          {/* About Flyout - Full Width Two Columns */}
          <HoverPopover buttonLabel="About" buttonHref="/strategy">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
              {/* Left: Navigation Links (2 columns) */}
              <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                {/* The Team */}
                <div>
                  <h3 className="text-sm font-medium text-white/50">The Team</h3>
                  <div className="mt-6 flow-root">
                    <div className="-my-2">
                      {navigation.about.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex py-2 text-sm font-semibold text-white hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Core Ecosystem */}
                <div>
                  <h3 className="text-sm font-medium text-white/50">Core Ecosystem</h3>
                  <div className="mt-6 flow-root">
                    <div className="-my-2">
                      {navigation.partners.map((partner) => (
                        <Link
                          key={partner.name}
                          href={partner.href}
                          className="flex py-2 text-sm font-semibold text-white hover:text-accent transition-colors"
                        >
                          {partner.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Featured Content (2 cards) */}
              <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
                <h3 className="sr-only">Featured</h3>
                {aboutFeatured.map((item) => (
                  <article
                    key={item.id}
                    className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                  >
                    <div className="relative flex-none">
                      <Image
                        alt=""
                        src={item.imageUrl}
                        width={400}
                        height={200}
                        className="aspect-[2/1] w-full rounded-lg bg-white/5 object-cover sm:aspect-video sm:h-32 lg:h-auto"
                      />
                      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 ring-inset" />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4">
                        <span className="text-sm text-white/50">{item.date}</span>
                        <span className="relative z-10 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70">
                          {item.category}
                        </span>
                      </div>
                      <Link href={item.href} className="mt-2 block group">
                        <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-white/60 line-clamp-2">{item.description}</p>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </HoverPopover>

          {/* Agri-Carbon Program Flyout - Full Width Two Columns */}
          <HoverPopover buttonLabel="Agri-Carbon Program" buttonHref="/program">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
              {/* Left: Projects & Funding (2 columns) */}
              <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                {/* Projects */}
                <div>
                  <h3 className="text-sm font-medium text-white/50">Projects</h3>
                  <div className="mt-6 flow-root">
                    <div className="-my-2">
                      {projects.map((project) => (
                        <Link
                          key={project.name}
                          href={project.href}
                          className="block py-3 group"
                        >
                          <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                            {project.name}
                          </p>
                          <p className="mt-1 text-xs text-white/60 group-hover:text-accent/80 transition-colors">
                            {project.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Funding */}
                <div>
                  <h3 className="text-sm font-medium text-white/50">Funding</h3>
                  <div className="mt-6 flow-root">
                    <div className="-my-2">
                      {funding.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-3 group"
                        >
                          <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs text-white/60 group-hover:text-accent/80 transition-colors">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Featured Content (2 cards) */}
              <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
                <h3 className="sr-only">Featured</h3>
                {programFeatured.map((item) => (
                  <article
                    key={item.id}
                    className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                  >
                    <div className="relative flex-none">
                      <Image
                        alt=""
                        src={item.imageUrl}
                        width={400}
                        height={200}
                        className="aspect-[2/1] w-full rounded-lg bg-white/5 object-cover sm:aspect-video sm:h-32 lg:h-auto"
                      />
                      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 ring-inset" />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4">
                        <span className="text-sm text-white/50">{item.date}</span>
                        <span className="relative z-10 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70">
                          {item.category}
                        </span>
                      </div>
                      <Link href={item.href} className="mt-2 block group">
                        <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-white/60 line-clamp-2">{item.description}</p>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </HoverPopover>

          {/* Knowledge Base Flyout */}
          <HoverPopover buttonLabel="Knowledge Base" buttonHref="/knowledge-base">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left: Sections with counts */}
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-medium text-white/50 flex items-center gap-2">
                    <BookOpenIcon className="size-4" />
                    Browse Sections
                  </h3>
                  <div className="mt-4 space-y-1">
                    {[
                      { name: "Communications", href: "/knowledge-base/communications", count: communications.length },
                      { name: "Research", href: "/knowledge-base/research", count: research.length },
                      { name: "Evidence", href: "/knowledge-base/evidence", count: evidence.length },
                      { name: "Milestones", href: "/knowledge-base/milestones", count: milestones.length },
                      { name: "Ecosystem", href: "/ecosystem", count: ecosystem.length },
                    ].map((section) => (
                      <Link
                        key={section.name}
                        href={section.href}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-white hover:text-accent hover:bg-white/5 transition-colors group"
                      >
                        <span>{section.name}</span>
                        <span className="text-xs text-white/40 group-hover:text-accent/70 transition-colors">
                          {section.count}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Quick search link */}
                  <Link
                    href="/knowledge-base"
                    className="mt-6 flex items-center gap-2 text-xs text-white/50 hover:text-accent transition-colors"
                  >
                    <MagnifyingGlassIcon className="size-4" />
                    Search all entries →
                  </Link>
                </div>

                {/* Right: Recent Entries */}
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-medium text-white/50 mb-4">Recent Activity</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {getRecentEntries(4).map((entry) => (
                      <article
                        key={entry.id}
                        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                            {entry.type}
                          </span>
                          <span className="text-[10px] text-white/30">{entry.date}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                          {entry.title}
                        </h4>
                        <p className="mt-1 text-xs text-white/50 line-clamp-2">
                          {entry.summary}
                        </p>
                      </article>
                    ))}
                  </div>

                  {/* View all link */}
                  <Link
                    href="/knowledge-base"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    View all entries →
                  </Link>
                </div>
              </div>
            </div>
          </HoverPopover>
        </div>
      </nav>
    </header>
  );
}
