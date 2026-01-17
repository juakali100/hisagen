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

          {/* Objectives Framework */}
          <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
            <h3 className="text-lg font-bold text-secondary mb-4">Objectives & Outcomes</h3>
            <p className="text-sm text-slate mb-4">
              Using the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound), HISAGEN will achieve:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Agricultural Productivity",
                  desc: "Increase crop yields for participating farmers through biofertilizer application"
                },
                {
                  title: "Soil Health & Regenerative Practice Adoption",
                  desc: "Improve soil health through regenerative agriculture practices"
                },
                {
                  title: "Carbon Credit Generation",
                  desc: "Generate verified carbon credits from project activities"
                },
                {
                  title: "Farmer Income Increase",
                  desc: "Increase farmer household income through multiple revenue streams"
                },
                {
                  title: "Digital Platform Enrollment",
                  desc: "Enroll farmers in digital marketplace platform"
                }
              ].map((obj, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-mist bg-white">
                  <p className="text-sm font-bold text-secondary mb-2">Objective {idx + 1}: {obj.title}</p>
                  <p className="text-sm text-slate mb-3">{obj.desc}</p>
                  <div className="p-3 rounded bg-amber-50 border border-amber-200">
                    <p className="text-xs text-amber-800">[GAP: SMART metrics needed - baseline, target, timeline, indicators]</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Methods */}
          <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/5">
            <h3 className="text-lg font-bold text-secondary mb-4">Activities & Methods</h3>
            <p className="text-sm text-slate mb-6">
              HISAGEN's implementation approach integrates four complementary components:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Component 1: Microbial Product Distribution",
                  desc: "Provide biofertilizers and biopesticides to participating farmers",
                  gaps: ["Production method?", "Distribution model?", "Pricing structure?", "Quality control?"]
                },
                {
                  title: "Component 2: Soil Health & Regenerative Agriculture Training",
                  desc: "Train farmers in regenerative agriculture practices to restore soil health",
                  gaps: ["Which practices?", "Training approach?", "Adoption support?", "Timeline to results?"]
                },
                {
                  title: "Component 3: Carbon Credit Development",
                  desc: "Develop verified carbon credits from soil health improvements",
                  gaps: ["Carbon standard?", "Methodology?", "Monitoring approach?", "Revenue share model?"]
                },
                {
                  title: "Component 4: Digital Marketplace Platform",
                  desc: "Provide digital platform connecting farmers, inputs, buyers, and carbon purchasers",
                  gaps: ["Platform features?", "Technology stack?", "Accessibility for low-literacy?", "Development status?"]
                }
              ].map((comp, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-mist bg-white">
                  <h4 className="text-sm font-bold text-secondary mb-2">{comp.title}</h4>
                  <p className="text-sm text-slate mb-4">{comp.desc}</p>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">[GAP: Details Needed]</p>
                    <ul className="space-y-1">
                      {comp.gaps.map((gap, i) => (
                        <li key={i} className="text-xs text-slate">• {gap}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 1: Carbon Credit Sales</p>
                <p className="text-sm text-slate mb-2">
                  Ongoing revenue from soil carbon sequestration with majority share to farmers
                </p>
                <div className="p-3 rounded bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800">[GAP: Expected revenue per tCO2? Revenue share model? Market strategy?]</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 2: Product Sales & Platform Fees</p>
                <p className="text-sm text-slate mb-2">
                  Biofertilizer/biopesticide sales margins and digital platform transaction fees
                </p>
                <div className="p-3 rounded bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800">[GAP: Margin model? Volume projections? Transaction fee structure?]</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Revenue Stream 3: Technical Services</p>
                <p className="text-sm text-slate mb-2">
                  Consulting/advisory services and technology transfer to other organizations
                </p>
                <div className="p-3 rounded bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800">[GAP: Service revenue potential? Licensing opportunities?]</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Transition Timeline</p>
              <div className="space-y-2 text-sm text-slate">
                <p><strong>Year 1 (Grant-funded):</strong> Establish systems, enroll farmers, implement practices</p>
                <p><strong>Year 2 (Transition):</strong> Early carbon revenue beginning, product cost-recovery improving</p>
                <p><strong>Year 3+ (Sustainable):</strong> Carbon revenue maturing, product sales self-sustaining, platform fees growing</p>
              </div>
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
