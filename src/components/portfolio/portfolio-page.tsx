'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight,
  ArrowRight,
  Shirt,
  Dumbbell,
  Sun,
  Briefcase,
  Package,
} from 'lucide-react'
import {
  FadeUp,
  StaggerContainer,
  staggerScaleChildVariants,
} from '@/components/motion'

interface PortfolioPageProps {
  onNavigate: (page: string) => void
  onBookContract: () => void
}

type Category = 'All' | 'T-Shirts' | 'Activewear' | 'Casual Wear' | 'Formal Wear' | 'Packaging'

const categories: Category[] = [
  'All',
  'T-Shirts',
  'Activewear',
  'Casual Wear',
  'Formal Wear',
  'Packaging',
]

const categoryIcons: Record<Category, React.ElementType | null> = {
  All: null,
  'T-Shirts': Shirt,
  Activewear: Dumbbell,
  'Casual Wear': Sun,
  'Formal Wear': Briefcase,
  Packaging: Package,
}

interface PortfolioItem {
  id: string
  image: string
  title: string
  category: Category
  span: 'tall' | 'wide' | 'normal'
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'premium-cotton-tees',
    image: '/images/products-1.png',
    title: 'Premium Cotton Tees',
    category: 'T-Shirts',
    span: 'tall',
  },
  {
    id: 'streetwear-collection',
    image: '/images/products-2.png',
    title: 'Streetwear Collection',
    category: 'Casual Wear',
    span: 'normal',
  },
  {
    id: 'color-collection',
    image: '/images/collection.png',
    title: 'Color Collection',
    category: 'T-Shirts',
    span: 'wide',
  },
  {
    id: 'fabric-quality',
    image: '/images/fabric-texture.png',
    title: 'Fabric Quality',
    category: 'All',
    span: 'normal',
  },
  {
    id: 'brand-packaging',
    image: '/images/packaging.png',
    title: 'Brand Packaging',
    category: 'Packaging',
    span: 'normal',
  },
  {
    id: 'custom-prints',
    image: '/images/printing.png',
    title: 'Custom Prints',
    category: 'T-Shirts',
    span: 'tall',
  },
  {
    id: 'manufacturing-excellence',
    image: '/images/factory.png',
    title: 'Manufacturing Excellence',
    category: 'All',
    span: 'wide',
  },
]

const metrics = [
  { value: '500+', label: 'Designs Produced' },
  { value: '99.8%', label: 'Quality Rate' },
  { value: '48hr', label: 'Sample Turnaround' },
]

export default function PortfolioPage({ onNavigate, onBookContract }: PortfolioPageProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFE3' }}>
      {/* ─── HERO BANNER ─── */}
      <section className="relative bg-black text-[#FFFFE3] overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#FFFFE3 1px, transparent 1px), linear-gradient(90deg, #FFFFE3 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <FadeUp>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#FFFFE3]/40 mb-8">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-[#FF6B2B] transition-colors duration-300 cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#FFFFE3]/70">Portfolio</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]">
              Our Portfolio
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-[#FFFFE3]/50 max-w-2xl leading-relaxed">
              Showcasing precision-crafted garments and textile excellence
            </p>
          </FadeUp>

          {/* Decorative line */}
          <motion.div
            className="mt-10 h-[2px] bg-gradient-to-r from-[#FF6B2B] via-[#FFB800] to-transparent max-w-xs"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </section>

      {/* ─── CATEGORY FILTERS ─── */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const CatIcon = categoryIcons[category]
                const isActive = activeCategory === category
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-sm font-medium tracking-wide
                      transition-all duration-300 cursor-pointer border
                      ${
                        isActive
                          ? 'bg-[#FF6B2B] text-black border-[#FF6B2B]'
                          : 'bg-transparent text-black/50 border-black/10 hover:border-[#FF6B2B]/40 hover:text-black/70'
                      }
                    `}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {CatIcon && <CatIcon className="w-3.5 h-3.5" />}
                    {category}
                  </motion.button>
                )
              })}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── PORTFOLIO GRID ─── */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[260px] sm:auto-rows-[280px] lg:auto-rows-[300px]"
            >
              {filteredItems.map((item) => {
                const spanClass =
                  item.span === 'tall'
                    ? 'sm:row-span-2'
                    : item.span === 'wide'
                      ? 'sm:col-span-2'
                      : ''

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`group relative overflow-hidden cursor-pointer ${spanClass}`}
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Default subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        <span className="text-xs tracking-[0.2em] text-[#FF6B2B] uppercase font-medium">
                          {item.category === 'All' ? 'Textile' : item.category}
                        </span>
                        <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#FFFFE3] tracking-tight">
                          {item.title}
                        </h3>
                        <div className="mt-3 w-8 h-[2px] bg-[#FF6B2B] mx-auto" />
                      </motion.div>
                    </div>

                    {/* Bottom label (visible by default) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className="text-sm font-semibold text-white drop-shadow-lg">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-black/30 text-lg">
                No items found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── QUALITY METRICS SECTION ─── */}
      <section className="py-20 sm:py-28 bg-black text-[#FFFFE3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-sm tracking-[0.3em] text-[#FF6B2B] uppercase mb-3 font-medium">
                By The Numbers
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Excellence in Every Metric
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12"
            staggerDelay={0.12}
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={staggerScaleChildVariants}
                className="text-center py-8 border border-[#FFFFE3]/5"
              >
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FF6B2B] leading-none">
                  {metric.value}
                </span>
                <p className="mt-3 text-sm sm:text-base text-[#FFFFE3]/50 tracking-wide">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20 sm:py-28 bg-black text-[#FFFFE3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden border border-[#FFFFE3]/10 p-10 sm:p-14 lg:p-20 text-center">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF6B2B]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#FFB800]/5 rounded-full blur-3xl" />

              <div className="relative">
                <p className="text-sm tracking-[0.3em] text-[#FF6B2B] uppercase mb-4 font-medium">
                  Your Brand Next
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
                  Want to See Your Brand Here?
                </h2>
                <p className="mt-4 text-[#FFFFE3]/40 max-w-lg mx-auto leading-relaxed">
                  Join hundreds of brands who trust MARUTI KRIT TEXTILES for premium manufacturing.
                </p>
                <motion.button
                  onClick={onBookContract}
                  className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B2B] text-black font-bold text-sm tracking-wide hover:bg-[#E55A1B] transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Your Project
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
