import { motion } from 'framer-motion'
import { FaUserCheck, FaLock, FaUserShield, FaRing, FaHandshake, FaUserPlus, FaHeart, FaAward } from 'react-icons/fa'

export default function WhyChooseUs({ onCreateProfile }) {
  const features = [
    {
      icon: <FaUserCheck className="text-3xl text-[#D4AF37]" />,
      title: '100% ID Verified Profiles',
      desc: 'Government ID verification, phone check, and photo validation for every single bride and groom registered on our platform.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      altText: 'Verified bride smiling confidently, showcasing ID verified status'
    },
    {
      icon: <FaLock className="text-3xl text-[#D4AF37]" />,
      title: 'Strict Family Privacy',
      desc: 'Complete control over who views your photos, phone number, and personal details. Zero public indexing or unauthorized data sharing.',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80',
      altText: 'Close up of gold wedding rings representing confidential family vows and trust'
    },
    {
      icon: <FaUserShield className="text-3xl text-[#D4AF37]" />,
      title: 'Dedicated Relationship Manager',
      desc: 'Personalized assistance by experienced matchmakers who understand cultural nuances, family values, and lifestyle expectations.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      altText: 'Professional relationship manager providing consultation'
    },
    {
      icon: <FaHandshake className="text-3xl text-[#D4AF37]" />,
      title: 'Family Background Screening',
      desc: 'We verify educational credentials, professional standing, and family background to ensure total peace of mind for both families.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
      altText: 'Family members celebrating a traditional engagement ceremony'
    },
    {
      icon: <FaRing className="text-3xl text-[#D4AF37]" />,
      title: '25,000+ Success Stories',
      desc: 'Over 15 years of excellence facilitating sacred unions across India, Pakistan, and NRI communities worldwide.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
      altText: 'Happy bride and groom posing in rich wedding attire'
    }
  ]

  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] border-b border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* About Us Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#5C0612]">
            <FaAward className="text-[#D4AF37]" />
            <span>About Marriage Bureau • Uncompromising Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#5C0612]">
            Why Families Choose Marriage Bureau
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A4D] leading-relaxed">
            Founded on values of trust, transparency, and traditional family honors, Marriage Bureau bridges generation-old wisdom with cutting-edge privacy and matchmaking algorithms.
          </p>
        </div>

        {/* Highlight Feature Showcase Banner with Couple Photo */}
        <div className="mb-16 rounded-3xl bg-gradient-to-r from-[#3E040B] via-[#5C0612] to-[#780B1A] border-2 border-[#D4AF37]/40 p-6 sm:p-10 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F3E0A2] flex items-center gap-1.5">
              <FaHeart className="text-[#D4AF37]" /> Heritage & Legacy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              A Matchmaking Tradition Built on Mutual Respect and Pure Intentions
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              Every marriage is a sacred union between two individuals and two families. Our team ensures that privacy, authenticity, and respect are maintained from the very first greeting to the wedding mandap.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#F3E0A2]">
              <span className="flex items-center gap-1 bg-[#3E040B]/80 px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                ✨ 100% Confidentiality
              </span>
              <span className="flex items-center gap-1 bg-[#3E040B]/80 px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                💍 Verified Families
              </span>
              <span className="flex items-center gap-1 bg-[#3E040B]/80 px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                🌺 Global NRI Coverage
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Happy Indian bride and groom during wedding mandap ceremony"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E040B]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center bg-[#3E040B]/90 backdrop-blur-md py-2 px-3 rounded-xl border border-[#D4AF37]/40 text-xs font-bold font-serif text-[#F3E0A2]">
                Creating Timeless Marriage Memories Since 2010
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid with Professional Pictures & Ring/Heart Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-[#D4AF37]/35 bg-[#FAF6F0] overflow-hidden hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E040B]/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C0612] text-white shadow-md border border-[#D4AF37]/40">
                  {item.icon}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#5C0612]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A4D] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-bold text-[#780B1A]">
                  <span>Trusted Standard</span>
                  <FaRing className="text-[#D4AF37]" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Call-to-Action Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#3E040B] via-[#5C0612] to-[#780B1A] p-8 text-white space-y-6 flex flex-col justify-between border-2 border-[#D4AF37]/50 shadow-xl relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F3E0A2] bg-[#3E040B] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                Begin Matching
              </span>
              <h3 className="text-2xl font-bold font-serif text-white">
                Experience Preferred VIP Matchmaking Today
              </h3>
              <p className="text-xs text-amber-100/90 leading-relaxed">
                Register today to connect with verified profiles, consult with senior marriage experts, and receive curated matches.
              </p>
            </div>
            
            <button
              type="button"
              onClick={onCreateProfile}
              className="w-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#B8860B] py-3.5 text-xs font-extrabold text-[#3E040B] shadow-lg hover:brightness-110 flex items-center justify-center gap-2 relative z-10"
            >
              <FaUserPlus /> Create Your Free Profile
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
