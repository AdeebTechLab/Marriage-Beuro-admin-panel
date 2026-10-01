import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 flex flex-col ${alignment}`}
    >
      <span className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 shadow-sm">
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-balance text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
    </motion.div>
  )
}
