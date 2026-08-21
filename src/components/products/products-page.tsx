'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, ArrowRight, ChevronDown } from 'lucide-react'
import { FadeUp } from '@/components/motion'

const WHATSAPP_NUMBER = '918013244984'

interface ProductsPageProps {
  onNavigate: (page: string) => void
  onBookContract: (product?: { title: string; image: string; sizes: string[]; sku: string }) => void
}

const SWATCHES = ['#FFD700', '#C85A17', '#FFFFFF', '#0000CD', '#00A86B', '#ADFF2F', '#00BFFF', '#000000']

// Convert hex to HSL
function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return [h * 360, s * 100, l * 100]
}

function getColorFilter(hex: string): string {
  if (!hex) return 'none'
  const [h, s, l] = hexToHsl(hex)
  
  // For Black swatch: drop brightness & contrast
  if (hex === '#000000') {
    return 'brightness(0.3) grayscale(1) contrast(1.1)'
  }
  // For White swatch: boost brightness & desaturate
  if (hex === '#FFFFFF') {
    return 'brightness(1.5) grayscale(1) contrast(0.9)'
  }
  
  // For standard colors: map hue rotation and boost color saturation to match the exact swatch color
  return `hue-rotate(${h - 200}deg) saturate(${1.5 + (s / 100)}) brightness(${0.75 + (l / 150)})`
}

