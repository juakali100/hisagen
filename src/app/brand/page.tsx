'use client';

import { useState } from 'react';

export default function BrandGuidelinesPage() {
  const [openSections, setOpenSections] = useState<string[]>(['02']); // Logo open by default as it's the major gap

  const toggleSection = (number: string) => {
    setOpenSections(prev =>
      prev.includes(number)
        ? prev.filter(n => n !== number)
        : [...prev, number]
    );
  };

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

  // Brand Pack Structure - Professional Agency Standard
  const brandPackSections = [
    {
      number: '01',
      title: 'Brand Strategy',
      status: 'partial',
      items: [
        { name: 'Brand Story & Origin', status: 'complete' },
        { name: 'Mission Statement', status: 'complete' },
        { name: 'Vision Statement', status: 'complete' },
        { name: 'Core Values', status: 'complete' },
        { name: 'Brand Positioning', status: 'complete' },
        { name: 'Brand Personality & Archetype', status: 'complete' },
        { name: 'Key Messages by Audience', status: 'complete' },
        { name: 'Competitive Differentiation', status: 'gap' },
        { name: 'Brand Promise', status: 'complete' },
      ]
    },
    {
      number: '02',
      title: 'Logo System',
      status: 'gap',
      items: [
        { name: 'Primary Logo (Full Color)', status: 'gap' },
        { name: 'Secondary Logo / Logomark', status: 'gap' },
        { name: 'Horizontal & Stacked Variants', status: 'gap' },
        { name: 'Monochrome Versions (Black/White)', status: 'gap' },
        { name: 'Clear Space Requirements', status: 'gap' },
        { name: 'Minimum Size Guidelines', status: 'gap' },
        { name: 'Logo Misuse Examples', status: 'gap' },
        { name: 'Favicon & App Icon', status: 'gap' },
        { name: 'Logo Files (SVG, PNG, EPS)', status: 'gap' },
      ]
    },
    {
      number: '03',
      title: 'Color Palette',
      status: 'complete',
      items: [
        { name: 'Primary Colors', status: 'complete' },
        { name: 'Secondary/Accent Colors', status: 'complete' },
        { name: 'Extended Palette', status: 'complete' },
        { name: 'Gradients', status: 'complete' },
        { name: 'Color Usage Guidelines', status: 'complete' },
        { name: 'Accessibility (WCAG Compliance)', status: 'partial' },
        { name: 'Print Color Specs (CMYK/Pantone)', status: 'gap' },
      ]
    },
    {
      number: '04',
      title: 'Typography',
      status: 'complete',
      items: [
        { name: 'Primary Typeface', status: 'complete' },
        { name: 'Secondary Typeface', status: 'complete' },
        { name: 'Type Hierarchy & Scale', status: 'complete' },
        { name: 'Font Pairing Guidelines', status: 'complete' },
        { name: 'Web Font Implementation', status: 'complete' },
        { name: 'Print Typography Specs', status: 'gap' },
        { name: 'Font Licensing Info', status: 'gap' },
      ]
    },
    {
      number: '05',
      title: 'Photography & Imagery',
      status: 'partial',
      items: [
        { name: 'Photography Direction', status: 'complete' },
        { name: 'Image Style Guidelines', status: 'complete' },
        { name: 'Do\'s and Don\'ts', status: 'complete' },
        { name: 'Curated Image Library', status: 'partial' },
        { name: 'Image Treatment/Filters', status: 'gap' },
        { name: 'Illustration Style', status: 'gap' },
      ]
    },
    {
      number: '06',
      title: 'Iconography',
      status: 'partial',
      items: [
        { name: 'Icon Style Guidelines', status: 'complete' },
        { name: 'Icon Grid & Construction', status: 'gap' },
        { name: 'Icon Library/Set', status: 'gap' },
        { name: 'Custom Icon Designs', status: 'gap' },
      ]
    },
    {
      number: '07',
      title: 'Graphic Elements',
      status: 'partial',
      items: [
        { name: 'Patterns & Textures', status: 'gap' },
        { name: 'Graphic Devices', status: 'partial' },
        { name: 'Data Visualization Style', status: 'complete' },
        { name: 'Infographic Templates', status: 'gap' },
      ]
    },
    {
      number: '08',
      title: 'Voice & Tone',
      status: 'complete',
      items: [
        { name: 'Voice Characteristics', status: 'complete' },
        { name: 'Tone Guidelines', status: 'complete' },
        { name: 'Writing Principles', status: 'complete' },
        { name: 'Example Copy', status: 'complete' },
        { name: 'Messaging by Audience', status: 'complete' },
        { name: 'Words to Use/Avoid', status: 'partial' },
      ]
    },
    {
      number: '09',
      title: 'Applications',
      status: 'partial',
      items: [
        { name: 'Business Cards', status: 'gap' },
        { name: 'Letterhead & Documents', status: 'gap' },
        { name: 'Email Signatures', status: 'complete' },
        { name: 'Presentation Templates', status: 'partial' },
        { name: 'Social Media Templates', status: 'gap' },
        { name: 'Website Guidelines', status: 'complete' },
        { name: 'Report Templates', status: 'partial' },
        { name: 'Signage & Environmental', status: 'gap' },
      ]
    },
    {
      number: '10',
      title: 'Digital Guidelines',
      status: 'partial',
      items: [
        { name: 'UI Components', status: 'partial' },
        { name: 'Motion & Animation', status: 'complete' },
        { name: 'Interactive States', status: 'partial' },
        { name: 'Responsive Behavior', status: 'complete' },
        { name: 'Accessibility Standards', status: 'partial' },
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-800 border-green-200';
      case 'partial': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'gap': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'complete': return 'Complete';
      case 'partial': return 'Partial';
      case 'gap': return 'Gap';
      default: return status;
    }
  };

  const getSummaryIcons = (items: { name: string; status: string }[]) => {
    const complete = items.filter(i => i.status === 'complete').length;
    const partial = items.filter(i => i.status === 'partial').length;
    const gap = items.filter(i => i.status === 'gap').length;
    return { complete, partial, gap, total: items.length };
  };

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Internal Reference</p>
          <h1 className="text-4xl font-serif font-bold">Brand Guidelines</h1>
          <p className="mt-4 text-lg opacity-90">
            Professional Brand Pack Structure & Gap Analysis
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

        {/* Overview Stats */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Brand Pack Completeness</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-700">4</p>
              <p className="text-sm text-green-600 mt-1">Sections Complete</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-yellow-700">5</p>
              <p className="text-sm text-yellow-600 mt-1">Sections Partial</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-red-700">1</p>
              <p className="text-sm text-red-600 mt-1">Major Gap (Logo)</p>
            </div>
          </div>
        </section>

        {/* Accordion Sections */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-ink">Professional Brand Pack Structure</h2>
              <p className="text-slate text-sm mt-1">Based on leading agency standards (Pentagram, Wolff Olins, Landor)</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setOpenSections(brandPackSections.map(s => s.number))}
                className="px-3 py-1 text-xs bg-slate/10 hover:bg-slate/20 rounded transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={() => setOpenSections([])}
                className="px-3 py-1 text-xs bg-slate/10 hover:bg-slate/20 rounded transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {brandPackSections.map((section) => {
              const isOpen = openSections.includes(section.number);
              const summary = getSummaryIcons(section.items);

              return (
                <div key={section.number} className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(section.number)}
                    className="w-full flex items-center justify-between p-4 hover:bg-parchment/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-serif text-primary font-bold w-8">{section.number}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{section.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          {summary.complete > 0 && (
                            <span className="text-xs text-green-600 flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-green-500 inline-flex items-center justify-center text-white text-[8px]">✓</span>
                              {summary.complete}
                            </span>
                          )}
                          {summary.partial > 0 && (
                            <span className="text-xs text-yellow-600 flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white text-[8px]">◐</span>
                              {summary.partial}
                            </span>
                          )}
                          {summary.gap > 0 && (
                            <span className="text-xs text-red-600 flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-red-200 inline-flex items-center justify-center text-red-600 text-[8px]">○</span>
                              {summary.gap}
                            </span>
                          )}
                          <span className="text-xs text-slate">of {summary.total}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(section.status)}`}>
                        {getStatusLabel(section.status)}
                      </span>
                      <span className={`text-slate transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="border-t border-mist p-4 bg-parchment/30">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            {item.status === 'complete' && (
                              <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                            )}
                            {item.status === 'partial' && (
                              <span className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">◐</span>
                            )}
                            {item.status === 'gap' && (
                              <span className="w-4 h-4 rounded-full bg-red-200 flex items-center justify-center text-red-600 text-xs">○</span>
                            )}
                            <span className={item.status === 'gap' ? 'text-slate' : 'text-ink'}>{item.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Section-specific extended content */}
                      {section.number === '02' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold text-red-800 text-sm mb-2">Logo Development Required</h4>
                            <p className="text-red-700 text-xs">
                              HISAGEN currently operates with a text-only wordmark. Professional logo design typically costs £2,000-8,000.
                            </p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="bg-parchment p-4 rounded-lg">
                              <span className="text-2xl font-serif font-bold text-primary tracking-tight">HISAGEN</span>
                            </div>
                            <div className="bg-primary p-4 rounded-lg">
                              <span className="text-2xl font-serif font-bold text-white tracking-tight">HISAGEN</span>
                            </div>
                            <div className="bg-ink p-4 rounded-lg">
                              <span className="text-2xl font-serif font-bold text-white tracking-tight">HISAGEN</span>
                            </div>
                          </div>
                          <p className="text-xs text-slate mt-3">Current state: Source Serif 4 Bold wordmark. No symbol exists yet.</p>
                        </div>
                      )}

                      {section.number === '03' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                            <p className="text-xs text-yellow-800">
                              <strong>Decision Required:</strong> Two color systems exist (Portal vs Website). Review needed to consolidate.
                            </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Portal Colors</p>
                              <div className="flex gap-2">
                                {portalColors.primary.map(c => (
                                  <div key={c.hex} className="w-10 h-10 rounded shadow-sm" style={{ backgroundColor: c.hex }} title={`${c.name}: ${c.hex}`} />
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Website Colors</p>
                              <div className="flex gap-2">
                                {websiteColors.primary.map(c => (
                                  <div key={c.hex} className="w-10 h-10 rounded shadow-sm" style={{ backgroundColor: c.hex }} title={`${c.name}: ${c.hex}`} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.number === '04' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Inter (Body & UI)</p>
                              <p className="text-lg font-sans">The quick brown fox jumps over the lazy dog</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Source Serif 4 (Headlines)</p>
                              <p className="text-lg font-serif">The quick brown fox jumps over the lazy dog</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.number === '08' && (
                        <div className="mt-4 pt-4 border-t border-mist">
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-semibold text-primary mb-2">We Sound Like</p>
                              <ul className="space-y-1 text-slate text-xs">
                                <li>• Authoritative — Evidence-based, confident</li>
                                <li>• Clear & Direct — No jargon</li>
                                <li>• Warm but Disciplined</li>
                                <li>• Forward-Looking</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-red-600 mb-2">We Don't Sound Like</p>
                              <ul className="space-y-1 text-slate text-xs">
                                <li>• NGO or charity language</li>
                                <li>• Promotional hype</li>
                                <li>• Academic abstraction</li>
                                <li>• Aid-centric narratives</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Priority Gaps Summary */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Priority Gaps to Address</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Gap</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Est. Investment</th>
                  <th className="text-left p-4">When to Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                <tr>
                  <td className="p-4 font-medium">Professional Logo System</td>
                  <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">High</span></td>
                  <td className="p-4">£2,000 - £8,000</td>
                  <td className="p-4">Before major funding round or public launch</td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Color System Consolidation</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4">Internal effort</td>
                  <td className="p-4">Before website goes live to public</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Business Card & Stationery</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4">£300 - £800</td>
                  <td className="p-4">Before investor meetings</td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Presentation Templates</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4">£500 - £1,500</td>
                  <td className="p-4">Before pitch deck finalisation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Social Media Templates</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Low</span></td>
                  <td className="p-4">£200 - £500</td>
                  <td className="p-4">When active on social channels</td>
                </tr>
                <tr className="bg-parchment">
                  <td className="p-4 font-medium">Print Specifications (CMYK/Pantone)</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Low</span></td>
                  <td className="p-4">£100 - £200</td>
                  <td className="p-4">When preparing for print production</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">
            HISAGEN Brand Pack • Internal Reference Document
          </p>
          <p className="text-xs text-mist mt-2">
            Structure based on professional agency standards (Pentagram, Wolff Olins, Landor)
          </p>
          <p className="text-xs text-mist mt-1">
            Source files: "HISAGEN Brand Guidelines.md" (Portal) • "HISAGEN-BRAND-GUIDELINES.md" (Website)
          </p>
        </section>
      </div>
    </main>
  );
}
