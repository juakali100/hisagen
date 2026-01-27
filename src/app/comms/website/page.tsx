import Link from 'next/link';

export default function WebsiteDigitalPage() {
  // Current sitemap - pages that exist
  const sitePages = [
    { path: '/', name: 'Homepage', status: 'live', description: 'Hero, 5-step process, impact stats, partner logos' },
    { path: '/about', name: 'About', status: 'live', description: 'Company story, mission, team overview' },
    { path: '/program', name: 'Program', status: 'live', description: 'Agri-Carbon model, HISAGEN Stack, problem/solution' },
    { path: '/program/uganda', name: 'Uganda Pilot', status: 'live', description: 'Flagship project details, farmer stats' },
    { path: '/program/rwanda', name: 'Rwanda', status: 'live', description: 'Second market placeholder' },
    { path: '/contact', name: 'Contact', status: 'live', description: 'Contact form and info' },
  ];

  // Features implemented
  const featuresComplete = [
    { name: 'Responsive Design', notes: 'Mobile, tablet, desktop optimized' },
    { name: 'Navigation Flyout', notes: 'Hover menus with images, "Soon" badges for placeholder sections' },
    { name: 'Brand Colors', notes: 'Full HISAGEN palette (green, gold, black-cotton, terracotta)' },
    { name: 'Custom Icons', notes: 'Program-specific icon set' },
    { name: 'Image Optimization', notes: 'Next.js Image component throughout' },
    { name: 'Accessibility Basics', notes: 'Semantic HTML, focus states, alt text' },
  ];

  // Coming soon / planned
  const plannedFeatures = [
    { name: 'SEO Meta Tags', priority: 'high', notes: 'Title, description, OG tags for all pages' },
    { name: 'Analytics', priority: 'medium', notes: 'Google Analytics or Plausible setup' },
    { name: 'Contact Form Backend', priority: 'high', notes: 'Form submission handling' },
    { name: 'Blog/News Section', priority: 'low', notes: 'Content publishing capability' },
    { name: 'Team Page', priority: 'medium', notes: 'Leadership bios and photos' },
    { name: 'Full Accessibility Audit', priority: 'low', notes: 'WCAG 2.1 compliance check' },
  ];

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-secondary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/comms" className="text-sm opacity-80 hover:opacity-100 mb-4 inline-block">
            ← Communications Hub
          </Link>
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Comms Function 02</p>
          <h1 className="text-4xl font-serif font-bold">Website & Digital</h1>
          <p className="mt-4 text-lg opacity-90">
            Public website development, technical infrastructure, and digital presence
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

        {/* Quick Status */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-4xl font-bold text-primary">{sitePages.length}</p>
              <p className="text-sm text-slate mt-1">Pages Live</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-4xl font-bold text-success">{featuresComplete.length}</p>
              <p className="text-sm text-slate mt-1">Features Complete</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-4xl font-bold text-accent">{plannedFeatures.length}</p>
              <p className="text-sm text-slate mt-1">Features Planned</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <p className="text-lg font-bold text-secondary">Next.js 16</p>
              <p className="text-sm text-slate mt-1">Tech Stack</p>
            </div>
          </div>
        </section>

        {/* Live URLs */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Live Environments</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <h3 className="font-semibold text-ink">Preview Site</h3>
              </div>
              <a
                href="https://hisagen-preview.pandion.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm break-all"
              >
                hisagen-preview.pandion.studio
              </a>
              <p className="text-xs text-slate mt-2">Cloudflare Access protected • Auto-deploys from GitHub</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <h3 className="font-semibold text-ink">Production Domain</h3>
              </div>
              <p className="text-slate text-sm">TBD - pending domain strategy</p>
              <p className="text-xs text-slate mt-2">Options: hisagen.com, hisagen.org, hisagen.io</p>
            </div>
          </div>
        </section>

        {/* Sitemap */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Current Sitemap</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Route</th>
                  <th className="text-left p-4">Page</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {sitePages.map((page, i) => (
                  <tr key={page.path} className={i % 2 === 1 ? 'bg-parchment/50' : ''}>
                    <td className="p-4 font-mono text-xs text-primary">{page.path}</td>
                    <td className="p-4 font-medium">{page.name}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        {page.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate">{page.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Structure */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Navigation Structure</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-3">About Flyout</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Our Story</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">Mission & Vision (Soon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">Theory of Change (Soon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">Leadership (Soon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">Governance (Soon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">Structure (Soon)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Program Flyout</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Program Overview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">HISAGEN Stack (Soon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">Theory of Change (Soon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Uganda (Active)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Rwanda (Planned)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-slate">Kenya (Planned - Soon)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Top Level</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Get in Touch (CTA)</span>
                  </li>
                </ul>
                <p className="text-xs text-slate mt-4">
                  Green = clickable link<br />
                  Gray = visible but disabled with "Soon" badge
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Complete */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Features Implemented</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {featuresComplete.map((feature) => (
              <div key={feature.name} className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <h3 className="font-semibold text-ink">{feature.name}</h3>
                </div>
                <p className="text-sm text-slate ml-7">{feature.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planned Features */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Planned / Next Phase</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {plannedFeatures.map((feature, i) => (
                  <tr key={feature.name} className={i % 2 === 1 ? 'bg-parchment/50' : ''}>
                    <td className="p-4 font-medium">{feature.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        feature.priority === 'high' ? 'bg-red-100 text-red-800' :
                        feature.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {feature.priority}
                      </span>
                    </td>
                    <td className="p-4 text-slate">{feature.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">Framework</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>Next.js 16.1.4</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS 4</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">Hosting</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>Vercel</li>
                <li>Cloudflare Access (preview)</li>
                <li>GitHub repo: juakali100/hisagen-website</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <h3 className="font-semibold text-primary mb-3">UI Components</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>Headless UI (navigation)</li>
                <li>Heroicons</li>
                <li>Custom HISAGEN components</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deployment Requirements */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">To Go Live: What You Need</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist mb-6">
            <p className="text-slate mb-4">
              Standard practice: <strong>you own these accounts</strong> (and pay any subscriptions). We get admin/collaborator access to deploy and maintain.
              This ensures you retain full control of your digital assets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</span>
                <h3 className="font-semibold text-ink">Domain Name</h3>
              </div>
              <p className="text-sm text-slate mb-3">Your web address (e.g. hisagen.com)</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>• HISAGEN has 2-3 domains registered already</li>
                <li>• Decision needed: which domain to use as primary?</li>
                <li>• We can assess and recommend, then configure DNS</li>
              </ul>
              <div className="mt-4 p-3 bg-success/10 rounded text-xs">
                <strong>Status:</strong> Domains owned - awaiting selection
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</span>
                <h3 className="font-semibold text-ink">Vercel (Hosting)</h3>
              </div>
              <p className="text-sm text-slate mb-3">Where the website runs</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Sign up at: vercel.com</li>
                <li>• Free tier: Usually sufficient for starter sites</li>
                <li>• Pro tier: $20/month if needed (analytics, more bandwidth)</li>
                <li>• Add Pandion as team member</li>
              </ul>
              <div className="mt-4 p-3 bg-success/10 rounded text-xs">
                <strong>Recommended:</strong> Start with free tier
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</span>
                <h3 className="font-semibold text-ink">Cloudflare (Optional)</h3>
              </div>
              <p className="text-sm text-slate mb-3">Security, performance, DNS management</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Sign up at: cloudflare.com</li>
                <li>• Free tier: Excellent - includes CDN, SSL, basic security</li>
                <li>• Manages DNS records</li>
                <li>• Add Pandion as team member</li>
              </ul>
              <div className="mt-4 p-3 bg-mist/50 rounded text-xs">
                <strong>Optional but recommended</strong> for security + performance
              </div>
            </div>
          </div>
          <div className="mt-6 bg-parchment rounded-lg p-6 border border-mist">
            <h3 className="font-semibold text-ink mb-2">Third-Party Subscription Costs</h3>
            <p className="text-sm text-slate mb-4">These are platform fees paid directly to providers (not Pandion fees):</p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-slate">$15-80/yr</p>
                <p className="text-xs text-slate">Domain + SSL (varies by TLD)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">$0-20/mo</p>
                <p className="text-xs text-slate">Vercel (free or Pro)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">$0-20/mo</p>
                <p className="text-xs text-slate">Cloudflare (free or Pro)</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white rounded-lg p-4 border border-mist">
            <p className="text-sm text-slate">
              <strong className="text-ink">Pandion support:</strong> Initial setup and configuration, DNS pointing, deployment pipeline, ongoing maintenance and updates. Accounts remain in HISAGEN ownership with Pandion as admin/collaborator.
            </p>
          </div>
        </section>

        {/* Scope Summary */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Scope Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                Included (Phase 1)
              </h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>• 5-6 page responsive website</li>
                <li>• Logo concept + web files</li>
                <li>• Mobile-responsive design</li>
                <li>• Contact form with email</li>
                <li>• Hosting setup (Vercel)</li>
                <li>• Domain/DNS connection</li>
                <li>• SSL certificate</li>
                <li>• 30-day bug fix warranty</li>
                <li>• Handover documentation</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
              <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs">→</span>
                Not Included (Available)
              </h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Ongoing content updates</li>
                <li>• SEO optimization</li>
                <li>• Google Analytics setup</li>
                <li>• Email marketing integration</li>
                <li>• Social media management</li>
                <li>• Photography/headshots</li>
                <li>• Copywriting (beyond light edits)</li>
                <li>• CMS / content management system</li>
                <li>• Ongoing maintenance retainer</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">+</span>
                Future Phases
              </h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Investor portal / dashboard</li>
                <li>• Project tracking pages</li>
                <li>• Blog / news section</li>
                <li>• Team page with bios</li>
                <li>• Impact data visualization</li>
                <li>• Multi-language support</li>
                <li>• Advanced analytics</li>
                <li>• Integration with CRM</li>
                <li>• Automated reporting</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate mt-4 italic">
            Items in "Not Included" and "Future Phases" can be proposed separately or added once funding is secured.
          </p>
        </section>

        {/* Phase Summary */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Phase 1 Summary</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
            <p className="text-slate mb-4">
              This phase focused on establishing a professional web presence with core pages that communicate
              HISAGEN's mission, program model, and active projects. The navigation system is designed to
              scale gracefully as content is added.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-success mb-2">Completed</h3>
                <ul className="space-y-1 text-sm text-slate">
                  <li>• 6-page responsive website</li>
                  <li>• Professional navigation with flyout menus</li>
                  <li>• Brand-consistent design system</li>
                  <li>• Mobile-optimized layouts</li>
                  <li>• Content for About, Program, Uganda, Rwanda</li>
                  <li>• Clear "Coming Soon" indicators for future content</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-accent mb-2">Phase 2 Considerations</h3>
                <ul className="space-y-1 text-sm text-slate">
                  <li>• Domain selection and DNS setup</li>
                  <li>• SEO optimization</li>
                  <li>• Contact form backend</li>
                  <li>• Analytics implementation</li>
                  <li>• Team/leadership page with photos</li>
                  <li>• News/updates section</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">
            HISAGEN Website & Digital • Phase 1 Documentation
          </p>
          <p className="text-xs text-mist mt-2">
            Last updated: January 2026
          </p>
        </section>
      </div>
    </main>
  );
}
