'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Crosshair,
  Leaf,
  Lightbulb,
  ChevronRight,
  Home,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  staggerChildVariants,
} from '@/components/motion';
import { COMPANY } from '@/lib/constants';

// ============================================
// Types
// ============================================

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

// ============================================
// Data
// ============================================

const TIMELINE_MILESTONES = [
  {
    year: '2009',
    title: 'The Beginning',
    description:
      'Founded in Surat with a vision for quality textile manufacturing',
  },
  {
    year: '2013',
    title: 'Expansion',
    description: 'Expanded to full garment production with 200+ machines',
  },
  {
    year: '2017',
    title: 'Global Recognition',
    description: 'Achieved GOTS certification and entered European markets',
  },
  {
    year: '2021',
    title: 'Production Milestone',
    description: 'Surpassed 5 million garments produced milestone',
  },
  {
    year: '2025',
    title: 'Global Reach',
    description: 'Serving 500+ clients across 25+ countries',
  },
] as const;

const PHILOSOPHY_PILLARS = [
  {
    icon: Crosshair,
    title: 'Precision',
    description:
      'Every stitch, every seam, every detail is measured against the highest standards. Our commitment to precision ensures that each garment we produce meets exacting specifications.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'From GOTS-certified production to zero-waste initiatives, sustainability is woven into every aspect of our operations — not as an afterthought, but as a founding principle.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously invest in cutting-edge technology and creative processes, pushing the boundaries of what textile manufacturing can achieve for our partners worldwide.',
  },
] as const;

const TEAM_MEMBERS = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    bio: '30+ years in textile industry, visionary leader',
    initials: 'RK',
  },
  {
    name: 'Anita Patel',
    role: 'Head of Operations',
    bio: 'Expert in supply chain and production management',
    initials: 'AP',
  },
  {
    name: 'Vikram Singh',
    role: 'Creative Director',
    bio: 'Award-winning textile designer and trend forecaster',
    initials: 'VS',
  },
  {
    name: 'Meera Joshi',
    role: 'Quality Director',
    bio: '15+ years ensuring world-class quality standards',
    initials: 'MJ',
  },
] as const;

const GALLERY_IMAGES = [
  { src: '/images/factory.png', alt: 'Manufacturing facility', span: 'col-span-2 row-span-2' },
  { src: '/images/printing.png', alt: 'Textile printing process', span: 'col-span-1 row-span-1' },
  { src: '/images/collection.png', alt: 'Finished textile collection', span: 'col-span-1 row-span-1' },
] as const;

// ============================================
// Component
// ============================================

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* ========== HERO BANNER ========== */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/factory.png"
          alt="Maruti Krit Textiles Factory"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <FadeUp>
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#FFB800] mb-4">
              {COMPANY.name}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              Our Story
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Building the future of textile manufacturing since 2009
            </p>
          </FadeUp>

          {/* Breadcrumb */}
          <FadeUp delay={0.3}>
            <nav
              aria-label="Breadcrumb"
              className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60"
            >
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-1 hover:text-[#FFB800] transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">About</span>
            </nav>
          </FadeUp>
        </div>
      </section>

      {/* ========== COMPANY HISTORY ========== */}
      <section className="py-20 lg:py-28 bg-[#FFFFE3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Timeline */}
            <SlideIn direction="left">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-[#FF6B2B] font-semibold mb-3">
                  Our Journey
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12">
                  A Legacy of Growth
                </h2>

                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-[18px] top-2 bottom-2 w-px bg-black/10" />

                  <StaggerContainer
                    staggerDelay={0.12}
                    className="space-y-10"
                  >
                    {TIMELINE_MILESTONES.map((milestone) => (
                      <motion.div
                        key={milestone.year}
                        variants={staggerChildVariants}
                        className="relative pl-14"
                      >
                        {/* Year dot */}
                        <div className="absolute left-0 top-1 w-[38px] h-[38px] rounded-full bg-[#FF6B2B] flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">
                            {milestone.year}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-black">
                            {milestone.title}
                          </h3>
                          <p className="text-black/60 mt-1 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </SlideIn>

            {/* Right: Image */}
            <SlideIn direction="right">
              <div className="relative">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/factory.png"
                    alt="Maruti Krit Textiles Manufacturing Facility"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF6B2B] rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#FFB800] rounded-2xl -z-10" />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#FF6B2B] font-semibold mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Mission & Vision
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission */}
            <SlideIn direction="left">
              <div className="bg-[#FFFFE3] rounded-2xl p-8 lg:p-10 h-full border border-black/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B2B]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-[#FF6B2B]" />
                  </div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#FF6B2B] font-semibold mb-2">
                    Our Mission
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                    Delivering Excellence
                  </h3>
                  <p className="text-black/70 leading-relaxed text-lg">
                    To deliver premium textile solutions that combine traditional
                    craftsmanship with modern innovation, empowering brands
                    worldwide with quality manufacturing.
                  </p>
                </div>
              </div>
            </SlideIn>

            {/* Vision */}
            <SlideIn direction="right">
              <div className="bg-black rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFB800]/10 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-[#FFB800]" />
                  </div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#FFB800] font-semibold mb-2">
                    Our Vision
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Setting New Standards
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    To be the most trusted and sustainable textile manufacturing
                    partner for global fashion brands, setting new standards in
                    quality and ethical production.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ========== MANUFACTURING PHILOSOPHY ========== */}
      <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#FFB800] font-semibold mb-6">
              Our Philosophy
            </p>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
              &ldquo;Quality is not an act,{' '}
              <span className="text-[#FF6B2B]">it is a habit.</span>&rdquo;
            </blockquote>
            <p className="mt-4 text-white/40 text-sm">— Aristotle</p>
          </FadeUp>

          <StaggerContainer
            staggerDelay={0.15}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {PHILOSOPHY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={staggerChildVariants}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FF6B2B]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6B2B]/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#FF6B2B]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="py-20 lg:py-28 bg-[#FFFFE3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#FF6B2B] font-semibold mb-3">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              The People Behind the Craft
            </h2>
          </FadeUp>

          <StaggerContainer
            staggerDelay={0.12}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerChildVariants}
                className="bg-white rounded-2xl p-6 text-center border border-black/5 hover:border-[#FF6B2B]/20 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Avatar with initials */}
                <div className="w-20 h-20 rounded-full bg-black mx-auto mb-5 flex items-center justify-center group-hover:bg-[#FF6B2B] transition-colors duration-300">
                  <span className="text-white text-xl font-bold">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black">{member.name}</h3>
                <p className="text-[#FF6B2B] text-sm font-semibold mt-1">
                  {member.role}
                </p>
                <p className="text-black/60 text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== FACTORY / WORKSPACE GALLERY ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#FF6B2B] font-semibold mb-3">
              Our Workspace
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Where Craft Meets Scale
            </h2>
          </FadeUp>

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6 h-auto lg:h-[520px]"
          >
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.src}
                variants={staggerChildVariants}
                className={`${image.span} relative rounded-2xl overflow-hidden group cursor-pointer ${
                  index === 0
                    ? 'aspect-square lg:aspect-auto'
                    : 'aspect-square'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end justify-start p-6">
                  <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 lg:py-28 bg-[#FFFFE3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-black/60 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s discuss how {COMPANY.name} can bring your textile vision
              to life with precision, quality, and sustainable practices.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Contact Our Team
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
