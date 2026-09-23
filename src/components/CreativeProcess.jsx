import { motion } from 'framer-motion'
import { creativeProcess } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function CreativeProcess() {
  return (
    <section id="process" className="relative py-20 sm:py-28 bg-ink border-t border-ink-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="How I Work" title="Creative Process." />

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-ink-border" />
          <div className="grid md:grid-cols-5 gap-8 md:gap-6">
            {creativeProcess.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-ink-alt border border-brass/50 flex items-center justify-center font-display text-brass text-lg">
                    {i + 1}
                  </span>
                  <h3 className="md:mt-4 text-bone font-semibold text-sm sm:text-base">{step.step}</h3>
                </div>
                <p className="mt-2 md:mt-2 text-bone-muted text-xs sm:text-sm leading-relaxed">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
