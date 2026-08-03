'use client'

import { motion } from 'framer-motion'
import {
  Shirt,
  Scissors,
  Palette,
  Shield,
  Globe,
  Leaf,
  Tag,
  Layers,
  CheckCircle,
  Package,
  Check,
  ArrowRight,
  ChevronDown,
  Quote,
} from 'lucide-react'
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  SlideIn,
  ScaleIn,
  staggerChildVariants,
  staggerScaleChildVariants,
} from '@/components/motion'
import { STATS, TESTIMONIALS, BLOG_POSTS } from '@/lib/constants'

interface HomePageProps {
  onNavigate: (page: string) => void
  onBookContract: () => void
}

// ============================================
// Service card data for Section 4
// ============================================
const HOME_SERVICES = [
  {
    icon: Shirt,
    title: 'T-shirt Manufacturing',
    description:
      'End-to-end T-shirt production with premium fabrics and precision stitching for brands.',
  },
  {
    icon: Scissors,
    title: 'Custom Apparel',
    description:
      'Bespoke garment solutions tailored to your brand identity, from design to final delivery.',
  },
  {
    icon: Palette,
    title: 'Printing & Finishing',
    description:
      'Advanced screen printing, sublimation, and finishing techniques for vibrant, lasting results.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Rigorous multi-stage quality control meeting AQL standards and international certifications.',
  },
  {
    icon: Package,
    title: 'Bulk Order Solutions',
    description:
      'Scalable manufacturing for startups, brands, wholesellers and corporate clients.',
  },
  {
    icon: Tag,
    title: 'Private Label Solutions',
    description:
      'Custom labels, packaging and branding for your apparel business.',
  },
]

// ============================================
// Manufacturing process steps for Section 6
// ============================================
const PROCESS_STEPS = [
  {
    number: '01',
    icon: Scissors,
    title: 'Design & Pattern',
    description: 'Creative design translation into precise patterns and technical specifications.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Fabric Sourcing',
    description: 'Curating premium fabrics from our network of 200+ verified suppliers.',
  },
  {
    number: '03',
    icon: Scissors,
    title: 'Cutting & Sewing',
    description: 'Precision cutting and expert stitching with state-of-the-art machinery.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Quality Check',
    description: 'Multi-stage inspection ensuring every garment meets exacting international standards.',
  },
  {
    number: '05',
    icon: Package,
    title: 'Packaging & Dispatch',
    description: 'Careful packaging and reliable logistics for on-time delivery.',
  },
]

// ============================================
// Why Choose Us items for Section 7
// ============================================
const WHY_CHOOSE_ITEMS = [
  {
    title: 'Quality Assurance',
    description: 'Every garment undergoes rigorous multi-stage quality checks meeting international standards.',
  },
  {
    title: 'Scalable Production',
    description: 'From small batches to millions of units — we scale seamlessly with your needs.',
  },
  {
    title: 'Modern Machinery',
    description: 'State-of-the-art equipment ensuring precision, speed, and consistency in every piece.',
  },
  {
    title: 'Timely Delivery',
    description: '98% on-time delivery rate with transparent tracking and proactive communication.',
  },
  {
    title: 'Premium Fabrics',
    description: 'Access to 200+ fabric varieties sourced from the world\'s finest mills and suppliers.',
  },
]

