import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function VideoCard({ project, index = 0, aspect = 'aspect-[9/16]' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    requestAnimationFrame(() => {
      videoRef.current?.play()
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative"
    >
      <div className={`relative ${aspect} bg-ink-surface overflow-hidden border border-ink-border`}>
        {project.isConcept && (
          <span className="absolute top-2 left-2 z-20 bg-claret text-bone text-[10px] sm:text-xs px-2 py-1 tracking-wide">
            {project.tag}
          </span>
        )}

        {!playing ? (
          <button
            onClick={handlePlay}
            className="absolute inset-0 w-full h-full"
            aria-label={`Play ${project.title}`}
          >
            <img
              src={project.poster}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/10 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-bone/90 flex items-center justify-center group-hover:bg-brass transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 7 5.5Z" fill="#0A0A0B" />
                </svg>
              </span>
            </span>
          </button>
        ) : (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.poster}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-bone font-semibold text-sm sm:text-base">{project.title}</h3>
        </div>
        {!project.isConcept && project.tag && (
          <p className="text-brass text-xs mt-1 tracking-wide">{project.tag}</p>
        )}
        <p className="text-bone-muted text-xs sm:text-sm mt-1.5 leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  )
}
