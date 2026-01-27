'use client';

import { useState } from 'react';

export default function LogoPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // Key content snippets for sharing
  const snippets = {
    concept: `HISAGEN Logo Concept: Seedling with two cotyledon leaves emerging from soil. Simplified silhouette that works at 16px. Scientific authority meets organic natural form — like a botanical illustration reduced to its essence.`,

    positioning: `HISAGEN occupies a unique position: African-led, science-backed, commercially rigorous. The logo must feel premium enough for a $2M funding pitch while remaining authentic to agricultural roots.`,

    directions: `Three concept directions:
1. GEOMETRIC PRECISION — Mathematical, angular, tech-forward
2. ORGANIC FLOW — Natural lines, botanical feel, warmth
3. CONCEPTUAL — Clever negative space, soil layers, memorable`,

    color: `Primary: Deep Regenerative Green #1F4D3A
Accent: Harvest Gold #C6A04A
Text: Black Cotton Soil #2D2A26
Background: Parchment #F7F8F5`,

    avoid: `Avoid: Hands, hearts, globes, CO2 symbols, African continent, complex gradients. Most carbon logos are generic green — HISAGEN should emphasize SOIL (underground, foundation, carbon storage) not just above-ground greenery.`,
  };

  const CopyButton = ({ section, text }: { section: string; text: string }) => (
    <button
      onClick={() => copyToClipboard(text, section)}
      className="px-3 py-1 text-xs bg-slate/10 hover:bg-slate/20 rounded transition-colors flex items-center gap-1"
    >
      {copiedSection === section ? (
        <>
          <span className="text-green-600">✓</span>
          <span className="text-green-600">Copied</span>
        </>
      ) : (
        <>
          <span>📋</span>
          <span>Copy</span>
        </>
      )}
    </button>
  );

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm opacity-80 mb-2">
            <a href="/brand" className="hover:underline">Brand</a>
            <span>/</span>
            <span>Logo Development</span>
          </div>
          <h1 className="text-4xl font-serif font-bold">Logo Concept</h1>
          <p className="mt-4 text-lg opacity-90">
            Development brief, direction, and shareable snippets
          </p>
          <div className="mt-4 flex gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">In Development</span>
            <span className="px-3 py-1 bg-harvest/30 text-harvest rounded-full text-sm">£200 Pilot</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

        {/* Working Notes - Idea Capture */}
        <section className="bg-harvest/10 border-2 border-harvest/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💡</span>
            <h2 className="text-2xl font-serif font-semibold text-ink">Working Notes</h2>
            <span className="px-2 py-0.5 bg-harvest/30 text-harvest text-xs rounded-full">Living Document</span>
          </div>

          {/* Keywords */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wider mb-3">Keywords & Themes</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'soil',
                'roots',
                'underground',
                'carbon',
                'regeneration',
                'emergence',
                'growth',
                'science',
                'precision',
                'African soil',
                'foundation',
                'sequestration',
                'layers',
                'microbial',
                'verified',
              ].map((keyword) => (
                <span key={keyword} className="px-3 py-1 bg-white border border-harvest/40 rounded-full text-sm text-ink">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Rough Ideas */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wider mb-3">Rough Ideas & Concepts</h3>
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary">●</span>
                <p className="text-sm text-ink"><strong>Roots reaching down</strong> — most logos show growth UP, but HISAGEN's story is about what happens BELOW the surface. Roots as the hero element.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">●</span>
                <p className="text-sm text-ink"><strong>Soil cross-section</strong> — layers visible, showing the hidden world beneath. Scientific diagram aesthetic.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">●</span>
                <p className="text-sm text-ink"><strong>Seedling + horizon line</strong> — the line represents both soil surface AND African landscape. Simple but meaningful.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">●</span>
                <p className="text-sm text-ink"><strong>Circle with roots</strong> — contained form (works as icon), but roots extend beyond or pierce the boundary. Tension between order and organic.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate/50">○</span>
                <p className="text-sm text-slate italic">Add more ideas here...</p>
              </div>
            </div>
          </div>

          {/* Visual References */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wider mb-3">Visual References & Inspiration</h3>
            <div className="bg-white rounded-lg p-4">
              <ul className="space-y-2 text-sm text-ink">
                <li>• Botanical illustration precision — clean lines, scientific accuracy</li>
                <li>• Soil science diagrams — layers, textures, cross-sections</li>
                <li>• African textile patterns — geometric, meaningful, distinctive</li>
                <li>• Carbon/chemistry symbols — molecular, structured, credible</li>
                <li>• Woodcut/linocut aesthetic — bold, simple, timeless</li>
              </ul>
            </div>
          </div>

          {/* Quick Notes */}
          <div>
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wider mb-3">Notes & Observations</h3>
            <div className="bg-white rounded-lg p-4 text-sm text-ink space-y-2">
              <p><strong>From Keir:</strong> (capture feedback here)</p>
              <p><strong>Competitor gaps:</strong> Nobody owns &quot;soil&quot; visually — most use leaves, trees, globes. This is the whitespace.</p>
              <p><strong>Technical note:</strong> Must work at 16px for favicon. Test all concepts at small size early.</p>
            </div>
          </div>
        </section>

        {/* Current State */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Current State: Wordmark Only</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-parchment p-8 rounded-lg text-center border-2 border-mist">
              <span className="text-3xl font-serif font-bold text-primary tracking-tight">HISAGEN</span>
              <p className="text-xs text-slate mt-3">On light</p>
            </div>
            <div className="bg-primary p-8 rounded-lg text-center">
              <span className="text-3xl font-serif font-bold text-white tracking-tight">HISAGEN</span>
              <p className="text-xs text-white/70 mt-3">On primary</p>
            </div>
            <div className="bg-ink p-8 rounded-lg text-center">
              <span className="text-3xl font-serif font-bold text-white tracking-tight">HISAGEN</span>
              <p className="text-xs text-white/70 mt-3">On dark</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center border-2 border-mist">
              <span className="text-3xl font-serif font-bold text-ink tracking-tight">HISAGEN</span>
              <p className="text-xs text-slate mt-3">Monochrome</p>
            </div>
          </div>
          <p className="text-sm text-slate mt-4">
            <strong>Typeface:</strong> Source Serif 4 Bold — any logo development should maintain visual consistency with this foundation.
          </p>
        </section>

        {/* Core Concept */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-semibold text-ink">Core Concept</h2>
            <CopyButton section="concept" text={snippets.concept} />
          </div>
          <div className="bg-white rounded-lg border border-mist p-6 space-y-4">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🌱</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink mb-2">Seedling with Cotyledons + Soil Reference</h3>
                <p className="text-slate">
                  Two-leaf sprout emerging from earth. Represents emergence, new beginnings, growth from soil —
                  directly references HISAGEN's work regenerating degraded land. Universal agricultural symbol
                  with positive associations. Simple form that works at small sizes.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm text-ink">
                <strong>The challenge:</strong> Seedling/sprout is a common motif. Execution must be distinctive.
                The logo should feel like a <em>botanical illustration reduced to its essence</em> —
                recognizable as natural, but rendered with technical precision.
              </p>
            </div>
          </div>
        </section>

        {/* Three Directions */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-semibold text-ink">Three Concept Directions</h2>
            <CopyButton section="directions" text={snippets.directions} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border-2 border-primary/30 p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">1. Geometric Precision</h3>
              <p className="text-sm text-slate mb-3">
                Seedling rendered with clean geometric shapes — circles, triangles, precise angles.
              </p>
              <div className="text-xs space-y-1 text-ink">
                <p><strong>Feel:</strong> Scientific, modern, tech-forward</p>
                <p><strong>Best for:</strong> Investor materials, data contexts</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border-2 border-primary/30 p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🍃</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">2. Organic Flow</h3>
              <p className="text-sm text-slate mb-3">
                More natural, hand-drawn quality but still clean. Flowing lines, subtle asymmetry.
              </p>
              <div className="text-xs space-y-1 text-ink">
                <p><strong>Feel:</strong> Warm, authentic, botanical</p>
                <p><strong>Best for:</strong> Community engagement, farmer-facing</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border-2 border-primary/30 p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">3. Conceptual / Negative Space</h3>
              <p className="text-sm text-slate mb-3">
                Clever use of negative space to suggest soil layers or growth. Minimal lines, maximum impact.
              </p>
              <div className="text-xs space-y-1 text-ink">
                <p><strong>Feel:</strong> Sophisticated, memorable, ownable</p>
                <p><strong>Best for:</strong> Brand differentiation, premium contexts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Direction */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-semibold text-ink">Color Direction</h2>
            <CopyButton section="color" text={snippets.color} />
          </div>
          <div className="bg-white rounded-lg border border-mist p-6">
            <p className="text-sm text-slate mb-4">
              Design in black first to ensure strong form. Color is secondary to structure.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="h-20 rounded-lg mb-2" style={{ backgroundColor: '#1F4D3A' }} />
                <p className="text-sm font-medium">Deep Regenerative Green</p>
                <p className="text-xs text-slate font-mono">#1F4D3A</p>
                <p className="text-xs text-slate">Primary logo color</p>
              </div>
              <div>
                <div className="h-20 rounded-lg mb-2" style={{ backgroundColor: '#C6A04A' }} />
                <p className="text-sm font-medium">Harvest Gold</p>
                <p className="text-xs text-slate font-mono">#C6A04A</p>
                <p className="text-xs text-slate">Accent, optimism</p>
              </div>
              <div>
                <div className="h-20 rounded-lg mb-2" style={{ backgroundColor: '#2D2A26' }} />
                <p className="text-sm font-medium">Black Cotton Soil</p>
                <p className="text-xs text-slate font-mono">#2D2A26</p>
                <p className="text-xs text-slate">Monochrome option</p>
              </div>
              <div>
                <div className="h-20 rounded-lg mb-2 border border-mist" style={{ backgroundColor: '#F7F8F5' }} />
                <p className="text-sm font-medium">Parchment</p>
                <p className="text-xs text-slate font-mono">#F7F8F5</p>
                <p className="text-xs text-slate">Background</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Avoid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-semibold text-ink">What to Avoid</h2>
            <CopyButton section="avoid" text={snippets.avoid} />
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-800 uppercase tracking-wider mb-3">Do Not Include</h4>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-center gap-2"><span>✕</span> Hands or hearts (too NGO/charity)</li>
                  <li className="flex items-center gap-2"><span>✕</span> Literal CO2 or carbon symbols (too technical)</li>
                  <li className="flex items-center gap-2"><span>✕</span> Globe or Earth imagery (overused)</li>
                  <li className="flex items-center gap-2"><span>✕</span> African continent shape (limits global positioning)</li>
                  <li className="flex items-center gap-2"><span>✕</span> Complex gradients or effects (reduces versatility)</li>
                  <li className="flex items-center gap-2"><span>✕</span> Text integrated into symbol (keep separable)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-red-800 uppercase tracking-wider mb-3">Competitive Differentiation</h4>
                <p className="text-sm text-red-700 mb-3">
                  Most carbon players use generic &quot;green&quot; logos. HISAGEN can differentiate by emphasizing
                  <strong> soil</strong> (underground, foundation, carbon storage) rather than above-ground greenery.
                </p>
                <div className="bg-white/50 p-3 rounded text-xs text-red-600">
                  <p className="font-medium mb-1">Common patterns to avoid:</p>
                  <p>Generic leaf in circle • Globe with green elements • Hands holding plant • Abstract swooshes with green gradient</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-semibold text-ink">Brand Positioning</h2>
            <CopyButton section="positioning" text={snippets.positioning} />
          </div>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <p className="text-3xl mb-2">🌍</p>
                <p className="font-semibold text-primary">African-led</p>
                <p className="text-xs text-slate">Rooted in place, globally relevant</p>
              </div>
              <div className="text-center">
                <p className="text-3xl mb-2">🔬</p>
                <p className="font-semibold text-primary">Science-backed</p>
                <p className="text-xs text-slate">Locus AG proven technology</p>
              </div>
              <div className="text-center">
                <p className="text-3xl mb-2">💼</p>
                <p className="font-semibold text-primary">Commercially rigorous</p>
                <p className="text-xs text-slate">Built to scale, not grant-dependent</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-ink">
                <strong>The balance:</strong> The logo must feel premium enough for a <strong>$2M funding pitch</strong> while
                remaining authentic to agricultural roots. Target audiences: institutional investors, corporate carbon buyers, grant funders.
              </p>
            </div>
          </div>
        </section>

        {/* Success Criteria */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Success Criteria</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: '📱', label: 'Small Size', desc: 'Recognizable at 16px favicon' },
              { icon: '🏛️', label: 'Credible', desc: 'Works for institutional audiences' },
              { icon: '⚡', label: 'Distinctive', desc: 'Avoids generic green syndrome' },
              { icon: '🔄', label: 'Versatile', desc: 'Works across all applications' },
              { icon: '⏳', label: 'Timeless', desc: 'Built to last 10+ years' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg border border-mist p-4 text-center">
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="font-medium text-sm text-ink">{item.label}</p>
                <p className="text-xs text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Requirements */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Technical Requirements</h2>
          <div className="bg-white rounded-lg border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Deliverable</th>
                  <th className="text-left p-4">Versions Needed</th>
                  <th className="text-left p-4">Formats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                <tr>
                  <td className="p-4 font-medium">Symbol Only</td>
                  <td className="p-4 text-slate">Full color, reversed, mono black, mono white</td>
                  <td className="p-4"><span className="font-mono text-xs">SVG, PNG, EPS</span></td>
                </tr>
                <tr className="bg-parchment/50">
                  <td className="p-4 font-medium">Symbol + Wordmark (Horizontal)</td>
                  <td className="p-4 text-slate">Full color, reversed, mono black, mono white</td>
                  <td className="p-4"><span className="font-mono text-xs">SVG, PNG, EPS</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Symbol + Wordmark (Stacked)</td>
                  <td className="p-4 text-slate">Full color, reversed, mono black, mono white</td>
                  <td className="p-4"><span className="font-mono text-xs">SVG, PNG, EPS</span></td>
                </tr>
                <tr className="bg-parchment/50">
                  <td className="p-4 font-medium">Favicon / App Icon</td>
                  <td className="p-4 text-slate">16px, 32px, 180px, 512px</td>
                  <td className="p-4"><span className="font-mono text-xs">ICO, PNG</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Process & Next Steps</h2>
          <div className="bg-white rounded-lg border border-mist p-6">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: '1', label: 'Brief Approved', status: 'complete' },
                { step: '2', label: 'AI Concept Generation', status: 'current' },
                { step: '3', label: 'Direction Selection', status: 'pending' },
                { step: '4', label: 'Refinement', status: 'pending' },
                { step: '5', label: 'Final Logo', status: 'pending' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-bold ${
                    item.status === 'complete' ? 'bg-green-500 text-white' :
                    item.status === 'current' ? 'bg-harvest text-white' :
                    'bg-slate/20 text-slate'
                  }`}>
                    {item.status === 'complete' ? '✓' : item.step}
                  </div>
                  <p className={`text-sm ${item.status === 'current' ? 'font-medium text-ink' : 'text-slate'}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-mist">
              <p className="text-sm text-slate">
                <strong>Budget:</strong> £200 pilot — includes 2-3 concepts and 2 revision rounds.
                Full brief available in <code className="bg-slate/10 px-1 rounded">brand/HISAGEN-LOGO-CONCEPT-BRIEF.md</code>
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="flex gap-4">
          <a
            href="/brand"
            className="flex-1 bg-white border border-mist rounded-lg p-4 hover:border-primary transition-colors"
          >
            <p className="font-medium text-ink">← Back to Brand Guidelines</p>
            <p className="text-xs text-slate">Full brand pack structure</p>
          </a>
          <a
            href="/assets"
            className="flex-1 bg-white border border-mist rounded-lg p-4 hover:border-primary transition-colors"
          >
            <p className="font-medium text-ink">Asset Library →</p>
            <p className="text-xs text-slate">Icons, photos, downloads</p>
          </a>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">
            HISAGEN Logo Development • Internal Working Document
          </p>
          <p className="text-xs text-mist mt-2">
            Last updated: January 2026 • Status: In Development
          </p>
        </section>
      </div>
    </main>
  );
}
