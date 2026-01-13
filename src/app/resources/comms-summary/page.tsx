import StageBreadcrumb from "@/components/StageBreadcrumb";

export default function CommsSummaryPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Resources"
        trail={[{ label: "Overview", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Comms Summary" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Resources</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Comms summary
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Consolidated summary of HISAGEN communications and key updates.
        </p>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Highlights</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          <li>HISAGEN is agriculture-first with Uganda as near-term launch focus.</li>
          <li>Pilot results are described as encouraging but need compiled data.</li>
          <li>Formal government approval expected by mid-February.</li>
        </ul>
      </section>
    </div>
  );
}
