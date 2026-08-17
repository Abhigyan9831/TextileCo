'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Home,
  Upload,
  Clock,
  Package,
  Users,
  ShieldCheck,
  FileText,
  CheckCircle2,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, StaggerContainer, staggerChildVariants } from '@/components/motion'

interface BookPageProps {
  onNavigate: (page: string) => void
  selectedProduct?: { title: string; image: string; sizes: string[]; sku: string }
}

const garmentTypes = ['T-Shirts', 'Polo Shirts', 'Hoodies', 'Joggers', 'Shorts', 'Other']

const fabricPreferences = [
  '100% Cotton',
  'Polyester Blend',
  'Organic Cotton',
  'Bamboo',
  'Custom',
]

const gsmRanges = ['120-150', '150-180', '180-220', '220+']

const printingTypes = [
  'Screen Printing',
  'DTG',
  'Sublimation',
  'Embroidery',
  'Heat Transfer',
]

const budgetRanges = [
  'Under ₹50K',
  '₹50K-2L',
  '₹2L-5L',
  '₹5L-10L',
  '₹10L+',
]

const urgencyLevels = ['Standard', 'Rush', 'Express']

const trustBadges = [
  { icon: Clock, label: '24hr Response', description: 'We reply within 24 hours' },
  { icon: Package, label: 'Free Samples', description: 'Quality samples at no cost' },
  { icon: Users, label: 'No MOQ', description: 'Flexible order quantities' },
  { icon: ShieldCheck, label: 'Dedicated Manager', description: 'Personal project manager' },
]

