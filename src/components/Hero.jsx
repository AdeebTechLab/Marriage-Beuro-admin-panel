import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaUserPlus, FaSearch, FaShieldAlt, FaHeart, FaStar, FaUserCheck, FaAward, FaRing, FaSpa } from 'react-icons/fa'
import heroMarriageImg from '../assets/hero_marriage.jpg'

export default function Hero({ onCreateProfile, onBrowseProfiles, onSearchFilter }) {
  const [lookingFor, setLookingFor] = useState('Woman')
  const [ageRange, setAgeRange] = useState('26 - 30')
  const [city, setCity] = useState('All')
  const [religion, setReligion] = useState('All')

  const handleQuickSearch = (e) => {
    e.preventDefault()
    if (onSearchFilter) {
      onSearchFilter({ gender: lookingFor, ageRange, city, religion })
    }
    const element = document.querySelector('#browse-profiles')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-[#3E040B] text-white pt-10 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/40">
      {/* Professional matrimonial background image behind the hero text */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroMarriageImg}
          alt="Professional marriage bureau couple portrait"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-75 contrast-110 saturate-[0.9]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E040B] via-[#3E040B]/90 to-[#5C0612]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E040B] via-[#3E040B]/40 to-[#3E040B]/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(212,175,55,0.18),_transparent_55%)] pointer-events-none"></div>
      </div>

      {/* Hero Visual Accent Floating Ornaments */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#D4AF37]/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#780B1A]/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Warm Welcome & Hero Visual Banner Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Trust Badge Pill with Ring Graphic Accent */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-[#3E040B]/90 px-4 py-1.5 text-xs font-bold text-[#F3E0A2] backdrop-blur-md shadow-lg">
              <FaRing className="text-[#D4AF37] text-sm animate-pulse" />
              <span>India's #1 Trusted Matrimonial Service • 100% Verified Profiles</span>
            </div>

            {/* Warm Welcoming Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-[1.15] text-white">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#E6C687]">Marriage Bureau</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-amber-100 font-normal font-serif mt-2">
                Where Eternal Souls & Loving Families Find Their Sacred Union
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-amber-100/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Honoring rich cultural traditions with modern security. Enjoy 100% verified bride & groom profiles, confidential background screening, and personalized relationship managers.
            </p>

            {/* Required Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onCreateProfile}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] px-8 py-4 text-base font-extrabold text-[#3E040B] shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaUserPlus className="text-lg text-[#3E040B]" />
                <span>Create Free Profile</span>
              </button>

              <button
                type="button"
                onClick={onBrowseProfiles}
                className="w-full sm:w-auto rounded-full border-2 border-[#D4AF37] bg-[#5C0612]/80 px-8 py-4 text-base font-bold text-[#F3E0A2] hover:bg-[#D4AF37]/25 hover:text-white transition duration-300 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <FaSearch className="text-sm text-[#D4AF37]" />
                <span>Browse Verified Matches</span>
              </button>
            </div>

            {/* Featured Marriage Bureau Couple Picture Card Showcase */}
            <div className="mt-6 pt-4 border-t border-[#D4AF37]/30">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl bg-[#5C0612]/70 group hover:border-[#D4AF37] transition duration-500">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={heroMarriageImg}
                    alt="Marriage Bureau Happy Couple Portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E040B] via-transparent to-transparent"></div>
                  
                  {/* Floating Gold Overlay Badge */}
                  <div className="absolute top-3 left-3 bg-[#3E040B]/90 border border-[#D4AF37] text-[#F3E0A2] px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md">
                    <FaRing className="text-[#D4AF37] animate-pulse" />
                    <span>Official Marriage Bureau Success Story</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#3E040B] px-2.5 py-1 rounded-full text-[11px] font-extrabold shadow-md">
                    100% Verified Union
                  </div>
                </div>

                <div className="p-3.5 bg-gradient-to-r from-[#3E040B] to-[#5C0612] flex items-center justify-between gap-3 border-t border-[#D4AF37]/40">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                      <FaHeart className="text-sm" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#F3E0A2] font-serif">Bridging Hearts & Sacred Traditions</h4>
                      <p className="text-[11px] text-amber-100/75">Connecting families with trust, dignity & privacy</p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="text-xs font-bold text-[#D4AF37] block">25,000+</span>
                    <span className="text-[10px] text-amber-100/60 uppercase font-semibold">Happy Marriages</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <FaUserCheck className="text-2xl text-[#D4AF37]" />
                <div>
                  <p className="text-lg font-bold font-serif text-white">25,000+</p>
                  <p className="text-[11px] text-amber-200/70 uppercase tracking-wider font-semibold">Happy Couples</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-2xl text-[#D4AF37]" />
                <div>
                  <p className="text-lg font-bold font-serif text-white">100%</p>
                  <p className="text-[11px] text-amber-200/70 uppercase tracking-wider font-semibold">ID Verified</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-2xl text-[#D4AF37]" />
                <div>
                  <p className="text-lg font-bold font-serif text-white">4.9 / 5</p>
                  <p className="text-[11px] text-amber-200/70 uppercase tracking-wider font-semibold">Trust Rating</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Match Finder Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border-2 border-[#D4AF37]/50 bg-[#FFFDF9] p-6 sm:p-8 text-[#2C1A1D] shadow-2xl relative gold-shadow">
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-[#5C0612] to-[#780B1A] text-[#F3E0A2] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/50 shadow-md flex items-center gap-1.5">
                <FaHeart className="text-[#D4AF37] text-xs" />
                <span>Match Finder</span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C0612] text-[#F3E0A2]">
                  <FaRing className="text-lg" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#5C0612]">
                    Find Your Soulmate
                  </h2>
                  <p className="text-xs text-[#5C4A4D]">
                    Search thousands of verified brides & grooms
                  </p>
                </div>
              </div>

              <form onSubmit={handleQuickSearch} className="space-y-4 pt-2">
                {/* Looking For */}
                <div>
                  <label htmlFor="heroLookingFor" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                    I am looking for a
                  </label>
                  <select
                    id="heroLookingFor"
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm font-semibold text-[#2C1A1D] focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  >
                    <option value="Woman">Bride (Woman)</option>
                    <option value="Man">Groom (Man)</option>
                  </select>
                </div>

                {/* Age Range */}
                <div>
                  <label htmlFor="heroAgeRange" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                    Age Preference
                  </label>
                  <select
                    id="heroAgeRange"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm font-semibold text-[#2C1A1D] focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  >
                    <option value="All">Any Age</option>
                    <option value="21 - 25">21 - 25 Years</option>
                    <option value="26 - 30">26 - 30 Years</option>
                    <option value="31 - 35">31 - 35 Years</option>
                    <option value="36+">36+ Years</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label htmlFor="heroCity" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                    Preferred Location / City
                  </label>
                  <select
                    id="heroCity"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm font-semibold text-[#2C1A1D] focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  >
                    <option value="All">All Cities (India, Pakistan & NRI)</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Delhi">Delhi / NCR</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Karachi">Karachi, Pakistan</option>
                    <option value="Lahore">Lahore, Pakistan</option>
                    <option value="Islamabad">Islamabad, Pakistan</option>
                    <option value="Rawalpindi">Rawalpindi, Pakistan</option>
                  </select>
                </div>

                {/* Religion */}
                <div>
                  <label htmlFor="heroReligion" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                    Religion / Community
                  </label>
                  <select
                    id="heroReligion"
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm font-semibold text-[#2C1A1D] focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  >
                    <option value="All">All Religions & Communities</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain">Jain</option>
                    <option value="Christian">Christian</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#5C0612] via-[#780B1A] to-[#9B1B2D] py-4 text-base font-bold text-white shadow-xl hover:brightness-110 transition duration-300 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <FaSearch className="text-sm text-[#F3E0A2]" />
                  <span>Search Verified Matches</span>
                </button>
              </form>

              {/* Security Seal */}
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-center gap-2 text-[11px] font-semibold text-[#5C4A4D]">
                <FaShieldAlt className="text-emerald-700" />
                <span>100% Privacy Protected & Family Screened</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
