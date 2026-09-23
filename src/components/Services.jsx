import { motion } from 'framer-motion'
import { services } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-ink-alt border-t border-ink-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="What I Do" title="Services." />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-border">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="bg-ink-alt p-6 sm:p-7 hover:bg-ink-surface transition-colors group"
            >
              <span className="text-brass font-display text-2xl">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-bone text-lg sm:text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 text-bone-muted text-sm leading-relaxed">{s.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
