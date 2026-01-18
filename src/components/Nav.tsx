"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useEffect } from "react";

type SubItem = {
  href: string;
  label: string;
};

type DropdownItem = {
  label: string;
  href: string;
  subItems: SubItem[];
};

type NavItem =
  | { href: string; label: string; dropdown?: never }
  | { label: string; href: string; dropdown: DropdownItem[] };

const navItems: NavItem[] = [
  { href: "/organization", label: "Who We Are" },
  { href: "/strategy", label: "What We Do" },
  {
    label: "Programs",
    href: "/program",
    dropdown: [
      {
        label: "Uganda Pilot",
        href: "/project/hisagen-uganda",
        subItems: [
          { href: "/stage-1", label: "Stage 1: Incubation" },
          { href: "/stage-2", label: "Stage 2: Implementation" },
          { href: "/stage-3", label: "Stage 3: Stabilization" },
          { href: "/stage-4", label: "Stage 4: Maturity" },
          { href: "/evidence", label: "Evidence Review" },
        ],
      },
      {
        label: "Funding",
        href: "/stage-1/funding",
        subItems: [
          { href: "/stage-1/funding", label: "Stage 1 Funding" },
          { href: "/capital-continuum", label: "Capital Continuum" },
          { href: "/stage-1/funding/v0-grant-proposal", label: "Grant Proposal" },
        ],
      },
    ],
  },
  { href: "/knowledge-base", label: "Knowledge Base" },
];

export default function Nav() {
  const pathname = usePathname();

  useEffect(() => {
    // no-op; placeholder to keep structure consistent if we later add pathname-based side effects
  }, [pathname]);

  return (
    <header className="mx-auto mb-10 border-b border-mist pb-4">
      <div className="flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-lg font-bold text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment rounded-md"
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

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navItems.map((item) => {
            if ("dropdown" in item) {
              const isActive =
                pathname === item.href ||
                pathname.startsWith("/project/") ||
                pathname.startsWith("/stage-") ||
                pathname.startsWith("/evidence") ||
                pathname.startsWith("/capital-continuum") ||
                pathname.startsWith("/grant-lifecycle");

              return (
                <Popover key={item.label} className="relative inline-flex py-1">
                  {({ open }) => (
                    <>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className={[
                            "text-sm font-semibold transition-colors rounded-md px-1.5 py-1",
                            isActive ? "text-secondary" : "text-slate hover:text-primary",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment",
                            "motion-reduce:transition-none",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>

                        <PopoverButton
                          aria-label="Open Programs menu"
                          className={[
                            "ml-0.5 inline-flex items-center justify-center rounded-md px-1.5 py-1 text-secondary/70 hover:text-primary transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment",
                            "motion-reduce:transition-none",
                          ].join(" ")}
                        >
                          <svg
                            aria-hidden
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={[
                              "h-4 w-4 opacity-70 transition-transform duration-200",
                              open ? "rotate-180" : "",
                              "motion-reduce:transition-none motion-reduce:transform-none",
                            ].join(" ")}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute left-0 top-full z-50 mt-3 min-w-[280px] origin-top-left rounded-xl border border-mist bg-white py-2 shadow-xl shadow-secondary/5 outline-none transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in motion-reduce:transition-none"
                      >
                        {item.dropdown!.map((link) => (
                          <div key={link.href || link.label} className="flex flex-col">
                            <Link
                              href={link.href || "#"}
                              className={[
                                "px-4 py-2 text-sm rounded-sm transition-colors motion-reduce:transition-none",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                                link.subItems
                                  ? "font-bold text-secondary bg-parchment/30 py-2.5"
                                  : "font-medium text-slate hover:bg-parchment/50 hover:text-primary",
                              ].join(" ")}
                            >
                              {link.label}
                            </Link>
                            {link.subItems && (
                              <div className="flex flex-col bg-white border-b border-mist/30 last:border-0 pt-1 pb-2">
                                {link.subItems.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    aria-current={pathname === sub.href ? "page" : undefined}
                                    className={[
                                      "px-7 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-2 rounded-sm",
                                      pathname === sub.href ? "text-primary" : "text-slate/60 hover:text-primary",
                                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                                      "motion-reduce:transition-none",
                                    ].join(" ")}
                                  >
                                    <span className="h-0.5 w-2 bg-mist/50"></span>
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "py-1 text-sm font-semibold transition-colors rounded-md px-1.5",
                  isActive ? "text-secondary" : "text-slate hover:text-primary",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment",
                  "motion-reduce:transition-none",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
