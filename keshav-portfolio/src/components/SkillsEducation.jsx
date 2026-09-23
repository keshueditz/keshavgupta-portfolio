import { motion } from 'framer-motion'
import { skills, education, certifications } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function SkillsEducation() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-ink-alt border-t border-ink-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16">
        {/* Skills */}
        <div>
          <SectionHeading eyebrow="Toolkit" title="Skills." />
          <div className="mt-8 space-y-6">
            {Object.entries(skills).map(([group, items], gi) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
              >
                <p className="text-bone font-semibold text-sm mb-2">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs sm:text-sm text-bone-muted border border-ink-border px-3 py-1.5 hover:border-brass hover:text-brass transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education + Certifications */}
        <div>
          <SectionHeading eyebrow="Background" title="Education." />
          <div className="mt-8 space-y-6">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border-l-2 border-brass/50 pl-4"
              >
                <p className="text-bone font-semibold text-sm sm:text-base">{e.degree}</p>
                <p className="text-bone-muted text-xs sm:text-sm mt-1">{e.place}</p>
                <span className="inline-block mt-1 text-[10px] uppercase tracking-wide text-brass">{e.status}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-brass text-xs sm:text-sm tracking-[0.15em] mb-3">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span
                key={c}
                className="text-xs sm:text-sm text-bone-muted border border-ink-border px-3 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
