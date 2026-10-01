import { motion } from 'framer-motion'
import { FaHeart, FaRing, FaSpa } from 'react-icons/fa'

export default function SectionDivider({ icon = 'rings', label = '' }) {
  const renderIcon = () => {
    switch (icon) {
      case 'heart':
        return <FaHeart className="text-xl text-[#D4AF37]" />
      case 'floral':
        return <FaSpa className="text-xl text-[#D4AF37]" />
      case 'rings':
      default:
        return <FaRing className="text-xl text-[#D4AF37] rotate-12" />
    }
  }

  return (
    <div className="relative py-8 flex items-center justify-center overflow-hidden" aria-hidden="true">
      {/* Left Floral Gradient Line */}
      <div className="h-[1px] w-full max-w-[120px] sm:max-w-[200px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]"></div>
      
      {/* Center Motif Container */}
      <div className="mx-4 flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#FFFDF9] shadow-sm">
        {/* Left flourish SVG */}
        <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.19 8.63L2 9.24L7.46 14.07L5.82 21L12 17.27L18.18 21L16.54 14.07L22 9.24L14.81 8.63L12 2Z" />
        </svg>

        {renderIcon()}

        {label && (
          <span className="text-xs font-serif font-bold tracking-widest text-[#5C0612] uppercase px-1">
            {label}
          </span>
        )}

        {/* Right flourish SVG */}
        <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.19 8.63L2 9.24L7.46 14.07L5.82 21L12 17.27L18.18 21L16.54 14.07L22 9.24L14.81 8.63L12 2Z" />
        </svg>
      </div>

      {/* Right Floral Gradient Line */}
      <div className="h-[1px] w-full max-w-[120px] sm:max-w-[200px] bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]"></div>
    </div>
  )
}
