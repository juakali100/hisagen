"use client";

import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Link from "next/link";
import { useState } from "react";

// Layer data for the 5-layer framework with detailed content
const layerData = [
  {
    layer: "L1",
    name: "Planetary Foundations",
    relevance: "Foundational science",
    intensity: "Medium",
    elements: "Soil carbon cycle, microbial biology",
    color: "#1B4D3E",
    description: "HISAGEN's intervention is grounded in soil carbon science and the global carbon cycle.",
    keyConnections: [
      { title: "Carbon Cycle", detail: "Soil as carbon sink; agricultural practices that sequester vs emit" },
      { title: "Biogeochemical Cycles", detail: "Soil biology, microbial activity, nutrient cycling" },
      { title: "Planetary Boundary: Climate Change", detail: "Agricultural contribution to emissions; mitigation potential" },
    ],
    hisagenElements: [
      "Locus AG Rhizolizer microbial technology accelerates soil organic carbon (SOC) accumulation",
      "Proven yield improvement (15-30%) indicates enhanced soil biology function",
      "NARO field trials validated technology performance in Ugandan soils",
    ],
    frameworkInsight: "L1 provides the scientific foundation for L2-L5 claims. Without soil carbon science validity, the entire value chain collapses.",
  },
  {
    layer: "L2",
    name: "Landscapes & Jurisdictions",
    relevance: "PRIMARY",
    intensity: "High",
    elements: "Uganda landscapes, VM0042, MRV, farmer aggregation",
    color: "#2E7D5A",
    description: "This is where HISAGEN's core intervention happens. The project is a landscape-scale agricultural carbon initiative.",
    pillars: [
      {
        title: "Pillar 1: Landscape Types",
        items: [
          { type: "Agricultural Landscapes", relevance: "Primary - smallholder farmland in Uganda" },
          { type: "Grasslands & Savannas", relevance: "Secondary - East African ecological context" },
          { type: "Forest Landscapes", relevance: "Adjacent - agroforestry potential" },
        ],
      },
      {
        title: "Pillar 2: Sectors & Practices",
        items: [
          { element: "Soil health restoration", implementation: "Locus AG bio-stimulants, reduced chemical inputs" },
          { element: "Carbon farming", implementation: "SOC accumulation, verified under VM0042" },
          { element: "Farmer-first economics", implementation: "70%+ of carbon revenue to farmers" },
          { element: "Yield co-benefits", implementation: "15-30% productivity improvement" },
          { element: "MRV integration", implementation: "3Degrees digital platform" },
        ],
      },
      {
        title: "Pillar 3: Methodology & Frameworks",
        items: [
          { framework: "Landscape Approaches", implementation: "Smallholder aggregation via Deep Six partnership" },
          { framework: "Jurisdictional", implementation: "Uganda government alignment (MAAIF/NARO, NDC)" },
          { framework: "Corporate Engagement", implementation: "Capital Continuum funding model, buyer relationships" },
          { framework: "Assessment & Verification", implementation: "Verra VM0042, 3Degrees MRV, institutional-grade verification" },
        ],
      },
    ],
    ugandaContext: [
      { metric: "4M", label: "Smallholder farming households" },
      { metric: "1-3 ha", label: "Average landholding" },
      { metric: "80%", label: "Arable land (only 35% cultivated)" },
      { metric: "46%", label: "Land degraded; $625M annual nutrient loss" },
    ],
    credibilityChallenge: "HISAGEN directly addresses the L2 credibility gap: 50% of LA/JA disclosures fail CDP credibility criteria, 80% fail on monitoring frameworks. HISAGEN's answer: Digital MRV + Verra methodology + institutional-grade verification = credible claims.",
  },
  {
    layer: "L3",
    name: "Ecosystem Services",
    relevance: "Dual value delivery",
    intensity: "High",
    elements: "Provisioning (yield) + Regulating (carbon)",
    color: "#008B8B",
    description: "HISAGEN delivers a 'dual value proposition' - two ecosystem service categories simultaneously.",
    naturalCapital: [
      { asset: "Soil", intervention: "Bio-stimulant restoration of soil biology" },
      { asset: "Soil organic carbon", intervention: "Sequestration and accumulation" },
      { asset: "Agricultural biodiversity", intervention: "Microbial diversity enhancement" },
    ],
    ecosystemServices: [
      { category: "Provisioning", service: "Food production", delivery: "15-30% yield improvement" },
      { category: "Regulating", service: "Climate regulation", delivery: "Verified carbon credits (VM0042)" },
      { category: "Supporting", service: "Soil formation", delivery: "Enhanced microbial activity" },
      { category: "Supporting", service: "Nutrient cycling", delivery: "Reduced synthetic fertilizer dependency" },
    ],
    frameworkInsight: "The 'dual value proposition' is actually dual ecosystem services. This framing strengthens the business case - farmers get immediate provisioning value (yield) while generating regulating value (carbon) for corporate buyers.",
  },
  {
    layer: "L4",
    name: "Policy & Governance",
    relevance: "Enabling environment",
    intensity: "Medium",
    elements: "MAAIF/NARO, Verra, SBTi/CSRD",
    color: "#4A6FA5",
    description: "HISAGEN operates within multiple governance frameworks that enable and constrain the model.",
    nationalLevel: [
      { element: "MAAIF (Ministry of Agriculture)", status: "NARO approval expected Q1 2026" },
      { element: "NDC Commitments", status: "Government committed to climate-smart agriculture" },
      { element: "Regulatory pathway", status: "Product registration underway" },
    ],
    internationalStandards: [
      { standard: "Verra VM0042", alignment: "Primary methodology (soil carbon)" },
      { standard: "Gold Standard", alignment: "Alternative pathway" },
      { standard: "SBTi", alignment: "Drives corporate buyer demand" },
      { standard: "CSRD", alignment: "EU regulation driving disclosure requirements" },
    ],
    governanceInsight: "The L4 environment is favourable: First-mover advantage (no scaled agricultural carbon programs in Uganda), Government commitment to climate-smart agriculture, International standards validated (AgriCarbon first Africa VM0042, 2025).",
  },
  {
    layer: "L5",
    name: "Corporate Action",
    relevance: "Demand/capital side",
    intensity: "Medium",
    elements: "Carbon buyers, institutional investment",
    color: "#1A2332",
    description: "HISAGEN's 'bankability' positioning is about making L2 interventions accessible to L5 corporate capital and buyers.",
    demandSide: [
      { driver: "Net-zero commitments", relevance: "Creates demand for verified removal credits" },
      { driver: "SBTi targets", relevance: "Requires high-quality carbon credits" },
      { driver: "CSRD disclosure", relevance: "EU companies need supply chain decarbonisation" },
      { driver: "Scope 3 pressure", relevance: "Agricultural supply chain emissions in focus" },
    ],
    buyerPrecedents: [
      "Microsoft purchasing 40K Indigo Ag credits (2024)",
      "Soil carbon commanding $15-40/tonne premium vs $4.80 market average",
    ],
    supplySide: [
      { type: "Carbon credit purchase", model: "Primary revenue model" },
      { type: "Blended finance", model: "Capital Continuum framework" },
      { type: "Supply chain investment", model: "Future potential (commodity buyers)" },
      { type: "Impact investment", model: "Stage 3-4 of Capital Continuum" },
    ],
  },
];

