import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Image from "next/image";

// Yield data
const yieldData = [
    { crop: "Corn", product: "Rhizolizer Duo BA", control: "194.13 bu/ac", treated: "203.07 bu/ac", increase: "+4.6%", trials: "28 CROs/Universities", sig: true },
    { crop: "Corn", product: "Rhizolizer Duo ST", control: "156.60 bu/ac", treated: "166.20 bu/ac", increase: "+6.1%", trials: "3 CROs/Universities", sig: true },
    { crop: "Corn", product: "Rhizolizer Duo IF", control: "161.19 bu/ac", treated: "170.20 bu/ac", increase: "+5.6%", trials: "7 CROs/Universities", sig: true },
    { crop: "Soybeans", product: "Rhizolizer Prime BA", control: "59.48 bu/ac", treated: "62.61 bu/ac", increase: "+5.3%", trials: "14 CROs/Universities", sig: true },
    { crop: "Wheat", product: "Rhizolizer Duo BA", control: "76.60 bu/ac", treated: "80.70 bu/ac", increase: "+5.4%", trials: "11 CROs/Universities", sig: true },
    { crop: "Peanuts", product: "Rhizolizer Prime", control: "3,838 lb/ac", treated: "4,077 lb/ac", increase: "+6.2%", trials: "2 CROs", sig: false },
    { crop: "Potatoes", product: "Duo WP + Unpac", control: "49,559 lb/ac", treated: "60,776 lb/ac", increase: "+22.6%", trials: "Wisconsin 2023", sig: true, highlight: true },
    { crop: "Sweet Potatoes", product: "Rhizolizer Duo WP", control: "15,365 lb/ac", treated: "18,078 lb/ac", increase: "+17.7%", trials: "Tidewater NC", sig: false },
];

