import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaStar, FaCheckCircle } from 'react-icons/fa'

export default function Toast({ toast }) {
  if (!toast) return null

  const getIcon = () => {
    switch (toast.type) {
      case 'heart':
        return <FaHeart className="text-red-400 text-lg animate-bounce" />
      case 'star':
        return <FaStar className="text-[#D4AF37] text-lg" />
      default:
        return <FaCheckCircle className="text-emerald-400 text-lg" />
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-[#D4AF37]/50 bg-[#3E040B] px-5 py-3.5 text-white shadow-2xl backdrop-blur-lg"
      >
        {getIcon()}
        <span className="text-xs md:text-sm font-semibold">{toast.message}</span>
      </motion.div>
    </AnimatePresence>
  )
}