// Strategic opportunities
const topPriorities = [
  {
    priority: 1,
    opportunity: "Landscape Approach positioning",
    effort: "Medium",
    impact: "High",
    action: "Pursue ISEAL 4 Core Criteria alignment",
  },
  {
    priority: 2,
    opportunity: "Disclosure data services",
    effort: "Low",
    impact: "Medium",
    action: "Package MRV data for CDP/TNFD reporting",
  },
  {
    priority: 3,
    opportunity: "Corporate engagement models",
    effort: "Medium",
    impact: "High",
    action: "Develop tiered partnership programme",
  },
  {
    priority: 4,
    opportunity: "Crop diversification pilot",
    effort: "Medium",
    impact: "Medium",
    action: "Test intercropping/agroforestry on 20% of hectares",
  },
  {
    priority: 5,
    opportunity: "Capital diversification",
    effort: "Medium",
    impact: "High",
    action: "Apply to AGRI3, explore PES pilot",
  },
];

// Full opportunity areas
const allOpportunities = [
  {
    number: "01",
    title: "Landscape Approach Positioning",
    current: "Frames as 'agricultural carbon' and 'smallholder aggregation' - project-level language",
    opportunity: "Reframe as formal Landscape Approach aligned with ISEAL 4 Core Criteria (Scale, Multi-stakeholder Governance, Collective Goals, Monitoring)",
    why: "CDP scores LA/JA engagement; unlocks IDH/TFA/FOLU funding; 50% of disclosures fail credibility criteria - alignment differentiates",
  },
  {
    number: "02",
    title: "Crop Diversification & Agroforestry",
    current: "Maize monoculture with bio-stimulant intervention",
    opportunity: "Design for agricultural system resilience: legumes (nitrogen fixation), root crops (drought resilience), agroforestry (above-ground carbon, timber)",
    why: "Spreads seasonal income, reduces price risk, opens VM0042 + ARR methodology stacking, stronger 'regenerative' narrative",
  },
  {
    number: "03",
    title: "MRV Expansion Beyond Carbon",
    current: "3Degrees MRV focused on soil organic carbon for VM0042",
    opportunity: "Expand to biodiversity, water, soil health metrics. Design for TNFD-ready data. Consider LandScale assessment.",
    why: "Carbon becoming commoditised; comprehensive sustainability data differentiates; future-proofs against market volatility",
  },
  {
    number: "04",
    title: "Traceability & Sustainable Product",
    current: "Carbon credits are primary product; maize treated separately",
    opportunity: "Integrate 'verified sustainable maize' positioning. Offer traceability for EUDR-adjacent buyers. Create disclosure data services.",
    why: "Three revenue streams (premium product + carbon + traceability); builds infrastructure valuable beyond carbon cycles",
  },
  {
    number: "05",
    title: "Enhanced Corporate Engagement",
    current: "Carbon credit sales - transaction-focused",
    opportunity: "Develop insetting, landscape coalition membership, Scope 3 partnerships, SBTi FLAG alignment",
    why: "Partnership models = sticky, value-added, premium pricing; positions as strategic partner vs commodity supplier",
  },
  {
    number: "06",
    title: "Disclosure Data Services",
    current: "Limited focus on how data supports corporate disclosure",
    opportunity: "Package MRV data for CDP, TNFD, CSRD, SBTi FLAG. Create 'Disclosure Data Pack' product.",
    why: "Mandatory disclosure growing; companies struggle for Scope 3 agricultural data; recurring revenue independent of carbon prices",
  },
];