export default function BookPage({ onNavigate, selectedProduct }: BookPageProps) {
  const [formData, setFormData] = useState({
    // Section 1: Your Information
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    designation: '',
    address: '',
    // Section 2: Product Details
    garmentTypes: [] as string[],
    quantity: '',
    fabricPreference: '',
    gsmRange: '',
    selectedSize: selectedProduct?.sizes[0] ?? '',
    // Section 3: Customization
    printingRequired: '',
    printingType: '',
    embroideryRequired: false,
    privateLabeling: false,
    customPackaging: false,
    // Section 4: Timeline & Budget
    expectedDelivery: '',
    budgetRange: '',
    urgency: '',
    // Section 5: Additional Details
    additionalNotes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [productDismissed, setProductDismissed] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleGarmentTypeToggle = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      garmentTypes: prev.garmentTypes.includes(type)
        ? prev.garmentTypes.filter((t) => t !== type)
        : [...prev.garmentTypes, type],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          selectedProduct: selectedProduct && !productDismissed ? selectedProduct : undefined,
        }),
      })
      if (res.ok) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 6000)
      } else {
        alert('Failed to send inquiry. Please try again.')
      }
    } catch {
      alert('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
              <span className="text-black font-medium">Book a Contract</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-black leading-[0.95]">
              Book a Manufacturing
              <br />
              <span className="text-gradient-orange">Contract</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-black/50 max-w-xl leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== DETAILED INQUIRY FORM ===== */}
      <section className="py-12 lg:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <div className="bg-white border border-black/10 p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-2">
                Manufacturing Inquiry
              </h2>
              <p className="text-sm text-black/40 mb-10">
                Fill out the form below and our team will prepare a customized proposal for you.
              </p>

              {isSubmitted && (
                <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Inquiry Submitted Successfully!</p>
                    <p className="mt-1 text-emerald-700">
                      Our team will review your requirements and get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* ──── Section 1: Your Information ──── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-mk-orange text-black text-sm font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-black">Your Information</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-black/70 mb-2">
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
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
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
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black/70 mb-2">
                        Phone <span className="text-mk-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-black/70 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="designation" className="block text-sm font-medium text-black/70 mb-2">
                        Designation
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Procurement Manager"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-black/70 mb-2">
                        Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Full shipping / billing address"
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 resize-vertical"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/8" />

                {/* ──── Section 2: Product Details ──── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-mk-orange text-black text-sm font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-black">Product Details</h3>
                  </div>

                  {/* Product Preview Card */}
                  {selectedProduct && !productDismissed && (
                    <div className="mb-6 p-4 border border-[#FF6B2B]/30 bg-[#FF6B2B]/5 flex gap-4 items-start relative">
                      <button
                        type="button"
                        onClick={() => setProductDismissed(true)}
                        className="absolute top-2 right-2 text-black/40 hover:text-black transition-colors cursor-pointer"
                        title="Remove product"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className="w-24 h-24 object-contain bg-white/60 border border-black/10 p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#FF6B2B] font-semibold uppercase tracking-wider mb-0.5">Selected Product</p>
                        <p className="text-base font-black text-black leading-tight">{selectedProduct.title}</p>
                        <p className="text-xs text-black/50 mt-0.5 mb-3">SKU: {selectedProduct.sku}</p>
                        <div>
                          <label className="block text-xs font-medium text-black/70 mb-1">Select Size</label>
                          <select
                            value={formData.selectedSize}
                            onChange={(e) => setFormData(prev => ({ ...prev, selectedSize: e.target.value }))}
                            className="px-3 py-1.5 bg-white border border-black/10 text-black text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors duration-300 appearance-none cursor-pointer"
                          >
                            {selectedProduct.sizes.map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Garment Type Checkboxes */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-black/70 mb-3">
                      Garment Type <span className="text-mk-orange">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {garmentTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleGarmentTypeToggle(type)}
                          className={cn(
                            'px-4 py-2 text-sm font-medium border transition-all duration-300 cursor-pointer',
                            formData.garmentTypes.includes(type)
                              ? 'bg-mk-orange text-black border-mk-orange'
                              : 'bg-transparent text-black/60 border-black/10 hover:border-black/30'
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Quantity */}
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-black/70 mb-2">
                        Quantity <span className="text-mk-orange">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          required
                          min="1"
                          placeholder="1000"
                          className="w-full px-4 py-3 pr-16 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-black/30">
                          pieces
                        </span>
                      </div>
                    </div>

                    {/* Fabric Preference */}
                    <div>
                      <label htmlFor="fabricPreference" className="block text-sm font-medium text-black/70 mb-2">
                        Fabric Preference
                      </label>
                      <select
                        id="fabricPreference"
                        name="fabricPreference"
                        value={formData.fabricPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select fabric
                        </option>
                        {fabricPreferences.map((fabric) => (
                          <option key={fabric} value={fabric}>
                            {fabric}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* GSM Range */}
                    <div>
                      <label htmlFor="gsmRange" className="block text-sm font-medium text-black/70 mb-2">
                        GSM Range
                      </label>
                      <select
                        id="gsmRange"
                        name="gsmRange"
                        value={formData.gsmRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select GSM range
                        </option>
                        {gsmRanges.map((gsm) => (
                          <option key={gsm} value={gsm}>
                            {gsm} GSM
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/8" />

                {/* ──── Section 3: Customization ──── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-mk-orange text-black text-sm font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-black">Customization</h3>
                  </div>

                  {/* Printing Required */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-black/70 mb-3">
                      Printing Required <span className="text-mk-orange">*</span>
                    </label>
                    <div className="flex gap-3">
                      {['Yes', 'No'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              printingRequired: option,
                              printingType: option === 'No' ? '' : prev.printingType,
                            }))
                          }
                          className={cn(
                            'px-6 py-2.5 text-sm font-medium border transition-all duration-300 cursor-pointer',
                            formData.printingRequired === option
                              ? 'bg-mk-orange text-black border-mk-orange'
                              : 'bg-transparent text-black/60 border-black/10 hover:border-black/30'
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Printing Type (conditional) */}
                  {formData.printingRequired === 'Yes' && (
                    <div className="mb-5 animate-fade-in">
                      <label htmlFor="printingType" className="block text-sm font-medium text-black/70 mb-2">
                        Printing Type
                      </label>
                      <select
                        id="printingType"
                        name="printingType"
                        value={formData.printingType}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 px-4 py-3 bg-transparent border border-black/10 text-black text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select printing type
                        </option>
                        {printingTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Checkbox Options */}
                  <div className="space-y-4 mt-6">
                    {[
                      { name: 'embroideryRequired', label: 'Embroidery Required' },
                      { name: 'privateLabeling', label: 'Private Labeling' },
                      { name: 'customPackaging', label: 'Custom Packaging' },
                    ].map((item) => (
                      <label
                        key={item.name}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={cn(
                            'w-5 h-5 border flex items-center justify-center transition-all duration-300',
                            formData[item.name as keyof typeof formData]
                              ? 'bg-mk-orange border-mk-orange'
                              : 'border-black/20 group-hover:border-black/40'
                          )}
                        >
                          {formData[item.name as keyof typeof formData] && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                          )}
                        </div>
                        <input
                          type="checkbox"
                          name={item.name}
                          checked={formData[item.name as keyof typeof formData] as boolean}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <span className="text-sm text-black/70 group-hover:text-black transition-colors duration-300">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/8" />

                {/* ──── Section 4: Timeline & Budget ──── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-mk-orange text-black text-sm font-bold">
                      4
                    </div>
                    <h3 className="text-lg font-bold text-black">Timeline & Budget</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Expected Delivery Date */}
                    <div>
                      <label htmlFor="expectedDelivery" className="block text-sm font-medium text-black/70 mb-2">
                        Expected Delivery Date
                      </label>
                      <input
                        type="date"
                        id="expectedDelivery"
                        name="expectedDelivery"
                        value={formData.expectedDelivery}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300"
                      />
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="budgetRange" className="block text-sm font-medium text-black/70 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-black/10 text-black text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Urgency */}
                    <div className="sm:col-span-2">
                      <label htmlFor="urgency" className="block text-sm font-medium text-black/70 mb-2">
                        Urgency
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {urgencyLevels.map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, urgency: level }))
                            }
                            className={cn(
                              'px-5 py-2.5 text-sm font-medium border transition-all duration-300 cursor-pointer',
                              formData.urgency === level
                                ? 'bg-mk-orange text-black border-mk-orange'
                                : 'bg-transparent text-black/60 border-black/10 hover:border-black/30'
                            )}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/8" />

                {/* ──── Section 5: Additional Details ──── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-mk-orange text-black text-sm font-bold">
                      5
                    </div>
                    <h3 className="text-lg font-bold text-black">Additional Details</h3>
                  </div>

                  {/* Design Upload (visual only) */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-black/70 mb-2">
                      Design Upload
                    </label>
                    <div className="border-2 border-dashed border-black/10 p-8 text-center hover:border-mk-orange/40 transition-colors duration-300 cursor-pointer">
                      <Upload className="w-8 h-8 text-black/20 mx-auto mb-3" />
                      <p className="text-sm text-black/40 font-medium">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-xs text-black/25 mt-1">
                        AI, EPS, PDF, PNG, JPG (Max 10MB)
                      </p>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-black/70 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any special requirements, color preferences, or other details..."
                      className="w-full px-4 py-3 bg-transparent border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-mk-orange transition-colors duration-300 resize-vertical"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full py-4 bg-mk-orange text-black font-semibold text-base tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-center gap-2',
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-mk-orange/90'
                    )}
                  >
                    {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                    <FileText className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="py-20 lg:py-28 px-4">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                variants={staggerChildVariants}
                className="bg-mk-cream-dark/60 border border-black/8 p-6 text-center group hover:border-mk-orange/20 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-mk-orange/10 text-mk-orange mx-auto mb-4 group-hover:bg-mk-orange group-hover:text-black transition-all duration-300">
                  <badge.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-black mb-1">{badge.label}</h3>
                <p className="text-xs text-black/40">{badge.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
