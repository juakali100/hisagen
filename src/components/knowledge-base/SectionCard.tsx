"use client";

import Link from "next/link";
import { EntryType, entryTypeColors } from "../../types/knowledge-base";
import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  BeakerIcon,
  FlagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const typeIcons: Record<EntryType, typeof ChatBubbleLeftRightIcon> = {
  communication: ChatBubbleLeftRightIcon,
  research: DocumentTextIcon,
  evidence: BeakerIcon,
  milestone: FlagIcon,
  ecosystem: UserGroupIcon,
};

type SectionCardProps = {
  type: EntryType;
  title: string;
  description: string;
  count: number;
  href: string;
  recentItems?: { title: string; date: string }[];
};

export default function SectionCard({
  type,
  title,
  description,
  count,
  href,
  recentItems = [],
}: SectionCardProps) {
  const Icon = typeIcons[type];
  const color = entryTypeColors[type];

  return (
    <Link
      href={href}
      className="group block p-6 rounded-xl border border-mist bg-white hover:border-secondary/40 hover:shadow-md transition-all motion-reduce:transition-none"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${color.bg}`}>
          <Icon className={`size-6 ${color.text}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-secondary group-hover:text-secondary/80 transition-colors">
              {title}
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-parchment text-slate/60 px-2 py-1 rounded">
              {count} items
            </span>
          </div>
          <p className="mt-2 text-sm text-slate leading-relaxed">
            {description}
          </p>
          {recentItems.length > 0 && (
            <div className="mt-4 pt-4 border-t border-mist">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate/40 mb-2">
                Recent
              </p>
              <ul className="space-y-1">
                {recentItems.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="text-xs text-slate truncate">
                    <span className="text-slate/40">{item.date}</span>
                    <span className="mx-2 text-slate/20">|</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
