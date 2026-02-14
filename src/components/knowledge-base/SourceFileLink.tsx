import { SourceFile } from "../../types/knowledge-base";

type SourceFileLinkProps = SourceFile;

const formatColors: Record<string, string> = {
  PDF: "bg-red-100 text-red-600",
  Excel: "bg-green-100 text-green-600",
  Doc: "bg-blue-100 text-blue-600",
  Image: "bg-violet-100 text-violet-600",
  Presentation: "bg-orange-100 text-orange-600",
  Link: "bg-slate-100 text-slate-600",
};

export default function SourceFileLink({
  url,
  title,
  format,
  sizeKb,
}: SourceFileLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs group/src"
    >
      <span
        className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded flex-shrink-0 ${
          formatColors[format] || "bg-slate-100 text-slate-600"
        }`}
      >
        {format}
      </span>
      <span className="text-secondary/80 group-hover/src:text-secondary group-hover/src:underline underline-offset-2 transition-colors">
        {title}
      </span>
      {sizeKb && (
        <span className="text-[9px] text-slate/40">
          ({sizeKb >= 1000 ? `${(sizeKb / 1000).toFixed(1)} MB` : `${sizeKb} KB`})
        </span>
      )}
      <svg
        className="w-3 h-3 text-secondary/40 group-hover/src:text-secondary transition-colors flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </a>
  );
}
