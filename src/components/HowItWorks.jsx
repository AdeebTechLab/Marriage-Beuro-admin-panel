import { motion } from 'framer-motion'
import { FaUserEdit, FaSlidersH, FaShieldAlt, FaRing, FaUserPlus, FaSearch, FaConciergeBell, FaHeart, FaCertificate } from 'react-icons/fa'

export default function HowItWorks({ onCreateProfile, onBrowseProfiles }) {
  const steps = [
    {
      num: '01',
      icon: <FaUserEdit className="text-2xl text-[#D4AF37]" />,
      title: 'Free Profile Registration',
      desc: 'Register in under 2 minutes. Add key preferences including education, profession, family background, and city.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      altText: 'Smiling candidate completing verified profile registration'
    },
    {
      num: '02',
      icon: <FaSlidersH className="text-2xl text-[#D4AF37]" />,
      title: 'AI & Kundali Matchmaking',
      desc: 'Smart matchmaking filters based on horoscope compatibility, family values, education, and lifestyle standards.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      altText: 'Traditional wedding ceremony representing cultural compatibility matching'
    },
    {
      num: '03',
      icon: <FaShieldAlt className="text-2xl text-[#D4AF37]" />,
      title: '100% Background Check',
      desc: 'Every candidate undergoes manual ID verification, employment check, and confidential family background screening.',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80',
      altText: 'Gold wedding rings symbol of trust, security, and verified matrimony'
    },
    {
      num: '04',
      icon: <FaRing className="text-2xl text-[#D4AF37]" />,
      title: 'VIP Family Meetings & Union',
      desc: 'Discreetly connect with pre-screened families, arrange mediated video or in-person meetings with your VIP Relationship Manager.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
      altText: 'Happy bride and groom celebrating their wedding ceremony union'
    }
  ]

  const services = [
    {
      title: 'VIP Personal Matchmaking',
      desc: 'Dedicated Senior Relationship Manager to handle profile shortlisting, family introductions, and background checks on your behalf.',
      icon: <FaConciergeBell className="text-xl text-[#D4AF37]" />,
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      alt: 'VIP Relationship Manager guiding family matchmaking'
    },
    {
      title: 'Horoscope & Cultural Alignment',
      desc: 'Astrological compatibility reports prepared by expert pandits and astrologers for families seeking traditional alignments.',
      icon: <FaHeart className="text-xl text-[#D4AF37]" />,
      img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=80',
      alt: 'Traditional wedding rituals and cultural alignment'
    },
    {
      title: 'Global & NRI Matrimonial Services',
      desc: 'Exclusive matchmaking services for NRIs residing in USA, UK, Canada, UAE, Australia, and European nations.',
      icon: <FaCertificate className="text-xl text-[#D4AF37]" />,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      alt: 'NRI professional groom candidate in formal suit'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] border-b border-[#D4AF37]/30 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#5C0612]">
            Our Services & Matchmaking Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#5C0612]">
            How Marriage Bureau Serves You
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A4D]">
            A structured, 4-step process supported by premium matrimonial advisory services for modern candidates and traditional families.
          </p>
        </div>

        {/* Steps Grid with Real Photography & Graphic Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-3xl border border-[#D4AF37]/35 bg-[#FAF6F0] overflow-hidden hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E040B]/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C0612] text-white shadow-md border border-[#D4AF37]/40">
                  {step.icon}
                </div>

                <span className="absolute bottom-2 right-3 text-3xl font-extrabold font-serif text-[#F3E0A2] drop-shadow-md">
                  {step.num}
                </span>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-serif text-[#5C0612]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A4D] leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px] font-bold text-[#780B1A]">
                  <span>Step {step.num} Details</span>
                  <FaRing className="text-[#D4AF37]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Bureau Services Grid */}
        <div className="mt-16 pt-12 border-t border-[#D4AF37]/30 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold font-serif text-[#5C0612]">
              Specialized Marriage Bureau Services
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A4D]">
              Tailored solutions crafted to cater to diverse family backgrounds, professions, and regional preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#D4AF37]/30 bg-[#FFFDF9] p-6 space-y-4 hover:border-[#D4AF37] hover:shadow-lg transition-all"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-36 rounded-2xl object-cover border border-[#D4AF37]/30"
                  loading="lazy"
                />
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#5C0612] text-white">
                    {item.icon}
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#5C0612]">{item.title}</h4>
                </div>
                <p className="text-xs text-[#5C4A4D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action bar in section */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#3E040B] via-[#5C0612] to-[#780B1A] p-8 text-center text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#D4AF37]/40">
          <div className="text-left space-y-1">
            <h3 className="text-2xl font-bold font-serif text-[#F3E0A2]">
              Ready to find your soulmate?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/90">
              Join over 25,000 satisfied couples who began their marriage journey with Marriage Bureau.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onCreateProfile}
              className="rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] px-6 py-3.5 text-xs font-bold text-[#3E040B] shadow-md hover:brightness-110 transition focus-visible:ring-2 focus-visible:ring-white flex items-center gap-2"
            >
              <FaUserPlus /> Create Free Profile
            </button>
            <button
              type="button"
              onClick={onBrowseProfiles}
              className="rounded-full border border-[#D4AF37] bg-transparent px-6 py-3.5 text-xs font-bold text-[#F3E0A2] hover:bg-[#D4AF37]/20 transition focus-visible:ring-2 focus-visible:ring-[#D4AF37] flex items-center gap-2"
            >
              <FaSearch /> Browse Verified Profiles
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
