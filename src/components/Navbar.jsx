import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhoneAlt, FaUserPlus, FaSignInAlt, FaBars, FaTimes, FaHeart, FaSearch, FaRing } from 'react-icons/fa'

export default function Navbar({ onCreateProfile, onSignIn, onBrowseProfiles }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#why-choose-us' },
    { name: 'Services', href: '#services' },
    { name: 'Profiles', href: '#browse-profiles' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-[#D4AF37]/40 bg-[#3E040B]/95 text-white backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo with Ring Graphic Accent */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-5 group focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl p-1"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] text-[#5C0612] shadow-md shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
            <FaRing className="text-xl text-[#5C0612]" />
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#780B1A] text-[9px] font-bold text-[#F3E0A2] border border-[#D4AF37]">
              ✨
            </div>
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F3E0A2] block">
              Premier Marriage Bureau
            </span>
            <h1 className="text-xl font-bold font-serif text-white tracking-wide group-hover:text-[#F3E0A2] transition-colors">
              Marriage Bureau
            </h1>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold uppercase tracking-wider text-amber-100/90 hover:text-[#F3E0A2] hover:underline underline-offset-4 transition duration-200 focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sign In Button */}
          <button
            type="button"
            onClick={onSignIn}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-transparent px-4 py-2 text-xs font-bold text-[#F3E0A2] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <FaSignInAlt className="text-xs text-[#D4AF37]" />
            Sign In
          </button>

          {/* Create Profile Button (Main CTA) */}
          <button
            type="button"
            onClick={onCreateProfile}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] px-5 py-2.5 text-xs font-extrabold text-[#3E040B] shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 hover:-translate-y-0.5 transition duration-200 focus-visible:ring-2 focus-visible:ring-white"
          >
            <FaUserPlus className="text-xs text-[#3E040B]" />
            Create Profile
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-xl border border-[#D4AF37]/40 bg-[#5C0612] p-2 text-[#F3E0A2] md:hidden hover:bg-[#780B1A] focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-[#D4AF37]/30 bg-[#3E040B] px-4 py-6 md:hidden space-y-4 shadow-2xl"
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-amber-100 hover:bg-[#5C0612] hover:text-[#F3E0A2] transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onCreateProfile()
              }}
              className="w-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] py-3 text-sm font-bold text-[#3E040B] flex items-center justify-center gap-2"
            >
              <FaUserPlus /> Create Free Profile
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onSignIn()
              }}
              className="w-full rounded-full border border-[#D4AF37] bg-transparent py-3 text-sm font-bold text-[#F3E0A2] flex items-center justify-center gap-2"
            >
              <FaSignInAlt /> Sign In to Account
            </button>

            <a
              href="#browse-profiles"
              onClick={(e) => handleNavClick(e, '#browse-profiles')}
              className="w-full text-center py-2 text-xs font-semibold text-amber-200/80 underline"
            >
              Browse Profiles Now →
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
