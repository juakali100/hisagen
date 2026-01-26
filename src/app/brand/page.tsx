export default function BrandGuidelinesPage() {
  // Portal Brand Guidelines (Original - for internal portal)
  const portalColors = {
    primary: [
      { name: 'Forest Green', hex: '#1F6A4A', usage: 'Growth, soil, regeneration' },
      { name: 'Deep Blue-Grey', hex: '#1F2E3A', usage: 'Credibility, finance, rigor' },
      { name: 'Gold', hex: '#D8B75A', usage: 'Value, yield, optimism' },
    ],
    supporting: [
      { name: 'Ink', hex: '#0F172A', usage: 'Body text' },
      { name: 'Slate', hex: '#334155', usage: 'Secondary text' },
      { name: 'Mist', hex: '#CBD5E1', usage: 'Backgrounds' },
      { name: 'Parchment', hex: '#F7F8F5', usage: 'Base background' },
    ],
  };

  // Website Brand Guidelines (Newer - for public website)
  const websiteColors = {
    primary: [
      { name: 'Deep Regenerative Green', hex: '#1F4D3A', usage: 'Headers, brand anchors' },
      { name: 'Soil Carbon Brown', hex: '#6B4A2B', usage: 'Earth, grounded elements' },
      { name: 'Charcoal Black', hex: '#1C1C1C', usage: 'Body text, institutional' },
    ],
    secondary: [
      { name: 'Harvest Gold', hex: '#C6A04A', usage: 'Highlights (sparingly)' },
      { name: 'Clay Neutral', hex: '#E6DED3', usage: 'Backgrounds, warmth' },
      { name: 'Muted Slate', hex: '#6F7C82', usage: 'Data, secondary UI' },
    ],
  };

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Internal Reference</p>
          <h1 className="text-4xl font-serif font-bold">Brand Guidelines</h1>
          <p className="mt-4 text-lg opacity-90">
            Comparing Portal (original) vs Website (newer) brand systems
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">

        {/* Decision Banner */}
        <section className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Decision Required: Consolidate Brand Guidelines?</h2>
          <p className="text-yellow-700 mb-4">
            Two separate brand guidelines exist. Review below to decide if they should be unified.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded border border-yellow-200">
              <h3 className="font-semibold text-ink">Portal Guidelines (Original)</h3>
              <p className="text-slate mt-1">Focus: Full-stack soil carbon platform, carbon markets, MRV</p>
              <p className="text-slate">Tone: 70% institutional / 30% human</p>
              <p className="text-xs text-mist mt-2">File: HISAGEN Brand Guidelines.md</p>
            </div>
            <div className="bg-white p-4 rounded border border-yellow-200">
              <h3 className="font-semibold text-ink">Website Guidelines (Newer)</h3>
              <p className="text-slate mt-1">Focus: Technology-driven agribusiness, farmer productivity</p>
              <p className="text-slate">Tone: Authoritative, clear, investable</p>
              <p className="text-xs text-mist mt-2">File: HISAGEN-BRAND-GUIDELINES.md</p>
            </div>
          </div>
        </section>

        {/* Side-by-Side Color Comparison */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Color Palette Comparison</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Portal Colors */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-4 pb-2 border-b border-mist">
                Portal (Original)
              </h3>
              <p className="text-sm text-slate mb-4">Currently implemented in this portal</p>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider">Primary</p>
                {portalColors.primary.map((color) => (
                  <div key={color.hex} className="flex items-center gap-3">
                    <div
                      className="w-16 h-10 rounded shadow-sm flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className="text-white text-xs font-mono">{color.hex}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{color.name}</p>
                      <p className="text-xs text-slate">{color.usage}</p>
                    </div>
                  </div>
                ))}

                <p className="text-xs font-semibold text-slate uppercase tracking-wider pt-4">Supporting</p>
                {portalColors.supporting.map((color) => (
                  <div key={color.hex} className="flex items-center gap-3">
                    <div
                      className="w-16 h-10 rounded shadow-sm flex items-center justify-center border border-mist"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className={`text-xs font-mono ${color.hex === '#F7F8F5' || color.hex === '#CBD5E1' ? 'text-ink' : 'text-white'}`}>
                        {color.hex}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{color.name}</p>
                      <p className="text-xs text-slate">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Website Colors */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-4 pb-2 border-b border-mist">
                Website (Newer)
              </h3>
              <p className="text-sm text-slate mb-4">Designed for public-facing site</p>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider">Primary</p>
                {websiteColors.primary.map((color) => (
                  <div key={color.hex} className="flex items-center gap-3">
                    <div
                      className="w-16 h-10 rounded shadow-sm flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className="text-white text-xs font-mono">{color.hex}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{color.name}</p>
                      <p className="text-xs text-slate">{color.usage}</p>
                    </div>
                  </div>
                ))}

                <p className="text-xs font-semibold text-slate uppercase tracking-wider pt-4">Secondary</p>
                {websiteColors.secondary.map((color) => (
                  <div key={color.hex} className="flex items-center gap-3">
                    <div
                      className="w-16 h-10 rounded shadow-sm flex items-center justify-center border border-mist"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className={`text-xs font-mono ${color.hex === '#E6DED3' ? 'text-ink' : 'text-white'}`}>
                        {color.hex}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{color.name}</p>
                      <p className="text-xs text-slate">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Key Differences</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Element</th>
                  <th className="text-left p-4">Portal (Original)</th>
                  <th className="text-left p-4">Website (Newer)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                <tr>
                  <td className="p-4 font-medium">Primary Green</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded" style={{backgroundColor: '#1F6A4A'}}></span>
                      #1F6A4A (brighter)
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded" style={{backgroundColor: '#1F4D3A'}}></span>
                      #1F4D3A (darker, more muted)
                    </span>
                  </td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Secondary Color</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded" style={{backgroundColor: '#1F2E3A'}}></span>
                      Deep Blue-Grey (finance feel)
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded" style={{backgroundColor: '#6B4A2B'}}></span>
                      Soil Carbon Brown (earth feel)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Gold Accent</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded" style={{backgroundColor: '#D8B75A'}}></span>
                      #D8B75A
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded" style={{backgroundColor: '#C6A04A'}}></span>
                      #C6A04A (slightly darker)
                    </span>
                  </td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Typography Priority</td>
                  <td className="p-4">Source Serif 4 for headlines</td>
                  <td className="p-4">Inter primary, Serif for editorial</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Positioning</td>
                  <td className="p-4">Full-stack soil carbon platform</td>
                  <td className="p-4">Technology-driven agribusiness</td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Primary Audience</td>
                  <td className="p-4">Investors, DFIs, Corporate Buyers</td>
                  <td className="p-4">Investors, Impact Partners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Typography Comparison */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Typography</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-ink mb-4">Both Systems Use:</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate mb-2">Inter (Body & UI)</p>
                  <p className="text-xl font-sans">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <p className="text-sm text-slate mb-2">Source Serif 4 (Headlines)</p>
                  <p className="text-xl font-serif">The quick brown fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-ink mb-4">Type Scale (Web)</h3>
              <div className="space-y-2">
                <p className="text-5xl font-serif">H1: 48px</p>
                <p className="text-4xl font-serif">H2: 36px</p>
                <p className="text-2xl font-sans font-bold">H3: 28px Bold</p>
                <p className="text-base font-sans">Body: 16px Regular</p>
                <p className="text-sm font-sans text-slate">Caption: 14px</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shared Values */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Shared Brand Values</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: 'Credibility', desc: 'Institutional-grade, evidence-based' },
              { title: 'Transparency', desc: 'Clear methodology, honest metrics' },
              { title: 'Grounded', desc: 'Real farmers, real soil, real outcomes' },
              { title: 'Scalable', desc: 'Built for growth, modular systems' },
              { title: 'Investable', desc: 'Commercial discipline, viable models' },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-mist text-center">
                <div className="text-2xl font-serif text-primary mb-2">{i + 1}</div>
                <h3 className="font-semibold text-ink text-sm mb-1">{value.title}</h3>
                <p className="text-xs text-slate">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Consolidation Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-primary">
              <h3 className="font-semibold text-primary mb-2">Option A: Use Website Colors</h3>
              <p className="text-sm text-slate mb-4">
                Adopt the newer, more muted palette across both portal and website for consistency.
              </p>
              <ul className="text-xs text-slate space-y-1">
                <li>+ More sophisticated, institutional</li>
                <li>+ Brown grounds in soil/agriculture</li>
                <li>- Requires portal color updates</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-ink mb-2">Option B: Use Portal Colors</h3>
              <p className="text-sm text-slate mb-4">
                Keep the brighter green and blue-grey for a more finance-forward feel.
              </p>
              <ul className="text-xs text-slate space-y-1">
                <li>+ Already implemented in portal</li>
                <li>+ Blue-grey signals finance/rigor</li>
                <li>- Less earthy/agricultural feel</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-ink mb-2">Option C: Hybrid</h3>
              <p className="text-sm text-slate mb-4">
                Portal keeps blue-grey (internal/finance), Website uses brown (external/agriculture).
              </p>
              <ul className="text-xs text-slate space-y-1">
                <li>+ Audience-appropriate variants</li>
                <li>+ Shared green, gold, typography</li>
                <li>- Two systems to maintain</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">
            HISAGEN Brand Guidelines Comparison • Internal Reference
          </p>
          <p className="text-xs text-mist mt-2">
            Source files: "HISAGEN Brand Guidelines.md" (Portal) • "HISAGEN-BRAND-GUIDELINES.md" (Website)
          </p>
        </section>
      </div>
    </main>
  );
}
