'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Send,
  ArrowUpRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterProps {
  onNavigate: (page: string) => void
}

const quickLinks = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Services', route: 'services' },
  { label: 'Our Products', route: 'products' },
  { label: 'Portfolio', route: 'portfolio' },
  { label: 'Contact', route: 'contact' },
]

const services = [
  'Fabric Manufacturing',
  'Textile Dyeing',
  'Yarn Processing',
  'Custom Weaving',
  'Quality Testing',
  'Bulk Production',
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
]

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-black text-[#FFFFE3]">
      {/* Newsletter Section */}
      <div className="border-b border-[#FFFFE3]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-wide">
                Stay in the Loop
              </h3>
              <p className="text-[#FFFFE3]/50 text-sm mt-1.5 max-w-md">
                Subscribe for industry insights, new collections, and exclusive manufacturing updates.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full lg:w-auto gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 lg:w-72 px-4 py-3 bg-[#FFFFE3]/5 border border-[#FFFFE3]/15 text-[#FFFFE3] placeholder:text-[#FFFFE3]/30 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors duration-300"
              />
              <motion.button
                type="submit"
                className="px-5 py-3 bg-[#FF6B2B] text-black font-semibold text-sm flex items-center gap-2 hover:bg-[#FF6B2B]/90 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <span className="text-xl font-black tracking-[0.15em] leading-none">
                MARUTI KRIT
              </span>
              <br />
              <span className="text-xs font-light tracking-[0.35em] text-[#FFFFE3]/50 leading-none">
                TEXTILES
              </span>
            </div>
            <p className="text-[#FFFFE3]/50 text-sm leading-relaxed max-w-xs">
              Crafting premium textiles with decades of expertise. From raw fiber to finished
              fabric, we deliver excellence in every thread.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center border border-[#FFFFE3]/15 text-[#FFFFE3]/50 hover:text-[#FF6B2B] hover:border-[#FF6B2B]/40 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase mb-5 text-[#FFFFE3]/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => onNavigate(link.route)}
                    className="group flex items-center gap-1.5 text-sm text-[#FFFFE3]/50 hover:text-[#FF6B2B] transition-colors duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase mb-5 text-[#FFFFE3]/80">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-[#FFFFE3]/50 hover:text-[#FFFFE3]/70 transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase mb-5 text-[#FFFFE3]/80">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#FF6B2B] shrink-0" />
                <div>
                  <p className="text-sm text-[#FFFFE3]/70">+91 80132 44984</p>
                  <p className="text-xs text-[#FFFFE3]/30 mt-0.5">Mon–Sat, 9AM–6PM IST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#FF6B2B] shrink-0" />
                <div>
                  <p className="text-sm text-[#FFFFE3]/70">marutikrittextiles@gmail.com</p>
                  <p className="text-xs text-[#FFFFE3]/30 mt-0.5">We respond within 24hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#FF6B2B] shrink-0" />
                <p className="text-sm text-[#FFFFE3]/70 leading-relaxed">
                  Industrial Area, Phase II,<br />
                  Kolkata, West Bengal 700001
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FFFFE3]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FFFFE3]/35">
            <p>
              &copy; {new Date().getFullYear()} Maruti Krit Textiles. All rights reserved.
            </p>
            <p className="italic tracking-wide">
              Designed by{" "}
              <a
                href="https://xtraclicks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B2B] hover:underline underline-offset-4"
              >
                Xtraclicks Marketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
