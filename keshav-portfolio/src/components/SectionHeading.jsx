import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      {eyebrow && (
        <p className="text-brass text-xs sm:text-sm tracking-[0.15em] mb-2">{eyebrow}</p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl leading-[0.95] ${light ? 'text-bone' : 'text-bone'}`}>
        {title}
      </h2>
    </motion.div>
  )
}
