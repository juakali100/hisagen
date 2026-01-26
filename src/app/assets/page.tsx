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
  status: AssetStatus;
  description?: string;
}

interface PhotoFolder {
  id: string;
  name: string;
  path: string;
  icon: string;
  children?: PhotoFolder[];
  photos?: PhotoAsset[];
  isWebsiteOnly?: boolean;
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

// Photo library - organized by folder structure
const photoFolders: PhotoFolder[] = [
  {
    id: 'public',
    name: 'Public',
    path: '/images',
    icon: '🌐',
    children: [
      {
        id: 'heroes',
        name: 'Heroes',
        path: '/images/heroes',
        icon: '🖼️',
        photos: [
          { name: 'Female Farmer MRV', file: 'heroes/hisagen-hero-female-farmer-mrv.jpeg', status: 'public', description: 'Female farmer with tablet, MRV context' },
          { name: 'Maize Roots Close', file: 'heroes/hisagen-maize-roots-close.jpeg', status: 'public', description: 'Close-up of healthy maize roots' },
          { name: 'Smallholder Patchwork', file: 'heroes/smallholder-farmland-patchwork.jpeg', status: 'public', description: 'Aerial view of smallholder farms' },
          { name: 'Uganda Farmer MRV', file: 'heroes/uganda-smallhold-farmer-mrv.jpeg', status: 'public', description: 'Farmer in field with technology' },
        ]
      },
      {
        id: 'home',
        name: 'Home',
        path: '/images/home',
        icon: '🏠',
        photos: [
          { name: 'Farmer at Sunset', file: 'home/farmer-at-sunset.jpeg', status: 'public', description: 'Silhouette, golden hour' },
          { name: 'Farmers in Field', file: 'home/farmers-standing-in-field.jpeg', status: 'public', description: 'Group of farmers' },
          { name: 'Healthy Maize', file: 'home/healthy-maize-plant.jpeg', status: 'public', description: 'Vibrant crop' },
          { name: 'Soil in Hands', file: 'home/healthy-soil-in-hands.jpeg', status: 'public', description: 'Rich dark soil' },
          { name: 'Tablet in Field', file: 'home/tablet-in-farmer-field.jpeg', status: 'public', description: 'Technology + agriculture' },
        ]
      },
      {
        id: 'features',
        name: 'Features',
        path: '/images/features',
        icon: '✨',
        photos: [
          { name: 'Healthy Roots Sample', file: 'features/healthy-roots-soil-sample.jpeg', status: 'public', description: 'Root system detail' },
          { name: 'Soil Samples Plan', file: 'features/uganda-smallhold-farner-soil-samples-field-plan.jpeg', status: 'public', description: 'Field sampling methodology' },
        ]
      },
      {
        id: 'programmatic',
        name: 'Programmatic',
        path: '/images/programmatic',
        icon: '📊',
        isWebsiteOnly: true,
        photos: [
          { name: 'East Africa', file: 'east-africa.jpeg', status: 'public', description: 'Regional landscape' },
          { name: 'Farmers Field', file: 'farmers-field.jpeg', status: 'public', description: 'Working in field' },
          { name: 'Hero Farmer', file: 'hero-farmer.jpeg', status: 'public', description: 'Main hero shot' },
          { name: 'Soil Hands', file: 'soil-hands.jpeg', status: 'public', description: 'Soil examination' },
          { name: 'Uganda Farmer', file: 'uganda-farmer.jpeg', status: 'public', description: 'Portrait' },
          { name: 'Abundant Harvest', file: 'programmatic/abundant-harvest.jpeg', status: 'public', description: 'Crop yield' },
          { name: 'Business Strategy', file: 'programmatic/business-strategy.jpeg', status: 'public', description: 'Planning, strategy' },
          { name: 'Digital Agriculture', file: 'programmatic/digital-agriculture.jpeg', status: 'public', description: 'Tech in farming' },
          { name: 'East Africa Landscape', file: 'programmatic/east-africa-landscape.jpeg', status: 'public', description: 'Regional view' },
          { name: 'Lab Science', file: 'programmatic/lab-science.jpeg', status: 'public', description: 'Laboratory work' },
        ]
      },
      {
        id: 'blog',
        name: 'Blog',
        path: '/images/blog',
        icon: '📝',
        photos: [] // Empty - ready for future content
      },
      {
        id: 'about',
        name: 'About',
        path: '/images/about',
        icon: '👥',
        photos: [] // Empty - ready for future content
      },
    ]
  },
  {
    id: 'internal',
    name: 'Internal',
    path: '/images/internal',
    icon: '🔒',
    children: [
      {
        id: 'mrv',
        name: 'MRV',
        path: '/images/internal/mrv',
        icon: '📍',
        photos: [] // Empty - ready for MRV images
      },
      {
        id: 'reports',
        name: 'Reports',
        path: '/images/internal/reports',
        icon: '📄',
        photos: [] // Empty - ready for report figures
      },
      {
        id: 'projects',
        name: 'Projects',
        path: '/images/internal/projects',
        icon: '🗂️',
        children: [
          {
            id: 'uganda-pilot',
            name: 'Uganda Pilot',
            path: '/images/internal/projects/uganda-pilot',
            icon: '🇺🇬',
            photos: []
          },
          {
            id: 'partnerships',
            name: 'Partnerships',
            path: '/images/internal/projects/partnerships',
            icon: '🤝',
            photos: []
          },
        ]
      },
    ]
  },
];

// Helper to count all photos in a folder tree
const countPhotos = (folder: PhotoFolder): number => {
  let count = folder.photos?.length || 0;
  if (folder.children) {
    folder.children.forEach(child => {
      count += countPhotos(child);
    });
  }
  return count;
};

// Helper to get all photos from a folder tree (for "All" view)
const getAllPhotos = (folder: PhotoFolder): { photo: PhotoAsset; folder: PhotoFolder }[] => {
  let photos: { photo: PhotoAsset; folder: PhotoFolder }[] = [];
  if (folder.photos) {
    photos = folder.photos.map(p => ({ photo: p, folder }));
  }
  if (folder.children) {
    folder.children.forEach(child => {
      photos = [...photos, ...getAllPhotos(child)];
    });
  }
  return photos;
};

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState<'icons' | 'photos'>('icons');
  const [selectedFolder, setSelectedFolder] = useState<string>('public');
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['public', 'internal']);

  const toggleExpanded = (folderId: string) => {
    setExpandedFolders(prev =>
      prev.includes(folderId)
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

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

  // Find selected folder recursively
  const findFolder = (folders: PhotoFolder[], id: string): PhotoFolder | null => {
    for (const folder of folders) {
      if (folder.id === id) return folder;
      if (folder.children) {
        const found = findFolder(folder.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const currentFolder = findFolder(photoFolders, selectedFolder);
  const currentPhotos = currentFolder
    ? currentFolder.children
      ? getAllPhotos(currentFolder)
      : (currentFolder.photos || []).map(p => ({ photo: p, folder: currentFolder }))
    : [];

  // Render folder tree
  const renderFolderTree = (folders: PhotoFolder[], depth: number = 0) => {
    return folders.map(folder => {
      const hasChildren = folder.children && folder.children.length > 0;
      const isExpanded = expandedFolders.includes(folder.id);
      const isSelected = selectedFolder === folder.id;
      const photoCount = countPhotos(folder);

      return (
        <div key={folder.id}>
          <button
            onClick={() => {
              setSelectedFolder(folder.id);
              if (hasChildren) toggleExpanded(folder.id);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
              isSelected
                ? 'bg-primary text-white'
                : 'hover:bg-parchment text-ink'
            }`}
            style={{ paddingLeft: `${12 + depth * 16}px` }}
          >
            {hasChildren && (
              <span className={`text-xs transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                ▶
              </span>
            )}
            {!hasChildren && <span className="w-3" />}
            <span>{folder.icon}</span>
            <span className="flex-1 text-left">{folder.name}</span>
            {folder.isWebsiteOnly && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-100 text-sky-700">web</span>
            )}
            <span className={`text-xs ${isSelected ? 'text-white/70' : 'text-slate'}`}>
              {photoCount}
            </span>
          </button>
          {hasChildren && isExpanded && (
            <div>
              {renderFolderTree(folder.children!, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  const totalPublicPhotos = countPhotos(photoFolders[0]);
  const totalInternalPhotos = countPhotos(photoFolders[1]);

  return (
    <main className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Brand Assets</p>
          <h1 className="text-4xl font-serif font-bold">Asset Library</h1>
          <p className="mt-4 text-lg opacity-90">
            Icons, photography, and brand assets. Source of truth for all HISAGEN visual materials.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Asset Workflow */}
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
            <p className="text-3xl font-bold text-primary">{totalPublicPhotos}</p>
            <p className="text-xs text-slate">Public Photos</p>
          </div>
          <div className="bg-white rounded-lg border border-mist p-4 text-center">
            <p className="text-3xl font-bold text-slate">{totalInternalPhotos}</p>
            <p className="text-xs text-slate">Internal Photos</p>
          </div>
          <div className="bg-white rounded-lg border border-mist p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{icons.length + totalPublicPhotos}</p>
            <p className="text-xs text-slate">Total Public Assets</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
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
            Photography ({totalPublicPhotos + totalInternalPhotos})
          </button>
        </div>

        {/* Icons Tab */}
        {activeTab === 'icons' && (
          <div className="bg-white rounded-lg border border-mist p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-ink">Icon Library</h2>
              <p className="text-xs text-slate">Location: /public/icons/</p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {icons.map((icon) => (
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

        {/* Photos Tab - Sidebar Layout */}
        {activeTab === 'photos' && (
          <div className="flex gap-6">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg border border-mist p-3 sticky top-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate mb-3 px-3">Folders</p>
                <nav className="space-y-1">
                  {renderFolderTree(photoFolders)}
                </nav>
                <div className="mt-4 pt-4 border-t border-mist px-3">
                  <p className="text-[10px] text-slate">
                    🌐 Public = website-ready<br />
                    🔒 Internal = portal only<br />
                    <span className="text-sky-600">web</span> = website repo only
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg border border-mist p-6">
                {/* Folder Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{currentFolder?.icon}</span>
                      <h2 className="text-lg font-semibold text-ink">{currentFolder?.name}</h2>
                      {currentFolder?.isWebsiteOnly && (
                        <span className="text-xs px-2 py-0.5 rounded bg-sky-100 text-sky-700">Website repo only</span>
                      )}
                    </div>
                    <p className="text-xs text-slate mt-1">Path: {currentFolder?.path}</p>
                  </div>
                  <span className="text-sm text-slate">{currentPhotos.length} images</span>
                </div>

                {/* Photo Grid */}
                {currentPhotos.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentPhotos.map(({ photo, folder }) => (
                      <div
                        key={photo.file}
                        className="bg-parchment rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
                      >
                        <div className="aspect-video relative bg-slate/10">
                          {!folder.isWebsiteOnly ? (
                            <Image
                              src={`/images/${photo.file}`}
                              alt={photo.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-slate text-xs">
                              Website repo
                            </div>
                          )}
                        </div>
                        <div className="p-3">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-xs font-medium text-ink">{photo.name}</p>
                            {getStatusBadge(photo.status)}
                          </div>
                          <p className="text-[10px] text-slate mt-1">{photo.description}</p>
                          {currentFolder?.children && (
                            <p className="text-[10px] text-primary mt-1">{folder.name}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-parchment/50 rounded-lg">
                    <p className="text-slate text-sm mb-2">No images in this folder yet</p>
                    <p className="text-xs text-slate/70">
                      Add images to <code className="bg-slate/10 px-1 rounded">{currentFolder?.path}</code>
                    </p>
                  </div>
                )}

                {/* Folder-specific guidance */}
                {currentFolder?.id === 'mrv' && (
                  <div className="mt-6 pt-4 border-t border-mist bg-blue-50 -mx-6 -mb-6 p-6 rounded-b-lg">
                    <p className="text-xs font-semibold text-blue-800 mb-2">MRV Image Guidelines</p>
                    <p className="text-xs text-blue-700">
                      Soil sampling, field measurements, GPS reference shots. Name as: <code className="bg-blue-100 px-1 rounded">[date]-[location]-[activity].jpeg</code>
                    </p>
                  </div>
                )}
                {currentFolder?.id === 'reports' && (
                  <div className="mt-6 pt-4 border-t border-mist bg-amber-50 -mx-6 -mb-6 p-6 rounded-b-lg">
                    <p className="text-xs font-semibold text-amber-800 mb-2">Report Image Guidelines</p>
                    <p className="text-xs text-amber-700">
                      Charts, figures, data visualizations. Name as: <code className="bg-amber-100 px-1 rounded">[report-name]-[fig-number]-[description].png</code>
                    </p>
                  </div>
                )}
                {currentFolder?.id === 'blog' && (
                  <div className="mt-6 pt-4 border-t border-mist bg-green-50 -mx-6 -mb-6 p-6 rounded-b-lg">
                    <p className="text-xs font-semibold text-green-800 mb-2">Blog Image Guidelines</p>
                    <p className="text-xs text-green-700">
                      Featured images, inline graphics. Recommended: 1200x630px for social sharing. Name as: <code className="bg-green-100 px-1 rounded">[post-slug]-[description].jpeg</code>
                    </p>
                  </div>
                )}
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
  /blog/            # Blog post images
  /about/           # About page images
  /internal/        # NOT for public
    /mrv/           # MRV field photos
    /reports/       # Report figures
    /projects/      # Project documentation
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
  /features/        # Copied from portal
  /blog/            # Copied from portal
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