// Layer Accordion Component
function LayerAccordion({ layer }: { layer: typeof layerData[0] }) {
  const [isOpen, setIsOpen] = useState(layer.layer === "L2"); // L2 open by default

  return (
    <div
      className={`rounded-xl border-2 overflow-hidden transition-all ${
        layer.layer === "L2"
          ? "border-primary/40 bg-primary/5"
          : "border-mist bg-white hover:border-slate/30"
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black text-parchment"
            style={{ backgroundColor: layer.color }}
          >
            {layer.layer}
          </span>
          <div>
            <h3 className="font-bold text-secondary">{layer.name}</h3>
            <p className="text-xs text-slate">{layer.elements}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
              layer.intensity === "High"
                ? "bg-primary/20 text-primary"
                : "bg-slate/10 text-slate"
            }`}
          >
            {layer.intensity}
          </span>
          {layer.layer === "L2" && (
            <span className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-primary text-parchment">
              Primary
            </span>
          )}
          <svg
            className={`w-5 h-5 text-slate transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="px-4 pb-6 border-t border-mist/50">
          <p className="text-sm text-slate mt-4 mb-6">{layer.description}</p>

          {/* L1 Content */}
          {layer.layer === "L1" && layer.keyConnections && (
            <>
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                  Key Connections
                </h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {layer.keyConnections.map((conn) => (
                    <div key={conn.title} className="p-3 rounded-lg bg-white border border-mist">
                      <p className="text-xs font-bold text-secondary mb-1">{conn.title}</p>
                      <p className="text-xs text-slate">{conn.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                  HISAGEN Elements
                </h4>
                <ul className="space-y-2">
                  {layer.hisagenElements?.map((el, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              {layer.frameworkInsight && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-xs font-bold text-primary mb-1">Framework Insight</p>
                  <p className="text-sm text-slate">{layer.frameworkInsight}</p>
                </div>
              )}
            </>
          )}

          {/* L2 Content */}
          {layer.layer === "L2" && layer.pillars && (
            <>
              {/* Uganda Context Stats */}
              {layer.ugandaContext && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                    Uganda Context
                  </h4>
                  <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                    {layer.ugandaContext.map((stat) => (
                      <div key={stat.label} className="p-3 rounded-lg bg-white border border-mist text-center">
                        <p className="text-lg font-black text-secondary">{stat.metric}</p>
                        <p className="text-[10px] text-slate">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Three Pillars */}
              <div className="grid gap-4 md:grid-cols-3 mb-6">
                {layer.pillars.map((pillar) => (
                  <div key={pillar.title} className="p-4 rounded-lg bg-white border border-mist">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                      {pillar.title}
                    </h4>
                    <div className="space-y-2">
                      {pillar.items.map((item: Record<string, string>, i: number) => (
                        <div key={i} className="text-xs">
                          <span className="font-bold text-secondary">
                            {item.type || item.element || item.framework}
                          </span>
                          <span className="text-slate">
                            {" "}&mdash; {item.relevance || item.implementation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Credibility Challenge */}
              {layer.credibilityChallenge && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-xs font-bold text-primary mb-1">The Credibility Challenge</p>
                  <p className="text-sm text-slate">{layer.credibilityChallenge}</p>
                </div>
              )}
            </>
          )}

          {/* L3 Content */}
          {layer.layer === "L3" && layer.naturalCapital && (
            <>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {/* Natural Capital */}
                <div className="p-4 rounded-lg bg-white border border-mist">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                    Natural Capital (Stock)
                  </h4>
                  <div className="space-y-2">
                    {layer.naturalCapital.map((item) => (
                      <div key={item.asset} className="text-xs">
                        <span className="font-bold text-secondary">{item.asset}</span>
                        <span className="text-slate"> &mdash; {item.intervention}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ecosystem Services */}
                <div className="p-4 rounded-lg bg-white border border-mist">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                    Ecosystem Services (Flow)
                  </h4>
                  <div className="space-y-2">
                    {layer.ecosystemServices?.map((item) => (
                      <div key={item.service} className="text-xs">
                        <span className="px-1.5 py-0.5 rounded bg-sky-teal/10 text-sky-teal font-bold mr-2">
                          {item.category}
                        </span>
                        <span className="font-bold text-secondary">{item.service}</span>
                        <span className="text-slate"> &mdash; {item.delivery}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {layer.frameworkInsight && (
                <div className="p-4 rounded-lg bg-sky-teal/10 border border-sky-teal/20">
                  <p className="text-xs font-bold text-sky-teal mb-1">Framework Insight</p>
                  <p className="text-sm text-slate">{layer.frameworkInsight}</p>
                </div>
              )}
            </>
          )}

          {/* L4 Content */}
          {layer.layer === "L4" && layer.nationalLevel && (
            <>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {/* National Level */}
                <div className="p-4 rounded-lg bg-white border border-mist">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                    National Level (Uganda)
                  </h4>
                  <div className="space-y-2">
                    {layer.nationalLevel.map((item) => (
                      <div key={item.element} className="text-xs">
                        <span className="font-bold text-secondary">{item.element}</span>
                        <span className="text-slate"> &mdash; {item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* International Standards */}
                <div className="p-4 rounded-lg bg-white border border-mist">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                    International Standards
                  </h4>
                  <div className="space-y-2">
                    {layer.internationalStandards?.map((item) => (
                      <div key={item.standard} className="text-xs">
                        <span className="font-bold text-secondary">{item.standard}</span>
                        <span className="text-slate"> &mdash; {item.alignment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {layer.governanceInsight && (
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold text-blue-700 mb-1">Governance Assessment</p>
                  <p className="text-sm text-slate">{layer.governanceInsight}</p>
                </div>
              )}
            </>
          )}

          {/* L5 Content */}
          {layer.layer === "L5" && layer.demandSide && (
            <>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {/* Demand Side */}
                <div className="p-4 rounded-lg bg-white border border-mist">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                    Demand Side (Corporate Drivers)
                  </h4>
                  <div className="space-y-2">
                    {layer.demandSide.map((item) => (
                      <div key={item.driver} className="text-xs">
                        <span className="font-bold text-secondary">{item.driver}</span>
                        <span className="text-slate"> &mdash; {item.relevance}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supply Side */}
                <div className="p-4 rounded-lg bg-white border border-mist">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-3">
                    Supply Side (Engagement Models)
                  </h4>
                  <div className="space-y-2">
                    {layer.supplySide?.map((item) => (
                      <div key={item.type} className="text-xs">
                        <span className="font-bold text-secondary">{item.type}</span>
                        <span className="text-slate"> &mdash; {item.model}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buyer Precedents */}
              {layer.buyerPrecedents && (
                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <p className="text-xs font-bold text-secondary mb-2">Buyer Precedents</p>
                  <ul className="space-y-1">
                    {layer.buyerPrecedents.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function SustainabilityFrameworkPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink font-sans">
      <StageBreadcrumb
        stage="Sustainability Framework"
        trail={[
          { label: "Strategy", href: "/strategy" },
          { label: "5-Layer Framework" },
        ]}
      />

      {/* Hero */}
      <section className="rounded-2xl border-2 border-sky-teal/30 bg-sky-teal/5 px-8 py-12 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full bg-sky-teal/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-sky-teal">
            Pandion Framework Analysis
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
            January 2026
          </span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight mb-4">
          HISAGEN: 5-Layer Sustainability Framework Mapping
        </h1>
        <p className="text-lg text-slate leading-relaxed max-w-3xl">
          How HISAGEN maps to Pandion&apos;s comprehensive sustainability framework &ndash; and strategic opportunities identified from a systems-level perspective.
        </p>
      </section>

      {/* Executive Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.1em]">
          Executive Summary
        </h2>
        <div className="p-6 rounded-xl border border-mist bg-white">
          <p className="text-base text-slate leading-relaxed mb-4">
            HISAGEN is a <strong className="text-secondary">full-stack integrator</strong> operating across all 5 layers of the sustainability framework. The primary intervention is at <strong className="text-primary">L2 (Landscapes & Jurisdictions)</strong> within the <strong>Regenerative Agriculture</strong> sector.
          </p>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-slate">
              <strong className="text-primary">The &ldquo;bankable&rdquo; insight:</strong> The problem isn&apos;t that soil carbon doesn&apos;t exist &ndash; it&apos;s that it can&apos;t be verified, priced, and traded at institutional standards. HISAGEN solves this by controlling the full value chain from soil science (L1) to corporate capital (L5).
            </p>
          </div>
        </div>
      </section>

      {/* 5-Layer Accordion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.1em]">
          5-Layer Framework Mapping
        </h2>
        <p className="text-sm text-slate mb-6">
          Click each layer to explore detailed mapping of HISAGEN&apos;s position within the framework.
        </p>
        <div className="space-y-3">
          {layerData.map((layer) => (
            <LayerAccordion key={layer.layer} layer={layer} />
          ))}
        </div>
      </section>

      {/* Full-Stack Integration Visual */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.1em]">
          Full-Stack Integration
        </h2>
        <div className="p-6 rounded-xl bg-secondary text-parchment">
          <p className="text-sm mb-6 opacity-90">
            HISAGEN&apos;s distinctive positioning: controlling/coordinating across all layers
          </p>
          <div className="space-y-3">
            {[
              { layer: "L1 (Science)", arrow: true, content: "Locus AG technology (proven microbial soil carbon)", color: "#1B4D3E" },
              { layer: "L2 (Landscape)", arrow: true, content: "Uganda pilot, Deep Six farmer aggregation, VM0042", color: "#2E7D5A" },
              { layer: "L3 (Services)", arrow: true, content: "Yield improvement + Carbon credits (dual value)", color: "#008B8B" },
              { layer: "L4 (Governance)", arrow: true, content: "MAAIF regulatory, Verra methodology, SBTi alignment", color: "#4A6FA5" },
              { layer: "L5 (Corporate)", arrow: false, content: "Carbon buyer connections, institutional-grade verification", color: "#1A2332" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-28 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded text-center"
                  style={{ backgroundColor: item.color }}
                >
                  {item.layer}
                </div>
                {item.arrow && (
                  <span className="text-accent">&#8594;</span>
                )}
                <span className="text-sm opacity-90">{item.content}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg bg-white/10 border border-white/20">
            <p className="text-xs">
              <strong className="text-accent">Why this matters:</strong> Most players are single-layer (technology OR verification OR financing). HISAGEN integrates across the stack, reducing friction. &ldquo;Bankability&rdquo; = making L2 outcomes legible to L5 capital.
            </p>
          </div>
        </div>
      </section>

      {/* L2 Deep Dive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.1em]">
          L2 Deep Dive: Where HISAGEN Lives
        </h2>
        <p className="text-sm text-slate mb-6">
          Within the L2 &ldquo;Landscapes & Jurisdictions&rdquo; architecture:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-5 rounded-xl border-2 border-primary/20 bg-primary/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Pillar 1: Landscape Types
            </h4>
            <ul className="text-sm text-slate space-y-1">
              <li>&bull; Agricultural landscapes (smallholder farmland)</li>
              <li>&bull; East African ecological context</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border-2 border-accent/30 bg-accent/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Pillar 2: Sectors & Practices
            </h4>
            <ul className="text-sm text-slate space-y-1">
              <li>&bull; <strong>Regenerative Agriculture</strong> (core)</li>
              <li>&bull; Bio-stimulants, soil restoration</li>
              <li>&bull; Carbon farming practices</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border-2 border-sky-teal/30 bg-sky-teal/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-teal mb-3">
              Pillar 3: Methodology
            </h4>
            <ul className="text-sm text-slate space-y-1">
              <li>&bull; Verra VM0042 methodology</li>
              <li>&bull; 3Degrees MRV platform</li>
              <li>&bull; Corporate engagement models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Capital Flows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.1em]">
          Capital Flows
        </h2>
        <p className="text-sm text-slate mb-6">
          Current capital strategy (Capital Continuum: Grants → Blended Finance → Impact Investment → Commercial) with opportunities for diversification.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          {/* Current vs Expansion */}
          <div className="p-5 rounded-xl border border-mist bg-white">
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4">
              Current Capital Sources
            </h4>
            <div className="space-y-3">
              {[
                { source: "Grants", status: "Active (Stage 1)", color: "primary" },
                { source: "Carbon Credits", status: "Primary revenue model", color: "primary" },
                { source: "Blended Finance", status: "Planned", color: "slate" },
              ].map((item) => (
                <div key={item.source} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-secondary">{item.source}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded ${
                    item.color === "primary" ? "bg-primary/20 text-primary" : "bg-slate/10 text-slate"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl border-2 border-accent/30 bg-accent/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Expansion Opportunities
            </h4>
            <div className="space-y-3">
              {[
                { source: "PES (Payment for Ecosystem Services)", potential: "Water funds, biodiversity payments" },
                { source: "Results-Based Finance", potential: "Performance contracts with governments" },
                { source: "Corporate Pre-Purchase", potential: "Forward carbon agreements" },
                { source: "Premium Product Revenue", potential: "Verified sustainable maize" },
                { source: "Data Services", potential: "Disclosure data, traceability fees" },
              ].map((item) => (
                <div key={item.source} className="text-xs">
                  <span className="font-bold text-secondary">{item.source}</span>
                  <span className="text-slate"> &mdash; {item.potential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fund Targets */}
        <div className="p-5 rounded-xl border border-mist bg-white">
          <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4">
            Specific Fund Targets
          </h4>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { fund: "AGRI3", focus: "Sustainable agriculture, deforestation-free", fit: "High" },
              { fund: "Land Degradation Neutrality Fund", focus: "Soil restoration", fit: "High" },
              { fund: "AATIF", focus: "SSA agriculture", fit: "High" },
              { fund: "Acumen", focus: "Smallholder agriculture", fit: "High" },
              { fund: "Novastar Ventures", focus: "East Africa impact", fit: "Medium" },
            ].map((item) => (
              <div key={item.fund} className="p-3 rounded-lg bg-slate/5 border border-mist">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-secondary">{item.fund}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                    item.fit === "High" ? "bg-primary/20 text-primary" : "bg-slate/20 text-slate"
                  }`}>
                    {item.fit} fit
                  </span>
                </div>
                <p className="text-[10px] text-slate">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-xs text-slate">
            <strong className="text-primary">Why diversification matters:</strong> Carbon market volatility = revenue risk. Diversified capital sources provide resilience. PES and results-based finance are growing faster than carbon markets.
          </p>
        </div>
      </section>

      {/* Data Flows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-[0.1em]">
          Data Flows
        </h2>
        <p className="text-sm text-slate mb-6">
          Current MRV data via 3Degrees platform with opportunities for ecosystem integration and AI/ML enhancement.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          {/* Registry Integration */}
          <div className="p-5 rounded-xl border border-mist bg-white">
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4">
              Registry &amp; Platform Integration
            </h4>
            <div className="space-y-2">
              {[
                { platform: "Verra Registry", status: "Integrated", value: "Credit issuance" },
                { platform: "Climate TRACE", status: "Opportunity", value: "Visibility, validation" },
                { platform: "Global Forest Watch", status: "Opportunity", value: "Risk management" },
                { platform: "Trase", status: "Opportunity", value: "Supply chain mapping" },
                { platform: "SourceUp", status: "Opportunity", value: "Landscape coordination" },
                { platform: "CDP", status: "Priority", value: "Streamlined disclosure" },
              ].map((item) => (
                <div key={item.platform} className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-secondary">{item.platform}</span>
                    <span className="text-slate"> &mdash; {item.value}</span>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                    item.status === "Integrated" ? "bg-primary/20 text-primary" :
                    item.status === "Priority" ? "bg-accent/20 text-accent" :
                    "bg-slate/10 text-slate"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI/ML Opportunities */}
          <div className="p-5 rounded-xl border-2 border-sky-teal/30 bg-sky-teal/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-teal mb-4">
              AI/ML Opportunities
            </h4>
            <div className="space-y-3">
              {[
                { application: "Satellite Image Analysis", potential: "Automate practice verification, reduce field visits" },
                { application: "Yield Prediction", potential: "Better planning, risk management" },
                { application: "Carbon Modelling", potential: "Improve SOC estimates, reduce uncertainty" },
                { application: "Anomaly Detection", potential: "Fraud prevention, quality assurance" },
              ].map((item) => (
                <div key={item.application} className="text-xs">
                  <span className="font-bold text-secondary">{item.application}</span>
                  <span className="text-slate"> &mdash; {item.potential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclosure Data Value Chain */}
        <div className="p-5 rounded-xl bg-secondary text-parchment">
          <h4 className="text-xs font-bold uppercase tracking-widest text-parchment/60 mb-4">
            Disclosure Data Value Chain
          </h4>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {[
              "HISAGEN MRV Data",
              "Standardised Metrics (GHG Protocol, TNFD)",
              "Corporate Disclosure Packages",
              "Audit-Ready Documentation",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-xs bg-white/10 px-3 py-1.5 rounded-lg">{step}</span>
                {i < 3 && <span className="text-accent">&#8594;</span>}
              </div>
            ))}
          </div>
          <div className="grid gap-2 md:grid-cols-3 text-xs">
            {[
              { framework: "CDP Forests", need: "LA/JA engagement evidence" },
              { framework: "TNFD", need: "Location-specific nature data" },
              { framework: "SBTi FLAG", need: "Land sector emissions data" },
              { framework: "CSRD/ESRS", need: "Value chain sustainability" },
              { framework: "CDP Climate", need: "Scope 3 emissions factors" },
              { framework: "GRI", need: "Stakeholder impact metrics" },
            ].map((item) => (
              <div key={item.framework} className="p-2 rounded bg-white/10">
                <span className="font-bold text-accent">{item.framework}:</span>
                <span className="opacity-90"> {item.need}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-sky-teal/10 border border-sky-teal/20">
          <p className="text-xs text-slate">
            <strong className="text-sky-teal">Digital Product Passport potential:</strong> As EU DPP requirements expand, HISAGEN&apos;s MRV infrastructure could evolve into agricultural product identity backbone &mdash; positioning for future regulatory requirements.
          </p>
        </div>
      </section>

      {/* Strategic Opportunities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-[0.1em]">
          Strategic Opportunities
        </h2>
        <p className="text-sm text-slate mb-6">
          Areas identified from applying the full 5-layer framework, capital flows, and data flows perspectives &ndash; opportunities a single-sector agricultural carbon specialist might miss.
        </p>

        {/* Top 5 Summary */}
        <div className="p-6 rounded-xl border-2 border-primary/20 bg-white mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Top 5 Priority Recommendations
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-mist">
                  <th className="p-2 text-left text-[10px] font-bold uppercase text-slate/60">#</th>
                  <th className="p-2 text-left text-[10px] font-bold uppercase text-slate/60">Opportunity</th>
                  <th className="p-2 text-center text-[10px] font-bold uppercase text-slate/60">Effort</th>
                  <th className="p-2 text-center text-[10px] font-bold uppercase text-slate/60">Impact</th>
                  <th className="p-2 text-left text-[10px] font-bold uppercase text-slate/60">Suggested Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist/50">
                {topPriorities.map((item) => (
                  <tr key={item.priority}>
                    <td className="p-2 font-bold text-primary">{item.priority}</td>
                    <td className="p-2 font-medium text-secondary">{item.opportunity}</td>
                    <td className="p-2 text-center">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate/10 text-slate">
                        {item.effort}
                      </span>
                    </td>
                    <td className="p-2 text-center">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded ${
                          item.impact === "High"
                            ? "bg-primary/20 text-primary"
                            : "bg-accent/20 text-accent"
                        }`}
                      >
                        {item.impact}
                      </span>
                    </td>
                    <td className="p-2 text-xs text-slate">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Opportunities */}
        <div className="space-y-4">
          {allOpportunities.map((opp) => (
            <div
              key={opp.number}
              className="p-5 rounded-xl border border-mist bg-white hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                  {opp.number}
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-secondary mb-2">{opp.title}</h4>
                  <div className="grid gap-3 md:grid-cols-3 text-xs">
                    <div>
                      <p className="font-bold uppercase tracking-widest text-slate/60 mb-1">Current</p>
                      <p className="text-slate">{opp.current}</p>
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-widest text-primary/60 mb-1">Opportunity</p>
                      <p className="text-slate">{opp.opportunity}</p>
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-widest text-accent/80 mb-1">Why It Matters</p>
                      <p className="text-slate">{opp.why}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pandion Advisory Value */}
      <section className="mb-12">
        <div className="p-8 rounded-2xl bg-sky-teal text-parchment">
          <h2 className="text-xl font-bold mb-4">Pandion Advisory Value</h2>
          <p className="text-sm opacity-90 mb-6">
            These opportunities represent areas where Pandion&apos;s 5-layer framework perspective, combined with knowledge of data flows, capital flows, and corporate action requirements, adds value beyond what a single-sector agricultural carbon specialist might identify.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Landscape Approach positioning & ISEAL alignment",
              "Corporate engagement model design & buyer targeting",
              "Disclosure data product development",
              "Capital strategy & fund targeting",
              "Risk and resilience framework development",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm"
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="mb-16 flex flex-wrap justify-center gap-4">
        <Link
          href="/strategy"
          className="px-6 py-3 bg-secondary text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors"
        >
          Back to Strategy
        </Link>
        <Link
          href="/program"
          className="px-6 py-3 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors"
        >
          Explore Program
        </Link>
        <Link
          href="/knowledge-base"
          className="px-6 py-3 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors"
        >
          Knowledge Base
        </Link>
      </section>
    </div>
  );
}
