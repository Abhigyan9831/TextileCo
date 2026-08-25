import {
  Factory,
  Scissors,
  Shirt,
  Palette,
  Globe,
  Truck,
  Shield,
  Leaf,
  type LucideIcon,
} from "lucide-react";

// ============================================
// Company Information
// ============================================

export const COMPANY = {
  name: "MARUTI KRIT TEXTILES",
  tagline: "Weaving Excellence Since 2009",
  description:
    "MARUTI KRIT TEXTILES is a premier textile manufacturing company with over 10 years of excellence in the industry. We specialize in high-quality garment production, innovative fabric sourcing, and custom textile solutions that meet the demands of fashion brands and retailers.",
  shortDescription:
    "Premium textile manufacturing with 10+ years of excellence. From fabric to fashion, we deliver quality at scale.",
  phone: "+91-8013244984",
  email: "marutikrittextiles@gmail.com",
  address: {
    street: "1, Swamiji Sarani Rd, near Groww Academy, Basak Bagan",
    city: "Kolkata, South Dumdum",
    state: "West Bengal",
    zip: "700048",
    country: "India",
    full: "1, Swamiji Sarani Rd, near Groww Academy, Basak Bagan, Kolkata, South Dumdum, West Bengal 700048",
  },
  foundedYear: 2009,
  website: "https://marutikrittextiles.com",
} as const;

// ============================================
// Navigation Links
// ============================================

export interface NavLink {
  label: string;
  href: string;
  isCTA?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Contract", href: "#contact", isCTA: true },
];

// ============================================
// Services
// ============================================

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "garment-manufacturing",
    title: "Garment Manufacturing",
    description:
      "End-to-end garment production with state-of-the-art machinery and skilled craftsmanship. From cutting to finishing, we ensure every piece meets international quality standards.",
    icon: Shirt,
    features: [
      "Pattern making & grading",
      "Cutting & sewing",
      "Quality control at every stage",
      "Bulk & small batch production",
    ],
  },
  {
    id: "fabric-sourcing",
    title: "Fabric Sourcing",
    description:
      "Access to a vast network of premium fabric suppliers worldwide. We source the finest materials, from organic cotton to technical fabrics, tailored to your specifications.",
    icon: Scissors,
    features: [
      "200+ fabric varieties",
      "Organic & sustainable options",
      "Custom weave & knit",
      "Competitive pricing",
    ],
  },
  {
    id: "textile-design",
    title: "Textile Design & Development",
    description:
      "Our in-house design team creates innovative textile designs, prints, and patterns that set trends. We blend traditional craftsmanship with modern aesthetics.",
    icon: Palette,
    features: [
      "Custom print design",
      "Embroidery & embellishment",
      "Trend forecasting",
      "Rapid prototyping",
    ],
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes that meet international standards. Every product undergoes multiple inspection stages to ensure consistency and excellence.",
    icon: Shield,
    features: [
      "AQL inspection standards",
      "Lab testing & certification",
      "Compliance with OEKO-TEX",
      "Third-party audits",
    ],
  },
  {
    id: "global-logistics",
    title: "Logistics & Export",
    description:
      "Seamless international shipping and logistics management. We handle customs, documentation, and delivery to 25+ cities with reliable supply chain partnerships.",
    icon: Globe,
    features: [
      "Door-to-door delivery",
      "Customs & compliance handling",
      "Real-time shipment tracking",
      "Flexible shipping options",
    ],
  },
  {
    id: "sustainable-manufacturing",
    title: "Sustainable Manufacturing",
    description:
      "Commitment to eco-friendly production processes and sustainable sourcing. We help brands achieve their sustainability goals without compromising on quality.",
    icon: Leaf,
    features: [
      "GOTS certified production",
      "Water recycling systems",
      "Solar-powered facilities",
      "Zero-waste initiatives",
    ],
  },
  {
    id: "private-label",
    title: "Private Label & OEM",
    description:
      "Complete private label solutions from concept to shelf. We manufacture under your brand with full customization options and white-label flexibility.",
    icon: Factory,
    features: [
      "Custom branding & packaging",
      "Design collaboration",
      "Low MOQ options",
      "Fast turnaround times",
    ],
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management",
    description:
      "Integrated supply chain solutions that optimize costs and timelines. From raw material procurement to final delivery, we manage the entire pipeline efficiently.",
    icon: Truck,
    features: [
      "Vendor management",
      "Inventory optimization",
      "Just-in-time delivery",
      "Cost reduction strategies",
    ],
  },
];

