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
        </section>

        {/* What HISAGEN Does */}
        <section className="bg-white border border-mist rounded-lg p-6">
          <p className="text-lg text-ink">
            <strong>What HISAGEN does:</strong> Science-backed soil regeneration for African smallholder farmers,
            turning degraded land into productive, carbon-storing agriculture.
          </p>
        </section>

        {/* The Brief */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">The Brief</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-lg text-ink mb-4">
              <strong>One sentence:</strong> A simplified symbol that communicates &quot;valuable soil science&quot;,
              working at 16px, feeling premium at pitch deck scale.
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

        {/* Keywords / Brainstorm */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Keywords</h2>
          <p className="text-sm text-slate mb-4">Visual and conceptual ideas to explore</p>
          <div className="flex flex-wrap gap-2">
            {[
              'soil',
              'roots',
              'gold',
              'seed',
              'carbon',
              'underground',
              'network',
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

        {/* Three Concept Directions */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Three Directions to Explore</h2>
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
                  Focus on emergence and potential. A seed or seedling: the beginning of regeneration.
                  Simple, organic, universally understood.
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
                  Root systems, mycelium, or molecular bonds. The hidden network underground.
                  Scientific, modern, tech-forward.
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
                  Emphasizes science and precision. Distinctive in the space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Explorations */}
        <section>
          <h2 className="text-lg font-serif font-semibold text-slate mb-4">Other Explorations</h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white rounded-lg border border-mist overflow-hidden">
              <div className="aspect-square bg-parchment flex items-center justify-center p-3">
                <img src="/logos/catalyst-cluster.jpeg" alt="Catalyst Cluster" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-xs text-slate p-2 text-center">Catalyst Cluster</p>
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
