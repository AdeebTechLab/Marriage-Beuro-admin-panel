import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaHeart, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaShieldAlt, FaUserPlus, FaSignInAlt } from 'react-icons/fa'

export default function Footer({ onCreateProfile, onSignIn, onBrowseProfiles }) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setNewsletterEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-[#3E040B] via-[#5C0612] to-[#2B0307] text-white pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] text-[#5C0612] shadow-md">
                <FaHeart className="text-xl" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F3E0A2] block">
                  Trusted Marriage Bureau
                </span>
                <h2 className="text-2xl font-bold font-serif text-white">
                  Marriage Bureau
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed max-w-sm">
              Marriage Bureau is India's premier trusted matrimonial service agency. Dedicated to verified profile matchmaking, confidential family screening, and sacred beginnings.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={onCreateProfile}
                className="rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] px-4 py-2 text-xs font-extrabold text-[#3E040B] shadow flex items-center gap-1.5"
              >
                <FaUserPlus /> Create Profile
              </button>

              <button
                type="button"
                onClick={onSignIn}
                className="rounded-full border border-[#D4AF37] px-4 py-2 text-xs font-bold text-[#F3E0A2] hover:bg-[#D4AF37]/15 flex items-center gap-1.5"
              >
                <FaSignInAlt /> Sign In
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F3E0A2] font-serif border-b border-[#D4AF37]/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-amber-100/80">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#browse-profiles" onClick={onBrowseProfiles} className="hover:text-white transition">Browse Profiles</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#membership" className="hover:text-white transition">Membership Plans</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F3E0A2] font-serif border-b border-[#D4AF37]/20 pb-2">
              Bureau Office
            </h3>
            <ul className="space-y-2.5 text-xs text-amber-100/80">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#D4AF37] text-sm mt-0.5 flex-shrink-0" />
                <span>Suite 502, Royal Heritage Tower, MG Road, Mumbai 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#D4AF37] text-xs flex-shrink-0" />
                <span>+92 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#D4AF37] text-xs flex-shrink-0" />
                <span>contact@shubhbandhan-matrimony.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-emerald-400 text-sm flex-shrink-0" />
                <a href="https://wa.me/929876543210" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-300">
                  WhatsApp Hotline 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F3E0A2] font-serif border-b border-[#D4AF37]/20 pb-2">
              Match Digest Newsletter
            </h3>
            <p className="text-xs text-amber-100/70">
              Subscribe to receive weekly curated profile recommendations and matchmaking advice.
            </p>

            {subscribed ? (
              <p className="text-xs font-bold text-emerald-400 bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-500/30">
                ✓ Subscribed successfully!
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#2B0307] border border-[#D4AF37]/40 text-xs text-white placeholder:text-amber-200/40 outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-2 text-xs font-bold text-[#3E040B] hover:brightness-110"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Accessibility Bar */}
        <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60">
          <p>© 2026 Marriage Bureau. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#F3E0A2]">
              <FaShieldAlt className="text-xs text-[#D4AF37]" /> 100% Privacy & Security Assured
            </span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
