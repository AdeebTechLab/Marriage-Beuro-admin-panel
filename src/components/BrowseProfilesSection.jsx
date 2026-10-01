import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { FaSearch, FaFilter, FaRedo, FaUserPlus } from 'react-icons/fa'
import ProfileCard from './ProfileCard'
import { sampleProfiles, filterOptions } from '../data/profiles'

export default function BrowseProfilesSection({
  onViewProfile,
  onSignIn,
  onCreateProfile,
  onSendInterest,
  onShortlist,
  shortlistedIds = [],
  expressedInterestIds = [],
  externalFilters = null
}) {
  const [filters, setFilters] = useState({
    gender: 'All',
    ageRange: 'All',
    city: 'All',
    profession: 'All',
    religion: 'All',
    searchQuery: ''
  })

  // Sync external quick search from Hero if updated
  useMemo(() => {
    if (externalFilters) {
      setFilters((prev) => ({
        ...prev,
        gender: externalFilters.gender || 'All',
        ageRange: externalFilters.ageRange || 'All',
        city: externalFilters.city || 'All',
        religion: externalFilters.religion || 'All'
      }))
    }
  }, [externalFilters])

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const resetFilters = () => {
    setFilters({
      gender: 'All',
      ageRange: 'All',
      city: 'All',
      profession: 'All',
      religion: 'All',
      searchQuery: ''
    })
  }

  const filteredProfiles = useMemo(() => {
    return sampleProfiles.filter((p) => {
      // Gender filter
      if (filters.gender !== 'All') {
        if (filters.gender === 'Woman' && p.gender !== 'Woman') return false
        if (filters.gender === 'Man' && p.gender !== 'Man') return false
      }

      // Age Range filter
      if (filters.ageRange !== 'All') {
        if (filters.ageRange === '21 - 25' && (p.age < 21 || p.age > 25)) return false
        if (filters.ageRange === '26 - 30' && (p.age < 26 || p.age > 30)) return false
        if (filters.ageRange === '31 - 35' && (p.age < 31 || p.age > 35)) return false
        if (filters.ageRange === '36+' && p.age < 36) return false
      }

      // City filter
      if (filters.city !== 'All' && !p.city.toLowerCase().includes(filters.city.toLowerCase())) {
        return false
      }

      // Profession filter
      if (filters.profession !== 'All' && !p.profession.toLowerCase().includes(filters.profession.toLowerCase())) {
        return false
      }

      // Religion filter
      if (filters.religion !== 'All' && p.religion.toLowerCase() !== filters.religion.toLowerCase()) {
        return false
      }

      // Search Query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase()
        const matchName = p.name.toLowerCase().includes(q)
        const matchProf = p.profession.toLowerCase().includes(q)
        const matchCity = p.city.toLowerCase().includes(q)
        const matchEdu = p.education.toLowerCase().includes(q)
        if (!matchName && !matchProf && !matchCity && !matchEdu) return false
      }

      return true
    })
  }, [filters])

  const scrollToBrowse = () => {
    const el = document.querySelector('#browse-profiles')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="browse-profiles" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] border-b border-[#D4AF37]/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#5C0612]">
            Curated Match Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#5C0612]">
            Browse Verified Profiles
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A4D]">
            Explore 100% verified brides and grooms across cities, professions, and communities.
          </p>
        </div>

        {/* Filter Control Bar Container */}
        <div className="rounded-3xl border border-[#D4AF37]/40 bg-[#FFFDF9] p-6 shadow-xl mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#D4AF37]/20 pb-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#780B1A]">
                <FaSearch className="text-sm" />
              </div>
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                placeholder="Search by name, profession, city..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-xs font-semibold text-[#2C1A1D] placeholder:text-[#5C4A4D]/60 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
              />
            </div>

            {/* Quick Gender Tabs */}
            <div className="flex rounded-full border border-[#D4AF37]/40 bg-[#FAF6F0] p-1 w-full md:w-auto">
              {['All', 'Woman', 'Man'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => handleFilterChange('gender', g)}
                  className={`flex-1 md:flex-initial px-5 py-1.5 rounded-full text-xs font-bold transition ${
                    filters.gender === g
                      ? 'bg-[#5C0612] text-[#F3E0A2] shadow-sm'
                      : 'text-[#5C4A4D] hover:text-[#5C0612]'
                  }`}
                >
                  {g === 'All' ? 'All Profiles' : g === 'Woman' ? 'Brides' : 'Grooms'}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Filters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div>
              <label htmlFor="filterAge" className="block text-[11px] font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                Age
              </label>
              <select
                id="filterAge"
                value={filters.ageRange}
                onChange={(e) => handleFilterChange('ageRange', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D4AF37]/40 bg-[#FAF6F0] text-xs font-semibold text-[#2C1A1D] outline-none"
              >
                {filterOptions.ageRange.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filterCity" className="block text-[11px] font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                City
              </label>
              <select
                id="filterCity"
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D4AF37]/40 bg-[#FAF6F0] text-xs font-semibold text-[#2C1A1D] outline-none"
              >
                {filterOptions.city.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filterProfession" className="block text-[11px] font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                Profession
              </label>
              <select
                id="filterProfession"
                value={filters.profession}
                onChange={(e) => handleFilterChange('profession', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D4AF37]/40 bg-[#FAF6F0] text-xs font-semibold text-[#2C1A1D] outline-none"
              >
                {filterOptions.profession.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filterReligion" className="block text-[11px] font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                Religion
              </label>
              <select
                id="filterReligion"
                value={filters.religion}
                onChange={(e) => handleFilterChange('religion', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D4AF37]/40 bg-[#FAF6F0] text-xs font-semibold text-[#2C1A1D] outline-none"
              >
                {filterOptions.religion.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/15 text-xs text-[#5C4A4D]">
            <span>Showing <strong>{filteredProfiles.length}</strong> matching profiles</span>
            <button
              type="button"
              onClick={resetFilters}
              className="text-[#780B1A] font-bold flex items-center gap-1 hover:underline"
            >
              <FaRedo className="text-[10px]" /> Reset Filters
            </button>
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onViewProfile={onViewProfile}
                onSignIn={onSignIn}
                onBrowseProfiles={scrollToBrowse}
                onSendInterest={onSendInterest}
                onShortlist={onShortlist}
                isShortlisted={shortlistedIds.includes(profile.id)}
                isInterestSent={expressedInterestIds.includes(profile.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl border border-[#D4AF37]/30 bg-[#FFFDF9] p-8 space-y-4">
            <p className="text-xl font-bold font-serif text-[#5C0612]">No profiles found matching your current filter criteria.</p>
            <p className="text-xs text-[#5C4A4D]">Try broadening your age range or resetting city/profession filters.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-full bg-[#5C0612] px-6 py-2.5 text-xs font-bold text-white"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Create Profile Prompt Banner */}
        <div className="mt-12 text-center bg-[#FAF6F0] border border-[#D4AF37]/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-lg text-[#5C0612]">Don't see what you're looking for?</h4>
            <p className="text-xs text-[#5C4A4D]">Create your own profile to get personalized recommendations delivered directly to you.</p>
          </div>
          <button
            type="button"
            onClick={onCreateProfile}
            className="rounded-full bg-gradient-to-r from-[#5C0612] to-[#780B1A] px-6 py-3 text-xs font-bold text-white shadow-md hover:brightness-110 flex items-center gap-2 whitespace-nowrap"
          >
            <FaUserPlus /> Create Your Profile
          </button>
        </div>
      </div>
    </section>
  )
}
