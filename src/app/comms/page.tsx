import Link from 'next/link';

export default function CommunicationsHubPage() {
  // Communications function areas with status tracking
  const commsFunctions = [
    {
      id: 'brand',
      number: '01',
      title: 'Brand Identity',
      description: 'Visual identity system, brand strategy, and guidelines',
      status: 'partial',
      link: '/brand',
      subAreas: [
        { name: 'Brand Strategy', status: 'complete', notes: 'Mission, vision, values, positioning defined' },
        { name: 'Logo System', status: 'gap', notes: 'Text wordmark only - professional logo needed' },
        { name: 'Color Palette', status: 'complete', notes: 'Two systems exist - consolidation needed' },
        { name: 'Typography', status: 'complete', notes: 'Inter + Source Serif 4' },
        { name: 'Voice & Tone', status: 'complete', notes: 'Guidelines documented' },
        { name: 'Brand Applications', status: 'partial', notes: 'Web done, print templates needed' },
      ]
    },
    {
      id: 'website',
      number: '02',
      title: 'Website & Digital',
      description: 'Public website, portal, and digital presence management',
      status: 'active',
      link: null,
      subAreas: [
        { name: 'Public Website', status: 'active', notes: 'hisagen-preview.pandion.studio (in development)' },
        { name: 'Internal Portal', status: 'active', notes: 'This site - operational' },
        { name: 'Domain Strategy', status: 'pending', notes: 'hisagen.com ownership TBC' },
        { name: 'SEO Foundation', status: 'gap', notes: 'Not yet addressed' },
        { name: 'Analytics Setup', status: 'gap', notes: 'No tracking implemented' },
        { name: 'Accessibility', status: 'partial', notes: 'Basic compliance, full audit needed' },
      ]
    },
    {
      id: 'content',
      number: '03',
      title: 'Content & Messaging',
      description: 'Key messages, content strategy, and copywriting guidelines',
      status: 'partial',
      link: null,
      subAreas: [
        { name: 'Key Messages by Audience', status: 'complete', notes: 'Investors, farmers, buyers, partners' },
        { name: 'Elevator Pitches', status: 'complete', notes: 'Multiple versions documented' },
        { name: 'Content Strategy', status: 'gap', notes: 'No formal content plan' },
        { name: 'Content Library', status: 'partial', notes: 'Website copy exists, broader library needed' },
        { name: 'Copywriting Guidelines', status: 'complete', notes: 'In brand voice guidelines' },
        { name: 'Translation/Localization', status: 'gap', notes: 'Not addressed yet' },
      ]
    },
    {
      id: 'social',
      number: '04',
      title: 'Social Media',
      description: 'Platform strategy, content calendar, and engagement',
      status: 'gap',
      link: null,
      subAreas: [
        { name: 'Platform Strategy', status: 'gap', notes: 'No platforms active yet' },
        { name: 'LinkedIn Presence', status: 'gap', notes: 'Company page not created' },
        { name: 'Content Calendar', status: 'gap', notes: 'Not established' },
        { name: 'Post Templates', status: 'gap', notes: 'Not created' },
        { name: 'Engagement Guidelines', status: 'gap', notes: 'Not documented' },
        { name: 'Social Analytics', status: 'gap', notes: 'N/A until platforms active' },
      ]
    },
    {
      id: 'pr',
      number: '05',
      title: 'PR & Media Relations',
      description: 'Press materials, media contacts, and announcements',
      status: 'gap',
      link: null,
      subAreas: [
        { name: 'Press Kit / Media Pack', status: 'gap', notes: 'Not created' },
        { name: 'Boilerplate Copy', status: 'partial', notes: 'Basic description exists' },
        { name: 'Press Release Templates', status: 'gap', notes: 'Not created' },
        { name: 'Media Contact List', status: 'gap', notes: 'Not compiled' },
        { name: 'Spokesperson Guidelines', status: 'gap', notes: 'Not documented' },
        { name: 'Crisis Communications', status: 'gap', notes: 'No protocol established' },
      ]
    },
    {
      id: 'collateral',
      number: '06',
      title: 'Marketing Collateral',
      description: 'Presentations, one-pagers, case studies, and sales materials',
      status: 'partial',
      link: null,
      subAreas: [
        { name: 'Pitch Deck', status: 'partial', notes: 'Exists but needs brand refresh' },
        { name: 'One-Pager / Fact Sheet', status: 'gap', notes: 'Not created' },
        { name: 'Case Studies', status: 'partial', notes: 'Uganda pilot data exists, not formatted' },
        { name: 'Presentation Templates', status: 'gap', notes: 'No branded templates' },
        { name: 'Leave-Behind Materials', status: 'gap', notes: 'Not created' },
        { name: 'Video / Motion', status: 'gap', notes: 'No video content' },
      ]
    },
    {
      id: 'investor',
      number: '07',
      title: 'Investor Communications',
      description: 'Investor updates, reports, and fundraising materials',
      status: 'partial',
      link: null,
      subAreas: [
        { name: 'Investor Deck', status: 'partial', notes: 'Draft exists' },
        { name: 'Financial Summary', status: 'partial', notes: 'Internal tracking only' },
        { name: 'Investor Update Template', status: 'gap', notes: 'Not created' },
        { name: 'Due Diligence Pack', status: 'gap', notes: 'Not compiled' },
        { name: 'FAQ Document', status: 'gap', notes: 'Not created' },
        { name: 'Term Sheet / Deal Materials', status: 'gap', notes: 'Not prepared' },
      ]
    },
    {
      id: 'internal',
      number: '08',
      title: 'Internal Communications',
      description: 'Team updates, partner communications, and documentation',
      status: 'partial',
      link: null,
      subAreas: [
        { name: 'Team Updates', status: 'partial', notes: 'Ad-hoc via this portal' },
        { name: 'Partner Communications', status: 'partial', notes: 'Direct comms, no templates' },
        { name: 'Meeting Templates', status: 'gap', notes: 'Not standardized' },
        { name: 'Email Templates', status: 'gap', notes: 'Not created' },
        { name: 'Onboarding Materials', status: 'gap', notes: 'Not created' },
        { name: 'Knowledge Base', status: 'active', notes: 'This portal serves this function' },
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-800 border-green-200';
      case 'active': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'partial': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'gap': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'complete': return 'Complete';
      case 'active': return 'Active';
      case 'partial': return 'Partial';
      case 'pending': return 'Pending';
      case 'gap': return 'Gap';
      default: return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return '✓';
      case 'active': return '●';
      case 'partial': return '◐';
      case 'pending': return '○';
      case 'gap': return '○';
      default: return '?';
    }
  };

  // Calculate summary stats
  const stats = {
    complete: commsFunctions.filter(f => f.status === 'complete').length,
    active: commsFunctions.filter(f => f.status === 'active').length,
    partial: commsFunctions.filter(f => f.status === 'partial').length,
    gap: commsFunctions.filter(f => f.status === 'gap').length,
  };

  const totalSubAreas = commsFunctions.reduce((acc, f) => acc + f.subAreas.length, 0);
  const completedSubAreas = commsFunctions.reduce((acc, f) =>
    acc + f.subAreas.filter(s => s.status === 'complete' || s.status === 'active').length, 0);
  const completionPercent = Math.round((completedSubAreas / totalSubAreas) * 100);

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-secondary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Function Hub</p>
          <h1 className="text-4xl font-serif font-bold">Communications & Brand</h1>
          <p className="mt-4 text-lg opacity-90">
            Unified hub for all external and internal communications
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

        {/* Overview Stats */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-mist col-span-2 md:col-span-1">
              <p className="text-4xl font-bold text-primary">{completionPercent}%</p>
              <p className="text-sm text-slate mt-1">Overall Coverage</p>
              <p className="text-xs text-mist mt-1">{completedSubAreas} of {totalSubAreas} items</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-700">{stats.complete}</p>
              <p className="text-xs text-green-600">Complete</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-blue-700">{stats.active}</p>
              <p className="text-xs text-blue-600">Active</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-yellow-700">{stats.partial}</p>
              <p className="text-xs text-yellow-600">Partial</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-700">{stats.gap}</p>
              <p className="text-xs text-red-600">Gaps</p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold text-ink mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/brand" className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition">
              Brand Guidelines
            </Link>
            <span className="px-4 py-2 bg-mist text-slate rounded-lg text-sm cursor-not-allowed">
              Press Kit (Coming Soon)
            </span>
            <span className="px-4 py-2 bg-mist text-slate rounded-lg text-sm cursor-not-allowed">
              Pitch Deck (Coming Soon)
            </span>
            <span className="px-4 py-2 bg-mist text-slate rounded-lg text-sm cursor-not-allowed">
              Social Templates (Coming Soon)
            </span>
          </div>
        </section>

        {/* Function Areas */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-6">Communications Functions</h2>

          <div className="space-y-6">
            {commsFunctions.map((func) => (
              <div key={func.id} className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
                {/* Function Header */}
                <div className="flex items-center justify-between p-5 border-b border-mist bg-parchment/50">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-serif text-primary font-bold opacity-50">{func.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{func.title}</h3>
                      <p className="text-sm text-slate">{func.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(func.status)}`}>
                      {getStatusLabel(func.status)}
                    </span>
                    {func.link && (
                      <Link
                        href={func.link}
                        className="px-3 py-1 bg-primary text-white rounded text-xs hover:bg-primary/90 transition"
                      >
                        View Details
                      </Link>
                    )}
                  </div>
                </div>

                {/* Sub-areas Grid */}
                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {func.subAreas.map((sub, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border ${
                          sub.status === 'gap' ? 'bg-red-50/50 border-red-100' :
                          sub.status === 'complete' || sub.status === 'active' ? 'bg-green-50/50 border-green-100' :
                          'bg-yellow-50/50 border-yellow-100'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                            sub.status === 'complete' ? 'bg-green-500 text-white' :
                            sub.status === 'active' ? 'bg-blue-500 text-white' :
                            sub.status === 'partial' ? 'bg-yellow-500 text-white' :
                            sub.status === 'pending' ? 'bg-purple-200 text-purple-600' :
                            'bg-red-200 text-red-600'
                          }`}>
                            {getStatusIcon(sub.status)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-ink">{sub.name}</p>
                            <p className="text-xs text-slate mt-0.5 truncate" title={sub.notes}>{sub.notes}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Priority Recommendations */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Priority Actions</h2>
          <div className="bg-white rounded-lg shadow-sm border border-mist overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate text-white">
                <tr>
                  <th className="text-left p-4">Action</th>
                  <th className="text-left p-4">Area</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                <tr>
                  <td className="p-4 font-medium">Professional Logo Design</td>
                  <td className="p-4 text-slate">Brand Identity</td>
                  <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">High</span></td>
                  <td className="p-4 text-slate">Before funding round</td>
                </tr>
                <tr className="bg-parchment/50">
                  <td className="p-4 font-medium">Consolidate Color Systems</td>
                  <td className="p-4 text-slate">Brand Identity</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4 text-slate">Before website public launch</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Create LinkedIn Company Page</td>
                  <td className="p-4 text-slate">Social Media</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4 text-slate">Q1 2026 visibility push</td>
                </tr>
                <tr className="bg-parchment/50">
                  <td className="p-4 font-medium">Investor Update Template</td>
                  <td className="p-4 text-slate">Investor Comms</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4 text-slate">When investor communications begin</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Press Kit / Media Pack</td>
                  <td className="p-4 text-slate">PR & Media</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Low</span></td>
                  <td className="p-4 text-slate">Before media outreach</td>
                </tr>
                <tr className="bg-parchment/50">
                  <td className="p-4 font-medium">Case Study: Uganda Pilot</td>
                  <td className="p-4 text-slate">Collateral</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span></td>
                  <td className="p-4 text-slate">For investor/partner meetings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Typical Comms Department Reference */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Reference: Typical Comms Function</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-mist">
            <p className="text-sm text-slate mb-4">
              For a small company (under 25 people), communications typically operates with 1-3 people covering multiple areas.
              Structure evolves as the company grows:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-primary mb-2">Early Stage (Now)</h4>
                <ul className="space-y-1 text-slate">
                  <li>• Founder-led communications</li>
                  <li>• Basic brand identity</li>
                  <li>• Website as primary channel</li>
                  <li>• Ad-hoc PR as needed</li>
                  <li>• Minimal social presence</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Growth Stage</h4>
                <ul className="space-y-1 text-slate">
                  <li>• Dedicated comms lead</li>
                  <li>• Professional brand system</li>
                  <li>• Active social channels</li>
                  <li>• Regular investor updates</li>
                  <li>• Content marketing begins</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Scale Stage</h4>
                <ul className="space-y-1 text-slate">
                  <li>• Small comms team (2-4)</li>
                  <li>• Specialized roles emerge</li>
                  <li>• Proactive PR strategy</li>
                  <li>• Multi-channel content</li>
                  <li>• Analytics-driven approach</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-mist mt-4">
              Source: Organimi, Optimizely, Best Practice Institute research on communications department structures
            </p>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center pt-8 border-t border-mist">
          <p className="text-slate text-sm">
            HISAGEN Communications & Brand Hub • Internal Reference
          </p>
          <p className="text-xs text-mist mt-2">
            Structure based on small company best practices
          </p>
        </section>
      </div>
    </main>
  );
}
