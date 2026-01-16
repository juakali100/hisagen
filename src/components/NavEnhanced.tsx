"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const navigation = {
  organization: [
    {
      name: "Who We Are",
      href: "/organization",
      description: "Founding mission, team, and strategic DNA",
      icon: "/icons/icon-farmer.png",
    },
    {
      name: "What We Do",
      href: "/strategy",
      description: "Theory of Change and vertical integration",
      icon: "/icons/icon-seedling.png",
    },
  ],
  programs: [
    {
      name: "Agri-Carbon Program",
      href: "/program",
      description: "Operating model and revenue wheel",
      icon: "/icons/icon-circular-arrows.png",
    },
    {
      name: "Uganda Pilot",
      href: "/project/hisagen-uganda",
      description: "Flagship implementation project",
      icon: "/icons/icon-globe-seedling.png",
    },
  ],
  capitalStages: [
    {
      name: "Stage 1: Incubation",
      href: "/stage-1",
      description: "Years 1-3 • Grants & Concessions",
      icon: "/icons/icon-deedling-circular.png",
      status: "active",
    },
    {
      name: "Stage 2: Implementation",
      href: "/stage-2",
      description: "Years 4-8 • Blended Finance",
      icon: "/icons/icon-roots.png",
    },
    {
      name: "Stage 3: Stabilization",
      href: "/stage-3",
      description: "Years 9-15 • Impact & Equity",
      icon: "/icons/icon-leaf.png",
    },
    {
      name: "Stage 4: Maturity",
      href: "/stage-4",
      description: "Years 16+ • Bonds & Equity",
      icon: "/icons/icon-certificate.png",
    },
  ],
  partners: [
    {
      name: "Deep Six Consulting",
      href: "/ecosystem/deep-six",
      description: "Originator • Community engagement",
      icon: "/icons/icon-handshake.png",
    },
    {
      name: "Locus AG",
      href: "/ecosystem/locus-ag",
      description: "Technology • Microbial products",
      icon: "/icons/icon-micro.png",
    },
    {
      name: "3Degrees",
      href: "/ecosystem/3-degrees",
      description: "Certification • Carbon verification",
      icon: "/icons/icon-certificate.png",
    },
    {
      name: "CZMP",
      href: "/ecosystem/czmp",
      description: "Monetization • Market access",
      icon: "/icons/icon-graph.png",
    },
    {
      name: "Pandion Studio",
      href: "/ecosystem/pandion",
      description: "Systems Architecture • Digital twin",
      icon: "/icons/icon-vault.png",
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

export default function NavEnhanced() {
  const pathname = usePathname();

  return (
    <header className="mx-auto mb-10 border-b border-mist pb-4">
      <div className="flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-lg font-bold text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-md"
          >
            HISAGEN
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="h-4 w-px bg-mist"></span>
            <span className="rounded-full border border-mist bg-parchment/50 px-3 py-0.5 text-[10px] font-bold text-slate">
              Founding Portal
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {/* Organization Flyout */}
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-slate hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md px-1.5 py-1">
              Organization
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-0 right-0 top-full z-50 mt-3 w-full origin-top rounded-xl border border-mist bg-white shadow-xl transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="p-4">
                <div className="space-y-1">
                  {navigation.organization.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex gap-x-4 rounded-lg p-3 text-sm hover:bg-parchment/40 transition-colors group"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="flex-none w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-secondary group-hover:text-primary transition-colors">{item.name}</p>
                        <p className="mt-1 text-xs text-slate">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Programs Flyout */}
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-slate hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md px-1.5 py-1">
              Programs
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-0 right-0 top-full z-50 mt-3 w-full origin-top rounded-xl border border-mist bg-white shadow-xl transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Programs List */}
                  <div>
                    <h3 className="text-sm font-bold text-secondary/60 uppercase tracking-wider mb-4">Programs & Projects</h3>
                    <div className="space-y-1">
                      {navigation.programs.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex gap-x-3 rounded-lg p-3 text-sm hover:bg-parchment/40 transition-colors group"
                        >
                          <Image
                            src={item.icon}
                            alt=""
                            width={24}
                            height={24}
                            className="flex-none w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                          <div>
                            <p className="font-bold text-secondary group-hover:text-primary transition-colors">{item.name}</p>
                            <p className="mt-1 text-xs text-slate">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Capital Continuum */}
                  <div>
                    <h3 className="text-sm font-bold text-secondary/60 uppercase tracking-wider mb-4">Capital Continuum</h3>
                    <div className="space-y-1">
                      {navigation.capitalStages.map((stage) => (
                        <Link
                          key={stage.name}
                          href={stage.href}
                          className="flex gap-x-3 rounded-lg p-3 text-sm hover:bg-parchment/40 transition-colors group relative"
                        >
                          {stage.status === "active" && (
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                          )}
                          <Image
                            src={stage.icon}
                            alt=""
                            width={24}
                            height={24}
                            className="flex-none w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                          <div>
                            <p className="font-bold text-secondary group-hover:text-primary transition-colors">{stage.name}</p>
                            <p className="mt-1 text-xs text-slate">{stage.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Partners Flyout */}
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-slate hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md px-1.5 py-1">
              Partners
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-0 right-0 top-full z-50 mt-3 w-full origin-top rounded-xl border border-mist bg-white shadow-xl transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Partner List */}
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-secondary/60 uppercase tracking-wider mb-4">Core Ecosystem</h3>
                    <div className="space-y-1">
                      {navigation.partners.map((partner) => (
                        <Link
                          key={partner.name}
                          href={partner.href}
                          className="flex gap-x-3 rounded-lg p-3 text-sm hover:bg-parchment/40 transition-colors group"
                        >
                          <Image
                            src={partner.icon}
                            alt=""
                            width={24}
                            height={24}
                            className="flex-none w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                          <div>
                            <p className="font-bold text-secondary group-hover:text-primary transition-colors">{partner.name}</p>
                            <p className="mt-1 text-xs text-slate">{partner.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Recent Updates */}
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-secondary/60 uppercase tracking-wider mb-4">Recent Updates</h3>
                    <div className="space-y-4">
                      {recentUpdates.map((update) => (
                        <Link
                          key={update.title}
                          href={update.href}
                          className="flex gap-x-4 rounded-lg hover:bg-parchment/20 transition-colors group"
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
                            <p className="text-xs font-bold text-secondary group-hover:text-primary transition-colors">{update.title}</p>
                            <p className="mt-1 text-[10px] text-slate/60">{update.date}</p>
                            <p className="mt-1 text-xs text-slate leading-snug">{update.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Evidence Vault (simple link) */}
          <Link
            href="/resources"
            className={[
              "text-sm font-semibold transition-colors rounded-md px-1.5 py-1",
              pathname === "/resources" ? "text-secondary" : "text-slate hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            ].join(" ")}
          >
            Evidence Vault
          </Link>
        </nav>
      </div>
    </header>
  );
}
