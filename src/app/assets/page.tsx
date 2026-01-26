'use client';

import { useState } from 'react';
import Image from 'next/image';

type AssetStatus = 'public' | 'internal' | 'review';

interface IconAsset {
  name: string;
  file: string;
  status: AssetStatus;
  description?: string;
}

interface PhotoAsset {
  name: string;
  file: string;
  category: string;
  status: AssetStatus;
  description?: string;
}

// Icon library - all icons in /public/icons/
const icons: IconAsset[] = [
  { name: 'Certificate', file: 'icon-certificate.png', status: 'public', description: 'Verification, credentials' },
  { name: 'Circular Arrows', file: 'icon-circular-arrows.png', status: 'public', description: 'Regeneration cycle' },
  { name: 'CO2', file: 'icon-co2.png', status: 'public', description: 'Carbon, emissions' },
  { name: 'Seedling Circular', file: 'icon-deedling-circular.png', status: 'public', description: 'Growth cycle' },
  { name: 'Farmer', file: 'icon-farmer.png', status: 'public', description: 'Smallholder, agriculture' },
  { name: 'Globe Seedling', file: 'icon-globe-seedling.png', status: 'public', description: 'Global impact' },
  { name: 'Graph', file: 'icon-graph.png', status: 'public', description: 'Data, metrics' },
  { name: 'Green Hands', file: 'icon-green-hands.png', status: 'public', description: 'Nurturing, care' },
  { name: 'Hand Money', file: 'icon-hand-money.png', status: 'public', description: 'Revenue, payments' },
  { name: 'Handshake', file: 'icon-handshake.png', status: 'public', description: 'Partnership' },
  { name: 'Leaf Check', file: 'icon-leaf-check.png', status: 'public', description: 'Verified green' },
  { name: 'Leaf', file: 'icon-leaf.png', status: 'public', description: 'Nature, organic' },
  { name: 'Micro', file: 'icon-micro.png', status: 'public', description: 'Microbiome, science' },
  { name: 'Raindrop', file: 'icon-raindrop.png', status: 'public', description: 'Water, irrigation' },
  { name: 'Roots', file: 'icon-roots.png', status: 'public', description: 'Soil health, foundation' },
  { name: 'Seedling', file: 'icon-seedling.png', status: 'public', description: 'Growth, new life' },
  { name: 'Sequester', file: 'icon-sequester.png', status: 'public', description: 'Carbon capture' },
  { name: 'Shield', file: 'icon-shield.png', status: 'public', description: 'Protection, security' },
  { name: 'Vault', file: 'icon-vault.png', status: 'public', description: 'Storage, evidence' },
  { name: 'Weather', file: 'icon-weather.png', status: 'public', description: 'Climate, conditions' },
];

// Photo library - organized by category
const photos: PhotoAsset[] = [
  // Heroes - large banner images
  { name: 'Female Farmer MRV', file: 'heroes/hisagen-hero-female-farmer-mrv.jpeg', category: 'Heroes', status: 'public', description: 'Female farmer with tablet, MRV context' },
  { name: 'Maize Roots Close', file: 'heroes/hisagen-maize-roots-close.jpeg', category: 'Heroes', status: 'public', description: 'Close-up of healthy maize roots' },
  { name: 'Smallholder Patchwork', file: 'heroes/smallholder-farmland-patchwork.jpeg', category: 'Heroes', status: 'public', description: 'Aerial view of smallholder farms' },
  { name: 'Uganda Farmer MRV', file: 'heroes/uganda-smallhold-farmer-mrv.jpeg', category: 'Heroes', status: 'public', description: 'Farmer in field with technology' },

  // Home - homepage feature images
  { name: 'Farmer at Sunset', file: 'home/farmer-at-sunset.jpeg', category: 'Home', status: 'public', description: 'Silhouette, golden hour' },
  { name: 'Farmers in Field', file: 'home/farmers-standing-in-field.jpeg', category: 'Home', status: 'public', description: 'Group of farmers' },
  { name: 'Healthy Maize', file: 'home/healthy-maize-plant.jpeg', category: 'Home', status: 'public', description: 'Vibrant crop' },
  { name: 'Soil in Hands', file: 'home/healthy-soil-in-hands.jpeg', category: 'Home', status: 'public', description: 'Rich dark soil' },
  { name: 'Tablet in Field', file: 'home/tablet-in-farmer-field.jpeg', category: 'Home', status: 'public', description: 'Technology + agriculture' },

  // Features - detail/supporting images
  { name: 'Healthy Roots Sample', file: 'features/healthy-roots-soil-sample.jpeg', category: 'Features', status: 'public', description: 'Root system detail' },
  { name: 'Soil Samples Plan', file: 'features/uganda-smallhold-farner-soil-samples-field-plan.jpeg', category: 'Features', status: 'public', description: 'Field sampling methodology' },
];

