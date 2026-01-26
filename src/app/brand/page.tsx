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

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">

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

        {/* Brand Pack Structure */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">Professional Brand Pack Structure</h2>
          <p className="text-slate mb-6">Based on leading agency standards (Pentagram, Wolff Olins, Landor)</p>

          <div className="space-y-4">
            {brandPackSections.map((section) => (
              <div key={section.number} className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-mist">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-serif text-primary font-bold">{section.number}</span>
                    <h3 className="text-lg font-semibold text-ink">{section.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(section.status)}`}>
                    {getStatusLabel(section.status)}
                  </span>
                </div>
                <div className="p-4">
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Section - GAP */}
        <section id="logo">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-serif font-semibold text-ink">02. Logo System</h2>
            <span className="px-3 py-1 rounded-full text-xs font-medium border bg-red-100 text-red-800 border-red-200">
              Major Gap
            </span>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-2">Logo Development Required</h3>
            <p className="text-red-700 text-sm mb-4">
              HISAGEN currently operates with a text-only wordmark. A professional logo system would include:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-red-700">
              <div>
                <p className="font-medium mb-2">Essential Deliverables:</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Primary logo (symbol + wordmark)</li>
                  <li>Logomark only (for small applications)</li>
                  <li>Clear space & minimum size rules</li>
                  <li>Color variations (full, mono, reversed)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">File Formats Needed:</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>SVG (vector, scalable)</li>
                  <li>PNG (transparent, multiple sizes)</li>
                  <li>EPS (for print production)</li>
                  <li>Favicon & app icons</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Current State */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist mb-6">
            <h3 className="font-semibold text-ink mb-4">Current State: Text Wordmark</h3>
            <div className="flex items-center gap-8">
              <div className="bg-parchment p-8 rounded-lg">
                <span className="text-4xl font-serif font-bold text-primary tracking-tight">HISAGEN</span>
              </div>
              <div className="bg-primary p-8 rounded-lg">
                <span className="text-4xl font-serif font-bold text-white tracking-tight">HISAGEN</span>
              </div>
              <div className="bg-ink p-8 rounded-lg">
                <span className="text-4xl font-serif font-bold text-white tracking-tight">HISAGEN</span>
              </div>
            </div>
            <p className="text-sm text-slate mt-4">
              Using Source Serif 4 Bold. No symbol/icon exists yet.
            </p>
          </div>

          {/* Logo Concept Directions from Guidelines */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
            <h3 className="font-semibold text-ink mb-4">Logo Concept Directions (From Brand Guidelines)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-mist rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Direction 1: The Living System</h4>
                <p className="text-sm text-slate mb-2">
                  Abstract symbol inspired by microbial networks and root systems.
                </p>
                <p className="text-xs text-mist">
                  Mood: Intelligent, regenerative, modern
                </p>
                <p className="text-xs text-slate mt-2">
                  Ref: Indigo Ag, Pivot Bio (conceptual)
                </p>
              </div>
              <div className="border border-mist rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Direction 2: Signal Forward</h4>
                <p className="text-sm text-slate mb-2">
                  Clean wordmark with distinctive forward-motion accent.
                </p>
                <p className="text-xs text-mist">
                  Mood: Confident, institutional, scalable
                </p>
                <p className="text-xs text-slate mt-2">
                  Ref: Novonesis, Ørsted
                </p>
              </div>
              <div className="border border-mist rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Direction 3: Measured Growth</h4>
                <p className="text-sm text-slate mb-2">
                  Geometric mark based on growth curves and yield uplift.
                </p>
                <p className="text-xs text-mist">
                  Mood: Precise, data-driven, optimistic
                </p>
                <p className="text-xs text-slate mt-2">
                  Ref: Corteva, Bayer Crop Science
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Investment Note:</strong> Professional logo design typically costs £2,000-8,000 from a specialist agency.
                Consider timing based on funding stage and external visibility needs.
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette Comparison */}
        <section id="colors">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-serif font-semibold text-ink">03. Color Palette</h2>
            <span className="px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
              Complete
            </span>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Decision Required:</strong> Two color systems exist. Review below to consolidate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Portal Colors */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="text-lg font-semibold text-ink mb-2">Portal (Original)</h3>
              <p className="text-sm text-slate mb-4">Currently implemented in this portal</p>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider">Primary</p>
                {portalColors.primary.map((color) => (
                  <div key={color.hex} className="flex items-center gap-3">
                    <div
                      className="w-14 h-10 rounded shadow-sm flex items-center justify-center"
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
                      className="w-14 h-10 rounded shadow-sm flex items-center justify-center border border-mist"
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
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="text-lg font-semibold text-ink mb-2">Website (Newer)</h3>
              <p className="text-sm text-slate mb-4">Designed for public-facing site</p>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider">Primary</p>
                {websiteColors.primary.map((color) => (
                  <div key={color.hex} className="flex items-center gap-3">
                    <div
                      className="w-14 h-10 rounded shadow-sm flex items-center justify-center"
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
                      className="w-14 h-10 rounded shadow-sm flex items-center justify-center border border-mist"
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

          {/* Gaps in Color System */}
          <div className="mt-6 bg-white rounded-lg p-6 shadow-sm border border-mist">
            <h3 className="font-semibold text-ink mb-3">Color System Gaps</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-red-200 flex items-center justify-center text-red-600 text-xs mt-0.5">○</span>
                <div>
                  <p className="font-medium text-ink">Print Specifications</p>
                  <p className="text-slate text-xs">CMYK values and Pantone matching for print production</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs mt-0.5">◐</span>
                <div>
                  <p className="font-medium text-ink">Accessibility Testing</p>
                  <p className="text-slate text-xs">Full WCAG 2.1 AA compliance verification needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-serif font-semibold text-ink">04. Typography</h2>
            <span className="px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
              Complete
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-ink mb-4">Primary: Inter</h3>
              <p className="text-sm text-slate mb-4">Body text, UI, data, navigation</p>
              <div className="space-y-2 font-sans">
                <p className="text-2xl">The quick brown fox jumps</p>
                <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-base">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
              <p className="text-xs text-mist mt-4">Google Fonts (Free) • Variable font available</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-ink mb-4">Secondary: Source Serif 4</h3>
              <p className="text-sm text-slate mb-4">Headlines, statements, impact numbers</p>
              <div className="space-y-2 font-serif">
                <p className="text-2xl">The quick brown fox jumps</p>
                <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-base">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
              <p className="text-xs text-mist mt-4">Google Fonts (Free) • Variable font available</p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-6 shadow-sm border border-mist">
            <h3 className="font-semibold text-ink mb-4">Type Scale (Web)</h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 border-b border-mist pb-2">
                <span className="text-xs text-slate w-16">H1 / 48px</span>
                <span className="text-5xl font-serif">Regenerative Agriculture</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-mist pb-2">
                <span className="text-xs text-slate w-16">H2 / 36px</span>
                <span className="text-4xl font-serif">Dual Impact Model</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-mist pb-2">
                <span className="text-xs text-slate w-16">H3 / 28px</span>
                <span className="text-2xl font-sans font-bold">Climate & Social Impact</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-mist pb-2">
                <span className="text-xs text-slate w-16">Body / 16px</span>
                <span className="text-base font-sans">HISAGEN deploys proven bio-stimulant technology delivering 15-30% yield improvements.</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-slate w-16">Caption / 14px</span>
                <span className="text-sm font-sans text-slate">Source: Uganda pilot data, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Voice & Tone */}
        <section id="voice">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-serif font-semibold text-ink">08. Voice & Tone</h2>
            <span className="px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
              Complete
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">We Sound Like</h3>
              <ul className="space-y-2 text-slate">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Authoritative</strong> — Evidence-based, confident, precise</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Clear & Direct</strong> — No jargon or abstraction</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Warm but Disciplined</strong> — Human without sentimentality</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Forward-Looking</strong> — Oriented toward scale</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-red-600 mb-3">We Do Not Sound Like</h3>
              <ul className="space-y-2 text-slate">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  NGO or charity language
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Promotional hype
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Academic abstraction
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Aid-centric or paternalistic narratives
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-6 shadow-sm border border-mist">
            <h3 className="font-semibold text-ink mb-4">Example Copy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Website Hero</p>
                <p className="text-slate text-sm italic">
                  "Proven agricultural technology. Measurable impact. Regenerating African soils while increasing farmer incomes."
                </p>
              </div>
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Investor Pitch</p>
                <p className="text-slate text-sm italic">
                  "HISAGEN deploys patented microbial bio-stimulants that increase yields by up to 30% and generate verified soil carbon credits."
                </p>
              </div>
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Farmer-Facing</p>
                <p className="text-slate text-sm italic">
                  "This product helps your crops grow stronger using less fertiliser, improving harvests while keeping your soil healthy."
                </p>
              </div>
            </div>
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
