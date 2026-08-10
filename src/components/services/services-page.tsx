'use client'

import { motion } from 'framer-motion'
import {
  ChevronRight,
  MessageSquare,
  PenTool,
  Factory,
  Truck,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import {
  FadeUp,
  StaggerContainer,
  staggerChildVariants,
} from '@/components/motion'

interface ServicesPageProps {
  onNavigate: (page: string) => void
  onBookContract: () => void
}

const processSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We listen to your vision, understand your brand, and define project scope and requirements.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'Our creative team develops custom designs, patterns, and prototypes for your approval.',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Production',
    description: 'State-of-the-art manufacturing with rigorous quality control at every stage.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Delivery',
    description: 'Reliable logistics ensure your products arrive on time and in perfect condition.',
  },
]

export default function ServicesPage({ onNavigate, onBookContract }: ServicesPageProps) {
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
              <span className="text-[#FFFFE3]/70">Services</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]">
              Our Services
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-[#FFFFE3]/50 max-w-2xl leading-relaxed">
              End-to-end textile manufacturing solutions for brands
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

      {/* ─── SERVICES GRID ─── */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] text-[#FF6B2B] uppercase mb-3 font-medium">
                What We Offer
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
                Comprehensive Solutions
              </h2>
              <p className="mt-4 text-black/50 max-w-2xl mx-auto leading-relaxed">
                From concept to delivery, we provide every service your brand needs to bring exceptional textiles to market.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
            staggerDelay={0.08}
          >
            {SERVICES.map((service) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.id}
                  variants={staggerChildVariants}
                  className="group relative bg-[#FFFFE3] border border-black/[0.06] p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B2B]/60 hover:shadow-[0_8px_30px_-8px_rgba(255,107,43,0.15)]"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FF6B2B]/10 mb-5 transition-colors duration-300 group-hover:bg-[#FF6B2B]/20">
                    <IconComponent className="w-5.5 h-5.5 text-[#FF6B2B]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-black mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-black/50 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-black/40"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#FF6B2B] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6B2B] group-hover:gap-2.5 transition-all duration-300 cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Corner accent on hover */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[3px] border-r-[3px] border-t-[#FF6B2B] border-r-[#FF6B2B] opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300" />
                </motion.div>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── PROCESS OVERVIEW ─── */}
      <section className="py-20 sm:py-28 bg-black text-[#FFFFE3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-sm tracking-[0.3em] text-[#FF6B2B] uppercase mb-3 font-medium">
                Our Process
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                How We Work
              </h2>
              <p className="mt-4 text-[#FFFFE3]/40 max-w-xl mx-auto leading-relaxed">
                A streamlined four-step process that transforms your vision into reality with precision and care.
              </p>
            </div>
          </FadeUp>

          {/* Process steps grid */}
          <div>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
              staggerDelay={0.15}
            >
              {processSteps.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    variants={staggerChildVariants}
                    className="relative"
                  >
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-8 left-[60%] right-0 h-[1px] bg-[#FFFFE3]/10" />
                    )}
                    {/* Orange dot on connector */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-[7px] right-0 translate-x-1/2 w-[3px] h-[3px] rounded-full bg-[#FF6B2B]" />
                    )}

                    <div className="pr-8">
                      {/* Number */}
                      <span className="text-5xl font-black text-[#FF6B2B]/20 leading-none">
                        {step.number}
                      </span>
                      {/* Icon */}
                      <div className="mt-4 w-16 h-16 flex items-center justify-center border border-[#FFFFE3]/10 mb-5">
                        <StepIcon className="w-7 h-7 text-[#FF6B2B]" />
                      </div>
                      {/* Title */}
                      <h3 className="text-xl font-bold tracking-tight mb-2">
                        {step.title}
                      </h3>
                      {/* Description */}
                      <p className="text-sm text-[#FFFFE3]/40 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </StaggerContainer>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="lg:hidden">
            <StaggerContainer
              className="space-y-0"
              staggerDelay={0.1}
            >
              {processSteps.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    variants={staggerChildVariants}
                    className="relative flex gap-6"
                  >
                    {/* Timeline line + dot */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center border border-[#FF6B2B]/40 bg-[#FF6B2B]/10 z-10">
                        <StepIcon className="w-4 h-4 text-[#FF6B2B]" />
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-[1px] flex-1 bg-[#FFFFE3]/10 my-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-10">
                      <span className="text-xs font-mono text-[#FF6B2B]/50 tracking-wider">
                        STEP {step.number}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight mt-1 mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#FFFFE3]/40 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </StaggerContainer>
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