// Detailed product specifications from PDF pages 23, 25, 27, 29, 34, 37, 39, 40
const productDetails = [
    {
        name: "Rhizolizer Duo BA for Corn",
        pdfPage: 23,
        application: "Box Applied",
        crops: "Corn",
        description: "Augments natural microbial activity in the rhizosphere of agricultural soils. Supports nutrient availability and crop nutrient uptake from the soil.",
        directions: "Apply 0.5 oz (by weight) per 80,000 seeds in the hopper box and mix in. One measuring scoop (included in case) holds approximately 0.5 oz.",
        analysis: [
            { ingredient: "Microbial Soil Inoculant", concentration: "1.0%" },
            { ingredient: "Trichoderma harzianum", concentration: "7×10⁷ CFU/g" },
            { ingredient: "Bacillus amyloliquefaciens", concentration: "1×10⁹ CFU/g" },
            { ingredient: "Total Other Ingredients", concentration: "99.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight. Do not exceed storage at 77°F for extended periods. Do not freeze.",
        netWeight: "12 oz (340 g)",
        notes: "For commercial agricultural use only.",
    },
    {
        name: "Rhizolizer Duo ST for Corn",
        pdfPage: 25,
        application: "Seed Treatment",
        crops: "Corn",
        description: "Augments natural microbial activity in the rhizosphere of agricultural soils. Supports nutrient availability and crop nutrient uptake from the soil.",
        directions: "Invert 5-10 times before use. Apply at 0.16 fl oz per unit of seed (80K seeds). 128 fl oz container treats 800 units. One case treats 1,600 units.",
        analysis: [
            { ingredient: "Microbial Soil Inoculant", concentration: "1.0%" },
            { ingredient: "Bacillus amyloliquefaciens", concentration: "1×10⁹ CFU/mL" },
            { ingredient: "Trichoderma harzianum", concentration: "3×10⁸ CFU/mL" },
            { ingredient: "Total Other Ingredients", concentration: "99.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight.",
        netWeight: "1 gal (3.8 L)",
        notes: "For commercial agricultural use with approved seed treaters only. Compatible with many common seed fungicides and insecticides. Can be left in tank mix for 4 hours with chemistry, 24 hours in non-chlorinated water alone.",
    },
    {
        name: "Rhizolizer Duo IF for Corn",
        pdfPage: 27,
        application: "In-Furrow",
        crops: "Corn",
        description: "Augments natural microbial activity in the rhizosphere of agricultural soils. Supports nutrient availability and crop nutrient uptake from the soil.",
        directions: "For use with low salt fertilizer, applied in-furrow. Fill starter tank half full. Add at a rate of 1 fl oz/acre. Fill the remaining amount. Apply within 24 hours.",
        analysis: [
            { ingredient: "Microbial Soil Inoculant", concentration: "1.0%" },
            { ingredient: "Bacillus amyloliquefaciens", concentration: "1×10⁸ CFU/mL" },
            { ingredient: "Trichoderma harzianum", concentration: "1×10⁸ CFU/mL" },
            { ingredient: "Total Other Ingredients", concentration: "99.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight.",
        netWeight: "1 gal (3.9 kg)",
        notes: "For commercial agricultural use only.",
    },
    {
        name: "Rhizolizer Prime BA for Soybeans",
        pdfPage: 29,
        application: "Box Applied",
        crops: "Soybeans",
        description: "Augments natural microbial activity in the rhizosphere of agricultural soils. Supports nutrient availability and crop nutrient uptake from the soil.",
        directions: "Apply 0.5 oz (by weight) per 140,000 seeds (unit) in the hopper box and mix in.",
        analysis: [
            { ingredient: "Microbial Soil Inoculant", concentration: "1.0%" },
            { ingredient: "Trichoderma virens", concentration: "1×10⁸ CFU/g" },
            { ingredient: "Bacillus amyloliquefaciens", concentration: "1×10⁹ CFU/g" },
            { ingredient: "Bradyrhizobia japonicum", concentration: "5×10⁷ CFU/g" },
            { ingredient: "Total Other Ingredients", concentration: "99.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight.",
        netWeight: "25 oz (709 g)",
        notes: "For commercial agricultural use only. Double/triple inoculation recommended when: soil hasn't hosted the legume for 3+ years, pH < 5.8 or > 8.5, organic matter < 1%, drought/flooding occurred, or topsoil exceeds 80°F.",
    },
    {
        name: "Rhizolizer Duo BA for Wheat & Cereals",
        pdfPage: 34,
        application: "Box Applied",
        crops: "Wheat, Cereals, Small Grains, Annual Grasses",
        description: "Augments natural microbial activity in the rhizosphere of agricultural soils. Supports nutrient availability and crop nutrient uptake from the soil. Contains 80/20 Talc/Graphite Seed Lubricant.",
        directions: "Wheat/Cereals/Small Grains: 1.0 oz per 50 lbs seed. Annual Grasses (<1M seeds/lb): 1 oz per 50 lbs. Annual Grasses (>1M seeds/lb): 2 oz per 50 lbs.",
        analysis: [
            { ingredient: "Microbial Soil Inoculant", concentration: "1.0%" },
            { ingredient: "Trichoderma harzianum", concentration: "8×10⁷ CFU/g" },
            { ingredient: "Bacillus amyloliquefaciens", concentration: "1×10⁹ CFU/g" },
            { ingredient: "Total Other Ingredients", concentration: "99.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight.",
        netWeight: "50 oz (1,418 g)",
        notes: "For commercial agricultural use only.",
    },
    {
        name: "Rhizolizer Prime BA for Peanuts",
        pdfPage: 37,
        application: "Box Applied",
        crops: "Peanuts",
        description: "Augments natural microbial activity in the rhizosphere of agricultural soils. Supports nutrient availability and crop nutrient uptake from the soil.",
        directions: "Apply 1 oz (by weight) per 50 lbs seed in the hopper box and mix in.",
        analysis: [
            { ingredient: "Microbial Soil Inoculant", concentration: "1.0%" },
            { ingredient: "Trichoderma virens", concentration: "1×10⁸ CFU/g" },
            { ingredient: "Bacillus amyloliquefaciens", concentration: "1×10⁹ CFU/g" },
            { ingredient: "Bradyrhizobia spp", concentration: "5×10⁷ CFU/g" },
            { ingredient: "Total Other Ingredients", concentration: "99.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight.",
        netWeight: "25 oz (709 g)",
        notes: "For commercial agricultural use only.",
    },
    {
        name: "Rhizolizer Duo WP for Fruits & Vegetables",
        pdfPage: 39,
        application: "Spray/Fertigation",
        crops: "Fruits, Vegetables, Potatoes, Sweet Potatoes",
        description: "Augments natural microbial activity in the rhizosphere of agricultural soils. Supports nutrient availability and crop nutrient uptake from the soil.",
        directions: "1-3 oz per acre. Fill mixing tank to 50% volume, begin agitation, add product, fill remainder. Apply via ground, chemigation, or fertigation within 8 hours of mixing.",
        analysis: [
            { ingredient: "Microbial Soil Inoculant", concentration: "1.0%" },
            { ingredient: "Total Trichoderma", concentration: "1×10⁷ CFU/g" },
            { ingredient: "— T. harzianum", concentration: "5×10⁶ CFU/g" },
            { ingredient: "— T. virens", concentration: "5×10⁶ CFU/g" },
            { ingredient: "Bacillus amyloliquefaciens", concentration: "1×10⁸ CFU/g" },
            { ingredient: "Total Other Ingredients", concentration: "99.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight.",
        netWeight: "20 oz (567 g)",
        notes: "Do NOT tank mix with agricultural fungicides or antimicrobials. Do NOT apply with UAN. CAN apply with: CAN-17, 10-34-0, 6-24-6. Not a fertilizer substitute.",
    },
    {
        name: "Unpac",
        pdfPage: 40,
        application: "Spray/Fertigation",
        crops: "All crops (soil conditioning)",
        description: "Microbially derived biosurfactant used to treat soil compaction. For use across all soil types.",
        directions: "First use: 4 fl oz per acre. Maintenance: 2 fl oz per acre every other month. Conduct jar test before use. Apply within 8 hours of mixing.",
        analysis: [
            { ingredient: "Glycolipid", concentration: "20.0%" },
            { ingredient: "Total Other Ingredients", concentration: "80.0%" },
        ],
        storage: "Keep in a cool, dry place. Keep out of direct sunlight.",
        netWeight: "1 gal (3.9 kg)",
        notes: "For commercial agricultural use only. Applications may be made at planting and in-season through ground, chemigation, and fertigation methods.",
    },
];

// Microorganisms
const microorganisms = [
    { type: "Fungi", name: "Trichoderma harzianum", mode: "Potassium solubilizer, root expansion, vigor", products: "Rhizolizer Duo" },
    { type: "Fungi", name: "Trichoderma virens", mode: "Potassium solubilizer, root expansion, vigor", products: "Rhizolizer Prime" },
    { type: "Bacteria", name: "Bacillus amyloliquefaciens", mode: "Releases organic acids, promotes resilience", products: "Rhizolizer Duo" },
    { type: "Bacteria", name: "Rhizobia/Bradyrhizobia sp.", mode: "N-fixing (provides 50-90% of nitrogen needed)", products: "Rhizolizer Prime" },
];

export default function LocusAgPage() {
    return (
        <div className="mx-auto max-w-5xl text-ink">
            <StageBreadcrumb
                stage="Dossier"
                trail={[
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "Locus AG" }
                ]}
            />

            {/* Header */}
            <section className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-parchment px-8 py-12">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 px-3 py-1 bg-emerald-100 rounded-full">
                            Technology Partner
                        </span>
                        <h1 className="mt-4 text-4xl font-bold text-secondary">Locus AG</h1>
                        <p className="mt-2 text-xl text-slate">Core Technology Partner — Agricultural Biologicals</p>
                        <p className="mt-4 text-sm text-slate italic">A Division of Locus Fermentation Solutions — "Simply Vital."</p>
                    </div>
                    <a
                        href="https://locusag.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-emerald-200 bg-white hover:border-emerald-400 transition-all text-secondary text-xs font-bold uppercase tracking-widest"
                    >
                        Visit Website
                    </a>
                </div>
            </section>

            {/* Company Overview */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/60 mb-4">Company Overview</h2>
                <p className="text-sm text-slate leading-relaxed">
                    Cleveland-based agricultural biologicals company. Developer of the <strong>Rhizolizer® product line</strong> — non-GMO microbial bio-stimulants featuring <strong>endophytic microbes</strong> that grow inside plants for sustained yield enhancement and carbon sequestration. <strong>B-Corp certified.</strong>
                </p>

                {/* Product packaging placeholder */}
                <div className="mt-4 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 border-dashed">
                    <div className="flex items-center gap-3">
                        <span className="text-amber-500 text-lg">📷</span>
                        <div>
                            <p className="text-sm font-bold text-amber-700">Image Needed: Product Packaging Photos</p>
                            <p className="text-xs text-amber-600 mt-1">Clean shots of Rhizolizer product packaging (Duo BA, Prime BA, Duo WP, Unpac). <strong>Source: Request from Locus AG</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE KEY DIFFERENTIATOR: Endophytic Science */}
            <section className="mt-8 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-emerald-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-lg">★</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Key Differentiator</p>
                        <h2 className="text-lg font-bold text-secondary">Endophytic vs Non-Endophytic Microbes</h2>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mb-6">
                    <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                        <p className="text-sm font-bold text-emerald-700 mb-2">Endophytic (Locus AG)</p>
                        <ul className="text-sm text-slate space-y-1">
                            <li>• Grows and lives <strong>inside the plant</strong></li>
                            <li>• Forms <strong>symbiotic relationship</strong></li>
                            <li>• <strong>Long-lasting benefits</strong> throughout season</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-slate/5 border border-mist">
                        <p className="text-sm font-bold text-slate/60 mb-2">Non-Endophytic (Competitors)</p>
                        <ul className="text-sm text-slate/70 space-y-1">
                            <li>• Grows <strong>around the roots only</strong></li>
                            <li>• Limited soil interaction</li>
                            <li>• <strong>Temporary benefits</strong> only</li>
                        </ul>
                    </div>
                </div>

                <p className="text-sm text-slate leading-relaxed p-4 bg-white rounded-lg border border-primary/20">
                    <strong>Why this matters:</strong> Endophytic strains provide sustained benefit throughout the growing season because they live within the plant tissue, unlike competitors' products that only coat the root zone temporarily.
                </p>

                {/* Diagram placeholder */}
                <div className="mt-4 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 border-dashed">
                    <div className="flex items-center gap-3">
                        <span className="text-amber-500 text-lg">📊</span>
                        <div>
                            <p className="text-sm font-bold text-amber-700">Diagram Needed</p>
                            <p className="text-xs text-amber-600 mt-1">Visual showing plant with endophytic strains inside stem/root structure vs non-endophytic in rhizosphere only.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Microorganisms Portfolio */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/icons/icon-micro.png" alt="" width={28} height={28} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">The Science</p>
                        <h2 className="text-lg font-bold text-secondary">Microorganisms Portfolio</h2>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-mist">
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Type</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Strain</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Mode of Action</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Featured In</th>
                            </tr>
                        </thead>
                        <tbody>
                            {microorganisms.map((m, idx) => (
                                <tr key={idx} className="border-b border-mist/50">
                                    <td className="py-2 px-3 text-slate">{m.type}</td>
                                    <td className="py-2 px-3 font-medium text-secondary italic">{m.name}</td>
                                    <td className="py-2 px-3 text-slate text-xs">{m.mode}</td>
                                    <td className="py-2 px-3 text-slate text-xs">{m.products}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 text-xs text-primary/80 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <strong>Key Insight:</strong> Bradyrhizobia provides <strong>50-90% of nitrogen</strong> needed by legumes — massive fertilizer reduction potential.
                </p>

                {/* Root comparison photo placeholder */}
                <div className="mt-4 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 border-dashed">
                    <div className="flex items-center gap-3">
                        <span className="text-amber-500 text-lg">📷</span>
                        <div>
                            <p className="text-sm font-bold text-amber-700">Image Needed: Root Comparison Photo</p>
                            <p className="text-xs text-amber-600 mt-1">Side-by-side showing Grower&apos;s Practice (smaller roots) vs Rhizolizer Prime (bigger roots) — NC Demo, Soybeans. <strong>Source: PDF Page 32</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Portfolio - Detailed Specifications */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Image src="/icons/icon-leaf-check.png" alt="" width={28} height={28} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">Products</p>
                        <h2 className="text-lg font-bold text-secondary">Rhizolizer® Product Portfolio — Full Specifications</h2>
                    </div>
                </div>

                <div className="space-y-3">
                    {productDetails.map((product, idx) => (
                        <details key={idx} className="group border border-mist rounded-lg overflow-hidden">
                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate/5 transition-colors">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-slate/40">P{product.pdfPage}</span>
                                    <div>
                                        <p className="font-bold text-secondary">{product.name}</p>
                                        <p className="text-xs text-slate">{product.application} • {product.crops}</p>
                                    </div>
                                </div>
                                <span className="text-slate/40 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-4 pt-0 border-t border-mist bg-slate/5">
                                {/* Description */}
                                <p className="text-sm text-slate mb-4">{product.description}</p>

                                {/* Directions */}
                                <div className="mb-4">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Directions</p>
                                    <p className="text-sm text-slate bg-white p-3 rounded border border-mist">{product.directions}</p>
                                </div>

                                {/* Guaranteed Analysis */}
                                <div className="mb-4">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Guaranteed Analysis</p>
                                    <table className="w-full text-sm bg-white rounded border border-mist">
                                        <tbody>
                                            {product.analysis.map((item, i) => (
                                                <tr key={i} className={i < product.analysis.length - 1 ? "border-b border-mist/50" : ""}>
                                                    <td className={`py-2 px-3 ${item.ingredient.startsWith("—") ? "pl-6 text-slate/70 italic" : item.ingredient.includes("Total") || item.ingredient === "Microbial Soil Inoculant" ? "font-bold text-secondary" : "text-slate italic"}`}>
                                                        {item.ingredient}
                                                    </td>
                                                    <td className="py-2 px-3 text-right font-mono text-xs text-slate">{item.concentration}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Storage & Net Weight */}
                                <div className="grid gap-4 md:grid-cols-2 mb-4">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Storage</p>
                                        <p className="text-xs text-slate">{product.storage}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Net Weight</p>
                                        <p className="text-xs text-slate font-mono">{product.netWeight}</p>
                                    </div>
                                </div>

                                {/* Notes */}
                                {product.notes && (
                                    <div className="p-3 rounded bg-amber-50 border border-amber-200">
                                        <p className="text-xs text-amber-800"><strong>Notes:</strong> {product.notes}</p>
                                    </div>
                                )}
                            </div>
                        </details>
                    ))}
                </div>

                {/* Wheat field comparison placeholder */}
                <div className="mt-6 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 border-dashed">
                    <div className="flex items-center gap-3">
                        <span className="text-amber-500 text-lg">📷</span>
                        <div>
                            <p className="text-sm font-bold text-amber-700">Image Needed: Wheat Field Comparison</p>
                            <p className="text-xs text-amber-600 mt-1">Side-by-side field photo — Left: Grower&apos;s Standard (sparse, patchy growth) vs Right: Rhizolizer Duo BA (denser, uniform growth). <strong>Source: PDF Page 35</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Double/Triple Inoculation Guidance - Pages 30-31 */}
            <section className="mt-8 rounded-xl border border-blue-200 bg-blue-50/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm">N₂</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Legume Inoculation</p>
                        <h2 className="text-lg font-bold text-secondary">Double/Triple Inoculation Guidance</h2>
                        <p className="text-xs text-slate">PDF Pages 30-31</p>
                    </div>
                </div>

                <p className="text-sm text-slate mb-4">
                    Double or triple inoculation is <strong>recommended</strong> when any of the following conditions apply:
                </p>

                <div className="grid gap-2 md:grid-cols-2 mb-6">
                    {[
                        "Soil has not hosted the specific legume",
                        "Soil hasn't hosted the legume for 3+ years (CRP land)",
                        "Soil pH < 5.8 or > 8.5",
                        "Soil organic matter < 1%",
                        "Drought or flooding has occurred",
                        "Topsoil temperature exceeds 80°F",
                        "Excessive soil erosion",
                        "Soil treatments injurious to bacteria/inoculants used",
                    ].map((condition, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate">
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span>{condition}</span>
                        </div>
                    ))}
                </div>

                {/* Crop Nutrient Removal Table */}
                <details className="border border-blue-200 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-50 transition-colors">
                        <p className="font-bold text-secondary text-sm">Crop Nutrient Removal Reference Table</p>
                        <span className="text-blue-400">▼</span>
                    </summary>
                    <div className="p-4 pt-0 border-t border-blue-200 bg-white">
                        <p className="text-xs text-slate mb-3">Nitrogen requirements in harvested portion — shows why N-fixing is critical for legumes:</p>
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-blue-200">
                                    <th className="text-left py-2 px-2 text-[10px] font-bold uppercase text-secondary/60">Crop</th>
                                    <th className="text-center py-2 px-2 text-[10px] font-bold uppercase text-secondary/60">N (lbs/bu)</th>
                                    <th className="text-center py-2 px-2 text-[10px] font-bold uppercase text-secondary/60">P₂O₅</th>
                                    <th className="text-center py-2 px-2 text-[10px] font-bold uppercase text-secondary/60">K₂O</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-blue-100">
                                    <td className="py-2 px-2 text-slate">Corn Grain</td>
                                    <td className="py-2 px-2 text-center text-slate">0.75</td>
                                    <td className="py-2 px-2 text-center text-slate">0.37</td>
                                    <td className="py-2 px-2 text-center text-slate">0.27</td>
                                </tr>
                                <tr className="border-b border-blue-100 bg-blue-50 font-bold">
                                    <td className="py-2 px-2 text-secondary">Soybeans</td>
                                    <td className="py-2 px-2 text-center text-blue-700">4.00</td>
                                    <td className="py-2 px-2 text-center text-secondary">0.80</td>
                                    <td className="py-2 px-2 text-center text-secondary">1.40</td>
                                </tr>
                                <tr className="border-b border-blue-100">
                                    <td className="py-2 px-2 text-slate">Wheat</td>
                                    <td className="py-2 px-2 text-center text-slate">1.50</td>
                                    <td className="py-2 px-2 text-center text-slate">0.63</td>
                                    <td className="py-2 px-2 text-center text-slate">0.37</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-2 text-slate">Grain Sorghum (cwt)</td>
                                    <td className="py-2 px-2 text-center text-slate">0.84</td>
                                    <td className="py-2 px-2 text-center text-slate">0.39</td>
                                    <td className="py-2 px-2 text-center text-slate">0.39</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mt-3 text-xs text-blue-700 p-2 bg-blue-50 rounded">
                            <strong>Key Insight:</strong> Soybeans require <strong>4.0 lbs N per bushel</strong> — 5× more than corn. This is why Bradyrhizobia N-fixing (providing 50-90% of N needed) is so valuable.
                        </p>
                    </div>
                </details>
            </section>

            {/* Yield Data - THE PROOF */}
            <section className="mt-8 rounded-xl border-2 border-emerald-200 bg-emerald-50/30 p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-600 text-lg">📈</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">Validated Results</p>
                            <h2 className="text-lg font-bold text-secondary">Yield Data Summary</h2>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-100 text-emerald-700">All Statistically Significant</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-emerald-200">
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Crop</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Product</th>
                                <th className="text-center py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Control</th>
                                <th className="text-center py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Treated</th>
                                <th className="text-center py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Increase</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Trials</th>
                            </tr>
                        </thead>
                        <tbody>
                            {yieldData.map((d, idx) => (
                                <tr key={idx} className={`border-b border-emerald-100/50 ${d.highlight ? 'bg-emerald-100/50' : ''}`}>
                                    <td className={`py-2 px-3 ${d.highlight ? 'font-bold text-secondary' : 'text-slate'}`}>{d.crop}</td>
                                    <td className="py-2 px-3 text-slate text-xs">{d.product}</td>
                                    <td className="py-2 px-3 text-center text-slate text-xs">{d.control}</td>
                                    <td className="py-2 px-3 text-center text-slate text-xs">{d.treated}</td>
                                    <td className={`py-2 px-3 text-center font-bold ${d.highlight ? 'text-emerald-700 text-base' : 'text-emerald-600'}`}>
                                        {d.increase} {d.highlight && '⭐'}
                                    </td>
                                    <td className="py-2 px-3 text-slate text-xs">{d.trials}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Headline callout */}
                <div className="mt-6 p-4 rounded-lg bg-emerald-100 border border-emerald-200 text-center">
                    <p className="text-2xl font-black text-emerald-700">+22.6%</p>
                    <p className="text-sm font-bold text-secondary mt-1">Potato yield increase with Rhizolizer Duo WP + Unpac</p>
                    <p className="text-xs text-slate mt-1">Wisconsin 2023 — Statistically Significant</p>
                </div>

                {/* Yield chart placeholder */}
                <div className="mt-4 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 border-dashed">
                    <div className="flex items-center gap-3">
                        <span className="text-amber-500 text-lg">📊</span>
                        <div>
                            <p className="text-sm font-bold text-amber-700">Chart Needed: Yield Comparison Bar Chart</p>
                            <p className="text-xs text-amber-600 mt-1">Bar chart visualizing yield improvements across all crops (Corn, Soybeans, Wheat, Peanuts, Potatoes, Sweet Potatoes). <strong>Optional enhancement</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Personnel */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/60 mb-4">Key Personnel</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-lg border border-mist">
                        <p className="text-sm font-bold text-secondary">Ken Alibek</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Scientific Lead</p>
                        <p className="text-xs text-slate">World-renowned pioneer in microbial biotechnology. Technical architect behind the specific Trichoderma and Bacillus strains used in Rhizolizer® Duo.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-mist">
                        <p className="text-sm font-bold text-secondary">David Dyson</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Lead Agronomist</p>
                        <p className="text-xs text-slate">Leads agronomic research and field trial programs. Responsible for multi-year, multi-site yield validation across 28+ CROs and universities.</p>
                    </div>
                </div>
            </section>

            {/* CarbonNOW Program */}
            <section className="mt-8 rounded-xl border border-blue-200 bg-blue-50/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm">CO₂</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Carbon Program</p>
                        <h2 className="text-lg font-bold text-secondary">CarbonNOW</h2>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mb-4">
                    <div className="p-4 rounded-lg bg-white border border-blue-100 text-center">
                        <p className="text-xl font-black text-blue-700">121%</p>
                        <p className="text-xs text-slate mt-1">More carbon sequestered vs untreated plots</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-blue-100 text-center">
                        <p className="text-xl font-black text-blue-700">3.3-8.6</p>
                        <p className="text-xs text-slate mt-1">MT CO2eq/acre/year</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-blue-100 text-center">
                        <p className="text-xl font-black text-blue-700">3</p>
                        <p className="text-xs text-slate mt-1">Key Partners: Anew, Nori, COMET-Farm</p>
                    </div>
                </div>

                <p className="text-xs text-slate">
                    Partners with <strong>Anew</strong> (verification), <strong>Nori</strong> (marketplace), and <strong>COMET-Farm</strong> (USDA accounting) for carbon credit generation.
                </p>
            </section>

            {/* Strategic Context for HISAGEN */}
            <section className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-4">Strategic Context for HISAGEN</h2>
                <ul className="space-y-3">
                    {[
                        "THE DIFFERENTIATOR: Endophytic microbes grow INSIDE the plant (symbiotic, long-lasting) vs competitors' rhizosphere-only products.",
                        "Provides the core 'product' for HISAGEN's Uganda and Kenya operations at preferential cost for initial pilots.",
                        "Product line directly relevant to HISAGEN crops: Maize, Potatoes, Sweet Potatoes, Peanuts.",
                        "CarbonNOW model provides proven framework for farmer-facing carbon sequestration incentives.",
                    ].map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate">
                            <span className="text-primary font-bold shrink-0">→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* CTAs */}
            <section className="my-12 flex flex-wrap justify-center gap-4">
                <a href="/ecosystem" className="px-6 py-2.5 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    ← Back to Ecosystem
                </a>
                <a href="/knowledge-base/evidence" className="px-6 py-2.5 bg-secondary text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                    View Evidence Vault
                </a>
                <a href="/program" className="px-6 py-2.5 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    Program Overview
                </a>
            </section>
        </div>
    );
}
