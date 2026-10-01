import { motion } from 'framer-motion'
import { FaCheck, FaCrown, FaStar, FaUserPlus } from 'react-icons/fa'

export default function MembershipPlans({ onCreateProfile, onSignIn }) {
  const plans = [
    {
      name: 'Silver Classic',
      price: '₹3,499',
      period: '3 Months',
      popular: false,
      badge: 'Basic Match',
      features: [
        'Send up to 30 Express Interests',
        'View 50 Verified Phone Numbers',
        'Smart AI Profile Recommendations',
        'Direct Chat with Matched Profiles',
        'Standard Privacy Controls'
      ]
    },
    {
      name: 'Gold Premium',
      price: '₹6,999',
      period: '6 Months',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Unlimited Express Interests',
        'View 150 Verified Phone Numbers',
        'Priority Profile Placement in Searches',
        'Assisted Matchmaking Support',
        'Advanced Horoscope Matching Report',
        'Family Background Verification Badge'
      ]
    },
    {
      name: 'Diamond VIP',
      price: '₹14,999',
      period: '1 Year',
      popular: false,
      badge: 'VIP Elite Circle',
      features: [
        'Dedicated Personal Relationship Manager',
        'Handpicked Curated Matches Weekly',
        '100% Confidential Photo & Contact Lock',
        'Mediated Video Calls & Home Visit Coordination',
        'Full Kundali / Astrology Matching Report',
        'Unlimited Direct Contact Access'
      ]
    }
  ]

  return (
    <section id="membership" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] border-b border-[#D4AF37]/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#5C0612]">
            Transparent Pricing Tiers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#5C0612]">
            Membership Plans & Services
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A4D]">
            Choose the plan that fits your family's preferences. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl border p-8 space-y-6 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'border-[#D4AF37] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] shadow-2xl scale-105 z-10'
                  : 'border-[#D4AF37]/30 bg-[#FFFDF9] shadow-lg hover:border-[#D4AF37]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#3E040B] px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow flex items-center gap-1">
                  <FaCrown /> {plan.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#780B1A]">{plan.badge}</span>
                  <h3 className="text-2xl font-bold font-serif text-[#5C0612] mt-1">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold font-serif text-[#5C0612]">{plan.price}</span>
                    <span className="text-xs text-[#5C4A4D]">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-4 border-t border-[#D4AF37]/20 text-xs text-[#2C1A1D]">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <FaCheck className="text-[#D4AF37] text-sm mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={onCreateProfile}
                  className={`w-full rounded-full py-3.5 text-xs font-extrabold transition shadow-md flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#5C0612] via-[#780B1A] to-[#9B1B2D] text-white hover:brightness-110'
                      : 'bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] text-[#3E040B] hover:brightness-105'
                  }`}
                >
                  <FaUserPlus /> Select {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
