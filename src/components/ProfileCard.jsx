import { motion } from 'framer-motion'
import { FaCheckCircle, FaStar, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaHeart, FaEye, FaSignInAlt, FaSearch } from 'react-icons/fa'

export default function ProfileCard({
  profile,
  onViewProfile,
  onSignIn,
  onBrowseProfiles,
  onSendInterest,
  onShortlist,
  isShortlisted,
  isInterestSent
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/35 bg-[#FFFDF9] shadow-lg hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Media & Badges Overlay */}
      <div className="relative h-72 w-full overflow-hidden bg-[#3E040B]">
        <img
          src={profile.image}
          alt={`Profile image of ${profile.name}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E040B]/90 via-[#3E040B]/20 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-full bg-[#5C0612]/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F3E0A2] border border-[#D4AF37]/40 shadow">
            {profile.badge}
          </span>
          <button
            type="button"
            onClick={() => onShortlist(profile)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/50 backdrop-blur-md transition shadow ${
              isShortlisted ? 'bg-[#D4AF37] text-[#5C0612]' : 'bg-black/40 text-white hover:bg-[#D4AF37] hover:text-[#5C0612]'
            }`}
            aria-label={isShortlisted ? 'Remove from shortlist' : 'Add to shortlist'}
          >
            <FaStar className="text-sm" />
          </button>
        </div>

        {/* Bottom Image Overlay Details */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-serif text-white tracking-wide flex items-center gap-1.5">
              {profile.name}
              {profile.verified && (
                <FaCheckCircle className="text-emerald-400 text-sm" title="Verified Profile" />
              )}
            </h3>
            <span className="text-xs font-semibold text-[#F3E0A2] bg-[#5C0612]/80 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
              {profile.age} yrs • {profile.height}
            </span>
          </div>
          <p className="text-xs text-amber-100/80 font-medium pt-0.5">
            {profile.gender} • {profile.religion} ({profile.caste})
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2 text-xs text-[#2C1A1D]">
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-[#780B1A] flex-shrink-0" />
            <span className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{profile.profession}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-[#780B1A] flex-shrink-0" />
            <span className="text-[#5C4A4D] text-ellipsis overflow-hidden whitespace-nowrap">{profile.education}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#780B1A] flex-shrink-0" />
            <span className="text-[#5C4A4D]">{profile.location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {profile.tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-[#FAF6F0] border border-[#D4AF37]/30 px-2.5 py-0.5 text-[10px] font-semibold text-[#5C0612]">
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Action Bar for Express Interest */}
        <div className="pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onSendInterest(profile)}
            className={`flex-1 rounded-full py-2 px-3 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              isInterestSent
                ? 'bg-emerald-600 text-white'
                : 'bg-[#5C0612] text-white hover:bg-[#780B1A]'
            }`}
          >
            <FaHeart className={isInterestSent ? 'text-white' : 'text-[#F3E0A2]'} />
            <span>{isInterestSent ? 'Interest Sent' : 'Send Interest'}</span>
          </button>
        </div>

        {/* Required 3 Buttons on EACH Card explicitly requested by Prompt: "View Profile", "Sign In", "Browse Profiles" */}
        <div className="grid grid-cols-3 gap-1.5 pt-2">
          {/* 1. "View Profile" Button */}
          <button
            type="button"
            onClick={() => onViewProfile(profile)}
            className="rounded-xl border border-[#D4AF37] bg-[#FFFDF9] py-2 px-1 text-[11px] font-bold text-[#5C0612] hover:bg-[#D4AF37]/15 transition flex flex-col items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <FaEye className="text-xs text-[#5C0612]" />
            <span>View Profile</span>
          </button>

          {/* 2. "Sign In" Button */}
          <button
            type="button"
            onClick={onSignIn}
            className="rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] py-2 px-1 text-[11px] font-bold text-[#780B1A] hover:bg-[#FAF6F0] transition flex flex-col items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <FaSignInAlt className="text-xs text-[#780B1A]" />
            <span>Sign In</span>
          </button>

          {/* 3. "Browse Profiles" Button */}
          <button
            type="button"
            onClick={onBrowseProfiles}
            className="rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] py-2 px-1 text-[11px] font-bold text-[#3E040B] hover:bg-[#FAF6F0] transition flex flex-col items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <FaSearch className="text-xs text-[#3E040B]" />
            <span>Browse Profiles</span>
          </button>
        </div>
      </div>
    </motion.article>
  )
}
