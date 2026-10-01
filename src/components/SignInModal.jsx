import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaTimes, FaLock, FaMobileAlt, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function SignInModal({ isOpen, onClose, onSignInSuccess }) {
  const [method, setMethod] = useState('phone') // 'phone' | 'email'
  const [inputValue, setInputValue] = useState('')
  const [password, setPassword] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleLogin = (e) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      if (onSignInSuccess) onSignInSuccess()
      onClose()
    }, 1200)
  }

  const handleDemoLogin = () => {
    setInputValue('+92 98765 43210')
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      if (onSignInSuccess) onSignInSuccess()
      onClose()
    }, 1200)
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="signin-title">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#FFFDF9] shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3E040B] via-[#5C0612] to-[#780B1A] px-6 py-5 text-white flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-[#5C0612] font-bold">
                <FaHeart className="text-sm" />
              </div>
              <h2 id="signin-title" className="text-lg font-bold font-serif text-white">
                Sign In to Marriage Bureau
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

          <div className="p-6 md:p-8 space-y-6">
            {isSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold font-serif text-[#5C0612]">Signed In Successfully!</h3>
                <p className="text-xs text-[#5C4A4D]">Redirecting to your match dashboard...</p>
              </div>
            ) : (
              <>
                <div className="flex rounded-xl border border-[#D4AF37]/30 bg-[#FAF6F0] p-1">
                  <button
                    type="button"
                    onClick={() => setMethod('phone')}
                    className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                      method === 'phone' ? 'bg-[#5C0612] text-white shadow-sm' : 'text-[#5C4A4D] hover:text-[#5C0612]'
                    }`}
                  >
                    Phone OTP
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod('email')}
                    className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                      method === 'email' ? 'bg-[#5C0612] text-white shadow-sm' : 'text-[#5C4A4D] hover:text-[#5C0612]'
                    }`}
                  >
                    Email Password
                  </button>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      {method === 'phone' ? 'Registered Phone Number' : 'Email Address'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#780B1A]">
                        {method === 'phone' ? <FaMobileAlt /> : <FaEnvelope />}
                      </div>
                      <input
                        type={method === 'phone' ? 'tel' : 'email'}
                        required
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={method === 'phone' ? '+92 98765 43210' : 'name@example.com'}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                  </div>

                  {method === 'email' && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#780B1A]">
                          <FaLock />
                        </div>
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#5C0612] via-[#780B1A] to-[#9B1B2D] py-3.5 text-sm font-bold text-white shadow-md hover:brightness-110 transition focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    {method === 'phone' ? 'Send OTP & Sign In' : 'Sign In'}
                  </button>

                  <div className="relative flex items-center justify-center my-4">
                    <div className="w-full border-t border-[#D4AF37]/30"></div>
                    <span className="bg-[#FFFDF9] px-3 text-[11px] uppercase tracking-wider text-[#5C4A4D]">Or</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="w-full rounded-full border border-[#D4AF37] bg-[#FAF6F0] py-3 text-xs font-bold text-[#5C0612] hover:bg-[#F4ECE1] transition focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    ⚡ Quick Demo One-Click Sign In
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
