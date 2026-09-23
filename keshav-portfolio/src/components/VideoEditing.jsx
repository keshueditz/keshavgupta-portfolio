import { videoProjects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import VideoCard from './VideoCard.jsx'

export default function VideoEditing() {
  const main = videoProjects.filter((p) => !p.isConcept)
  const concept = videoProjects.filter((p) => p.isConcept)

  return (
    <section id="video-editing" className="relative py-20 sm:py-28 bg-ink border-t border-ink-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Selected Work" title="Video Editing." />
        <p className="mt-4 text-bone-muted max-w-xl text-sm sm:text-base">
          Cinematic edits, talking-head content, podcast/interview cuts and real estate walkthroughs.
          Tap any thumbnail to play.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {main.map((p, i) => (
            <VideoCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {concept.length > 0 && (
          <div className="mt-16 pt-10 border-t border-dashed border-ink-border">
            <p className="text-bone-muted text-xs sm:text-sm uppercase tracking-wide mb-6">
              Concept Edit — AI-Generated Source Visuals
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {concept.map((p, i) => (
                <VideoCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
