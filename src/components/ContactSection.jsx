import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane, FaCheckCircle, FaRing, FaUserShield } from 'react-icons/fa'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', city: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] border-b border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#5C0612]">
            Confidential Assistance • We Are Here For You
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#5C0612]">
            Contact Our Marriage Bureau
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A4D]">
            Schedule an appointment at our bureau headquarters or request a call from a Senior Relationship Manager.
          </p>
        </div>

        {/* Top Image Showcase Banner for Contact Page */}
        <div className="mb-12 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl relative aspect-[21/9] sm:aspect-[25/9]">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80"
            alt="Warm and welcoming consultation team at Marriage Bureau office"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3E040B]/90 via-[#3E040B]/60 to-transparent flex items-center p-6 sm:p-12">
            <div className="max-w-xl text-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F3E0A2] flex items-center gap-1.5">
                <FaUserShield className="text-[#D4AF37]" /> Dedicated Advisory Desk
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
                Visit Us or Talk to an Expert
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                Our match advisors welcome parents and candidates to our centers with total privacy and honor.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-[#D4AF37]/35 bg-[#FAF6F0] p-8 space-y-6 shadow-md">
              <h3 className="text-2xl font-bold font-serif text-[#5C0612] border-b border-[#D4AF37]/30 pb-4 flex items-center gap-2">
                <FaRing className="text-[#D4AF37] text-xl" />
                <span>Headquarters & Advisory Center</span>
              </h3>

              <div className="space-y-5 text-sm text-[#2C1A1D]">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C0612] text-[#F3E0A2] shadow-sm flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C0612]">Office Address</h4>
                    <p className="text-xs text-[#5C4A4D] leading-relaxed">
                      Suite 502, Royal Heritage Tower, MG Road, Fort, Mumbai, Maharashtra - 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C0612] text-[#F3E0A2] shadow-sm flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C0612]">Phone & Consultation Lines</h4>
                    <p className="text-xs text-[#5C4A4D]">+92 98765 43210 / +92 22 8844 9900</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C0612] text-[#F3E0A2] shadow-sm flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C0612]">Email Desk</h4>
                    <p className="text-xs text-[#5C4A4D]">contact@shubhbandhan-matrimony.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C0612] text-[#F3E0A2] shadow-sm flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C0612]">Working Hours</h4>
                    <p className="text-xs text-[#5C4A4D]">Monday – Saturday: 9:00 AM – 8:00 PM (IST)</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call Button */}
              <a
                href="https://wa.me/929876543210?text=Hello%20Marriage%20Bureau%2C%20I%20would%20like%20to%20inquire%20about%20matrimonial%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-emerald-700 hover:bg-emerald-800 py-3.5 px-6 text-xs font-bold text-white shadow-md transition flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-lg" /> Connect via WhatsApp Instant Desk
              </a>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border-2 border-[#D4AF37]/40 bg-[#FFFDF9] p-8 shadow-xl gold-shadow">
              <h3 className="text-2xl font-bold font-serif text-[#5C0612] mb-1">
                Send Us an Inquiry
              </h3>
              <p className="text-xs text-[#5C4A4D] mb-6">
                Fill out the form below. A Senior Relationship Manager will contact you within 2 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3 bg-[#FAF6F0] rounded-2xl border border-[#D4AF37]/30">
                  <FaCheckCircle className="text-5xl text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold font-serif text-[#5C0612]">Inquiry Received!</h4>
                  <p className="text-xs text-[#5C4A4D] max-w-sm mx-auto">
                    Thank you for reaching out. A Senior Relationship Manager will contact you shortly on {form.phone || 'your phone'}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Adeel Ahmed"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm text-[#2C1A1D] outline-none focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactPhone" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm text-[#2C1A1D] outline-none focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactCity" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      City / Residence Location
                    </label>
                    <input
                      id="contactCity"
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. Mumbai / Lahore / London"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm text-[#2C1A1D] outline-none focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMsg" className="block text-xs font-bold uppercase tracking-wider text-[#5C0612] mb-1">
                      Your Requirements or Inquiry
                    </label>
                    <textarea
                      id="contactMsg"
                      rows="4"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe what kind of match or service you are looking for..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6F0] text-sm text-[#2C1A1D] outline-none focus:border-[#5C0612] focus:ring-2 focus:ring-[#D4AF37] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#5C0612] via-[#780B1A] to-[#9B1B2D] py-3.5 text-sm font-bold text-white shadow-lg hover:brightness-110 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> Submit Inquiry Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
