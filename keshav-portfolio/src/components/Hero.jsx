import { motion } from 'framer-motion'
import { profile } from '../data/portfolio.js'

const titleLine1 = 'KESHAV'
const titleLine2 = 'MURARI GUPTA'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink">
      {/* background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-45"
        src="/assets/videos/car.mp4"
        poster="/assets/posters/car.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* sprocket strip */}
      <div className="absolute top-0 left-0 right-0 h-3 sprocket opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-3 sprocket opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-5 sm:px-8 pb-16 sm:pb-24 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brass text-sm sm:text-base tracking-wide mb-4"
        >
          Video Editor &amp; Graphic Designer — {profile.location}, {profile.workPreference}
        </motion.p>

        <h1 className="font-display leading-[0.85] text-bone">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[15vw] sm:text-[9vw] md:text-8xl lg:text-9xl"
          >
            {titleLine1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[15vw] sm:text-[9vw] md:text-8xl lg:text-9xl text-stroke"
          >
            {titleLine2}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <a
            href="#video-editing"
            className="inline-flex items-center gap-2 bg-brass text-ink px-6 py-3 text-sm font-semibold tracking-wide hover:bg-brass-light transition-colors"
          >
            View Showreel Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-bone border-b border-bone/40 pb-1 text-sm hover:border-brass hover:text-brass transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
