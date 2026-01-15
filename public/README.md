# Public Assets Organization

**Best Practices Structure for Scalable Image & Icon Management**

## Folder Structure

```
public/
├── images/
│   ├── heroes/          # Large hero/banner images (>2MB)
│   ├── features/        # Feature/content images (<1MB)
│   └── partners/        # Partner logos (when needed)
├── icons/               # Icon graphics (20 custom HISAGEN icons)
└── logos/               # Brand logos (Pandion, HISAGEN)
```

## Naming Conventions

**Heroes:** `{descriptor}-{subject}-{context}.jpeg`
- Example: `hisagen-hero-female-farmer-mrv.jpeg`
- Example: `uganda-smallhold-farmer-mrv.jpeg`

**Features:** `{subject}-{descriptor}.jpeg`
- Example: `healthy-roots-soil-sample.jpeg`
- Example: `uganda-smallhold-farner-soil-samples-field-plan.jpeg`

**Icons:** `icon-{name}.png`
- Example: `icon-seedling.png`
- Example: `icon-certificate.png`

**Logos:** `{brand}-logo.png`
- Example: `pandion-logo.png`

## Usage in Components

```tsx
import Image from "next/image";

// Hero images
<Image
  src="/images/heroes/hisagen-hero-female-farmer-mrv.jpeg"
  alt="Female farmer in-field (MRV context)"
  fill
  priority
  className="object-cover"
/>

// Feature images
<Image
  src="/images/features/healthy-roots-soil-sample.jpeg"
  alt="Healthy roots and soil sample"
  fill
  className="object-cover"
/>

// Icons
<img
  src="/icons/icon-seedling.png"
  alt="Seedling icon"
  className="w-6 h-6"
/>

// Logos
<img
  src="/logos/pandion-logo.png"
  alt="Pandion Studio"
  className="h-8"
/>
```

## Image Optimization Guidelines

**Heroes** (Full-width banners):
- Format: JPEG
- Max width: 1920px
- Quality: 85%
- Size target: <500KB

**Features** (Content images):
- Format: JPEG
- Max width: 1200px
- Quality: 80%
- Size target: <200KB

**Icons** (UI elements):
- Format: PNG (with transparency)
- Size: 512x512px or 1024x1024px
- Optimized for web

**Logos**:
- Format: PNG (with transparency) or SVG
- Variable sizes depending on usage

## Current Assets Inventory

### Heroes (2)
- `hisagen-hero-female-farmer-mrv.jpeg` (4MB)
- `uganda-smallhold-farmer-mrv.jpeg` (3.9MB)

### Features (2)
- `healthy-roots-soil-sample.jpeg` (848KB)
- `uganda-smallhold-farner-soil-samples-field-plan.jpeg` (754KB)

### Icons (20)
- certificate, circular-arrows, co2, deedling-circular
- farmer, globe-seedling, graph, green-hands
- hand-money, handshake, leaf-check, leaf
- micro, raindrop, roots, seedling
- sequester, shield, vault, weather

### Logos (1)
- `pandion-logo.png`

## Future Additions

When adding new assets:
1. Choose appropriate folder based on asset type
2. Follow naming conventions
3. Optimize before committing (use tools like TinyPNG, ImageOptim)
4. Update this README with new assets
5. Use Next.js Image component for automatic optimization

## Related Documentation

- Next.js Image Optimization: https://nextjs.org/docs/app/api-reference/components/image
- Web Performance Best Practices: https://web.dev/fast/