const PRODUCTS = [
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-NK-001", title: "NIRMAL KNIT",
    prices: [{ price: "₹48", detail: "(120gsm)" }, { price: "₹68", detail: "(160gsm)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polyester" }, { label: "Finish", value: "Normal Wash" },
      { label: "Fit", value: "Regular" }, { label: "Neck", value: "Round Neck" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-1.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes and ₹35 extra collar customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-PP-001", title: "POLLY PP",
    prices: [{ price: "₹38", detail: "(110gsm)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Lightweight PP" }, { label: "Finish", value: "Smooth Finish" },
      { label: "Fit", value: "Regular" }, { label: "Neck", value: "Round Neck" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-2.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes and ₹35 extra collar customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-DK-001", title: "DOT KNIT",
    prices: [{ price: "₹45", detail: "(110 GSM)" }, { price: "₹68", detail: "(160 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Dot Knit" }, { label: "Finish", value: "Textured Finish" },
      { label: "Fit", value: "Regular" }, { label: "Neck", value: "Round Neck" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-3.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes and ₹35 extra collar customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-NA-001", title: "NOKIA",
    prices: [{ price: "₹55", detail: "(140 GSM)" }, { price: "₹68", detail: "(160 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polyester Micro" }, { label: "Finish", value: "Micro Finish" },
      { label: "Fit", value: "Regular" }, { label: "Neck", value: "Round Neck" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-4.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes and ₹35 extra collar customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-PK-001", title: "PC KULTI (POLO)",
    prices: [{ price: "₹190", detail: "(220 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polyester Matte" }, { label: "Finish", value: "Matte & Bio-Wash" },
      { label: "Fit", value: "Regular" }, { label: "Neck", value: "Collared Neck" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-5.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-SK-001", title: "SPUN KULTI (POLO)",
    prices: [{ price: "₹135", detail: "(200 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polyester Matte" }, { label: "Finish", value: "Matte" },
      { label: "Fit", value: "Regular" }, { label: "Neck", value: "Collared Neck" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-6.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-TM-001", title: "TECHNO MATTE (POLO)",
    prices: [{ price: "₹135", detail: "(160 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polyester Matte" }, { label: "Finish", value: "Matte & Bio-Wash" },
      { label: "Fit", value: "Regular" }, { label: "Neck", value: "Collared Neck" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-7.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-CS-001", title: "COTTON SINKER (BIOWASHED)",
    prices: [{ price: "₹135", detail: "(160 GSM)" }, { price: "₹165", detail: "(180 GSM)" }, { price: "₹190", detail: "(210 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "100% Cotton" }, { label: "Finish", value: "Bio-Wash & Combed" },
      { label: "Fit", value: "Regular & Oversize" }, { label: "Neck", value: "Round" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-8.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes and ₹35 extra collar customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-JK-001", title: "JACKET",
    prices: [{ price: "₹295", detail: "(280 GSM) Spun Fleece" }, { price: "₹345", detail: "(300 GSM) PC Fleece" }, { price: "₹370", detail: "(380 GSM) PC Fleece" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polly Cotton" }, { label: "Finish", value: "Bio-wash & Silicon Wash" },
      { label: "Fit", value: "Regular & Oversize" }, { label: "Neck", value: "Round" },
      { label: "Sleeve", value: "Full" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-9.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹25 extra for chain/zip customization & ₹10 extra for (XL & XXL) sizes."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-CS-001", title: "COTTON SINKER (NON BIOWASH)",
    prices: [{ price: "₹80", detail: "(180 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "100% Cotton" }, { label: "Finish", value: "Combed" },
      { label: "Fit", value: "Regular & Oversize" }, { label: "Neck", value: "Round" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-10.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes and ₹35 extra collar customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-VS-001", title: "VARSITY",
    prices: [{ price: "₹350", detail: "(280 GSM) Spun Fleece" }, { price: "₹400", detail: "(300 GSM) PC Fleece" }, { price: "₹450", detail: "(380 GSM) PC Fleece" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polly Cotton" }, { label: "Finish", value: "Bio-wash & Silicon Wash" },
      { label: "Fit", value: "Regular & Oversize" }, { label: "Neck", value: "Round" },
      { label: "Sleeve", value: "Full" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-11.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-CO-001", title: "COTTON OVERSIZED (FRENCH TERRY)",
    prices: [{ price: "₹195", detail: "(240 GSM)" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "100% Cotton Loop Knit" }, { label: "Finish", value: "Bio-Wash & Combed" },
      { label: "Fit", value: "Oversize" }, { label: "Neck", value: "Round" },
      { label: "Sleeve", value: "Half Sleeve" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-12.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹10 extra for (XL & XXL) sizes and ₹35 extra collar customization."]
  },
  {
    category: "T-SHIRTS", minOrder: "100 PCS", sku: "MKT-HO-001", title: "HOODIE",
    prices: [{ price: "₹275", detail: "(280 GSM) Spun Fleece" }, { price: "₹325", detail: "(300 GSM) PC Fleece" }, { price: "₹350", detail: "(380 GSM) PC Fleece" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      { label: "Fabric", value: "Polly Cotton" }, { label: "Finish", value: "Bio-wash & Silicon Wash" },
      { label: "Fit", value: "Regular & Oversize" }, { label: "Neck", value: "Round" },
      { label: "Sleeve", value: "Full" }, { label: "Sampling", value: "Available" }
    ],
    image: "/images/product-13.png",
    notes: ["Colors may look different on different screens. For actual colors, fabric shades & availability, please WhatsApp us.", "Customization & Branding options are available.", "₹25 extra for chain/zip customization."]
  },
]

function ProductCard({ product, idx, onBookContract }: { product: typeof PRODUCTS[0]; idx: number; onBookContract: ProductsPageProps['onBookContract'] }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hi, I'm interested in ${product.title} (SKU: ${product.sku}). Please share more details.`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <FadeUp delay={idx * 0.05}>
      <div className="relative overflow-hidden rounded-xl border border-black/10 transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: '#FFFFE3' }}>
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/15 pb-4 mb-6">
            <h2 className="text-xl sm:text-3xl font-black text-black tracking-wider uppercase">{product.category}</h2>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-black/80">
              <div>
                <span className="text-black/50 block text-[10px] uppercase tracking-wider">MINIMUM ORDER</span>
                {product.minOrder}
              </div>
              <div className="h-8 w-[1px] bg-black/20" />
              <div>
                <span className="text-black/50 block text-[10px] uppercase tracking-wider">SKU</span>
                {product.sku}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image + swatches */}
            <div className="flex flex-col items-center space-y-4 md:sticky md:top-6">
              <motion.div
                className="max-w-[360px] w-full min-h-[220px] sm:min-h-[300px] flex items-center justify-center cursor-pointer relative px-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-[260px] sm:max-h-[320px] w-auto object-contain drop-shadow-md transition-all duration-300"
                />
              </motion.div>

              {/* Color swatches */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-full px-2">
                {SWATCHES.map((color) => (
                  <div
                    key={color}
                    className="w-5 h-5 rounded-sm shadow-sm border border-black/20"
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 w-full max-w-[360px]">
                <motion.button
                  onClick={() => onBookContract({ title: product.title, image: product.image, sizes: product.sizes, sku: product.sku })}
                  className="flex-1 py-2.5 bg-[#FF6B2B] text-black font-bold text-xs tracking-wide flex items-center justify-center gap-1.5 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  Get in Touch
                </motion.button>
                <motion.button
                  onClick={handleWhatsApp}
                  className="py-1 cursor-pointer flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  title="Chat on WhatsApp"
                >
                  <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-10 h-10 object-contain" />
                </motion.button>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mb-3">{product.title}</h3>
                <div className="text-lg sm:text-xl font-bold text-black/90 space-y-1">
                  {product.prices.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <span>Price : {p.price}/pcs</span>
                      <span className="text-sm text-black/60 font-normal">{p.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-black/10">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-base sm:text-lg font-bold text-black">Sizes:</span>
                  {product.sizes.map((size) => (
                    <span key={size} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black flex items-center justify-center text-xs sm:text-sm font-bold text-black bg-white/40 shadow-sm">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-black/10 space-y-1.5 text-sm sm:text-base text-black/90">
                {product.details.map((item, dIdx) => (
                  <div key={dIdx} className="flex gap-2">
                    <span className="font-bold min-w-[80px]">{item.label}:</span>
                    <span className="font-medium text-black/80">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Expandable More Details Section */}
              <div className="pt-3 border-t border-black/10">
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="flex items-center gap-2 text-sm font-bold text-[#FF6B2B] hover:text-[#E55A1B] transition-colors duration-200 cursor-pointer py-1"
                >
                  <span>More Details</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMoreOpen && (
                  <div className="mt-4 space-y-5">
                    {/* Container 1: Size Chart */}
                    <div className="space-y-3">
                      <h4 className="font-extrabold text-sm text-black uppercase tracking-wider border-b border-black/10 pb-2 flex items-center justify-between">
                        <span>1. Size Chart</span>
                        <span className="text-[10px] font-normal text-black/60 italic">Inches (±0.5" variation)</span>
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[420px] border-collapse text-xs sm:text-sm text-black/90">
                          <thead>
                            <tr className="bg-[#FF6B2B]/10 text-black">
                              <th className="border border-black/15 px-3 py-2 text-left font-bold">Size</th>
                              <th className="border border-black/15 px-3 py-2 text-center font-bold">Chest</th>
                              <th className="border border-black/15 px-3 py-2 text-center font-bold">Length</th>
                              <th className="border border-black/15 px-3 py-2 text-center font-bold">Shoulder</th>
                              <th className="border border-black/15 px-3 py-2 text-center font-bold">Sleeve</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              ["S", "18", "25", "15", "7"],
                              ["M", "20", "26", "16", "7.5"],
                              ["L", "22", "28", "17", "8"],
                              ["XL", "24", "29", "18", "8.5"],
                              ["XXL", "26", "30", "19", "9"],
                            ].map((row) => (
                              <tr key={row[0]} className="odd:bg-black/[0.03]">
                                <td className="border border-black/15 px-3 py-2 font-bold">{row[0]}</td>
                                <td className="border border-black/15 px-3 py-2 text-center">{row[1]}</td>
                                <td className="border border-black/15 px-3 py-2 text-center">{row[2]}</td>
                                <td className="border border-black/15 px-3 py-2 text-center">{row[3]}</td>
                                <td className="border border-black/15 px-3 py-2 text-center">{row[4]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[10px] italic text-black/60">
                        Measurements are taken on flat garment. Small variations (±0.5") may occur between batches.
                      </p>
                    </div>

                    {/* Container 2: Printing Types */}
                    <div className="space-y-3">
                      <h4 className="font-extrabold text-sm text-black uppercase tracking-wider border-b border-black/10 pb-2 flex items-center justify-between">
                        <span>2. Printing Types</span>
                        <span className="text-[10px] font-normal text-[#FF6B2B]">Min 50 Pcs/Design</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { name: "Screen Printing", desc: "Vibrant & durable prints on cotton and poly blends." },
                          { name: "Sublimation", desc: "Full-colour, photo-quality prints on polyester fabric." },
                          { name: "DTF / Digital", desc: "High-detail digital prints ideal for small batches." },
                          { name: "Embroidery", desc: "Premium stitched logos with a textured finish." },
                        ].map((type) => (
                          <div key={type.name} className="border border-black/15 rounded-lg px-3 py-2.5">
                            <p className="text-xs font-bold text-black">{type.name}</p>
                            <p className="text-[11px] text-black/70 mt-0.5">{type.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] italic text-black/60">
                        Minimum 50 pcs per design. Costing depends on order quantity, print size & number of colors.
                      </p>
                    </div>

                    {/* Container 3: Customization & Branding */}
                    <div className="space-y-3">
                      <h4 className="font-extrabold text-sm text-black uppercase tracking-wider border-b border-black/10 pb-2">
                        3. Customization & Ordering Terms
                      </h4>
                      <ul className="text-xs text-black/80 space-y-1.5 list-disc list-inside font-medium">
                        <li>Customization & Branding options are available.</li>
                        <li>Sampling available upon request before bulk production.</li>
                        <li>Costing depends on order quantity, print size & number of colors.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer notes */}
          <div className="mt-8 pt-4 border-t border-black/15 text-xs text-black font-bold space-y-1.5">
            {product.notes.map((note, nIdx) => (
              <p key={nIdx}>• {note}</p>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

export default function ProductsPage({ onNavigate, onBookContract }: ProductsPageProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFE3' }}>
      {/* ─── HERO BANNER ─── */}
      <section className="relative bg-black text-[#FFFFE3] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#FFFFE3 1px, transparent 1px), linear-gradient(90deg, #FFFFE3 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <FadeUp>
            <nav className="flex items-center gap-2 text-sm text-[#FFFFE3]/40 mb-8">
              <button onClick={() => onNavigate('home')} className="hover:text-[#FF6B2B] transition-colors duration-300 cursor-pointer">Home</button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#FFFFE3]/70">Our Products</span>
            </nav>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]">Our Products</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-[#FFFFE3]/50 max-w-2xl leading-relaxed">Premium textiles crafted for brands</p>
          </FadeUp>
          <motion.div
            className="mt-10 h-[2px] bg-gradient-to-r from-[#FF6B2B] via-[#FFB800] to-transparent max-w-xs"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={idx} product={product} idx={idx} onBookContract={onBookContract} />
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20 sm:py-28 bg-black text-[#FFFFE3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden border border-[#FFFFE3]/10 p-10 sm:p-14 lg:p-20 text-center">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF6B2B]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FFB800]/5 rounded-full blur-3xl" />
              <div className="relative">
                <p className="text-sm tracking-[0.3em] text-[#FF6B2B] uppercase mb-4 font-medium">Get Started</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">Ready to Start Your Project?</h2>
                <p className="mt-4 text-[#FFFFE3]/40 max-w-lg mx-auto leading-relaxed">Let us transform your vision into premium textiles. Our team is ready to discuss your manufacturing needs.</p>
                <motion.button
                  onClick={onBookContract}
                  className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B2B] text-black font-bold text-sm tracking-wide hover:bg-[#E55A1B] transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Manufacturing Contract
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