// ============================================
// Portfolio grid items for Section 5
// ============================================
const PORTFOLIO_ITEMS = [
  {
    src: '/images/products-1.png',
    category: 'T-Shirts',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  },
  {
    src: '/images/products-2.png',
    category: 'Custom Apparel',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/collection.png',
    category: 'Collections',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/fabric-texture.png',
    category: 'Fabrics',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/packaging.png',
    category: 'Packaging',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
]

// ============================================
// Main HomePage Component
// ============================================
export default function HomePage({ onNavigate, onBookContract }: HomePageProps) {
  return (
    <div className="overflow-hidden">
      {/* ====== SECTION 1: HERO ====== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.png"
            alt="Maruti Krit Textiles manufacturing facility"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
          <div className="max-w-3xl">
            <FadeUp delay={0.2}>
              <p className="text-[#FF6B2B] text-sm sm:text-base tracking-[0.3em] uppercase mb-6 font-medium">
                Maruti Krit Textiles
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tight">
                CRAFTING
              </h1>
            </FadeUp>

            <FadeUp delay={0.5}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tight mt-1">
                EXCELLENCE
              </h1>
            </FadeUp>

            <FadeUp delay={0.6}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/70 tracking-[0.15em] mt-4">
                IN EVERY THREAD
              </p>
            </FadeUp>

            <FadeUp delay={0.8}>
              <p className="text-base sm:text-lg text-white/60 mt-8 max-w-xl leading-relaxed">
                Premium T-shirt Manufacturing &amp; Garment Production for Fashion Brands and Resellers
              </p>
            </FadeUp>

            <FadeUp delay={1.0}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onBookContract}
                  className="px-8 py-4 bg-[#FF6B2B] text-black font-semibold text-sm sm:text-base tracking-wide hover:bg-[#FFB800] transition-colors duration-300 cursor-pointer"
                >
                  Start Your Order
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('portfolio')}
                  className="px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm sm:text-base tracking-wide hover:bg-white/10 hover:border-white transition-colors duration-300 cursor-pointer"
                >
                  Explore Our Work
                </motion.button>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Right side vertical text */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10">
          <FadeIn delay={1.2}>
            <p className="text-white/20 text-sm tracking-[0.5em] uppercase font-light" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              EST. 2009
            </p>
          </FadeIn>
        </div>

        {/* Scroll indicator at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <FadeIn delay={1.4}>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Scroll to discover</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-white/40" />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ====== SECTION 2: TRUST / STATS ====== */}
      <section className="bg-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {STATS.map((stat, index) => (
              <FadeUp key={stat.label} delay={index * 0.15}>
                <div className={`flex flex-col items-center text-center lg:px-8 ${index < 3 ? 'lg:border-r lg:border-white/10' : ''}`}>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FF6B2B]">
                    {stat.value}
                    <span className="text-[#FF6B2B]">{stat.suffix}</span>
                  </p>
                  <p className="text-[#FFFFE3]/70 text-sm sm:text-base mt-3 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: ABOUT PREVIEW ====== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFE3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <SlideIn direction="left">
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/factory.png"
                    alt="Maruti Krit Textiles manufacturing facility"
                    className="w-full h-[400px] lg:h-[520px] object-cover"
                  />
                </div>
                {/* Decorative offset border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#FF6B2B] -z-10" />
              </div>
            </SlideIn>

            {/* Right - Text */}
            <SlideIn direction="right">
              <div>
                <p className="text-[#FF6B2B] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                  About Maruti Krit
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
                  Where Tradition Meets Innovation
                </h2>
                <p className="text-black/60 text-base sm:text-lg mt-6 leading-relaxed">
                  With over 10 years of expertise, MARUTI KRIT TEXTILES combines time-honoured
                  craftsmanship with cutting-edge technology to deliver garments that exceed international
                  standards. From our state-of-the-art facility in Kolkata, we serve fashion brands
                  and retailers across 25+ cities with unwavering commitment to quality and
                  sustainability.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('about')}
                  className="mt-8 px-8 py-3.5 bg-black text-[#FFFFE3] font-semibold text-sm tracking-wide hover:bg-[#FF6B2B] transition-colors duration-300 cursor-pointer"
                >
                  Learn More
                </motion.button>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: SERVICES ====== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F5F5C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-[#FF6B2B] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                What We Do
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
                Our Manufacturing Services
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerChildVariants}
                whileHover={{ y: -4 }}
                className="group p-6 lg:p-8 border border-black/10 hover:border-[#FF6B2B] transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#FFFFE3' }}
              >
                <service.icon className="w-10 h-10 text-[#FF6B2B] mb-5" />
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-black/55 text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center gap-2 text-[#FF6B2B] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== SECTION 5: PRODUCT SHOWCASE / PORTFOLIO ====== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFE3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-[#FF6B2B] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Our Work
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
                Our Portfolio
              </h2>
              <p className="text-black/50 text-base sm:text-lg mt-4 max-w-md mx-auto">
                Precision Crafted Garments
              </p>
            </div>
          </FadeUp>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[260px]">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <FadeUp key={item.category} delay={index * 0.1} className={item.span}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden group h-full cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                    <span className="text-white font-semibold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-3.5 bg-black text-[#FFFFE3] font-semibold text-sm tracking-wide hover:bg-[#FF6B2B] transition-colors duration-300 cursor-pointer"
              >
                View Full Portfolio
              </motion.button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ====== SECTION 6: MANUFACTURING PROCESS ====== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F5F5C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-[#FF6B2B] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                How We Work
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
                Our Process
              </h2>
            </div>
          </FadeUp>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-black/10 z-0" />

            {PROCESS_STEPS.map((step, index) => (
              <FadeUp key={step.title} delay={index * 0.15} className="relative z-10 flex-1">
                <div className="flex flex-col items-center text-center px-3">
                  {/* Step circle */}
                  <div className="w-20 h-20 rounded-full border-2 border-[#FF6B2B] flex items-center justify-center bg-[#F5F5C8] mb-6">
                    <step.icon className="w-8 h-8 text-[#FF6B2B]" />
                  </div>
                  <p className="text-[#FF6B2B] text-sm font-bold mb-2">{step.number}</p>
                  <h3 className="text-base font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-black/50 text-xs leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <FadeUp key={step.title} delay={index * 0.1}>
                <div className="flex gap-5">
                  {/* Step circle */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#FF6B2B] flex items-center justify-center bg-[#F5F5C8]">
                    <step.icon className="w-6 h-6 text-[#FF6B2B]" />
                  </div>
                  <div>
                    <p className="text-[#FF6B2B] text-xs font-bold mb-1">{step.number}</p>
                    <h3 className="text-base font-bold text-black mb-1">{step.title}</h3>
                    <p className="text-black/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 7: WHY CHOOSE US ====== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFE3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Heading */}
            <FadeUp>
              <div className="lg:sticky lg:top-32">
                <p className="text-[#FF6B2B] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                  Our Edge
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
                  Why Choose
                  <br />
                  Maruti Krit
                </h2>
                <p className="text-black/50 text-base mt-6 leading-relaxed max-w-md">
                  We combine deep industry expertise with modern manufacturing capabilities to
                  deliver results that exceed expectations — every time.
                </p>
              </div>
            </FadeUp>

            {/* Right - Grid of items */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={staggerScaleChildVariants}
                  className={`${index === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <ScaleIn delay={index * 0.1}>
                    <div className="p-5 border border-black/5 hover:border-[#FF6B2B]/30 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#FF6B2B]/10 flex items-center justify-center mb-3">
                        <Check className="w-4 h-4 text-[#FF6B2B]" />
                      </div>
                      <h3 className="text-base font-bold text-black mb-2">{item.title}</h3>
                      <p className="text-black/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </ScaleIn>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ====== SECTION 8: TESTIMONIALS ====== */}
      <section className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-[#FF6B2B] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Testimonials
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                What Our Partners Say
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={staggerChildVariants}
                whileHover={{ y: -4 }}
                className="relative p-6 lg:p-8 border border-white/10 hover:border-[#FF6B2B]/30 transition-colors duration-300"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#FF6B2B]/20 absolute top-6 right-6" />

                <p className="text-white/70 text-sm leading-relaxed mb-6 pr-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-white/40 text-xs mt-1">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== SECTION 9: BLOG PREVIEW ====== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFE3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-[#FF6B2B] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                From the Blog
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
                Insights &amp; Updates
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <motion.div
                key={post.id}
                variants={staggerChildVariants}
                whileHover={{ y: -4 }}
                className="group p-6 border border-black/5 hover:border-[#FF6B2B]/30 transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#FFFFE3' }}
                onClick={() => onNavigate('blog')}
              >
                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-[#FF6B2B]/10 text-[#FF6B2B] text-xs font-semibold tracking-wide uppercase mb-4">
                  {post.category}
                </span>

                <h3 className="text-lg font-bold text-black mb-3 leading-snug group-hover:text-[#FF6B2B] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-black/35 text-xs">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-black/20" />
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FF6B2B] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.3}>
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('blog')}
                className="px-8 py-3.5 border-2 border-black text-black font-semibold text-sm tracking-wide hover:bg-black hover:text-[#FFFFE3] transition-colors duration-300 cursor-pointer"
              >
                View All Articles
              </motion.button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ====== SECTION 10: FINAL CTA ====== */}
      <section className="bg-black py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-[#FF6B2B]" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-[#FFB800]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                Ready to Manufacture
                <br />
                <span className="text-[#FF6B2B]">Your Vision?</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-white/60 text-base sm:text-lg mt-6 leading-relaxed max-w-xl mx-auto">
                From concept to delivery, we bring your designs to life with precision and quality.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onBookContract}
                  className="px-8 py-4 bg-[#FF6B2B] text-black font-semibold text-sm sm:text-base tracking-wide hover:bg-[#FFB800] transition-colors duration-300 cursor-pointer"
                >
                  Book a Manufacturing Contract
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 border-2 border-[#FFFFE3]/30 text-[#FFFFE3] font-semibold text-sm sm:text-base tracking-wide hover:border-[#FFFFE3] hover:bg-[#FFFFE3]/5 transition-colors duration-300 cursor-pointer"
                >
                  Contact Our Team
                </motion.button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  )
}
