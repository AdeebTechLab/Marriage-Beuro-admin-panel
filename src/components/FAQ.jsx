import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const faqs = [
  {
    question: 'How does the matchmaking process work?',
    answer:
      'We curate profiles based on your preferences, values, family considerations, and lifestyle priorities before introducing compatible matches and guiding your next steps.',
  },
  {
    question: 'Are the profiles verified?',
    answer:
      'Yes. Every profile goes through a verification process, including identity and family background checks, to help ensure a safer and more trustworthy experience.',
  },
  {
    question: 'Can families participate in the search?',
    answer:
      'Absolutely. We welcome family involvement and offer guided support for family introductions, conversations, and compatibility discussions.',
  },
  {
    question: 'Is the service confidential?',
    answer:
      'Privacy is a core part of our process. We prioritize discretion, user control, and secure communication throughout the matchmaking journey.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions, answered with clarity"
          description="Everything you need to know before beginning your matrimonial journey with confidence."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.25)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t border-slate-200 px-6 py-5 text-base leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                ) : null}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
