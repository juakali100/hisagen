const deliverables = [
  {
    title: "Concept Note",
    detail: "One-page summary for funder screening and warm introductions.",
    status: "Shared",
  },
  {
    title: "Grant Proposal v0",
    detail: "10-section base narrative with gaps flagged for follow-up.",
    status: "Shared",
  },
  {
    title: "Funder Alignment Matrix",
    detail: "Initial prioritization and tailoring guidance for top prospects.",
    status: "Shared",
  },
];

const sources = [
  {
    title: "Email threads (Nov 7-10)",
    detail: "Keir context notes, partnership discussions, and pilot updates.",
  },
  {
    title: "WhatsApp update (Dec 23)",
    detail: "Progress update and approval timing (mid-Feb target).",
  },
];

const attachments = [
  {
    title: "Locus AG overview (PDF)",
    detail: "Technology partner background and product summary.",
  },
  {
    title: "Carbon Zero Marketplace pitch book (PDF)",
    detail: "Marketplace overview and positioning materials.",
  },
  {
    title: "Uganda maize trials (PDFs + XLSX)",
    detail: "Phase 2 data collection and results files.",
  },
  {
    title: "DSC-006 funder list (extracted)",
    detail: "Initial prospect list provided by Keir.",
  },
];

const internalDrafts = [
  {
    title: "Strategic Fundraising Foundation",
    detail: "Internal synthesis and framing notes for HISAGEN.",
  },
  {
    title: "5-Pillar Investment Readiness Assessment",
    detail: "Capability and readiness gap analysis.",
  },
  {
    title: "Corporate Pitch Deck Draft",
    detail: "Early-stage pitch narrative and slide outline.",
  },
];

const externalReferences = [
  {
    title: "Locus AG website",
    detail: "Company overview and product context.",
    url: "https://locusag.com",
  },
  {
    title: "Carbon Neutral Marketplace website",
    detail: "Carbon Zero Marketplace public site.",
    url: "https://www.carbonneutralmarketplace.com",
  },
  {
    title: "Capital Continuum (FSG) Framework",
    detail: "Investment readiness framework referenced in the alignment matrix.",
    url: "https://capital-continuum.com/resources/the-capital-continuum-fsg-7nj4f",
  },
  {
    title: "CarbonNOW General Sell Sheet (PDF)",
    detail: "CarbonNOW product summary and positioning sheet.",
    url: "https://locusag.com/wp-content/uploads/PDFS/CarbonNOW-General-Sell-Sheet_2024.pdf",
  },
];

const phaseOutputs = [
  ["Phase 04", "Compliance matrix and eligibility gates"],
  ["Phase 05", "Logic model, budget narrative, evidence inserts"],
  ["Phase 06", "Contracting checklist and award pack"],
  ["Phase 07-08", "Project setup, workplan, PM governance"],
  ["Phase 09-11", "Delivery cadence, reporting, closeout"],
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Resources
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Resource Library and Working Materials
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          A consolidated index of HISAGEN materials, evidence, and working drafts. Use this
          to track what is available, what has been shared, and what remains to be built.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Source Communications</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {sources.map((item) => (
              <li key={item.title}>
                <p className="font-medium text-secondary">{item.title}</p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-mist pt-4 text-sm text-slate">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Summary Highlights</p>
            <ul className="mt-3 space-y-2">
              <li>HISAGEN is agriculture-first, with Uganda as the near-term launch focus.</li>
              <li>Locus AG partnership and NARO collaboration anchor the pilot pathway.</li>
              <li>Carbon pathway depends on verification and registry alignment.</li>
              <li>Formal government approval targeted for mid-Feb 2026.</li>
            </ul>
            <a
              href="/resources/comms-summary"
              className="mt-3 inline-block text-sm text-primary hover:text-primary/80 underline"
            >
              View full communication summary
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Evidence and Attachments</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {attachments.map((item) => (
              <li key={item.title}>
                <p className="font-medium text-secondary">{item.title}</p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">External References</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {externalReferences.map((item) => (
              <li key={item.title}>
                <p className="font-medium text-secondary">{item.title}</p>
                <p>{item.detail}</p>
                <a
                  href={item.url}
                  className="mt-2 inline-block text-sm text-primary hover:text-primary/80 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View resource
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Internal Drafts</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {internalDrafts.map((item) => (
              <li key={item.title}>
                <p className="font-medium text-secondary">{item.title}</p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate">
            Internal drafts are reference materials and are not shared externally without review.
          </p>
        </div>

        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Shared Deliverables</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {deliverables.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-secondary">{item.title}</p>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Phase Outputs (Planned)
        </div>
        <div className="overflow-hidden rounded-xl border border-mist bg-white">
          <table className="w-full text-left text-sm text-slate">
            <thead className="bg-parchment text-xs uppercase tracking-[0.2em] text-secondary">
              <tr>
                <th className="px-4 py-3">Phase</th>
                <th className="px-4 py-3">Planned Outputs</th>
              </tr>
            </thead>
            <tbody>
              {phaseOutputs.map((row) => (
                <tr key={row[0]} className="border-t border-mist/60">
                  <td className="px-4 py-3 font-medium text-secondary">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
