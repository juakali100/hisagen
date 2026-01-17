import StageBreadcrumb from "../../../../components/StageBreadcrumb";
import Link from "next/link";

export default function V0GrantProposalPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="V0 Grant Proposal"
        trail={[
          { label: "Stage 1: Incubation", href: "/stage-1" },
          { label: "Funding Applications", href: "/stage-1/funding" },
          { label: "V0 Grant Proposal" }
        ]}
      />

      <section className="rounded-2xl border-2 border-primary/20 bg-primary/5 px-8 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
            V0 Draft Proposal
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">November 17, 2025</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight">
          HISAGEN Grant Funding Proposal
        </h1>
        <p className="mt-4 text-base text-slate italic">
          High Impact Seed Application for Greener Environments
        </p>
        <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
          Foundation grant proposal structure using proven frameworks. Designed to be tailored to specific
          funding opportunities with [GAP] markers indicating information needed from stakeholder input.
        </p>
      </section>

      {/* Document Status */}
      <section className="mt-12 rounded-xl border-2 border-amber-500/30 bg-amber-50 p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-base font-bold text-amber-900 mb-2">V0 Draft Status</h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              This is a <strong>foundation document</strong> with [GAP] markers throughout indicating information
              needed from client knowledge capture sessions and further research. Ready for tailoring to specific
              funder requirements.
            </p>
            <div className="grid gap-2 md:grid-cols-2 text-xs text-amber-700">
              <div>• Content drafted from available materials</div>
              <div>• Structure based on proven grant frameworks</div>
              <div>• [GAP] markers identify missing information</div>
              <div>• Designed for funder-specific customization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contents Navigation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Contents</h2>
        <div className="grid gap-2 md:grid-cols-2">
          {[
            "1. Executive Summary",
            "2. Statement of Need",
            "3. Project Description",
            "4. Organizational Information",
            "5. Conclusion",
            "6. Budget Framework"
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-mist bg-white hover:border-secondary/20 transition-colors">
              <p className="text-sm font-bold text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Executive Summary */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-parchment font-bold text-sm">1</span>
          <h2 className="text-2xl font-bold text-secondary uppercase tracking-[0.15em]">Executive Summary</h2>
        </div>

        <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-white space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Note</p>
            <p className="text-sm text-slate italic">
              Write this LAST after all other sections complete - per grant writing best practice
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-secondary mb-3">The Challenge</h3>
            <p className="text-base text-slate leading-relaxed">
              HISAGEN (High Impact Seed Application for Greener Environments) addresses the critical challenge
              facing smallholder farmers in East Africa: declining soil fertility, increasing fertilizer costs, and
              vulnerability to climate change impacts that threaten food security and farmer livelihoods.
            </p>
            <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">[GAP: Problem Statement Data Needed]</p>
              <ul className="space-y-1 text-sm text-slate">
                <li>• How many farmers affected in target region?</li>
                <li>• What are current yield losses/income impacts?</li>
                <li>• Climate vulnerability specifics?</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-secondary mb-3">The Solution</h3>
            <p className="text-base text-slate leading-relaxed mb-4">
              HISAGEN delivers an integrated agricultural business model that combines:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">1. Microbial Products</p>
                <p className="text-xs text-slate">Biofertilizers and biopesticides reducing chemical dependency</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">2. Soil Health Restoration</p>
                <p className="text-xs text-slate">Regenerative agriculture improving soil carbon and fertility</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">3. Carbon Credits</p>
                <p className="text-xs text-slate">Verified emissions reductions generating farmer income</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">4. Digital Marketplace</p>
                <p className="text-xs text-slate">Platform connecting farmers, buyers, and carbon credit purchasers</p>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">[GAP: Solution Specifics Needed]</p>
              <ul className="space-y-1 text-sm text-slate">
                <li>• How many farmers will benefit? (specific number)</li>
                <li>• Geographic scope? (which districts/regions in Uganda)</li>
                <li>• Project timeline? (12/24/36 months?)</li>
                <li>• Expected farmer gains? (% yield, $ income, other benefits)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-secondary mb-3">Organizational Expertise</h3>
            <p className="text-base text-slate leading-relaxed">
              HISAGEN is led by Keir A-B, bringing 10+ years quantitative modeling experience from Merrill Lynch's
              Quantitative Strategies Group, expertise in agricultural technology commercialization through Locus AG
              (UK) business development, and deep East Africa connections. The organization has secured technology
              partnership with Locus AG (Cleveland, Ohio) providing manufacturing equipment and products at cost,
              and is advancing government approvals with Uganda NARO (National Agricultural Research Organization)
              with license approval expected end 2025/early 2026.
            </p>
            <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">[GAP: Organizational Details Needed]</p>
              <ul className="space-y-1 text-sm text-slate">
                <li>• HISAGEN legal structure? (NGO, social enterprise, private company?)</li>
                <li>• Current team composition beyond founder?</li>
                <li>• Governance structure? (board, advisors?)</li>
                <li>• Track record/pilot results?</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-secondary mb-3">Funding Request</h3>
            <div className="p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
              <p className="text-3xl font-bold text-secondary mb-2">$[AMOUNT]</p>
              <p className="text-sm text-slate">for [TIMEFRAME] to achieve [SPECIFIC OUTCOMES]</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-secondary mb-3">Future Sustainability</h3>
            <p className="text-base text-slate leading-relaxed">
              Beyond grant funding, HISAGEN's business model creates sustainable revenue through carbon credit
              sales, premium markets for sustainably-produced agricultural products, and digital platform
              transaction fees.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Statement of Need */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-parchment font-bold text-sm">2</span>
          <h2 className="text-2xl font-bold text-secondary uppercase tracking-[0.15em]">Statement of Need</h2>
        </div>

        <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/5 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">The Challenge: Smallholder Farmers at Climate Crossroads</h3>
            <p className="text-base text-slate leading-relaxed mb-4">
              Smallholder farmers across East Africa face a devastating convergence of agricultural, economic, and
              climate challenges that threaten their livelihoods and food security for millions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-xl border border-mist bg-white">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Agricultural Degradation</h4>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Declining soil fertility from continuous monoculture cropping</li>
                <li>• Increasing dependency on expensive chemical fertilizers</li>
                <li>• Degraded soil biology and organic matter depletion</li>
              </ul>
              <div className="mt-4 p-3 rounded bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate/60 italic">[GAP: Uganda-specific statistics needed]</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-mist bg-white">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Economic Vulnerability</h4>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Locked into commodity price volatility</li>
                <li>• Limited value capture beyond raw produce sales</li>
                <li>• Cash constraints preventing investment</li>
              </ul>
              <div className="mt-4 p-3 rounded bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate/60 italic">[GAP: Economic data needed]</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-mist bg-white">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Climate Change Impacts</h4>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Erratic rainfall disrupting planting cycles</li>
                <li>• Increased pest and disease pressure</li>
                <li>• Deforestation reducing natural resilience</li>
              </ul>
              <div className="mt-4 p-3 rounded bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate/60 italic">[GAP: Climate data needed]</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Why This Matters Now</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Uganda NARO Approval Imminent</p>
                <p className="text-xs text-emerald-800">License approval expected end 2025/early 2026 creates immediate opportunity</p>
              </div>
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Corporate Climate Commitments</p>
                <p className="text-xs text-emerald-800">Growing demand for nature-based carbon credits and sustainable supply chains</p>
              </div>
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Technology Partnership Ready</p>
                <p className="text-xs text-emerald-800">Locus AG manufacturing support enables cost-effective product delivery</p>
              </div>
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Mobile Penetration</p>
                <p className="text-xs text-emerald-800">Digital platform adoption now viable across target regions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Description */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-parchment font-bold text-sm">3</span>
          <h2 className="text-2xl font-bold text-secondary uppercase tracking-[0.15em]">Project Description</h2>
        </div>

        <div className="space-y-6">
          {/* Goal */}
          <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-white">
            <h3 className="text-lg font-bold text-secondary mb-4">Goal</h3>
            <p className="text-base text-slate leading-relaxed mb-4">
              To transform smallholder farmer livelihoods and climate resilience in Uganda through an integrated
              agricultural business model that combines microbial agricultural products, soil health restoration,
              carbon credit generation, and digital marketplace connectivity.
            </p>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">[GAP: Refine with Client]</p>
              <ul className="space-y-1 text-sm text-slate">
                <li>• Is this the right framing?</li>
                <li>• What's the overarching change we're trying to create?</li>
                <li>• What's the ultimate vision?</li>
              </ul>
            </div>
          </div>

          {/* Objectives & Outcomes Framework */}
          <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
            <h3 className="text-lg font-bold text-secondary mb-4">Objectives & Outcomes</h3>

            {/* Distinction Note */}
            <div className="p-4 rounded-xl bg-white border border-primary/20 mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Important Distinction</p>
              <p className="text-sm text-slate leading-relaxed">
                <strong>Objectives</strong> are what this grant will directly fund and achieve during Stage 1 Incubation (2024-2026).
                <strong> Outcomes</strong> are the longer-term impacts that Stage 1 foundations enable in Stage 2+ (2027 onwards).
                This structure reflects the Capital Continuum principle that early-stage grants build foundations for later commercial viability.
              </p>
            </div>

            {/* Stage 1 Objectives */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Stage 1 Objectives</p>
                <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] rounded font-bold uppercase tracking-widest">
                  What Grant Funds
                </span>
              </div>
              <p className="text-xs text-slate mb-4">
                Using the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound):
              </p>

              <div className="space-y-4">
                {/* Objective 1.1: Regulatory Authorization */}
                <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/30">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-bold text-secondary">Objective 1.1: Regulatory Authorization</p>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] rounded font-bold uppercase">
                      Activity 1.5
                    </span>
                  </div>
                  <p className="text-sm text-slate mb-3">
                    Secure NARO/MAAIF product registration enabling commercial distribution of Rhizolizer® biofertilizers in Uganda.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-2 rounded bg-white border border-emerald-100">
                      <span className="font-bold text-emerald-700">Measurable:</span>
                      <span className="text-slate ml-1">License approval obtained</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-emerald-100">
                      <span className="font-bold text-emerald-700">Time-bound:</span>
                      <span className="text-slate ml-1">By Q1 2026</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate/60 mt-2 italic">
                    Addresses Statement of Need: Enables access to inputs that reduce chemical dependency
                  </p>
                </div>

                {/* Objective 1.2: Technology Validation */}
                <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/30">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-bold text-secondary">Objective 1.2: Technology Validation</p>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] rounded font-bold uppercase">
                      Activity 1.4
                    </span>
                  </div>
                  <p className="text-sm text-slate mb-3">
                    Complete field trial analysis demonstrating yield improvements for East African smallholder crops.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-2 rounded bg-white border border-emerald-100">
                      <span className="font-bold text-emerald-700">Measurable:</span>
                      <span className="text-slate ml-1">Quantitative yield data across 4 crops, 4 regions</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-emerald-100">
                      <span className="font-bold text-emerald-700">Time-bound:</span>
                      <span className="text-slate ml-1">NARO final report (pending)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate/60 mt-2 italic">
                    Addresses Statement of Need: Proves solution for declining agricultural productivity
                  </p>
                </div>

                {/* Objective 1.3: Governance & Benefit-Sharing */}
                <div className="p-4 rounded-lg border border-mist bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-bold text-secondary">Objective 1.3: Governance & Benefit-Sharing Framework</p>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[8px] rounded font-bold uppercase">
                      Activities 1.1, 1.2
                    </span>
                  </div>
                  <p className="text-sm text-slate mb-3">
                    Establish legal entity structure and farmer benefit-sharing model ensuring equitable participation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-600">Measurable:</span>
                      <span className="text-slate ml-1">Entities registered, benefit model documented</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-600">Time-bound:</span>
                      <span className="text-slate ml-1">By end of grant period</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 rounded bg-amber-50 border border-amber-200">
                    <p className="text-[10px] text-amber-800">[GAP: Specific benefit-sharing percentages? Carbon rights structure?]</p>
                  </div>
                </div>

                {/* Objective 1.4: Market Entry Readiness */}
                <div className="p-4 rounded-lg border border-mist bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-bold text-secondary">Objective 1.4: Market Entry Readiness</p>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[8px] rounded font-bold uppercase">
                      Activity 1.6
                    </span>
                  </div>
                  <p className="text-sm text-slate mb-3">
                    Develop distribution infrastructure and initial farmer network for commercial launch.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-600">Measurable:</span>
                      <span className="text-slate ml-1">[X] distribution partners, [Y] farmers enrolled</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-600">Time-bound:</span>
                      <span className="text-slate ml-1">By Q2 2026</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 rounded bg-amber-50 border border-amber-200">
                    <p className="text-[10px] text-amber-800">[GAP: Target farmer count for Year 1? Distribution partner criteria?]</p>
                  </div>
                </div>

                {/* Objective 1.5: Carbon Project Foundation */}
                <div className="p-4 rounded-lg border border-mist bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-bold text-secondary">Objective 1.5: Carbon Project Foundation</p>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[8px] rounded font-bold uppercase">
                      Enables Stage 2
                    </span>
                  </div>
                  <p className="text-sm text-slate mb-3">
                    Select carbon methodology and establish MRV baseline approach for future credit generation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-600">Measurable:</span>
                      <span className="text-slate ml-1">Methodology selected, baseline data plan documented</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-600">Time-bound:</span>
                      <span className="text-slate ml-1">By end of grant period</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 rounded bg-amber-50 border border-amber-200">
                    <p className="text-[10px] text-amber-800">[GAP: Verra VM0042 vs Gold Standard? MRV technology partners?]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Long-term Outcomes (Stage 2+) */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600">Long-term Outcomes</p>
                <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[9px] rounded font-bold uppercase tracking-widest">
                  Stage 2+ Bigger Picture
                </span>
              </div>
              <p className="text-xs text-slate mb-4">
                Successful completion of Stage 1 Objectives enables these longer-term outcomes in Stage 2 Implementation (2027+):
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <p className="text-xs font-bold text-secondary mb-1">Agricultural Productivity</p>
                  <p className="text-[11px] text-slate">Measurable yield increases for participating farmers through scaled biofertilizer distribution</p>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <p className="text-xs font-bold text-secondary mb-1">Farmer Income Growth</p>
                  <p className="text-[11px] text-slate">Multiple revenue streams: improved yields, carbon credit share, premium market access</p>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <p className="text-xs font-bold text-secondary mb-1">Carbon Credit Generation</p>
                  <p className="text-[11px] text-slate">Verified soil carbon credits issued through established MRV systems</p>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <p className="text-xs font-bold text-secondary mb-1">Soil Health Restoration</p>
                  <p className="text-[11px] text-slate">Measurable improvements in soil organic carbon and biological activity</p>
                </div>
              </div>

              <p className="mt-4 text-[10px] text-slate/60 italic">
                These outcomes directly address the Statement of Need but require Stage 1 foundations to be in place first.
                Grant funding builds the infrastructure; Stage 2 capital scales the impact.
              </p>
            </div>
          </div>

          {/* Activities & Methods - Stage 1 Incubation */}
          <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/5">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-bold text-secondary">Activities & Methods</h3>
              <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] rounded font-bold uppercase tracking-widest">
                Stage 1: Incubation
              </span>
            </div>
            <p className="text-sm text-slate mb-2">
              Stage 1 Incubation activities focus on building the foundational capabilities required before operational scale.
              These components map to the project timeline phases (2024-2026).
            </p>
            <p className="text-xs text-slate/60 mb-6 italic">
              Note: Operational components (product distribution, farmer training, carbon credit issuance) are Stage 2 activities
              enabled by successful completion of these Stage 1 foundations.
            </p>

            {/* Stage 1 Components */}
            <div className="space-y-4">
              {/* Component 1.1: Team & Governance */}
              <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] rounded font-bold uppercase tracking-widest">
                    Phase 0 • Complete
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2">Component 1.1: Team & Governance Formation</h4>
                <p className="text-sm text-slate mb-3">Assemble founding team with complementary expertise and establish governance structure.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">✓ Achieved</p>
                    <ul className="space-y-1 text-xs text-slate">
                      <li>• Founding team assembled by Cedric (Uganda/Ireland connector)</li>
                      <li>• Keir A-B as lead (quant finance + ag-tech + East Africa)</li>
                      <li>• Uganda identified as launch market</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">[GAP: Details Needed]</p>
                    <ul className="space-y-1 text-xs text-amber-800">
                      <li>• Full team composition beyond founder?</li>
                      <li>• Advisory board structure?</li>
                      <li>• Governance policies?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Component 1.2: Entity & Legal */}
              <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] rounded font-bold uppercase tracking-widest">
                    Phase 0 • Complete
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2">Component 1.2: Entity & Legal Structure</h4>
                <p className="text-sm text-slate mb-3">Establish legal entities and frameworks for multi-jurisdiction operations.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">✓ Achieved</p>
                    <ul className="space-y-1 text-xs text-slate">
                      <li>• HISAGEN USA entity structure defined</li>
                      <li>• HISAGEN Africa entity structure defined</li>
                      <li>• Dual-entity model for technology + operations</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">[GAP: Details Needed]</p>
                    <ul className="space-y-1 text-xs text-amber-800">
                      <li>• Registration status of each entity?</li>
                      <li>• Carbon rights ownership framework?</li>
                      <li>• Farmer benefit-sharing legal structure?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Component 1.3: Technology Partnership */}
              <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] rounded font-bold uppercase tracking-widest">
                    Phase 0 • Complete
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2">Component 1.3: Technology Partnership</h4>
                <p className="text-sm text-slate mb-3">Secure access to proven microbial technology and manufacturing capability.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">✓ Achieved</p>
                    <ul className="space-y-1 text-xs text-slate">
                      <li>• Locus AG partnership established</li>
                      <li>• Technology access secured (Rhizolizer® products)</li>
                      <li>• Manufacturing equipment available at cost</li>
                      <li>• Products supplied at cost for pilot</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">[GAP: Details Needed]</p>
                    <ul className="space-y-1 text-xs text-amber-800">
                      <li>• Formal MOU/contract status?</li>
                      <li>• IP licensing arrangements?</li>
                      <li>• Long-term supply agreement terms?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Component 1.4: Research & Validation */}
              <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] rounded font-bold uppercase tracking-widest">
                    Phase 1 • Complete
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2">Component 1.4: Research & Field Validation</h4>
                <p className="text-sm text-slate mb-3">Conduct rigorous field trials to validate technology performance in East African conditions.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">✓ Achieved (Feb - Sep 2025)</p>
                    <ul className="space-y-1 text-xs text-slate">
                      <li>• NARO partnership formalized under MAAIF oversight</li>
                      <li>• 4 crops tested: Maize, Irish Potatoes, Peanuts, Sweet Potatoes</li>
                      <li>• 4 regions: Western, Northern, Eastern, Central Uganda</li>
                      <li>• Trial data collection completed</li>
                      <li>• Results: "Highly positive" (per NARO)</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">[GAP: Details Needed]</p>
                    <ul className="space-y-1 text-xs text-amber-800">
                      <li>• Quantitative yield data (awaiting NARO report)</li>
                      <li>• Statistical significance of results?</li>
                      <li>• Soil health baseline measurements?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Component 1.5: Regulatory Authorization */}
              <div className="p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-secondary text-parchment text-[9px] rounded font-bold uppercase tracking-widest animate-pulse">
                    Phase 2 • Active
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2">Component 1.5: Regulatory & Market Authorization</h4>
                <p className="text-sm text-slate mb-3">Secure government approvals required for commercial product distribution.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">In Progress (Oct 2025 - Q1 2026)</p>
                    <ul className="space-y-1 text-xs text-slate">
                      <li>• Oct 2025: Initial UNBS submission</li>
                      <li>• Jan 2026: MAAIF dossier submission</li>
                      <li>• Jan-Feb 2026: Review period</li>
                      <li>• Feb-Mar 2026: Approval expected</li>
                      <li>• Mar 2026: Product labeling finalization</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">[GAP: Details Needed]</p>
                    <ul className="space-y-1 text-xs text-amber-800">
                      <li>• Specific regulatory requirements?</li>
                      <li>• Approval timeline risks?</li>
                      <li>• Compliance costs?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Component 1.6: Market Entry Preparation */}
              <div className="p-6 rounded-xl border border-mist bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] rounded font-bold uppercase tracking-widest">
                    Phase 3 • Planned
                  </span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2">Component 1.6: Market Entry Preparation</h4>
                <p className="text-sm text-slate mb-3">Prepare operational infrastructure for commercial launch and farmer network development.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Planned (Q2 2026)</p>
                    <ul className="space-y-1 text-xs text-slate">
                      <li>○ Market launch preparation</li>
                      <li>○ Initial commercial distribution channels</li>
                      <li>○ Farmer network expansion strategy</li>
                      <li>○ Carbon MRV baseline establishment</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">[GAP: Details Needed]</p>
                    <ul className="space-y-1 text-xs text-amber-800">
                      <li>• Target farmer count for Year 1?</li>
                      <li>• Distribution partner strategy?</li>
                      <li>• MRV methodology selection?</li>
                      <li>• Farmer recruitment approach?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 Preview */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">Stage 2 Components (Future Funding Rounds)</p>
              <p className="text-xs text-slate mb-3">
                Successful completion of Stage 1 enables the following operational activities in Stage 2 Implementation (2027+):
              </p>
              <div className="grid gap-2 md:grid-cols-2 text-xs text-slate">
                <div>• 2.1 Product Distribution at Scale</div>
                <div>• 2.2 Farmer Training & Capacity Building</div>
                <div>• 2.3 MRV Infrastructure Deployment</div>
                <div>• 2.4 Carbon Credit Development & Issuance</div>
              </div>
            </div>
          </div>

          {/* Partnerships */}
          <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-white">
            <h3 className="text-lg font-bold text-secondary mb-4">Partnerships</h3>

            <div className="mb-6">
              <h4 className="text-base font-bold text-secondary mb-3">Confirmed Core Partners</h4>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <p className="text-sm font-bold text-primary mb-2">Locus AG (Cleveland, Ohio) - Technology Partner</p>
                  <ul className="space-y-1 text-sm text-slate">
                    <li>• Manufacturing equipment and microbial products at cost</li>
                    <li>• Relationship established through business development work</li>
                    <li>• Status: Supportive partnership confirmed</li>
                  </ul>
                  <div className="mt-3 p-3 rounded bg-amber-50 border border-amber-200">
                    <p className="text-xs text-amber-800">[GAP: Formal MOU/contract status? IP arrangements?]</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <p className="text-sm font-bold text-primary mb-2">Uganda NARO - Regulatory Partner</p>
                  <ul className="space-y-1 text-sm text-slate">
                    <li>• Government licensing and approval authority</li>
                    <li>• License approval expected end 2025/early 2026</li>
                    <li>• Potential for research collaboration</li>
                  </ul>
                  <div className="mt-3 p-3 rounded bg-amber-50 border border-amber-200">
                    <p className="text-xs text-amber-800">[GAP: Formal agreement? Research collaboration details?]</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold text-secondary mb-3">Partnerships to be Developed</h4>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate">
                  <li>• Farmer Organizations/Cooperatives - Implementation and mobilization</li>
                  <li>• Carbon Verification Bodies - Third-party verification</li>
                  <li>• Financial Services - Farmer credit access and digital payments</li>
                  <li>• Research Institutions - Monitoring support and impact evaluation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* M&E Framework */}
          <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/5">
            <h3 className="text-lg font-bold text-secondary mb-4">Monitoring & Evaluation</h3>
            <div className="p-6 rounded-xl border-2 border-amber-500/30 bg-amber-50">
              <p className="text-sm font-bold text-amber-900 mb-3">[GAP: M&E Framework to be Developed]</p>
              <p className="text-sm text-amber-800 mb-4">
                Critical for any grant - needs comprehensive framework including:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Process Indicators</p>
                  <ul className="space-y-1 text-xs text-amber-800">
                    <li>• Farmer enrollment tracking</li>
                    <li>• Training attendance metrics</li>
                    <li>• Product distribution monitoring</li>
                    <li>• Practice adoption rates</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Outcome Indicators</p>
                  <ul className="space-y-1 text-xs text-amber-800">
                    <li>• Yield changes (baseline + measurement)</li>
                    <li>• Income changes (attribution model)</li>
                    <li>• Carbon sequestration (verification)</li>
                    <li>• Soil health improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-white">
            <h3 className="text-lg font-bold text-secondary mb-4">Sustainability</h3>
            <p className="text-base text-slate leading-relaxed mb-6">
              HISAGEN is designed as a financially sustainable business model, not perpetually grant-dependent.
              The project follows a deliberate <strong>Capital Continuum</strong> pathway where funding sources evolve
              as the project matures and risk decreases.
            </p>

            {/* Capital Evolution Pathway */}
            <div className="mb-8 p-6 rounded-xl border-2 border-secondary/20 bg-secondary/5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">Capital Evolution Pathway</p>
              <p className="text-xs text-slate mb-4">
                Grant funding enables Stage 1 foundations. As the project proves itself, it unlocks progressively
                commercial capital sources - reducing grant dependency over time.
              </p>

              {/* 4-Stage Visual */}
              <div className="grid grid-cols-4 gap-2">
                {/* Stage 1 */}
                <div className="p-3 rounded-lg border-2 border-secondary bg-secondary/10 relative">
                  <div className="absolute -top-2 left-2 px-2 py-0.5 bg-secondary text-parchment text-[8px] font-bold uppercase tracking-widest rounded">
                    Current
                  </div>
                  <p className="text-[10px] font-bold text-secondary mt-2">Stage 1</p>
                  <p className="text-xs font-bold text-secondary">Incubation</p>
                  <p className="text-[9px] text-slate mt-1">2024-2026</p>
                  <div className="mt-2 pt-2 border-t border-secondary/20">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-secondary/60">Capital</p>
                    <p className="text-[9px] text-slate">Grants, Philanthropy, Sweat Equity</p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="p-3 rounded-lg border border-mist bg-white">
                  <p className="text-[10px] font-bold text-slate/60 mt-2">Stage 2</p>
                  <p className="text-xs font-bold text-secondary">Implementation</p>
                  <p className="text-[9px] text-slate mt-1">2027-2030</p>
                  <div className="mt-2 pt-2 border-t border-mist">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate/60">Capital</p>
                    <p className="text-[9px] text-slate">Carbon Prepayment, Blended Finance</p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="p-3 rounded-lg border border-mist bg-white">
                  <p className="text-[10px] font-bold text-slate/60 mt-2">Stage 3</p>
                  <p className="text-xs font-bold text-secondary">Stabilization</p>
                  <p className="text-[9px] text-slate mt-1">2031-2040</p>
                  <div className="mt-2 pt-2 border-t border-mist">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate/60">Capital</p>
                    <p className="text-[9px] text-slate">Impact Capital, Carbon-Backed Debt</p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="p-3 rounded-lg border border-mist bg-white">
                  <p className="text-[10px] font-bold text-slate/60 mt-2">Stage 4</p>
                  <p className="text-xs font-bold text-secondary">Maturity</p>
                  <p className="text-[9px] text-slate mt-1">2041+</p>
                  <div className="mt-2 pt-2 border-t border-mist">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate/60">Capital</p>
                    <p className="text-[9px] text-slate">Institutional Debt, Green Bonds</p>
                  </div>
                </div>
              </div>

              {/* Arrow indicators */}
              <div className="flex items-center justify-center mt-4 gap-1">
                <span className="text-[9px] text-slate/60">High Risk / Grant Dependent</span>
                <div className="flex-1 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-secondary rounded mx-2" />
                <span className="text-[9px] text-slate/60">Low Risk / Commercially Viable</span>
              </div>
            </div>

            {/* Revenue Streams */}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-4">Revenue Streams (Enabling Capital Transition)</p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 1: Carbon Credit Sales</p>
                <p className="text-sm text-slate mb-2">
                  Ongoing revenue from soil carbon sequestration with majority share to farmers.
                  <span className="text-xs text-slate/60 ml-1">(Primary revenue from Stage 2+)</span>
                </p>
                <div className="p-3 rounded bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800">[GAP: Expected revenue per tCO2? Revenue share model? Market strategy?]</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 2: Product Sales & Platform Fees</p>
                <p className="text-sm text-slate mb-2">
                  Biofertilizer/biopesticide sales margins and digital platform transaction fees.
                  <span className="text-xs text-slate/60 ml-1">(Begins Stage 1, scales Stage 2+)</span>
                </p>
                <div className="p-3 rounded bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800">[GAP: Margin model? Volume projections? Transaction fee structure?]</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 3: Technical Services</p>
                <p className="text-sm text-slate mb-2">
                  Consulting/advisory services and technology transfer to other organizations.
                  <span className="text-xs text-slate/60 ml-1">(Opportunistic from Stage 2+)</span>
                </p>
                <div className="p-3 rounded bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800">[GAP: Service revenue potential? Licensing opportunities?]</p>
                </div>
              </div>
            </div>

            {/* Transition Timeline - Enhanced */}
            <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Stage 1 Transition Timeline</p>
              <div className="space-y-2 text-sm text-slate">
                <p><strong>Year 1 (Grant-funded):</strong> Complete regulatory approval, establish distribution, enroll initial farmers</p>
                <p><strong>Year 2 (Transition):</strong> Early carbon MRV data, product revenue beginning, blended finance conversations</p>
                <p><strong>Year 3 (Stage 2 Ready):</strong> Carbon prepayment agreements, reduced grant dependency, impact investor ready</p>
              </div>
              <p className="mt-4 text-xs text-slate/60 italic">
                By end of Stage 1, HISAGEN will have the track record and revenue foundations to attract
                Stage 2 capital (carbon prepayment, impact investment) - transitioning away from grant dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Organizational Information */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-parchment font-bold text-sm">4</span>
          <h2 className="text-2xl font-bold text-secondary uppercase tracking-[0.15em]">Organizational Information</h2>
        </div>

        <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/5 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Mission, Vision, and Approach</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-mist bg-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Mission (Draft)</p>
                <p className="text-sm text-slate leading-relaxed">
                  To transform smallholder farmer livelihoods and climate resilience through integrated agricultural
                  solutions that generate sustainable income and environmental benefits.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-mist bg-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Vision (Draft)</p>
                <p className="text-sm text-slate leading-relaxed">
                  A future where East African farmers thrive through regenerative agriculture that restores ecosystems,
                  sequesters carbon, and creates prosperity for farming communities.
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-amber-50 border border-amber-200">
              <p className="text-xs text-amber-800">[GAP: Refine these statements with client confirmation]</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Founder: Keir A-B</h3>
            <div className="p-6 rounded-xl border border-mist bg-white">
              <p className="text-sm font-bold text-secondary mb-3">Professional Background</p>
              <ul className="space-y-3 text-sm text-slate">
                <li>
                  <strong>Merrill Lynch (10+ years)</strong> - Quantitative Strategies Group
                  <ul className="mt-1 ml-4 space-y-1 text-xs">
                    <li>• Built pricing algorithms and trading models using Python</li>
                    <li>• Automated US Treasuries trading desk (reducing 30 traders to 3)</li>
                    <li>• Deep expertise in quantitative modeling and systems automation</li>
                  </ul>
                </li>
                <li>
                  <strong>Locus AG (UK)</strong> - Business Development for US Market Expansion
                  <ul className="mt-1 ml-4 space-y-1 text-xs">
                    <li>• Built relationships with agricultural technology company</li>
                    <li>• Positioned as "Africa guy" for Locus AG's East Africa strategy</li>
                  </ul>
                </li>
                <li>
                  <strong>East Africa Expertise</strong>
                  <ul className="mt-1 ml-4 space-y-1 text-xs">
                    <li>• Personal Kenya background</li>
                    <li>• Uganda NARO relationship development (licensing underway)</li>
                  </ul>
                </li>
              </ul>
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">Unique Positioning</p>
                <p className="text-xs text-slate">
                  Combines quantitative/data science rigor from financial services + agricultural technology
                  commercialization + climate finance understanding + East Africa context + systems thinking
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Organizational Structure</h3>
            <div className="p-6 rounded-xl border-2 border-amber-500/30 bg-amber-50">
              <p className="text-sm font-bold text-amber-900 mb-3">[GAP: Critical Information Needed]</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Legal Status</p>
                  <ul className="space-y-1 text-xs text-amber-800">
                    <li>• Legal structure?</li>
                    <li>• Registration details?</li>
                    <li>• Year founded?</li>
                    <li>• Tax status?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Governance</p>
                  <ul className="space-y-1 text-xs text-amber-800">
                    <li>• Board of Directors?</li>
                    <li>• Advisory Board?</li>
                    <li>• Farmer representation?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Current Team</p>
                  <ul className="space-y-1 text-xs text-amber-800">
                    <li>• Full-time staff?</li>
                    <li>• Part-time/consultants?</li>
                    <li>• Organizational chart?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Track Record</p>
                  <ul className="space-y-1 text-xs text-amber-800">
                    <li>• Pilot activities conducted?</li>
                    <li>• Proof of concept data?</li>
                    <li>• Partnership milestones?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">HISAGEN's Integrated Model</h3>
            <div className="p-6 rounded-xl border border-secondary/20 bg-white">
              <p className="text-sm font-bold text-secondary mb-4">The Four Components Working Together</p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">1</span>
                  <p className="text-sm text-slate">Microbial Products reduce chemical dependency while maintaining yields</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">2</span>
                  <p className="text-sm text-slate">Soil Health Restoration builds carbon and biological function</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">3</span>
                  <p className="text-sm text-slate">Carbon Credits generate revenue from ecosystem services</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">4</span>
                  <p className="text-sm text-slate">Digital Marketplace connects stakeholders and enables efficient transactions</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-mist">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">What Makes This Different</p>
                <div className="grid gap-2 md:grid-cols-2 text-xs text-slate">
                  <div>• Integrated vs. single intervention</div>
                  <div>• Market-based vs. subsidy-dependent</div>
                  <div>• Technology-enabled vs. traditional extension</div>
                  <div>• Climate-positive vs. climate-neutral</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Budget Framework */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-parchment font-bold text-sm">6</span>
          <h2 className="text-2xl font-bold text-secondary uppercase tracking-[0.15em]">Budget Framework</h2>
        </div>

        <div className="p-8 rounded-2xl border-2 border-amber-500/30 bg-amber-50">
          <p className="text-sm font-bold text-amber-900 mb-4">[GAP: Complete Budget Development Needed]</p>
          <p className="text-sm text-amber-800 mb-6">
            Detailed budget to be developed in separate spreadsheet linked to organizational chart of accounts and
            specific funder requirements.
          </p>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900">High-Level Budget Categories:</p>
            <div className="grid gap-2 md:grid-cols-2">
              {[
                "Personnel Costs",
                "Microbial Products",
                "Soil Health & Regenerative Agriculture",
                "Carbon Project Development",
                "Digital Platform",
                "Training & Capacity Building",
                "Monitoring & Evaluation",
                "Operations & Administration",
                "Contingency"
              ].map((category, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white border border-amber-200">
                  <p className="text-sm text-amber-900">{category}</p>
                  <p className="text-xs text-amber-700 mt-1">$[XXX] - [GAP: Details needed]</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-amber-100 border-2 border-amber-300">
            <p className="text-lg font-bold text-amber-900">TOTAL PROJECT BUDGET: $[XXX,XXX]</p>
            <p className="text-xs text-amber-800 mt-2">
              Note: Budget narrative needed for each line item explaining calculation, necessity, and cost-effectiveness
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Next Steps: v0 → v1 Development</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 rounded-xl border-2 border-primary/20 bg-primary/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">Critical (Must Have)</p>
            <ul className="space-y-2 text-sm text-slate">
              <li>• SMART objectives with baselines and targets</li>
              <li>• Detailed implementation plan with timeline</li>
              <li>• M&E framework with indicators</li>
              <li>• Budget with narrative justification</li>
              <li>• Organizational legal/governance clarity</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-2 border-secondary/20 bg-secondary/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Important (Strengthen)</p>
            <ul className="space-y-2 text-sm text-slate">
              <li>• Statement of Need with Uganda-specific data</li>
              <li>• Partnership documentation and letters of support</li>
              <li>• Pilot results/proof of concept (when available)</li>
              <li>• Risk management plan</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-mist bg-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate/60 mb-3">Knowledge Capture</p>
            <p className="text-sm text-slate">
              Use [GAP] markers as questionnaire framework for knowledge capture sessions with client
            </p>
          </div>

          <div className="p-6 rounded-xl border border-mist bg-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate/60 mb-3">Funder Targeting</p>
            <p className="text-sm text-slate">
              Match v1 to specific funding opportunity requirements using Funder Alignment Matrix
            </p>
          </div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Related Documents</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/stage-1/funding/v0-concept-note"
            className="group p-6 rounded-xl border-2 border-secondary/20 bg-white hover:border-secondary hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Companion Doc</p>
            </div>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors mb-2">
              V0 Concept Note
            </h3>
            <p className="text-xs text-slate">Shorter 1-page overview for early-stage conversations</p>
          </Link>

          <Link
            href="/stage-1/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Overview</p>
            </div>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors mb-2">
              Stage 1 Funding Hub
            </h3>
            <p className="text-xs text-slate">All Stage 1 applications and funder landscape</p>
          </Link>

          <Link
            href="/knowledge-base"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-slate-400" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60">Evidence</p>
            </div>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors mb-2">
              Evidence Vault
            </h3>
            <p className="text-xs text-slate">Supporting documents and data</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
