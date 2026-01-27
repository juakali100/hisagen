export type Partner = {
    id: string;
    name: string;
    role: string;
    category: "Strategy" | "Technology" | "Operations" | "Accreditation" | "Marketplace";
    partnerType: "core" | "services"; // core = technology/marketplace partners, services = consulting/advisory
    website: string;
    websiteReview: string;
    personnel: {
        name: string;
        role: string;
        bio: string;
    }[];
    organizationSummary: string;
    strategicContext: string[];
    keyResources: {
        title: string;
        file: string;
        format: "PDF" | "Doc" | "Link";
    }[];
    detailPage?: string; // Optional link to dedicated partner page (e.g., /ecosystem/locus-ag)
};

export const partners: Partner[] = [
    {
        id: "locus-ag",
        name: "Locus AG",
        role: "Core Technology Partner (Biologicals)",
        category: "Technology",
        partnerType: "core",
        website: "https://locusag.com/",
        detailPage: "/ecosystem/locus-ag",
        websiteReview: "Modern, product-focused site highlighting B-Corp certification and award-winning microbial solutions. Features the 'CarbonNOW' program prominently, demonstrating a mature model for farmer-facing carbon sequestration incentives. Key differentiator: Endophytic microbes that grow INSIDE the plant for sustained benefits.",
        personnel: [
            {
                name: "Ken Alibek",
                role: "Scientific Lead",
                bio: "World-renowned pioneer in microbial biotechnology. Technical architect behind the specific Trichoderma and Bacillus strains used in Rhizolizer® Duo."
            },
            {
                name: "David Dyson",
                role: "Lead Agronomist",
                bio: "Leads agronomic research and field trial programs. Responsible for multi-year, multi-site yield validation across 28+ CROs and universities."
            }
        ],
        organizationSummary: "Cleveland-based agricultural biologicals company (division of Locus Fermentation Solutions). Developer of Rhizolizer® product line - non-GMO microbial bio-stimulants featuring ENDOPHYTIC microbes that grow inside plants for sustained yield enhancement and carbon sequestration. B-Corp certified.",
        strategicContext: [
            "THE DIFFERENTIATOR: Endophytic microbes grow INSIDE the plant (symbiotic, long-lasting) vs competitors' rhizosphere-only products that stay around roots. This is the core IP advantage.",
            "Key organisms: Trichoderma harzianum/virens (K solubilizer, root expansion), Bacillus amyloliquefaciens (vigor, resilience), Bradyrhizobia (N-fixing, provides 50-90% of plant nitrogen needs).",
            "Product line: Rhizolizer Duo (Corn/Wheat), Rhizolizer Prime (Soybeans/Peanuts), Rhizolizer Duo WP (spray/fertigation for F&V), Unpac (glycolipid biosurfactant for soil decompaction).",
            "Validated yield improvements: Potatoes +22.6%, Sweet Potatoes +17.7%, Peanuts +6.2%, Corn +4.6%, Soybeans +5.3%, Wheat +5.4% - all statistically significant.",
            "Provides the core 'product' for HISAGEN's Uganda and Kenya operations at preferential cost for initial pilots.",
            "CarbonNOW program: 121% more carbon sequestered vs untreated plots, 3.3-8.6 MT CO2eq/acre/year. Partners with Anew (verification), Nori (marketplace), COMET-Farm (USDA accounting)."
        ],
        keyResources: [
            {
                title: "Locus AG Company Overview",
                file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf",
                format: "PDF"
            },
            {
                title: "Validated Yield Data",
                file: "/evidence",
                format: "Link"
            }
        ]
    },
    {
        id: "czmp",
        name: "Carbon Neutral Marketplace",
        role: "Marketplace & Monetization Layer",
        category: "Marketplace",
        partnerType: "core",
        website: "https://www.carbonneutralmarketplace.com/",
        websiteReview: "The site positions itself as a 'Curated Marketplace' for Nature-Based Solutions (NBS). Currently in 'maintenance-first' mode; requires significant UI/UX upgrades and a fix for the project questionnaire logic to align with modern VCM standards.",
        personnel: [
            {
                name: "K A-B",
                role: "Founder",
                bio: "Leveraging background in financial quant strategy to build a transparent, traceable exchange for nature-based carbon as a verified asset class."
            }
        ],
        organizationSummary: "Originally conceived as a broad-spectrum NBS exchange, CZMP acts as the commercial 'wrapper' and primary monetization portal for the HISAGEN pipeline.",
        strategicContext: [
            "Project Origin: The entity that facilitated the initial connection between Keir and Locus AG.",
            "Boutique Pivot: Potential evolution from general marketplace to a dedicated 'Hisagen Storefront' and Investor Transparency Hub.",
            "Vertical Integration: Enables the project to own the 'last mile' from African soil data to buyer retirement accounts.",
            "Technical Debt: Identified as a critical Stage 2/3 workstream; currently a functional blocker for credit onboarding."
        ],
        keyResources: [
            {
                title: "Nature-Based Solutions Vision Deck",
                file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-001-carbon-zero-pitch-jun23.pdf",
                format: "PDF"
            }
        ]
    },
    {
        id: "pandion",
        name: "Pandion Studio",
        role: "Systems Architect & Performance Partner",
        category: "Strategy",
        partnerType: "services",
        website: "https://pandion.studio",
        websiteReview: "Clean, strategy-focused site emphasizing AI, Capability, and Sustainability. Positions the firm as a partner for organizations needing to navigate the 'Stage Shift' from incubation to institutional scale.",
        personnel: [
            {
                name: "Nic C",
                role: "Principal & Architect",
                bio: "Specializes in venture architecture and strategic synthesis. Responsible for building the operational Digital Twins and funding frameworks for complex climate assets."
            }
        ],
        organizationSummary: "A strategic venture architecture firm providing the systems, software, and funding blueprints required to move HISAGEN from scientific verification to global scale.",
        strategicContext: [
            "Operational Scaffolding: Building and managing the project's digital foundation and tactical intelligence ledger.",
            "Funding Blueprint: Coordinating the capital continuum and 12-lead fundraising pipeline.",
            "Strategic Synthesis: Managing the 'Bridge'—ensuring field intelligence is translated into high-level strategic assets for stakeholders."
        ],
        keyResources: [
            {
                title: "The Capital Continuum Framework",
                file: "/capital-continuum",
                format: "Link"
            }
        ]
    },
    {
        id: "3-degrees",
        name: "3Degrees",
        role: "Accreditation & Carbon Program Design Partner",
        category: "Accreditation",
        partnerType: "services",
        website: "https://3degreesinc.com/",
        websiteReview: "Sophisticated and institutional. Expertise in 'Market-Based Solutions' and high-quality environmental project design. They position themselves as an institutional bridge to global carbon capital markets.",
        personnel: [
            {
                name: "Pending",
                role: "Technical Lead",
                bio: "Specific 3Degrees personnel contact and bio to be confirmed from upcoming engagement overview."
            }
        ],
        organizationSummary: "A global market leader in environmental commodities. 3Degrees provides the technical advisory and program architecture required to certify the Ugandan and Kenyan projects.",
        strategicContext: [
            "Institutional Bridge: Conduit for HISAGEN to formal Voluntary Carbon Markets (VCM).",
            "Certification Moat: Responsible for Verra (VCS) or Gold Standard accreditation.",
            "Methodology Design: Turning experimental soil results into bankable, institutional-grade carbon assets.",
            "Technical Oversight: Ensures project methodologies are defensible under global audit standards."
        ],
        keyResources: []
    }
];
