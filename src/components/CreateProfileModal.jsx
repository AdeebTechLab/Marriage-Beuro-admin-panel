import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaTimes, FaCheckCircle, FaUser, FaPhoneAlt, FaBriefcase, FaMapMarkerAlt, FaHeart, FaShieldAlt } from 'react-icons/fa'

export default function CreateProfileModal({ isOpen, onClose, onBrowseProfiles }) {
  const [formData, setFormData] = useState({
    gender: 'Woman',
    fullName: '',
    age: '',
    city: '',
    profession: '',
    phone: '',
    email: '',
    religion: 'Hindu',
    lookingFor: 'Man',
    bio: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [matchId, setMatchId] = useState('')
  const [errors, setErrors] = useState({})

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
    if (!formData.age || formData.age < 18 || formData.age > 70) newErrors.age = 'Valid age (18-70) is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.profession.trim()) newErrors.profession = 'Profession is required'
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Valid phone number is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const randomId = 'SB-' + Math.floor(10000 + Math.random() * 90000)
    setMatchId(randomId)
    setSubmitted(true)
  }

  const resetAndClose = () => {
    setSubmitted(false)
    setFormData({
      gender: 'Woman',
      fullName: '',
      age: '',
      city: '',
      profession: '',
      phone: '',
      email: '',
      religion: 'Hindu',
      lookingFor: 'Man',
      bio: ''
    })
    setErrors({})
    onClose()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#FFFDF9] shadow-2xl my-8"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#3E040B] via-[#5C0612] to-[#780B1A] px-6 py-5 text-white flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#5C0612] font-bold shadow-md">
                <FaHeart className="text-lg animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F3E0A2]">Marriage Bureau</span>
                <h2 id="modal-title" className="text-xl font-bold font-serif text-white">
                  {submitted ? 'Registration Confirmed!' : 'Create Your Free Profile'}
                </h2>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
            {submitted ? (
              /* Success Confirmation Message View */
              <div className="text-center py-4 space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 border-4 border-emerald-500 shadow-xl"
                >
                  <FaCheckCircle className="text-5xl" />
                </motion.div>

                <div>
                  <span className="inline-block rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#780B1A]">
                    Match Registration ID: {matchId}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold font-serif text-[#5C0612]">
                    Welcome, {formData.fullName}!
                  </h3>
                  <p className="mt-2 text-sm text-[#5C4A4D] max-w-md mx-auto">
                    Your profile has been created successfully. Our dedicated relationship manager will verify your details and connect you with compatible matches within 2 hours.
                  </p>
                </div>

                {/* Submitted Summary Box */}
                <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#FAF6F0] p-5 text-left text-xs md:text-sm space-y-2 max-w-lg mx-auto">
                  <h4 className="font-bold text-[#5C0612] border-b border-[#D4AF37]/20 pb-2 flex items-center justify-between">
                    <span>Submitted Profile Summary</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">100% Confidential</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[#2C1A1D]">
                    <p><span className="font-semibold text-[#5C4A4D]">Gender:</span> {formData.gender}</p>
                    <p><span className="font-semibold text-[#5C4A4D]">Age:</span> {formData.age} years</p>
                    <p><span className="font-semibold text-[#5C4A4D]">City:</span> {formData.city}</p>
                    <p><span className="font-semibold text-[#5C4A4D]">Profession:</span> {formData.profession}</p>
                    <p className="col-span-2"><span className="font-semibold text-[#5C4A4D]">Phone:</span> {formData.phone}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      resetAndClose()
                      if (onBrowseProfiles) onBrowseProfiles()
                    }}
                    className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#5C0612] to-[#780B1A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    Browse Verified Profiles
                  </button>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="w-full sm:w-auto rounded-full border border-[#D4AF37] bg-white px-6 py-3.5 text-sm font-semibold text-[#5C0612] hover:bg-[#FAF6F0] transition focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            ) : (
              /* Profile Creation Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#780B1A] bg-[#FAF6F0] p-3 rounded-xl border border-[#D4AF37]/20">
                  <FaShieldAlt className="text-base text-[#D4AF37] flex-shrink-0" />
                  <span>Your phone number and identity remain 100% private and protected by Marriage Bureau privacy protocols.</span>
                </div>

                {/* Gender Selector (Required) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-2">
                    I am creating a profile for a <span className="text-red-600">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Woman', 'Man'].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, gender: g, lookingFor: g === 'Woman' ? 'Man' : 'Woman' }))}
                        className={`flex items-center justify-center gap-2 rounded-2xl py-3 px-4 text-sm font-bold border transition ${
                          formData.gender === g
                            ? 'border-[#D4AF37] bg-gradient-to-r from-[#5C0612] to-[#780B1A] text-white shadow-md'
                            : 'border-[#D4AF37]/30 bg-white text-[#2C1A1D] hover:border-[#D4AF37]'
                        }`}
                      >
                        <FaUser className={formData.gender === g ? 'text-[#F3E0A2]' : 'text-[#780B1A]'} />
                        {g} ({g === 'Woman' ? 'Bride' : 'Groom'})
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name (Required) */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#780B1A]">
                        <FaUser className="text-xs" />
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                    {errors.fullName && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.fullName}</p>}
                  </div>

                  {/* Age (Required) */}
                  <div>
                    <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      Age (Years) <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="age"
                      type="number"
                      name="age"
                      min="18"
                      max="70"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g. 26"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    />
                    {errors.age && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.age}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* City (Required) */}
                  <div>
                    <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      City / Location <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#780B1A]">
                        <FaMapMarkerAlt className="text-xs" />
                      </div>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai, Maharashtra"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                    {errors.city && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.city}</p>}
                  </div>

                  {/* Profession (Required) */}
                  <div>
                    <label htmlFor="profession" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      Profession / Occupation <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#780B1A]">
                        <FaBriefcase className="text-xs" />
                      </div>
                      <input
                        id="profession"
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder="e.g. Software Engineer / Doctor"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                    {errors.profession && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.profession}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone Number (Required) */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      Phone Number (WhatsApp) <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#780B1A]">
                        <FaPhoneAlt className="text-xs" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 98765 43210"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.phone}</p>}
                  </div>

                  {/* Religion / Community */}
                  <div>
                    <label htmlFor="religion" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      Religion / Community
                    </label>
                    <select
                      id="religion"
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    >
                      <option value="Hindu">Hindu</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Sikh">Sikh</option>
                      <option value="Jain">Jain</option>
                      <option value="Christian">Christian</option>
                      <option value="Other">Other / Inter-Community</option>
                    </select>
                  </div>
                </div>

                {/* Brief About / Partner Expectations */}
                <div>
                  <label htmlFor="bio" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                    Brief Bio or Partner Expectations (Optional)
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="3"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your values, interests, or partner expectations..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-white text-sm text-[#2C1A1D] placeholder:text-[#5C4A4D]/50 focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#5C0612] via-[#780B1A] to-[#9B1B2D] py-4 text-base font-bold text-white shadow-xl hover:shadow-2xl hover:brightness-110 transition duration-300 focus-visible:ring-2 focus-visible:ring-[#D4AF37] flex items-center justify-center gap-2"
                  >
                    <span>Submit & Create Free Profile</span>
                  </button>
                  <p className="mt-3 text-center text-xs text-[#5C4A4D]">
                    By submitting, you agree to our Terms of Service & Privacy Policy. No spam guaranteed.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
