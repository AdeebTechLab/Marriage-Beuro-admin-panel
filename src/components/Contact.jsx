import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const contactInfo = [
  { icon: FaPhoneAlt, label: 'Call us', value: '+92 98765 43210' },
  { icon: FaEnvelope, label: 'Email us', value: 'hello@sankalpmatrimony.in' },
  { icon: FaMapMarkerAlt, label: 'Visit us', value: 'Bahawalpur, Punjab' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Talk to our matchmaking experts"
          description="Whether you’re just starting your search or looking for a faster path to the right prospects, we’re here to help."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-violet-900 to-fuchsia-700 p-8 text-white shadow-[0_30px_80px_-30px_rgba(124,58,237,0.45)]">
            <h3 className="text-3xl font-bold">Let’s begin your journey</h3>
            <p className="mt-4 text-base leading-7 text-violet-100">
              Connect with our relationship specialists for thoughtful guidance and privacy-first support.
            </p>

            <div className="mt-8 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-violet-200">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-violet-100">{label}</div>
                    <div className="mt-1 font-medium text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Full name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:bg-white"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Phone number
                <input
                  type="tel"
                  placeholder="+92 98765 43210"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:bg-white"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Email address
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:bg-white"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                I am looking for
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:bg-white">
                  <option>Bride</option>
                  <option>Groom</option>
                  <option>Both</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Message
                <textarea
                  rows="5"
                  placeholder="Tell us about your preferences and expectations"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:bg-white"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-600"
            >
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
