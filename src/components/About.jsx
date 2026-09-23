import { motion } from 'framer-motion'
import { profile } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-ink border-t border-ink-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0 w-64 sm:w-80 md:w-full max-w-sm"
        >
          <div className="absolute -inset-3 border border-brass/40 -z-10" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full aspect-[4/5] object-cover grayscale-[15%] contrast-[1.05]"
          />
          <div className="absolute -bottom-4 -right-4 bg-brass text-ink px-4 py-2 font-display text-sm tracking-wide">
            KMG EDITZ
          </div>
        </motion.div>

        <div>
          <SectionHeading eyebrow="About" title="Behind the cut." />
          <div className="mt-6 space-y-4 text-bone-muted text-base sm:text-lg leading-relaxed max-w-xl">
            <p>
              I'm {profile.name}, a freelance video editor and graphic designer based in {profile.location},
              working with clients remotely across social media trend edits, talking-head content, cinematic
              pieces and short-form reels.
            </p>
            <p>
              What started as self-taught editing on Instagram trend content grew into structured training in
              graphic design and professional editing software — and along the way I've worked with{' '}
              <span className="text-bone font-semibold">60+ clients</span>, delivering video content built
              around what each one actually needed.
            </p>
            <p>
              I'm currently pursuing a B.Sc. in Animation and Visual Graphics at Amity University, Gurugram,
              which is why motion graphics and animation sit right alongside editing and design in this
              portfolio, not as an afterthought.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            {[
              ['Clients Served', '60+'],
              ['Focus', 'Video · Design · Motion'],
              ['Based In', profile.location],
            ].map(([label, value]) => (
              <div key={label} className="border-l-2 border-brass/50 pl-3">
                <p className="text-bone font-display text-lg sm:text-xl">{value}</p>
                <p className="text-bone-muted text-xs uppercase tracking-wide mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
