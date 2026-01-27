export default function LogoPage() {
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
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

        {/* Starting Point: Keir's Draft */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Starting Point</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-lg border-2 border-primary/20 overflow-hidden">
              <div className="bg-parchment flex items-center justify-center p-8">
                <img
                  src="/logos/hisagen-keir-draft.png"
                  alt="HISAGEN Draft Logo"
                  className="max-w-[200px] max-h-[200px] object-contain"
                />
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-medium text-ink">HISAGEN&apos;s Original Concept</p>
                <div className="mt-3 pt-3 border-t border-mist">
                  <p className="text-xs text-slate mb-2">At social media icon sizes:</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img src="/logos/hisagen-keir-draft.png" alt="Logo at 16px" className="w-4 h-4 object-contain" />
                      <span className="text-[10px] text-slate">16px</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/logos/hisagen-keir-draft.png" alt="Logo at 32px" className="w-8 h-8 object-contain" />
                      <span className="text-[10px] text-slate">32px</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/logos/hisagen-keir-draft.png" alt="Logo at 48px" className="w-12 h-12 object-contain" />
                      <span className="text-[10px] text-slate">48px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-ink">What This Captures</h3>
              <p className="text-sm text-slate">
                This design brings together several important HISAGEN themes: the shield and spears suggest
                strength and protection, the healthy crop represents agriculture at the core, the sunrise
                conveys hope and new beginnings, and the green and gold palette balances nature with value.
              </p>
              <h3 className="text-lg font-semibold text-ink">The Challenge</h3>
              <p className="text-sm text-slate">
                When a logo tries to communicate multiple ideas simultaneously, it can lose impact.
                The combination of shield, spears, crop, and sunrise, while meaningful, creates
                visual complexity that may read as institutional or academic rather than modern and investable.
              </p>
              <h3 className="text-lg font-semibold text-ink">The Opportunity</h3>
              <p className="text-sm text-slate">
                What if we kept the <strong>essence</strong>: the gold (value), the growth (agriculture),
                the strength (science-backed), but expressed it through a single, simplified symbol?
                One idea, executed with precision, that works from pitch deck to favicon.
              </p>
            </div>
          </div>
        </section>

        {/* HISAGEN's Input */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">What HISAGEN Wants to Capture</h2>
          <div className="bg-harvest/10 border border-harvest/30 rounded-lg p-5">
            <p className="text-sm text-slate mb-4">Ideas and themes to consider in the logo:</p>
            <div className="flex flex-wrap gap-2">
              {[
                'strength / protection',
                'healthy crops',
                'sunrise / hope',
                'green + gold',
                'African identity',
              ].map((item) => (
                <span key={item} className="px-3 py-1 bg-white border border-harvest/40 rounded-full text-sm text-ink">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate mt-4 italic">
              These are valuable themes. The challenge is: how many can one logo carry before it becomes cluttered?
            </p>
            <div className="mt-4 pt-4 border-t border-harvest/30 bg-yellow-50 -mx-5 -mb-5 px-5 py-4 rounded-b-lg">
              <p className="text-xs text-yellow-800">
                <strong>Additional ideas from HISAGEN:</strong> Any further input or themes can be captured here.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes a Good Logo */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">What a Good Logo Needs</h2>
          <div className="bg-white border border-mist rounded-lg p-5 mb-6">
            <p className="text-sm text-slate">
              <strong className="text-ink">Why simple?</strong> The most iconic logos in the world are almost absurdly simple:
              a single swoosh, a bitten apple, three stripes. This is deliberate strategy. Simple logos are
              instantly recognizable, work at any size, and become more memorable through repetition. Complex logos
              with multiple elements (shields, crops, sunrises) try to tell the whole story in one image, but a logo
              isn&apos;t a story. It&apos;s a signature. The story comes from everything else: the website, the pitch deck,
              the work itself. The logo just needs to be the consistent mark that ties it all together.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">Works Small</p>
              <p className="text-xs text-slate mt-1">Must be recognizable at 16px: social media icons, favicons, app badges.</p>
            </div>
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">Simple & Clean</p>
              <p className="text-xs text-slate mt-1">One idea, not five. Complexity = amateur. Simplicity = professional.</p>
            </div>
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">Investor-Ready</p>
              <p className="text-xs text-slate mt-1">Must feel credible in a pitch deck. Premium, not NGO/charity.</p>
            </div>
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">Distinctive</p>
              <p className="text-xs text-slate mt-1">Avoid generic green clichés. Own a visual space competitors don&apos;t.</p>
            </div>
          </div>
          <div className="mt-6 bg-terracotta-50 border border-terracotta-200 rounded-lg p-5">
            <p className="font-semibold text-sm text-terracotta-700 mb-2">Watch out for</p>
            <p className="text-xs text-terracotta-600">
              Common clichés in the agricultural/climate space: leaf icons, seedlings, globes with leaves,
              hands cupping plants, generic green gradients, sunrise/sunset motifs. These signal &quot;another green NGO&quot;
              rather than &quot;serious science-backed enterprise&quot;.
            </p>
          </div>
        </section>

        {/* The Brief */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">The Brief</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-lg text-ink mb-4">
              Create a logo that captures HISAGEN&apos;s identity: works at small sizes,
              feels professional, and stands out in the agricultural/climate space.
            </p>
            <div className="flex flex-wrap gap-2">
              {['soil', 'science', 'value', 'growth', 'precision', 'African-led'].map((keyword) => (
                <span key={keyword} className="px-3 py-1 bg-white border border-primary/30 rounded-full text-sm text-ink">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* HISAGEN Vision & Brand */}
        <section className="bg-white border border-mist rounded-lg p-5">
          <h3 className="text-sm font-semibold text-ink mb-3">HISAGEN Vision & Brand</h3>
          <p className="text-xs text-slate mb-3 font-medium">
            <span className="text-primary">H</span>igh <span className="text-primary">I</span>mpact <span className="text-primary">S</span>oil/Seed <span className="text-primary">A</span>pplication for <span className="text-primary">G</span>reener <span className="text-primary">E</span>nvironme<span className="text-primary">n</span>ts
          </p>
          <div className="space-y-2 text-sm text-slate">
            <p><strong className="text-ink">Vision:</strong> A regenerative agricultural economy where land stewards benefit from improved yields and a share of verified carbon revenues.</p>
            <p><strong className="text-ink">Mission:</strong> Make agricultural carbon bankable through proven soil science, rigorous digital verification, and structured blended finance.</p>
            <p><strong className="text-ink">What we do:</strong> Science-backed soil regeneration that turns degraded land into productive, carbon-storing agriculture.</p>
          </div>
        </section>

        {/* Keywords / Brainstorm */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Keywords</h2>
          <p className="text-sm text-slate mb-4">Visual and conceptual ideas to explore</p>
          <div className="flex flex-wrap gap-2">
            {[
              'soil',
              'seed',
              'microbial',
              'nodes',
              'roots',
              'carbon',
              'network',
              'agriculture',
              'prosperity',
              'science',
              'gold',
              'underground',
              'layers',
              'nucleus',
              'emergence',
            ].map((keyword) => (
              <span key={keyword} className="px-3 py-1 bg-white border border-mist rounded-full text-sm text-ink">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {/* Brand Colors */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Brand Colors</h2>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Primary</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg overflow-hidden border border-mist">
                  <div className="h-10" style={{ backgroundColor: '#1F4D3A' }}></div>
                  <div className="p-2 bg-white">
                    <p className="text-[10px] font-semibold text-ink">Deep Regenerative Green</p>
                    <p className="text-[10px] text-slate">#1F4D3A</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-mist">
                  <div className="h-10" style={{ backgroundColor: '#1F2E3A' }}></div>
                  <div className="p-2 bg-white">
                    <p className="text-[10px] font-semibold text-ink">Deep Blue-Grey</p>
                    <p className="text-[10px] text-slate">#1F2E3A</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-mist">
                  <div className="h-10" style={{ backgroundColor: '#C6A04A' }}></div>
                  <div className="p-2 bg-white">
                    <p className="text-[10px] font-semibold text-ink">Harvest Gold</p>
                    <p className="text-[10px] text-slate">#C6A04A</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-medium text-slate uppercase tracking-wider mb-2">Secondary</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg overflow-hidden border border-mist">
                  <div className="h-10" style={{ backgroundColor: '#2D2A26' }}></div>
                  <div className="p-2 bg-white">
                    <p className="text-[10px] font-semibold text-ink">Black Cotton Soil</p>
                    <p className="text-[10px] text-slate">#2D2A26</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-mist">
                  <div className="h-10" style={{ backgroundColor: '#E6DED3' }}></div>
                  <div className="p-2 bg-white">
                    <p className="text-[10px] font-semibold text-ink">Clay Neutral</p>
                    <p className="text-[10px] text-slate">#E6DED3</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-mist">
                  <div className="h-10" style={{ backgroundColor: '#6F7C82' }}></div>
                  <div className="p-2 bg-white">
                    <p className="text-[10px] font-semibold text-ink">Muted Slate</p>
                    <p className="text-[10px] text-slate">#6F7C82</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-mist">
            <p className="text-xs font-semibold text-ink mb-2">Logo Color Rationale</p>
            <div className="text-xs text-slate space-y-1">
              <p>The logo should work in single color first (monochrome test), then color enhances it.</p>
              <p><strong className="text-ink">Option 1:</strong> Deep Regenerative Green alone: strong, confident, connects to soil science.</p>
              <p><strong className="text-ink">Option 2:</strong> Green + Gold: captures the dual value prop of environmental impact (green) and farmer prosperity (gold). The gold lifts it from "another green NGO" to "this creates value."</p>
              <p className="text-slate/70 italic">Avoid: multiple greens (too generic), blue (too corporate), or full palette in the logo.</p>
            </div>
          </div>
        </section>

        {/* What the Logo Should Convey */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">What the Logo Should Convey</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
            <p className="text-sm text-ink mb-4">
              HISAGEN sits between four worlds: <strong>agricultural</strong>, <strong>environmental</strong>, <strong>scientific</strong>, and <strong>commercial</strong>. The logo needs to bridge all four without defaulting to any single one.
            </p>
            <p className="text-sm font-medium text-primary">
              One sentence test: &quot;Science-backed soil regeneration that creates value.&quot;
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">Value, not just virtue</p>
              <p className="text-xs text-slate mt-1">This isn&apos;t charity. It creates wealth for farmers and investors. The gold matters as much as the green.</p>
            </div>
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">Science, not sentiment</p>
              <p className="text-xs text-slate mt-1">Evidence-based, rigorous, credible. Microbial technology, verified carbon. Precision, not passion.</p>
            </div>
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">What&apos;s underneath</p>
              <p className="text-xs text-slate mt-1">Soil is the foundation. Hint at depth, layers, roots, the unseen network that makes everything above possible.</p>
            </div>
            <div className="bg-white rounded-lg border border-mist p-4">
              <p className="font-semibold text-sm text-ink">Environmental regeneration</p>
              <p className="text-xs text-slate mt-1">Carbon capture, biodiversity increase, water retention. Real ecological benefits, not greenwashing.</p>
            </div>
            <div className="bg-white rounded-lg border border-mist p-4 md:col-span-2">
              <p className="font-semibold text-sm text-ink">Premium, not NGO</p>
              <p className="text-xs text-slate mt-1">Must feel investable. Clean, confident, could sit in a pitch deck next to any tech company.</p>
            </div>
          </div>
          <div className="mt-6 bg-white border border-mist rounded-lg p-5">
            <p className="text-sm text-slate">
              This is a challenge given HISAGEN&apos;s rare positioning. Most companies sit in one or two worlds. HISAGEN has to credibly speak to a farmer in Uganda, a carbon buyer in London, a scientist reviewing methodology, and an investor evaluating a pitch deck. Trying to literally represent all four becomes cluttered. The logo needs to evoke an underlying truth that connects them all.
            </p>
            <p className="text-sm text-ink font-medium mt-3">
              Something like: &quot;What&apos;s underground creates value above.&quot;
            </p>
            <p className="text-xs text-slate mt-2">
              That works for soil (agricultural), carbon storage (environmental), microbial networks (scientific), and wealth creation (commercial).
            </p>
          </div>
        </section>

        {/* Designer Brief */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Designer Brief</h2>
          <div className="bg-white border border-mist rounded-lg p-6 space-y-4">
            <div className="text-sm text-slate space-y-3">
              <p><strong className="text-ink">Core concept:</strong> The hidden network beneath the surface that creates value. Think: carbon atoms, microbial connections, root nodes, soil networks.</p>
              <p><strong className="text-ink">Visual direction:</strong> Organic molecular. A central nucleus with connected nodes, suggesting both carbon structure and living soil networks. Flowing natural lines, not rigid geometry. Should feel alive but precise.</p>
              <p><strong className="text-ink">Colour:</strong> Design in monochrome black first. Must work in single colour before adding Deep Green (#1F4D3A) or Gold (#C6A04A).</p>
            </div>
            <div className="pt-4 border-t border-mist">
              <p className="text-xs font-semibold text-ink mb-2">Constraints</p>
              <ul className="text-xs text-slate space-y-1">
                <li>• Must be legible at 16px</li>
                <li>• No leaves, seedlings, globes, or hands</li>
                <li>• No text in the mark</li>
                <li>• Should feel like a premium tech company, not an NGO</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-mist">
              <p className="text-xs text-slate">
                <strong className="text-ink">Tone:</strong> Scientific, grounded, quietly confident. The visual equivalent of &quot;we&apos;ve done the research.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Current Working Logo */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Current Working Logo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border-2 border-primary/30 overflow-hidden">
              <div className="aspect-square bg-parchment flex items-center justify-center p-8">
                <img
                  src="/logos/cellular-sequester-color.png"
                  alt="HISAGEN Working Logo"
                  className="max-w-[200px] max-h-[200px] object-contain"
                />
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-medium text-ink">Cellular Sequester</p>
                <p className="text-xs text-slate mt-1">Green outer ring, gold inner nodes. Simple, distinctive, scalable.</p>
                <div className="mt-3 pt-3 border-t border-mist">
                  <p className="text-xs text-slate mb-2">At small sizes:</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img src="/logos/cellular-sequester-color.png" alt="Logo at 16px" className="w-4 h-4 object-contain" />
                      <span className="text-[10px] text-slate">16px</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/logos/cellular-sequester-color.png" alt="Logo at 32px" className="w-8 h-8 object-contain" />
                      <span className="text-[10px] text-slate">32px</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/logos/cellular-sequester-color.png" alt="Logo at 48px" className="w-12 h-12 object-contain" />
                      <span className="text-[10px] text-slate">48px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-mist p-4">
                <p className="text-sm font-medium text-ink mb-2">What it captures</p>
                <ul className="text-xs text-slate space-y-1">
                  <li>• Cellular/molecular: scientific credibility</li>
                  <li>• Green ring: environmental, regeneration</li>
                  <li>• Gold nodes: value, prosperity</li>
                  <li>• Enclosed form: containment, sequestration</li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-lg border border-primary/20 p-4">
                <p className="text-sm font-medium text-ink mb-2">Status</p>
                <p className="text-xs text-slate">Working concept for testing. May need refinement for final production use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Directions to Explore */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Directions to Explore</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Concept 1 */}
            <div className="bg-white rounded-lg border border-mist overflow-hidden">
              <div className="aspect-square bg-parchment flex items-center justify-center p-6">
                <img
                  src="/logos/germination-core.jpeg"
                  alt="Germination Core"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-semibold text-ink mb-2">1. Seed / Growth</p>
                <p className="text-sm text-slate">
                  Emergence and potential. The beginning of regeneration.
                  Simple, organic, universally understood. <em>Agricultural.</em>
                </p>
              </div>
            </div>

            {/* Concept 2 */}
            <div className="bg-white rounded-lg border border-mist overflow-hidden">
              <div className="aspect-square bg-parchment flex items-center justify-center p-6">
                <img
                  src="/logos/bio-node-network.jpeg"
                  alt="Bio-Node Network"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-semibold text-ink mb-2">2. Network / Connection</p>
                <p className="text-sm text-slate">
                  Root systems, mycelium, molecular bonds. The hidden network underground.
                  Modern, tech-forward. <em>Scientific.</em>
                </p>
              </div>
            </div>

            {/* Concept 3 */}
            <div className="bg-white rounded-lg border border-mist overflow-hidden">
              <div className="aspect-square bg-parchment flex items-center justify-center p-6">
                <img
                  src="/logos/cellular-sequester.jpeg"
                  alt="Cellular Sequester"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-semibold text-ink mb-2">3. Cellular / Molecular</p>
                <p className="text-sm text-slate">
                  Carbon atoms, cellular structures, the microscopic world.
                  Precision and distinctiveness. <em>Scientific.</em>
                </p>
              </div>
            </div>

            {/* Concept 4 */}
            <div className="bg-white rounded-lg border border-mist overflow-hidden">
              <div className="aspect-square bg-parchment flex items-center justify-center p-6">
                <img
                  src="/logos/catalyst-cluster.jpeg"
                  alt="Catalyst Cluster"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-semibold text-ink mb-2">4. Layers / Depth</p>
                <p className="text-sm text-slate">
                  Soil strata, what&apos;s underneath, the foundation that creates value above.
                  Grounded, substantial. <em>Environmental.</em>
                </p>
              </div>
            </div>

            {/* Concept 5 */}
            <div className="bg-white rounded-lg border border-mist overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/60 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">$</span>
                </div>
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-semibold text-ink mb-2">5. Value / Prosperity</p>
                <p className="text-sm text-slate">
                  Gold, wealth creation, the economic opportunity. Not charity but enterprise.
                  Premium, investable. <em>Commercial.</em>
                </p>
              </div>
            </div>

            {/* Concept 6 */}
            <div className="bg-white rounded-lg border border-mist overflow-hidden">
              <div className="aspect-square bg-gradient-to-t from-primary/30 to-primary/10 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-12 h-1 bg-soil-brown/40 mx-auto mb-2"></div>
                  <div className="w-16 h-1 bg-primary/60 mx-auto mb-2"></div>
                  <div className="w-12 h-6 bg-primary mx-auto rounded-t-full"></div>
                </div>
              </div>
              <div className="p-4 border-t border-mist">
                <p className="font-semibold text-ink mb-2">6. Transformation</p>
                <p className="text-sm text-slate">
                  Degraded to productive, the regeneration journey. Before and after.
                  Change, renewal, hope. <em>Environmental.</em>
                </p>
              </div>
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
