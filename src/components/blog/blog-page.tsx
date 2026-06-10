'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  Mail,
  Home,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, StaggerContainer, staggerChildVariants } from '@/components/motion'
import { BLOG_POSTS, BLOG_CATEGORIES, BRAND_COLORS } from '@/lib/constants'

interface BlogPageProps {
  onNavigate: (page: string) => void
}

const categoryGradients: Record<string, string> = {
  Sustainability: 'from-emerald-500 to-teal-600',
  Technology: 'from-violet-500 to-purple-600',
  Trends: 'from-rose-500 to-pink-600',
  'Supply Chain': 'from-amber-500 to-orange-600',
  Business: 'from-cyan-500 to-blue-600',
  Manufacturing: 'from-slate-500 to-gray-700',
}

const categoryBadgeColors: Record<string, string> = {
  Sustainability: 'bg-emerald-100 text-emerald-800',
  Technology: 'bg-violet-100 text-violet-800',
  Trends: 'bg-rose-100 text-rose-800',
  'Supply Chain': 'bg-amber-100 text-amber-800',
  Business: 'bg-cyan-100 text-cyan-800',
  Manufacturing: 'bg-slate-100 text-slate-800',
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const featuredPost = BLOG_POSTS[0]
  const remainingPosts = BLOG_POSTS.slice(1)

  const filteredPosts =
    activeCategory === 'All'
      ? remainingPosts
      : remainingPosts.filter((post) => post.category === activeCategory)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 4000)
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="min-h-screen">
      {/* ===== HERO BANNER ===== */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-4">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-black/40 mb-8">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-mk-orange transition-colors duration-300 cursor-pointer flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-black font-medium">Blog</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-black leading-[0.95]">
              Insights &
              <br />
              <span className="text-gradient-orange">Updates</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-black/50 max-w-xl leading-relaxed">
              Industry knowledge, manufacturing expertise, and textile innovation
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== FEATURED BLOG POST ===== */}
      <section className="py-12 lg:py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black/10 overflow-hidden">
              {/* Left: Gradient Placeholder */}
              <div
                className={cn(
                  'aspect-[4/3] lg:aspect-auto bg-gradient-to-br',
                  categoryGradients[featuredPost.category] || 'from-mk-orange to-mk-yellow'
                )}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-white/20 text-8xl font-black">01</div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white">
                <span
                  className={cn(
                    'inline-flex self-start px-3 py-1 text-xs font-semibold tracking-wide rounded-full mb-4',
                    categoryBadgeColors[featuredPost.category] || 'bg-mk-orange/10 text-mk-orange'
                  )}
                >
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-black/50 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-black/40">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <button className="mt-8 inline-flex items-center gap-2 text-mk-orange font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-300 cursor-pointer self-start">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== CATEGORY FILTERS ===== */}
      <section className="py-8 px-4">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer border',
                    activeCategory === category
                      ? 'bg-mk-orange text-black border-mk-orange'
                      : 'bg-transparent text-black/60 border-black/10 hover:border-black/30 hover:text-black'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section className="py-12 lg:py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={staggerChildVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group border border-black/10 bg-white overflow-hidden hover:border-black/20 transition-all duration-500"
                >
                  {/* Gradient Placeholder */}
                  <div
                    className={cn(
                      'aspect-[16/9] bg-gradient-to-br relative overflow-hidden',
                      categoryGradients[post.category] || 'from-mk-orange to-mk-yellow'
                    )}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white/15 text-6xl font-black">
                        {String(post.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <span
                      className={cn(
                        'inline-flex px-2.5 py-0.5 text-[11px] font-semibold tracking-wide rounded-full mb-3',
                        categoryBadgeColors[post.category] || 'bg-mk-orange/10 text-mk-orange'
                      )}
                    >
                      {post.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-black leading-snug group-hover:text-mk-orange transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-black/40 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-black/35">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </StaggerContainer>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <FadeUp>
              <div className="text-center py-20">
                <p className="text-black/30 text-lg">No posts found in this category.</p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="mt-4 text-mk-orange font-medium text-sm hover:underline cursor-pointer"
                >
                  View all posts
                </button>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="py-20 lg:py-28 px-4">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="bg-mk-cream-dark/60 border border-black/8 p-8 sm:p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Stay Updated
              </h2>
              <p className="mt-3 text-black/50 max-w-md mx-auto leading-relaxed">
                Get the latest insights on textile manufacturing delivered straight to your inbox.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
              >
                <div className="relative w-full sm:flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-black/10 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-mk-orange text-black font-semibold text-sm tracking-wide hover:bg-mk-orange/90 transition-colors duration-300 cursor-pointer"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
              <p className="mt-4 text-xs text-black/30">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
