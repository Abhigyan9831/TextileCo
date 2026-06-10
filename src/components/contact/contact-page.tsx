'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Home,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Send,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, StaggerContainer, staggerChildVariants } from '@/components/motion'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'

interface ContactPageProps {
  onNavigate: (page: string) => void
}

const subjectOptions = [
  'General Inquiry',
  'Manufacturing Quote',
  'Partnership',
  'Sample Request',
  'Other',
]

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
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
              <span className="text-black font-medium">Contact</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-black leading-[0.95]">
              Get in
              <br />
              <span className="text-gradient-orange">Touch</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-black/50 max-w-xl leading-relaxed">
              Let&apos;s discuss your manufacturing needs
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== CONTACT FORM + INFO ===== */}
      <section className="py-12 lg:py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left: Contact Form */}
            <FadeUp className="lg:col-span-3">
              <div className="bg-white border border-black/10 p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
                  Send Us a Message
                </h2>

                {isSubmitted && (
                  <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-black/70 mb-2"
                      >
                        Full Name <span className="text-mk-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black/70 mb-2"
                      >
                        Email <span className="text-mk-orange">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-black/70 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-black/70 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-black/70 mb-2"
                    >
                      Subject <span className="text-mk-orange">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-black/10 text-black text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-black/70 mb-2"
                    >
                      Message <span className="text-mk-orange">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 resize-vertical"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full sm:w-auto px-10 py-3.5 bg-mk-orange text-black font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-center gap-2',
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-mk-orange/90'
                    )}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </FadeUp>

            {/* Right: Contact Info */}
            <FadeUp delay={0.15} className="lg:col-span-2">
              <div className="space-y-8">
                {/* Contact Cards */}
                <StaggerContainer className="space-y-5">
                  {/* Phone */}
                  <motion.div
                    variants={staggerChildVariants}
                    className="bg-white border border-black/10 p-6 group hover:border-mk-orange/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-mk-orange/10 text-mk-orange shrink-0 group-hover:bg-mk-orange group-hover:text-black transition-all duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-black mb-1">Phone</h3>
                        <p className="text-sm text-black/60">{COMPANY.phone}</p>
                        <p className="text-xs text-black/30 mt-1">Mon–Sat, 9:00 AM – 6:00 PM IST</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    variants={staggerChildVariants}
                    className="bg-white border border-black/10 p-6 group hover:border-mk-orange/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-mk-orange/10 text-mk-orange shrink-0 group-hover:bg-mk-orange group-hover:text-black transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-black mb-1">Email</h3>
                        <p className="text-sm text-black/60">{COMPANY.email}</p>
                        <p className="text-xs text-black/30 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    variants={staggerChildVariants}
                    className="bg-white border border-black/10 p-6 group hover:border-mk-orange/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-mk-orange/10 text-mk-orange shrink-0 group-hover:bg-mk-orange group-hover:text-black transition-all duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-black mb-1">Address</h3>
                        <p className="text-sm text-black/60 leading-relaxed">
                          {COMPANY.address.full}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Business Hours */}
                  <motion.div
                    variants={staggerChildVariants}
                    className="bg-white border border-black/10 p-6 group hover:border-mk-orange/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-mk-orange/10 text-mk-orange shrink-0 group-hover:bg-mk-orange group-hover:text-black transition-all duration-300">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-black mb-1">Business Hours</h3>
                        <p className="text-sm text-black/60">Mon–Sat</p>
                        <p className="text-sm text-black/60">9:00 AM – 6:00 PM IST</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerContainer>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="py-12 lg:py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-black/5 border border-black/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-black/20 mx-auto mb-3" />
                <p className="text-black/30 text-sm font-medium">Map Coming Soon</p>
                <p className="text-black/20 text-xs mt-1">Interactive map will be available here</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== SOCIAL LINKS ===== */}
      <section className="py-20 lg:py-28 px-4">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Connect With Us
              </h2>
              <p className="mt-3 text-black/50 text-sm max-w-md mx-auto">
                Follow us on social media for the latest updates and behind-the-scenes content.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {SOCIAL_LINKS.map((social) => {
              const IconComponent = socialIcons[social.icon] || Linkedin
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerChildVariants}
                  className="group flex items-center gap-3 px-5 py-3 bg-white border border-black/10 hover:border-mk-orange/30 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5 text-black/50 group-hover:text-mk-orange transition-colors duration-300" />
                  <span className="text-sm font-medium text-black/60 group-hover:text-black transition-colors duration-300">
                    {social.platform}
                  </span>
                </motion.a>
              )
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