// Website-only photos (not in portal)
const websiteOnlyPhotos: PhotoAsset[] = [
  { name: 'East Africa', file: 'east-africa.jpeg', category: 'Programmatic', status: 'public', description: 'Regional landscape' },
  { name: 'Farmers Field', file: 'farmers-field.jpeg', category: 'Programmatic', status: 'public', description: 'Working in field' },
  { name: 'Hero Farmer', file: 'hero-farmer.jpeg', category: 'Programmatic', status: 'public', description: 'Main hero shot' },
  { name: 'Soil Hands', file: 'soil-hands.jpeg', category: 'Programmatic', status: 'public', description: 'Soil examination' },
  { name: 'Uganda Farmer', file: 'uganda-farmer.jpeg', category: 'Programmatic', status: 'public', description: 'Portrait' },
  { name: 'Abundant Harvest', file: 'programmatic/abundant-harvest.jpeg', category: 'Programmatic', status: 'public', description: 'Crop yield' },
  { name: 'Business Strategy', file: 'programmatic/business-strategy.jpeg', category: 'Programmatic', status: 'public', description: 'Planning, strategy' },
  { name: 'Digital Agriculture', file: 'programmatic/digital-agriculture.jpeg', category: 'Programmatic', status: 'public', description: 'Tech in farming' },
  { name: 'East Africa Landscape', file: 'programmatic/east-africa-landscape.jpeg', category: 'Programmatic', status: 'public', description: 'Regional view' },
  { name: 'Lab Science', file: 'programmatic/lab-science.jpeg', category: 'Programmatic', status: 'public', description: 'Laboratory work' },
];

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState<'icons' | 'photos'>('icons');
  const [statusFilter, setStatusFilter] = useState<AssetStatus | 'all'>('all');

  const getStatusBadge = (status: AssetStatus) => {
    switch (status) {
      case 'public':
        return <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-green-100 text-green-700">Public</span>;
      case 'internal':
        return <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 text-slate-600">Internal</span>;
      case 'review':
        return <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-yellow-100 text-yellow-700">Review</span>;
    }
  };

  const filteredIcons = statusFilter === 'all' ? icons : icons.filter(i => i.status === statusFilter);
  const filteredPhotos = statusFilter === 'all' ? photos : photos.filter(p => p.status === statusFilter);

  const photosByCategory = filteredPhotos.reduce((acc, photo) => {
    if (!acc[photo.category]) acc[photo.category] = [];
    acc[photo.category].push(photo);
    return acc;
  }, {} as Record<string, PhotoAsset[]>);

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Brand Assets</p>
          <h1 className="text-4xl font-serif font-bold">Asset Library</h1>
          <p className="mt-4 text-lg opacity-90">
            Icons, photography, and brand assets. Source of truth for all HISAGEN visual materials.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">

        {/* Asset Architecture Info */}
        <div className="bg-white rounded-lg border border-mist p-6 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate mb-3">Asset Workflow</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">1</span>
                <span className="font-medium">Portal (Source)</span>
              </div>
              <p className="text-slate text-xs">All assets enter here first. MRV images, project photos, icons — everything starts in the portal repo.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">2</span>
                <span className="font-medium">Review & Tag</span>
              </div>
              <p className="text-slate text-xs">Mark assets as Public (website-ready), Internal (portal-only), or Review (needs approval).</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">3</span>
                <span className="font-medium">Website (Published)</span>
              </div>
              <p className="text-slate text-xs">Public-ready assets are copied to the website repo for deployment on Keir's Vercel account.</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-mist p-4 text-center">
            <p className="text-3xl font-bold text-primary">{icons.length}</p>
            <p className="text-xs text-slate">Icons</p>
          </div>
          <div className="bg-white rounded-lg border border-mist p-4 text-center">
            <p className="text-3xl font-bold text-primary">{photos.length}</p>
            <p className="text-xs text-slate">Photos (Portal)</p>
          </div>
          <div className="bg-white rounded-lg border border-mist p-4 text-center">
            <p className="text-3xl font-bold text-primary">{websiteOnlyPhotos.length}</p>
            <p className="text-xs text-slate">Photos (Website)</p>
          </div>
          <div className="bg-white rounded-lg border border-mist p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{icons.filter(i => i.status === 'public').length + photos.filter(p => p.status === 'public').length}</p>
            <p className="text-xs text-slate">Public-Ready</p>
          </div>
        </div>

        {/* Tabs & Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('icons')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'icons'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-mist text-slate hover:border-primary/30'
              }`}
            >
              Icons ({icons.length})
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'photos'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-mist text-slate hover:border-primary/30'
              }`}
            >
              Photography ({photos.length + websiteOnlyPhotos.length})
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate">Filter:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as AssetStatus | 'all')}
              className="text-sm border border-mist rounded px-2 py-1"
            >
              <option value="all">All</option>
              <option value="public">Public</option>
              <option value="internal">Internal</option>
              <option value="review">Review</option>
            </select>
          </div>
        </div>

        {/* Icons Tab */}
        {activeTab === 'icons' && (
          <div className="bg-white rounded-lg border border-mist p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-ink">Icon Library</h2>
              <p className="text-xs text-slate">Location: /public/icons/</p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {filteredIcons.map((icon) => (
                <div
                  key={icon.file}
                  className="bg-parchment rounded-lg p-4 text-center hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Image
                      src={`/icons/${icon.file}`}
                      alt={icon.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-medium text-ink truncate">{icon.name}</p>
                  <p className="text-[10px] text-slate truncate">{icon.description}</p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {getStatusBadge(icon.status)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-mist">
              <p className="text-xs text-slate">
                <strong>Usage:</strong> All icons are PNG format. For web, reference as <code className="bg-slate/10 px-1 rounded">/icons/icon-name.png</code>
              </p>
            </div>
          </div>
        )}

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="space-y-8">
            {/* Portal Photos */}
            <div className="bg-white rounded-lg border border-mist p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-ink">Portal Photography</h2>
                  <p className="text-xs text-slate">Source: site/public/images/</p>
                </div>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">Source of Truth</span>
              </div>

              {Object.entries(photosByCategory).map(([category, categoryPhotos]) => (
                <div key={category} className="mb-6 last:mb-0">
                  <h3 className="text-sm font-medium text-slate uppercase tracking-wider mb-3">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categoryPhotos.map((photo) => (
                      <div
                        key={photo.file}
                        className="bg-parchment rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
                      >
                        <div className="aspect-video relative bg-slate/10">
                          <Image
                            src={`/images/${photo.file}`}
                            alt={photo.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-xs font-medium text-ink">{photo.name}</p>
                            {getStatusBadge(photo.status)}
                          </div>
                          <p className="text-[10px] text-slate mt-1">{photo.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Website-Only Photos */}
            <div className="bg-white rounded-lg border border-mist p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-ink">Website-Only Photography</h2>
                  <p className="text-xs text-slate">Source: website/public/images/</p>
                </div>
                <span className="px-2 py-1 text-xs bg-sky-100 text-sky-700 rounded">Website Repo</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-yellow-800">
                  <strong>Note:</strong> These images exist only in the website repo. Consider migrating to portal for consolidated asset management.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {websiteOnlyPhotos.map((photo) => (
                  <div
                    key={photo.file}
                    className="bg-parchment rounded-lg overflow-hidden border border-dashed border-slate/30"
                  >
                    <div className="aspect-video relative bg-slate/10 flex items-center justify-center">
                      <span className="text-xs text-slate">Website repo</span>
                    </div>
                    <div className="p-2">
                      <p className="text-xs font-medium text-ink truncate">{photo.name}</p>
                      <p className="text-[10px] text-slate truncate">{photo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* File Structure Reference */}
        <div className="mt-8 bg-slate text-white rounded-lg p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Recommended File Structure</h3>
          <div className="grid md:grid-cols-2 gap-6 font-mono text-xs">
            <div>
              <p className="text-slate-300 mb-2"># Portal (site/public/)</p>
              <pre className="text-green-400">{`/icons/
  icon-*.png        # All icons
/images/
  /heroes/          # Large banner images
  /home/            # Homepage images
  /features/        # Detail/supporting
  /internal/        # MRV, reports (NEW)
    /mrv/           # MRV field photos
    /reports/       # Report figures
/logos/
  pandion-logo.png`}</pre>
            </div>
            <div>
              <p className="text-slate-300 mb-2"># Website (website/public/)</p>
              <pre className="text-blue-400">{`/icons/
  icon-*.png        # Copied from portal
/images/
  /heroes/          # Copied from portal
  /home/            # Copied from portal
  /programmatic/    # Website-specific

# No /internal/ folder
# Website only has public-ready assets`}</pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate">
            HISAGEN Asset Library • Portal is source of truth • Public assets sync to Website
          </p>
        </div>
      </div>
    </main>
  );
}
