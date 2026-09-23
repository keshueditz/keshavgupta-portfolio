import { motion } from 'framer-motion'
import { profile } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-ink-alt border-t border-ink-border overflow-hidden">
      <div className="absolute inset-0 film-grain pointer-events-none opacity-60" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative">
        <SectionHeading eyebrow="Let's Work Together" title="Start a project." align="center" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-bone-muted text-center max-w-xl mx-auto text-sm sm:text-base"
        >
          Available for freelance and remote work — video editing, graphic design, and motion graphics projects.
        </motion.p>

        <div className="mt-12 flex flex-col items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-2xl sm:text-4xl md:text-5xl text-bone hover:text-brass transition-colors break-all text-center"
          >
            {profile.email}
          </a>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 text-sm sm:text-base">
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-bone-muted hover:text-brass transition-colors">
              {profile.phone}
            </a>
            <span className="text-ink-border">•</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-muted hover:text-brass transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 bg-brass text-ink px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-brass-light transition-colors"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  )
}
