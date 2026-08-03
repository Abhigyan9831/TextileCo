'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/motion'

interface ProductsPageProps {
  onNavigate: (page: string) => void
  onBookContract: () => void
}

export default function ProductsPage({ onNavigate, onBookContract }: ProductsPageProps) {
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
              <span className="text-[#FFFFE3]/70">Our Products</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]">
              Our Products
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-[#FFFFE3]/50 max-w-2xl leading-relaxed">
              Premium textiles crafted for brands
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

      {/* ─── PRODUCTS GRID ─── */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] text-[#FF6B2B] uppercase mb-3 font-medium">
                Our Range
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
                Comprehensive Range
              </h2>
              <p className="mt-4 text-black/50 max-w-2xl mx-auto leading-relaxed">
                Coming soon — our full product range will be displayed here.
              </p>
            </div>
          </FadeUp>

          <div className="relative border border-dashed border-black/15 p-16 text-center">
            <p className="text-lg text-black/40 font-medium tracking-wide">
              Content coming soon
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20 sm:py-28 bg-black text-[#FFFFE3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden border border-[#FFFFE3]/10 p-10 sm:p-14 lg:p-20 text-center">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF6B2B]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FFB800]/5 rounded-full blur-3xl" />

              <div className="relative">
                <p className="text-sm tracking-[0.3em] text-[#FF6B2B] uppercase mb-4 font-medium">
                  Get Started
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
                  Ready to Start Your Project?
                </h2>
                <p className="mt-4 text-[#FFFFE3]/40 max-w-lg mx-auto leading-relaxed">
                  Let us transform your vision into premium textiles. Our team is ready to discuss your manufacturing needs.
                </p>
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
