import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { FaTimes, FaCheckCircle, FaHeart, FaStar, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaUsers, FaCompass, FaRulerVertical, FaCoins, FaLock } from 'react-icons/fa'

export default function ViewProfileModal({ profile, isOpen, onClose, onSendInterest, onShortlist, isShortlisted, isInterestSent, onRequireSignIn }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !profile) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="view-profile-title">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#D4AF37]/50 bg-[#FFFDF9] shadow-2xl my-6 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3E040B] via-[#5C0612] to-[#780B1A] px-6 py-4 text-white flex items-center justify-between border-b border-[#D4AF37]/30 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#D4AF37] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5C0612]">
                Match ID: {profile.id}
              </span>
              <h2 id="view-profile-title" className="text-xl font-bold font-serif text-white">
                {profile.name}'s Profile
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Main Info Hero Header inside Modal */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-full md:w-56 h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-[#D4AF37]/40 flex-shrink-0">
                <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 bg-[#5C0612]/90 text-[#F3E0A2] backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#D4AF37]/40">
                  {profile.badge}
                </div>
                {profile.verified && (
                  <div className="absolute bottom-2 right-2 bg-emerald-600 text-white px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 shadow">
                    <FaCheckCircle className="text-xs" /> Verified
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#5C0612] flex items-center gap-2">
                      {profile.name}
                      <span className="text-sm font-sans font-normal text-[#5C4A4D]">({profile.age} yrs)</span>
                    </h3>
                    <p className="text-xs font-semibold text-[#780B1A]">{profile.gender} • Looking for {profile.lookingFor}</p>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-3 py-1 text-xs font-bold text-[#5C0612]">
                    <FaStar className="text-[#D4AF37]" /> {profile.rating} / 5.0 Rating
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C1A1D] pt-1">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#780B1A]" />
                    <span><strong>Location:</strong> {profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-[#780B1A]" />
                    <span><strong>Role:</strong> {profile.profession}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-[#780B1A]" />
                    <span><strong>Education:</strong> {profile.education}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRulerVertical className="text-[#780B1A]" />
                    <span><strong>Height:</strong> {profile.height}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCoins className="text-[#780B1A]" />
                    <span><strong>Income:</strong> {profile.income}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCompass className="text-[#780B1A]" />
                    <span><strong>Religion:</strong> {profile.religion} ({profile.caste})</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {profile.tags?.map((t) => (
                    <span key={t} className="rounded-full bg-[#FAF6F0] border border-[#D4AF37]/30 px-3 py-1 text-[11px] font-semibold text-[#5C0612]">
                      ✨ {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* About / Bio Section */}
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#FAF6F0] p-5 space-y-2">
              <h4 className="font-serif font-bold text-lg text-[#5C0612] border-b border-[#D4AF37]/20 pb-2">
                About {profile.name}
              </h4>
              <p className="text-xs md:text-sm text-[#2C1A1D] leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* Family & Horoscope Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-white p-5 space-y-2">
                <h4 className="font-serif font-bold text-base text-[#5C0612] flex items-center gap-2">
                  <FaUsers className="text-[#780B1A]" /> Family Details
                </h4>
                <ul className="text-xs text-[#2C1A1D] space-y-1.5 pt-1">
                  <li><strong>Family Type:</strong> {profile.family}</li>
                  <li><strong>Father's Role:</strong> {profile.fatherOccupation}</li>
                  <li><strong>Mother's Role:</strong> {profile.motherOccupation}</li>
                  <li><strong>Mother Tongue:</strong> {profile.motherTongue}</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/30 bg-white p-5 space-y-2">
                <h4 className="font-serif font-bold text-base text-[#5C0612] flex items-center gap-2">
                  <FaCompass className="text-[#780B1A]" /> Astrology & Lifestyle
                </h4>
                <ul className="text-xs text-[#2C1A1D] space-y-1.5 pt-1">
                  <li><strong>Horoscope:</strong> {profile.horoscope}</li>
                  <li><strong>Hobbies:</strong> {profile.hobbies?.join(', ')}</li>
                  <li><strong>Diet / Lifestyle:</strong> Vegetarian / Teetotaler</li>
                  <li><strong>Verification:</strong> Gov ID & Family Verified</li>
                </ul>
              </div>
            </div>

            {/* Partner Expectations */}
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#FAF6F0] to-[#FFFDF9] p-5 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#5C0612]">
                Partner Expectations
              </h4>
              <p className="text-xs md:text-sm text-[#2C1A1D] italic">
                "{profile.expectations}"
              </p>
            </div>

            {/* Privacy Protection Banner */}
            <div className="rounded-xl border border-amber-900/10 bg-amber-500/10 p-3 flex items-center gap-3 text-xs text-[#5C0612]">
              <FaLock className="text-lg text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="font-bold">Contact details protected under Privacy Policy</p>
                <p className="text-[11px] text-[#5C4A4D]">To view phone number or request home visit, send an express interest or sign in.</p>
              </div>
            </div>
          </div>

          {/* Footer Actions inside Modal */}
          <div className="bg-[#FAF6F0] border-t border-[#D4AF37]/30 px-6 py-4 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onShortlist(profile)}
                className={`rounded-full px-4 py-2 text-xs font-bold border transition flex items-center gap-1.5 ${
                  isShortlisted
                    ? 'bg-[#D4AF37] text-[#5C0612] border-[#D4AF37]'
                    : 'bg-white text-[#5C0612] border-[#D4AF37]/50 hover:bg-[#F3E0A2]/30'
                }`}
              >
                <FaStar className={isShortlisted ? 'text-[#5C0612]' : 'text-[#D4AF37]'} />
                {isShortlisted ? 'Shortlisted' : 'Shortlist Profile'}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onRequireSignIn}
                className="rounded-full border border-[#5C0612] bg-white px-5 py-2.5 text-xs font-bold text-[#5C0612] hover:bg-[#5C0612] hover:text-white transition"
              >
                Sign In to View Contact
              </button>

              <button
                type="button"
                onClick={() => onSendInterest(profile)}
                className={`rounded-full px-6 py-2.5 text-xs font-bold text-white shadow-md transition flex items-center gap-2 ${
                  isInterestSent
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-gradient-to-r from-[#5C0612] to-[#780B1A] hover:brightness-110'
                }`}
              >
                <FaHeart className={isInterestSent ? 'text-white' : 'text-[#F3E0A2]'} />
                {isInterestSent ? 'Interest Expressed!' : 'Send Express Interest'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
