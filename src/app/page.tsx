'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HomePage from '@/components/home/home-page'
import AboutPage from '@/components/about/about-page'
import ServicesPage from '@/components/services/services-page'
import PortfolioPage from '@/components/portfolio/portfolio-page'
import BlogPage from '@/components/blog/blog-page'
import ContactPage from '@/components/contact/contact-page'
import BookPage from '@/components/book/book-page'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' as const } },
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }

  const handleBookContract = () => {
    setCurrentPage('book')
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onBookContract={handleBookContract} />
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} onBookContract={handleBookContract} />
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />
      case 'book':
        return <BookPage onNavigate={handleNavigate} />
      default:
        return <HomePage onNavigate={handleNavigate} onBookContract={handleBookContract} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFE3' }}>
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookContract={handleBookContract}
      />

      <main className="flex-1 pt-16 lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
