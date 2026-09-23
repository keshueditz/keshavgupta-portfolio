import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { designProjects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function GraphicDesign() {
  const [active, setActive] = useState(null)

  return (
    <section id="graphic-design" className="relative py-20 sm:py-28 bg-ink border-t border-ink-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Selected Work" title="Graphic Design." />
        <p className="mt-4 text-bone-muted max-w-xl text-sm sm:text-base">
          Festival creatives, event posters, client campaigns and brand design.
        </p>

        <div className="mt-12 columns-2 sm:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {designProjects.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group block w-full break-inside-avoid relative overflow-hidden border border-ink-border text-left"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-brass text-[10px] uppercase tracking-wide">{p.category}</p>
                <p className="text-bone text-sm font-semibold">{p.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-5 sm:p-10"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <img src={active.image} alt={active.title} className="w-full max-h-[75vh] object-contain mx-auto" />
              <div className="mt-4 text-center">
                <p className="text-brass text-xs uppercase tracking-wide">{active.category}</p>
                <p className="text-bone font-display text-xl mt-1">{active.title}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 right-2 sm:-top-4 sm:-right-4 w-9 h-9 rounded-full bg-bone text-ink flex items-center justify-center"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
