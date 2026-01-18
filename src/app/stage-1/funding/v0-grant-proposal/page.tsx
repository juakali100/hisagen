import StageBreadcrumb from "../../../../components/StageBreadcrumb";
import Link from "next/link";

export default function V0GrantProposalPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="V1 Grant Proposal"
        trail={[
          { label: "Stage 1: Incubation", href: "/stage-1" },
          { label: "Funding Applications", href: "/stage-1/funding" },
          { label: "V1 Grant Proposal" }
        ]}
      />

      <section className="rounded-2xl border-2 border-primary/20 bg-primary/5 px-8 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
            V1 Proposal
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">January 17, 2026</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight">
          HISAGEN Grant Funding Proposal
        </h1>
        <p className="mt-4 text-base text-slate italic">
          High Impact Seed Application for Greener Environments
        </p>
        <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
          Foundation grant proposal with research-backed Statement of Need and full evidence citations.
          Designed to be tailored to specific funding opportunities with [GAP] markers for remaining stakeholder input.
        </p>
      </section>

      {/* Document Status */}
      <section className="mt-12 rounded-xl border-2 border-emerald-500/30 bg-emerald-50 p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-base font-bold text-emerald-900 mb-2">V1 Status - Research-Backed</h2>
            <p className="text-sm text-emerald-800 leading-relaxed mb-3">
              This version includes a <strong>fully-researched Statement of Need</strong> with 14 cited sources from
              UN agencies, World Bank, and Uganda government data. Evidence appendix provides full citations for
              due diligence review. Remaining [GAP] markers indicate stakeholder-specific information needed.
            </p>
            <div className="grid gap-2 md:grid-cols-2 text-xs text-emerald-700">
              <div>• Statement of Need: Research complete</div>
              <div>• Evidence Appendix: 14 sources cited</div>
              <div>• [GAP] markers: Stakeholder input needed</div>
              <div>• Ready for funder-specific customization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contents Navigation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Contents</h2>
        <div className="grid gap-2 md:grid-cols-2">
          {[
            { title: "1. Executive Summary", type: "main" },
            { title: "2. Statement of Need", type: "main" },
            { title: "3. Project Description", type: "main" },
            { title: "   → Climate Adaptation & Policy Alignment", type: "sub" },
            { title: "4. Organizational Information", type: "main" },
            { title: "5. Conclusion", type: "main" },
            { title: "6. Budget Framework", type: "main" },
            { title: "Appendix A: Evidence Base & Citations", type: "appendix" }
          ].map((item, idx) => (
            <div key={idx} className={`p-4 rounded-lg border bg-white hover:border-secondary/20 transition-colors ${
              item.type === "appendix" ? "border-slate-300 bg-slate-50" :
              item.type === "sub" ? "border-emerald-300 bg-emerald-50" : "border-mist"
            }`}>
              <p className={`text-sm font-bold ${
                item.type === "appendix" ? "text-slate-600" :
                item.type === "sub" ? "text-emerald-700" : "text-secondary"
              }`}>{item.title}</p>
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
            <div className="mt-4 p-4 rounded-lg bg-amber-100 border-2 border-amber-400">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Input Needed</span>
              </div>
              <ul className="space-y-1 text-sm text-amber-900">
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
            <div className="mt-4 p-4 rounded-lg bg-amber-100 border-2 border-amber-400">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Input Needed</span>
                <span className="text-xs font-bold text-amber-700">Solution Specifics</span>
              </div>
              <ul className="space-y-1 text-sm text-amber-900">
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
            <div className="mt-4 p-4 rounded-lg bg-amber-100 border-2 border-amber-400">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Input Needed</span>
                <span className="text-xs font-bold text-amber-700">Organizational Details (Critical for Funders)</span>
              </div>
              <ul className="space-y-1 text-sm text-amber-900">
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

        <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/5 space-y-8">
          {/* Opening Hook */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">The Challenge: A Nation's Agricultural Foundation at Risk</h3>
            <p className="text-base text-slate leading-relaxed mb-4">
              <strong className="text-secondary">46% of Uganda's land is now degraded</strong>, and the country loses
              $625 million annually in soil nutrients alone. For a nation where over 70% of the population depends on
              agriculture—more than 3.5 million family farms producing 80% of the country's food—this crisis threatens
              not just livelihoods but national food security.
            </p>
            <p className="text-base text-slate leading-relaxed">
              Uganda's smallholder farmers face a devastating convergence of soil degradation, economic vulnerability,
              climate disruption, and persistent inequities that demand urgent, integrated solutions.
            </p>
          </div>

          {/* Who Is Affected */}
          <div className="p-5 rounded-xl border-2 border-secondary/20 bg-secondary/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Who Is Affected</p>
            <div className="grid gap-4 md:grid-cols-4 text-center">
              <div>
                <p className="text-2xl font-bold text-secondary">3.5M+</p>
                <p className="text-xs text-slate">Family farms</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">70%</p>
                <p className="text-xs text-slate">Population in agriculture</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">1 ha</p>
                <p className="text-xs text-slate">Average farm size</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">~1M</p>
                <p className="text-xs text-slate">Acutely food insecure</p>
              </div>
            </div>
            <p className="text-xs text-slate/60 mt-3 text-center italic">Sources: FAO Uganda, UBOS 2024, IPC 2024</p>
          </div>

          {/* Four Pillars of Crisis */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Agricultural Degradation */}
            <div className="p-6 rounded-xl border border-mist bg-white">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">1. Soil & Agricultural Crisis</h4>
              <ul className="space-y-2 text-sm text-slate">
                <li>• <strong>46%</strong> of Uganda's land degraded (National LDN Report)</li>
                <li>• Losing <strong>5-12 tons</strong> of topsoil per hectare annually</li>
                <li>• Fertilizer use: <strong>2.5 kg/ha</strong> vs global average of 135 kg/ha</li>
                <li>• Annual nutrient loss valued at <strong>$625 million</strong></li>
              </ul>
              <p className="text-xs text-slate/60 mt-3 italic">Sources: ESAFF Uganda, AU Agenda 2063</p>
            </div>

            {/* Economic Vulnerability */}
            <div className="p-6 rounded-xl border border-mist bg-white">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">2. Economic Vulnerability</h4>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Fertilizer prices <strong>2.3x the 2020 average</strong></li>
                <li>• Inputs consume <strong>40-45%</strong> of production costs</li>
                <li>• Rural poverty rate: <strong>27%</strong> (vs 9% urban)</li>
                <li>• Crop growth <strong>2%</strong> vs population growth <strong>3.3%</strong></li>
              </ul>
              <p className="text-xs text-slate/60 mt-3 italic">Sources: World Bank, UBOS 2024</p>
            </div>

            {/* Climate Impacts */}
            <div className="p-6 rounded-xl border border-mist bg-white">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">3. Climate Disruption</h4>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Temperature up <strong>1.3°C</strong> since 1960s</li>
                <li>• Rainfall declining <strong>6mm per decade</strong></li>
                <li>• Less than <strong>1%</strong> of cultivated land irrigated</li>
                <li>• <strong>12%</strong> of population chronically food insecure</li>
              </ul>
              <p className="text-xs text-slate/60 mt-3 italic">Sources: FAO SCALA, IPC 2024</p>
            </div>

            {/* Equity Gap */}
            <div className="p-6 rounded-xl border border-mist bg-white">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">4. Gender & Youth Inequity</h4>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Women produce <strong>90%</strong> of food, yet lack land rights</li>
                <li>• Gender gap costs Uganda <strong>$67M annually</strong> (IFAD)</li>
                <li>• <strong>76%</strong> of population under 30 years old</li>
                <li>• Youth find farming unattractive → urban migration</li>
              </ul>
              <p className="text-xs text-slate/60 mt-3 italic">Sources: UN Women, IFAD, FAO Youth Strategy</p>
            </div>
          </div>

          {/* Root Causes */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate/60 mb-3">Underlying Root Causes</p>
            <div className="grid gap-3 md:grid-cols-3 text-sm text-slate">
              <div className="flex items-start gap-2">
                <span className="text-amber-600">→</span>
                <span>Decades of extractive monoculture farming depleting soil biology</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600">→</span>
                <span>Lack of affordable alternatives to expensive chemical inputs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600">→</span>
                <span>Limited value chain integration keeping farmers in poverty</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600">→</span>
                <span>No pathways for farmers to benefit from climate action</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600">→</span>
                <span>Technology and market access concentrated in urban areas</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600">→</span>
                <span>Youth excluded from agricultural entrepreneurship opportunities</span>
              </div>
            </div>
          </div>

          {/* Why Now */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Why This Matters Now</h3>
            <p className="text-sm text-slate leading-relaxed mb-4">
              A unique convergence of factors creates an unprecedented window of opportunity to transform this crisis into lasting change:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Uganda NARO Approval Imminent</p>
                <p className="text-xs text-emerald-800">License approval expected end 2025/early 2026 enables immediate market entry with proven microbial products</p>
              </div>
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Corporate Climate Commitments</p>
                <p className="text-xs text-emerald-800">Growing demand for nature-based carbon credits creates new income streams for farmers practicing regenerative agriculture</p>
              </div>
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Technology Partnership Ready</p>
                <p className="text-xs text-emerald-800">Locus AG partnership provides manufacturing equipment and products at cost, eliminating typical technology transfer barriers</p>
              </div>
              <div className="p-4 rounded-lg border border-emerald-600/30 bg-emerald-50">
                <p className="text-sm font-bold text-emerald-900 mb-2">✓ Digital Infrastructure Maturing</p>
                <p className="text-xs text-emerald-800">Mobile penetration and digital payment adoption make marketplace connectivity viable even in rural areas</p>
              </div>
            </div>
          </div>

          {/* The Problem is Solvable */}
          <div className="p-5 rounded-xl border-2 border-primary/20 bg-primary/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2">The Problem Is Solvable — And We Have Proof</p>
            <p className="text-sm text-slate leading-relaxed mb-4">
              This crisis is not intractable. The same smallholders managing 80% of Uganda's farmland have the potential
              to restore soil health, build climate resilience, and create sustainable livelihoods—if given access to
              the right tools, technology, and market connections. HISAGEN provides exactly this integrated solution.
            </p>
            <div className="p-4 rounded-lg bg-white border-2 border-emerald-400">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">NARO Field Trial Results (2025)</p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-emerald-700">+22.6%</p>
                  <p className="text-xs text-slate">Irish Potato yield improvement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-700">+17.7%</p>
                  <p className="text-xs text-slate">Sweet Potato yield improvement</p>
                </div>
              </div>
              <p className="text-[10px] text-slate/60 mt-2 text-center italic">
                Rhizolizer® biofertilizer trials across 4 regions under NARO/MAAIF oversight
              </p>
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
            <div className="p-4 rounded-lg bg-amber-100 border-2 border-amber-400">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Input Needed</span>
                <span className="text-xs font-bold text-amber-700">Goal Statement Refinement</span>
              </div>
              <ul className="space-y-1 text-sm text-amber-900">
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
                  <div className="mt-3 p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <p className="text-xs text-amber-900">Specific benefit-sharing percentages? Carbon rights structure?</p>
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
                  <div className="mt-3 p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <p className="text-xs text-amber-900">Target farmer count for Year 1? Distribution partner criteria?</p>
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
                  <div className="mt-3 p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <p className="text-xs text-amber-900">Verra VM0042 vs Gold Standard? MRV technology partners?</p>
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
                  <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <ul className="space-y-1 text-xs text-amber-900">
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
                  <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <ul className="space-y-1 text-xs text-amber-900">
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
                  <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <ul className="space-y-1 text-xs text-amber-900">
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
                  <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <ul className="space-y-1 text-xs text-amber-900">
                      <li>• Full NARO report with all crop data</li>
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
                  <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <ul className="space-y-1 text-xs text-amber-900">
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
                  <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <ul className="space-y-1 text-xs text-amber-900">
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
                  <div className="mt-3 p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <p className="text-xs text-amber-900">Formal MOU/contract status? IP arrangements?</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <p className="text-sm font-bold text-primary mb-2">Uganda NARO - Regulatory Partner</p>
                  <ul className="space-y-1 text-sm text-slate">
                    <li>• Government licensing and approval authority</li>
                    <li>• License approval expected end 2025/early 2026</li>
                    <li>• Potential for research collaboration</li>
                  </ul>
                  <div className="mt-3 p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                    </div>
                    <p className="text-xs text-amber-900">Formal agreement? Research collaboration details?</p>
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
          <div className="p-8 rounded-2xl border-2 border-amber-400 bg-amber-100">
            <h3 className="text-lg font-bold text-secondary mb-4">Monitoring & Evaluation</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Input Needed</span>
              <span className="text-sm font-bold text-amber-900">M&E Framework Required for V2</span>
            </div>
            <p className="text-sm text-amber-900 mb-4">
              Critical for any grant - needs comprehensive framework including:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 rounded-lg bg-white border border-amber-300">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Process Indicators</p>
                <ul className="space-y-1 text-xs text-amber-900">
                  <li>• Farmer enrollment tracking</li>
                  <li>• Training attendance metrics</li>
                  <li>• Product distribution monitoring</li>
                  <li>• Practice adoption rates</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-white border border-amber-300">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Outcome Indicators</p>
                <ul className="space-y-1 text-xs text-amber-900">
                  <li>• Yield changes (baseline + measurement)</li>
                  <li>• Income changes (attribution model)</li>
                  <li>• Carbon sequestration (verification)</li>
                  <li>• Soil health improvements</li>
                </ul>
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
                <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                  </div>
                  <p className="text-xs text-amber-900">Expected revenue per tCO2? Revenue share model? Market strategy?</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 2: Product Sales & Platform Fees</p>
                <p className="text-sm text-slate mb-2">
                  Biofertilizer/biopesticide sales margins and digital platform transaction fees.
                  <span className="text-xs text-slate/60 ml-1">(Begins Stage 1, scales Stage 2+)</span>
                </p>
                <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                  </div>
                  <p className="text-xs text-amber-900">Margin model? Volume projections? Transaction fee structure?</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 3: Technical Services</p>
                <p className="text-sm text-slate mb-2">
                  Consulting/advisory services and technology transfer to other organizations.
                  <span className="text-xs text-slate/60 ml-1">(Opportunistic from Stage 2+)</span>
                </p>
                <div className="p-3 rounded-lg bg-amber-100 border-2 border-amber-400">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
                  </div>
                  <p className="text-xs text-amber-900">Service revenue potential? Licensing opportunities?</p>
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

          {/* Climate Adaptation & National Policy Alignment */}
          <div className="p-8 rounded-2xl border-2 border-emerald-600/30 bg-emerald-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-900">Climate Adaptation & National Policy Alignment</h3>
                <p className="text-xs text-emerald-700">Alignment with Uganda's National Adaptation Plan for Agriculture (NAP-Ag)</p>
              </div>
            </div>

            {/* Policy Framework */}
            <div className="mb-6 p-5 rounded-xl bg-white border border-emerald-200">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-800 mb-3">Uganda's Climate Policy Framework</p>
              <p className="text-sm text-slate leading-relaxed mb-4">
                HISAGEN directly supports Uganda's national climate commitments and agricultural adaptation priorities,
                creating alignment at both regulatory (NARO) and policy (NAP-Ag) levels with the Government of Uganda.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-900">NAP-Ag (2018)</p>
                  <p className="text-[10px] text-emerald-800">National Adaptation Plan for Agriculture - Led by MAAIF</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-900">Updated NDC (2021)</p>
                  <p className="text-[10px] text-emerald-800">24.7% emissions reduction by 2030, agriculture priority sector</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-900">National Climate Change Act 2021</p>
                  <p className="text-[10px] text-emerald-800">Legal force to Paris Agreement commitments</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-900">CSA Program (2015-2025)</p>
                  <p className="text-[10px] text-emerald-800">Climate Smart Agriculture national program</p>
                </div>
              </div>
            </div>

            {/* NAP-Ag Priority Alignment */}
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-800 mb-4">NAP-Ag Priority Alignment</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-emerald-700 text-white">
                      <th className="p-3 text-left font-bold">NAP-Ag Priority</th>
                      <th className="p-3 text-left font-bold">HISAGEN Contribution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-200">
                    <tr className="bg-white">
                      <td className="p-3 text-slate font-medium">Soil health restoration</td>
                      <td className="p-3 text-slate">Biofertilizers rebuild soil biology; regenerative practices restore organic matter</td>
                    </tr>
                    <tr className="bg-emerald-50/50">
                      <td className="p-3 text-slate font-medium">Climate-resilient agriculture</td>
                      <td className="p-3 text-slate">Improved soil water retention; reduced chemical dependency; drought resilience</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 text-slate font-medium">Smallholder farmer support</td>
                      <td className="p-3 text-slate">Accessible technology; affordable inputs; diversified income streams</td>
                    </tr>
                    <tr className="bg-emerald-50/50">
                      <td className="p-3 text-slate font-medium">Gender-responsive adaptation</td>
                      <td className="p-3 text-slate">Women farmers priority; inclusive design; equitable benefit sharing</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 text-slate font-medium">Youth employment in agriculture</td>
                      <td className="p-3 text-slate">Digital marketplace; tech-enabled farming; entrepreneurship pathways</td>
                    </tr>
                    <tr className="bg-emerald-50/50">
                      <td className="p-3 text-slate font-medium">Carbon sequestration & MRV</td>
                      <td className="p-3 text-slate">Carbon credit generation; verified emissions reductions; farmer climate finance access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Multi-Level Resilience */}
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-800 mb-4">Multi-Level Resilience Building</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-xl bg-white border border-emerald-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Farm-Level Resilience</p>
                  <ul className="space-y-1 text-xs text-slate">
                    <li>• Soil biology restoration improves water retention</li>
                    <li>• Reduced dependency on imported chemical inputs</li>
                    <li>• Enhanced crop productivity under variable conditions</li>
                    <li>• Natural pest suppression reduces crop losses</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-white border border-emerald-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Household-Level Resilience</p>
                  <ul className="space-y-1 text-xs text-slate">
                    <li>• Diversified income (farming + carbon credits)</li>
                    <li>• Reduced input costs through biological alternatives</li>
                    <li>• Climate finance access previously unavailable</li>
                    <li>• Digital platform access to market information</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-white border border-emerald-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Community-Level Resilience</p>
                  <ul className="space-y-1 text-xs text-slate">
                    <li>• Collective carbon project participation</li>
                    <li>• Knowledge sharing and peer learning</li>
                    <li>• Local value chain development</li>
                    <li>• Youth employment in agricultural technology</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-white border border-emerald-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">System-Level Resilience</p>
                  <ul className="space-y-1 text-xs text-slate">
                    <li>• National food security contribution</li>
                    <li>• NDC emissions reduction support</li>
                    <li>• Scalable model for regional replication</li>
                    <li>• Data for evidence-based policy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NDC Contribution */}
            <div className="p-5 rounded-xl bg-emerald-100 border-2 border-emerald-300">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900 mb-3">Contribution to Uganda's NDC Targets</p>
              <div className="grid gap-4 md:grid-cols-3 text-center">
                <div>
                  <p className="text-2xl font-bold text-emerald-800">24.7%</p>
                  <p className="text-[10px] text-emerald-700 uppercase tracking-wider">Uganda's 2030 emissions reduction target</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-800">95%</p>
                  <p className="text-[10px] text-emerald-700 uppercase tracking-wider">More soil carbon with CSA practices*</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-800">20-40%</p>
                  <p className="text-[10px] text-emerald-700 uppercase tracking-wider">Soil organic carbon increase potential*</p>
                </div>
              </div>
              <p className="text-[10px] text-emerald-600 mt-3 text-center italic">
                *Research from Uganda Climate-Smart Villages showing CSA intervention impacts (MDPI Climate 2020; Research on agroforestry systems)
              </p>
            </div>

            {/* Dual Government Alignment */}
            <div className="mt-6 p-4 rounded-xl bg-white border-2 border-emerald-400">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm font-bold text-emerald-900">Dual Government Alignment</p>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                HISAGEN is uniquely positioned with <strong>regulatory alignment</strong> (NARO license approval for microbial products)
                AND <strong>policy alignment</strong> (NAP-Ag, NDC, Climate Change Act priorities). This dual alignment
                demonstrates that HISAGEN is working WITH government priorities, not around them—strengthening both
                implementation viability and long-term sustainability.
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
            <div className="mt-4 p-4 rounded-lg bg-amber-100 border-2 border-amber-400">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded">Input Needed</span>
              </div>
              <p className="text-xs text-amber-900">Refine these statements with client confirmation</p>
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
            <div className="p-6 rounded-xl border-2 border-amber-400 bg-amber-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Input Needed</span>
                <span className="text-sm font-bold text-amber-900">Critical for Funder Due Diligence</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Legal Status</p>
                  <ul className="space-y-1 text-xs text-amber-900">
                    <li>• Legal structure? (NGO, social enterprise, company?)</li>
                    <li>• Registration details?</li>
                    <li>• Year founded?</li>
                    <li>• Tax status?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Governance</p>
                  <ul className="space-y-1 text-xs text-amber-900">
                    <li>• Board of Directors?</li>
                    <li>• Advisory Board?</li>
                    <li>• Farmer representation?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Current Team</p>
                  <ul className="space-y-1 text-xs text-amber-900">
                    <li>• Full-time staff?</li>
                    <li>• Part-time/consultants?</li>
                    <li>• Organizational chart?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 mb-2">Track Record</p>
                  <ul className="space-y-1 text-xs text-amber-900">
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

        <div className="p-8 rounded-2xl border-2 border-amber-400 bg-amber-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Input Needed</span>
            <span className="text-sm font-bold text-amber-900">Complete Budget Development Required for V2</span>
          </div>
          <p className="text-sm text-amber-900 mb-6">
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

      {/* V2 Development Summary */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">V2 Development Summary</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        {/* Gap Count Summary */}
        <div className="mb-6 p-6 rounded-xl border-2 border-amber-400 bg-amber-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">Client Review Guide</span>
            <span className="text-sm font-bold text-amber-900">20+ Input Items Marked Throughout Proposal</span>
          </div>
          <p className="text-sm text-amber-900 mb-4">
            Look for the <span className="inline-flex items-center px-1.5 py-0.5 bg-amber-500 text-white text-[8px] font-bold uppercase tracking-widest rounded mx-1">Input Needed</span>
            boxes throughout this proposal. Each marks a specific question or piece of information needed from Keir to complete V2.
          </p>
          <div className="grid gap-3 md:grid-cols-4 text-center">
            <div className="p-3 rounded-lg bg-white border border-amber-300">
              <p className="text-2xl font-bold text-amber-700">5</p>
              <p className="text-[10px] text-amber-900 uppercase tracking-wider">Exec Summary Items</p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-amber-300">
              <p className="text-2xl font-bold text-amber-700">8</p>
              <p className="text-[10px] text-amber-900 uppercase tracking-wider">Objectives & Activities</p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-amber-300">
              <p className="text-2xl font-bold text-amber-700">4</p>
              <p className="text-[10px] text-amber-900 uppercase tracking-wider">Org & Partnerships</p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-amber-300">
              <p className="text-2xl font-bold text-amber-700">3</p>
              <p className="text-[10px] text-amber-900 uppercase tracking-wider">Budget & M&E</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 rounded-xl border-2 border-primary/20 bg-primary/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">Critical (Must Have for V2)</p>
            <ul className="space-y-2 text-sm text-slate">
              <li>• SMART objectives with baselines and targets</li>
              <li>• Detailed implementation plan with timeline</li>
              <li>• M&E framework with indicators</li>
              <li>• Budget with narrative justification</li>
              <li>• Organizational legal/governance clarity</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-2 border-emerald-500/20 bg-emerald-50">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 mb-3">Completed in V1</p>
            <ul className="space-y-2 text-sm text-emerald-800">
              <li>✓ Statement of Need with Uganda-specific data</li>
              <li>✓ Evidence base with 14 cited sources</li>
              <li>✓ NARO yield data (+22.6% potatoes, +17.7% sweet potatoes)</li>
              <li>✓ Four pillars: Soil, Economic, Climate, Equity</li>
              <li>✓ NAP-Ag policy alignment section</li>
              <li>✓ Full source citations appendix</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-2 border-secondary/20 bg-secondary/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Important (Strengthen in V2)</p>
            <ul className="space-y-2 text-sm text-slate">
              <li>• Partnership documentation and letters of support</li>
              <li>• Pilot results/proof of concept (when available)</li>
              <li>• Risk management plan</li>
              <li>• Theory of Change / Logic Model diagram</li>
              <li>• Executive Summary (write last)</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-2 border-amber-400 bg-amber-100">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700 mb-3">Client Knowledge Capture Session</p>
            <p className="text-sm text-amber-900">
              Walk through this proposal with Keir using the <span className="font-bold">Input Needed</span> boxes as the questionnaire.
              Capture answers directly to build V2.
            </p>
          </div>
        </div>
      </section>

      {/* Appendix A: Evidence Base */}
      <section className="mt-16 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 text-parchment font-bold text-sm">A</span>
          <h2 className="text-2xl font-bold text-secondary uppercase tracking-[0.15em]">Appendix A: Evidence Base & Source Citations</h2>
        </div>

        <div className="p-8 rounded-2xl border-2 border-slate-300 bg-slate-50 space-y-8">
          <div>
            <p className="text-sm text-slate leading-relaxed mb-4">
              This appendix provides full citations and key data extracts for all statistics referenced in the Statement of Need.
              All sources are from reputable international organizations, government bodies, and peer-reviewed research.
              Access dates noted for online sources.
            </p>
          </div>

          {/* A.1 Soil & Agricultural Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary border-b-2 border-secondary/20 pb-2">A.1 Soil & Agricultural Degradation</h3>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">1</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">Uganda National Land Degradation Neutrality Target Setting Report</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> Government of Uganda / UNCCD<br/>
                    <strong>Key Data:</strong> "46% of Uganda's land is degraded"<br/>
                    <strong>Context:</strong> Official government report for UN Convention to Combat Desertification
                  </p>
                  <div className="mt-2 p-3 rounded bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate italic">
                      "With 46% of Uganda's land degraded... urgent action is required to reverse this trend."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">2</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">African Union Agenda 2063 - Report on Land Degradation</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> African Union<br/>
                    <strong>Key Data:</strong> "The region [is] losing 5 to 12 tons of topsoil per hectare annually"<br/>
                    <strong>Scope:</strong> East Africa regional assessment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">3</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">ESAFF Uganda - World Soil Day 2024 Statement</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> Eastern and Southern Africa Small-scale Farmers' Forum (ESAFF Uganda)<br/>
                    <strong>Date:</strong> December 5, 2024<br/>
                    <strong>URL:</strong> <span className="text-primary">esaffuganda.org/post/soil-health-our-wealth</span><br/>
                    <strong>Access Date:</strong> January 2026
                  </p>
                  <div className="mt-2 p-3 rounded bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate italic">
                      "Small-scale farmers, who manage over 80% of Uganda's farmland, face declining soil fertility that undermines their productivity. Uganda's annual nutrient loss, valued at $625 million, and fertilizer use at only 2.5 kg/ha/year compared to the global average of 135 kg/ha/year, are stark indicators of this crisis."
                    </p>
                  </div>
                  <p className="text-xs text-slate/60 mt-2">
                    <strong>Note:</strong> ESAFF is a farmer-led advocacy organization representing small-scale farmers across 16 African countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* A.2 Economic Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary border-b-2 border-secondary/20 pb-2">A.2 Economic Vulnerability</h3>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">4</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">World Bank - Fertilizer Price Shocks in Smallholder Agriculture</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> World Bank Group<br/>
                    <strong>Document ID:</strong> IDU173affa201e3db14e931a1d4143913f4f7024<br/>
                    <strong>Key Data:</strong> "Fertilizer prices have decreased but remain over 2.3 times the average 2020 price"<br/>
                    <strong>Scope:</strong> Cross-country evidence from high-frequency phone surveys in Sub-Saharan Africa
                  </p>
                  <div className="mt-2 p-3 rounded bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate italic">
                      "For some farmers, fertilizers take up 40-45% of their production costs... Farmers have adopted various coping mechanisms in response to high fertilizer prices, including reducing the quantity used, applying it to smaller areas."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">5</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">Uganda Bureau of Statistics (UBOS) 2024</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> Government of Uganda - Uganda Bureau of Statistics<br/>
                    <strong>Key Data:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "Crop output grows at approximately 2 percent annually, below the 3.3 percent population growth rate"</li>
                    <li>• "About 68% of Uganda's working population is employed in agriculture"</li>
                    <li>• Rural poverty: 27% vs urban poverty: 9%</li>
                  </ul>
                  <p className="text-xs text-slate/60 mt-2">
                    <strong>Note:</strong> UBOS is Uganda's official statistical authority.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">6</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">FAO - Uganda at a Glance</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> Food and Agriculture Organization of the United Nations<br/>
                    <strong>URL:</strong> <span className="text-primary">fao.org/uganda/our-office/uganda-at-a-glance</span><br/>
                    <strong>Key Data:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "More than 70% of people in Uganda work in agriculture"</li>
                    <li>• "The country has more than three and a half million family farms"</li>
                    <li>• "Many of its smallholders are among the poorest people in the world"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">7</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">FAO - The Smallholder Farmers of Uganda</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> FAO Family Farming Knowledge Platform<br/>
                    <strong>Document ID:</strong> c/1629961<br/>
                    <strong>Key Data:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "Smallholder farmers... responsible for 80% of the country's agricultural output"</li>
                    <li>• "Represent almost the totality (89%) of Ugandan farmers"</li>
                    <li>• "Average size of a smallholder farm in Uganda is 1 hectare"</li>
                    <li>• "Almost 60% of smallholder farmer income is generated on-farm"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* A.3 Climate Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary border-b-2 border-secondary/20 pb-2">A.3 Climate Disruption</h3>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">8</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">FAO SCALA - Uganda Country Profile</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> FAO Scaling up Climate Ambition on Land Use and Agriculture (SCALA)<br/>
                    <strong>URL:</strong> <span className="text-primary">fao.org/in-action/scala/countries/uganda</span><br/>
                    <strong>Key Data:</strong>
                  </p>
                  <div className="mt-2 p-3 rounded bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate italic">
                      "Uganda is becoming hotter and drier, as average temperatures have increased by 1.3°C since the 1960s while average monthly rainfall is currently decreasing by approximately 6.0 mm with each passing decade."
                    </p>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "Uganda's agricultural systems are climate dependent, relying heavily on rain-fed agriculture"</li>
                    <li>• "Less than 1% of cultivated land is irrigated"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">9</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">Integrated Food Security Phase Classification (IPC) 2024</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> IPC Global Partners (FAO, WFP, FEWS NET, etc.)<br/>
                    <strong>Year:</strong> 2024<br/>
                    <strong>Key Data:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "12 percent of the population remains chronically food insecure"</li>
                    <li>• "Nearly one million people are acutely food insecure"</li>
                    <li>• Most affected: Karamoja, Teso, and Acholi regions</li>
                  </ul>
                  <p className="text-xs text-slate/60 mt-2">
                    <strong>Note:</strong> IPC is the global standard for food security classification, used by UN agencies and governments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* A.4 Gender & Youth Equity Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary border-b-2 border-secondary/20 pb-2">A.4 Gender & Youth Inequity</h3>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">10</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">International Fund for Agricultural Development (IFAD) - Gender Gap in Agriculture</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> IFAD<br/>
                    <strong>Key Data:</strong> "Uganda loses approximately USD 67 million annually due to the gender gap in agriculture"
                  </p>
                  <p className="text-xs text-slate/60 mt-2">
                    <strong>Note:</strong> IFAD is a UN specialized agency focused on rural poverty reduction.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">11</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">UN Women Uganda - Women in Agriculture</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> UN Women Africa<br/>
                    <strong>Event:</strong> Source of the Nile Women in Agribusiness Summit (January 2024)<br/>
                    <strong>Key Data:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "Women are critical to agriculture in Uganda, contributing about 90 percent of the nation's food"</li>
                    <li>• "Women constitute more than half of the country's population and 76% of the agricultural workforce"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">12</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">ESAFF Uganda - Women's Land Rights Report</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> ESAFF Uganda<br/>
                    <strong>Title:</strong> "Small-Scale Farmers' Perspective on Women Land Rights"<br/>
                    <strong>Launch:</strong> 6th Annual Women in Agriculture Conference (October 15, 2024, Mbale City)<br/>
                    <strong>Scope:</strong> Data from 17 districts
                  </p>
                  <div className="mt-2 p-3 rounded bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate italic">
                      "Women smallholder farmers in Uganda face limited access to finance due to a lack of land titles... legal reforms, gender-responsive financial products, and increased decision-making roles [are needed] to empower these women."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">13</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">FAO - National Strategy for Youth Employment in Agriculture (NSYEA)</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> FAO / Government of Uganda - Ministry of Agriculture, Animal Industry and Fisheries (MAAIF)<br/>
                    <strong>URL:</strong> <span className="text-primary">fao.org/rural-employment/resources/detail/en/c/1069622/</span><br/>
                    <strong>Key Data:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "76 percent of the population is below 30 years"</li>
                    <li>• "Annual population growth rate is among the highest in the world (3 percent)"</li>
                    <li>• "Up to 95 percent of youth are employed informally"</li>
                    <li>• "More than 30 percent are in subsistence agriculture"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-white bg-secondary px-2 py-1 rounded">14</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">Economic Policy Research Centre (EPRC) Uganda - Youth in Agriculture</p>
                  <p className="text-xs text-slate mt-1">
                    <strong>Publisher:</strong> EPRC Uganda<br/>
                    <strong>Publication:</strong> "To Farm or Not to Farm: Challenges and Prospects of Youth Employment in Agriculture in Uganda"<br/>
                    <strong>Key Data:</strong>
                  </p>
                  <div className="mt-2 p-3 rounded bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate italic">
                      "Despite the bulk youth employment in agriculture, less than 5 percent of those in agriculture are in wage-paying jobs. The majority are engaged as subsistence family workers with no wages accruing to them."
                    </p>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate ml-4">
                    <li>• "Youth account for 60% of the unemployed in Uganda"</li>
                    <li>• "Three quarters of working youth are in vulnerable employment"</li>
                    <li>• "Smallholder farming is frequently associated with low income, intensive labor and an unfavorable working environment, which explains why the majority of Ugandan youth find the sector unattractive"</li>
                  </ul>
                  <p className="text-xs text-slate/60 mt-2">
                    <strong>Note:</strong> EPRC is Uganda's leading independent policy research institution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary border-b-2 border-secondary/20 pb-2">A.5 Quick Reference: Key Statistics Summary</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-secondary text-parchment">
                    <th className="p-3 text-left font-bold">Statistic</th>
                    <th className="p-3 text-left font-bold">Value</th>
                    <th className="p-3 text-left font-bold">Primary Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Land degradation</td>
                    <td className="p-3 text-slate font-bold">46%</td>
                    <td className="p-3 text-slate">Uganda National LDN Report</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Annual nutrient loss</td>
                    <td className="p-3 text-slate font-bold">$625 million</td>
                    <td className="p-3 text-slate">ESAFF Uganda</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Topsoil loss (annual)</td>
                    <td className="p-3 text-slate font-bold">5-12 tons/ha</td>
                    <td className="p-3 text-slate">AU Agenda 2063</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Fertilizer use (Uganda)</td>
                    <td className="p-3 text-slate font-bold">2.5 kg/ha</td>
                    <td className="p-3 text-slate">ESAFF Uganda</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Fertilizer use (global avg)</td>
                    <td className="p-3 text-slate font-bold">135 kg/ha</td>
                    <td className="p-3 text-slate">ESAFF Uganda</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Population in agriculture</td>
                    <td className="p-3 text-slate font-bold">70%+</td>
                    <td className="p-3 text-slate">FAO Uganda</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Family farms</td>
                    <td className="p-3 text-slate font-bold">3.5 million+</td>
                    <td className="p-3 text-slate">FAO Uganda</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Rural poverty rate</td>
                    <td className="p-3 text-slate font-bold">27%</td>
                    <td className="p-3 text-slate">UBOS 2024</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Fertilizer prices vs 2020</td>
                    <td className="p-3 text-slate font-bold">2.3x higher</td>
                    <td className="p-3 text-slate">World Bank</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Temperature increase</td>
                    <td className="p-3 text-slate font-bold">+1.3°C since 1960s</td>
                    <td className="p-3 text-slate">FAO SCALA</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Irrigated farmland</td>
                    <td className="p-3 text-slate font-bold">&lt;1%</td>
                    <td className="p-3 text-slate">FAO SCALA</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Acutely food insecure</td>
                    <td className="p-3 text-slate font-bold">~1 million</td>
                    <td className="p-3 text-slate">IPC 2024</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Women's food contribution</td>
                    <td className="p-3 text-slate font-bold">90%</td>
                    <td className="p-3 text-slate">UN Women</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Gender gap cost</td>
                    <td className="p-3 text-slate font-bold">$67M annually</td>
                    <td className="p-3 text-slate">IFAD</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-slate">Population under 30</td>
                    <td className="p-3 text-slate font-bold">76%</td>
                    <td className="p-3 text-slate">FAO/MAAIF NSYEA</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-slate">Youth unemployed share</td>
                    <td className="p-3 text-slate font-bold">60% of unemployed</td>
                    <td className="p-3 text-slate">EPRC Uganda</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Source Credibility Note */}
          <div className="p-5 rounded-xl bg-primary/5 border-2 border-primary/20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">Source Credibility Statement</p>
            <p className="text-sm text-slate leading-relaxed mb-3">
              All statistics in this proposal are drawn from authoritative sources:
            </p>
            <div className="grid gap-3 md:grid-cols-2 text-xs text-slate">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>UN Agencies:</strong> FAO, UN Women, IFAD, IPC</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Government:</strong> UBOS, MAAIF, Uganda LDN Reports</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Multilateral:</strong> World Bank, African Union</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Research:</strong> EPRC Uganda (leading policy institute)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Civil Society:</strong> ESAFF Uganda (farmer-led, 16-country network)</span>
              </div>
            </div>
            <p className="text-xs text-slate/60 mt-4 italic">
              All online sources accessed January 2026. Full URLs and document references available upon request.
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
