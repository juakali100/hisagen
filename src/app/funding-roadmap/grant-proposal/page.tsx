import StageBreadcrumb from "../../components/StageBreadcrumb";

export default function GrantProposalPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 1"
        trail={[{ label: "Overview", href: "/" }, { label: "Stage 1", href: "/stage-1" }, { label: "Grant Playbook" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Grant Playbook
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Stage 1 grant proposal workflow
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          The v0 grant package is the base. This page lists the critical inserts needed to
          make it funder-ready.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Critical Inserts</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Pilot data summary and quantified outcomes.</li>
            <li>Unit economics and budget narrative.</li>
            <li>Governance structure and delivery partners.</li>
            <li>Carbon pathway and MRV timeline.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Priority Outputs</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Updated concept note (1-2 pages).</li>
            <li>Grant proposal with filled gaps.</li>
            <li>Funder alignment matrix refresh.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

