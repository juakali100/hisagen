export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Evidence
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Pilot Signals and Proof Points
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This section consolidates trial outcomes, validation partnerships, and the data
          required to demonstrate impact. It is structured for funder review and diligence.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
            <span className="h-px w-12 bg-mist" />
            Validation Signals
          </div>
          <ul className="space-y-3 text-sm text-slate">
            <li>Uganda pilot trials underway, with formal government approval targeted for mid-Feb.</li>
            <li>Locus AG partnership provides proven microbial input technology and supply support.</li>
            <li>NARO research collaboration strengthens local validation and regulatory alignment.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Priority Data to Confirm</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Yield uplift ranges by crop and district.</li>
            <li>Input cost reduction and farmer income delta.</li>
            <li>Soil carbon measurement baseline and tCO2e per hectare.</li>
            <li>Unit economics per farmer served.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Evidence Tracker
        </div>
        <div className="border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm text-secondary">
          Carbon pathway: align soil carbon measurement to a recognized methodology and
          define the verification partner for credits.
        </div>
        <div className="overflow-hidden rounded-xl border border-mist bg-white">
          <table className="w-full text-left text-sm text-slate">
            <thead className="bg-parchment text-xs uppercase tracking-[0.2em] text-secondary">
              <tr>
                <th className="px-4 py-3">Evidence Area</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Next Step</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Uganda trials", "In progress", "Confirm quantitative results"],
                ["Regulatory approval", "Mid-Feb target", "Share approval timeline"],
                ["Carbon methodology", "Defined pathway", "Clarify VM0042 inputs"],
                ["Financial model", "Gap", "Build unit economics"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-mist/60">
                  <td className="px-4 py-3 font-medium text-secondary">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