// ============================================
// Statistics
// ============================================

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  {
    value: "10",
    label: "Years of Excellence",
    suffix: "+",
  },
  {
    value: "2",
    label: "Garments Produced",
    suffix: "M+",
  },
  {
    value: "500",
    label: "Clients",
    suffix: "+",
  },
  {
    value: "25",
    label: "Products",
    suffix: "+",
  },
];

// ============================================
// Testimonials
// ============================================

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Needed hoodies for my college in bulk. Got 350pcs in just 4days and at factory rates. The owner is really helpful. Ordering next year again for sure.",
    author: "Bitanu Dey",
    role: "Verified Client",
    company: "College Bulk Order",
  },
  {
    id: 2,
    quote: "best place for polo and round tshirts. standard rates.",
    author: "JIVIN KUNDU",
    role: "Verified Client",
    company: "Apparel Partner",
  },
  {
    id: 3,
    quote: "Loved the quality",
    author: "SUBHO PHOTOGRAPHY",
    role: "Verified Client",
    company: "Studio Partner",
  },
  {
    id: 4,
    quote: "Best pricing. Round necks starting at just rs45. Recieved my delivery in just 3days.",
    author: "A.L STUDIO",
    role: "Verified Client",
    company: "Studio Partner",
  },
];

// ============================================
// Blog Posts
// ============================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Sustainable Textile Manufacturing in India",
    excerpt:
      "Exploring how Indian textile manufacturers are leading the shift towards sustainable and eco-friendly production practices, from organic cotton to zero-waste initiatives.",
    category: "Sustainability",
    date: "2025-01-15",
    readTime: "6 min read",
    slug: "future-sustainable-textile-manufacturing-india",
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Fabric Quality Control",
    excerpt:
      "Artificial intelligence and computer vision are transforming how textile manufacturers ensure product quality, reducing defect rates by up to 90% with automated inspection systems.",
    category: "Technology",
    date: "2025-01-08",
    readTime: "5 min read",
    slug: "ai-revolutionizing-fabric-quality-control",
  },
  {
    id: 3,
    title: "2025 Textile Trends: What Brands Need to Know",
    excerpt:
      "From bio-fabricated materials to circular fashion systems, here are the key textile trends shaping the industry in 2025 and how your brand can stay ahead of the curve.",
    category: "Trends",
    date: "2024-12-20",
    readTime: "7 min read",
    slug: "2025-textile-trends-brands-need-know",
  },
  {
    id: 4,
    title: "Building a Resilient Supply Chain: Lessons from the Textile Industry",
    excerpt:
      "The pandemic exposed critical vulnerabilities in textile supply chains. Here's how leading manufacturers are building more resilient and agile operations for the future.",
    category: "Supply Chain",
    date: "2024-12-10",
    readTime: "8 min read",
    slug: "building-resilient-supply-chain-textile-industry",
  },
  {
    id: 5,
    title: "The Rise of Private Label Manufacturing in Emerging Markets",
    excerpt:
      "Private label is booming as retailers and DTC brands seek faster time-to-market and better margins. We examine why India is becoming the go-to destination for private label textile production.",
    category: "Business",
    date: "2024-11-28",
    readTime: "6 min read",
    slug: "rise-private-label-manufacturing-emerging-markets",
  },
  {
    id: 6,
    title: "From Loom to Lifestyle: The Journey of a Garment",
    excerpt:
      "Ever wondered what goes into making the clothes you wear? We take you behind the scenes of our manufacturing process, from raw fiber to finished product ready for the retail shelf.",
    category: "Manufacturing",
    date: "2024-11-15",
    readTime: "5 min read",
    slug: "from-loom-to-lifestyle-journey-garment",
  },
];

// ============================================
// Social Links
// ============================================

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/maruti_krit_textiles/",
    icon: "instagram",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/share/1JgFqYSfBd/",
    icon: "facebook",
  },
];

// ============================================
// Brand Colors (for programmatic use)
// ============================================

export const BRAND_COLORS = {
  cream: "#FFFFE3",
  black: "#000000",
  orange: "#FF6B2B",
  yellow: "#FFB800",
  silver: "#C0C0C0",
  orangeDark: "#E55A1B",
  creamDark: "#F5F5C8",
} as const;

// ============================================
// Blog Categories
// ============================================

export const BLOG_CATEGORIES = [
  "All",
  "Sustainability",
  "Technology",
  "Trends",
  "Supply Chain",
  "Business",
  "Manufacturing",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
