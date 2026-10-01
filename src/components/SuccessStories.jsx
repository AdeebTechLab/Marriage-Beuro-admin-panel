import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaQuoteLeft, FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaUserPlus, FaRing, FaSpa } from 'react-icons/fa'
import { testimonials } from '../data/testimonials'

export default function SuccessStories({ onCreateProfile }) {
  const [selectedStory, setSelectedStory] = useState(null)

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] border-b border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Graphic Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#D4AF37]/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#5C0612]">
            <FaRing className="text-[#D4AF37]" />
            <span>Real Couples • Sacred Unions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#5C0612]">
            Success Stories & Celebrations
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A4D]">
            Explore how Marriage Bureau guided thousands of families towards sacred matrimony with dignity and trust.
          </p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((story) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[#D4AF37]/35 bg-[#FFFDF9] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.altText || `Wedding photo of ${story.couple}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E040B]/90 via-transparent to-transparent"></div>
                
                <span className="absolute top-3 left-3 bg-[#5C0612]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#F3E0A2] border border-[#D4AF37]/40 flex items-center gap-1.5 shadow">
                  <FaRing className="text-[#D4AF37]" /> Matched via {story.matchId}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-bold font-serif text-white">{story.couple}</h3>
                  <div className="flex items-center gap-3 text-xs text-amber-100/90 pt-1">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[#D4AF37]" /> {story.marriageDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <FaQuoteLeft className="text-2xl text-[#D4AF37]" />
                  <p className="text-xs sm:text-sm text-[#2C1A1D] italic leading-relaxed">
                    "{story.quote}"
                  </p>
                  <p className="text-xs font-semibold text-[#780B1A] flex items-center gap-1">
                    <FaMapMarkerAlt /> Married in {story.location}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedStory(story)}
                  className="w-full rounded-full border border-[#D4AF37] bg-[#FAF6F0] py-2.5 text-xs font-bold text-[#5C0612] hover:bg-[#5C0612] hover:text-white transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaHeart className="text-[#D4AF37]" /> Read Wedding Story
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Story Details Modal */}
        <AnimatePresence>
          {selectedStory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md" role="dialog" aria-modal="true">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-xl overflow-hidden rounded-3xl border-2 border-[#D4AF37]/60 bg-[#FFFDF9] shadow-2xl"
              >
                <div className="bg-gradient-to-r from-[#3E040B] via-[#5C0612] to-[#780B1A] p-6 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaRing className="text-xl text-[#D4AF37]" />
                    <h3 className="text-xl font-bold font-serif text-white">
                      {selectedStory.couple}'s Wedding Journey
                    </h3>
                  </div>
                  <button onClick={() => setSelectedStory(null)} className="rounded-full p-2 hover:bg-white/10 text-white" aria-label="Close dialog">
                    <FaTimes />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.altText || `Wedding portrait of ${selectedStory.couple}`}
                    className="w-full h-56 object-cover rounded-2xl border border-[#D4AF37]/40 shadow-md"
                  />
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#780B1A] flex items-center gap-1">
                      <FaMapMarkerAlt /> {selectedStory.city} • Married on {selectedStory.marriageDate}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-[#5C0612]">{selectedStory.location}</h4>
                    <p className="text-xs sm:text-sm text-[#2C1A1D] leading-relaxed bg-[#FAF6F0] p-4 rounded-2xl border border-[#D4AF37]/30">
                      {selectedStory.story}
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedStory(null)
                        onCreateProfile()
                      }}
                      className="rounded-full bg-gradient-to-r from-[#5C0612] to-[#780B1A] px-6 py-2.5 text-xs font-bold text-white shadow-lg hover:brightness-110 flex items-center gap-2"
                    >
                      <FaUserPlus /> Begin Your Own Journey
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
