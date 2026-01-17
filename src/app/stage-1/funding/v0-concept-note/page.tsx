import StageBreadcrumb from "../../../../components/StageBreadcrumb";
import Link from "next/link";

export default function V0ConceptNotePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="V0 Concept Note"
        trail={[
          { label: "Stage 1: Incubation", href: "/stage-1" },
          { label: "Funding Applications", href: "/stage-1/funding" },
          { label: "V0 Concept Note" }
        ]}
      />

      <section className="rounded-2xl border-2 border-secondary/20 bg-secondary/5 px-8 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full bg-secondary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-secondary">
            1-Page Concept Note
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">November 2025</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight">
          HISAGEN: Climate-Smart Agriculture for Smallholder Farmers in East Africa
        </h1>
        <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
          Integrated platform combining microbial biofertilizers, soil carbon markets, and digital farmer
          connectivity to make regenerative agriculture profitable and accessible at scale.
        </p>
      </section>

      {/* The Opportunity */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">The Opportunity</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-base text-slate leading-relaxed mb-4">
            Smallholder farmers in East Africa face compounding challenges: degraded soils, climate shocks, and
            limited access to agricultural inputs. Yet they farm 80% of the region's agricultural land and are key
            to both food security and climate solutions. HISAGEN offers an integrated platform that makes
            regenerative agriculture profitable and accessible at scale.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">What We Do</h2>
        <p className="text-base text-slate leading-relaxed mb-6">
          HISAGEN combines three proven technologies into a unified digital platform:
        </p>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">1. Microbial Biofertilizers</h3>
            <p className="text-sm text-slate leading-relaxed">
              Cost-effective soil health products (partnership with Locus AG, proven US market leader)
            </p>
          </div>
          <div className="p-6 rounded-xl border-2 border-secondary/30 bg-secondary/5">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">2. Soil Carbon Markets</h3>
            <p className="text-sm text-slate leading-relaxed">
              Revenue from regenerative practices via verified carbon credits
            </p>
          </div>
          <div className="p-6 rounded-xl border-2 border-mist bg-parchment/10">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink mb-3">3. Digital Farmer Platform</h3>
            <p className="text-sm text-slate leading-relaxed">
              Mobile app connecting farmers to inputs, markets, knowledge, and carbon finance
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl border-2 border-secondary/20 bg-white">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">The Model</p>
          <p className="text-base text-slate leading-relaxed">
            Farmers adopt regenerative practices → Improve yields and soil health → Generate carbon credits →
            Earn additional income → Reinvest in sustainable inputs → Create positive cycle
          </p>
        </div>
      </section>

      {/* The Impact */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">The Impact</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-xl border border-mist bg-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-emerald-600" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">Environmental</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li>• Soil carbon sequestration (targeting [GAP: X] tCO2e per hectare annually)</li>
              <li>• Reduced chemical fertilizer dependency (30-50% reduction)</li>
              <li>• Enhanced climate resilience and water retention</li>
              <li>• Biodiversity restoration through regenerative practices</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-mist bg-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-800">Economic</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li>• Increased farmer income ([GAP: X]% yield improvement + carbon revenue)</li>
              <li>• Reduced input costs (biofertilizers 40-60% cheaper than chemical alternatives)</li>
              <li>• Market access through digital platform</li>
              <li>• Scalable business model reaching financial sustainability</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-mist bg-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-amber-600" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">Social</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li>• Empowering smallholder farmers (majority women, youth)</li>
              <li>• Food security improvements</li>
              <li>• Community-level capacity building</li>
              <li>• Knowledge transfer and peer learning networks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Target Scale */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Target Scale</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 mb-2">Phase 1 (Years 1-2)</p>
            <p className="text-base text-slate">
              [GAP: X] farmers across [GAP: X] hectares in Uganda
            </p>
          </div>
          <div className="p-6 rounded-xl border-2 border-secondary/30 bg-secondary/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 2 (Years 3-5)</p>
            <p className="text-base text-slate">
              Scale to [GAP: X] farmers across East Africa
            </p>
          </div>
          <div className="p-6 rounded-xl border-2 border-mist bg-parchment/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60 mb-2">Long-term Vision</p>
            <p className="text-base text-slate">
              Platform serving 100,000+ smallholder farmers
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Why Now</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-white">
            <h3 className="text-base font-bold text-secondary mb-4 uppercase tracking-[0.15em]">Market Convergence</h3>
            <ul className="space-y-3 text-sm text-slate">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Proven biofertilizer technology ready for African markets (Locus AG partnership)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Carbon markets maturing with clear methodologies for smallholder agriculture</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Mobile penetration enabling digital platform adoption</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Climate urgency creating funding and market opportunities</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
            <h3 className="text-base font-bold text-primary mb-4 uppercase tracking-[0.15em]">Strategic Advantages</h3>
            <ul className="space-y-3 text-sm text-slate">
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">→</span>
                <span>Partnership with Locus AG (US market leader, proven products)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">→</span>
                <span>Uganda NARO research collaboration (local validation)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">→</span>
                <span>First-mover in integrated platform approach (biofertilizers + carbon + digital)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">→</span>
                <span>Experienced team with on-ground East Africa expertise</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Business Model */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">The Business Model</h2>

        <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/10">
          <h3 className="text-base font-bold text-secondary mb-4 uppercase tracking-[0.15em]">Revenue Streams</h3>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="flex gap-3">
              <span className="text-secondary font-bold">1.</span>
              <span className="text-sm text-slate">Carbon credit sales (farmers receive majority share)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">2.</span>
              <span className="text-sm text-slate">Platform services and digital marketplace</span>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">3.</span>
              <span className="text-sm text-slate">Premium product sales and partnerships</span>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">4.</span>
              <span className="text-sm text-slate">[GAP: Long-term revenue strategy detail needed]</span>
            </div>
          </div>

          <div className="pt-4 border-t border-mist">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Path to Sustainability</p>
            <p className="text-sm text-slate">
              Transition from grant funding to revenue-generating social enterprise within [GAP: X] years
              through carbon markets and platform services.
            </p>
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">What We Need</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
            <h3 className="text-base font-bold text-primary mb-4 uppercase tracking-[0.15em]">Funding Requirement</h3>
            <p className="text-2xl font-bold text-secondary mb-2">[GAP: Specific amount for Phase 1]</p>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/60">Use of Funds</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Pilot implementation and farmer onboarding ([GAP: %])</li>
                <li>• Platform development and technology integration ([GAP: %])</li>
                <li>• Research and impact verification ([GAP: %])</li>
                <li>• Team and operational capacity ([GAP: %])</li>
                <li>• Carbon credit methodology and certification ([GAP: %])</li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-white">
            <h3 className="text-base font-bold text-secondary mb-4 uppercase tracking-[0.15em]">Expected Outcomes</h3>
            <ul className="space-y-3 text-sm text-slate">
              <li className="flex gap-3">
                <span className="text-secondary/30 font-bold">→</span>
                <span>Proof of concept with measurable yield, income, and carbon impacts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary/30 font-bold">→</span>
                <span>Validated business model ready for scale</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary/30 font-bold">→</span>
                <span>Platform MVP demonstrating user adoption and engagement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary/30 font-bold">→</span>
                <span>Research publications establishing evidence base</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Leadership */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Project Leadership</h2>

        <div className="p-8 rounded-2xl border-2 border-mist bg-parchment/5">
          <div className="mb-6">
            <h3 className="text-base font-bold text-secondary mb-2">Keir A-B, Founder</h3>
            <p className="text-sm text-slate italic">[GAP: Brief bio - technical background, relevant experience, East Africa expertise]</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Strategic Partnerships</p>
            <ul className="space-y-2 text-sm text-slate">
              <li>• <strong>Locus AG</strong> - Biofertilizer products and technical support</li>
              <li>• <strong>Uganda NARO</strong> - Research validation and knowledge transfer</li>
              <li>• [GAP: Other key partners]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Next Steps</h2>

        <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-secondary/5">
          <p className="text-base text-slate leading-relaxed mb-4">
            We are seeking funding partners aligned with:
          </p>
          <div className="grid gap-3 md:grid-cols-2 mb-6">
            <div className="flex gap-3 items-center">
              <span className="text-secondary/30">•</span>
              <span className="text-sm text-slate">Climate-smart agriculture in Africa</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-secondary/30">•</span>
              <span className="text-sm text-slate">Smallholder farmer empowerment</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-secondary/30">•</span>
              <span className="text-sm text-slate">Scalable technology platforms</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-secondary/30">•</span>
              <span className="text-sm text-slate">Carbon market innovation</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-secondary/30">•</span>
              <span className="text-sm text-slate">Sustainable food systems</span>
            </div>
          </div>

          <div className="pt-4 border-t border-secondary/20">
            <p className="text-sm text-slate">
              <strong>Contact:</strong> [GAP: Contact details]
            </p>
          </div>
        </div>
      </section>

      {/* Document Note */}
      <section className="mt-12 p-6 rounded-xl border border-slate/20 bg-slate-50">
        <p className="text-sm text-slate italic">
          <strong>Note:</strong> This concept note provides a high-level overview. Full project proposal with
          detailed methodology, budget, M&E framework, and implementation plan available upon request.
        </p>
        <p className="text-xs text-slate/60 mt-2">
          <strong>Date:</strong> November 2025
        </p>
      </section>

      {/* Related Documents */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Related Documents</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/stage-1/funding/v0-grant-proposal"
            className="group p-6 rounded-xl border-2 border-primary/20 bg-white hover:border-primary hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Full Proposal</p>
            </div>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors mb-2">
              V0 Grant Proposal
            </h3>
            <p className="text-xs text-slate">Comprehensive 25-35 page proposal with detailed implementation plan</p>
          </Link>

          <Link
            href="/stage-1/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60">Overview</p>
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
