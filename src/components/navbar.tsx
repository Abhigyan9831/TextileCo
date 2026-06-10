'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
  onBookContract: () => void
}

const navLinks = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Services', route: 'services' },
  { label: 'Portfolio', route: 'portfolio' },
  { label: 'Blog', route: 'blog' },
  { label: 'Contact', route: 'contact' },
]

export default function Navbar({ currentPage, onNavigate, onBookContract }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Determine scroll direction for smart hide
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    // Determine if scrolled enough for background change
    setIsScrolled(currentScrollY > 20)
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (route: string) => {
    onNavigate(route)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled
            ? 'bg-[#FFFFE3]/95 backdrop-blur-md border-b border-black/5 shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-start group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-[0.15em] text-black leading-none">
                MARUTI KRIT
              </span>
              <span className="text-[10px] sm:text-xs lg:text-sm font-light tracking-[0.35em] text-black/60 leading-none mt-0.5">
                TEXTILES
              </span>
            </motion.button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.route}
                  label={link.label}
                  route={link.route}
                  isActive={currentPage === link.route}
                  onClick={handleNavClick}
                />
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.button
              onClick={onBookContract}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[#FF6B2B] text-black font-semibold text-sm tracking-wide rounded-none hover:bg-[#FF6B2B]/90 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Contract
            </motion.button>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-[60] w-11 h-11 flex items-center justify-center cursor-pointer"
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-6 h-5">
                <motion.span
                  className="absolute left-0 w-6 h-[2px] bg-black origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { top: '50%', rotate: 45, y: '-50%' }
                      : { top: 0, rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-black"
                  animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 w-6 h-[2px] bg-black origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { bottom: '50%', rotate: -45, y: '50%' }
                      : { bottom: 0, rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[55] bg-[#FFFFE3] lg:hidden"
          >
            <div className="flex flex-col h-full pt-20">
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.route}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.08 * index,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      onClick={() => handleNavClick(link.route)}
                      className={cn(
                        'block w-full text-left text-3xl sm:text-4xl font-light tracking-wide py-3 transition-colors duration-300 cursor-pointer border-b border-black/5',
                        currentPage === link.route
                          ? 'text-[#FF6B2B] font-medium'
                          : 'text-black hover:text-[#FF6B2B]'
                      )}
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-sm font-mono text-black/30">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {link.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* CTA Button at Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="px-8 pb-12"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onBookContract()
                  }}
                  className="w-full py-4 bg-[#FF6B2B] text-black font-semibold text-lg tracking-wide hover:bg-[#FF6B2B]/90 transition-colors duration-300 cursor-pointer"
                >
                  Book a Contract
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ─── Desktop Nav Link with underline animation ─── */

function NavLink({
  label,
  route,
  isActive,
  onClick,
}: {
  label: string
  route: string
  isActive: boolean
  onClick: (route: string) => void
}) {
  return (
    <button
      onClick={() => onClick(route)}
      className={cn(
        'relative px-3 xl:px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer group',
        isActive ? 'text-black' : 'text-black/60 hover:text-black'
      )}
    >
      {label}
      {/* Underline animation from center */}
      <span
        className={cn(
          'absolute bottom-0 left-1/2 h-[2px] bg-[#FF6B2B] transition-all duration-300 ease-out -translate-x-1/2',
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        )}
      />
    </button>
  )
}
