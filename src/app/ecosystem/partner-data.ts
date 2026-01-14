export type Partner = {
    id: string;
    name: string;
    role: string;
    category: "Strategy" | "Technology" | "Operations" | "Accreditation" | "Marketplace";
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
};

export const partners: Partner[] = [
    {
        id: "deep-six",
        name: "Deep Six Consulting",
        role: "Lead Venture Builder & Strategic Lead",
        category: "Strategy",
        website: "https://www.deep6cs.com/",
        websiteReview: "Professional service-oriented site focusing on 'Uncovering Hidden Customer Insights' and 'Digital Transformation.' Strong emphasis on data science, ML, and financial services compliance (MNPI). Positions the firm as a bridge between complex data and strategic business optimization.",
        personnel: [
            {
                name: "K A-B",
                role: "Founder & Principal",
                bio: "Former Merrill Lynch Quantitative Strategies Group (10+ years). Expertise in pricing algorithms, automated trading, and AI/ML implementation. Transitioned to climate/ag-tech venture building as a solo operator."
            }
        ],
        organizationSummary: "A digital transformation consultancy specializing in data science and market analysis for financial services. Acts as the primary organizational vehicle and 'engine' behind the HISAGEN venture.",
        strategicContext: [
            "Sole originator of the HISAGEN concept and Locus AG Africa partnership.",
            "Currently managing 4 parallel ventures including Carbon Zero Marketplace and LexisNexis AI testing.",
            "Primary need: Transitioning from solo operator to structured organization with grant-funded overheads."
        ],
        keyResources: [
            {
                title: "Client Profile Dossier",
                file: "03-pandion-business/operations/del/clients/deep-six-consulting/client-profile.md",
                format: "Doc"
            },
            {
                title: "Initial Discovery Call Notes",
                file: "03-pandion-business/operations/del/clients/deep-six-consulting/call-notes-2025-11-07.md",
                format: "Doc"
            }
        ]
    },
    {
        id: "locus-ag",
        name: "Locus AG",
        role: "Core Technology Partner (Biologicals)",
        category: "Technology",
        website: "https://locusag.com/",
        websiteReview: "Modern, product-focused site highlighting B-Corp certification and award-winning microbial solutions. Features the 'CarbonNOW' program prominently, demonstrating a mature model for farmer-facing carbon sequestration incentives.",
        personnel: [
            {
                name: "Ken Alibek",
                role: "Scientific Lead",
                bio: "World-renowned pioneer in microbial biotechnology. Technical architect behind the specific Trichoderma and Bacillus strains used in Rhizolizer® Duo."
            }
        ],
        organizationSummary: "Cleveland-based agricultural biologicals company. Developer of Rhizolizer® Duo, a non-GMO microbial soil amendment designed for high-impact carbon sequestration and yield enhancement.",
        strategicContext: [
            "Provides the core 'product' for HISAGEN's Uganda and Kenya operations.",
            "Supportive of Africa expansion; providing equipment and product at low cost for initial pilots.",
            "Locus AG's 'CarbonNOW' provides the baseline methodology for HISAGEN's carbon credit generation."
        ],
        keyResources: [
            {
                title: "Locus AG Company Overview",
                file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf",
                format: "PDF"
            }
        ]
    }
];
