import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'How does Marriage Bureau verify registered profiles?',
      a: 'Every profile goes through a strict two-step verification process. First, government photo ID (Aadhaar, Passport, or PAN) and mobile OTP verification are completed. Second, our verification team conducts a phone/background check to ensure family background accuracy.'
    },
    {
      q: 'Can I keep my photo and phone number hidden from the public?',
      a: 'Yes! We offer 100% privacy control settings. You can choose to show your photo and contact details only to profiles you accept or shortlist, ensuring complete confidentiality.'
    },
    {
      q: 'What information is required to create a profile?',
      a: 'Creating a profile is quick and easy. You only need to specify Gender (Man/Woman), Full Name, Age, City, Profession, and Phone Number. Additional details like education, family background, and horoscope can be updated anytime.'
    },
    {
      q: 'What is the role of a VIP Relationship Manager?',
      a: 'A VIP Relationship Manager acts as a dedicated matchmaker for your family. They handpick compatible profiles, coordinate mutual interest approvals, facilitate video calls, and arrange formal family meetings.'
    },
    {
      q: 'Can parents create a profile on behalf of their son or daughter?',
      a: 'Absolutely! Over 60% of our profiles are created and managed by parents or elder siblings. You can indicate who is managing the profile during registration.'
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] border-b border-[#D4AF37]/20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-3">
          <span className="inline-block rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#5C0612]">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#5C0612]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5C4A4D]">
            Everything you need to know about our matrimonial services and security.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#D4AF37]/35 bg-[#FFFDF9] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold font-serif text-[#5C0612] flex items-center gap-3">
                    <FaQuestionCircle className="text-[#D4AF37] flex-shrink-0" />
                    {faq.q}
                  </span>
                  <FaChevronDown
                    className={`text-[#780B1A] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5 text-xs sm:text-sm text-[#2C1A1D] leading-relaxed border-t border-[#D4AF37]/15 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
